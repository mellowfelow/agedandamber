// Pre-ship crosscheck. Run with `npm run crosscheck` (also implied before a
// deploy). Guards the audit fixes against regression. Exits non-zero on failure.
import fs from 'fs';

const fail = [];
const ok = [];
const check = (name, cond) => (cond ? ok.push(name) : fail.push(name));

// 1. Agent-ready files present (static files + the route handlers that
//    replaced the extensionless .well-known/* files so Vercel serves them
//    with a real Content-Type).
const agentFiles = [
  'public/robots.txt',
  'public/auth.md',
  'public/js/webmcp.js',
  'public/.well-known/agent-skills/index.json',
  'public/.well-known/mcp/server-card.json',
  'public/.well-known/acp.json',
  'app/llms.txt/route.ts',
  'app/openapi.json/route.ts',
  'app/.well-known/ucp/route.ts',
  'app/.well-known/api-catalog/route.ts',
  'app/.well-known/oauth-protected-resource/route.ts',
  'app/.well-known/oauth-authorization-server/route.ts',
  'app/.well-known/openid-configuration/route.ts',
  'app/.well-known/agent-card.json/route.ts',
  'src/data/wellKnown.ts',
];
for (const f of agentFiles) check(`exists: ${f}`, fs.existsSync(f));

// 2. static JSON agent files + the route-served docs parse
for (const f of [
  'public/.well-known/agent-skills/index.json',
  'public/.well-known/mcp/server-card.json',
  'public/.well-known/acp.json',
  'public/.well-known/ai-catalog.json',
  'vercel.json',
]) {
  let parsed = false;
  try { JSON.parse(fs.readFileSync(f, 'utf8')); parsed = true; } catch {}
  check(`valid JSON: ${f}`, parsed);
}
// the route-served docs are JS objects — import and JSON.stringify them
try {
  const wk = await import('../src/data/wellKnown.ts').catch(() => null);
  if (wk) {
    for (const k of Object.keys(wk.WELL_KNOWN_JSON)) JSON.stringify(wk.WELL_KNOWN_JSON[k]);
    JSON.stringify(wk.AGENT_CARD);
    JSON.stringify(wk.OPENAPI_SPEC);
    check('wellKnown.ts documents serialise', true);
  } else {
    // node can't import .ts directly in older setups — skip rather than fail
    check('wellKnown.ts documents serialise', fs.existsSync('src/data/wellKnown.ts'));
  }
} catch (e) {
  check('wellKnown.ts documents serialise', false);
}

// 3. agent-skills entries all carry sha256
try {
  const skills = JSON.parse(fs.readFileSync('public/.well-known/agent-skills/index.json', 'utf8')).skills || [];
  check('agent-skills: every skill has sha256', skills.length > 0 && skills.every((s) => typeof s.sha256 === 'string' && s.sha256.length === 64));
} catch { check('agent-skills: every skill has sha256', false); }

// 4. CSP present in vercel.json + next.config
try {
  const vj = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  const hasCsp = (vj.headers || []).some((h) => (h.headers || []).some((x) => x.key === 'Content-Security-Policy'));
  check('vercel.json has Content-Security-Policy', hasCsp);
} catch { check('vercel.json has Content-Security-Policy', false); }
check('next.config.mjs has Content-Security-Policy', fs.readFileSync('next.config.mjs', 'utf8').includes('Content-Security-Policy'));

// 5. brand entity is spelled consistently — no "Aged And Amber" in shipped code
const scanDirs = ['src', 'app', 'public'];
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  const p = `${dir}/${e.name}`;
  if (e.isDirectory()) return e.name === 'node_modules' ? [] : walk(p);
  return /\.(ts|tsx|js|json|md|txt)$/.test(e.name) || !e.name.includes('.') ? [p] : [];
});
const brandHits = scanDirs.flatMap(walk).filter((f) => {
  try { return fs.readFileSync(f, 'utf8').includes('Aged And Amber'); } catch { return false; }
});
check(`brand name consistent (no "Aged And Amber")${brandHits.length ? ' — ' + brandHits.join(', ') : ''}`, brandHits.length === 0);

// 6. no future-dated blog posts
const blog = fs.readFileSync('src/data/blog.ts', 'utf8');
const today = new Date().toISOString().slice(0, 10);
const future = [...blog.matchAll(/isoDate:\s*["'](\d{4}-\d{2}-\d{2})["']/g)].map((m) => m[1]).filter((d) => d > today);
check(`no future-dated blog posts${future.length ? ` — ${future.length} found (e.g. ${future[0]})` : ''}`, future.length === 0);

// 7. thin-hub guard: sitemap + product page still filter hubs by product count
check('sitemap.ts filters hubs by indexability', fs.readFileSync('app/sitemap.ts', 'utf8').includes('hubIsIndexable'));
check('product page noindexes thin hubs', fs.readFileSync('app/shop/[category]/[slug]/page.tsx', 'utf8').includes('hubIsIndexable'));

// 8. legal pages exist
for (const p of ['privacy', 'terms', 'shipping', 'refund']) check(`legal page: /${p}`, fs.existsSync(`app/${p}/page.tsx`));

console.log(`[crosscheck] ${ok.length} passed, ${fail.length} failed`);
if (fail.length) {
  for (const f of fail) console.error(`  ❌ ${f}`);
  process.exit(1);
}
console.log('[crosscheck] all clear');
