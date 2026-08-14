import fs from 'fs';
import path from 'path';

const ROOT = String.raw`C:\Users\rtutc\Desktop\Aged And Amber\images\product images`;

function listFiles(sub) {
  return fs.readdirSync(path.join(ROOT, sub)).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));
}

// Split "Name — pack descriptor.ext" into { base, pack }
function splitName(filename) {
  const noExt = filename.replace(/\.(jpe?g|png|webp|avif)$/i, '');
  const m = noExt.match(/^(.*?)\s+—\s+(.*)$/);
  if (m) return { base: m[1].trim(), pack: m[2].trim() };
  return { base: noExt.trim(), pack: null };
}

function normPackKey(pack) {
  return pack ? pack.toLowerCase().replace(/\s+/g, ' ').trim() : '';
}

function buildGroups(sub) {
  const files = listFiles(sub);
  const groups = new Map(); // key: base + '||' + normPack -> { base, pack, files: [] }
  for (const f of files) {
    const { base, pack } = splitName(f);
    const key = base.toLowerCase() + '||' + normPackKey(pack);
    if (!groups.has(key)) groups.set(key, { base, pack, files: [] });
    groups.get(key).files.push(f);
  }
  // count how many distinct pack-groups exist per base (to know if we need a disambiguating suffix)
  const baseCounts = new Map();
  for (const g of groups.values()) {
    const b = g.base.toLowerCase();
    baseCounts.set(b, (baseCounts.get(b) || 0) + 1);
  }
  const result = [];
  for (const g of groups.values()) {
    const needsSuffix = baseCounts.get(g.base.toLowerCase()) > 1 && g.pack;
    const displayName = needsSuffix ? `${g.base} (${g.pack})` : g.base;
    result.push({
      displayName,
      base: g.base,
      pack: g.pack,
      chosenFile: g.files[0], // pick first when duplicate-format files exist
      duplicateFilesSkipped: g.files.slice(1),
    });
  }
  return result;
}

for (const sub of ['beer', 'cider', 'bitters', 'cocktails']) {
  const groups = buildGroups(sub);
  console.log(`=== ${sub}: ${groups.length} distinct products (from source files) ===`);
  fs.writeFileSync(`scripts/batch-c-${sub}-groups.json`, JSON.stringify(groups, null, 2));
}
