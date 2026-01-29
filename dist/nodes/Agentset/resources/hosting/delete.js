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
                resource: ['hosting'],
                operation: ['delete'],
            },
        },
    },
];
//# sourceMappingURL=delete.js.map