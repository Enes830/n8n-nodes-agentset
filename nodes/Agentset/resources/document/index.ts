import type { INodeProperties } from 'n8n-workflow';
import { getDescription } from './get';
import { getAllDescription } from './getAll';
import { deleteDescription } from './delete';

export const documentDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['document'],
			},
		},
		options: [
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a document',
				action: 'Delete a document',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/namespace/{{$parameter.namespaceId}}/documents/{{$parameter.documentId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a document by ID',
				action: 'Get a document',
				routing: {
					request: {
						method: 'GET',
						url: '=/namespace/{{$parameter.namespaceId}}/documents/{{$parameter.documentId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many documents',
				action: 'Get many documents',
				routing: {
					request: {
						method: 'GET',
						url: '=/namespace/{{$parameter.namespaceId}}/documents',
					},
				},
			},
		],
		default: 'getAll',
	},
	...getDescription,
	...getAllDescription,
	...deleteDescription,
];
