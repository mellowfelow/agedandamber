import type { Metadata } from 'next';
import { AboutView } from '@/src/views/AboutView';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'About Aged & Amber — Napa Valley Spirits House',
  description: "Aged & Amber is Napa Valley's curated spirits house — direct allocations of rare bourbon, scotch, tequila, and fine wine shipped nationwide.",
  alternates: { canonical: `https://${SITE.domain}/about/` },
};

export default function AboutPage() {
  return <AboutView />;
}
