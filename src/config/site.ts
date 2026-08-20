export const SITE = {
  name: 'Aged And Amber',
  tagline: 'Crafted Whiskeys, Small-Batch Spirits & Rare Cask Finishes',
  domain: 'www.agedandamber.com',
  locale: 'en-US',
  currency: 'USD',
  currencySymbol: '$',
  target: 'vercel',
  primaryColor: '#8B4513',
  secondaryColor: '#D4AF37',
  darkCanvas: '#140D08',
  lightCanvas: '#FAFAF8',
  indexNowKey: '002a541a7ee2c7c51188fb5517599103',
  cartKey: 'aged-and-amber-cart-v1',
};

export const CONTACT = {
  email: 'concierge@agedandamber.com',
  phone: '+1 (562) 732-4044',
  whatsapp: '+15627324044',
  address: '72 Bellevue Ave, Napa, CA 94558',
  hq: 'Napa Valley & San Francisco, California, USA',
  country: 'USA',
};

export const SHOP = {
  minOrder: 200,
  freeShippingThreshold: 300,
  shippingFee: 15,
  cryptoDiscount: 10,
  sameDayStates: ['Arizona', 'Idaho', 'Nevada', 'New Mexico', 'Oregon', 'Utah'],
  sameDayCutoff: '2:00 PM local time',
  standardDelivery: '2-5 business days',
  shippingEligibility:
    'We ship only to states with laws permitting direct-to-consumer alcohol shipping, under compliant licensed liquor carrier permits.',
  paymentMethods: [
    { id: 'card', name: 'Credit / Debit Card', icon: 'CreditCard' },
    { id: 'applepay', name: 'Apple Pay', icon: 'Smartphone' },
    { id: 'cashapp', name: 'Cash App', icon: 'DollarSign' },
    { id: 'chime', name: 'Chime Direct', icon: 'Building' },
    { id: 'crypto-BTC', name: 'Bitcoin (10% Off)', icon: 'Coins', discount: 10 },
    { id: 'crypto-USDT', name: 'USDT Tether (10% Off)', icon: 'Coins', discount: 10 },
    { id: 'bank-transfer', name: 'Wire / Bank Transfer', icon: 'Building2' },
  ],
};

export const FORMS = {
  provider: 'web3forms',
  web3formsKey: '87a1bafe-52c9-424c-bee3-ff40ff8a6243',
  resendFrom: 'orders@agedandamber.com',
  turnstileSiteKey: '',
};

export const CHAT = {
  channels: [
    { type: 'whatsapp', name: 'WhatsApp Concierge', value: '+15627324044' },
    { type: 'email', name: 'Spirits Advisor Email', value: 'concierge@agedandamber.com' },
    { type: 'phone', name: 'Direct Phone Line', value: '+1 (562) 732-4044' },
  ],
  widget: {
    type: 'tawk',
    propertyId: '6a81e0adffd6811d48496109',
    widgetId: '1k05lb9hq',
  },
};

export const BRAND = {
  foundingYear: '2018',
  foundingLocation: 'Napa Valley, California, USA',
  description: 'Aged And Amber is an independent Napa Valley cellar that curates and sells authentic, allocated bottles across rare single barrel bourbons, single malt scotch, tequila, rum, gin, vodka, and cognac, alongside fine wine, Champagne, craft beer, cider, and non-alcoholic alternatives, sourced directly from trusted distilleries, wineries, and licensed distributors.',
  milestones: [
    { year: '2018', event: 'Founded in Napa Valley as a direct-to-consumer curator of allocated and rare-release spirits.' },
    { year: '2020', event: 'Built out direct sourcing relationships with distilleries across Kentucky, Scotland, and beyond.' },
    { year: '2022', event: 'Expanded compliant direct-to-consumer spirits shipping to states with laws permitting DTC alcohol delivery.' },
    { year: '2024', event: 'Launched the Rare Vault Reserve program for private collectors and allocated releases.' },
  ],
  differentiation: [
    'Direct sourcing relationships with distilleries and licensed distributors across Kentucky, Scotland, and beyond',
    'Every bottle verified authentic, properly stored, and shipped in temperature-controlled packaging',
    '21+ verified temperature-controlled express delivery with adult signature',
    'Exclusive 10% instant discount when checking out with Bitcoin or USDT',
  ],
  sameAs: [
    'https://instagram.com/agedandamber',
    'https://facebook.com/agedandamber',
    'https://linkedin.com/company/aged-and-amber',
  ],
  awards: [],
};

export const COMPLIANCE = {
  ageGate: true,
  ageMinimum: 21,
  gdpr: true,
  disclaimer: 'Must be 21 years of age or older to purchase spirits. Adult signature required upon delivery. Please drink responsibly.',
  bannedTerms: [],
  requiredFramings: ['Adult 21+ signature required at delivery', 'Curated & sourced from licensed distilleries and distributors'],
  prohibitedClaims: ['Guaranteed health benefits', 'Cures ailment'],
};
