import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ROOT = String.raw`C:\Users\rtutc\Desktop\Aged And Amber\images\product images`;

function slugify(filename) {
  const base = filename.replace(/\.(jpe?g|png|webp|avif)$/i, '');
  return base
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u2018\u2019']/g, '')
    .replace(/\./g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

// ---------- BEER: subcategory overrides (checked before keyword rules) ----------
const BEER_OVERRIDES = {
  "Bell's Two Hearted Ale": 'IPA',
  'Sierra Nevada Pale Ale': 'Ale & Wheat',
  'SweetWater 420 Extra Pale Ale': 'Ale & Wheat',
  'Shiner Bock': 'Lager',
  'Samuel Adams Utopias': 'Ale & Wheat',
  'New Belgium Voodoo Ranger Variety Pack': 'IPA',
  'Modelo Negra Mexican Dark Lager': 'Lager',
  'Kona Big Wave Golden Ale': 'Ale & Wheat',
};

function beerSubcategory(base) {
  if (BEER_OVERRIDES[base]) return BEER_OVERRIDES[base];
  if (/\bIPA\b/i.test(base)) return 'IPA';
  if (/stout|porter/i.test(base)) return 'Stout & Porter';
  if (/lager|pilsner/i.test(base)) return 'Lager';
  return 'Ale & Wheat';
}

const BITTERS_SUB = {
  'Angostura Aromatic Bitters': 'Bitters',
  'Angostura Orange Bitters': 'Bitters',
  'Bittermens Xocolatl Mole Bitters': 'Bitters',
  "Fee Brothers Black Walnut Bitters": 'Bitters',
  "Peychaud's Aromatic Bitters": 'Bitters',
  'Carpano Antica Formula Sweet Vermouth': 'Vermouth',
  'Dolin Dry Vermouth de Chambéry': 'Vermouth',
  'Dolin Rouge Sweet Vermouth de Chambéry': 'Vermouth',
  'Martini & Rossi Extra Dry Vermouth': 'Vermouth',
  'Martini & Rossi Rosso Sweet Vermouth': 'Vermouth',
  'Noilly Prat Original Dry Vermouth': 'Vermouth',
  'Bundaberg Ginger Beer': 'Mixers & Syrups',
  'Canada Dry Club Soda': 'Mixers & Syrups',
  'Fever-Tree Club Soda': 'Mixers & Syrups',
  'Fever-Tree Light Tonic Water': 'Mixers & Syrups',
  'Fever-Tree Premium Ginger Beer': 'Mixers & Syrups',
  'Fever-Tree Premium Indian Tonic Water': 'Mixers & Syrups',
  'Goslings Ginger Beer': 'Mixers & Syrups',
  'Liber & Co. Orgeat Almond Syrup': 'Mixers & Syrups',
  'Liber & Co. Passion Fruit Syrup': 'Mixers & Syrups',
  'Monin Grenadine Syrup': 'Mixers & Syrups',
  'Monin Mojito Mint Syrup': 'Mixers & Syrups',
  'Monin Pure Cane Syrup': 'Mixers & Syrups',
  'Polar Seltzer Original': 'Mixers & Syrups',
  'Q Mixers Ginger Beer': 'Mixers & Syrups',
  'Q Mixers Indian Tonic Water': 'Mixers & Syrups',
  "Reed's Extra Ginger Beer": 'Mixers & Syrups',
  'Reàl Coconut Cream': 'Mixers & Syrups',
  'Schweppes Tonic Water': 'Mixers & Syrups',
  'Topo Chico Mineral Water': 'Mixers & Syrups',
  "Demitri's Classic Recipe Bloody Mary Seasoning": 'Cocktail Mixes',
  'Finest Call Premium Margarita Mix': 'Cocktail Mixes',
  'Master of Mixes Margarita Mix': 'Cocktail Mixes',
  "McClure's Bloody Mary Mix": 'Cocktail Mixes',
  'Mr & Mrs T Bold & Spicy Bloody Mary Mix': 'Cocktail Mixes',
  'Mr & Mrs T Original Margarita Mix': 'Cocktail Mixes',
  'Tres Agaves Organic Margarita': 'Cocktail Mixes',
  'Zing Zang Bloody Mary Mix': 'Cocktail Mixes',
  'Dirty Sue Premium Olive Juice': 'Garnishes',
  'Filthy Black Cherries': 'Garnishes',
  'Filthy Blue Cheese Stuffed Olives': 'Garnishes',
  'Filthy Olive Brine': 'Garnishes',
  'Filthy Pimento Olives': 'Garnishes',
  'Luxardo Maraschino Cherries': 'Garnishes',
  'Mezzetta Spanish Queen Olives': 'Garnishes',
  'Tillen Farms Bada Bing Cherries': 'Garnishes',
  'Woodford Reserve Bourbon Cherries': 'Garnishes',
  'Martini & Rossi Extra Dry Vermouth 750ml': 'Vermouth',
  "McClure's Bloody Mary Mix 32oz": 'Cocktail Mixes',
  'Mr & Mrs T Bold & Spicy Bloody Mary Mix 1L': 'Cocktail Mixes',
  'Noilly Prat Original Dry Vermouth 75cl': 'Vermouth',
};

// cocktails folder: non-alcoholic items already added in the NA batch -> skip (exact dup)
const COCKTAILS_SKIP_DUP = new Set([
  'Curious Elixirs No. 1 Non-Alcoholic Cocktail',
  'De Soi Très Rosé Non-Alcoholic Aperitif',
  'Ghia Le Spritz Non-Alcoholic Aperitif',
  "Lyre's Amalfi Spritz Non-Alcoholic Cocktail",
]);

// cocktails folder: new non-alcoholic items -> redirect to na-rtd-cocktails
const COCKTAILS_NA_REDIRECT = {
  'Hiyo Non-Alcoholic Social Tonic Variety Pack': 'Non-Alcoholic Canned Cocktails',
  'St. Agrestis Phony Negroni Non-Alcoholic Cocktail': 'Non-Alcoholic Cocktails',
};

function loadGroups(sub) {
  return JSON.parse(fs.readFileSync(`scripts/batch-c-${sub}-groups.json`, 'utf8'));
}

const manifest = [];
let skipped = 0;

async function processOne(relSrc, destCategory, subcategory, displayName) {
  const srcPath = path.join(ROOT, relSrc);
  if (!fs.existsSync(srcPath)) {
    console.error('MISSING SOURCE FILE:', srcPath);
    return;
  }
  const slug = slugify(displayName);
  const outDir = path.join('public', 'images', 'products', destCategory);
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${slug}.webp`);
  await sharp(srcPath)
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(outPath);
  manifest.push({
    category: destCategory,
    subcategory,
    displayName,
    originalFile: relSrc,
    slug,
    imagePath: `/images/products/${destCategory}/${slug}.webp`,
  });
  console.log(destCategory, '/', subcategory, '->', slug);
}

// --- beer ---
for (const g of loadGroups('beer')) {
  const sub = beerSubcategory(g.base);
  await processOne(`beer/${g.chosenFile}`, 'beer', sub, g.displayName);
}

// --- cider (single subcategory) ---
for (const g of loadGroups('cider')) {
  await processOne(`cider/${g.chosenFile}`, 'cider', 'Hard Cider', g.displayName);
}

// --- bitters -> bar-essentials ---
for (const g of loadGroups('bitters')) {
  const sub = BITTERS_SUB[g.base];
  if (!sub) {
    console.error('NO SUBCATEGORY MAPPED FOR:', g.base);
    continue;
  }
  await processOne(`bitters/${g.chosenFile}`, 'bar-essentials', sub, g.displayName);
}

// --- cocktails -> rtd-liqueurs/Craft Cocktails, with NA redirects and dup skips ---
for (const g of loadGroups('cocktails')) {
  if (COCKTAILS_SKIP_DUP.has(g.base)) {
    console.log('SKIP (dup of existing NA product):', g.base);
    skipped++;
    continue;
  }
  if (COCKTAILS_NA_REDIRECT[g.base]) {
    await processOne(`cocktails/${g.chosenFile}`, 'na-rtd-cocktails', COCKTAILS_NA_REDIRECT[g.base], g.displayName);
    continue;
  }
  await processOne(`cocktails/${g.chosenFile}`, 'rtd-liqueurs', 'Craft Cocktails', g.displayName);
}

fs.writeFileSync('scripts/batch-c-manifest.json', JSON.stringify(manifest, null, 2));
console.log('DONE', manifest.length, 'images processed,', skipped, 'skipped as dups');
