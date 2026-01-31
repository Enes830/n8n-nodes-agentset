import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AgentsetApi implements ICredentialType {
	name = 'agentsetApi';

	displayName = 'Agentset API';
	icon = { light: 'file:agentset.svg', dark: 'file:agentset.dark.svg' } as const;

	documentationUrl = 'https://docs.agentset.ai/api-reference/tokens';

	properties: INodeProperties[] = [
		{
			displayName: 'Api Key',
			name: 'apikey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apikey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.agentset.ai/v1',
			url: '/namespace',
			method: 'GET',
		},
	};
}
