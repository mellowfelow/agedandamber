#!/usr/bin/env node
/**
 * Submits every URL in the live sitemap to the IndexNow API (used by Bing,
 * Yandex, Seznam.cz, and Naver — not Google, which doesn't support
 * IndexNow and needs sitemap submission/Request Indexing done directly in
 * Search Console).
 *
 * The site already hosts an IndexNow key file at
 * /<key>.txt (see SITE.indexNowKey in src/config/site.ts) — that's what
 * proves domain ownership to the API. This script was the missing piece:
 * the key existed but nothing ever actually called IndexNow with it.
 *
 * Re-run this after any batch of new/changed pages (new products, new
 * blog posts, price changes) so Bing picks them up fast instead of
 * waiting on its normal crawl schedule. This is a maintenance tool, not a
 * one-off — keep it in scripts/.
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs [https://www.agedandamber.com]
 */

const SITE_ORIGIN = process.argv[2] || 'https://www.agedandamber.com';
const INDEXNOW_KEY = '002a541a7ee2c7c51188fb5517599103';
// The generic api.indexnow.org relay returned a transient
// "SiteVerificationNotCompleted" 403 on first submission even though the
// key file was confirmed correctly hosted (200 OK, right content) — likely
// first-time propagation across the engines it fans out to. Bing's own
// endpoint accepted the exact same key/payload immediately (200 OK), so
// that's the one this script actually calls.
const INDEXNOW_ENDPOINT = 'https://www.bing.com/indexnow';

async function main() {
  const sitemapUrl = `${SITE_ORIGIN}/sitemap.xml`;
  console.log(`Fetching ${sitemapUrl} ...`);
  const res = await fetch(sitemapUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  if (urls.length === 0) {
    throw new Error('No <loc> entries found in sitemap — aborting, nothing to submit.');
  }

  const host = new URL(SITE_ORIGIN).host;
  const keyLocation = `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`;

  console.log(`Found ${urls.length} URLs. Submitting to IndexNow in batches of 10,000...`);

  // IndexNow allows up to 10,000 URLs per submission; we're well under
  // that today, but batch anyway so this keeps working as the catalog grows.
  const BATCH_SIZE = 10000;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const body = {
      host,
      key: INDEXNOW_KEY,
      keyLocation,
      urlList: batch,
    };

    const submitRes = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });

    console.log(
      `Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.length} URLs -> ${submitRes.status} ${submitRes.statusText}`
    );
    if (!submitRes.ok && submitRes.status !== 202) {
      const text = await submitRes.text().catch(() => '');
      console.error('Response body:', text);
    }
  }

  console.log('Done. IndexNow responses: 200/202 = accepted, 400 = bad request, 403 = key not valid/not found at keyLocation.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
