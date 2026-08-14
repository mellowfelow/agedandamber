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

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
function escDq(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

// --- beer1 + beer2: name | subcategory | price | abv | shortDesc | fullDesc | nose | palate | finish | badge | breweryLocation | keyIngredients
const beerMap = new Map();
for (const file of ['scripts/research-c-beer1.md', 'scripts/research-c-beer2.md']) {
  for (const r of parseTable(fs.readFileSync(file, 'utf8'))) {
    const [name, sub, price, abv, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
    beerMap.set(name, { sub, price, abv, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
  }
}

// --- cider-bitters: name | category | subcategory | price | abv | shortDesc | fullDesc | nose | palate | finish | badge | originLocation | keyDetails
const ciderBittersMap = new Map();
for (const r of parseTable(fs.readFileSync('scripts/research-c-cider-bitters.md', 'utf8'))) {
  const [name, cat, sub, price, abv, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  ciderBittersMap.set(name, { sub, price, abv, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// --- rtd: name | price | abv | shortDesc | fullDesc | nose | palate | finish | badge | originLocation | keyIngredients (subcategory always Craft Cocktails)
const rtdMap = new Map();
for (const r of parseTable(fs.readFileSync('scripts/research-c-rtd.md', 'utf8'))) {
  const [name, price, abv, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  rtdMap.set(name, { sub: 'Craft Cocktails', price, abv, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// --- na-redirect: name | subcategory | price | volume | shortDesc | fullDesc | nose | palate | finish | badge | region | cask
const naRedirectMap = new Map();
for (const r of parseTable(fs.readFileSync('scripts/research-c-na-redirect.md', 'utf8'))) {
  const [name, sub, price, volume, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  naRedirectMap.set(name, { sub, price, volume, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

const ALIASES = {
  'Martini & Rossi Extra Dry Vermouth 750ml': 'Martini & Rossi Extra Dry Vermouth',
  "McClure's Bloody Mary Mix 32oz": "McClure's Bloody Mary Mix",
  'Mr & Mrs T Bold & Spicy Bloody Mary Mix 1L': 'Mr & Mrs T Bold & Spicy Bloody Mary Mix',
  'Noilly Prat Original Dry Vermouth 75cl': 'Noilly Prat Original Dry Vermouth',
  'Underwood Pinot Noir— 4 x 375ml cans': 'Underwood Pinot Noir',
};

function extractVolume(originalFile, displayName) {
  const m = (displayName + ' ' + originalFile).match(/(\d+(?:\.\d+)?\s*x\s*\d+(?:\.\d+)?\s*(?:oz|ml|L)\.?\s*(?:bottles?|cans?)?)/i);
  if (m) return m[1].trim();
  const m2 = originalFile.match(/—\s*([\d.]+\s*(?:ml|L|oz)\.?\s*(?:bottle|can)?s?)/i);
  if (m2) return m2[1].trim();
  return '750ml';
}

const manifest = JSON.parse(fs.readFileSync('scripts/batch-c-manifest.json', 'utf8'));

const groups = {
  beer: { prefix: 'prod-beer', idx: 1, items: [] },
  cider: { prefix: 'prod-cider', idx: 1, items: [] },
  'bar-essentials': { prefix: 'prod-baress', idx: 1, items: [] },
  'rtd-liqueurs': { prefix: 'prod-rtdc', idx: 1, items: [] },
  'na-rtd-cocktails': { prefix: 'prod-na-rtd-c', idx: 1, items: [] },
};

let missing = 0;
for (const entry of manifest) {
  let name = entry.displayName;
  if (ALIASES[name]) name = ALIASES[name];
  // strip baked-in volume with no em-dash separator for bar-essentials lookups
  const strippedName = name.replace(/\s+\d+(\.\d+)?\s*(ml|cl|oz|L)$/i, '');

  let research;
  let map;
  if (entry.category === 'beer') map = beerMap;
  else if (entry.category === 'cider' || entry.category === 'bar-essentials') map = ciderBittersMap;
  else if (entry.category === 'rtd-liqueurs') map = rtdMap;
  else if (entry.category === 'na-rtd-cocktails') map = naRedirectMap;

  research = map.get(name) || map.get(strippedName);

  if (!research) {
    console.error('MISSING RESEARCH FOR:', entry.category, JSON.stringify(name));
    missing++;
    continue;
  }

  const price = Math.round(parseFloat(research.price) * 100) / 100;
  const stock = 10 + Math.floor(Math.random() * 40);
  const group = groups[entry.category];
  const id = `${group.prefix}-${String(group.idx).padStart(2, '0')}`;
  group.idx++;

  const isNaRedirect = entry.category === 'na-rtd-cocktails';
  const proofOrVolume = isNaRedirect
    ? `    proof: 0,\n    age: "NV",\n    volume: '${research.volume}',`
    : `    proof: ${Math.round(parseFloat(research.abv) * 2)},\n    age: "NV",\n    volume: '${extractVolume(entry.originalFile, entry.displayName)}',`;

  const block = `  {
    id: '${id}',
    slug: '${entry.slug}',
    name: '${esc(name)}',
    price: ${price},
    category: '${entry.category}',
    subcategory: '${esc(entry.subcategory)}',
${proofOrVolume}
    shortDescription: "${escDq(research.shortDesc)}",
    fullDescription: "${escDq(research.fullDesc)}",
    tastingNotes: {
      nose: "${escDq(research.nose)}",
      palate: "${escDq(research.palate)}",
      finish: "${escDq(research.finish)}",
    },
    badge: "${escDq(research.badge)}",
    featured: ${Math.random() < 0.1 ? 'true' : 'false'},
    images: ["${entry.imagePath}"],
    stock: ${stock},
    caskType: "${escDq(research.cask)}",
    distilleryLocation: "${escDq(research.region)}",
  },`;
  group.items.push(block);
}

for (const [cat, g] of Object.entries(groups)) {
  console.log(cat, g.items.length);
  fs.writeFileSync(`scripts/gen-c-${cat}-blocks.txt`, g.items.join('\n'));
}
console.log('missing:', missing);
