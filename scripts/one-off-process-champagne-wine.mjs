import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve('..'); // "C:/dev/aged & amber"

function slugify(filename) {
  const base = filename.replace(/\.(jpe?g|png|webp|avif)$/i, '');
  return base
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // strip combining diacritical marks (\u00e9 -> e, \u00f4 -> o, etc.)
    .replace(/[\u2018\u2019']/g, '')
    .replace(/\./g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

// [relative src path under "product images/", destCategory, subcategory] or null destCategory = SKIP
const JOBS = [
  // --- champagne/ (25 files, all -> Champagne) ---
  ["champagne/Armand de Brignac Gold Brut Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Billecart-Salmon Brut Rosé Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Billecart-Salmon Brut Réserve Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Bollinger La Grande Année Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Bollinger Special Cuvée Brut Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Delamotte Blanc de Blancs Champagne.webp", 'champagne-sparkling', 'Champagne'],
  ["champagne/Dom Pérignon Rosé Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Dom Pérignon Vintage Champagne.png", 'champagne-sparkling', 'Champagne'],
  ["champagne/Krug Grande Cuvée Champagne.webp", 'champagne-sparkling', 'Champagne'],
  ["champagne/Laurent-Perrier Cuvée Rosé Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Laurent-Perrier La Cuvée Brut Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Louis Roederer Cristal Champagne.png", 'champagne-sparkling', 'Champagne'],
  ["champagne/Moët & Chandon Grand Vintage Champagne.webp", 'champagne-sparkling', 'Champagne'],
  ["champagne/Moët & Chandon Impérial Brut Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Moët & Chandon Impérial Rosé Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Nicolas Feuillatte Réserve Exclusive Brut Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Perrier-Jouët Blanc de Blancs Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Pierre Péters Cuvée de Réserve Blanc de Blancs.webp", 'champagne-sparkling', 'Champagne'],
  ["champagne/Piper-Heidsieck Cuvée Brut Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Ruinart Blanc de Blancs Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Taittinger Brut La Française Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Taittinger Prestige Rosé Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Veuve Clicquot Rosé Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Veuve Clicquot Vintage Champagne.jpg", 'champagne-sparkling', 'Champagne'],
  ["champagne/Veuve Clicquot Yellow Label Brut Champagne.jpg", 'champagne-sparkling', 'Champagne'],

  // --- sparkling wine/ (28 files, 1 skipped malformed dup) ---
  ["sparkling wine/Albert Bichot Crémant de Bourgogne Brut Réserve.jpg", 'champagne-sparkling', 'Sparkling Wine'],
  ["sparkling wine/Bottega Gold Prosecco.webp", 'champagne-sparkling', 'Prosecco'],
  ["sparkling wine/Chandon California Brut Classic.jpg", 'champagne-sparkling', 'Sparkling Wine'],
  ["sparkling wine/Chandon California Brut Rosé.png", 'champagne-sparkling', 'Sparkling Rosé'],
  ["sparkling wine/Codorníu Clásico Brut Cava.avif", 'champagne-sparkling', 'Cava'],
  ["sparkling wine/Freixenet Cordon Negro Brut Cava.webp", 'champagne-sparkling', 'Cava'],
  ["sparkling wine/Freixenet Italian Rosé Sparkling Wine.jpg", 'champagne-sparkling', 'Sparkling Rosé'],
  ["sparkling wine/Gramona Imperial Gran Reserva Cava.webp", 'champagne-sparkling', 'Cava'],
  ["sparkling wine/Juvé & Camps Reserva de la Familia Cava.jpg", 'champagne-sparkling', 'Cava'],
  ["sparkling wine/Korbel Brut California Champagne.png", 'champagne-sparkling', 'Sparkling Wine'],
  ["sparkling wine/La Marca Luminore Prosecco.webp", 'champagne-sparkling', 'Prosecco'],
  ["sparkling wine/La Marca Prosecco Rosé.jpg", 'champagne-sparkling', 'Sparkling Rosé'],
  ["sparkling wine/La Marca Prosecco.webp", 'champagne-sparkling', 'Prosecco'],
  ["sparkling wine/Louis Bouillot Perle de Vigne Crémant de Bourgogne.jpg", 'champagne-sparkling', 'Sparkling Wine'],
  ["sparkling wine/Lucien Albrecht Crémant d'Alsace Brut Rosé.jpg", 'champagne-sparkling', 'Sparkling Rosé'],
  ["sparkling wine/Lucien Albrecht Crémant d'Alsace Brut.jpg", 'champagne-sparkling', 'Sparkling Wine'],
  ["sparkling wine/Mionetto Prosecco Brut.webp", 'champagne-sparkling', 'Prosecco'],
  ["sparkling wine/Mionetto Prosecco Rosé.webp", 'champagne-sparkling', 'Sparkling Rosé'],
  ["sparkling wine/Mumm Napa Brut Prestige.webp", 'champagne-sparkling', 'Sparkling Wine'],
  ["sparkling wine/Mumm Napa Brut RoséMumm Napa Brut Rosé.webp", null, null], // SKIP malformed dup, use wine2/rose wine copy
  ["sparkling wine/Nino Franco Rustico Valdobbiadene Prosecco Superiore.jpg", 'champagne-sparkling', 'Prosecco'],
  ["sparkling wine/Roederer Estate Brut Rosé.png", 'champagne-sparkling', 'Sparkling Rosé'],
  ["sparkling wine/Roederer Estate Brut Sparkling Wine.webp", 'champagne-sparkling', 'Sparkling Wine'],
  ["sparkling wine/Ruffino Prosecco.jpg", 'champagne-sparkling', 'Prosecco'],
  ["sparkling wine/Santa Margherita Prosecco Superiore DOCG.webp", 'champagne-sparkling', 'Prosecco'],
  ["sparkling wine/Schramsberg Blanc de Blancs Sparkling Wine.webp", 'champagne-sparkling', 'Sparkling Wine'],
  ["sparkling wine/Segura Viudas Brut Reserva Cava.jpg", 'champagne-sparkling', 'Cava'],
  ["sparkling wine/Segura Viudas Heredad Reserva Cava.webp", 'champagne-sparkling', 'Cava'],

  // --- wine 2/ top level (54 files, 5 skipped dups already in catalog) ---
  ["wine 2/Alvear Solera 1927 Pedro Ximénez Sherry.jpg", 'fine-wine', 'Sherry'],
  ["wine 2/Avaline Red Vegan Wine.jpg", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Avaline Rosé Vegan Wine.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Avaline White Vegan Wine.jpg", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Banfi Rosa Regale Brachetto d'Acqui.webp", 'fine-wine', 'Icewine & Dessert Wine'],
  ["wine 2/Barefoot Moscato.webp", null, null], // SKIP dup already catalogued
  ["wine 2/Benziger Organic Cabernet Sauvignon.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Bonterra Organic Cabernet Sauvignon.png", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Bonterra Organic Chardonnay.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Bonterra Organic Merlot.jpg", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Bonterra Organic Sauvignon Blanc.jpg", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Broc Cellars Love Red Natural Wine.jpg", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Broc Cellars Love Rosé Natural Wine.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Croft Original Pale Cream Sherry.webp", 'fine-wine', 'Sherry'],
  ["wine 2/Domaine Bousquet Organic Malbec.jpg", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Dr. Loosen Riesling Eiswein.jpg", 'fine-wine', 'Icewine & Dessert Wine'],
  ["wine 2/Emiliana Natura Cabernet Sauvignon Vegan Wine.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Emiliana Natura Chardonnay Vegan Wine.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Field Recordings Skins Orange Wine.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Fonseca Bin 27 Finest Reserve Port.jpg", 'fine-wine', 'Port'],
  ["wine 2/Foradori Teroldego Natural Wine.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Frey Organic Natural Red Blend.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Frey Organic Pinot Noir.jpg", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/González Byass Néctar Pedro Ximénez Sherry.jpg", 'fine-wine', 'Sherry'],
  ["wine 2/Graham's 10 Year Old Tawny Port.jpg", 'fine-wine', 'Port'],
  ["wine 2/Graham's 20 Year Old Tawny Port.jpg", 'fine-wine', 'Port'],
  ["wine 2/Graham's Late Bottled Vintage Port.webp", 'fine-wine', 'Port'],
  ["wine 2/Graham's Six Grapes Reserve Port.jpg", 'fine-wine', 'Port'],
  ["wine 2/Harveys Bristol Cream Sherry.jpg", 'fine-wine', 'Sherry'],
  ["wine 2/Inniskillin Cabernet Franc Icewine.webp", 'fine-wine', 'Icewine & Dessert Wine'],
  ["wine 2/Inniskillin Vidal Icewine.jpg", 'fine-wine', 'Icewine & Dessert Wine'],
  ["wine 2/Jackson-Triggs Vidal Icewine.webp", 'fine-wine', 'Icewine & Dessert Wine'],
  ["wine 2/Las Jaras Superbloom Natural Wine.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Lustau East India Solera Sherry.webp", 'fine-wine', 'Sherry'],
  ["wine 2/Lustau San Emilio Pedro Ximénez Sherry.webp", 'fine-wine', 'Sherry'],
  ["wine 2/Martha Stoumen Post Flirtation Red Wine.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Meinklang Mulatschak Natural Wine.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Michele Chiarlo Nivole Moscato d'Asti.jpg", null, null], // SKIP dup
  ["wine 2/Noughty Alcohol-Free Sparkling Chardonnay Vegan Wine.webp", 'na-champagne-sparkling', 'Non-Alcoholic Sparkling Wine'],
  ["wine 2/Peller Estates Vidal Icewine.webp", 'fine-wine', 'Icewine & Dessert Wine'],
  ["wine 2/Pizzolato Organic Pinot Grigio.jpeg", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Risata Moscato d'Asti.webp", null, null], // SKIP dup
  ["wine 2/Royal Tokaji 5 Puttonyos Aszú.avif", 'fine-wine', 'Icewine & Dessert Wine'],
  ["wine 2/Saracco Moscato d'Asti.webp", null, null], // SKIP dup
  ["wine 2/Stella Rosa Moscato d'Asti.webp", null, null], // SKIP dup
  ["wine 2/Stellar Organics Running Duck Red Wine.jpg", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Subject to Change Lune Juice Natural Wine.webp", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/Taylor Fladgate 10 Year Old Tawny Port.webp", 'fine-wine', 'Port'],
  ["wine 2/Taylor Fladgate 20 Year Old Tawny Port.jpg", 'fine-wine', 'Port'],
  ["wine 2/Taylor Fladgate 40 Year Old Tawny Port.webp", 'fine-wine', 'Port'],
  ["wine 2/Taylor Fladgate First Estate Reserve Ruby Port.webp", 'fine-wine', 'Port'],
  ["wine 2/Taylor Fladgate Late Bottled Vintage Port.webp", 'fine-wine', 'Port'],
  ["wine 2/The Organic Wine Co. Our Daily Red Blend.jpg", 'fine-wine', 'Organic & Natural Wine'],
  ["wine 2/The Vegan Vine Red Blend Vegan Wine.jpg", 'fine-wine', 'Organic & Natural Wine'],

  // --- wine 2/rose wine/ (23 files, 7 skipped cross-folder dups, 1 kept for champagne-sparkling) ---
  ["wine 2/rose wine/AIX Côtes de Provence Rosé.avif", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/Barefoot Pink Moscato.webp", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/Bartenura Rosé.webp", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/Billecart-Salmon Brut Rosé Champagne.jpg", null, null], // SKIP dup of champagne/
  ["wine 2/rose wine/Chandon California Brut Rosé.jpg", null, null], // SKIP dup of sparkling wine/
  ["wine 2/rose wine/Chateau d'Esclans Rock Angel Rosé.webp", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/Domaines Ott Château de Selle Rosé.jpg", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/Freixenet Italian Rosé Sparkling Wine.jpg", null, null], // SKIP dup of sparkling wine/
  ["wine 2/rose wine/Hampton Water Rosé.jpg", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/La Marca Prosecco Rosé.jpg", null, null], // SKIP dup of sparkling wine/
  ["wine 2/rose wine/La Vieille Ferme Rosé.jpg", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/M de Minuty Côtes de Provence Rosé.jpg", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/Miraval Côtes de Provence Rosé.webp", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/Moët & Chandon Impérial Rosé Champagne.jpg", null, null], // SKIP dup of champagne/
  ["wine 2/rose wine/Mumm Napa Brut Rosé.webp", 'champagne-sparkling', 'Sparkling Rosé'],
  ["wine 2/rose wine/Risata Moscato Rosé.jpg", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/Roederer Estate Brut Rosé.png", null, null], // SKIP dup of sparkling wine/
  ["wine 2/rose wine/Stella Rosa Pink Rosé.jpg", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/Stella Rosa Strawberry Rosé.webp", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/Sutter Home White Zinfandel Rosé.webp", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/The Palm by Whispering Angel Rosé.webp", 'fine-wine', 'Rosé Wine'],
  ["wine 2/rose wine/Veuve Clicquot Rosé Champagne.jpg", null, null], // SKIP dup of champagne/
  ["wine 2/rose wine/Whispering Angel Côtes de Provence Rosé.webp", 'fine-wine', 'Rosé Wine'],
];

const manifest = [];
let skipped = 0;

for (const [relSrc, destCategory, subcategory] of JOBS) {
  const srcPath = path.join(ROOT, 'product images', relSrc);
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

fs.writeFileSync('scripts/champagne-wine-manifest.json', JSON.stringify(manifest, null, 2));
console.log('DONE', manifest.length, 'images processed,', skipped, 'skipped');
