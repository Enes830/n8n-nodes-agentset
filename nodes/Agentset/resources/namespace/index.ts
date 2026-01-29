import type { INodeProperties } from 'n8n-workflow';
import { getDescription } from './get';
import { getAllDescription } from './getAll';
import { createDescription } from './create';
import { updateDescription } from './update';
import { deleteDescription } from './delete';

export const namespaceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['namespace'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new namespace',
				action: 'Create a namespace',
				routing: {
					request: {
						method: 'POST',
						url: '/namespace',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a namespace',
				action: 'Delete a namespace',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/namespace/{{$parameter.namespaceId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a namespace by ID',
				action: 'Get a namespace',
				routing: {
					request: {
						method: 'GET',
						url: '=/namespace/{{$parameter.namespaceId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many namespaces',
				action: 'Get many namespaces',
				routing: {
					request: {
						method: 'GET',
						url: '/namespace',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a namespace',
				action: 'Update a namespace',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/namespace/{{$parameter.namespaceId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...getDescription,
	...getAllDescription,
	...createDescription,
	...updateDescription,
	...deleteDescription,
];
