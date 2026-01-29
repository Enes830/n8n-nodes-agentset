"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDescription = void 0;
exports.deleteDescription = [
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
                resource: ['document'],
                operation: ['delete'],
            },
        },
    },
    {
        displayName: 'Document ID',
        name: 'documentId',
        type: 'string',
        required: true,
        default: '',
        placeholder: 'doc_123',
        description: 'The ID of the document to delete (prefixed with doc_)',
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['delete'],
            },
        },
    },
    {
        displayName: 'Options',
        name: 'options',
        type: 'collection',
        placeholder: 'Add Option',
        default: {},
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['delete'],
            },
        },
        options: [
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
];
//# sourceMappingURL=delete.js.map