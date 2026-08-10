(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      {
        name: "search_products",
        description: "Search Aged And Amber spirits by keyword, category, or price",
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
          const res = await fetch(`https://agedandamber.com/api/search?${params}`);
          return res.json();
        }
      },
      {
        name: "browse_products",
        description: "Browse spirits catalog by cask category",
        inputSchema: {
          type: "object",
          properties: {
            category: { type: "string" }
          }
        },
        execute: async ({ category }) => {
          const url = category ? `https://agedandamber.com/shop/${category}/` : `https://agedandamber.com/shop/`;
          window.location.href = url;
          return { url };
        }
      },
      {
        name: "get_wholesale_info",
        description: "Get wholesale pricing tiers and single barrel allocation info",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = `https://agedandamber.com/wholesale/`;
          return { url: `https://agedandamber.com/wholesale/` };
        }
      },
      {
        name: "contact",
        description: "Contact Aged And Amber spirits concierge",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = `https://agedandamber.com/contact/`;
          return { url: `https://agedandamber.com/contact/` };
        }
      }
    ]
  });
})();
