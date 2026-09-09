(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;

  var BASE = 'https://www.agedandamber.com';

  // Browser-side tools (WebMCP). These mirror the read-only + draft tools of
  // the MCP server at /api/mcp/ — same names where they overlap — but the
  // browsing ones also navigate the current tab. A person always completes
  // checkout and the 21+ signature.
  navigator.modelContext.provideContext({
    tools: [
      {
        name: "search_products",
        description: "Search the catalog (spirits, wine, Champagne, beer, cider, non-alcoholic) by keyword, category slug, or maximum price.",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string" },
            category: { type: "string" },
            max_price: { type: "number" }
          }
        },
        execute: async ({ query, category, max_price }) => {
          const params = new URLSearchParams();
          if (query) params.set('q', query);
          if (category) params.set('category', category);
          if (max_price) params.set('max_price', max_price);
          const res = await fetch(BASE + '/api/search/?' + params.toString());
          return res.json();
        }
      },
      {
        name: "list_categories",
        description: "List every product category with its slug and product count.",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          const res = await fetch(BASE + '/api/categories/');
          return res.json();
        }
      },
      {
        name: "get_policies",
        description: "Shipping rates, same-day states, minimum order, payment methods, the 21+ adult-signature rule, and the returns policy.",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          const res = await fetch(BASE + '/api/mcp/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'get_policies', arguments: {} } })
          });
          const j = await res.json();
          try { return JSON.parse(j.result.content[0].text); } catch (e) { return j; }
        }
      },
      {
        name: "browse_category",
        description: "Open a category page in the current tab. Pass a category slug (see list_categories), or omit for the full shop.",
        inputSchema: {
          type: "object",
          properties: { category: { type: "string" } }
        },
        execute: async ({ category }) => {
          const url = category ? BASE + '/shop/' + category + '/' : BASE + '/shop/';
          window.location.href = url;
          return { url };
        }
      },
      {
        name: "get_wholesale_info",
        description: "Open the wholesale page — case pricing, single-barrel picks, and how licensed venues apply.",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = BASE + '/wholesale/';
          return { url: BASE + '/wholesale/' };
        }
      },
      {
        name: "contact",
        description: "Open the contact page to reach the concierge team.",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = BASE + '/contact/';
          return { url: BASE + '/contact/' };
        }
      }
    ]
  });
})();
