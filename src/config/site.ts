export const SITE = {
  name: 'Aged And Amber',
  tagline: 'Crafted Whiskeys, Small-Batch Spirits & Rare Cask Finishes',
  domain: 'agedandamber.com',
  locale: 'en-US',
  currency: 'USD',
  currencySymbol: '$',
  target: 'vercel',
  primaryColor: '#8B4513',
  secondaryColor: '#D4AF37',
  darkCanvas: '#140D08',
  lightCanvas: '#FAFAF8',
  gscVerification: 'GSC-AGED-AND-AMBER-VERIFIED',
  indexNowKey: 'agedandamberindexnowkey2026',
  cartKey: 'aged-and-amber-cart-v1',
};

export const CONTACT = {
  email: 'concierge@agedandamber.com',
  phone: '+1 (800) 555-AMBER',
  whatsapp: '+18005552623',
  address: '1450 Oak Barrel Way, Napa Valley, CA 94558',
  hq: 'Napa Valley & San Francisco, California, USA',
  country: 'USA',
};

export const SHOP = {
  minOrder: 200,
  freeShippingThreshold: 300,
  shippingFee: 15,
  cryptoDiscount: 10,
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
  web3formsKey: 'YOUR-WEB3FORMS-KEY-PENDING',
  resendFrom: 'orders@agedandamber.com',
  turnstileSiteKey: '',
};

export const CHAT = {
  channels: [
    { type: 'whatsapp', name: 'WhatsApp Concierge', value: '+18005552623' },
    { type: 'email', name: 'Spirits Advisor Email', value: 'concierge@agedandamber.com' },
    { type: 'phone', name: 'Direct Phone Line', value: '+1 (800) 555-AMBER' },
  ],
  widget: {
    type: 'tawk',
    propertyId: '65f8a0211ec1082f0539c',
  },
};

export const BRAND = {
  foundingYear: '2018',
  foundingLocation: 'Napa Valley, California, USA',
  description: 'Aged And Amber is an independent Napa Valley spirits house that curates and sells authentic, allocated bottles of rare single barrel bourbons, single malt scotch, and artisan wood-finished spirits sourced directly from trusted distilleries and licensed distributors.',
  milestones: [
    { year: '2018', event: 'Founded in Napa Valley as a direct-to-consumer curator of allocated and rare-release spirits.' },
    { year: '2020', event: 'Built out direct sourcing relationships with distilleries across Kentucky, Scotland, and beyond.' },
    { year: '2022', event: 'Expanded compliant direct-to-consumer spirits shipping across 45 US states.' },
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
