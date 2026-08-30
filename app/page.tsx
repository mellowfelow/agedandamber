import type { Metadata } from 'next';
import { PRODUCTS } from '@/src/data/products';
import { BLOG_POSTS } from '@/src/data/blog';
import { FAQ_ITEMS } from '@/src/data/faq';
import { HomeView } from '@/src/views/HomeView';
import { JsonLd } from '@/src/components/JsonLd';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'Best Whiskey Online — Rare & Allocated Spirits',
  description: 'Shop the best whiskey online — rare allocated bourbon, single malt scotch, and curated spirits from Napa Valley. Free shipping on $300+.',
  alternates: { canonical: `https://${SITE.domain}/` },
};

export default function HomePage() {
  const prices = PRODUCTS.map((p) => p.price).filter((p) => p > 0);
  const homepageStats = {
    numberOfItems: PRODUCTS.length,
    lowPrice: Math.min(...prices),
    highPrice: Math.max(...prices),
  };

  // Filter on the server and hand HomeView only the 8 it actually renders.
  // It used to receive the entire 1,347-product catalog just to run this
  // same filter client-side — every field of every product (full
  // descriptions, tasting notes, SEO keywords) was getting serialized into
  // the homepage's hydration payload for no reason, ballooning it to 1.8MB
  // of HTML and triggering an "HTML size is too long" flag in Bing
  // Webmaster Tools' URL inspection.
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 8);

  // Same reasoning for the "Journal" strip: hand HomeView only the 3 cards
  // it renders, slimmed, instead of letting it import the ~970 KB
  // BLOG_POSTS module (full article bodies and all) into the client bundle.
  const latestPosts = BLOG_POSTS.slice(0, 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    image: p.image,
    category: p.category,
    author: p.author,
    readTime: p.readTime,
  }));

  return (
    <>
      <JsonLd type="homepage" data={homepageStats} />
      <JsonLd type="faq" data={FAQ_ITEMS.slice(0, 5)} />
      <HomeView
        featuredProducts={featuredProducts}
        totalProductCount={PRODUCTS.length}
        latestPosts={latestPosts}
      />
    </>
  );
}
