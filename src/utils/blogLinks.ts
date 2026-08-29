import { BlogPost } from '../types';

/**
 * Maps a blog post's `category` field to the single best-matching shop
 * category slug, so every article can carry a "Shop This Category" CTA and
 * every shop category page can surface a matching "From the Journal" reading
 * list. Keeps blog <-> shop internal linking automatic instead of hand-wired
 * per post, so it stays correct as new posts and categories are added.
 */
const CATEGORY_TO_SHOP_SLUG: Record<string, string> = {
  'Bourbon Education': 'bourbon-whiskey',
  'Scotch Education': 'scotch-whisky',
  'Irish Whiskey Education': 'irish-whiskey',
  'Japanese Whisky Education': 'japanese-whisky',
  'Rye Whiskey Education': 'other-whiskey',
  'Whiskey Education': 'bourbon-whiskey',
  'Vodka Education': 'craft-vodka',
  'Tequila Education': 'tequila-mezcal',
  'Gin Education': 'artisanal-gin',
  'Rum Education': 'aged-dark-rum',
  'Cognac Education': 'cognac-brandy',
  'Liqueur Education': 'rtd-liqueurs',
  'Wine Education': 'fine-wine',
  'Champagne Education': 'champagne-sparkling',
  'Cider Education': 'cider',
  'Beer Education': 'beer',
  'Bar Essentials Education': 'bar-essentials',
  'Cask Craft': 'bourbon-whiskey',
};

// Non-Alcoholic Education, Cocktail Guide, Spirits Guide, and Distillery
// Insights span multiple shop categories, so resolve them from the post's
// own tags instead of a single fixed mapping.
const NA_TAG_SLUG_RULES: [RegExp, string][] = [
  [/champagne|sparkling/i, 'na-champagne-sparkling'],
  [/wine/i, 'na-wine'],
  [/beer|cider/i, 'na-beer-cider'],
  [/rtd|cocktail|mocktail/i, 'na-rtd-cocktails'],
];

export function getShopSlugForPost(post: BlogPost): string {
  if (post.category === 'Non-Alcoholic Education') {
    const haystack = [post.title, post.excerpt, ...post.tags].join(' ');
    for (const [pattern, slug] of NA_TAG_SLUG_RULES) {
      if (pattern.test(haystack)) return slug;
    }
    return 'na-spirits';
  }

  return CATEGORY_TO_SHOP_SLUG[post.category] || 'all';
}

/**
 * Picks related posts for a blog post detail page: same category first
 * (freshest first), then posts sharing at least one tag, excluding the post
 * itself, deduped, capped at `count`.
 */
export function getRelatedPosts(post: BlogPost, allPosts: BlogPost[], count = 3): BlogPost[] {
  const seen = new Set<string>([post.slug]);
  const related: BlogPost[] = [];

  const sameCategory = allPosts
    .filter((p) => p.category === post.category && !seen.has(p.slug))
    .sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));

  for (const p of sameCategory) {
    if (related.length >= count) break;
    if (seen.has(p.slug)) continue;
    related.push(p);
    seen.add(p.slug);
  }

  if (related.length < count && post.tags.length > 0) {
    const tagSet = new Set(post.tags);
    const byTag = allPosts
      .filter((p) => !seen.has(p.slug) && p.tags.some((t) => tagSet.has(t)))
      .sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));

    for (const p of byTag) {
      if (related.length >= count) break;
      if (seen.has(p.slug)) continue;
      related.push(p);
      seen.add(p.slug);
    }
  }

  return related;
}

/** Human-friendly label for the "Shop This Category" CTA link. */
export function getShopCtaLabel(shopSlug: string, categoryName: (slug: string) => string | undefined): string {
  const name = categoryName(shopSlug);
  return name ? `Shop ${name}` : 'Shop All Spirits';
}
