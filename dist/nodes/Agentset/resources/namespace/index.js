"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.namespaceDescription = void 0;
const get_1 = require("./get");
const getAll_1 = require("./getAll");
const create_1 = require("./create");
const update_1 = require("./update");
const delete_1 = require("./delete");
exports.namespaceDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['namespace'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new namespace',
                action: 'Create a namespace',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/namespace',
                    },
                },
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a namespace',
                action: 'Delete a namespace',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/namespace/{{$parameter.namespaceId}}',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a namespace by ID',
                action: 'Get a namespace',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/namespace/{{$parameter.namespaceId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                description: 'Get many namespaces',
                action: 'Get many namespaces',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/namespace',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a namespace',
                action: 'Update a namespace',
                routing: {
                    request: {
                        method: 'PATCH',
                        url: '=/namespace/{{$parameter.namespaceId}}',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...get_1.getDescription,
    ...getAll_1.getAllDescription,
    ...create_1.createDescription,
    ...update_1.updateDescription,
    ...delete_1.deleteDescription,
];
//# sourceMappingURL=index.js.map