"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDescription = void 0;
const create_1 = require("./create");
const get_1 = require("./get");
const search_1 = require("./search");
const showOnlyForUsers = {
    resource: ['user'],
};
exports.userDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForUsers,
        },
        options: [
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get users',
                description: 'Get many users',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/users',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a user',
                description: 'Get the data of a single user',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/users/{{$parameter.userId}}',
                    },
                },
            },
            {
                name: 'Create',
                value: 'create',
                action: 'Create a new user',
                description: 'Create a new user',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/users',
                    },
                },
            },
            {
                name: 'Search',
                value: 'search',
                action: 'Search namespace',
                description: 'Search in a namespace',
                routing: {
                    request: {
                        method: 'POST',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...get_1.userGetDescription,
    ...create_1.userCreateDescription,
    ...search_1.userSearchDescription,
];
//# sourceMappingURL=index.js.map