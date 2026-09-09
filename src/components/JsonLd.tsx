import React from 'react';
import { SITE, CONTACT, BRAND, SHOP } from '../config/site';

interface JsonLdProps {
  type: 'homepage' | 'about' | 'product' | 'article' | 'faq' | 'itemlist' | 'breadcrumb';
  data?: any;
}

/**
 * The rich Store/Organization node, shared by the homepage and the About
 * page so the brand entity is described identically (and deduped by Google
 * on its @id). `stats` (item count + price range) is homepage-only.
 */
function organizationNode(stats?: { numberOfItems: number; lowPrice: number; highPrice: number }) {
  const node: any = {
    '@type': ['Store', 'Organization'],
    '@id': `https://${SITE.domain}/#organization`,
    name: SITE.name,
    description: BRAND.description,
    url: `https://${SITE.domain}/`,
    foundingDate: BRAND.foundingYear,
    foundingLocation: { '@type': 'Place', name: BRAND.foundingLocation },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '72 Bellevue Ave',
      addressLocality: 'Napa',
      addressRegion: 'CA',
      postalCode: '94558',
      addressCountry: 'US',
    },
    telephone: CONTACT.phone,
    email: CONTACT.email,
    sameAs: BRAND.sameAs,
    priceRange: '$$$',
    currenciesAccepted: 'USD, BTC, USDT',
    paymentAccepted: 'Apple Pay, Cash App, Chime, Bitcoin, USDT, Wire Transfer',
    areaServed: 'United States',
    knowsAbout: [
      'Bourbon Whiskey',
      'Single Malt Scotch',
      'Irish Whiskey',
      'Japanese Whisky',
      'Tequila & Mezcal',
      'Aged Rum',
      'Artisanal Gin',
      'Craft Vodka',
      'Cognac & Brandy',
      'Fine Wine',
      'Champagne & Sparkling Wine',
      'Craft Beer',
      'Hard Cider',
      'Non-Alcoholic Spirits & Beverages',
    ],
  };
  if (stats) {
    node.numberOfItems = stats.numberOfItems;
    node.makesOffer = {
      '@type': 'AggregateOffer',
      priceCurrency: SITE.currency,
      lowPrice: stats.lowPrice,
      highPrice: stats.highPrice,
      offerCount: stats.numberOfItems,
    };
  }
  return node;
}

// Matches the published policy (FAQ + llms.txt): once an alcohol order
// ships it's final sale, since most states' liquor laws don't allow
// returning alcohol once it's left a licensed retailer — damaged/wrong
// items are still replaced free, just not via a return. Everything not
// in this set (NA spirits/wine/champagne/beer/cider/RTD, bar essentials)
// gets a real 30-day return window instead.
const NO_RETURN_ALCOHOL_CATEGORIES = new Set([
  'bourbon-whiskey',
  'scotch-whisky',
  'irish-whiskey',
  'japanese-whisky',
  'other-whiskey',
  'craft-vodka',
  'tequila-mezcal',
  'artisanal-gin',
  'aged-dark-rum',
  'cognac-brandy',
  'rtd-liqueurs',
  'fine-wine',
  'champagne-sparkling',
  'beer',
  'cider',
]);

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  let schemaData: any = null;

  if (type === 'homepage') {
    schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        organizationNode({
          numberOfItems: data?.numberOfItems ?? 0,
          lowPrice: data?.lowPrice ?? 0,
          highPrice: data?.highPrice ?? 0,
        }),
        {
          '@type': 'WebSite',
          '@id': `https://${SITE.domain}/#website`,
          url: `https://${SITE.domain}/`,
          name: SITE.name,
          publisher: { '@id': `https://${SITE.domain}/#organization` },
          potentialAction: {
            '@type': 'SearchAction',
            target: `https://${SITE.domain}/shop/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        },
      ],
    };
  } else if (type === 'about') {
    schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `https://${SITE.domain}/about/#webpage`,
          url: `https://${SITE.domain}/about/`,
          name: `About ${SITE.name}`,
          description: BRAND.description,
          about: { '@id': `https://${SITE.domain}/#organization` },
          isPartOf: { '@id': `https://${SITE.domain}/#website` },
        },
        organizationNode(),
      ],
    };
  } else if (type === 'product' && data) {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: data.name,
      image: data.images,
      description: data.fullDescription,
      sku: data.id,
      // The product's own producer/brand (e.g. "Buffalo Trace"), resolved
      // from the matching brand hub. Falls back to nothing rather than
      // asserting the retailer as the brand, which is wrong for Product
      // schema and a Merchant listings quality issue.
      ...(data.brandName ? { brand: { '@type': 'Brand', name: data.brandName } } : {}),
      offers: {
        '@type': 'Offer',
        url: `https://${SITE.domain}/shop/${data.category}/${data.slug}/`,
        priceCurrency: SITE.currency,
        price: data.price,
        itemCondition: 'https://schema.org/NewCondition',
        availability: data.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        seller: {
          '@type': 'Organization',
          name: SITE.name,
        },
        hasMerchantReturnPolicy: NO_RETURN_ALCOHOL_CATEGORIES.has(data.category)
          ? {
              '@type': 'MerchantReturnPolicy',
              returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
              applicableCountry: 'US',
            }
          : {
              '@type': 'MerchantReturnPolicy',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 30,
              returnMethod: 'https://schema.org/ReturnByMail',
              applicableCountry: 'US',
            },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: data.price >= SHOP.freeShippingThreshold ? 0 : SHOP.shippingFee,
            currency: SITE.currency,
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'US',
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 0,
              maxValue: 1,
              unitCode: 'DAY',
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 2,
              maxValue: 5,
              unitCode: 'DAY',
            },
          },
        },
      },
    };
  } else if (type === 'article' && data) {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.excerpt,
      image: data.image,
      author: { '@type': 'Organization', name: data.author || SITE.name },
      publisher: {
        '@type': 'Organization',
        name: SITE.name,
        logo: { '@type': 'ImageObject', url: `https://${SITE.domain}/favicon.svg` },
      },
      datePublished: data.isoDate,
      dateModified: data.isoDate,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://${SITE.domain}/blog/${data.slug}/`,
      },
    };
  } else if (type === 'itemlist' && data) {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: data.name,
      numberOfItems: data.products.length,
      itemListElement: data.products.map((p: any, idx: number) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`,
        name: p.name,
      })),
    };
  } else if (type === 'breadcrumb' && data) {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.map((crumb: { name: string; url: string }, idx: number) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: `https://${SITE.domain}${crumb.url}`,
      })),
    };
  } else if (type === 'faq' && data) {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.map((item: any) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }

  if (!schemaData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
