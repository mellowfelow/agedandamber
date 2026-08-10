import type { Metadata } from 'next';
import { FaqView } from '@/src/views/FaqView';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Direct answers on 21+ adult signature delivery, minimum order thresholds, cryptocurrency discounts, and spirits shipping rules.',
  alternates: { canonical: `https://${SITE.domain}/faq/` },
};

export default function FaqPage() {
  return <FaqView />;
}
