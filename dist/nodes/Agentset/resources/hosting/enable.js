"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableDescription = void 0;
exports.enableDescription = [
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
                operation: ['enable'],
            },
        },
    },
];
//# sourceMappingURL=enable.js.map