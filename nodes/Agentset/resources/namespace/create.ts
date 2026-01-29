import type { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		description: 'The name of the namespace',
		displayOptions: {
			show: {
				resource: ['namespace'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Slug',
		name: 'slug',
		type: 'string',
		required: true,
		default: '',
		description: 'The unique slug for the namespace',
		displayOptions: {
			show: {
				resource: ['namespace'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'slug',
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
				resource: ['namespace'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Embedding Model',
				name: 'embeddingModel',
				type: 'options',
				default: 'openai:text-embedding-3-small',
				description: 'The embedding model to use',
				options: [
					{ name: 'OpenAI Text Embedding 3 Small', value: 'openai:text-embedding-3-small' },
					{ name: 'OpenAI Text Embedding 3 Large', value: 'openai:text-embedding-3-large' },
					{ name: 'Cohere Embed Multilingual V3', value: 'cohere:embed-multilingual-v3.0' },
					{ name: 'Cohere Embed English V3', value: 'cohere:embed-english-v3.0' },
				],
				routing: {
					send: {
						type: 'body',
						property: 'embeddingConfig.model',
					},
				},
			},
			{
				displayName: 'Vector Store Type',
				name: 'vectorStoreType',
				type: 'options',
				default: 'pinecone',
				description: 'The vector store type to use',
				options: [
					{ name: 'Pinecone', value: 'pinecone' },
					{ name: 'Qdrant', value: 'qdrant' },
				],
				routing: {
					send: {
						type: 'body',
						property: 'vectorStoreConfig.type',
					},
				},
			},
		],
	},
];
