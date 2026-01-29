import type { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['namespace'],
				operation: ['getAll'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		displayOptions: {
			show: {
				resource: ['namespace'],
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
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['namespace'],
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
				options: [
					{ name: 'Created At', value: 'createdAt' },
				],
				routing: {
					send: {
						type: 'query',
						property: 'orderBy',
					},
				},
			},
		],
	},
];
