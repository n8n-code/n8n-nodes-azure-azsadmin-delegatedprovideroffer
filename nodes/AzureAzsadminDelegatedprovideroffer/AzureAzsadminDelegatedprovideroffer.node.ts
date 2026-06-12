import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminDelegatedprovideroffer implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Delegatedprovideroffer',
                name: 'N8nDevAzureAzsadminDelegatedprovideroffer',
                icon: { light: 'file:./azure-azsadmin-delegatedprovideroffer.png', dark: 'file:./azure-azsadmin-delegatedprovideroffer.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Admin Subscriptions Management Client.',
                defaults: { name: 'Azure Azsadmin Delegatedprovideroffer' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminDelegatedproviderofferApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
