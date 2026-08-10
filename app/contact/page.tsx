import type { Metadata } from 'next';
import { ContactView } from '@/src/views/ContactView';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'Contact Our Tasting Desk',
  description: 'Questions on order status, 21+ adult signature carrier tracking, or tasting notes? Connect directly with the Aged & Amber concierge.',
  alternates: { canonical: `https://${SITE.domain}/contact/` },
};

export default function ContactPage() {
  return <ContactView />;
}
