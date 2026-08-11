import fs from 'fs';

function parseTable(md) {
  const lines = md.split('\n').filter((l) => l.trim().startsWith('|'));
  // drop header + separator
  const rows = lines.slice(2);
  return rows.map((line) => {
    const cells = line
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());
    return cells;
  });
}

// champagne: name | price | abv | vintage/age | shortDescription | fullDescription | nose | palate | finish | badge | region | grape/cask
const champagneRows = parseTable(fs.readFileSync('scripts/research-champagne.md', 'utf8'));
const champagneMap = new Map();
for (const r of champagneRows) {
  const [name, price, abv, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  champagneMap.set(name, { price, abv, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// sparkling: name | subcategory | price | abv | vintage/age | shortDescription | fullDescription | nose | palate | finish | badge | region | grape/method
const sparklingRows = parseTable(fs.readFileSync('scripts/research-sparkling.md', 'utf8'));
const sparklingMap = new Map();
for (const r of sparklingRows) {
  const [name, sub, price, abv, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  sparklingMap.set(name, { price, abv, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// rose/organic: name | subcategory | price | abv | vintage descriptor | shortDescription | fullDescription | nose | palate | finish | badge | region | grape/caskType
const roseRows = parseTable(fs.readFileSync('scripts/research-rose-organic.md', 'utf8'));
const roseMap = new Map();
for (const r of roseRows) {
  const [name, sub, price, abv, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  roseMap.set(name, { price, abv, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

// port/sherry/ice: name | subcategory | price | abv | age/vintage | shortDescription | fullDescription | nose | palate | finish | badge | region | grape/cask
const portRows = parseTable(fs.readFileSync('scripts/research-port-sherry-ice.md', 'utf8'));
const portMap = new Map();
for (const r of portRows) {
  const [name, sub, price, abv, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask] = r;
  portMap.set(name, { price, abv, age, shortDesc, fullDesc, nose, palate, finish, badge, region, cask });
}

function findResearch(name, subcategory) {
  if (subcategory === 'Champagne') {
    if (champagneMap.has(name)) return champagneMap.get(name);
  }
  if (sparklingMap.has(name)) return sparklingMap.get(name);
  if (roseMap.has(name)) return roseMap.get(name);
  if (portMap.has(name)) return portMap.get(name);
  if (champagneMap.has(name)) return champagneMap.get(name);
  return null;
}

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function escDq(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function abvToProof(abv) {
  const n = parseFloat(abv);
  return Math.round(n * 2);
}

function slugifyId(prefix, slug, idx) {
  return `prod-${prefix}-${String(idx).padStart(2, '0')}`;
}

const manifest = JSON.parse(fs.readFileSync('scripts/champagne-wine-manifest.json', 'utf8'));

let champIdx = 5; // continue after prod-champ-01..04 replaced by new ones starting at 01
let fineIdx = 1000; // high start to avoid collision, will renumber below
let naIdx = 4;

const champagneProducts = [];
const fineWineProducts = [];
const naProducts = [];

let cIdx = 1;
let fIdx = 1;

for (const entry of manifest) {
  const name = entry.originalFile.split('/').pop().replace(/\.(jpe?g|png|webp|avif)$/i, '');
  const research = findResearch(name, entry.subcategory);
  if (!research) {
    console.error('MISSING RESEARCH FOR:', name, entry.subcategory);
    continue;
  }
  const price = Math.round(parseFloat(research.price));
  const proof = abvToProof(research.abv);
  const stock = 15 + Math.floor(Math.random() * 40);

  const block = `  {
    id: '__ID__',
    slug: '${entry.slug}',
    name: '${esc(name)}',
    price: ${price},
    category: '${entry.category}',
    subcategory: '${esc(entry.subcategory)}',
    proof: ${proof},
    age: "${escDq(research.age)}",
    volume: '750ml',
    shortDescription: "${escDq(research.shortDesc)}",
    fullDescription: "${escDq(research.fullDesc)}",
    tastingNotes: {
      nose: "${escDq(research.nose)}",
      palate: "${escDq(research.palate)}",
      finish: "${escDq(research.finish)}",
    },
    badge: "${escDq(research.badge)}",
    featured: ${Math.random() < 0.18 ? 'true' : 'false'},
    images: ["${entry.imagePath}"],
    stock: ${stock},
    caskType: "${escDq(research.cask)}",
    distilleryLocation: "${escDq(research.region)}",
  },`;

  if (entry.category === 'champagne-sparkling') {
    const id = `prod-champ-${String(cIdx).padStart(2, '0')}`;
    champagneProducts.push(block.replace('__ID__', id));
    cIdx++;
  } else if (entry.category === 'fine-wine') {
    const id = `prod-wine-champ-${String(fIdx).padStart(2, '0')}`;
    fineWineProducts.push(block.replace('__ID__', id));
    fIdx++;
  } else if (entry.category === 'na-champagne-sparkling') {
    naProducts.push(block.replace('__ID__', 'prod-na-04'));
  }
}

console.log('champagne-sparkling generated:', champagneProducts.length);
console.log('fine-wine generated:', fineWineProducts.length);
console.log('na-champagne-sparkling generated:', naProducts.length);

fs.writeFileSync('scripts/gen-champagne-blocks.txt', champagneProducts.join('\n'));
fs.writeFileSync('scripts/gen-finewine-blocks.txt', fineWineProducts.join('\n'));
fs.writeFileSync('scripts/gen-na-blocks.txt', naProducts.join('\n'));
