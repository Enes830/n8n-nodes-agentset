import type { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
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
				resource: ['ingestJob'],
				operation: ['delete'],
			},
		},
	},
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'job_123',
		description: 'The ID of the ingest job to delete (prefixed with job_)',
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['delete'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['delete'],
			},
		},
		options: [
			{
				displayName: 'Tenant ID',
				name: 'tenantId',
				type: 'string',
				default: '',
				description: 'Optional tenant ID to use for the request',
				routing: {
					request: {
						headers: {
							'x-tenant-id': '={{$value}}',
						},
					},
				},
			},
		],
	},
];
