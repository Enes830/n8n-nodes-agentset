"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchResourceDescription = void 0;
const search_1 = require("./search");
exports.searchResourceDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['search'],
            },
        },
        options: [
            {
                name: 'Search',
                value: 'search',
                description: 'Search a namespace for a query',
                action: 'Search a namespace',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/namespace/{{$parameter.namespaceId}}/search',
                    },
                },
            },
        ],
        default: 'search',
    },
    ...search_1.searchDescription,
];
//# sourceMappingURL=index.js.map