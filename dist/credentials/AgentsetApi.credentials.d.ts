import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class AgentsetApi implements ICredentialType {
    name: string;
    displayName: string;
    icon: {
        readonly light: "file:agentset.svg";
        readonly dark: "file:agentset.dark.svg";
    };
    documentationUrl: string;
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
    test: ICredentialTestRequest;
}
