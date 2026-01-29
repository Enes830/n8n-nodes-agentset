import type { INodeProperties } from 'n8n-workflow';

export const enableDescription: INodeProperties[] = [
	{
		displayName: 'Namespace ID',
		name: 'namespaceId',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'ns_123',
		description: 'The ID of the namespace (prefixed with ns_)',
		displayOptions: {
			show: {
				resource: ['hosting'],
				operation: ['enable'],
			},
		},
	},
];
