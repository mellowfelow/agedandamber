'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '../types';
import { CATEGORIES } from '../data/categories';
import { getRouteUrl } from '../utils/routes';
import { MarkdownContent } from '../components/MarkdownContent';
import { SmartImage } from '../components/SmartImage';
import { getShopSlugForPost } from '../utils/blogLinks';
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag, ChevronDown, ShoppingBag } from 'lucide-react';

/** A "Related Articles" card. Slim — the full BLOG_POSTS module (~970 KB)
 *  is resolved on the server and must not reach this client bundle. */
export interface RelatedPost {
  slug: string;
  title: string;
  image: string;
  readTime: string;
  category: string;
}

interface BlogPostViewProps {
  post: BlogPost;
  relatedPosts: RelatedPost[];
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ post, relatedPosts }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const shopSlug = useMemo(() => getShopSlugForPost(post), [post]);
  const shopCategory = CATEGORIES.find((c) => c.slug === shopSlug);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Link
        href={getRouteUrl.blog()}
        className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-amber-100"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Journal Articles
      </Link>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-amber-400">
          <span className="py-1 px-3 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] font-bold uppercase">
            {post.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100 leading-tight">
          {post.title}
        </h1>

        <p className="text-sm text-amber-300/80 font-medium">
          By {post.author}
        </p>
      </div>

      <div className="aspect-video relative rounded-3xl overflow-hidden border border-amber-900/40">
        <SmartImage
          src={post.image}
          alt={post.title}
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <MarkdownContent content={post.content} />

      {/* Shop This Category CTA — links the article to the relevant shop page */}
      <Link
        href={getRouteUrl.shop(shopSlug)}
        className="flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#2C1A0E] to-[#1A120B] border border-[#D4AF37]/40 p-5 hover:border-[#D4AF37] transition-all group"
      >
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
            <ShoppingBag className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[11px] text-amber-400/70 uppercase tracking-wider font-semibold">
              Shop the Collection
            </p>
            <p className="font-serif font-bold text-amber-100 text-base">
              {shopCategory ? shopCategory.name : 'All Spirits & Zero Proof'}
            </p>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-[#D4AF37] shrink-0 transform group-hover:translate-x-1 transition-transform" />
      </Link>

      <div className="pt-6 border-t border-amber-900/40 flex items-center gap-2 flex-wrap">
        <Tag className="w-4 h-4 text-[#D4AF37]" />
        {post.tags.map((tag) => (
          <span key={tag} className="py-1 px-3 rounded-lg bg-stone-900 text-amber-300 text-xs">
            #{tag}
          </span>
        ))}
      </div>

      {post.faqs && post.faqs.length > 0 && (
        <div className="pt-6 border-t border-amber-900/40 space-y-4">
          <h2 className="text-2xl font-serif font-bold text-amber-100">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {post.faqs.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#1A120B] border border-amber-900/40 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm text-amber-100 hover:text-[#D4AF37] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform ${
                      openFaqIdx === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIdx === idx && (
                  <div className="p-4 pt-0 text-xs text-amber-200/80 leading-relaxed border-t border-amber-900/20">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedPosts.length > 0 && (
        <div className="pt-6 border-t border-amber-900/40 space-y-4">
          <h2 className="text-2xl font-serif font-bold text-amber-100">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={getRouteUrl.blog(rp.slug)}
                className="bg-[#1A120B] rounded-2xl border border-amber-900/30 overflow-hidden hover:border-[#D4AF37]/50 transition-all group flex flex-col"
              >
                <div className="aspect-video relative overflow-hidden bg-stone-900">
                  <SmartImage
                    src={rp.image}
                    alt={rp.title}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 py-1 px-2 rounded-md bg-[#140D08]/90 text-[#D4AF37] text-[9px] font-bold uppercase">
                    {rp.category}
                  </span>
                </div>
                <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                  <h3 className="font-serif font-bold text-amber-100 text-sm group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                  <span className="text-[11px] text-amber-400/70">{rp.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
