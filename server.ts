import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { SITE, SHOP, CONTACT, BRAND } from './src/config/site';
import { PRODUCTS, CATEGORIES } from './src/data/products';
import { BLOG_POSTS } from './src/data/blog';
import { FAQ_ITEMS } from './src/data/faq';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// CORS & Agent-Ready Headers Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Mcp-Session-Id');
  res.header(
    'Link',
    '</.well-known/api-catalog>; rel="api-catalog", </.well-known/agent-skills/index.json>; rel="describedby", </llms.txt>; rel="describedby", </.well-known/mcp/server-card.json>; rel="service-desc", </auth.md>; rel="auth", </.well-known/openid-configuration>; rel="openid-configuration"'
  );

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Specific Content-Type rules for Agent-Ready files
app.get('/llms.txt', (_req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.sendFile(path.resolve('public/llms.txt'));
});

app.get('/auth.md', (_req, res) => {
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.sendFile(path.resolve('public/auth.md'));
});

app.get('/.well-known/api-catalog', (_req, res) => {
  res.setHeader('Content-Type', 'application/linkset+json');
  res.sendFile(path.resolve('public/.well-known/api-catalog'));
});

// JSON API Routes (V2)
app.get('/api/products', (req, res) => {
  const { category, q, limit } = req.query;
  let result = [...PRODUCTS];

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (q && typeof q === 'string') {
    const term = q.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.shortDescription.toLowerCase().includes(term) ||
        p.fullDescription.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }

  if (limit && !isNaN(Number(limit))) {
    result = result.slice(0, Number(limit));
  }

  const mapped = result.map((p) => ({
    ...p,
    currency: SITE.currency,
    url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`,
  }));

  res.json({
    total: mapped.length,
    currency: SITE.currency,
    products: mapped,
  });
});

app.get('/api/products/:slug', (req, res) => {
  const product = PRODUCTS.find((p) => p.slug === req.params.slug || p.id === req.params.slug);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json({
    ...product,
    currency: SITE.currency,
    url: `https://${SITE.domain}/shop/${product.category}/${product.slug}/`,
  });
});

app.get('/api/categories', (_req, res) => {
  const mapped = CATEGORIES.map((c) => ({
    ...c,
    count: PRODUCTS.filter((p) => p.category === c.slug).length,
    url: `https://${SITE.domain}/shop/${c.slug}/`,
  }));
  res.json({ categories: mapped });
});

app.get('/api/search', (req, res) => {
  const q = (req.query.q as string || '').toLowerCase();
  const matchedProducts = PRODUCTS.filter(
    (p) => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q)
  );
  const matchedPosts = BLOG_POSTS.filter(
    (post) => post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q)
  );

  res.json({
    query: q,
    products: matchedProducts,
    posts: matchedPosts,
  });
});

// Live ACP/UCP Endpoints (V3)
app.get('/api/acp/catalog', (_req, res) => {
  res.json({
    catalog: CATEGORIES.map((c) => ({
      ...c,
      url: `https://${SITE.domain}/shop/${c.slug}/`,
      products: PRODUCTS.filter((p) => p.category === c.slug).map((p) => ({
        slug: p.slug,
        name: p.name,
        price: p.price,
        proof: p.proof,
        age: p.age,
        currency: SITE.currency,
        url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`,
      })),
    })),
    currency: SITE.currency,
    minimumOrderUSD: SHOP.minOrder,
    freeShippingThresholdUSD: SHOP.freeShippingThreshold,
    paymentMethods: SHOP.paymentMethods,
  });
});

app.get('/api/ucp/services', (_req, res) => {
  res.json({
    ucp: '1.0',
    services: [
      { id: 'product-catalog', type: 'catalog', url: `https://${SITE.domain}/shop/` },
      { id: 'mcp-server', type: 'mcp', url: `https://${SITE.domain}/api/mcp` },
      { id: 'wholesale', type: 'b2b', url: `https://${SITE.domain}/wholesale/` },
    ],
  });
});

// V1 - MCP Streamable Server (/api/mcp)
app.post('/api/mcp', (req, res) => {
  const { jsonrpc, id, method, params } = req.body || {};

  if (method === 'initialize') {
    return res.json({
      jsonrpc: '2.0',
      id: id || 1,
      result: {
        protocolVersion: '2025-03-26',
        capabilities: { tools: {} },
        serverInfo: { name: 'Aged And Amber MCP', version: '1.0.0' },
      },
    });
  }

  if (method === 'tools/list') {
    return res.json({
      jsonrpc: '2.0',
      id: id || 1,
      result: {
        tools: [
          {
            name: 'search_products',
            description: 'Search spirits by keyword, category, max_price',
            inputSchema: {
              type: 'object',
              properties: {
                query: { type: 'string' },
                category: { type: 'string' },
                max_price: { type: 'number' },
              },
            },
          },
          {
            name: 'get_product',
            description: 'Get full product details by slug',
            inputSchema: {
              type: 'object',
              required: ['slug'],
              properties: { slug: { type: 'string' } },
            },
          },
          {
            name: 'list_categories',
            description: 'List all spirits categories',
            inputSchema: { type: 'object', properties: {} },
          },
          {
            name: 'get_policies',
            description: 'Get shipping, payment, returns policies',
            inputSchema: { type: 'object', properties: {} },
          },
          {
            name: 'create_order_draft',
            description: 'Create prefilled order URL for adult 21+ verification. Human completes payment.',
            inputSchema: {
              type: 'object',
              properties: { items: { type: 'array' }, notes: { type: 'string' } },
            },
          },
        ],
      },
    });
  }

  if (method === 'tools/call') {
    const { name, arguments: args } = params || {};

    if (name === 'search_products') {
      const q = (args?.query || '').toLowerCase();
      const cat = args?.category;
      const maxPrice = args?.max_price;

      let filtered = [...PRODUCTS];
      if (cat) filtered = filtered.filter((p) => p.category === cat);
      if (maxPrice) filtered = filtered.filter((p) => p.price <= maxPrice);
      if (q) {
        filtered = filtered.filter(
          (p) => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q)
        );
      }

      return res.json({
        jsonrpc: '2.0',
        id: id || 1,
        result: {
          content: [
            {
              type: 'text',
              text: JSON.stringify(filtered),
            },
          ],
        },
      });
    }

    if (name === 'get_product') {
      const p = PRODUCTS.find((prod) => prod.slug === args?.slug);
      return res.json({
        jsonrpc: '2.0',
        id: id || 1,
        result: {
          content: [{ type: 'text', text: JSON.stringify(p || { error: 'Not found' }) }],
        },
      });
    }

    if (name === 'list_categories') {
      return res.json({
        jsonrpc: '2.0',
        id: id || 1,
        result: {
          content: [{ type: 'text', text: JSON.stringify(CATEGORIES) }],
        },
      });
    }

    if (name === 'get_policies') {
      return res.json({
        jsonrpc: '2.0',
        id: id || 1,
        result: {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                minimumOrder: SHOP.minOrder,
                freeShippingThreshold: SHOP.freeShippingThreshold,
                shippingFee: SHOP.shippingFee,
                cryptoDiscountPercent: 10,
                ageRestriction: '21+ Adult Signature Required',
                paymentMethods: SHOP.paymentMethods,
              }),
            },
          ],
        },
      });
    }

    if (name === 'create_order_draft') {
      return res.json({
        jsonrpc: '2.0',
        id: id || 1,
        result: {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                status: 'draft_created',
                checkoutUrl: `https://${SITE.domain}/shop/`,
                note: 'Adult 21+ verification required. Human must complete payment.',
              }),
            },
          ],
        },
      });
    }
  }

  return res.json({
    jsonrpc: '2.0',
    id: id || 1,
    error: { code: -32601, message: 'Method not found' },
  });
});

// Static assets and Vite middleware
app.use(express.static('public'));

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve('dist/index.html'));
    });
  }

  if (!process.env.VERCEL) {
    app.listen(PORT, () => {
      console.log(`[Aged And Amber] Server running on http://localhost:${PORT}`);
    });
  }
}

if (!process.env.VERCEL) {
  startServer();
}

export default app;


