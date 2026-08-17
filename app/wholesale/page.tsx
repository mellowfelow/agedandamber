import type { Metadata } from 'next';
import { WholesaleView } from '@/src/views/WholesaleView';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'Wholesale Spirits — Direct Allocations',
  description: 'Wholesale spirits from Aged & Amber — direct allocations for restaurants, hotels, and retailers. Curated bourbon, scotch, tequila, and fine wine.',
  alternates: { canonical: `https://${SITE.domain}/wholesale/` },
};

export default function WholesalePage() {
  return <WholesaleView />;
}
