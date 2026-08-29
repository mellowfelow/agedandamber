import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/src/data/blog';
import { BlogPostView } from '@/src/views/BlogPostView';
import { JsonLd } from '@/src/components/JsonLd';
import { SITE } from '@/src/config/site';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://${SITE.domain}/blog/${post.slug}/` },
    openGraph: { images: [post.image], type: 'article' },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd type="article" data={post} />
      {post.faqs && post.faqs.length > 0 && <JsonLd type="faq" data={post.faqs} />}
      <JsonLd
        type="breadcrumb"
        data={[
          { name: 'Home', url: '/' },
          { name: 'Spirits Journal', url: '/blog/' },
          { name: post.title, url: `/blog/${post.slug}/` },
        ]}
      />
      <BlogPostView post={post} />
    </>
  );
}
