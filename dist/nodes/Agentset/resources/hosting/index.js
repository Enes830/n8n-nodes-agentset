"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostingDescription = void 0;
const enable_1 = require("./enable");
const get_1 = require("./get");
const update_1 = require("./update");
const delete_1 = require("./delete");
exports.hostingDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['hosting'],
            },
        },
        options: [
            {
                name: 'Disable',
                value: 'delete',
                description: 'Disable hosting for a namespace',
                action: 'Disable hosting',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/namespace/{{$parameter.namespaceId}}/hosting',
                    },
                },
            },
            {
                name: 'Enable',
                value: 'enable',
                description: 'Enable hosting for a namespace',
                action: 'Enable hosting',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/namespace/{{$parameter.namespaceId}}/hosting',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get hosting settings for a namespace',
                action: 'Get hosting settings',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/namespace/{{$parameter.namespaceId}}/hosting',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update hosting settings for a namespace',
                action: 'Update hosting settings',
                routing: {
                    request: {
                        method: 'PATCH',
                        url: '=/namespace/{{$parameter.namespaceId}}/hosting',
                    },
                },
            },
        ],
        default: 'get',
    },
    ...enable_1.enableDescription,
    ...get_1.getDescription,
    ...update_1.updateDescription,
    ...delete_1.deleteDescription,
];
//# sourceMappingURL=index.js.map