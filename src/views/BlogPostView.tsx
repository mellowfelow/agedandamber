import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../types';
import { getRouteUrl } from '../utils/routes';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';

interface BlogPostViewProps {
  post: BlogPost;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ post }) => {
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
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-invert max-w-none text-amber-200/90 text-sm leading-relaxed space-y-4 whitespace-pre-line">
        {post.content}
      </div>

      <div className="pt-6 border-t border-amber-900/40 flex items-center gap-2 flex-wrap">
        <Tag className="w-4 h-4 text-[#D4AF37]" />
        {post.tags.map((tag) => (
          <span key={tag} className="py-1 px-3 rounded-lg bg-stone-900 text-amber-300 text-xs">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
