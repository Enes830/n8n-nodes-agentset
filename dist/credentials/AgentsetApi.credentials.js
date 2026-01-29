"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentsetApi = void 0;
class AgentsetApi {
    constructor() {
        this.name = 'agentsetApi';
        this.displayName = 'Agentset API';
        this.icon = { light: 'file:agentset.svg', dark: 'file:agentset.dark.svg' };
        this.documentationUrl = 'https://github.com/org/-agentset?tab=readme-ov-file#credentials';
        this.properties = [
            {
                displayName: 'Access Token',
                name: 'accessToken',
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
                    Authorization: '=Bearer {{$credentials.accessToken}}',
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