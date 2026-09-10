import type { Metadata } from 'next';
import { AboutView } from '@/src/views/AboutView';
import { JsonLd } from '@/src/components/JsonLd';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  // `absolute` so the shared title template ("… | Aged & Amber") isn't
  // appended — this title already carries the brand name.
  title: { absolute: 'About Aged & Amber — Napa Valley Spirits House' },
  description:
    'Aged & Amber — a Napa Valley cellar founded in 2018. We curate and resell allocated spirits, fine wine, Champagne, beer, and zero-proof drinks, shipped nationwide.',
  alternates: { canonical: `https://${SITE.domain}/about/` },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd type="about" />
      <AboutView />
    </>
  );
}
