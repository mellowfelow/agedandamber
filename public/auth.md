# Auth.md

## Site: Aged And Amber — E-Commerce Craft Spirits

## Agent Registration
No authentication required. All resources and API endpoints are publicly accessible to AI agents.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | https://agedandamber.com/shop/ |
| Spirits Journal | https://agedandamber.com/blog/ |
| Policy FAQ | https://agedandamber.com/faq/ |
| Wholesale Allocations | https://agedandamber.com/wholesale/ |
| MCP Streamable Server | https://agedandamber.com/api/mcp |

## Authentication

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
```

## Ordering Protocol
Human-in-the-loop required for checkout. Agents may browse catalog, query stock, and create prefilled order drafts. Order completion and payment authorization require human completion.
