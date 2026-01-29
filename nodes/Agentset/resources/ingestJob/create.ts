import type { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
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
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Payload Type',
		name: 'payloadType',
		type: 'options',
		required: true,
		default: 'TEXT',
		description: 'The type of payload to ingest',
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['create'],
			},
		},
		options: [
			{ name: 'Text', value: 'TEXT' },
			{ name: 'File URL', value: 'FILE' },
			{ name: 'Crawl', value: 'CRAWL' },
			{ name: 'YouTube', value: 'YOUTUBE' },
		],
		routing: {
			send: {
				type: 'body',
				property: 'payload.type',
			},
		},
	},
	// TEXT payload fields
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		required: true,
		default: '',
		description: 'The text content to ingest',
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['create'],
				payloadType: ['TEXT'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'payload.text',
			},
		},
	},
	// FILE payload fields
	{
		displayName: 'File URL',
		name: 'fileUrl',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://example.com/document.pdf',
		description: 'The URL of the file to ingest',
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['create'],
				payloadType: ['FILE'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'payload.fileUrl',
			},
		},
	},
	// CRAWL payload fields
	{
		displayName: 'URL to Crawl',
		name: 'crawlUrl',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://example.com',
		description: 'The starting URL to crawl',
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['create'],
				payloadType: ['CRAWL'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'payload.url',
			},
		},
	},
	// YOUTUBE payload fields
	{
		displayName: 'YouTube URLs',
		name: 'youtubeUrls',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://www.youtube.com/watch?v=...',
		description: 'Comma-separated list of YouTube video, channel, or playlist URLs',
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['create'],
				payloadType: ['YOUTUBE'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'payload.urls',
				value: '={{$value.split(",").map(u => u.trim())}}',
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
				resource: ['ingestJob'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Chunk Size',
				name: 'chunkSize',
				type: 'number',
				default: 2048,
				description: 'Chunk size in characters',
				typeOptions: {
					minValue: 32,
				},
				routing: {
					send: {
						type: 'body',
						property: 'config.chunkSize',
					},
				},
			},
			{
				displayName: 'External ID',
				name: 'externalId',
				type: 'string',
				default: '',
				description: 'A unique external ID for the ingest job',
				routing: {
					send: {
						type: 'body',
						property: 'externalId',
					},
				},
			},
			{
				displayName: 'File Name',
				name: 'fileName',
				type: 'string',
				default: '',
				description: 'The name of the file',
				routing: {
					send: {
						type: 'body',
						property: 'payload.fileName',
					},
				},
			},
			{
				displayName: 'Language Code',
				name: 'languageCode',
				type: 'options',
				default: 'en',
				description: 'Language code for text processing',
				options: [
					{ name: 'Arabic', value: 'ar' },
					{ name: 'Chinese', value: 'zh' },
					{ name: 'English', value: 'en' },
					{ name: 'French', value: 'fr' },
					{ name: 'German', value: 'de' },
					{ name: 'Japanese', value: 'jp' },
					{ name: 'Korean', value: 'kr' },
					{ name: 'Portuguese', value: 'pt' },
					{ name: 'Russian', value: 'ru' },
					{ name: 'Spanish', value: 'es' },
				],
				routing: {
					send: {
						type: 'body',
						property: 'config.languageCode',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the ingest job',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Processing Mode',
				name: 'mode',
				type: 'options',
				default: 'balanced',
				description: 'Processing mode for the parser',
				options: [
					{ name: 'Accurate', value: 'accurate' },
					{ name: 'Balanced', value: 'balanced' },
					{ name: 'Fast', value: 'fast' },
				],
				routing: {
					send: {
						type: 'body',
						property: 'config.mode',
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
	// Crawl-specific options
	{
		displayName: 'Crawl Options',
		name: 'crawlOptions',
		type: 'collection',
		placeholder: 'Add Crawl Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['create'],
				payloadType: ['CRAWL'],
			},
		},
		options: [
			{
				displayName: 'Max Depth',
				name: 'maxDepth',
				type: 'number',
				default: 5,
				description: 'Maximum depth to follow links from the starting URL',
				typeOptions: {
					minValue: 1,
				},
				routing: {
					send: {
						type: 'body',
						property: 'payload.maxDepth',
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
				},
				routing: {
					send: {
						type: 'body',
						property: 'payload.limit',
					},
				},
			},
			{
				displayName: 'Include Paths',
				name: 'includePaths',
				type: 'string',
				default: '',
				description: 'Comma-separated list of path prefixes to include',
				routing: {
					send: {
						type: 'body',
						property: 'payload.includePaths',
						value: '={{$value ? $value.split(",").map(p => p.trim()) : undefined}}',
					},
				},
			},
			{
				displayName: 'Exclude Paths',
				name: 'excludePaths',
				type: 'string',
				default: '',
				description: 'Comma-separated list of path prefixes to exclude',
				routing: {
					send: {
						type: 'body',
						property: 'payload.excludePaths',
						value: '={{$value ? $value.split(",").map(p => p.trim()) : undefined}}',
					},
				},
			},
		],
	},
	// YouTube-specific options
	{
		displayName: 'YouTube Options',
		name: 'youtubeOptions',
		type: 'collection',
		placeholder: 'Add YouTube Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['ingestJob'],
				operation: ['create'],
				payloadType: ['YOUTUBE'],
			},
		},
		options: [
			{
				displayName: 'Transcript Languages',
				name: 'transcriptLanguages',
				type: 'string',
				default: 'en',
				description: 'Comma-separated list of language codes for transcripts',
				routing: {
					send: {
						type: 'body',
						property: 'payload.transcriptLanguages',
						value: '={{$value.split(",").map(l => l.trim())}}',
					},
				},
			},
			{
				displayName: 'Include Metadata',
				name: 'includeMetadata',
				type: 'boolean',
				default: false,
				description: 'Whether to include video metadata',
				routing: {
					send: {
						type: 'body',
						property: 'payload.includeMetadata',
					},
				},
			},
		],
	},
];
