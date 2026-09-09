import type { Metadata } from 'next';
import { AboutView } from '@/src/views/AboutView';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  // `absolute` so the shared title template ("… | Aged & Amber") isn't
  // appended — this title already carries the brand name.
  title: { absolute: 'About Aged & Amber — Napa Valley Spirits House' },
  description:
    "Aged & Amber is a Napa Valley cellar curating allocated spirits, fine wine, Champagne, beer, cider, and non-alcoholic alternatives — sourced from trusted distilleries and licensed distributors, shipped nationwide.",
  alternates: { canonical: `https://${SITE.domain}/about/` },
};

export default function AboutPage() {
  return <AboutView />;
}
