"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentsetApi = void 0;
class AgentsetApi {
    constructor() {
        this.name = 'agentsetApi';
        this.displayName = 'Agentset API';
        this.icon = { light: 'file:agentset.svg', dark: 'file:agentset.dark.svg' };
        this.documentationUrl = 'https://docs.agentset.ai/api-reference/tokens';
        this.properties = [
            {
                displayName: 'Api Key',
                name: 'apikey',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=Bearer {{$credentials.apikey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://api.agentset.ai/v1',
                url: '/v1/user',
            },
        };
    }
}
exports.AgentsetApi = AgentsetApi;
//# sourceMappingURL=AgentsetApi.credentials.js.map