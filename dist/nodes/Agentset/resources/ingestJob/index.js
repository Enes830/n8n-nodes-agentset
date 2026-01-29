"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingestJobDescription = void 0;
const get_1 = require("./get");
const getAll_1 = require("./getAll");
const create_1 = require("./create");
const delete_1 = require("./delete");
const reIngest_1 = require("./reIngest");
exports.ingestJobDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['ingestJob'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new ingest job',
                action: 'Create an ingest job',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/namespace/{{$parameter.namespaceId}}/ingest-jobs',
                    },
                },
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete an ingest job',
                action: 'Delete an ingest job',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/namespace/{{$parameter.namespaceId}}/ingest-jobs/{{$parameter.jobId}}',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get an ingest job by ID',
                action: 'Get an ingest job',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/namespace/{{$parameter.namespaceId}}/ingest-jobs/{{$parameter.jobId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                description: 'Get many ingest jobs',
                action: 'Get many ingest jobs',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/namespace/{{$parameter.namespaceId}}/ingest-jobs',
                    },
                },
            },
            {
                name: 'Re-Ingest',
                value: 'reIngest',
                description: 'Re-ingest a job',
                action: 'Re ingest a job',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/namespace/{{$parameter.namespaceId}}/ingest-jobs/{{$parameter.jobId}}/re-ingest',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...get_1.getDescription,
    ...getAll_1.getAllDescription,
    ...create_1.createDescription,
    ...delete_1.deleteDescription,
    ...reIngest_1.reIngestDescription,
];
//# sourceMappingURL=index.js.map