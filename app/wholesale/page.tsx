import type { Metadata } from 'next';
import { WholesaleView } from '@/src/views/WholesaleView';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'Wholesale & Barrel Allocations',
  description: 'Direct distillery allocations, private single barrel picks, and commercial tier pricing for licensed venues and high-volume collectors.',
  alternates: { canonical: `https://${SITE.domain}/wholesale/` },
};

export default function WholesalePage() {
  return <WholesaleView />;
}
