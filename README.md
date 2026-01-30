# n8n-nodes-agentset

This is an n8n community node. It lets you use [Agentset](https://agentset.ai) in your n8n workflows.

**Agentset** helps developers build AI apps that deliver reliable answers. Build Frontier RAG Apps without needing RAG expertise - Agentset handles the complexity so you can focus on your application.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

![Agentset Node](images/agentset-node.png)

### Basic Setup

1. Add the **Agentset** node to your workflow
2. Select your Agentset credentials
3. Choose a **Resource** (Namespace, Ingest Job, Document, Hosting, or Search)
4. Select the **Operation** you want to perform
5. Fill in the required parameters


### Example Workflows

#### 1. Data Ingestion Workflow

Ingest your documents with just two nodes. Simply connect a trigger to the Agentset node and start building your knowledge base.

```
[On Form Submission] → [Agentset: Create Ingest Job]
```

1. Add an **On Form Submission** trigger (or any trigger of your choice)
2. Add the **Agentset** node, select **Ingest Job** → **Create**
3. Provide your namespace ID and document source (URL, file, or raw text)
4. Execute — your documents are now being processed and indexed!

![Data Ingestion Workflow](images/workflow-data-ingestion.png)

#### 2. RAG Chatbot Workflow

Build a conversational AI chatbot powered by your knowledge base using the Agentset Search as a tool for the AI Agent.

```
[Chat Trigger] → [AI Agent] → [Agentset: Search (as Tool)]
```

1. Add a **Chat Trigger** to receive user messages
2. Add an **AI Agent** node with your preferred LLM
3. Connect the **Agentset** node as a tool (select **Search** resource)

![RAG Chatbot Workflow](images/workflow-rag-chatbot.png)

---


## Operations

This node supports the following resources and operations:

### Namespace

Namespaces are containers for your documents and knowledge base.

| Operation | Description |
|-----------|-------------|
| **Create** | Create a new namespace |
| **Delete** | Delete a namespace |
| **Get** | Get a namespace by ID |
| **Get Many** | Get many namespaces |
| **Update** | Update a namespace |

### Ingest Job

Ingest jobs handle the processing and ingestion of documents into your namespace.

| Operation | Description |
|-----------|-------------|
| **Create** | Create a new ingest job |
| **Delete** | Delete an ingest job |
| **Get** | Get an ingest job by ID |
| **Get Many** | Get many ingest jobs |
| **Re-Ingest** | Re-ingest a job |

### Document

Documents are the individual pieces of content stored in your namespace.

| Operation | Description |
|-----------|-------------|
| **Delete** | Delete a document |
| **Get** | Get a document by ID |
| **Get Many** | Get many documents |

### Hosting

Hosting allows you to enable and configure a hosted chat interface for your namespace.

| Operation | Description |
|-----------|-------------|
| **Disable** | Disable hosting for a namespace |
| **Enable** | Enable hosting for a namespace |
| **Get** | Get hosting settings for a namespace |
| **Update** | Update hosting settings for a namespace |

### Search

Search allows you to query your namespace's knowledge base to find relevant documents and information.

| Operation | Description |
|-----------|-------------|
| **Search** | Search a namespace for a query |

---

## Credentials

To use the Agentset node, you need to authenticate with your Agentset API key.

### Prerequisites

1. Sign up for an account at [Agentset](https://agentset.ai)
2. Navigate to your dashboard and generate an API key

### Setting up Credentials

1. In n8n, go to **Credentials** > **Add Credential**
2. Search for **Agentset API**
3. Enter your API key
4. Click **Save**

---

## Resources

- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Agentset Website](https://agentset.ai)
- [Agentset Documentation](https://docs.agentset.ai)
- [Agentset API Reference](https://api.agentset.ai/docs)
- [GitHub Repository](https://github.com/Enes830/n8n-nodes-agentset)