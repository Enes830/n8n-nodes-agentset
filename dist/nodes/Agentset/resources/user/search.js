"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSearchDescription = void 0;
const showOnlyForSearch = {
    operation: ['search'],
    resource: ['user'],
};
exports.userSearchDescription = [
    {
        displayName: 'Namespace ID',
        name: 'namespaceId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForSearch,
        },
        description: 'The ID of the namespace to search in',
        routing: {
            request: {
                url: '=/namespace/{{$parameter.namespaceId}}/search',
            },
        },
    },
    {
        displayName: 'Query',
        name: 'query',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForSearch,
        },
        description: 'The search query string',
        routing: {
            send: {
                type: 'body',
                property: 'query',
            },
        },
    },
    {
        displayName: 'Top K',
        name: 'topK',
        type: 'number',
        default: 15,
        displayOptions: {
            show: showOnlyForSearch,
        },
        description: 'Number of top results to return',
        routing: {
            send: {
                type: 'body',
                property: 'topK',
            },
        },
    },
    {
        displayName: 'Include Metadata',
        name: 'includeMetadata',
        type: 'boolean',
        default: true,
        displayOptions: {
            show: showOnlyForSearch,
        },
        description: 'Whether to include metadata in the results',
        routing: {
            send: {
                type: 'body',
                property: 'includeMetadata',
            },
        },
    },
];
//# sourceMappingURL=search.js.map