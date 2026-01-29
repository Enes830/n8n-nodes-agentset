import type { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
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
				resource: ['hosting'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['hosting'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'AI Provider',
				name: 'aiProvider',
				type: 'options',
				default: 'openai',
				options: [
					{ name: 'Azure', value: 'azure' },
					{ name: 'OpenAI', value: 'openai' },
				],
				routing: {
					send: {
						type: 'body',
						property: 'aiProvider',
					},
				},
			},
			{
				displayName: 'Allow Origin',
				name: 'allowOrigin',
				type: 'string',
				default: '',
				description: 'Allowed origin for CORS (e.g., https://example.com)',
				routing: {
					send: {
						type: 'body',
						property: 'allowOrigin',
					},
				},
			},
			{
				displayName: 'Chat Model',
				name: 'chatModel',
				type: 'string',
				default: '',
				description: 'The chat model to use (e.g., gpt-4o)',
				routing: {
					send: {
						type: 'body',
						property: 'chatModel',
					},
				},
			},
			{
				displayName: 'Custom Instructions',
				name: 'customInstructions',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Custom instructions for the AI assistant',
				routing: {
					send: {
						type: 'body',
						property: 'customInstructions',
					},
				},
			},
			{
				displayName: 'Initial Messages',
				name: 'initialMessages',
				type: 'json',
				default: '[]',
				description: 'Initial messages to display in the chat',
				routing: {
					send: {
						type: 'body',
						property: 'initialMessages',
						preSend: [
							async function (this, requestOptions) {
								const initialMessages = this.getNodeParameter('updateFields.initialMessages') as string;
								if (initialMessages) {
									requestOptions.body = requestOptions.body || {};
									(requestOptions.body as Record<string, unknown>).initialMessages = JSON.parse(initialMessages);
								}
								return requestOptions;
							},
						],
					},
				},
			},
			{
				displayName: 'Public',
				name: 'public',
				type: 'boolean',
				default: false,
				description: 'Whether the hosted chat is publicly accessible',
				routing: {
					send: {
						type: 'body',
						property: 'public',
					},
				},
			},
			{
				displayName: 'Rate Limit',
				name: 'rateLimit',
				type: 'number',
				default: 10,
				description: 'Maximum number of requests per minute',
				routing: {
					send: {
						type: 'body',
						property: 'rateLimit',
					},
				},
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
				description: 'URL slug for the hosted chat',
				routing: {
					send: {
						type: 'body',
						property: 'slug',
					},
				},
			},
			{
				displayName: 'Suggested Questions',
				name: 'suggestedQuestions',
				type: 'json',
				default: '[]',
				description: 'Suggested questions to display in the chat',
				routing: {
					send: {
						type: 'body',
						property: 'suggestedQuestions',
						preSend: [
							async function (this, requestOptions) {
								const suggestedQuestions = this.getNodeParameter('updateFields.suggestedQuestions') as string;
								if (suggestedQuestions) {
									requestOptions.body = requestOptions.body || {};
									(requestOptions.body as Record<string, unknown>).suggestedQuestions = JSON.parse(suggestedQuestions);
								}
								return requestOptions;
							},
						],
					},
				},
			},
			{
				displayName: 'Theme',
				name: 'theme',
				type: 'options',
				default: 'system',
				options: [
					{ name: 'Dark', value: 'dark' },
					{ name: 'Light', value: 'light' },
					{ name: 'System', value: 'system' },
				],
				routing: {
					send: {
						type: 'body',
						property: 'theme',
					},
				},
			},
		],
	},
];
