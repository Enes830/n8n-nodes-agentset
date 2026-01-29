"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agentset = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const namespace_1 = require("./resources/namespace");
const ingestJob_1 = require("./resources/ingestJob");
const document_1 = require("./resources/document");
const hosting_1 = require("./resources/hosting");
const search_1 = require("./resources/search");
class Agentset {
    constructor() {
        this.description = {
            displayName: 'Agentset',
            name: 'agentset',
            icon: { light: 'file:agentset.svg', dark: 'file:agentset.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Agentset API',
            defaults: {
                name: 'Agentset',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [{ name: 'agentsetApi', required: true }],
            requestDefaults: {
                baseURL: 'https://api.agentset.ai/v1',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Namespace',
                            value: 'namespace',
                        },
                        {
                            name: 'Search',
                            value: 'search',
                        },
                        {
                            name: 'Document',
                            value: 'document',
                        },
                        {
                            name: 'Ingest Job',
                            value: 'ingestJob',
                        },
                        {
                            name: 'Hosting',
                            value: 'hosting',
                        },
                    ],
                    default: 'namespace',
                },
                ...namespace_1.namespaceDescription,
                ...ingestJob_1.ingestJobDescription,
                ...document_1.documentDescription,
                ...hosting_1.hostingDescription,
                ...search_1.searchResourceDescription,
            ],
        };
    }
}
exports.Agentset = Agentset;
//# sourceMappingURL=Agentset.node.js.map