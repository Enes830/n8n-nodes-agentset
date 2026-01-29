import type { INodeProperties } from 'n8n-workflow';
import { searchDescription } from './search';

export const searchResourceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['search'],
			},
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				description: 'Search a namespace for a query',
				action: 'Search a namespace',
				routing: {
					request: {
						method: 'POST',
						url: '=/namespace/{{$parameter.namespaceId}}/search',
					},
				},
			},
		],
		default: 'search',
	},
	...searchDescription,
];
