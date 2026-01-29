import type { INodeProperties } from 'n8n-workflow';
import { enableDescription } from './enable';
import { getDescription } from './get';
import { updateDescription } from './update';
import { deleteDescription } from './delete';

export const hostingDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['hosting'],
			},
		},
		options: [
			{
				name: 'Disable',
				value: 'delete',
				description: 'Disable hosting for a namespace',
				action: 'Disable hosting',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/namespace/{{$parameter.namespaceId}}/hosting',
					},
				},
			},
			{
				name: 'Enable',
				value: 'enable',
				description: 'Enable hosting for a namespace',
				action: 'Enable hosting',
				routing: {
					request: {
						method: 'POST',
						url: '=/namespace/{{$parameter.namespaceId}}/hosting',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get hosting settings for a namespace',
				action: 'Get hosting settings',
				routing: {
					request: {
						method: 'GET',
						url: '=/namespace/{{$parameter.namespaceId}}/hosting',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update hosting settings for a namespace',
				action: 'Update hosting settings',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/namespace/{{$parameter.namespaceId}}/hosting',
					},
				},
			},
		],
		default: 'get',
	},
	...enableDescription,
	...getDescription,
	...updateDescription,
	...deleteDescription,
];
