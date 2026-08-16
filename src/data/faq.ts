import { FaqItem } from '../types';
import { SHOP } from '../config/site';

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'ordering',
    question: 'What is the minimum order requirement for spirits delivery?',
    answer: 'Aged And Amber maintains a minimum order requirement of $200 for all direct-to-consumer spirits shipments. Orders exceeding $300 qualify for complimentary temperature-controlled express shipping to every state we ship to.',
  },
  {
    category: 'shipping',
    question: 'How does 21+ adult signature verification work during delivery?',
    answer: 'By federal law, all shipments containing alcohol require an adult aged 21 or older to show valid government photo ID and sign upon carrier delivery. Carriers cannot leave packages unattended on doorsteps.',
  },
  {
    category: 'payment',
    question: 'How do I claim the 10% instant cryptocurrency discount?',
    answer: 'Select Bitcoin (BTC) or USDT Tether at checkout. Our checkout system automatically applies a 10% discount to your entire order subtotal and generates a dedicated wallet QR code and address for instant payment.',
  },
  {
    category: 'products',
    question: 'Are Aged And Amber whiskeys chill-filtered or color-added?',
    answer: 'Never. All our bourbons, ryes, single malts, and agave spirits are 100% natural in color and non-chill filtered. This preserves essential oils and rich cask tannins, creating authentic depth and viscosity in your glass.',
  },
  {
    category: 'wholesale',
    question: 'Do you offer bulk wholesale allocations for bars and private collectors?',
    answer: 'Yes. We offer tiered wholesale pricing and guaranteed barrel allocations for licensed hospitality venues, high-volume retailers, and private cellar collectors. Inquire through our dedicated Wholesale portal.',
  },
  {
    category: 'shipping',
    question: 'Which states do you ship spirits to?',
    answer: `${SHOP.shippingEligibility} Coverage and delivery speed vary by state — contact our concierge team to confirm eligibility and transit time for your address.`,
  },
  {
    category: 'shipping',
    question: 'Do you offer same-day spirits delivery?',
    answer: `Yes. Orders placed before ${SHOP.sameDayCutoff} to ${SHOP.sameDayStates.slice(0, -1).join(', ')}, or ${SHOP.sameDayStates[SHOP.sameDayStates.length - 1]} qualify for same-day dispatch through our compliant liquor carrier network. All other states we ship to receive spirits within ${SHOP.standardDelivery}.`,
  },
];
