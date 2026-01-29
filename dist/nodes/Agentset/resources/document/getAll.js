"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDescription = void 0;
exports.getAllDescription = [
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
                operation: ['getAll'],
            },
        },
    },
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        default: false,
        description: 'Whether to return all results or only up to a given limit',
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['getAll'],
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
            maxValue: 100,
        },
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['getAll'],
                returnAll: [false],
            },
        },
        routing: {
            send: {
                type: 'query',
                property: 'perPage',
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
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Ingest Job ID',
                name: 'ingestJobId',
                type: 'string',
                default: '',
                description: 'Filter documents by ingest job ID',
                routing: {
                    send: {
                        type: 'query',
                        property: 'ingestJobId',
                    },
                },
            },
            {
                displayName: 'Order',
                name: 'order',
                type: 'options',
                default: 'desc',
                options: [
                    { name: 'Ascending', value: 'asc' },
                    { name: 'Descending', value: 'desc' },
                ],
                routing: {
                    send: {
                        type: 'query',
                        property: 'order',
                    },
                },
            },
            {
                displayName: 'Order By',
                name: 'orderBy',
                type: 'options',
                default: 'createdAt',
                options: [
                    { name: 'Created At', value: 'createdAt' },
                ],
                routing: {
                    send: {
                        type: 'query',
                        property: 'orderBy',
                    },
                },
            },
            {
                displayName: 'Statuses',
                name: 'statuses',
                type: 'multiOptions',
                default: [],
                description: 'Filter by status',
                options: [
                    { name: 'Backlog', value: 'BACKLOG' },
                    { name: 'Cancelled', value: 'CANCELLED' },
                    { name: 'Cancelling', value: 'CANCELLING' },
                    { name: 'Completed', value: 'COMPLETED' },
                    { name: 'Deleting', value: 'DELETING' },
                    { name: 'Failed', value: 'FAILED' },
                    { name: 'Pre-Processing', value: 'PRE_PROCESSING' },
                    { name: 'Processing', value: 'PROCESSING' },
                    { name: 'Queued', value: 'QUEUED' },
                    { name: 'Queued For Delete', value: 'QUEUED_FOR_DELETE' },
                    { name: 'Queued For Resync', value: 'QUEUED_FOR_RESYNC' },
                ],
                routing: {
                    send: {
                        type: 'query',
                        property: 'statuses',
                        value: '={{$value.join(",")}}',
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
];
//# sourceMappingURL=getAll.js.map