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

// [relative src path, destCategory, subcategory] or null destCategory = SKIP
const JOBS = [
  // --- non alcoholic wine/ (28 files; 4 redirected to na-champagne-sparkling since they're sparkling) ---
  ['non alcoholic wine/Ariel Alcohol-Removed Cabernet Sauvignon — 750ml.jpg', 'na-wine', 'Non-Alcoholic Red Wine'],
  ['non alcoholic wine/Ariel Alcohol-Removed Chardonnay — 750ml.jpg', 'na-wine', 'Non-Alcoholic White Wine'],
  ['non alcoholic wine/Château del ISH Non-Alcoholic Sparkling White — 750ml.webp', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Wine'],
  ['non alcoholic wine/FRE Alcohol-Removed Cabernet Sauvignon — 750ml.webp', 'na-wine', 'Non-Alcoholic Red Wine'],
  ['non alcoholic wine/FRE Alcohol-Removed Chardonnay — 750ml.webp', 'na-wine', 'Non-Alcoholic White Wine'],
  ['non alcoholic wine/FRE Alcohol-Removed Merlot — 750ml.jpg', 'na-wine', 'Non-Alcoholic Red Wine'],
  ['non alcoholic wine/FRE Alcohol-Removed Rosé — 750ml.webp', 'na-wine', 'Non-Alcoholic Rosé Wine'],
  ['non alcoholic wine/FRE Alcohol-Removed Sparkling Brut — 750ml.jpg', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Wine'],
  ['non alcoholic wine/Giesen 0% Alcohol-Removed Sparkling Brut — 750ml.jpg', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Wine'],
  ['non alcoholic wine/Giesen 0% Dealcoholized Rosé — 750ml.jpg', 'na-wine', 'Non-Alcoholic Rosé Wine'],
  ['non alcoholic wine/Giesen 0% Pinot Grigio — 750ml.jpg', 'na-wine', 'Non-Alcoholic White Wine'],
  ['non alcoholic wine/Giesen 0% Premium Red Blend — 750ml.jpg', 'na-wine', 'Non-Alcoholic Red Wine'],
  ['non alcoholic wine/Giesen 0% Sauvignon Blanc — 750ml.jpg', 'na-wine', 'Non-Alcoholic White Wine'],
  ['non alcoholic wine/Lautus Alcohol-Free Sauvignon Blanc — 750ml.webp', 'na-wine', 'Non-Alcoholic White Wine'],
  ['non alcoholic wine/Lautus Savvy Red Non-Alcoholic Red Blend — 750ml.jpg', 'na-wine', 'Non-Alcoholic Red Wine'],
  ['non alcoholic wine/Leitz Eins-Zwei-Zero Riesling — 750ml.jpg', 'na-wine', 'Non-Alcoholic White Wine'],
  ['non alcoholic wine/Leitz Eins-Zwei-Zero Rosé — 750ml.jpg', 'na-wine', 'Non-Alcoholic Rosé Wine'],
  ['non alcoholic wine/Leitz Eins-Zwei-Zero Sparkling Riesling — 750ml.webp', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Wine'],
  ['non alcoholic wine/Luminara Alcohol-Removed Napa Valley Chardonnay — 750ml.jpg', 'na-wine', 'Non-Alcoholic White Wine'],
  ['non alcoholic wine/Noughty Alcohol-Free Chardonnay — 750ml.webp', 'na-wine', 'Non-Alcoholic White Wine'],
  ['non alcoholic wine/Noughty Alcohol-Free Rosé — 750ml.webp', 'na-wine', 'Non-Alcoholic Rosé Wine'],
  ['non alcoholic wine/Noughty Alcohol-Free Rouge — 750ml.webp', 'na-wine', 'Non-Alcoholic Red Wine'],
  ['non alcoholic wine/Oddbird GSM Non-Alcoholic Red Wine — 750ml.webp', 'na-wine', 'Non-Alcoholic Red Wine'],
  ['non alcoholic wine/Oddbird Non-Alcoholic Rosé — 750ml.webp', 'na-wine', 'Non-Alcoholic Rosé Wine'],
  ['non alcoholic wine/Saint Viviana Non-Alcoholic Cabernet Sauvignon — 750ml.webp', 'na-wine', 'Non-Alcoholic Red Wine'],
  ['non alcoholic wine/Saint Viviana Non-Alcoholic Sauvignon Blanc — 750ml.jpg', 'na-wine', 'Non-Alcoholic White Wine'],
  ['non alcoholic wine/Surely Non-Alcoholic Rosé — 750ml.jpg', 'na-wine', 'Non-Alcoholic Rosé Wine'],
  ['non alcoholic wine/Tomorrow Cellars Non-Alcoholic Red Blend — 750ml.webp', 'na-wine', 'Non-Alcoholic Red Wine'],

  // --- Non-Alcoholic Sparkling Wine/ (18 files, 1 skipped dup of already-added Noughty Sparkling Chardonnay) ---
  ['Non-Alcoholic Sparkling Wine/BOLLE Non-Alcoholic Sparkling Blanc de Blancs — 750ml.jpg', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Wine'],
  ['Non-Alcoholic Sparkling Wine/Château del ISH Non-Alcoholic Sparkling Rosé — 750ml.webp', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Rosé'],
  ['Non-Alcoholic Sparkling Wine/FRE Alcohol-Removed Sparkling Rosé — 750ml.webp', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Rosé'],
  ['Non-Alcoholic Sparkling Wine/French Bloom Le Blanc Alcohol-Free Sparkling Wine — 750ml.jpg', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Wine'],
  ['Non-Alcoholic Sparkling Wine/French Bloom Le Rosé Alcohol-Free Sparkling Wine — 750ml.jpg', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Rosé'],
  ['Non-Alcoholic Sparkling Wine/Kedem Sparkling White Grape Juice — 25.4oz bottle.png', 'na-champagne-sparkling', 'Sparkling Grape Juice'],
  ['Non-Alcoholic Sparkling Wine/Leitz Eins-Zwei-Zero Sparkling Rosé — 750ml.jpg', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Rosé'],
  ['Non-Alcoholic Sparkling Wine/Noughty Alcohol-Free Sparkling Chardonnay — 750ml.jpg', null, null], // SKIP dup of prod-na-04
  ['Non-Alcoholic Sparkling Wine/Noughty Alcohol-Free Sparkling Rosé — 750ml.webp', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Rosé'],
  ['Non-Alcoholic Sparkling Wine/Oddbird Blanc de Blancs Non-Alcoholic Sparkling Wine — 750ml.jpg', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Wine'],
  ['Non-Alcoholic Sparkling Wine/Oddbird Non-Alcoholic Sparkling Rosé — 750ml.jpg', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Rosé'],
  ['Non-Alcoholic Sparkling Wine/Prima Pavé Non-Alcoholic Rosé Brut — 750ml.jpg', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Rosé'],
  ['Non-Alcoholic Sparkling Wine/St. Julian Sparkling White Grape Juice — 750ml bottle.avif', 'na-champagne-sparkling', 'Sparkling Grape Juice'],
  ['Non-Alcoholic Sparkling Wine/Surely Non-Alcoholic Brut — 750ml.jpg', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Wine'],
  ['Non-Alcoholic Sparkling Wine/Welch\'s Sparkling Red Grape Juice Cocktail — 25.4oz bottle.jpg', 'na-champagne-sparkling', 'Sparkling Grape Juice'],
  ['Non-Alcoholic Sparkling Wine/Welch\'s Sparkling White Grape Juice — 25.4oz bottle.jpg', 'na-champagne-sparkling', 'Sparkling Grape Juice'],
  ['Non-Alcoholic Sparkling Wine/Wölffer Estate Spring in a Bottle Sparkling Blanc de Blancs — 750ml.webp', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Wine'],
  ['Non-Alcoholic Sparkling Wine/Wölffer Estate Spring in a Bottle Sparkling Rosé — 750ml.webp', 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Rosé'],

  // --- Non-alcoholic spirits/ (21 files; new "Non-Alcoholic Botanical Spirit" subcategory added) ---
  ['Non-alcoholic spirits/Almave Blanco Non-Alcoholic Blue Agave Spirit — 700ml.jpg', 'na-spirits', 'Non-Alcoholic Tequila Alternative'],
  ['Non-alcoholic spirits/Cut Above Zero Proof Agave Blanco — 750ml.webp', 'na-spirits', 'Non-Alcoholic Tequila Alternative'],
  ['Non-alcoholic spirits/Cut Above Zero Proof Mezcal — 750ml.webp', 'na-spirits', 'Non-Alcoholic Tequila Alternative'],
  ['Non-alcoholic spirits/Free Spirits The Spirit of Bourbon — 750ml.webp', 'na-spirits', 'Non-Alcoholic Whiskey Alternative'],
  ['Non-alcoholic spirits/Free Spirits The Spirit of Gin — 750ml.webp', 'na-spirits', 'Non-Alcoholic Gin Alternative'],
  ['Non-alcoholic spirits/Free Spirits The Spirit of Tequila — 750ml.webp', 'na-spirits', 'Non-Alcoholic Tequila Alternative'],
  ['Non-alcoholic spirits/ISH Mexican Agave Spirit — 500ml.jpg', 'na-spirits', 'Non-Alcoholic Tequila Alternative'],
  ['Non-alcoholic spirits/Lyre\'s Agave Blanco Non-Alcoholic Spirit — 700ml.jpg', 'na-spirits', 'Non-Alcoholic Tequila Alternative'],
  ['Non-alcoholic spirits/Lyre\'s American Malt Non-Alcoholic Spirit — 700ml.jpg', 'na-spirits', 'Non-Alcoholic Whiskey Alternative'],
  ['Non-alcoholic spirits/Lyre\'s Dry London Spirit — 700ml.webp', 'na-spirits', 'Non-Alcoholic Gin Alternative'],
  ['Non-alcoholic spirits/Monday Zero Alcohol Gin — 750ml.webp', 'na-spirits', 'Non-Alcoholic Gin Alternative'],
  ['Non-alcoholic spirits/Monday Zero Alcohol Whiskey — 750ml.webp', 'na-spirits', 'Non-Alcoholic Whiskey Alternative'],
  ['Non-alcoholic spirits/Pentire Adrift Non-Alcoholic Botanical Spirit — 700ml.jpg', 'na-spirits', 'Non-Alcoholic Botanical Spirit'],
  ['Non-alcoholic spirits/Ritual Zero Proof Gin Alternative — 750ml.jpg', 'na-spirits', 'Non-Alcoholic Gin Alternative'],
  ['Non-alcoholic spirits/Ritual Zero Proof Tequila Alternative — 750ml.jpg', 'na-spirits', 'Non-Alcoholic Tequila Alternative'],
  ['Non-alcoholic spirits/Ritual Zero Proof Whiskey Alternative — 750ml.jpg', 'na-spirits', 'Non-Alcoholic Whiskey Alternative'],
  ['Non-alcoholic spirits/Seedlip Garden 108 Non-Alcoholic Spirit — 700ml.jpg', 'na-spirits', 'Non-Alcoholic Botanical Spirit'],
  ['Non-alcoholic spirits/Seedlip Grove 42 Non-Alcoholic Spirit — 700ml.jpg', 'na-spirits', 'Non-Alcoholic Botanical Spirit'],
  ['Non-alcoholic spirits/Spiritless Jalisco 55 Non-Alcoholic Tequila Alternative — 700ml.webp', 'na-spirits', 'Non-Alcoholic Tequila Alternative'],
  ['Non-alcoholic spirits/Spiritless Kentucky 74 Non-Alcoholic Bourbon Whiskey — 700ml.webp', 'na-spirits', 'Non-Alcoholic Whiskey Alternative'],
  ['Non-alcoholic spirits/Three Spirit Nightcap Non-Alcoholic Elixir — 500ml.webp', 'na-spirits', 'Non-Alcoholic Botanical Spirit'],

  // --- Ready-to-drink non-alcoholic cocktails/ (17 files) ---
  ['Ready-to-drink non-alcoholic cocktails/Curious Elixirs No. 1 Non-Alcoholic Cocktail — 4 x 355ml bottles.png', 'na-rtd-cocktails', 'Non-Alcoholic Cocktails'],
  ['Ready-to-drink non-alcoholic cocktails/De Soi Purple Lune Non-Alcoholic Aperitif — 4 x 250ml cans.webp', 'na-rtd-cocktails', 'Non-Alcoholic Spritz'],
  ['Ready-to-drink non-alcoholic cocktails/De Soi Très Rosé Non-Alcoholic Aperitif — 4 x 250ml cans.png', 'na-rtd-cocktails', 'Non-Alcoholic Spritz'],
  ['Ready-to-drink non-alcoholic cocktails/Free AF Apero Spritz Non-Alcoholic Cocktail — 4 x 250ml cans.jpg', 'na-rtd-cocktails', 'Non-Alcoholic Spritz'],
  ['Ready-to-drink non-alcoholic cocktails/Free AF Non-Alcoholic Cuba Libre — 4 x 250ml cans.webp', 'na-rtd-cocktails', 'Non-Alcoholic Canned Cocktails'],
  ['Ready-to-drink non-alcoholic cocktails/Ghia Le Spritz Non-Alcoholic Aperitif — 4 x 250ml cans.webp', 'na-rtd-cocktails', 'Non-Alcoholic Spritz'],
  ['Ready-to-drink non-alcoholic cocktails/ISH Non-Alcoholic Lime Daiquiri — 4 x 250ml cans.webp', 'na-rtd-cocktails', 'Non-Alcoholic Canned Cocktails'],
  ['Ready-to-drink non-alcoholic cocktails/ISH Non-Alcoholic Mojito — 4 x 250ml cans.jpg', 'na-rtd-cocktails', 'Non-Alcoholic Canned Cocktails'],
  ['Ready-to-drink non-alcoholic cocktails/ISH Non-Alcoholic Paloma — 4 x 250ml cans.jpg', 'na-rtd-cocktails', 'Non-Alcoholic Canned Cocktails'],
  ['Ready-to-drink non-alcoholic cocktails/ISH SpritzISH Non-Alcoholic Spritz — 4 x 250ml cans.webp', 'na-rtd-cocktails', 'Non-Alcoholic Spritz'],
  ['Ready-to-drink non-alcoholic cocktails/Lapo\'s Non-Alcoholic Negroni — 4 x 200ml bottles.webp', 'na-rtd-cocktails', 'Non-Alcoholic Cocktails'],
  ['Ready-to-drink non-alcoholic cocktails/Lyre\'s Amalfi Spritz Non-Alcoholic Cocktail — 4 x 250ml cans.avif', 'na-rtd-cocktails', 'Non-Alcoholic Spritz'],
  ['Ready-to-drink non-alcoholic cocktails/Mingle Cranberry Cosmo Sparkling Mocktail — 4 x 12oz cans.avif', 'na-rtd-cocktails', 'Non-Alcoholic Canned Cocktails'],
  ['Ready-to-drink non-alcoholic cocktails/Mingle Key Lime Margarita Sparkling Mocktail — 4 x 12oz cans.avif', 'na-rtd-cocktails', 'Non-Alcoholic Canned Cocktails'],
  ['Ready-to-drink non-alcoholic cocktails/Mingle Mocktails Variety Pack — 12 x 12oz cans.jpg', 'na-rtd-cocktails', 'Non-Alcoholic Canned Cocktails'],
  ['Ready-to-drink non-alcoholic cocktails/Parch Desert Margarita Non-Alcoholic Cocktail — 4 x 250ml cans.jpg', 'na-rtd-cocktails', 'Non-Alcoholic Canned Cocktails'],
  ['Ready-to-drink non-alcoholic cocktails/Ritual Zero Proof Non-Alcoholic Spritz — 4 x 12oz cans.webp', 'na-rtd-cocktails', 'Non-Alcoholic Spritz'],

  // --- Non-alcoholic beer/ (15 files, all -> Non-Alcoholic Beer) ---
  ['Non-alcoholic beer/Athletic Brewing Free Wave Hazy IPA — 6 x 12oz cans.jpg', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Athletic Brewing Run Wild IPA — 6 x 12oz cans.jpg', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Athletic Brewing Upside Dawn Golden Ale — 6 x 12oz cans.jpg', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Best Day Brewing Electro-Lime Mexican-Style Lager — 6 x 12oz cans.jpg', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Budweiser Zero Non-Alcoholic Beer — 12 x 12oz cans.jpg', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Corona Cero Non-Alcoholic Mexican Lager — 6 x 12oz bottles.webp', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Deschutes Black Butte Non-Alcoholic Porter — 6 x 12oz cans.avif', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Guinness 0 Non-Alcoholic Draught Stout — 4 x 14.9oz can.jpg', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Heineken 0.0 Non-Alcoholic Beer — 6 x 12oz bottles.webp', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Heineken 0.0 Non-Alcoholic Beer — 6 x 12oz cans.jpg', null, null], // SKIP dup (bottles version kept)
  ['Non-alcoholic beer/O\'Doul\'s Premium Non-Alcoholic Beer — 12 x 12oz bottles.avif', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Partake Brewing Pale Ale — 6 x 12oz cans.webp', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Sam Adams Just the Haze Non-Alcoholic IPA — 6 x 12oz cans.jpg', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Sierra Nevada Trail Pass IPA — 6 x 12oz cans.webp', 'na-beer-cider', 'Non-Alcoholic Beer'],
  ['Non-alcoholic beer/Stella Artois Liberté 0.0 Non-Alcoholic Beer — 6 x 11.2oz bottles.webp', 'na-beer-cider', 'Non-Alcoholic Beer'],
];

const manifest = [];
let skipped = 0;

for (const [relSrc, destCategory, subcategory] of JOBS) {
  const srcPath = path.join(ROOT, relSrc);
  const filename = path.basename(relSrc);

  if (!destCategory) {
    console.log('SKIP', relSrc);
    skipped++;
    continue;
  }

  if (!fs.existsSync(srcPath)) {
    console.error('MISSING SOURCE FILE:', srcPath);
    continue;
  }

  const slug = slugify(filename);
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
    originalFile: relSrc,
    slug,
    imagePath: `/images/products/${destCategory}/${slug}.webp`,
  });
  console.log(destCategory, '/', subcategory, '->', slug);
}

fs.writeFileSync('scripts/na-batch-manifest.json', JSON.stringify(manifest, null, 2));
console.log('DONE', manifest.length, 'images processed,', skipped, 'skipped');
