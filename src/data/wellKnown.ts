import { SITE, SHOP, CONTACT } from '../config/site';

/**
 * Extensionless /.well-known/* documents, served from Next route handlers
 * instead of public/ static files. Vercel serves extensionless files under
 * /.well-known/ as application/octet-stream and its header rules can't
 * override that, which made agent scanners (isitagentready.com's UCP
 * check in particular) fail to parse them. A route handler sets the right
 * Content-Type. Files that already have an extension (acp.json,
 * agent-skills/index.json, mcp/server-card.json, ai-catalog.json) stay in
 * public/ — they serve fine.
 */

const BASE = `https://${SITE.domain}`;
const AGENT_DESC = "Napa Valley cellar for allocated spirits, fine wine, Champagne, beer, cider, and non-alcoholic alternatives.";

export const WELL_KNOWN_JSON: Record<string, unknown> = {
  ucp: {
    ucp: { version: '1.0', profile: 'commerce' },
    ucp_version: '1.0',
    version: '1.0',
    protocol_version: '1.0',
    spec: 'https://ucp.dev/specification/overview/',
    schema: 'https://ucp.dev/schema/v1.json',
    site: BASE,
    url: BASE,
    name: SITE.name,
    description: AGENT_DESC,
    services: [
      { id: 'product-catalog', type: 'catalog', url: `${BASE}/shop/`, description: 'Full catalog of spirits, wine, Champagne, beer, and cider' },
      { id: 'mcp-server', type: 'mcp', url: `${BASE}/api/mcp/`, description: 'MCP Streamable HTTP server' },
      { id: 'order', type: 'commerce', url: `${BASE}/shop/`, description: 'Place orders via 21+ verified checkout' },
      { id: 'wholesale', type: 'b2b', url: `${BASE}/wholesale/`, description: 'Wholesale case pricing and single barrel allocations' },
    ],
    capabilities: ['browse', 'search', 'inquiry', 'wholesale', 'content', 'mcp'],
    endpoints: {
      mcp: `${BASE}/api/mcp/`,
      catalog: `${BASE}/shop/`,
      contact: `${BASE}/contact/`,
      agent_skills: `${BASE}/.well-known/agent-skills/index.json`,
      mcp_server_card: `${BASE}/.well-known/mcp/server-card.json`,
      api_catalog: `${BASE}/.well-known/api-catalog`,
      openapi: `${BASE}/openapi.json`,
      llms_txt: `${BASE}/llms.txt`,
    },
    currency: SITE.currency,
    minimum_order_usd: String(SHOP.minOrder),
    payment_methods: ['applepay', 'cashapp', 'chime', 'crypto-BTC', 'crypto-USDT', 'bank-transfer'],
    legal: {
      age_restriction: '21+',
      product_type: 'Spirits, Wine, Champagne, Beer, Cider & Non-Alcoholic Beverages',
      compliance: 'Mandatory adult 21+ signature required upon delivery.',
    },
  },

  'api-catalog': {
    linkset: [
      {
        anchor: `${BASE}/`,
        'https://www.iana.org/assignments/link-relations/service-doc': [{ href: `${BASE}/faq/` }],
        title: `${SITE.name} — ${AGENT_DESC}`,
      },
      { anchor: `${BASE}/shop/`, type: 'text/html', title: `${SITE.name} Product Catalog` },
      { anchor: `${BASE}/wholesale/`, type: 'text/html', title: `${SITE.name} Wholesale Allocations` },
      { anchor: `${BASE}/openapi.json`, type: 'application/json', title: `${SITE.name} OpenAPI spec` },
      { anchor: `${BASE}/api/products/`, type: 'application/json', title: `${SITE.name} Products API` },
      { anchor: `${BASE}/api/categories/`, type: 'application/json', title: `${SITE.name} Categories API` },
      { anchor: `${BASE}/api/search/`, type: 'application/json', title: `${SITE.name} Search API` },
      {
        anchor: `${BASE}/api/mcp/`,
        type: 'application/json',
        'https://www.iana.org/assignments/link-relations/service-desc': [{ href: `${BASE}/.well-known/mcp/server-card.json` }],
        title: `${SITE.name} MCP Server`,
      },
    ],
  },

  'oauth-protected-resource': {
    // RFC 9728. The site is fully public, but scanners expect a complete
    // Protected Resource Metadata document — a non-empty authorization_servers
    // array and bearer_methods_supported. The referenced authorization
    // server declares no endpoints (see below), so no token is obtainable
    // or required.
    resource: BASE,
    resource_name: `${SITE.name} Public Catalog`,
    // RFC 8414: this is the issuer identifier, not the metadata URL — a
    // scanner appends /.well-known/oauth-authorization-server to it.
    authorization_servers: [BASE],
    scopes_supported: ['public'],
    bearer_methods_supported: ['header'],
    resource_documentation: `${BASE}/auth.md`,
    resource_policy_uri: `${BASE}/terms/`,
    tls_client_certificate_bound_access_tokens: false,
    note: 'All resources on this site are publicly accessible. No OAuth tokens are required; the authorization server exposes no endpoints.',
  },

  'oauth-authorization-server': {
    issuer: BASE,
    authorization_endpoint: null,
    token_endpoint: null,
    jwks_uri: null,
    grant_types_supported: [],
    response_types_supported: [],
    scopes_supported: [],
    note: `${SITE.name} has no protected APIs. All resources are publicly accessible.`,
    public_resources: [
      `${BASE}/shop/`,
      `${BASE}/blog/`,
      `${BASE}/faq/`,
      `${BASE}/wholesale/`,
      `${BASE}/llms.txt`,
      `${BASE}/openapi.json`,
      `${BASE}/.well-known/api-catalog`,
      `${BASE}/.well-known/agent-skills/index.json`,
      `${BASE}/.well-known/mcp/server-card.json`,
    ],
    agent_auth: {
      // Open registration — nothing is gated, so "registering" grants
      // nothing. The endpoint returns 200 with an explanation.
      register_uri: `${BASE}/api/agent/register`,
      registration_endpoint: `${BASE}/api/agent/register`,
      skill: `${BASE}/auth.md`,
      documentation: `${BASE}/auth.md`,
      // Genuinely no identity, no credential, no registration flow — the
      // site gates nothing. Declaring an "anonymous" flow would mean
      // specifying a claim_uri / credential exchange that doesn't exist.
      identity_types_supported: ['none'],
      credential_types_supported: ['none'],
      grant_types_supported: [],
      notes: 'No registration or credential is required — every resource is public. The register endpoint simply confirms this.',
    },
  },

  'openid-configuration': {
    issuer: BASE,
    note: `${SITE.name} does not operate an OpenID Connect provider. All resources are publicly accessible.`,
    public_site: true,
    authorization_endpoint: null,
    token_endpoint: null,
    userinfo_endpoint: null,
    jwks_uri: null,
    scopes_supported: [],
    response_types_supported: [],
    grant_types_supported: [],
    subject_types_supported: [],
    id_token_signing_alg_values_supported: [],
  },
};

export const WELL_KNOWN_CONTENT_TYPE: Record<string, string> = {
  ucp: 'application/json; charset=utf-8',
  'api-catalog': 'application/linkset+json; charset=utf-8',
  'oauth-protected-resource': 'application/json; charset=utf-8',
  'oauth-authorization-server': 'application/json; charset=utf-8',
  'openid-configuration': 'application/json; charset=utf-8',
};

/** Build the Response for a /.well-known/<key> document. */
export function wellKnownResponse(key: keyof typeof WELL_KNOWN_JSON): Response {
  return new Response(JSON.stringify(WELL_KNOWN_JSON[key], null, 2), {
    headers: {
      'Content-Type': WELL_KNOWN_CONTENT_TYPE[key] || 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

/** A2A Agent Card (a2a-protocol.org). Also served at /.well-known/agent.json. */
export const AGENT_CARD = {
  protocolVersion: '0.3.0',
  name: SITE.name,
  description: AGENT_DESC,
  url: `${BASE}/api/mcp/`,
  preferredTransport: 'JSONRPC',
  provider: {
    organization: SITE.name,
    url: BASE,
  },
  version: '1.0.0',
  documentationUrl: `${BASE}/auth.md`,
  capabilities: { streaming: false, pushNotifications: false, stateTransitionHistory: false },
  defaultInputModes: ['text/plain', 'application/json'],
  defaultOutputModes: ['application/json', 'text/plain'],
  securitySchemes: {},
  security: [],
  supportedInterfaces: [
    { url: `${BASE}/api/mcp/`, transport: 'JSONRPC', preferred: true },
  ],
  skills: [
    {
      id: 'search-products',
      name: 'Search products',
      description: 'Search the catalog of spirits, wine, Champagne, beer, cider, and non-alcoholic drinks by keyword, category, or maximum price.',
      tags: ['commerce', 'catalog', 'search'],
      examples: ['Find cask-strength bourbon under $80', 'Show me grower Champagne'],
      inputModes: ['text/plain'],
      outputModes: ['application/json'],
    },
    {
      id: 'get-policies',
      name: 'Get shipping & payment policies',
      description: 'Return the minimum order, shipping rates, same-day states, 21+ signature rule, payment methods, and returns policy.',
      tags: ['support', 'policy'],
      examples: ['Do you ship to Texas?', 'What is the minimum order?'],
      inputModes: ['text/plain'],
      outputModes: ['application/json'],
    },
    {
      id: 'create-order-draft',
      name: 'Create an order draft',
      description: 'Build a prefilled checkout link from a list of products. A human always completes payment and the 21+ signature.',
      tags: ['commerce', 'checkout'],
      examples: ['Draft an order for two bottles of Redbreast 12'],
      inputModes: ['application/json'],
      outputModes: ['application/json'],
    },
  ],
  additionalInterfaces: [
    { url: `${BASE}/api/mcp/`, transport: 'JSONRPC' },
  ],
} as const;

/** OpenAPI 3.1 description of the public REST endpoints. Served at /openapi.json. */
export const OPENAPI_SPEC = {
  openapi: '3.1.0',
  info: {
    title: `${SITE.name} Public API`,
    version: '1.0.0',
    description: `Read-only JSON API for the ${SITE.name} catalog. No authentication. Ordering is human-assisted — agents may search and draft, a person completes checkout.`,
    contact: { email: CONTACT.email, url: `${BASE}/contact/` },
  },
  servers: [{ url: BASE }],
  paths: {
    '/api/products/': {
      get: {
        summary: 'List products',
        parameters: [
          { name: 'category', in: 'query', schema: { type: 'string' }, description: 'Filter by category slug' },
          { name: 'q', in: 'query', schema: { type: 'string' }, description: 'Keyword search over name + description' },
          { name: 'limit', in: 'query', schema: { type: 'integer' } },
        ],
        responses: { '200': { description: 'Product list', content: { 'application/json': { schema: { type: 'object' } } } } },
      },
    },
    '/api/products/{slug}/': {
      get: {
        summary: 'Get one product',
        parameters: [{ name: 'slug', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { '200': { description: 'Product' }, '404': { description: 'Not found' } },
      },
    },
    '/api/categories/': { get: { summary: 'List categories', responses: { '200': { description: 'Category list' } } } },
    '/api/search/': {
      get: {
        summary: 'Search products and blog posts',
        parameters: [{ name: 'q', in: 'query', required: true, schema: { type: 'string' } }],
        responses: { '200': { description: 'Products + posts matching the query' } },
      },
    },
    '/api/mcp/': {
      post: {
        summary: 'Model Context Protocol endpoint (Streamable HTTP, JSON-RPC 2.0)',
        description: 'Methods: initialize, tools/list, tools/call. Tools: search_products, get_product, list_categories, get_policies, create_order_draft.',
        requestBody: { content: { 'application/json': { schema: { type: 'object' } } } },
        responses: { '200': { description: 'JSON-RPC result' } },
      },
    },
    '/api/acp/catalog/': { get: { summary: 'Agentic Commerce Protocol catalog', responses: { '200': { description: 'Catalog' } } } },
    '/api/ucp/services/': { get: { summary: 'Universal Commerce Protocol services', responses: { '200': { description: 'Services' } } } },
  },
} as const;
