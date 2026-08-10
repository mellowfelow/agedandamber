import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blog';
import { BlogPost } from '../types';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react';

export const BlogView: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <button
          onClick={() => setSelectedPost(null)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-amber-100"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Journal Articles
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs text-amber-400">
            <span className="py-1 px-3 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] font-bold uppercase">
              {selectedPost.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {selectedPost.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {selectedPost.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100 leading-tight">
            {selectedPost.title}
          </h1>

          <p className="text-sm text-amber-300/80 font-medium">
            By {selectedPost.author}
          </p>
        </div>

        <div className="aspect-video relative rounded-3xl overflow-hidden border border-amber-900/40">
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none text-amber-200/90 text-sm leading-relaxed space-y-4 whitespace-pre-line">
          {selectedPost.content}
        </div>

        <div className="pt-6 border-t border-amber-900/40 flex items-center gap-2 flex-wrap">
          <Tag className="w-4 h-4 text-[#D4AF37]" />
          {selectedPost.tags.map((tag) => (
            <span key={tag} className="py-1 px-3 rounded-lg bg-stone-900 text-amber-300 text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="space-y-2">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
          Spirits Journal & Education
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100">
          The Cask & Wood Journal
        </h1>
        <p className="text-sm text-amber-200/70 max-w-2xl">
          Articles on cask wood finishes, master distilling mash bills, organoleptic tasting guides, and barrel proof appreciation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.slug}
            onClick={() => setSelectedPost(post)}
            className="bg-[#1A120B] rounded-3xl border border-amber-900/30 overflow-hidden cursor-pointer hover:border-[#D4AF37]/50 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="aspect-video relative overflow-hidden bg-stone-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 py-1 px-2.5 rounded-md bg-[#140D08]/90 text-[#D4AF37] text-[10px] font-bold uppercase">
                  {post.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-[11px] text-amber-400/60 flex items-center justify-between">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-serif font-bold text-amber-100 text-lg group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-amber-200/70 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-amber-900/20 text-xs font-semibold text-[#D4AF37] flex items-center gap-1">
              Read Full Article
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
