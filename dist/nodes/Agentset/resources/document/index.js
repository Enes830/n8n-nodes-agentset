"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentDescription = void 0;
const get_1 = require("./get");
const getAll_1 = require("./getAll");
const delete_1 = require("./delete");
exports.documentDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['document'],
            },
        },
        options: [
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a document',
                action: 'Delete a document',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/namespace/{{$parameter.namespaceId}}/documents/{{$parameter.documentId}}',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a document by ID',
                action: 'Get a document',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/namespace/{{$parameter.namespaceId}}/documents/{{$parameter.documentId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                description: 'Get many documents',
                action: 'Get many documents',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/namespace/{{$parameter.namespaceId}}/documents',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...get_1.getDescription,
    ...getAll_1.getAllDescription,
    ...delete_1.deleteDescription,
];
//# sourceMappingURL=index.js.map