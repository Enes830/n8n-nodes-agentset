import type { INodeProperties } from 'n8n-workflow';

export const reIngestDescription: INodeProperties[] = [
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
				operation: ['reIngest'],
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
		description: 'The ID of the ingest job to re-ingest (prefixed with job_)',
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['reIngest'],
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
				operation: ['reIngest'],
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
