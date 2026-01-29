import type { INodeProperties } from 'n8n-workflow';
import { getDescription } from './get';
import { getAllDescription } from './getAll';
import { createDescription } from './create';
import { deleteDescription } from './delete';
import { reIngestDescription } from './reIngest';

export const ingestJobDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ingestJob'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new ingest job',
				action: 'Create an ingest job',
				routing: {
					request: {
						method: 'POST',
						url: '=/namespace/{{$parameter.namespaceId}}/ingest-jobs',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an ingest job',
				action: 'Delete an ingest job',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/namespace/{{$parameter.namespaceId}}/ingest-jobs/{{$parameter.jobId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an ingest job by ID',
				action: 'Get an ingest job',
				routing: {
					request: {
						method: 'GET',
						url: '=/namespace/{{$parameter.namespaceId}}/ingest-jobs/{{$parameter.jobId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many ingest jobs',
				action: 'Get many ingest jobs',
				routing: {
					request: {
						method: 'GET',
						url: '=/namespace/{{$parameter.namespaceId}}/ingest-jobs',
					},
				},
			},
			{
				name: 'Re-Ingest',
				value: 'reIngest',
				description: 'Re-ingest a job',
				action: 'Re ingest a job',
				routing: {
					request: {
						method: 'POST',
						url: '=/namespace/{{$parameter.namespaceId}}/ingest-jobs/{{$parameter.jobId}}/re-ingest',
					},
				},
			},
		],
		default: 'getAll',
	},
	...getDescription,
	...getAllDescription,
	...createDescription,
	...deleteDescription,
	...reIngestDescription,
];
