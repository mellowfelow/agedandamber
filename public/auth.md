# Auth.md

## Site: Aged & Amber — E-Commerce Craft Spirits

## Agent Registration
No authentication required. All resources and API endpoints are publicly accessible to AI agents.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | https://www.agedandamber.com/shop/ |
| Spirits Journal | https://www.agedandamber.com/blog/ |
| Policy FAQ | https://www.agedandamber.com/faq/ |
| Shipping / Returns / Privacy / Terms | https://www.agedandamber.com/shipping/ · /refund/ · /privacy/ · /terms/ |
| Wholesale Allocations | https://www.agedandamber.com/wholesale/ |
| MCP Streamable Server | https://www.agedandamber.com/api/mcp/ |
| MCP Server Card | https://www.agedandamber.com/.well-known/mcp/server-card.json |
| A2A Agent Card | https://www.agedandamber.com/.well-known/agent-card.json |
| API Catalog (RFC 9727) | https://www.agedandamber.com/.well-known/api-catalog |
| Agent Skills Index | https://www.agedandamber.com/.well-known/agent-skills/index.json |
| OpenAPI 3.1 spec | https://www.agedandamber.com/openapi.json |
| llms.txt | https://www.agedandamber.com/llms.txt |
| Products / Categories / Search API | https://www.agedandamber.com/api/products/ · /api/categories/ · /api/search/ |

## Authentication

```json
{
  "agent_auth": {
    "register_uri": "https://www.agedandamber.com/api/agent/register",
    "registration_endpoint": "https://www.agedandamber.com/api/agent/register",
    "skill": "https://www.agedandamber.com/auth.md",
    "documentation": "https://www.agedandamber.com/auth.md",
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "grant_types_supported": [],
    "notes": "No authentication, registration, or credential is required. Every resource is public."
  }
}
```

## Ordering Protocol
Human-in-the-loop required for checkout. Agents may browse catalog, query stock, and create prefilled order drafts. Order completion and payment authorization require human completion.
