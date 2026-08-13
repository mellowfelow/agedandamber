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

const JOBS = [
  // --- bourbon 2/ (24 files) ---
  ['bourbon 2/Angel\'s Envy Cask Strength Bourbon.webp', 'bourbon-whiskey', 'Premium Bourbon'],
  ['bourbon 2/Barrell Bourbon Batch Series 31.jpg', 'bourbon-whiskey', 'Small Batch Bourbon'],
  ['bourbon 2/Blanton\'s Gold Edition Bourbon.webp', 'bourbon-whiskey', 'Single Barrel Bourbon'],
  ['bourbon 2/Blanton\'s Straight From The Barrel Bourbon — 700ml.png', 'bourbon-whiskey', 'Single Barrel Bourbon'],
  ['bourbon 2/Colonel E.H. Taylor Single Barrel Bourbon.jpg', 'bourbon-whiskey', 'Single Barrel Bourbon'],
  ['bourbon 2/Eagle Rare 10 Year Bourbon.webp', 'bourbon-whiskey', 'Single Barrel Bourbon'],
  ['bourbon 2/Eagle Rare 17 Year Bourbon.webp', 'bourbon-whiskey', 'Premium Bourbon'],
  ['bourbon 2/Elmer T. Lee Single Barrel Bourbon.webp', 'bourbon-whiskey', 'Single Barrel Bourbon'],
  ['bourbon 2/Evan Williams Single Barrel Bourbon.webp', 'bourbon-whiskey', 'Single Barrel Bourbon'],
  ['bourbon 2/Four Roses Single Barrel Bourbon.webp', 'bourbon-whiskey', 'Single Barrel Bourbon'],
  ['bourbon 2/George T. Stagg Bourbon.webp', 'bourbon-whiskey', 'Premium Bourbon'],
  ['bourbon 2/Kentucky Owl The Wiseman Bourbonn.webp', 'bourbon-whiskey', 'Premium Bourbon'],
  ['bourbon 2/Larceny Barrel Proof Bourbon.jpg', 'bourbon-whiskey', 'Wheated Bourbon'],
  ['bourbon 2/Makers Mark Private Selection Bourbon.webp', 'bourbon-whiskey', 'Wheated Bourbon'],
  ['bourbon 2/New Riff Single Barrel Bourbon.webp', 'bourbon-whiskey', 'Single Barrel Bourbon'],
  ['bourbon 2/Old Fitzgerald Bottled-in-Bond Bourbon.jpg', 'bourbon-whiskey', 'Wheated Bourbon'],
  ['bourbon 2/Old Grand Dad 114 Kentucky Straight Bourbon.avif', 'bourbon-whiskey', 'Kentucky Bourbon'],
  ['bourbon 2/Pappy Van Winkle\'s Family Reserve 15 Year Bourbon.jpg', 'bourbon-whiskey', 'Premium Bourbon'],
  ['bourbon 2/Rock Hill Farms Single Barrel Bourbon.webp', 'bourbon-whiskey', 'Single Barrel Bourbon'],
  ['bourbon 2/W.L. Weller 12 Year Bourbon.webp', 'bourbon-whiskey', 'Wheated Bourbon'],
  ['bourbon 2/W.L. Weller Antique 107 Bourbon.webp', 'bourbon-whiskey', 'Wheated Bourbon'],
  ['bourbon 2/W.L. Weller Full Proof Bourbon.jpg', 'bourbon-whiskey', 'Wheated Bourbon'],
  ['bourbon 2/Woodford Reserve Batch Proof Bourbon — 700ml.jpg', 'bourbon-whiskey', 'Small Batch Bourbon'],
  ['bourbon 2/Yellowstone Select Kentucky Straight Bourbon.jpg', 'bourbon-whiskey', 'Kentucky Bourbon'],

  // --- champagne 2/ (31 files, all Champagne) ---
  ['champagne 2/Billecart-Salmon Blanc de Blancs Grand Cru Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Bollinger R.D. Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Bollinger Rosé Champagne — 750ml.png', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Charles Heidsieck Blanc de Blancs Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Charles Heidsieck Brut Réserve Champagne — 750ml.jpg', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Charles Heidsieck Rosé Réserve Champagne — 750ml.jpg', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Dom Pérignon P2 Plénitude Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Dom Ruinart Blanc de Blancs Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/G.H. Mumm RSRV Blanc de Blancs Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Henri Giraud Blanc de Craie Champagne — 750ml.jpg', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Krug Clos du Mesnil Blanc de Blancs Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Krug Rosé Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Krug Vintage Champagne — 750ml.avif', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Lanson Le Black Label Brut Champagne — 750ml.jpg', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Lanson Le Blanc de Blancs Champagne — 750ml.jpg', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Leclerc Briant Brut Rosé Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Louis Roederer Collection Brut Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Louis Roederer Cristal Rosé Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Louis Roederer Cristal Vinothèque Champagne — 750ml.jpg', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Nicolas Feuillatte Rosé Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Perrier-Jouët Belle Epoque Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Pol Roger Blanc de Blancs Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Pol Roger Brut Réserve Champagne — 750ml.jpg', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Pol Roger Cuvée Sir Winston Churchill Champagne — 750ml.avif', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Pommery Brut Rosé Champagne — 750ml.jpg', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Pommery Brut Royal Champagne — 750ml.jpg', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Ruinart Brut Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Ruinart Rosé Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Salon Blanc de Blancs Champagne — 750ml.jpg', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Taittinger Comtes de Champagne Blanc de Blancs — 750ml.jpg', 'champagne-sparkling', 'Champagne'],
  ['champagne 2/Veuve Clicquot La Grande Dame Rosé Champagne — 750ml.webp', 'champagne-sparkling', 'Champagne'],

  // --- cognac and brandy 2/ (21 files) ---
  ['cognac and brandy 2/Asbach 12 Year Old German Brandy — 700ml.webp', 'cognac-brandy', 'Rare Brandy'],
  ['cognac and brandy 2/Camus VSOP Elegance Cognac — 750ml.jpg', 'cognac-brandy', 'VSOP Cognac'],
  ['cognac and brandy 2/Camus XO Elegance Cognac — 750ml.jpg', 'cognac-brandy', 'XO Cognac'],
  ['cognac and brandy 2/Cardinal Mendoza Carta Real Brandy — 750ml.jpg', 'cognac-brandy', 'Rare Brandy'],
  ['cognac and brandy 2/Courvoisier L\'Essence Cognac — 700ml.webp', 'cognac-brandy', 'XO Cognac'],
  ['cognac and brandy 2/Fundador Solera Brandy — 750ml.jpg', 'cognac-brandy', 'Rare Brandy'],
  ['cognac and brandy 2/H by Hine VSOP Cognac — 750ml.webp', 'cognac-brandy', 'VSOP Cognac'],
  ['cognac and brandy 2/Hardy VSOP Organic Cognac — 750ml.webp', 'cognac-brandy', 'VSOP Cognac'],
  ['cognac and brandy 2/Hartley VSOP Brandy — 750ml.jpg', 'cognac-brandy', 'Rare Brandy'],
  ['cognac and brandy 2/Hennessy Richard Cognac — 700ml.webp', 'cognac-brandy', 'XO Cognac'],
  ['cognac and brandy 2/Hine Antique XO Cognac — 750ml.webp', 'cognac-brandy', 'XO Cognac'],
  ['cognac and brandy 2/Korbel California Brandy — 750ml.jpg', 'cognac-brandy', 'Rare Brandy'],
  ['cognac and brandy 2/Laird\'s 7½ Year Old Apple Brandy — 750ml.webp', 'cognac-brandy', 'Rare Brandy'],
  ['cognac and brandy 2/Martell Cordon Bleu Extra Cognac — 700ml.webp', 'cognac-brandy', 'XO Cognac'],
  ['cognac and brandy 2/Paul Masson Grande Amber Brandy — 750ml.jpg', 'cognac-brandy', 'Rare Brandy'],
  ['cognac and brandy 2/Pierre Ferrand XO Cognac — 750ml.webp', 'cognac-brandy', 'XO Cognac'],
  ['cognac and brandy 2/Presidente Solera Brandy — 750ml.webp', 'cognac-brandy', 'Rare Brandy'],
  ['cognac and brandy 2/Rémy Martin Louis XIII Cognac — 700ml.webp', 'cognac-brandy', 'XO Cognac'],
  ['cognac and brandy 2/St-Rémy VSOP French Brandy — 750ml.webp', 'cognac-brandy', 'Rare Brandy'],
  ['cognac and brandy 2/Torres 5 Solera Reserva Brandy — 750ml.webp', 'cognac-brandy', 'Rare Brandy'],
  ['cognac and brandy 2/Torres Jaime I Brandy — 700ml.jpg', 'cognac-brandy', 'Rare Brandy'],

  // --- irish whiskey 2/ (14 files, 1 skipped malformed dup) ---
  ['irish whiskey 2/2 Gingers Irish Whiskey.webp', 'irish-whiskey', 'Blended Irish Whiskey'],
  ['irish whiskey 2/Baileys Chocolate Irish Cream Liqueur.jpg', 'irish-whiskey', 'Irish Cream Whiskey'],
  ['irish whiskey 2/Blue Spot 7 Year Old Cask Strength Single Pot Still Irish Whiskey.webp', 'irish-whiskey', 'Single Pot Still Irish Whiskey'],
  ['irish whiskey 2/Bushmills 16 Year Old Single Malt Irish Whiskey.webp', 'irish-whiskey', 'Premium Irish Whiskey'],
  ['irish whiskey 2/Bushmills 21 Year Old Single Malt Irish Whiskey.webp', 'irish-whiskey', 'Premium Irish Whiskey'],
  ['irish whiskey 2/Coole Swan Superior Irish Cream Liqueur.jpg', 'irish-whiskey', 'Irish Cream Whiskey'],
  ['irish whiskey 2/Jameson Bow Street 18 Year Old Cask Strength — 700ml.jpg', 'irish-whiskey', 'Premium Irish Whiskey'],
  ['irish whiskey 2/Jameson Irish Whiskey trilogy triple distilled orange stout.jpg', null, null], // SKIP malformed/dup filename
  ['irish whiskey 2/Jameson Triple Triple Irish Whiskey.webp', 'irish-whiskey', 'Blended Irish Whiskey'],
  ['irish whiskey 2/Knappogue Castle 12 Year Old Single Malt Irish Whiskey.webp', 'irish-whiskey', 'Single Malt Irish Whiskey'],
  ['irish whiskey 2/Redbreast 21 Year Old Single Pot Still Irish Whiskey.jpg', 'irish-whiskey', 'Premium Irish Whiskey'],
  ['irish whiskey 2/Teeling 18 Year Old Single Malt Irish Whiskey.jpg', 'irish-whiskey', 'Premium Irish Whiskey'],
  ['irish whiskey 2/Tullamore D.E.W. 12 Year Old Special Reserve.jpg', 'irish-whiskey', 'Blended Irish Whiskey'],
  ['irish whiskey 2/Yellow Spot 12 Year Old Single Pot Still Irish Whiskey.jpg', 'irish-whiskey', 'Single Pot Still Irish Whiskey'],

  // --- japanese whiskey 2/ (9 files) ---
  ['japanese whiskey 2/Hibiki Blossom Harmony Limited Edition — 700ml or 750ml.webp', 'japanese-whisky', 'Premium Japanese Whisky'],
  ['japanese whiskey 2/Nikka Coffey Malt Whisky.jpg', 'japanese-whisky', 'Single Malt Japanese Whisky'],
  ['japanese whiskey 2/Nikka Miyagikyo Aromatic Yeast Single Malt Japanese Whisky.webp', 'japanese-whisky', 'Single Malt Japanese Whisky'],
  ['japanese whiskey 2/Nikka Taketsuru 21 Year Old Pure Malt Whisky — 700ml.jpg', 'japanese-whisky', 'Premium Japanese Whisky'],
  ['japanese whiskey 2/Nikka Yoichi 10 Year Old Single Malt Japanese Whisky.webp', 'japanese-whisky', 'Single Malt Japanese Whisky'],
  ['japanese whiskey 2/The Hakushu 18 Year Old Single Malt Japanese Whisky.webp', 'japanese-whisky', 'Premium Japanese Whisky'],
  ['japanese whiskey 2/The Hakushu Distiller\'s Reserve Japanese Single Malt Whisky — 700ml.jpg', 'japanese-whisky', 'Single Malt Japanese Whisky'],
  ['japanese whiskey 2/Yamazaki Distiller\'s Reserve Single Malt Japanese Whisky — 700ml.webp', 'japanese-whisky', 'Single Malt Japanese Whisky'],
  ['japanese whiskey 2/Yamazakura Fine Blended Japanese Whisky.webp', 'japanese-whisky', 'Blended Japanese Whisky'],

  // --- other whiskey 2/ (27 files) ---
  ['other whiskey 2/Bird Dog Blackberry Whiskey.jpg', 'other-whiskey', 'Flavored Whiskey'],
  ['other whiskey 2/Boulder Spirits American Single Malt Whiskey.webp', 'other-whiskey', 'American Single Malt'],
  ['other whiskey 2/Crown Royal Apple Flavored Whisky.jpg', 'other-whiskey', 'Flavored Whiskey'],
  ['other whiskey 2/Crown Royal Northern Harvest Rye.avif', 'other-whiskey', 'Rye Whiskey'],
  ['other whiskey 2/Crown Royal Vanilla Flavored Whisky.jpg', 'other-whiskey', 'Flavored Whiskey'],
  ['other whiskey 2/Del Bac Dorado Mesquite Smoked American Single Malt Whiskey.webp', 'other-whiskey', 'American Single Malt'],
  ['other whiskey 2/George Dickel Bottled in Bond Tennessee Whisky.webp', 'other-whiskey', 'Tennessee Whiskey'],
  ['other whiskey 2/J.P. Wiser\'s 15 Year Old Canadian Whisky.webp', 'other-whiskey', 'Canadian Whisky'],
  ['other whiskey 2/J.P. Wiser\'s 24 Year Old Canadian Whisky.jpg', 'other-whiskey', 'Canadian Whisky'],
  ['other whiskey 2/J.P. Wiser\'s Deluxe Canadian Whisky.jpg', 'other-whiskey', 'Canadian Whisky'],
  ['other whiskey 2/Jack Daniel\'s Single Barrel Barrel Proof Rye Whiskey.jpg', 'other-whiskey', 'Rye Whiskey'],
  ['other whiskey 2/Jack Daniel\'s Tennessee Fire.webp', 'other-whiskey', 'Flavored Whiskey'],
  ['other whiskey 2/McCarthy\'s Oregon Single Malt Whiskey.webp', 'other-whiskey', 'American Single Malt'],
  ['other whiskey 2/Nelson\'s Green Brier Tennessee Whiskey.webp', 'other-whiskey', 'Tennessee Whiskey'],
  ['other whiskey 2/Ole Smoky Salty Caramel Whiskey.webp', 'other-whiskey', 'Flavored Whiskey'],
  ['other whiskey 2/Proper No. Twelve Irish Apple Whiskey.webp', 'other-whiskey', 'Flavored Whiskey'],
  ['other whiskey 2/Seagram\'s VO Canadian Whisky.jpg', 'other-whiskey', 'Canadian Whisky'],
  ['other whiskey 2/Stranahan\'s Sherry Cask American Single Malt Whiskey.jpg', 'other-whiskey', 'American Single Malt'],
  ['other whiskey 2/Thomas H. Handy Sazerac Rye Whiskey.jpg', 'other-whiskey', 'Rye Whiskey'],
  ['other whiskey 2/Uncle Nearest 1884 Small Batch Whiskey.webp', 'other-whiskey', 'Tennessee Whiskey'],
  ['other whiskey 2/Uncle Nearest Master Blend Edition Whiskey.webp', 'other-whiskey', 'Tennessee Whiskey'],
  ['other whiskey 2/Westward Cask Strength American Single Malt Whiskey.webp', 'other-whiskey', 'American Single Malt'],
  ['other whiskey 2/WhistlePig 10 Year Rye Whiskey.webp', 'other-whiskey', 'Rye Whiskey'],
  ['other whiskey 2/WhistlePig 15 Year Rye Whiskey.webp', 'other-whiskey', 'Rye Whiskey'],
  ['other whiskey 2/WhistlePig Boss Hog Rye Whiskey.webp', 'other-whiskey', 'Rye Whiskey'],
  ['other whiskey 2/WhistlePig Old World Rye 12 Year Whiskey.jpg', 'other-whiskey', 'Rye Whiskey'],
  ['other whiskey 2/WhistlePig PiggyBack 6 Year Rye Whiskey.webp', 'other-whiskey', 'Rye Whiskey'],

  // --- scotch 2/ (14 files) ---
  ['scotch 2/Aberlour 16 Year Old Single Malt Scotch Whisky.webp', 'scotch-whisky', 'Aged and Premium Scotch'],
  ['scotch 2/Chivas Regal 18 Year Old Blended Scotch Whisky.webp', 'scotch-whisky', 'Blended Scotch'],
  ['scotch 2/Glen Scotia Double Cask Single Malt Scotch Whisky.webp', 'scotch-whisky', 'Single Malt Scotch'],
  ['scotch 2/GlenDronach 15 Year Old Revival Single Malt Scotch Whisky.webp', 'scotch-whisky', 'Aged and Premium Scotch'],
  ['scotch 2/Glenfiddich 18 Year Old Single Malt Scotch Whisky.jpg', 'scotch-whisky', 'Aged and Premium Scotch'],
  ['scotch 2/Highland Park 18 Year Old Single Malt Scotch Whisky.webp', 'scotch-whisky', 'Aged and Premium Scotch'],
  ['scotch 2/Laphroaig Lore Single Malt Scotch Whisky.webp', 'scotch-whisky', 'Aged and Premium Scotch'],
  ['scotch 2/Oban 14 Year Old Single Malt Scotch Whisky.webp', 'scotch-whisky', 'Highland Scotch'],
  ['scotch 2/Oban 18 Year Old Single Malt Scotch Whisky.jpg', 'scotch-whisky', 'Aged and Premium Scotch'],
  ['scotch 2/Port Charlotte 10 Year Old Single Malt Scotch Whisky.avif', 'scotch-whisky', 'Islay Scotch'],
  ['scotch 2/The Dalmore 15 Year Old Single Malt Scotch Whisky.webp', 'scotch-whisky', 'Aged and Premium Scotch'],
  ['scotch 2/The Glenlivet 14 Year Old Cognac Cask Selection.jpg', 'scotch-whisky', 'Speyside Scotch'],
  ['scotch 2/The Macallan 12 Year Old Sherry Oak Single Malt Scotch Whisky.jpg', 'scotch-whisky', 'Speyside Scotch'],
  ['scotch 2/The Macallan 15 Year Old Double Cask Single Malt Scotch Whisky.webp', 'scotch-whisky', 'Aged and Premium Scotch'],

  // --- tequila 2/ (28 files) ---
  ['tequila 2/1800 Cristalino Añejo Tequila — 750ml.jpg', 'tequila-mezcal', 'Añejo Tequila'],
  ['tequila 2/Casa Dragones Añejo Barrel Blend Tequila — 750ml.jpg', 'tequila-mezcal', 'Añejo Tequila'],
  ['tequila 2/Casa Dragones Blanco Tequila — 750ml.jpg', 'tequila-mezcal', 'Blanco Tequila'],
  ['tequila 2/Clase Azul Ultra Extra Añejo Tequila — 750ml.jpg', 'tequila-mezcal', 'Extra Añejo Tequila'],
  ['tequila 2/Código 1530 Reposado Tequila — 750ml.png', 'tequila-mezcal', 'Reposado Tequila'],
  ['tequila 2/Don Julio Real Extra Añejo Tequila — 750ml.webp', 'tequila-mezcal', 'Extra Añejo Tequila'],
  ['tequila 2/El Jimador Añejo Tequila — 750ml.png', 'tequila-mezcal', 'Añejo Tequila'],
  ['tequila 2/El Tesoro Blanco Tequila — 750ml.png', 'tequila-mezcal', 'Blanco Tequila'],
  ['tequila 2/El Tesoro Extra Añejo Tequila — 750ml.jpg', 'tequila-mezcal', 'Extra Añejo Tequila'],
  ['tequila 2/El Tesoro Reposado Tequila — 750ml.webp', 'tequila-mezcal', 'Reposado Tequila'],
  ['tequila 2/Fortaleza Añejo Tequila — 750ml.jpg', 'tequila-mezcal', 'Añejo Tequila'],
  ['tequila 2/Fortaleza Blanco Tequila — 750ml.webp', 'tequila-mezcal', 'Blanco Tequila'],
  ['tequila 2/Fortaleza Reposado Tequila — 750ml.webp', 'tequila-mezcal', 'Reposado Tequila'],
  ['tequila 2/G4 Blanco Tequila — 750ml.jpg', 'tequila-mezcal', 'Blanco Tequila'],
  ['tequila 2/G4 Reposado Tequila — 750ml.jpg', 'tequila-mezcal', 'Reposado Tequila'],
  ['tequila 2/Gran Patrón Burdeos Extra Añejo Tequila — 750ml.png', 'tequila-mezcal', 'Extra Añejo Tequila'],
  ['tequila 2/Herradura Reposado Tequila — 750ml.webp', 'tequila-mezcal', 'Reposado Tequila'],
  ['tequila 2/Herradura Silver Tequila — 750ml.jpg', 'tequila-mezcal', 'Blanco Tequila'],
  ['tequila 2/Herradura Suprema Extra Añejo Tequila — 750ml.webp', 'tequila-mezcal', 'Extra Añejo Tequila'],
  ['tequila 2/Hornitos Reposado Tequila — 750ml.png', 'tequila-mezcal', 'Reposado Tequila'],
  ['tequila 2/Jose Cuervo Especial Gold Tequila — 750ml.jpg', 'tequila-mezcal', 'Blanco Tequila'],
  ['tequila 2/Jose Cuervo Especial Silver Tequila — 750ml.webp', 'tequila-mezcal', 'Blanco Tequila'],
  ['tequila 2/Lunazul Blanco Tequila — 750ml.webp', 'tequila-mezcal', 'Blanco Tequila'],
  ['tequila 2/Mijenta Blanco Tequila — 750ml.webp', 'tequila-mezcal', 'Blanco Tequila'],
  ['tequila 2/Patrón Añejo Tequila — 750ml.png', 'tequila-mezcal', 'Añejo Tequila'],
  ['tequila 2/Patrón en Lalique Extra Añejo Tequila series 3 — 750ml.jpg', 'tequila-mezcal', 'Extra Añejo Tequila'],
  ['tequila 2/Tequila Ocho Añejo Tequila — 750ml.webp', 'tequila-mezcal', 'Añejo Tequila'],
  ['tequila 2/Tequila Ocho Reposado Tequila — 750ml.webp', 'tequila-mezcal', 'Reposado Tequila'],

  // --- vodka 2/ (28 files) ---
  ['vodka 2/Absolut Vanilia Vodka.webp', 'vodka', 'Flavored Vodka'],
  ['vodka 2/Belvedere 10 Organic Vodka — 750ml.jpg', 'vodka', 'Premium Vodka'],
  ['vodka 2/Blue Ice Potato Vodka.webp', 'vodka', 'Craft Vodka'],
  ['vodka 2/Boyd & Blair Potato Vodka.webp', 'vodka', 'Craft Vodka'],
  ['vodka 2/Broken Shed Vodka.jpg', 'vodka', 'Craft Vodka'],
  ['vodka 2/Clase Azul Ultra Premium Vodka — 750ml.webp', 'vodka', 'Premium Vodka'],
  ['vodka 2/Crop Organic Vodka.jpg', 'vodka', 'Craft Vodka'],
  ['vodka 2/Crystal Head John Alexander Art Edition Vodka — 750ml.jpg', 'vodka', 'Premium Vodka'],
  ['vodka 2/Crystal Head Vodka.jpg', 'vodka', 'Premium Vodka'],
  ['vodka 2/Grey Goose L\'Orange Vodka.jpg', 'vodka', 'Flavored Vodka'],
  ['vodka 2/Grey Goose La Poire Vodka.jpg', 'vodka', 'Flavored Vodka'],
  ['vodka 2/Ketel One Botanical Cucumber and Mint.webp', 'vodka', 'Flavored Vodka'],
  ['vodka 2/Ketel One Botanical Grapefruit and Rose.webp', 'vodka', 'Flavored Vodka'],
  ['vodka 2/Luksusowa Potato Vodka.avif', 'vodka', 'Plain Vodka'],
  ['vodka 2/New Amsterdam Peach Vodka.webp', 'vodka', 'Flavored Vodka'],
  ['vodka 2/New Amsterdam Pineapple Vodka 750ml.jpg', 'vodka', 'Flavored Vodka'],
  ['vodka 2/New Amsterdam Vodka.jpg', 'vodka', 'Plain Vodka'],
  ['vodka 2/New Amsterdam Watermelon Vodka.webp', 'vodka', 'Flavored Vodka'],
  ['vodka 2/Pinnacle Vodka.jpg', 'vodka', 'Plain Vodka'],
  ['vodka 2/Smirnoff No. 21 Vodka.jpg', 'vodka', 'Plain Vodka'],
  ['vodka 2/Smirnoff Peach Vodka 750ml.jpg', 'vodka', 'Flavored Vodka'],
  ['vodka 2/Smirnoff Raspberry Vodka 750ml.jpg', 'vodka', 'Flavored Vodka'],
  ['vodka 2/Smirnoff Strawberry Vodka 750ml.jpg', 'vodka', 'Flavored Vodka'],
  ['vodka 2/Sobieski Vodka.jpg', 'vodka', 'Plain Vodka'],
  ['vodka 2/Stolichnaya Elit Vodka.jpg', 'vodka', 'Premium Vodka'],
  ['vodka 2/Svedka Mango Pineapple Vodka.webp', 'vodka', 'Flavored Vodka'],
  ['vodka 2/Svedka Strawberry Lemonade Vodka.jpg', 'vodka', 'Flavored Vodka'],
  ['vodka 2/Svedka Vodka.jpg', 'vodka', 'Plain Vodka'],
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

fs.writeFileSync('scripts/batch-b-manifest.json', JSON.stringify(manifest, null, 2));
console.log('DONE', manifest.length, 'images processed,', skipped, 'skipped');
