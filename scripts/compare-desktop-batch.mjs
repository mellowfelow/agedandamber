import fs from 'fs';
import path from 'path';

const srcRoot = String.raw`C:\Users\rtutc\Desktop\Aged And Amber\images\product images`;

function walk(dir, base) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walk(full, base));
    } else if (/\.(jpe?g|png|webp|avif)$/i.test(entry.name)) {
      results.push(path.relative(base, full));
    }
  }
  return results;
}

const folders = fs.readdirSync(srcRoot, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);

const productsTs = fs.readFileSync('src/data/products.ts', 'utf8');
const singleQ = [...productsTs.matchAll(/\n\s*name: '((?:[^'\\]|\\.)*)'/g)].map((m) =>
  m[1].replace(/\\'/g, "'")
);
const doubleQ = [...productsTs.matchAll(/\n\s*name: "((?:[^"\\]|\\.)*)"/g)].map((m) =>
  m[1].replace(/\\"/g, '"')
);
const nameMatches = [...singleQ, ...doubleQ].map((s) => s.toLowerCase().trim());
const existingSet = new Set(nameMatches);
console.log('existing product count in products.ts:', nameMatches.length);

function baseName(f) {
  return path
    .basename(f)
    .replace(/\.(jpe?g|png|webp|avif)$/i, '')
    .replace(/\s+—.*$/, '')
    .trim()
    .toLowerCase();
}

const summary = [];
for (const folder of folders) {
  const files = walk(path.join(srcRoot, folder), path.join(srcRoot, folder));
  let matched = 0;
  const unmatched = [];
  for (const f of files) {
    const bn = baseName(f);
    if (existingSet.has(bn)) matched++;
    else unmatched.push(f);
  }
  summary.push({ folder, total: files.length, matched, new: unmatched.length, unmatchedFiles: unmatched });
  console.log(folder.padEnd(40), 'total:', files.length, 'matched-existing:', matched, 'NEW:', unmatched.length);
}

fs.writeFileSync('scripts/desktop-batch-summary.json', JSON.stringify(summary, null, 2));
