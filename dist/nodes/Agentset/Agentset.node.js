"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agentset = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const user_1 = require("./resources/user");
const company_1 = require("./resources/company");
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
                            name: 'User',
                            value: 'user',
                        },
                        {
                            name: 'Company',
                            value: 'company',
                        },
                    ],
                    default: 'user',
                },
                ...user_1.userDescription,
                ...company_1.companyDescription,
            ],
        };
    }
}
exports.Agentset = Agentset;
//# sourceMappingURL=Agentset.node.js.map