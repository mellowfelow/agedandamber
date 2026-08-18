import React from 'react';
import { SITE, CONTACT, BRAND, SHOP } from '../config/site';

interface JsonLdProps {
  type: 'homepage' | 'product' | 'article' | 'faq' | 'itemlist';
  data?: any;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  let schemaData: any = null;

  if (type === 'homepage') {
    schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['Store', 'Organization'],
          '@id': `https://${SITE.domain}/#organization`,
          name: SITE.name,
          description: BRAND.description,
          url: `https://${SITE.domain}/`,
          foundingDate: BRAND.foundingYear,
          foundingLocation: {
            '@type': 'Place',
            name: BRAND.foundingLocation,
          },
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
          paymentAccepted: 'Credit Card, Apple Pay, Cash App, Chime, Bitcoin, USDT, Wire Transfer',
          areaServed: 'United States',
          knowsAbout: ['Bourbon Whiskey', 'Single Malt Scotch', 'Cask Strength Rye', 'Extra Añejo Tequila'],
        },
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
  } else if (type === 'product' && data) {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: data.name,
      image: data.images,
      description: data.fullDescription,
      sku: data.id,
      brand: {
        '@type': 'Brand',
        name: SITE.name,
      },
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
