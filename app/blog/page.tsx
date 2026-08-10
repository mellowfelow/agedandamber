import type { Metadata } from 'next';
import { BlogView } from '@/src/views/BlogView';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'The Cask & Wood Journal — Spirits Education',
  description: 'Articles on cask wood finishes, mash bills, tasting guides, and barrel proof appreciation from the Aged & Amber spirits team.',
  alternates: { canonical: `https://${SITE.domain}/blog/` },
};

export default function BlogPage() {
  return <BlogView />;
}
