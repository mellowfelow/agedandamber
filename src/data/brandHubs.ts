import { BrandHub, CategorySeo, FaqItem } from '../types';

type BrandSeoOpts = {
  brand: string;
  categoryLabel: string;
  hook: string;
  faqs?: { question: string; answer: string }[];
  titleTag?: string;
  h1?: string;
  metaDescription?: string;
  transactionalCTA?: string;
};

function brandSeo(opts: BrandSeoOpts): CategorySeo {
  const { brand, categoryLabel, hook, faqs = [] } = opts;
  return {
    titleTag: opts.titleTag || `${brand} ${categoryLabel} — Allocated`,
    h1: opts.h1 || `${brand} — Buy Allocated ${categoryLabel} Online`,
    metaDescription:
      opts.metaDescription ||
      `Buy ${brand} online — allocated ${categoryLabel.toLowerCase()} direct from our Napa Valley cellar. Free shipping on $300+.`,
    transactionalCTA:
      opts.transactionalCTA ||
      `Buy ${brand} online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.`,
    definitionHook: hook,
    faqs,
  };
}

export const BRAND_HUBS: BrandHub[] = [
  // ─── BOURBON ───────────────────────────────────────────
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'makers-mark', brandKeywords: ["Maker's Mark"], name: "Maker's Mark",
    seo: brandSeo({
      brand: "Maker's Mark", categoryLabel: 'Bourbon',
      hook: "Maker's Mark is a wheated Kentucky straight bourbon produced at Star Hill Farm in Loretto, Kentucky — one of the most recognised bourbon labels in the world. Using winter wheat instead of rye as the secondary grain, it's known for a soft, sweet, accessible character and its hand-dipped red wax seal.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'weller', brandKeywords: ['Weller'], name: 'Weller',
    seo: brandSeo({
      brand: 'Weller', categoryLabel: 'Bourbon',
      hook: 'Weller is Buffalo Trace’s allocated wheated bourbon line — the recipe that also underpins Pappy Van Winkle — prized for its soft, honeyed, easy-drinking wheated profile across expressions from Special Reserve up to Full Proof and single barrel picks.',
      transactionalCTA: 'Buy Weller bourbon online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'blantons', brandKeywords: ["Blanton's"], name: "Blanton's",
    seo: brandSeo({
      brand: "Blanton's", categoryLabel: 'Single Barrel Bourbon', titleTag: "Blanton's Bourbon — Allocated",
      h1: "Blanton's Single Barrel Bourbon — Allocated Online",
      hook: "Blanton's Original Single Barrel, drawn from Buffalo Trace's high-rye Mash Bill #2, was the world's first modern single barrel bourbon when it launched in 1984 — recognisable by its iconic horse-and-jockey stopper.",
      faqs: [{ question: "Why is Blanton's so hard to find?", answer: "Blanton's is a heavily allocated release from Buffalo Trace — demand far outpaces the limited number of barrels selected for bottling each year, making it one of the most sought-after bourbons on the secondary and retail market alike." }],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'angels-envy', brandKeywords: ["Angel's Envy"], name: "Angel's Envy",
    seo: brandSeo({
      brand: "Angel's Envy", categoryLabel: 'Bourbon',
      hook: "Angel's Envy is a Louisville, Kentucky bourbon finished in ruby port wine barrels — a process pioneered by master distiller Lincoln Henderson. The port finishing adds distinctive dried fruit and sweetness to a classic wheated bourbon base.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'elijah-craig', brandKeywords: ['Elijah Craig'], name: 'Elijah Craig',
    seo: brandSeo({
      brand: 'Elijah Craig', categoryLabel: 'Bourbon',
      hook: 'Elijah Craig is a Heaven Hill bourbon named for the Baptist minister often credited (informally) as the "father of bourbon." The Small Batch and cask-strength Barrel Proof releases are core allocated favourites among enthusiasts.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'michters', brandKeywords: ["Michter's"], name: "Michter's",
    seo: brandSeo({
      brand: "Michter's", categoryLabel: 'Bourbon',
      hook: "Michter's is a Kentucky bourbon and rye producer known for its meticulous single barrel selection process and heat-cycled warehouses — the US*1 range and limited 10 Year and Celebration releases are consistently allocated.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'old-forester', brandKeywords: ['Old Forester'], name: 'Old Forester',
    seo: brandSeo({
      brand: 'Old Forester', categoryLabel: 'Bourbon',
      hook: 'Old Forester, distilled in Louisville by Brown-Forman, is the oldest continuously sold bourbon brand in the US, having remained in production through Prohibition under a medicinal whiskey license. The Birthday Bourbon and Whiskey Row Series are among its most collected annual releases.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'russells-reserve', brandKeywords: ["Russell's Reserve"], name: "Russell's Reserve",
    seo: brandSeo({
      brand: "Russell's Reserve", categoryLabel: 'Bourbon',
      hook: "Russell's Reserve is Wild Turkey's premium line, named for master distiller Jimmy Russell and his son Eddie — the Single Barrel and 10 Year expressions showcase a fuller-proof, higher-rye take on the Wild Turkey house style.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'colonel-eh-taylor', brandKeywords: ['E.H. Taylor', 'Eh Taylor'], name: 'Colonel E.H. Taylor',
    seo: brandSeo({
      brand: 'Colonel E.H. Taylor', categoryLabel: 'Bourbon',
      hook: 'Colonel E.H. Taylor is Buffalo Trace’s tribute line to Colonel Edmund Haynes Taylor Jr., a pioneering 19th-century distiller — the range spans Small Batch, Barrel Proof, Single Barrel, and the annual limited Old Fashioned Sour Mash release.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'larceny', brandKeywords: ['Larceny'], name: 'Larceny',
    seo: brandSeo({
      brand: 'Larceny', categoryLabel: 'Bourbon',
      hook: 'Larceny is Heaven Hill’s wheated bourbon line, named for the legend of a whiskey-loving bank guard skimming barrels for himself — the Small Batch and cask-strength Barrel Proof (batches A–B numbered) editions lead the range.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'bookers', brandKeywords: ["Booker's"], name: "Booker's",
    seo: brandSeo({
      brand: "Booker's", categoryLabel: 'Bourbon',
      hook: "Booker's is Jim Beam's uncut, unfiltered, cask-strength bourbon, named for master distiller Booker Noe. Each year's batches carry a unique name and proof point straight from the barrel.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'four-roses', brandKeywords: ['Four Roses'], name: 'Four Roses',
    seo: brandSeo({
      brand: 'Four Roses', categoryLabel: 'Single Barrel Bourbon', titleTag: 'Four Roses Bourbon — Allocated',
      h1: 'Four Roses Bourbon — Single Barrel & Small Batch Allocations',
      hook: 'Four Roses distils ten distinct bourbon recipes — a combination of two mash bills and five proprietary yeast strains — then blends or single-barrels them into a wide, well-documented range including the collector-favourite Limited Edition Small Batch and Single Barrel OESO/OBSV picks.',
      faqs: [{ question: 'What do the Four Roses recipe codes mean?', answer: 'Four Roses labels each recipe with a four-letter code — the first two letters are always "OE" or "OB" (mash bill), and the last two identify the yeast strain, each contributing a distinct flavour note from fruity to spicy to floral.' }],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'knob-creek', brandKeywords: ['Knob Creek'], name: 'Knob Creek',
    seo: brandSeo({
      brand: 'Knob Creek', categoryLabel: 'Bourbon',
      hook: 'Knob Creek is Jim Beam’s small batch, full-proof bourbon line, launched in 1992 as part of the original small batch bourbon movement — the 9 Year, Single Barrel, and cask-strength expressions anchor the range alongside a dedicated rye.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: '1792', brandKeywords: ['1792'], name: '1792',
    seo: brandSeo({
      brand: '1792', categoryLabel: 'Bourbon',
      hook: 'Named for the year Kentucky achieved statehood, 1792 is a high-rye bourbon line from Barton 1792 Distillery in Bardstown — the Small Batch, Full Proof, Single Barrel, and Sweet Wheat editions each showcase a different side of the house mash bill.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'bulleit', brandKeywords: ['Bulleit'], name: 'Bulleit',
    seo: brandSeo({
      brand: 'Bulleit', categoryLabel: 'Bourbon',
      hook: 'Bulleit Frontier Whiskey is a high-rye Kentucky bourbon revived by Tom Bulleit based on his great-great-grandfather’s original recipe — bottled at 90 proof with a distinctive spicy, dry finish, alongside a well-regarded dedicated rye and Barrel Strength release.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'basil-hayden', brandKeywords: ['Basil Hayden'], name: 'Basil Hayden',
    seo: brandSeo({
      brand: 'Basil Hayden', categoryLabel: 'Bourbon',
      hook: 'Basil Hayden is a lighter-bodied, high-rye bourbon from the Jim Beam family, bottled at an approachable 80 proof — one of the original Jim Beam Small Batch Collection releases alongside Knob Creek, Booker’s, and Baker’s.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'jim-beam', brandKeywords: ['Jim Beam'], name: 'Jim Beam',
    seo: brandSeo({
      brand: 'Jim Beam', categoryLabel: 'Bourbon',
      hook: 'Jim Beam is the world’s best-selling bourbon, distilled in Clermont, Kentucky by the same family for seven generations — the core White Label sits alongside Black, Double Oak, Devil’s Cut, and Signature Craft expressions.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'evan-williams', brandKeywords: ['Evan Williams'], name: 'Evan Williams',
    seo: brandSeo({
      brand: 'Evan Williams', categoryLabel: 'Bourbon',
      hook: 'Evan Williams is a Heaven Hill bourbon named for Kentucky’s first commercial distiller — the Black Label is the everyday staple, while the Bottled-in-Bond and Single Barrel Vintage releases are prized by collectors for exceptional value.',
    }),
  },

  // ─── SCOTCH ───────────────────────────────────────────
  {
    categorySlug: 'scotch-whisky', hubSlug: 'macallan', brandKeywords: ['Macallan'], name: 'The Macallan',
    seo: brandSeo({
      brand: 'The Macallan', categoryLabel: 'Scotch', titleTag: 'The Macallan — 12, 18, 25 Year & Rare Cask',
      h1: 'The Macallan — Sherry Oak, Double Cask & Rare Cask Allocations',
      hook: 'The Macallan is a single malt Scotch whisky distilled at Easter Elchies Estate in Speyside — one of the world’s most recognised luxury spirits brands, famous for its commitment to natural colour and exceptional sherry oak cask quality, spanning the core 12 Year through to ultra-rare collectible expressions.',
      faqs: [{ question: 'Why is The Macallan so expensive?', answer: 'The Macallan’s pricing reflects genuine scarcity of high-quality first-fill sherry oak casks (which cost far more than standard bourbon barrels), decades of ageing on rare expressions, and intense global collector demand — a 1926 Macallan sold at auction for over £1.5 million, the most expensive bottle of whisky ever sold.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'johnnie-walker', brandKeywords: ['Johnnie Walker'], name: 'Johnnie Walker',
    seo: brandSeo({
      brand: 'Johnnie Walker', categoryLabel: 'Blended Scotch', titleTag: 'Johnnie Walker — All Labels & Rare Expressions',
      h1: 'Johnnie Walker — Blue, Black, Gold & Rare Label Allocations',
      hook: 'Johnnie Walker is the world’s best-selling Scotch whisky, blended from malts and grains sourced across every Scotch region — the coloured-label hierarchy (Red through Blue) signals increasing age, rarity, and blend complexity.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glenfiddich', brandKeywords: ['Glenfiddich'], name: 'Glenfiddich',
    seo: brandSeo({
      brand: 'Glenfiddich', categoryLabel: 'Scotch', titleTag: 'Glenfiddich — 12, 18, 21 Year & Grand Series',
      h1: 'Glenfiddich — 12, 15, 18, 21 Year & Grand Series Allocations',
      hook: 'Glenfiddich, meaning "valley of the deer" in Gaelic, is the world’s best-selling single malt Scotch — still family-owned and distilled at Speyside’s most-visited distillery, with a range spanning the core 12 Year through the experimental Grand Series finishes.',
      faqs: [{ question: 'How do you pronounce Glenfiddich?', answer: 'Glenfiddich is pronounced "glen-FID-ick" — the "ch" at the end is a soft Scottish Gaelic sound, closer to the "ch" in "loch" than an English "ch."' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glenlivet', brandKeywords: ['Glenlivet'], name: 'The Glenlivet',
    seo: brandSeo({
      brand: 'The Glenlivet', categoryLabel: 'Scotch',
      hook: 'The Glenlivet holds the first licence ever granted to a Speyside distillery in 1824, and remains one of the region’s most influential producers — the 12 and Founder’s Reserve are approachable, fruity entry points to the wider Nadurra and 18 Year range.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'laphroaig', brandKeywords: ['Laphroaig'], name: 'Laphroaig',
    seo: brandSeo({
      brand: 'Laphroaig', categoryLabel: 'Islay Scotch',
      hook: 'Laphroaig is one of Islay’s most intensely peated single malts, still floor-malting some of its own barley on-site — the 10 Year is the classic entry point, with Quarter Cask, Lore, and the annual Cairdeas release for enthusiasts.',
      faqs: [{ question: 'How do you pronounce Laphroaig?', answer: 'Laphroaig is pronounced "la-FROYG" — a Gaelic name meaning "the beautiful hollow by the broad bay," referring to the distillery’s shoreline setting on Islay.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'ardbeg', brandKeywords: ['Ardbeg'], name: 'Ardbeg',
    seo: brandSeo({
      brand: 'Ardbeg', categoryLabel: 'Islay Scotch',
      hook: 'Ardbeg is renowned among Islay distilleries for the heaviest peating level in its core range, balanced by unusually long fermentation — the 10 Year "Ten" is the benchmark, alongside the sherried Uigeadail and cask-strength Corryvreckan.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'lagavulin', brandKeywords: ['Lagavulin'], name: 'Lagavulin',
    seo: brandSeo({
      brand: 'Lagavulin', categoryLabel: 'Islay Scotch',
      hook: 'Lagavulin uses an unusually slow, deliberate distillation with exceptionally short, wide stills to produce one of Islay’s richest, most intensely peated single malts — the 16 Year is the enduring benchmark of the style.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'highland-park', brandKeywords: ['Highland Park'], name: 'Highland Park',
    seo: brandSeo({
      brand: 'Highland Park', categoryLabel: 'Scotch',
      hook: 'Highland Park distils on Orkney, Scotland’s northernmost whisky-producing island, still floor-malting its own barley over local heather-infused peat — giving its whisky a distinctive gentle smoke rather than Islay’s maritime intensity.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'dalmore', brandKeywords: ['Dalmore'], name: 'Dalmore',
    seo: brandSeo({
      brand: 'Dalmore', categoryLabel: 'Scotch',
      hook: 'The Dalmore is a Highland single malt distilled on the Cromarty Firth, known for maturing spirit in a sequence of ex-bourbon and rare fortified wine casks — Matusalem sherry butts in particular define its rich, orange-and-spice house style.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'balvenie', brandKeywords: ['Balvenie'], name: 'The Balvenie',
    seo: brandSeo({
      brand: 'The Balvenie', categoryLabel: 'Scotch',
      hook: 'The Balvenie is one of the few Speyside distilleries that still grows some of its own barley and employs its own coppersmith and resident malt master — the DoubleWood, Caribbean Cask, and PortWood editions are built around distinctive secondary cask finishes.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'springbank', brandKeywords: ['Springbank'], name: 'Springbank',
    seo: brandSeo({
      brand: 'Springbank', categoryLabel: 'Campbeltown Scotch',
      hook: 'Springbank is one of the last Scottish distilleries to perform every step — malting, distilling, and maturing — entirely on-site in Campbeltown, a nearly vanished whisky region it now anchors almost single-handedly. Its releases are famously allocated and highly sought by collectors.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'bruichladdich', brandKeywords: ['Bruichladdich'], name: 'Bruichladdich',
    seo: brandSeo({
      brand: 'Bruichladdich', categoryLabel: 'Islay Scotch',
      hook: 'Bruichladdich distils three distinct styles under one Islay roof: the unpeated Classic Laddie, the super-heavily-peated Octomore, and the traditionally peated Port Charlotte — all built around 100% Scottish-grown barley.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'oban', brandKeywords: ['Oban'], name: 'Oban',
    seo: brandSeo({
      brand: 'Oban', categoryLabel: 'Highland Scotch',
      hook: 'Oban is one of Scotland’s smallest and oldest working distilleries, built into the hillside of the coastal town it shares its name with — its West Highland single malt balances coastal, smoky, and fruity notes in one of Scotch’s most distinctive house styles.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'aberlour', brandKeywords: ['Aberlour'], name: 'Aberlour',
    seo: brandSeo({
      brand: 'Aberlour', categoryLabel: 'Scotch', titleTag: 'Aberlour Scotch Whisky — Allocated',
      h1: 'Aberlour — 12, 16, 18 Year & A’bunadh Cask Strength Allocations',
      hook: 'Aberlour is a Speyside distillery whose A’bunadh release — bottled at cask strength with no chill-filtration or added colour, entirely from first-fill sherry butts — has become a benchmark for sherried, cask-strength Scotch among enthusiasts.',
      faqs: [{ question: 'What is Aberlour A’bunadh?', answer: 'A’bunadh (Gaelic for "the origin") is Aberlour’s cask-strength, non-chill-filtered, uncoloured single malt matured entirely in first-fill Oloroso sherry butts. Each numbered batch varies slightly in proof and profile, making it a favourite among collectors chasing specific batches.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glendronach', brandKeywords: ['GlenDronach'], name: 'GlenDronach',
    seo: brandSeo({
      brand: 'GlenDronach', categoryLabel: 'Scotch', titleTag: 'GlenDronach — 12, 15, 18, 21 Year & Parliament',
      h1: 'GlenDronach — 12, 15 Revival, 18 Allardice & 21 Parliament Allocations',
      hook: 'GlenDronach is a Highland distillery built around traditional direct-fired stills and extensive Oloroso and Pedro Ximénez sherry cask maturation — its deeply sherried house style has made it one of the most collected Highland single malts.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glen-scotia', brandKeywords: ['Glen Scotia'], name: 'Glen Scotia',
    seo: brandSeo({
      brand: 'Glen Scotia', categoryLabel: 'Campbeltown Scotch',
      hook: 'Glen Scotia is one of only three working distilleries left in Campbeltown, Scotland’s smallest official whisky region — its single malts carry a distinctive briny, slightly oily character shaped by the coastal warehouse environment.',
    }),
  },

  // ─── IRISH ───────────────────────────────────────────
  {
    categorySlug: 'irish-whiskey', hubSlug: 'spot-whiskey', brandKeywords: ['Spot Single Pot Still', 'Green Spot', 'Yellow Spot', 'Red Spot'], name: 'Spot Whiskey',
    seo: brandSeo({
      brand: 'Spot Whiskey', categoryLabel: 'Irish Whiskey', titleTag: 'Spot Whiskey — Green, Yellow & Red Spot',
      h1: 'Spot Whiskey — Green Spot, Yellow Spot & Red Spot Allocations',
      metaDescription: 'Buy Spot whiskey online — Green Spot, Yellow Spot 12, and Red Spot 15. Ireland’s rarest single pot still whiskeys. Direct allocations, free on $300+.',
      hook: 'The Spot range — named for the coloured spots of paint historically used by Dublin wine merchants Mitchell & Son to mark barrel ageing — is among Ireland’s most celebrated single pot still whiskey families, distilled at Midleton and matured in a mix of bourbon, sherry, and Madeira casks.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'jameson', brandKeywords: ['Jameson'], name: 'Jameson',
    seo: brandSeo({
      brand: 'Jameson', categoryLabel: 'Irish Whiskey',
      hook: 'Jameson is the world’s best-selling Irish whiskey, triple distilled and blended at Midleton Distillery in County Cork — Black Barrel, Caskmates, and the 18 Year sit alongside the iconic core blend.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'redbreast', brandKeywords: ['Redbreast'], name: 'Redbreast',
    seo: brandSeo({
      brand: 'Redbreast', categoryLabel: 'Single Pot Still Irish Whiskey',
      hook: 'Redbreast is widely regarded as the benchmark single pot still Irish whiskey — distilled at Midleton from a mash of malted and unmalted barley, with the 12 Year, cask-strength 12 CS, and rare 21 and 27 Year among the most collected releases.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'teeling', brandKeywords: ['Teeling'], name: 'Teeling',
    seo: brandSeo({
      brand: 'Teeling', categoryLabel: 'Irish Whiskey',
      hook: 'Teeling was Dublin’s first new distillery in over 125 years when it opened in 2015, built by a family with generations of Irish distilling history — the Small Batch, Single Grain, and Single Malt lines lean into experimental cask finishes.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'bushmills', brandKeywords: ['Bushmills'], name: 'Bushmills',
    seo: brandSeo({
      brand: 'Bushmills', categoryLabel: 'Irish Whiskey',
      hook: 'Bushmills holds the world’s oldest licence to distil whiskey, granted in 1608 in County Antrim, Northern Ireland — Black Bush, the 10, 16, and 21 Year single malts, and the Causeway Collection anchor a range built on triple distillation.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'tullamore-dew', brandKeywords: ['Tullamore'], name: 'Tullamore D.E.W.',
    seo: brandSeo({
      brand: 'Tullamore D.E.W.', categoryLabel: 'Irish Whiskey', titleTag: 'Tullamore D.E.W. — Buy All Expressions Online',
      h1: 'Tullamore D.E.W. Irish Whiskey — Original, 12 Year, 18 Year & XO Allocations',
      hook: 'Tullamore D.E.W. is a triple-distilled, triple-blended Irish whiskey — combining pot still, malt, and grain whiskeys — named for 19th-century distillery owner Daniel E. Williams, whose initials still mark the label.',
      faqs: [{ question: 'What does Tullamore D.E.W. stand for?', answer: 'D.E.W. stands for Daniel E. Williams, the distillery manager and later owner credited with expanding and modernising the Tullamore distillery in the late 19th century.' }],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'powers', brandKeywords: ['Powers'], name: 'Powers',
    seo: brandSeo({
      brand: 'Powers', categoryLabel: 'Irish Whiskey',
      hook: 'Powers is one of Ireland’s oldest distilling names, dating to 1791, and a longtime favourite within Ireland for its spicier, more robust single pot still character — the John’s Lane and Three Swallow releases lead the allocated range.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'connemara', brandKeywords: ['Connemara'], name: 'Connemara',
    seo: brandSeo({
      brand: 'Connemara', categoryLabel: 'Irish Whiskey',
      hook: 'Connemara is a rarity in Irish whiskey — a peated single malt, made from barley dried over peat fires in the traditional Scotch style, giving it a smoky character almost never found in Irish whiskey.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'knappogue-castle', brandKeywords: ['Knappogue'], name: 'Knappogue Castle',
    seo: brandSeo({
      brand: 'Knappogue Castle', categoryLabel: 'Irish Whiskey', titleTag: 'Knappogue Castle Irish Whiskey',
      h1: 'Knappogue Castle Irish Whiskey — 12, 14, 16 & 21 Year Single Malt',
      hook: 'Knappogue Castle is a single malt Irish whiskey named for the restored 15th-century castle in County Clare pictured on its label — a small-production range built around 12, 14, 16, and rare 21 Year expressions.',
      faqs: [{ question: 'How do you pronounce Knappogue?', answer: 'Knappogue is pronounced "na-POG" — an anglicisation of the Irish "Cnapóg."' }],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: '2-gingers', brandKeywords: ['2 Gingers'], name: '2 Gingers',
    seo: brandSeo({
      brand: '2 Gingers', categoryLabel: 'Irish Whiskey',
      hook: '2 Gingers is a blended Irish whiskey named for founder Kieran Folliard’s red-headed mother and aunt — a smooth, easy-mixing whiskey positioned as an accessible everyday pour rather than a sipping collector’s bottle.',
    }),
  },
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'coole-swan', brandKeywords: ['Coole Swan'], name: 'Coole Swan',
    seo: brandSeo({
      brand: 'Coole Swan', categoryLabel: 'Irish Cream Liqueur', titleTag: 'Coole Swan Irish Cream Liqueur',
      h1: 'Coole Swan Irish Cream Liqueur — Allocated Online',
      hook: 'Coole Swan is a premium Irish cream liqueur blending fresh Irish dairy cream, single malt Irish whiskey, and Belgian white chocolate — a richer, less sweet alternative to standard cream liqueurs.',
    }),
  },

  // ─── JAPANESE ───────────────────────────────────────────
  {
    categorySlug: 'japanese-whisky', hubSlug: 'yamazaki', brandKeywords: ['Yamazaki'], name: 'Yamazaki',
    seo: brandSeo({
      brand: 'Yamazaki', categoryLabel: 'Japanese Whisky',
      hook: 'Yamazaki, distilled by Suntory since 1923, is Japan’s first and most storied whisky distillery — its single malts, aged across a wide range of cask types including rare Mizunara oak, put Japanese whisky on the world map after major international award wins in the 2000s and 2010s.',
      faqs: [{ question: 'Is Yamazaki made from rice?', answer: 'No — Yamazaki, like other Japanese single malts, is made from malted barley, following the Scotch tradition. Rice is used in Japanese sake and shochu, not in Japanese whisky production.' }],
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'hibiki', brandKeywords: ['Hibiki'], name: 'Hibiki',
    seo: brandSeo({
      brand: 'Hibiki', categoryLabel: 'Japanese Whisky',
      hook: 'Hibiki is Suntory’s flagship blended Japanese whisky, combining malt and grain whiskies from across the Suntory distillery portfolio — the Japanese Harmony expression is designed for exceptional balance and approachability.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'nikka', brandKeywords: ['Nikka'], name: 'Nikka',
    seo: brandSeo({
      brand: 'Nikka', categoryLabel: 'Japanese Whisky',
      hook: 'Nikka was founded by Masataka Taketsuru, the distiller who trained in Scotland and helped establish Japanese whisky production itself — the From The Barrel, Coffey Grain, and Coffey Malt expressions showcase the breadth of the Nikka range.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'hakushu', brandKeywords: ['Hakushu'], name: 'Hakushu',
    seo: brandSeo({
      brand: 'Hakushu', categoryLabel: 'Japanese Whisky',
      hook: 'Hakushu, Suntory’s mountain distillery in the Southern Japanese Alps, is known for a fresher, greener, more herbal single malt character than its sister distillery Yamazaki — the Heavily Peated expression is a distinctive outlier in the Japanese whisky category.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'suntory-toki', brandKeywords: ['Toki'], name: 'Suntory Toki',
    seo: brandSeo({
      brand: 'Suntory Toki', categoryLabel: 'Japanese Whisky',
      hook: 'Suntory Toki is a blended Japanese whisky combining malt and grain whisky from Yamazaki, Hakushu, and Chita distilleries, purpose-built for the Japanese highball — light, crisp, and mixable.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'kavalan', brandKeywords: ['Kavalan'], name: 'Kavalan',
    seo: brandSeo({
      brand: 'Kavalan', categoryLabel: 'Japanese-Style Whisky',
      hook: 'Kavalan is Taiwan’s pioneering single malt distillery, founded in 2005 — its subtropical climate accelerates maturation dramatically compared to Scotland or Japan, producing intensely fruity, fast-maturing whisky that has won blind-tasting awards against Scotch and Japanese rivals alike.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'togouchi', brandKeywords: ['Togouchi'], name: 'Togouchi',
    seo: brandSeo({
      brand: 'Togouchi', categoryLabel: 'Japanese Whisky',
      hook: 'Togouchi is a blended Japanese whisky matured in a decommissioned railway tunnel in Hiroshima Prefecture, where naturally stable temperature and humidity are used for maturation — the 9 Year and 18 Year are the most widely available expressions.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'akashi', brandKeywords: ['Akashi'], name: 'Akashi',
    seo: brandSeo({
      brand: 'Akashi', categoryLabel: 'Japanese Whisky',
      hook: 'Akashi is produced by White Oak Distillery in Hyogo Prefecture, one of Japan’s smaller and older whisky producers, distilling since 1919 — its single malt and blended expressions offer an entry point into Japanese whisky distinct from the larger Suntory and Nikka houses.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'iwai', brandKeywords: ['Iwai'], name: 'Iwai',
    seo: brandSeo({
      brand: 'Iwai', categoryLabel: 'Japanese Whisky',
      hook: 'Iwai is produced by Mars Shinshu Distillery, named for founder Kiichiro Iwai, a distiller who worked alongside Masataka Taketsuru in Japanese whisky’s earliest days — the Tradition expression is matured partly in ex-bourbon and Mizunara casks.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'mars-shinshu', brandKeywords: ['Mars Shinshu', 'Mars Komagatake', 'Mars Maltage'], name: 'Mars Shinshu',
    seo: brandSeo({
      brand: 'Mars Shinshu', categoryLabel: 'Japanese Whisky',
      hook: 'Mars Shinshu is Japan’s highest-altitude whisky distillery, set in the Japanese Alps at over 800 metres — the cool climate slows maturation for a lighter, more delicate spirit under the Komagatake and Maltage Cosmo labels.',
    }),
  },

  // ─── RYE & OTHER WHISKEY ───────────────────────────────────────────
  {
    categorySlug: 'other-whiskey', hubSlug: 'whistlepig', brandKeywords: ['WhistlePig'], name: 'WhistlePig',
    seo: brandSeo({
      brand: 'WhistlePig', categoryLabel: 'Rye Whiskey',
      hook: 'WhistlePig, based on a former dairy farm in Vermont, helped drive the modern American rye whiskey revival — the 10 Year, 12 Year Old World, 15 Year, and the collector-favourite Boss Hog annual release anchor the range.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'rittenhouse', brandKeywords: ['Rittenhouse'], name: 'Rittenhouse',
    seo: brandSeo({
      brand: 'Rittenhouse', categoryLabel: 'Rye Whiskey',
      hook: 'Rittenhouse Bottled-in-Bond Rye, produced by Heaven Hill, is a bartender favourite for its exceptional value — full-proof, straight rye character that anchors classic rye cocktails like the Sazerac and Manhattan.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'sazerac-rye', brandKeywords: ['Sazerac'], name: 'Sazerac Rye',
    seo: brandSeo({
      brand: 'Sazerac Rye', categoryLabel: 'Rye Whiskey',
      hook: 'Sazerac Rye, produced by Buffalo Trace, shares its name with the classic New Orleans cocktail it was built for — the 6 Year is the standard release, while the annual Thomas H. Handy Sazerac from the Buffalo Trace Antique Collection is one of the most allocated ryes in the US.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'pikesville-rye', brandKeywords: ['Pikesville'], name: 'Pikesville Rye',
    seo: brandSeo({
      brand: 'Pikesville Rye', categoryLabel: 'Rye Whiskey',
      hook: 'Pikesville, produced by Heaven Hill, revives a historic Maryland rye whiskey name and bottles at a robust 110 proof — a higher-proof, spicier alternative to Rittenhouse from the same distillery.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'new-riff', brandKeywords: ['New Riff'], name: 'New Riff',
    seo: brandSeo({
      brand: 'New Riff', categoryLabel: 'Rye Whiskey',
      hook: 'New Riff is a Kentucky distillery just across the river from Cincinnati, bottling every release without chill-filtration at bonded-strength or higher — its Bottled-in-Bond rye and Single Barrel selections have quickly built a following among enthusiasts.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'high-west', brandKeywords: ['High West'], name: 'High West',
    seo: brandSeo({
      brand: 'High West', categoryLabel: 'Rye Whiskey',
      hook: 'High West, based in Park City, Utah, was the first legal distillery in the state since Prohibition — the Double Rye, Rendezvous Rye, and Campfire (a rye/bourbon/Scotch blend) are known for creative sourcing and blending.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'sagamore-spirit', brandKeywords: ['Sagamore'], name: 'Sagamore Spirit',
    seo: brandSeo({
      brand: 'Sagamore Spirit', categoryLabel: 'Maryland Rye Whiskey',
      hook: 'Sagamore Spirit revives the once-dominant Maryland rye whiskey style, blending two proprietary rye mash bills distilled on the Baltimore waterfront — the core release, Cask Strength, and Double Oak lead a range built entirely around rye.',
    }),
  },

  // ─── TEQUILA & MEZCAL ───────────────────────────────────────────
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'don-julio', brandKeywords: ['Don Julio'], name: 'Don Julio',
    seo: brandSeo({
      brand: 'Don Julio', categoryLabel: 'Tequila', titleTag: 'Don Julio Tequila — Allocated Bottles',
      h1: 'Don Julio Tequila — 1942, Reposado, Añejo & Real Allocations',
      hook: 'Don Julio was founded by Don Julio González, one of the first producers to bottle 100% agave tequila for sipping rather than mixing — the ultra-premium 1942 and rare Real expressions sit above the widely available Blanco, Reposado, and Añejo range.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'casamigos', brandKeywords: ['Casamigos'], name: 'Casamigos',
    seo: brandSeo({
      brand: 'Casamigos', categoryLabel: 'Tequila',
      hook: 'Casamigos was co-founded by George Clooney and Rande Gerber as a slow-roasted, additive-free tequila built specifically for smooth sipping — Blanco, Reposado, Añejo, and a Mezcal round out the range.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'clase-azul', brandKeywords: ['Clase Azul'], name: 'Clase Azul',
    seo: brandSeo({
      brand: 'Clase Azul', categoryLabel: 'Tequila',
      hook: 'Clase Azul is instantly recognisable for its hand-painted ceramic decanter bottles, produced by artisans in Guanajuato, Mexico — the Reposado is the most widely available expression, with Añejo, Ultra, and Gold at the collectible high end.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'patron', brandKeywords: ['Patrón', 'Patron'], name: 'Patrón',
    seo: brandSeo({
      brand: 'Patrón', categoryLabel: 'Tequila', titleTag: 'Patrón Tequila — Allocated',
      h1: 'Patrón Tequila — Silver, Reposado & Extra Añejo Allocations',
      hook: 'Patrón was one of the brands that helped popularise ultra-premium sipping tequila in the US market — the Silver, Reposado, Añejo, and Extra Añejo core range sits alongside the ultra-rare Gran Patrón collection.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'fortaleza', brandKeywords: ['Fortaleza'], name: 'Fortaleza',
    seo: brandSeo({
      brand: 'Fortaleza', categoryLabel: 'Tequila',
      hook: 'Fortaleza is produced using a traditional tahona stone wheel to crush cooked agave and a small copper pot still — a deliberately old-fashioned process that has made it a favourite among tequila purists and bartenders.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: '818-tequila', brandKeywords: ['818 Tequila'], name: '818 Tequila',
    seo: brandSeo({
      brand: '818 Tequila', categoryLabel: 'Tequila',
      hook: '818 is a 100% additive-free tequila founded by Kendall Jenner, produced in the highlands of Jalisco — the range spans Blanco through Añejo.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'g4-tequila', brandKeywords: ['G4 Tequila', 'G4 Blanco', 'G4 Reposado', 'G4 Añejo'], name: 'G4 Tequila',
    seo: brandSeo({
      brand: 'G4 Tequila', categoryLabel: 'Tequila',
      hook: 'G4 is a small-batch tequila from master distiller Felipe Camarena’s fourth-generation family distillery in Jalisco — built around traditional roasting and fermentation methods favoured by bartenders and enthusiasts.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'komos', brandKeywords: ['Komos'], name: 'Komos',
    seo: brandSeo({
      brand: 'Komos', categoryLabel: 'Ultra-Premium Tequila',
      hook: 'Komos is an ultra-premium tequila line built around extended fermentation and hand-blown Rioja glass decanters, positioned at the luxury end of the category.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'cincoro', brandKeywords: ['Cincoro'], name: 'Cincoro',
    seo: brandSeo({
      brand: 'Cincoro', categoryLabel: 'Tequila',
      hook: 'Cincoro is a tequila brand co-founded by NBA legend Michael Jordan and four fellow team owners, produced in Jalisco with a focus on small-batch, additive-free production.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'lobos-1707', brandKeywords: ['Lobos 1707'], name: 'Lobos 1707',
    seo: brandSeo({
      brand: 'Lobos 1707', categoryLabel: 'Tequila & Mezcal',
      hook: 'Lobos 1707 is a tequila and mezcal brand co-founded by LeBron James and Maverick Carter, drawing on a family agave-growing history dating back to 1707.',
    }),
  },

  // ─── RUM ───────────────────────────────────────────
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'diplomatico', brandKeywords: ['Diplomático', 'Diplomatico'], name: 'Diplomático',
    seo: brandSeo({
      brand: 'Diplomático', categoryLabel: 'Rum',
      hook: 'Diplomático is a Venezuelan rum producer blending pot still, batch kettle, and column still spirits — the Reserva Exclusiva and top-tier Selección de Familia are among the most awarded rums in the category.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'zacapa', brandKeywords: ['Zacapa'], name: 'Ron Zacapa',
    seo: brandSeo({
      brand: 'Ron Zacapa', categoryLabel: 'Rum',
      hook: 'Ron Zacapa is matured "above the clouds" in Guatemala’s highlands, over 2,000 metres above sea level, where cooler temperatures slow ageing — the 23 Solera and XO are blended using the solera system across multiple cask ages.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'appleton-estate', brandKeywords: ['Appleton Estate', 'Appleton'], name: 'Appleton Estate',
    seo: brandSeo({
      brand: 'Appleton Estate', categoryLabel: 'Rum',
      hook: 'Appleton Estate has been distilling in Jamaica’s Nassau Valley since 1749, one of the longest continuously operating rum estates in the world — the Signature Blend, Reserve Blend, and rare 21 Year showcase Jamaican pot still character.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'plantation', brandKeywords: ['Plantation'], name: 'Plantation',
    seo: brandSeo({
      brand: 'Plantation', categoryLabel: 'Rum',
      hook: 'Plantation sources rum from distilleries across the Caribbean and Latin America, then finishes each release with additional ageing in French cognac casks at its own cellars in Cognac, France — the multi-island XO is its best-known expression.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'mount-gay', brandKeywords: ['Mount Gay'], name: 'Mount Gay',
    seo: brandSeo({
      brand: 'Mount Gay', categoryLabel: 'Rum',
      hook: 'Mount Gay holds a documented distilling history in Barbados dating to 1703, making it one of the oldest rum brands in continuous production — the Black Barrel and premium XO are the range’s standout allocated releases.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'flor-de-cana', brandKeywords: ['Flor de Caña', 'Flor de Cana'], name: 'Flor de Caña',
    seo: brandSeo({
      brand: 'Flor de Caña', categoryLabel: 'Rum',
      hook: 'Flor de Caña is a Nicaraguan rum distilled and aged at the base of the San Cristóbal volcano, and is certified carbon neutral across its production — the 12 and 18 Year Centenario are its most collected age-stated releases.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'el-dorado', brandKeywords: ['El Dorado'], name: 'El Dorado',
    seo: brandSeo({
      brand: 'El Dorado', categoryLabel: 'Demerara Rum',
      hook: 'El Dorado is distilled in Guyana using rare wooden pot stills, some dating back over a century, alongside traditional column stills — the 12, 15, and 21 Year releases are prized for their rich, dark Demerara character.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'bacardi', brandKeywords: ['Bacardí', 'Bacardi'], name: 'Bacardí',
    seo: brandSeo({
      brand: 'Bacardí', categoryLabel: 'Aged Rum',
      hook: 'Bacardí is the world’s largest privately held spirits company, founded in Cuba in 1862 — beyond the ubiquitous white rum, the aged Reserva and 8 Year expressions offer a richer, oak-driven side of the brand.',
    }),
  },

  // ─── GIN ───────────────────────────────────────────
  {
    categorySlug: 'artisanal-gin', hubSlug: 'hendricks', brandKeywords: ["Hendrick's", 'Hendricks'], name: "Hendrick's",
    seo: brandSeo({
      brand: "Hendrick's", categoryLabel: 'Gin',
      hook: "Hendrick's is infused with rose and cucumber alongside its core juniper botanicals — an unconventional combination when it launched in 1999 that helped spark the modern craft gin movement.",
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'tanqueray', brandKeywords: ['Tanqueray'], name: 'Tanqueray',
    seo: brandSeo({
      brand: 'Tanqueray', categoryLabel: 'London Dry Gin',
      hook: 'Tanqueray has distilled London Dry gin from the same four-botanical recipe since 1830, using a distinctive pot-and-column still combination still in use at its Cameronbridge distillery today.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'aviation', brandKeywords: ['Aviation'], name: 'Aviation',
    seo: brandSeo({
      brand: 'Aviation', categoryLabel: 'American Gin',
      hook: 'Aviation is an American gin co-owned by actor Ryan Reynolds, built around a lighter juniper presence and more prominent lavender and cardamom notes than a traditional London Dry style.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'monkey-47', brandKeywords: ['Monkey 47'], name: 'Monkey 47',
    seo: brandSeo({
      brand: 'Monkey 47', categoryLabel: 'Gin',
      hook: 'Monkey 47 is distilled in Germany’s Black Forest from 47 botanicals, including regional ingredients like lingonberry and spruce sprouts — a much higher botanical count than most gins, giving it a dense, layered profile.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'botanist', brandKeywords: ['Botanist'], name: 'The Botanist',
    seo: brandSeo({
      brand: 'The Botanist', categoryLabel: 'Islay Gin',
      hook: 'The Botanist is distilled by Bruichladdich on Islay using 22 hand-foraged local botanicals alongside 9 classic gin aromatics, distilled in a converted Lomond still nicknamed "Ugly Betty."',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'roku', brandKeywords: ['Roku'], name: 'Roku',
    seo: brandSeo({
      brand: 'Roku', categoryLabel: 'Japanese Gin',
      hook: 'Roku, from Suntory, blends eight traditional gin botanicals with distinctly Japanese ingredients — sakura flower, sencha tea, and yuzu peel among them — each distilled separately to preserve individual character.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'empress-1908', brandKeywords: ['Empress 1908', 'Empress'], name: 'Empress 1908',
    seo: brandSeo({
      brand: 'Empress 1908', categoryLabel: 'Gin',
      hook: 'Empress 1908 is coloured naturally with butterfly pea blossom, giving it a striking indigo hue that shifts toward pink or purple when mixed with acidic ingredients like citrus or tonic.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'drumshanbo', brandKeywords: ['Drumshanbo'], name: 'Drumshanbo Gunpowder',
    seo: brandSeo({
      brand: 'Drumshanbo Gunpowder', categoryLabel: 'Irish Gin',
      hook: 'Drumshanbo Gunpowder is an Irish gin infused with gunpowder tea alongside citrus and juniper, distilled in a copper pot still nicknamed "Christina" at the small-batch Shed Distillery in County Leitrim.',
    }),
  },

  // ─── COGNAC & BRANDY ───────────────────────────────────────────
  {
    categorySlug: 'cognac-brandy', hubSlug: 'hennessy', brandKeywords: ['Hennessy'], name: 'Hennessy',
    seo: brandSeo({
      brand: 'Hennessy', categoryLabel: 'Cognac',
      hook: 'Hennessy is the world’s best-selling cognac house, founded in 1765 by an Irish officer in the French army — the VS, VSOP, and XO form the core range, with Paradis and Richard Hennessy at the ultra-premium tier.',
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'remy-martin', brandKeywords: ['Rémy Martin', 'Remy Martin'], name: 'Rémy Martin',
    seo: brandSeo({
      brand: 'Rémy Martin', categoryLabel: 'Cognac',
      hook: 'Rémy Martin uses only grapes from the Grande and Petite Champagne crus — the two premier growing zones in the Cognac region — a designation known as "Fine Champagne" cognac.',
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'courvoisier', brandKeywords: ['Courvoisier'], name: 'Courvoisier',
    seo: brandSeo({
      brand: 'Courvoisier', categoryLabel: 'Cognac',
      hook: 'Courvoisier is one of the oldest cognac houses, with a history tracing to Napoleon-era Paris — the VS, VSOP, and XO anchor a range known for a fruit-forward, approachable house style.',
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'martell', brandKeywords: ['Martell'], name: 'Martell',
    seo: brandSeo({
      brand: 'Martell', categoryLabel: 'Cognac',
      hook: 'Martell, founded in 1715, is the oldest of the major cognac houses — known for leaning more heavily on Borderies cru eaux-de-vie than its rivals, giving its range a distinctive violet and nutty character.',
    }),
  },

  // ─── VODKA ───────────────────────────────────────────
  {
    categorySlug: 'craft-vodka', hubSlug: 'grey-goose', brandKeywords: ['Grey Goose'], name: 'Grey Goose',
    seo: brandSeo({
      brand: 'Grey Goose', categoryLabel: 'Vodka',
      hook: 'Grey Goose is distilled in France from single-origin Picardie winter wheat and filtered through Champagne limestone, positioned since its 1997 launch as a premium French alternative to Russian and Polish vodka.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'titos', brandKeywords: ["Tito's"], name: "Tito's",
    seo: brandSeo({
      brand: "Tito's", categoryLabel: 'Vodka',
      hook: "Tito's Handmade Vodka is distilled from corn in old-fashioned pot stills at Austin, Texas’s first legal distillery since Prohibition — naturally gluten-free and one of the best-selling vodkas in the US.",
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'ciroc', brandKeywords: ['Ciroc'], name: 'Cîroc',
    seo: brandSeo({
      brand: 'Cîroc', categoryLabel: 'Vodka',
      hook: 'Cîroc is distilled from French grapes rather than the grain or potato base used by most vodkas, giving it a naturally smoother, subtly fruit-forward character.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'belvedere', brandKeywords: ['Belvedere'], name: 'Belvedere',
    seo: brandSeo({
      brand: 'Belvedere', categoryLabel: 'Vodka',
      hook: 'Belvedere is a Polish rye vodka distilled from a single estate rye grain, quadruple distilled for exceptional purity — one of the first vodkas marketed as ultra-premium when it launched internationally in the 1990s.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'ketel-one', brandKeywords: ['Ketel One'], name: 'Ketel One',
    seo: brandSeo({
      brand: 'Ketel One', categoryLabel: 'Vodka',
      hook: 'Ketel One is distilled by the Nolet family, who have made spirits in the Netherlands since 1691 — a blend of column-distilled and traditional copper pot still spirit gives it a distinctively smooth, wheat-forward character.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'crystal-head', brandKeywords: ['Crystal Head'], name: 'Crystal Head',
    seo: brandSeo({
      brand: 'Crystal Head', categoryLabel: 'Vodka',
      hook: 'Crystal Head, co-founded by actor Dan Aykroyd, is instantly recognisable for its skull-shaped bottle — the vodka itself is filtered through layers of Herkimer diamond crystal.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'stolichnaya', brandKeywords: ['Stolichnaya', 'Stoli'], name: 'Stolichnaya',
    seo: brandSeo({
      brand: 'Stolichnaya', categoryLabel: 'Vodka',
      hook: 'Stolichnaya, commonly called "Stoli," is one of the most internationally recognised vodka names, distilled from Russian winter wheat and traditionally filtered through quartz sand and charcoal.',
    }),
  },

  // ─── NON-ALCOHOLIC SPIRITS ───────────────────────────────────────────
  {
    categorySlug: 'na-spirits', hubSlug: 'seedlip', brandKeywords: ['Seedlip'], name: 'Seedlip',
    seo: brandSeo({
      brand: 'Seedlip', categoryLabel: 'Non-Alcoholic Spirits', titleTag: 'Seedlip Non-Alcoholic Spirits',
      h1: 'Seedlip — Non-Alcoholic Spirits, Distilled Not Brewed',
      hook: 'Seedlip was the world’s first widely distributed non-alcoholic distilled spirit, launched in 2015 — each botanical range (Garden, Spice, Grove) is genuinely distilled rather than simply de-alcoholised, aiming to replicate the complexity of gin or whiskey without the ethanol.',
    }),
  },
  {
    categorySlug: 'na-spirits', hubSlug: 'lyres', brandKeywords: ["Lyre's", 'Lyres'], name: "Lyre's",
    seo: brandSeo({
      brand: "Lyre's", categoryLabel: 'Non-Alcoholic Spirits',
      hook: "Lyre's produces one of the widest non-alcoholic spirit ranges available, with alternatives modelled on whiskey, gin, rum, and aperitif styles, each built to work as a direct swap in classic cocktail recipes.",
    }),
  },
  {
    categorySlug: 'na-spirits', hubSlug: 'ritual', brandKeywords: ['Ritual'], name: 'Ritual Zero Proof',
    seo: brandSeo({
      brand: 'Ritual Zero Proof', categoryLabel: 'Non-Alcoholic Spirits',
      hook: 'Ritual Zero Proof makes non-alcoholic alternatives across whiskey, tequila, gin, and rum styles, formulated to deliver the bite and mouthfeel of the real spirit without alcohol, calories, or added sugar.',
    }),
  },
];
