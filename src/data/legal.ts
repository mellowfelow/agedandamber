import { SITE, CONTACT, SHOP, COMPLIANCE } from '../config/site';

/**
 * Policy page content. Drafted from the site's own configured rules
 * (src/config/site.ts) and the published FAQ so the policies can't drift
 * from what the store actually does. Have counsel review the alcohol
 * direct-shipping, privacy, and liability language before relying on it.
 */

export const LEGAL_EFFECTIVE_DATE = 'September 9, 2026';

export interface LegalSection {
  heading: string;
  /** Each item is a paragraph, or a { list: string[] } bullet block. */
  body: (string | { list: string[] })[];
}

export interface LegalDoc {
  slug: 'privacy' | 'terms' | 'shipping' | 'refund';
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: LegalSection[];
}

const sameDay = SHOP.sameDayStates.join(', ');

export const LEGAL_DOCS: Record<LegalDoc['slug'], LegalDoc> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    metaTitle: 'Privacy Policy',
    metaDescription:
      `How ${SITE.name} collects, uses, and protects your information — order details, essential cookies, chat, and your access and deletion rights.`,
    intro:
      `${SITE.name} ("we", "us") respects your privacy. This policy explains what personal information we collect when you browse or order from ${SITE.domain}, how we use it, who we share it with, and the choices you have.`,
    sections: [
      {
        heading: 'Information we collect',
        body: [
          'We collect only what we need to take an order, deliver it lawfully, and answer your questions:',
          {
            list: [
              'Contact and delivery details you enter in a form — name, email address, phone number, and shipping address — when you place an order or send a contact, wholesale, or concierge message.',
              'Order details — the products, quantities, totals, and the payment method you select. We do not collect or store card numbers; payments are completed off-site through the method you choose (Apple Pay, Cash App, Chime, Bitcoin, USDT, or bank wire).',
              'Age-verification status — a flag stored in your browser recording that you confirmed you are 21 or older, so the age gate does not reappear on every page.',
              'Cart contents and cookie-consent choice — stored in your browser (local storage) so your cart survives a page reload.',
              'Live chat messages — if you use the on-site chat widget, the message content and any details you provide are processed by our chat provider.',
              'Technical logs — standard server request logs (IP address, timestamp, page requested, browser type) kept by our hosting provider for security and debugging.',
            ],
          },
          'We do not run advertising or analytics trackers on this site, and we do not build advertising profiles.',
        ],
      },
      {
        heading: 'How we use it',
        body: [
          {
            list: [
              'To process, confirm, and deliver your order, including passing your name and address to the licensed carrier that requires an adult 21+ signature.',
              'To contact you about an order, a wholesale enquiry, or a question you sent us.',
              'To meet our legal obligations for direct-to-consumer alcohol sales, including age and destination verification.',
              'To keep the site secure and working correctly.',
            ],
          },
          'We do not sell your personal information, and we do not share it for anyone else’s marketing.',
        ],
      },
      {
        heading: 'Who we share it with',
        body: [
          'We share personal information only with service providers who help us run the store, and only what they need:',
          {
            list: [
              'Our email provider (Zoho), to deliver order and enquiry notifications.',
              'Our hosting and content-delivery provider (Vercel), which serves the site.',
              'Our live chat provider, if you use the chat widget.',
              'Licensed alcohol carriers, to complete compliant delivery with adult signature.',
              'Government authorities, where we are legally required to disclose information.',
            ],
          },
        ],
      },
      {
        heading: 'Cookies and local storage',
        body: [
          'We use only essential browser storage: your cart, your cookie-consent choice, and your age-verification flag. These are required for the site to function and are not used for tracking or advertising. The live chat widget, if you open it, may set its own cookies.',
        ],
      },
      {
        heading: 'How long we keep it',
        body: [
          'Order and enquiry records are kept as long as needed to fulfil the order, handle any follow-up, and meet tax and alcohol-sale record-keeping requirements, then deleted or anonymised. Browser storage stays on your device until you clear it.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          `You can ask us to confirm what personal information we hold about you, correct it, or delete it. Email ${CONTACT.email} and we will respond within the time required by applicable law. Depending on where you live (for example, California or the EU/UK), you may also have the right to object to or restrict certain processing, and to lodge a complaint with your data-protection authority.`,
          'To exercise a right, email us from the address associated with your order or enquiry so we can verify the request.',
        ],
      },
      {
        heading: 'Children',
        body: [
          `This site sells age-restricted products and is not directed to anyone under ${COMPLIANCE.ageMinimum}. We do not knowingly collect information from anyone under ${COMPLIANCE.ageMinimum}.`,
        ],
      },
      {
        heading: 'Changes and contact',
        body: [
          'We will post any material change to this policy here and update the effective date. For any privacy question, contact:',
          `${SITE.name} — ${CONTACT.address}. Email ${CONTACT.email}. Phone ${CONTACT.phone}.`,
        ],
      },
    ],
  },

  terms: {
    slug: 'terms',
    title: 'Terms of Service',
    metaTitle: 'Terms of Service',
    metaDescription:
      `The terms for using ${SITE.domain} and buying from ${SITE.name} — eligibility, ordering, pricing, alcohol-shipping compliance, and liability.`,
    intro:
      `These Terms govern your use of ${SITE.domain} and any purchase you make from ${SITE.name}. By using the site or placing an order, you agree to them. If you do not agree, do not use the site.`,
    sections: [
      {
        heading: 'Eligibility',
        body: [
          `You must be at least ${COMPLIANCE.ageMinimum} years old to use this site or buy alcoholic products. By placing an order for alcohol you represent that you and the recipient are ${COMPLIANCE.ageMinimum} or older, that the recipient will present valid government photo ID and sign on delivery, and that alcohol is legal to receive at the delivery address.`,
          'You are responsible for knowing and following the alcohol-import and possession laws of your state and locality. We ship only to addresses in states where direct-to-consumer alcohol shipping is permitted under licensed carrier programs.',
        ],
      },
      {
        heading: 'Orders and acceptance',
        body: [
          `All orders are offers to buy and are subject to our acceptance. We may decline or cancel an order — before or after it is placed — for reasons including suspected age misrepresentation, an undeliverable or non-compliant destination, stock or pricing errors, payment problems, or suspected resale or fraud. If we cancel a paid order, we refund it in full.`,
          `The minimum order is $${SHOP.minOrder}. Card payments are not accepted; checkout is completed with Apple Pay, Cash App, Chime, Bitcoin, USDT, or bank wire, and payment instructions are sent after you place the order.`,
        ],
      },
      {
        heading: 'Pricing and product information',
        body: [
          'Prices are in US dollars and may change without notice. We work to keep product descriptions, images, availability, and prices accurate, but errors can occur. If a product’s correct price is higher than the price shown on your order, we will contact you to confirm before shipping or cancel and refund the order.',
          `The ${SHOP.cryptoDiscount}% discount for paying with Bitcoin or USDT is applied to the order subtotal at checkout.`,
        ],
      },
      {
        heading: 'Title and risk',
        body: [
          'For alcohol shipments, title and risk of loss pass to you when a common carrier collects the order from our licensed fulfilment partner. The carrier acts as your agent for transport. See our Shipping Policy and Refund & Returns Policy for what happens if an order is damaged in transit or cannot be delivered.',
        ],
      },
      {
        heading: 'Acceptable use',
        body: [
          'You agree not to buy for resale without a wholesale agreement, not to misrepresent your age or identity, not to attempt to access parts of the site you are not authorised to use, and not to interfere with the site’s operation. Automated agents may browse the catalog and prepare draft orders; a person must complete every purchase.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          `The site’s text, layout, photography, and the ${SITE.name} name and marks are owned by us or our licensors and may not be copied or reused without permission. Third-party brand names and product images are the property of their respective owners and are used to identify the products we sell.`,
        ],
      },
      {
        heading: 'Disclaimers and limitation of liability',
        body: [
          'The site and its content are provided "as is". To the fullest extent permitted by law, we disclaim implied warranties of merchantability and fitness for a particular purpose. Nothing here excludes liability that cannot be excluded under law.',
          'To the fullest extent permitted by law, our total liability arising out of or relating to the site or an order is limited to the amount you paid for the order in question, and we are not liable for indirect or consequential losses.',
          'Alcohol should be consumed responsibly by adults of legal drinking age. Nothing on this site is health or medical advice.',
        ],
      },
      {
        heading: 'Governing law and changes',
        body: [
          'These Terms are governed by the laws of the State of California, without regard to its conflict-of-laws rules, and the state and federal courts located in California have exclusive jurisdiction.',
          'We may update these Terms; the version in effect when you place an order applies to that order. Continued use of the site after a change means you accept the updated Terms.',
          `Questions: ${CONTACT.email}.`,
        ],
      },
    ],
  },

  shipping: {
    slug: 'shipping',
    title: 'Shipping Policy',
    metaTitle: 'Shipping Policy',
    metaDescription:
      `Where ${SITE.name} ships, carrier rates, the 21+ adult-signature requirement, same-day states, and delivery timing for spirits, wine, and non-alcoholic orders.`,
    intro:
      `${SITE.name} ships from Napa Valley, California through licensed alcohol carriers. Here is how delivery works, what it costs, and where we can send an order.`,
    sections: [
      {
        heading: 'Where we ship',
        body: [
          SHOP.shippingEligibility,
          'Non-alcoholic products — zero-proof spirits, wine, Champagne, beer, cider, ready-to-drink cocktails, and bar essentials — ship nationwide with no age check or state alcohol restriction.',
          `To confirm whether we can deliver alcohol to your address, contact ${CONTACT.email} before ordering.`,
        ],
      },
      {
        heading: '21+ adult signature',
        body: [
          `Every shipment that contains alcohol requires someone aged ${COMPLIANCE.ageMinimum} or older at the delivery address to show valid government photo ID and sign for the package. Carriers cannot leave alcohol unattended. If no eligible adult is available, the carrier will usually re-attempt delivery; after the final attempt the package is returned to us.`,
        ],
      },
      {
        heading: 'Rates',
        body: [
          {
            list: [
              `Orders of $${SHOP.freeShippingThreshold} or more: free temperature-controlled express shipping.`,
              `Orders under $${SHOP.freeShippingThreshold}: a flat $${SHOP.shippingFee} shipping fee.`,
              `Minimum order: $${SHOP.minOrder}.`,
            ],
          },
        ],
      },
      {
        heading: 'Delivery timing',
        body: [
          `Same-day dispatch: orders placed before ${SHOP.sameDayCutoff} for delivery to ${sameDay} are dispatched the same day through our compliant carrier network.`,
          `Standard delivery: ${SHOP.standardDelivery} to every other state we serve, after processing.`,
          'Weather, carrier delays, and the adult-signature requirement can extend these windows. Tracking details are emailed once your order ships.',
        ],
      },
      {
        heading: 'Damaged, delayed, or undeliverable orders',
        body: [
          `If your order arrives damaged or is missing items, contact ${CONTACT.email} within 7 days of delivery with photos and we will replace or refund it at no cost — see the Refund & Returns Policy.`,
          'If an order is returned to us because it could not be delivered (no eligible adult after the carrier’s final attempt, an incorrect or non-compliant address, or a refused delivery), we will contact you. We can re-ship at your cost or refund the order minus the original outbound shipping and any carrier return charge.',
        ],
      },
    ],
  },

  refund: {
    slug: 'refund',
    title: 'Refund & Returns Policy',
    metaTitle: 'Refund & Returns Policy',
    metaDescription:
      `${SITE.name} returns: alcohol is final sale once shipped, damaged or wrong items are replaced or refunded free, and non-alcoholic products have a 30-day window.`,
    intro:
      'What can be returned, what cannot, and how refunds work. This policy follows the alcohol-sale laws of the states we ship to.',
    sections: [
      {
        heading: 'Alcohol is final sale once shipped',
        body: [
          'Most states’ liquor laws do not allow alcohol to be returned once it has left a licensed retailer, so alcoholic products cannot be returned for a refund after your order ships. Please review your cart carefully before completing an order.',
        ],
      },
      {
        heading: 'Damaged, defective, or wrong items',
        body: [
          `If an alcoholic order arrives damaged in transit, is defective, or is not what you ordered, email ${CONTACT.email} within 7 days of delivery with your order number and photos. We will replace the item or refund it in full — no return shipment required.`,
        ],
      },
      {
        heading: 'Non-alcoholic products and bar essentials',
        body: [
          'Non-alcoholic spirits, wine, Champagne, beer, cider, and ready-to-drink cocktails, plus bar essentials such as glassware, bitters, and mixers, can be returned unopened and in original condition within 30 days of delivery for a full refund of the product price.',
          `Email ${CONTACT.email} to start a return. Return shipping for a change-of-mind return is the customer’s responsibility; for a damaged or incorrect item we cover it.`,
        ],
      },
      {
        heading: 'Cancelling an order',
        body: [
          `You can cancel an order for a full refund any time before it ships — email ${CONTACT.email} with your order number as soon as possible. Once an order has been dispatched it cannot be cancelled, and the alcohol final-sale rule above applies.`,
        ],
      },
      {
        heading: 'How refunds are issued',
        body: [
          'Approved refunds are returned to the original payment method where possible. For payments made by cryptocurrency or bank wire, refunds are sent to an account or wallet you confirm with us. Refunds are processed within 5–10 business days of approval; the time for funds to appear depends on your payment provider.',
        ],
      },
    ],
  },
};

export const LEGAL_NAV = [
  { slug: 'shipping', title: 'Shipping Policy' },
  { slug: 'refund', title: 'Refund & Returns' },
  { slug: 'privacy', title: 'Privacy Policy' },
  { slug: 'terms', title: 'Terms of Service' },
] as const;
