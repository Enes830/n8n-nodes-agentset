import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { namespaceDescription } from './resources/namespace';
import { ingestJobDescription } from './resources/ingestJob';
import { documentDescription } from './resources/document';
import { hostingDescription } from './resources/hosting';
import { searchResourceDescription } from './resources/search';

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
			baseURL: 'https://api.agentset.ai/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
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
		],
	};
}
