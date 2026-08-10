import type { Metadata } from 'next';
import { AboutView } from '@/src/views/AboutView';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'About Us — Our Sourcing Story',
  description: 'Learn how Aged & Amber sources authentic, allocated bourbon, scotch, and rare cask spirits directly from trusted distilleries and licensed distributors.',
  alternates: { canonical: `https://${SITE.domain}/about/` },
};

export default function AboutPage() {
  return <AboutView />;
}
