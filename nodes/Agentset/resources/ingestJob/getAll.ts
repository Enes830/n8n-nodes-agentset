import type { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
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
				operation: ['getAll'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results by paginating through all pages',
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['getAll'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'Max number of results to return per page',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'perPage',
			},
		},
	},
	{
		displayName: 'Page Size (when Return All is enabled)',
		name: 'pageSizeWhenReturnAll',
		type: 'number',
		default: 100,
		description: 'Number of results to fetch per page when using Return All',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['getAll'],
				returnAll: [true],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'perPage',
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
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Order',
				name: 'order',
				type: 'options',
				default: 'desc',
				options: [
					{ name: 'Ascending', value: 'asc' },
					{ name: 'Descending', value: 'desc' },
				],
				routing: {
					send: {
						type: 'query',
						property: 'order',
					},
				},
			},
			{
				displayName: 'Order By',
				name: 'orderBy',
				type: 'options',
				default: 'createdAt',
				options: [{ name: 'Created At', value: 'createdAt' }],
				routing: {
					send: {
						type: 'query',
						property: 'orderBy',
					},
				},
			},
			{
				displayName: 'Statuses',
				name: 'statuses',
				type: 'multiOptions',
				default: [],
				description: 'Filter by status',
				options: [
					{ name: 'Backlog', value: 'BACKLOG' },
					{ name: 'Cancelled', value: 'CANCELLED' },
					{ name: 'Cancelling', value: 'CANCELLING' },
					{ name: 'Completed', value: 'COMPLETED' },
					{ name: 'Deleting', value: 'DELETING' },
					{ name: 'Failed', value: 'FAILED' },
					{ name: 'Pre-Processing', value: 'PRE_PROCESSING' },
					{ name: 'Processing', value: 'PROCESSING' },
					{ name: 'Queued', value: 'QUEUED' },
					{ name: 'Queued For Delete', value: 'QUEUED_FOR_DELETE' },
					{ name: 'Queued For Resync', value: 'QUEUED_FOR_RESYNC' },
				],
				routing: {
					send: {
						type: 'query',
						property: 'statuses',
						value: '={{$value.join(",")}}',
					},
				},
			},
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
	{
		displayName: 'Cursor',
		name: 'cursor',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['getAll'],
				returnAll: [true],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'cursor',
			},
		},
	},
	{
		displayName: 'Cursor Direction',
		name: 'cursorDirection',
		type: 'hidden',
		default: 'forward',
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['getAll'],
				returnAll: [true],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'cursorDirection',
			},
		},
	},
];
