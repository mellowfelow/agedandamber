import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS, CATEGORIES } from '@/src/data/products';
import { SITE, SHOP } from '@/src/config/site';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Session-Id',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: CORS_HEADERS });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { id, method, params } = body || {};

  if (method === 'initialize') {
    return NextResponse.json(
      {
        jsonrpc: '2.0',
        id: id || 1,
        result: {
          protocolVersion: '2025-03-26',
          capabilities: { tools: {} },
          serverInfo: { name: 'Aged And Amber MCP', version: '1.0.0' },
        },
      },
      { headers: CORS_HEADERS }
    );
  }

  if (method === 'tools/list') {
    return NextResponse.json(
      {
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
      },
      { headers: CORS_HEADERS }
    );
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

      return NextResponse.json(
        { jsonrpc: '2.0', id: id || 1, result: { content: [{ type: 'text', text: JSON.stringify(filtered) }] } },
        { headers: CORS_HEADERS }
      );
    }

    if (name === 'get_product') {
      const p = PRODUCTS.find((prod) => prod.slug === args?.slug);
      return NextResponse.json(
        {
          jsonrpc: '2.0',
          id: id || 1,
          result: { content: [{ type: 'text', text: JSON.stringify(p || { error: 'Not found' }) }] },
        },
        { headers: CORS_HEADERS }
      );
    }

    if (name === 'list_categories') {
      return NextResponse.json(
        { jsonrpc: '2.0', id: id || 1, result: { content: [{ type: 'text', text: JSON.stringify(CATEGORIES) }] } },
        { headers: CORS_HEADERS }
      );
    }

    if (name === 'get_policies') {
      return NextResponse.json(
        {
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
                  sameDayDeliveryStates: SHOP.sameDayStates,
                  sameDayDeliveryCutoff: SHOP.sameDayCutoff,
                  standardDelivery: SHOP.standardDelivery,
                  shippingEligibility: SHOP.shippingEligibility,
                  cryptoDiscountPercent: 10,
                  ageRestriction: '21+ Adult Signature Required',
                  paymentMethods: SHOP.paymentMethods,
                }),
              },
            ],
          },
        },
        { headers: CORS_HEADERS }
      );
    }

    if (name === 'create_order_draft') {
      return NextResponse.json(
        {
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
        },
        { headers: CORS_HEADERS }
      );
    }
  }

  return NextResponse.json(
    { jsonrpc: '2.0', id: id || 1, error: { code: -32601, message: 'Method not found' } },
    { headers: CORS_HEADERS }
  );
}
