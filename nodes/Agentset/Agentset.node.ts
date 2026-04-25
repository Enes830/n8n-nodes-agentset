import {
	NodeConnectionTypes,
	type IHttpRequestMethods,
	type INodeType,
	type INodeTypeDescription,
	type INodeProperties,
	type IExecuteFunctions,
	type IDataObject,
	type NodeApiError,
	type INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { namespaceDescription } from './resources/namespace';
import { ingestJobDescription } from './resources/ingestJob';
import { documentDescription } from './resources/document';
import { hostingDescription } from './resources/hosting';
import { searchResourceDescription } from './resources/search';

const AGENTSET_API_BASE_URL = 'https://api.agentset.ai/v1';

type AgentsetRoutingRequest = {
	method?: string;
	url?: string;
	headers?: IDataObject;
};

type AgentsetRouting = {
	send?: {
		type?: 'query' | 'body';
		property?: string;
		value?: string;
		preSend?: Array<(
			this: unknown,
			requestOptions: { qs: IDataObject; body: IDataObject; headers: IDataObject },
		) => unknown>;
	};
	request?: AgentsetRoutingRequest;
};

type AgentsetProperty = INodeProperties & {
	routing?: AgentsetRouting;
	options?: AgentsetProperty[];
};

const agentsetProperties: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Document',
				value: 'document',
			},
			{
				name: 'Hosting',
				value: 'hosting',
			},
			{
				name: 'Ingest Job',
				value: 'ingestJob',
			},
			{
				name: 'Namespace',
				value: 'namespace',
			},
			{
				name: 'Search',
				value: 'search',
			},
		],
		default: 'namespace',
	},
	...namespaceDescription,
	...ingestJobDescription,
	...documentDescription,
	...hostingDescription,
	...searchResourceDescription,
];

function isObject(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function resolveExpressionValue(expression: string, value: unknown): unknown {
	if (!expression.startsWith('={{') || !expression.endsWith('}}')) {
		return expression;
	}

	const jsExpression = expression.slice(3, -2).trim();

	try {
		// These expressions are authored in the node definition, not user input.
		// The small evaluator keeps routing transformations consistent with the UI.
		return Function('$value', `return (${jsExpression});`)(value);
	} catch {
		return value;
	}
}

function setValueAtPath(target: IDataObject, path: string, value: unknown): void {
	const pathSegments = path.split('.');
	let currentTarget: IDataObject = target;

	for (let index = 0; index < pathSegments.length - 1; index++) {
		const segment = pathSegments[index];
		if (!isObject(currentTarget[segment])) {
			currentTarget[segment] = {};
		}
		currentTarget = currentTarget[segment] as IDataObject;
	}

	(currentTarget as Record<string, unknown>)[pathSegments[pathSegments.length - 1]] = value;
}

function resolveParameterTemplate(template: string, getParameterValue: (name: string) => unknown): string {
	return template
		.replace(/\{\{\$parameter\.([a-zA-Z0-9_]+)\}\}/g, (_match, parameterName: string) => {
			const parameterValue = getParameterValue(parameterName);
			return parameterValue === undefined || parameterValue === null ? '' : String(parameterValue);
		})
		.replace(/^=/, '');
}

function isVisibleForSelection(
	property: AgentsetProperty,
	resource: string,
	operation: string,
	getParameterValue: (name: string) => unknown,
): boolean {
	const show = property.displayOptions?.show;
	if (!show) {
		return true;
	}

	for (const [key, allowedValues] of Object.entries(show)) {
		const actualValue = key === 'resource' ? resource : key === 'operation' ? operation : getParameterValue(key);

		if (Array.isArray(allowedValues)) {
			if (!allowedValues.includes(actualValue as never)) {
				return false;
			}
			continue;
		}

		if (actualValue !== allowedValues) {
			return false;
		}
	}

	return true;
}

function findOperationRequest(resource: string, operation: string): AgentsetRoutingRequest | undefined {
	for (const property of agentsetProperties as AgentsetProperty[]) {
		if (property.name !== 'operation') {
			continue;
		}

		const showResource = property.displayOptions?.show?.resource;
		if (showResource && Array.isArray(showResource) && !showResource.includes(resource as never)) {
			continue;
		}

		const operationOption = property.options?.find(
			(option) => 'value' in option && option.value === operation,
		) as (AgentsetProperty & { value: string; routing?: AgentsetRouting }) | undefined;
		return operationOption?.routing?.request;
	}

	return undefined;
}

async function applyRoutingFromProperty(
	request: { qs: IDataObject; body: IDataObject; headers: IDataObject },
	nodeContext: IExecuteFunctions,
	property: AgentsetProperty,
	propertyValue: unknown,
	resource: string,
	operation: string,
	getParameterValue: (name: string) => unknown,
): Promise<void> {
	const routing = property.routing;
	if (routing?.send?.property && routing.send.type) {
		const transformedValue = routing.send.value
			? resolveExpressionValue(routing.send.value, propertyValue)
			: propertyValue;

		if (transformedValue !== undefined && transformedValue !== null && transformedValue !== '') {
			if (routing.send.type === 'query') {
				request.qs[routing.send.property] = transformedValue;
			}
			if (routing.send.type === 'body') {
				setValueAtPath(request.body, routing.send.property, transformedValue);
			}
		}
	}

	if (routing?.send?.preSend) {
		for (const preSend of routing.send.preSend) {
			const maybeUpdatedRequest = (await Promise.resolve(preSend.call(nodeContext as never, request))) as
				| { qs?: IDataObject; body?: IDataObject; headers?: IDataObject }
				| undefined;
			if (maybeUpdatedRequest) {
				request.qs = maybeUpdatedRequest.qs ?? request.qs;
				request.body = maybeUpdatedRequest.body ?? request.body;
				request.headers = maybeUpdatedRequest.headers ?? request.headers;
			}
		}
	}

	if (routing?.request?.headers) {
		for (const [headerName, headerValue] of Object.entries(routing.request.headers)) {
			const resolvedHeaderValue = typeof headerValue === 'string' ? resolveExpressionValue(headerValue, propertyValue) : headerValue;
			if (resolvedHeaderValue !== undefined && resolvedHeaderValue !== null && resolvedHeaderValue !== '') {
				request.headers[headerName] = resolvedHeaderValue;
			}
		}
	}

	if (property.type === 'collection' && isObject(propertyValue) && Array.isArray(property.options)) {
		for (const option of property.options) {
			if (!isVisibleForSelection(option, resource, operation, getParameterValue)) {
				continue;
			}

			const nestedValue = propertyValue[option.name];
			if (nestedValue !== undefined) {
				await applyRoutingFromProperty(request, nodeContext, option, nestedValue, resource, operation, getParameterValue);
			}
		}
	}
}

async function buildRequestConfig(
	this: IExecuteFunctions,
	resource: string,
	operation: string,
): Promise<{ method: IHttpRequestMethods; url: string; qs: IDataObject; body: IDataObject; headers: IDataObject }> {
	const requestDefaults = { baseURL: AGENTSET_API_BASE_URL };
	const getParameterValue = (name: string): unknown => this.getNodeParameter(name, 0, undefined);
	const operationRequest = findOperationRequest(resource, operation);

	if (!operationRequest?.url) {
		throw new NodeOperationError(this.getNode(), `No routing request found for ${resource}.${operation}`);
	}

	const request = {
		method: (operationRequest.method ?? 'GET') as IHttpRequestMethods,
		url: `${requestDefaults.baseURL}${resolveParameterTemplate(operationRequest.url, getParameterValue)}`,
		qs: {} as IDataObject,
		body: {} as IDataObject,
		headers: {} as IDataObject,
	};

	for (const property of agentsetProperties as AgentsetProperty[]) {
		if (property.name === 'resource' || property.name === 'operation') {
			continue;
		}

		if (!isVisibleForSelection(property, resource, operation, getParameterValue)) {
			continue;
		}

		const propertyValue = getParameterValue(property.name);
		if (propertyValue === undefined) {
			continue;
		}

		await applyRoutingFromProperty(request, this, property, propertyValue, resource, operation, getParameterValue);
	}

	return request;
}

function extractResponseData(response: unknown): IDataObject[] {
	if (Array.isArray(response)) {
		return response.filter((item): item is IDataObject => isObject(item));
	}

	if (!isObject(response) || !Array.isArray(response.data)) {
		return [];
	}

	return response.data.filter((item): item is IDataObject => isObject(item));
}

function extractNextCursor(response: unknown): string | null {
	if (!isObject(response)) {
		return null;
	}

	const pagination = isObject(response.pagination) ? response.pagination : undefined;
	const cursorCandidates = [
		pagination?.nextCursor,
		pagination?.cursor,
		pagination?.next,
		pagination?.next_cursor,
		response.nextCursor,
		response.cursor,
		response.next,
		response.next_cursor,
	];

	for (const candidate of cursorCandidates) {
		if (typeof candidate === 'string' && candidate.length > 0) {
			return candidate;
		}
	}

	return null;
}

export class Agentset implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Agentset',
		name: 'agentset',
		icon: { light: 'file:agentset.svg', dark: 'file:agentset.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Agentset API',
		defaults: {
			name: 'Agentset',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'agentsetApi', required: true }],
		requestDefaults: {
			baseURL: AGENTSET_API_BASE_URL,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: agentsetProperties,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const requestConfig = await buildRequestConfig.call(this, resource, operation);
		const isCursorPaginatedGetAll =
			(resource === 'document' || resource === 'ingestJob') && operation === 'getAll';

		if (isCursorPaginatedGetAll) {
			const returnAll = this.getNodeParameter('returnAll', 0, false) as boolean;
			const limit = this.getNodeParameter('limit', 0, 50) as number;
			const pageSize = this.getNodeParameter('pageSizeWhenReturnAll', 0, 100) as number;
			const perPage = returnAll ? pageSize : Math.min(limit, 100);
			const collectedData: IDataObject[] = [];

			try {
				let nextCursor =
					typeof requestConfig.qs.cursor === 'string' && requestConfig.qs.cursor.length > 0
						? requestConfig.qs.cursor
						: null;

				if (returnAll) {
					while (true) {
						const response = await this.helpers.httpRequestWithAuthentication.call(this, 'agentsetApi', {
							method: requestConfig.method,
							url: requestConfig.url,
							qs: { ...requestConfig.qs, perPage, ...(nextCursor ? { cursor: nextCursor } : {}) },
							body: requestConfig.body,
							headers: requestConfig.headers,
							json: true,
						});

						collectedData.push(...extractResponseData(response));
						nextCursor = extractNextCursor(response);

						if (!nextCursor) {
							break;
						}
					}
				} else {
					const response = await this.helpers.httpRequestWithAuthentication.call(this, 'agentsetApi', {
						method: requestConfig.method,
						url: requestConfig.url,
						qs: { ...requestConfig.qs, perPage },
						body: requestConfig.body,
						headers: requestConfig.headers,
						json: true,
					});

					collectedData.push(...extractResponseData(response).slice(0, limit));
				}

				return [this.helpers.returnJsonArray(collectedData)];
			} catch (error) {
				if (this.continueOnFail()) {
					return [this.helpers.returnJsonArray({ error: (error as NodeApiError).message })];
				}
				throw error;
			}
		}

		try {
			const responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'agentsetApi', {
				method: requestConfig.method,
				url: requestConfig.url,
				qs: requestConfig.qs,
				body: requestConfig.body,
				headers: requestConfig.headers,
				json: true,
			});

			return [this.helpers.returnJsonArray(Array.isArray(responseData) ? responseData : [responseData as IDataObject])];
		} catch (error) {
			if (this.continueOnFail()) {
				return [this.helpers.returnJsonArray({ error: (error as NodeApiError).message })];
			}
			throw error;
		}
	}
}
