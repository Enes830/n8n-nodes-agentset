import type { INodeProperties } from 'n8n-workflow';

export const searchDescription: INodeProperties[] = [
	{
		displayName: 'Namespace ID',
		name: 'namespaceId',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'ns_123',
		description: 'The ID of the namespace to search (prefixed with ns_)',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search'],
			},
		},
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		description: 'The query to search for',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'query',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search'],
			},
		},
		options: [
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'json',
				default: '{}',
				description: 'A filter object to apply to the results',
				routing: {
					send: {
						type: 'body',
						property: 'filter',
						value: '={{ JSON.parse($value) }}',
					},
				},
			},
			{
				displayName: 'Include Metadata',
				name: 'includeMetadata',
				type: 'boolean',
				default: true,
				description: 'Whether to include metadata in the results',
				routing: {
					send: {
						type: 'body',
						property: 'includeMetadata',
					},
				},
			},
			{
				displayName: 'Include Relationships',
				name: 'includeRelationships',
				type: 'boolean',
				default: false,
				description: 'Whether to include relationships in the results',
				routing: {
					send: {
						type: 'body',
						property: 'includeRelationships',
					},
				},
			},
			{
				displayName: 'Keyword Filter',
				name: 'keywordFilter',
				type: 'string',
				default: '',
				description: 'A keyword filter to apply to the results',
				routing: {
					send: {
						type: 'body',
						property: 'keywordFilter',
					},
				},
			},
			{
				displayName: 'Min Score',
				name: 'minScore',
				type: 'number',
				typeOptions: {
					minValue: 0,
					maxValue: 1,
					numberPrecision: 2,
				},
				default: 0,
				description: 'The minimum score threshold for results (0-1)',
				routing: {
					send: {
						type: 'body',
						property: 'minScore',
					},
				},
			},
			{
				displayName: 'Mode',
				name: 'mode',
				type: 'options',
				default: 'semantic',
				description: 'The search mode to use',
				options: [
					{ name: 'Keyword', value: 'keyword' },
					{ name: 'Semantic', value: 'semantic' },
				],
				routing: {
					send: {
						type: 'body',
						property: 'mode',
					},
				},
			},
			{
				displayName: 'Rerank',
				name: 'rerank',
				type: 'boolean',
				default: true,
				description: 'Whether to rerank the results',
				routing: {
					send: {
						type: 'body',
						property: 'rerank',
					},
				},
			},
			{
				displayName: 'Rerank Limit',
				name: 'rerankLimit',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 10,
				description: 'The number of results to return after reranking (defaults to topK)',
				routing: {
					send: {
						type: 'body',
						property: 'rerankLimit',
					},
				},
			},
			{
				displayName: 'Rerank Model',
				name: 'rerankModel',
				type: 'options',
				default: 'zeroentropy:zerank-2',
				description: 'The reranking model to use',
				options: [
					{ name: 'Cohere Rerank English V3.0', value: 'cohere:rerank-english-v3.0' },
					{ name: 'Cohere Rerank Multilingual V3.0', value: 'cohere:rerank-multilingual-v3.0' },
					{ name: 'Cohere Rerank V3.5', value: 'cohere:rerank-v3.5' },
					{ name: 'ZeroEntropy Zerank 1', value: 'zeroentropy:zerank-1' },
					{ name: 'ZeroEntropy Zerank 1 Small', value: 'zeroentropy:zerank-1-small' },
					{ name: 'ZeroEntropy Zerank 2', value: 'zeroentropy:zerank-2' },
				],
				routing: {
					send: {
						type: 'body',
						property: 'rerankModel',
					},
				},
			},
			{
				displayName: 'Tenant ID',
				name: 'tenantId',
				type: 'string',
				default: '',
				description:
					'Optional tenant ID to use for the request. Must be alphanumeric and up to 64 characters.',
				routing: {
					request: {
						headers: {
							'x-tenant-id': '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Top K',
				name: 'topK',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 10,
				description: 'The number of results to fetch from the vector store (1-100)',
				routing: {
					send: {
						type: 'body',
						property: 'topK',
					},
				},
			},
		],
	},
];
