import fs from 'fs';

function parseTable(md) {
  const lines = md.split('\n').filter((l) => l.trim().startsWith('|'));
  const rows = lines.slice(2);
  return rows.map((line) =>
    line
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim())
  );
}

// na-wine: name | subcategory | price | volume | shortDescription | fullDescription | nose | palate | finish | badge | region | grapeVariety
const wineRows = parseTable(fs.readFileSync('scripts/research-na-wine.md', 'utf8'));
const wineMap = new Map();
for (const r of wineRows) {
  const [name, sub, price, volume, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  wineMap.set(name, { price, volume, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// na-champagne-sparkling: same columns
const sparklingRows = parseTable(fs.readFileSync('scripts/research-na-sparkling.md', 'utf8'));
const sparklingMap = new Map();
for (const r of sparklingRows) {
  const [name, sub, price, volume, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  sparklingMap.set(name, { price, volume, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// na-spirits: name | subcategory | price | volume | shortDescription | fullDescription | nose | palate | finish | badge | region | botanicals
const spiritsRows = parseTable(fs.readFileSync('scripts/research-na-spirits.md', 'utf8'));
const spiritsMap = new Map();
for (const r of spiritsRows) {
  const [name, sub, price, volume, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  spiritsMap.set(name, { price, volume, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// na-rtd-cocktails + na-beer-cider: name | subcategory | price | volume | shortDescription | fullDescription | nose | palate | finish | badge | region | keyIngredients
const rtdBeerRows = parseTable(fs.readFileSync('scripts/research-na-rtd-beer.md', 'utf8'));
const rtdBeerMap = new Map();
for (const r of rtdBeerRows) {
  const [name, sub, price, volume, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  rtdBeerMap.set(name, { price, volume, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

function findResearch(category, name) {
  if (category === 'na-wine') return wineMap.get(name);
  if (category === 'na-champagne-sparkling') return sparklingMap.get(name);
  if (category === 'na-spirits') return spiritsMap.get(name);
  if (category === 'na-rtd-cocktails' || category === 'na-beer-cider') return rtdBeerMap.get(name);
  return null;
}

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
function escDq(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

const manifest = JSON.parse(fs.readFileSync('scripts/na-batch-manifest.json', 'utf8'));

const groups = {
  'na-wine': { prefix: 'prod-na-wine', idx: 1, items: [] },
  'na-champagne-sparkling': { prefix: 'prod-na-champ', idx: 1, items: [] },
  'na-spirits': { prefix: 'prod-na-spirits', idx: 1, items: [] },
  'na-rtd-cocktails': { prefix: 'prod-na-rtd', idx: 1, items: [] },
  'na-beer-cider': { prefix: 'prod-na-beer', idx: 1, items: [] },
};

for (const entry of manifest) {
  const rawName = entry.originalFile.split('/').pop().replace(/\.(jpe?g|png|webp|avif)$/i, '');
  const name = rawName.replace(/\s+—.*$/, '').trim();
  const research = findResearch(entry.category, name);
  if (!research) {
    console.error('MISSING RESEARCH FOR:', entry.category, name);
    continue;
  }
  const price = Math.round(parseFloat(research.price) * 100) / 100;
  const stock = 15 + Math.floor(Math.random() * 40);
  const group = groups[entry.category];
  const id = `${group.prefix}-${String(group.idx).padStart(2, '0')}`;
  group.idx++;

  const block = `  {
    id: '${id}',
    slug: '${entry.slug}',
    name: '${esc(name)}',
    price: ${price},
    category: '${entry.category}',
    subcategory: '${esc(entry.subcategory)}',
    proof: 0,
    age: "NV",
    volume: '${escDq(research.volume)}',
    shortDescription: "${escDq(research.shortDesc)}",
    fullDescription: "${escDq(research.fullDesc)}",
    tastingNotes: {
      nose: "${escDq(research.nose)}",
      palate: "${escDq(research.palate)}",
      finish: "${escDq(research.finish)}",
    },
    badge: "${escDq(research.badge)}",
    featured: ${Math.random() < 0.15 ? 'true' : 'false'},
    images: ["${entry.imagePath}"],
    stock: ${stock},
    caskType: "${escDq(research.cask)}",
    distilleryLocation: "${escDq(research.region)}",
  },`;
  group.items.push(block);
}

for (const [cat, g] of Object.entries(groups)) {
  console.log(cat, g.items.length);
  fs.writeFileSync(`scripts/gen-na-${cat}-blocks.txt`, g.items.join('\n'));
}
