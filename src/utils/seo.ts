import type { Metadata } from 'next';
import type { Product } from '../types';
import { SITE, SHOP } from '../config/site';
import { productLabels } from './productCopy';

const BRAND_TAIL = ` | ${SITE.name}`;
const MAX_TITLE = 60;

/**
 * Pick a page title that fits the SERP. Given the meaningful part of the
 * title, returns either a plain string (so the layout template appends
 * " | Aged & Amber") when that still fits in ~60 characters, or an
 * `{ absolute }` title without the brand tail when it doesn't — and
 * truncates at a word boundary as a last resort. Fixes the ~630 product
 * titles and ~157 hub titles that were overflowing and truncating.
 */
/** Trim a meta description to ~158 chars at a word boundary. */
export function clampDescription(s: string, max = 158): string {
  const t = (s || '').trim().replace(/\s+/g, ' ');
  if (t.length <= max) return t;
  return t.slice(0, max - 1).replace(/\s+\S*$/, '').trim() + '…';
}

export function fitTitle(base: string): Metadata['title'] {
  const trimmed = base.trim();
  if (trimmed.length + BRAND_TAIL.length <= MAX_TITLE) return trimmed;
  if (trimmed.length <= MAX_TITLE) return { absolute: trimmed };
  const cut = trimmed.slice(0, MAX_TITLE - 1).replace(/\s+\S*$/, '').trim();
  return { absolute: `${cut}…` };
}

/**
 * A meta description that's actually useful. Hand-written ones pass
 * through (capped at 158 chars); short auto-fallbacks (~300 products were
 * under 70 chars) get padded with real, page-specific specs — volume,
 * proof, region, and a tasting note — never a generic CTA.
 */
export function productMetaDescription(p: Product): string {
  const authored = (p.seo?.metaDescription || '').trim();
  if (authored) return clampDescription(authored);

  const base = (p.shortDescription || '').trim().replace(/\s+/g, ' ');
  if (base.length >= 130) return clampDescription(base);

  const lower = base.toLowerCase();
  const specs: string[] = [];
  // Don't repeat the volume if the short description already names it
  // (beer/cider variants carry "Offered here as 6 x 12oz cans." from the
  // M10 de-duplication).
  if (p.volume && !lower.includes(p.volume.toLowerCase())) specs.push(p.volume);
  if (p.proof > 0) {
    const abv = p.proof / 2;
    specs.push(
      productLabels(p.category).showProof
        ? `${p.proof} proof`
        : `${Number.isInteger(abv) ? abv : abv.toFixed(1)}% ABV`
    );
  }
  if (p.distilleryLocation) specs.push(p.distilleryLocation);

  const palate = (p.tastingNotes?.palate || '').trim();
  const parts = [base.replace(/[.\s]+$/, '')];
  if (specs.length) parts.push(`${specs.join(' · ')}`);
  if (palate && parts.join('. ').length + palate.length < 150) parts.push(`Palate: ${palate}`);

  let out = parts.filter(Boolean).join('. ');
  if (!out.endsWith('.')) out += '.';
  // Only fall back to a shipping line if it's still thin.
  if (out.length < 90) {
    out += ` Ships from Aged & Amber — free over $${SHOP.freeShippingThreshold}.`;
  }
  return clampDescription(out);
}
