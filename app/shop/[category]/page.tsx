import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, CATEGORIES, CATALOG_STATS } from '@/src/data/products';
import { SUBCATEGORY_HUBS } from '@/src/data/subcategoryHubs';
import { BRAND_HUBS } from '@/src/data/brandHubs';
import { BLOG_POSTS } from '@/src/data/blog';
import { getShopSlugForPost } from '@/src/utils/blogLinks';
import { ShopView } from '@/src/views/ShopView';
import { JsonLd } from '@/src/components/JsonLd';
import { SITE } from '@/src/config/site';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: cat.seo?.titleTag || `${cat.name} — Shop`,
    description: cat.seo?.metaDescription || cat.description,
    alternates: { canonical: `https://${SITE.domain}/shop/${cat.slug}/` },
    openGraph: { images: [cat.image] },
  };
}

export default async function ShopCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  const categoryProducts = PRODUCTS.filter((p) => p.category === cat.slug);

  // Category-scoped internal-link data, resolved on the server so the big
  // hub/blog data modules stay out of the ShopView client bundle.
  const styleHubs = SUBCATEGORY_HUBS.filter((h) => h.categorySlug === cat.slug).map((h) => ({
    categorySlug: h.categorySlug,
    hubSlug: h.hubSlug,
    name: h.name,
  }));
  const brandHubs = BRAND_HUBS.filter((h) => h.categorySlug === cat.slug).map((h) => ({
    categorySlug: h.categorySlug,
    hubSlug: h.hubSlug,
    name: h.name,
  }));
  const journalPosts = BLOG_POSTS.filter((p) => getShopSlugForPost(p) === cat.slug)
    .sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1))
    .slice(0, 3)
    .map((p) => ({ slug: p.slug, title: p.title, image: p.image, readTime: p.readTime }));

  return (
    <>
      {cat.seo && (
        <>
          <JsonLd type="itemlist" data={{ name: cat.name, products: categoryProducts }} />
          <JsonLd type="faq" data={cat.seo.faqs} />
        </>
      )}
      <JsonLd
        type="breadcrumb"
        data={[
          { name: 'Home', url: '/' },
          { name: 'Shop', url: '/shop/' },
          { name: cat.name, url: `/shop/${cat.slug}/` },
        ]}
      />
      {/*
        Hand ShopView only this category's products, not the whole catalog.
        A category page can only ever render and search within its own
        category (switching category is a route navigation, not a client
        filter), so shipping all ~1,350 products here just to show ~50 was
        bloating every category page's HTML past Bing's size notice.
        Catalog-wide totals still travel via CATALOG_STATS.
      */}
      <ShopView
        products={categoryProducts}
        selectedCategory={category}
        catalogStats={CATALOG_STATS}
        styleHubs={styleHubs}
        brandHubs={brandHubs}
        journalPosts={journalPosts}
      />
    </>
  );
}
