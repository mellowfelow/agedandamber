import fs from 'fs';

function parseTable(md, ncols) {
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

// name aliases: manifest-derived name -> research-table name (fixes typos/mismatches in source filenames)
const ALIASES = {
  'Evan Williams Single Barrel Bourbon': 'Evan Williams Single Barrel Vintage Bourbon',
  'Kentucky Owl The Wiseman Bourbonn': 'Kentucky Owl The Wiseman Bourbon',
  'Patrón en Lalique Extra Añejo Tequila series 3': 'Patrón en Lalique Extra Añejo Tequila (Series 3)',
};

// items to skip entirely (no verified real product found)
const SKIP_NAMES = new Set(['Clase Azul Ultra Premium Vodka']);

// --- bourbon: name | subcategory | price | proof | age | shortDesc | fullDesc | nose | palate | finish | badge | distilleryLocation | caskType
const bourbonMap = new Map();
for (const r of parseTable(fs.readFileSync('scripts/research-b-bourbon.md', 'utf8'))) {
  const [name, sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  bourbonMap.set(name, { sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// --- champagne: name | price | abv | age | shortDesc | fullDesc | nose | palate | finish | badge | region | grapeBlend (subcategory always Champagne)
const champagneMap = new Map();
for (const r of parseTable(fs.readFileSync('scripts/research-b-champagne.md', 'utf8'))) {
  const [name, price, abv, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  champagneMap.set(name, { sub: 'Champagne', price, proof: Math.round(parseFloat(abv) * 2), age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// --- cognac: name | subcategory | price | proof | age | shortDesc | fullDesc | nose | palate | finish | badge | distilleryLocation | caskType
const cognacMap = new Map();
for (const r of parseTable(fs.readFileSync('scripts/research-b-cognac.md', 'utf8'))) {
  const [name, sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  cognacMap.set(name, { sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// --- irish/japanese: name | category | subcategory | price | proof | age | shortDesc | fullDesc | nose | palate | finish | badge | distilleryLocation | caskType
const irishJapaneseMap = new Map();
for (const r of parseTable(fs.readFileSync('scripts/research-b-irish-japanese.md', 'utf8'))) {
  const [name, cat, sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  irishJapaneseMap.set(name, { sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// --- other-whiskey: name | subcategory | price | proof | age | shortDesc | fullDesc | nose | palate | finish | badge | distilleryLocation | caskType
const otherWhiskeyMap = new Map();
for (const r of parseTable(fs.readFileSync('scripts/research-b-other-whiskey.md', 'utf8'))) {
  const [name, sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  otherWhiskeyMap.set(name, { sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// --- scotch: name | subcategory | price | proof | age | shortDesc | fullDesc | nose | palate | finish | badge | distilleryLocation | caskType
const scotchMap = new Map();
for (const r of parseTable(fs.readFileSync('scripts/research-b-scotch.md', 'utf8'))) {
  const [name, sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  scotchMap.set(name, { sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// --- tequila: name | subcategory | price | proof | age | shortDesc | fullDesc | nose | palate | finish | badge | distilleryLocation | caskType
const tequilaMap = new Map();
for (const r of parseTable(fs.readFileSync('scripts/research-b-tequila.md', 'utf8'))) {
  const [name, sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  tequilaMap.set(name, { sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// --- vodka: name | subcategory | price | proof | age | shortDesc | fullDesc | nose | palate | finish | badge | distilleryLocation | caskType
const vodkaMap = new Map();
for (const r of parseTable(fs.readFileSync('scripts/research-b-vodka.md', 'utf8'))) {
  const [name, sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  vodkaMap.set(name, { sub, price, proof, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

const CATEGORY_MAPS = {
  'bourbon-whiskey': bourbonMap,
  'champagne-sparkling': champagneMap,
  'cognac-brandy': cognacMap,
  'irish-whiskey': irishJapaneseMap,
  'japanese-whisky': irishJapaneseMap,
  'other-whiskey': otherWhiskeyMap,
  'scotch-whisky': scotchMap,
  'tequila-mezcal': tequilaMap,
  vodka: vodkaMap,
};

const ID_PREFIX = {
  'bourbon-whiskey': 'prod-bourbon-b2',
  'champagne-sparkling': 'prod-champ-b2',
  'cognac-brandy': 'prod-cognac-b2',
  'irish-whiskey': 'prod-irish-b2',
  'japanese-whisky': 'prod-japan-b2',
  'other-whiskey': 'prod-otherwhiskey-b2',
  'scotch-whisky': 'prod-scotch-b2',
  'tequila-mezcal': 'prod-tequila-b2',
  vodka: 'prod-vodka-b2',
};

function extractVolume(originalFile) {
  const m = originalFile.match(/—\s*(\d+(?:\.\d+)?(?:ml|L))\b/i);
  return m ? m[1] : '750ml';
}

const manifest = JSON.parse(fs.readFileSync('scripts/batch-b-manifest.json', 'utf8'));

const groups = {};
for (const cat of Object.keys(ID_PREFIX)) groups[cat] = { idx: 1, items: [] };

let missing = 0;
let skipped = 0;
for (const entry of manifest) {
  const rawName = entry.originalFile.split('/').pop().replace(/\.(jpe?g|png|webp|avif)$/i, '');
  let name = rawName
    .replace(/\s+—.*$/, '')
    .replace(/\s+\d+(\.\d+)?ml$/i, '')
    .trim();
  if (SKIP_NAMES.has(name)) {
    console.log('SKIP (no verified real product):', name);
    skipped++;
    continue;
  }
  if (ALIASES[name]) name = ALIASES[name];

  const map = CATEGORY_MAPS[entry.category];
  const research = map.get(name);
  if (!research) {
    console.error('MISSING RESEARCH FOR:', entry.category, name);
    missing++;
    continue;
  }

  const price = Math.round(parseFloat(research.price) * 100) / 100;
  const proof = parseFloat(research.proof);
  const volume = extractVolume(entry.originalFile);
  const stock = 8 + Math.floor(Math.random() * 35);
  const group = groups[entry.category];
  const id = `${ID_PREFIX[entry.category]}-${String(group.idx).padStart(2, '0')}`;
  group.idx++;

  const block = `  {
    id: '${id}',
    slug: '${entry.slug}',
    name: '${esc(name)}',
    price: ${price},
    category: '${entry.category}',
    subcategory: '${esc(entry.subcategory)}',
    proof: ${proof},
    age: "${escDq(research.age)}",
    volume: '${volume}',
    shortDescription: "${escDq(research.shortDesc)}",
    fullDescription: "${escDq(research.fullDesc)}",
    tastingNotes: {
      nose: "${escDq(research.nose)}",
      palate: "${escDq(research.palate)}",
      finish: "${escDq(research.finish)}",
    },
    badge: "${escDq(research.badge)}",
    featured: ${Math.random() < 0.12 ? 'true' : 'false'},
    images: ["${entry.imagePath}"],
    stock: ${stock},
    caskType: "${escDq(research.cask)}",
    distilleryLocation: "${escDq(research.region)}",
  },`;
  group.items.push(block);
}

for (const [cat, g] of Object.entries(groups)) {
  console.log(cat, g.items.length);
  fs.writeFileSync(`scripts/gen-b-${cat}-blocks.txt`, g.items.join('\n'));
}
console.log('missing:', missing, 'skipped:', skipped);
