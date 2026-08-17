import type { Metadata } from 'next';
import { FaqView } from '@/src/views/FaqView';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'FAQ — Buying Spirits Online',
  description: 'Frequently asked questions about buying spirits online at Aged & Amber — shipping, eligible states, age verification, payment, and returns.',
  alternates: { canonical: `https://${SITE.domain}/faq/` },
};

export default function FaqPage() {
  return <FaqView />;
}
