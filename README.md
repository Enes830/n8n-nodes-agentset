# n8n-nodes-agentset

This is an n8n community node. It lets you use [Agentset](https://agentset.ai) in your n8n workflows.

**Agentset** helps developers build AI apps that deliver reliable answers. Build Frontier RAG Apps without needing RAG expertise - Agentset handles the complexity so you can focus on your application.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

![Agentset Node](images/agentset-node.png)
<!-- 📸 Screenshot: Show the Agentset node icon/appearance in the n8n canvas -->

---

## Table of Contents

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Usage](#usage)
  - [Example Workflows](#example-workflows)
- [Screenshots](#screenshots)
- [Resources](#resources)
- [Version History](#version-history)

---

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Quick Install

1. Go to **Settings** > **Community Nodes**
2. Select **Install**
3. Enter `n8n-nodes-agentset` in the **npm Package Name** field
4. Agree to the risks and select **Install**

![Installation](images/installation.png)
<!-- 📸 Screenshot: Show the community nodes installation screen with the package name entered -->

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

![Namespace Operations](images/namespace-operations.png)
<!-- 📸 Screenshot: Show the Namespace resource selected with the operation dropdown open -->

### Ingest Job

Ingest jobs handle the processing and ingestion of documents into your namespace.

| Operation | Description |
|-----------|-------------|
| **Create** | Create a new ingest job |
| **Delete** | Delete an ingest job |
| **Get** | Get an ingest job by ID |
| **Get Many** | Get many ingest jobs |
| **Re-Ingest** | Re-ingest a job |

![Ingest Job Operations](images/ingest-job-operations.png)
<!-- 📸 Screenshot: Show the Ingest Job resource selected with the operation dropdown open -->

### Document

Documents are the individual pieces of content stored in your namespace.

| Operation | Description |
|-----------|-------------|
| **Delete** | Delete a document |
| **Get** | Get a document by ID |
| **Get Many** | Get many documents |

![Document Operations](images/document-operations.png)
<!-- 📸 Screenshot: Show the Document resource selected with the operation dropdown open -->

### Hosting

Hosting allows you to enable and configure a hosted chat interface for your namespace.

| Operation | Description |
|-----------|-------------|
| **Disable** | Disable hosting for a namespace |
| **Enable** | Enable hosting for a namespace |
| **Get** | Get hosting settings for a namespace |
| **Update** | Update hosting settings for a namespace |

![Hosting Operations](images/hosting-operations.png)
<!-- 📸 Screenshot: Show the Hosting resource selected with the operation dropdown open -->

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

![Credentials Setup](images/credentials-setup.png)
<!-- 📸 Screenshot: Show the Agentset API credentials form with the API key field -->

---

## Compatibility

- **Minimum n8n version:** 1.0.0
- **Tested with:** n8n 1.x

---

## Usage

### Basic Setup

1. Add the **Agentset** node to your workflow
2. Select your Agentset credentials
3. Choose a **Resource** (Namespace, Ingest Job, Document, or Hosting)
4. Select the **Operation** you want to perform
5. Fill in the required parameters

![Node Parameters](images/node-parameters.png)
<!-- 📸 Screenshot: Show a fully configured Agentset node with parameters filled in -->

### Example Workflows

#### Example 1: Create a Namespace and Ingest Documents

This workflow creates a new namespace and sets up an ingest job to process documents.

![Workflow Example 1](images/workflow-example-1.png)
<!-- 📸 Screenshot: Show a complete workflow with multiple Agentset nodes (e.g., Create Namespace -> Create Ingest Job) -->

#### Example 2: Document Management Workflow

This workflow retrieves documents from a namespace, processes them, and manages the document lifecycle.

![Workflow Example 2](images/workflow-example-2.png)
<!-- 📸 Screenshot: Show a workflow demonstrating document retrieval and management -->

#### Example 3: Using with AI Agent

The Agentset node can be used as a tool for AI agents, enabling your agents to interact with your RAG knowledge base.

![AI Agent Integration](images/ai-agent-integration.png)
<!-- 📸 Screenshot: Show the Agentset node connected to an AI Agent node -->

---

## Screenshots

### Node Overview

The Agentset node in the n8n editor:

![Node in Editor](images/node-in-editor.png)
<!-- 📸 Screenshot: Show the Agentset node selected in the n8n editor with the panel open -->

### Resource Selection

Choose from available resources:

![Resource Selection](images/resource-selection.png)
<!-- 📸 Screenshot: Show the Resource dropdown with all options visible -->

### Operation Output

Example output from a successful operation:

![Operation Output](images/operation-output.png)
<!-- 📸 Screenshot: Show the output panel after running a successful operation -->

---

## Resources

- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Agentset Website](https://agentset.ai)
- [Agentset Documentation](https://docs.agentset.ai)
- [Agentset API Reference](https://api.agentset.ai/docs)
- [GitHub Repository](https://github.com/Enes830/n8n-nodes-agentset)

---

## Version History

### 0.1.0

- Initial release
- Added Namespace resource (Create, Delete, Get, Get Many, Update)
- Added Ingest Job resource (Create, Delete, Get, Get Many, Re-Ingest)
- Added Document resource (Delete, Get, Get Many)
- Added Hosting resource (Disable, Enable, Get, Update)

---

## License

[MIT](LICENSE)

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## Support

If you have any questions or issues, please:

1. Check the [Agentset Documentation](https://docs.agentset.ai)
2. Open an issue on [GitHub](https://github.com/Enes830/n8n-nodes-agentset/issues)
3. Join the [n8n Community](https://community.n8n.io/)
