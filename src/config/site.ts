export const SITE = {
  name: 'Aged & Amber',
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
  // Card payments are not offered. Alcohol is a high-risk MCC that most card
  // processors decline or freeze for a young DTC merchant, so checkout runs
  // on Apple Pay, Cash App, Chime, crypto, and bank wire only.
  paymentMethods: [
    { id: 'applepay', name: 'Apple Pay', icon: 'Smartphone' },
    { id: 'cashapp', name: 'Cash App', icon: 'DollarSign' },
    { id: 'chime', name: 'Chime Direct', icon: 'Building' },
    { id: 'crypto-BTC', name: 'Bitcoin (10% Off)', icon: 'Coins', discount: 10 },
    { id: 'crypto-USDT', name: 'USDT Tether (10% Off)', icon: 'Coins', discount: 10 },
    { id: 'bank-transfer', name: 'Wire / Bank Transfer', icon: 'Building2' },
  ],
};

export const FORMS = {
  // Order / contact / wholesale notifications are sent server-side by
  // /api/order + /api/inquiry -> src/utils/notify.ts, using Zoho SMTP only
  // (ZOHO_SMTP_USER / ZOHO_SMTP_PASS env vars). No third-party form service.
  provider: 'zoho-smtp',
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
  description: 'Aged & Amber is an independent Napa Valley cellar that curates and sells authentic, allocated bottles across rare single barrel bourbons, single malt scotch, tequila, rum, gin, vodka, and cognac, alongside fine wine, Champagne, craft beer, cider, and non-alcoholic alternatives, sourced through trusted, licensed distributors and wholesale channels.',
  milestones: [
    { year: '2018', event: 'Founded in Napa Valley as a direct-to-consumer curator of allocated and rare-release spirits.' },
    { year: '2020', event: 'Grew the catalogue through licensed distributor and wholesale partnerships spanning Kentucky, Scotland, and beyond.' },
    { year: '2022', event: 'Expanded compliant direct-to-consumer spirits shipping to states with laws permitting DTC alcohol delivery.' },
    { year: '2024', event: 'Launched the Rare Vault Reserve program for private collectors and allocated releases.' },
  ],
  differentiation: [
    'A hand-curated catalogue of allocated and hard-to-find bottles, sourced through licensed distributors and wholesale channels',
    'Every bottle verified authentic, properly stored, and shipped in temperature-controlled packaging',
    '21+ verified temperature-controlled express delivery with adult signature',
    'Exclusive 10% instant discount when checking out with Bitcoin or USDT',
  ],
  // No social profiles exist yet. Do not list URLs here until the accounts
  // are real and controlled by the business — asserting profiles that
  // don't exist is a fabricated entity signal. Add them back once live.
  sameAs: [] as string[],
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
