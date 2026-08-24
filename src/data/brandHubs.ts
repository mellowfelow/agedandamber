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
      titleTag: "Maker's Mark — 46, Private Select & Cask Strength",
      h1: "Maker's Mark Bourbon — 46, Private Select & Cask Strength Allocations",
      metaDescription: "Buy Maker's Mark online — the wheated bourbon icon, plus 46, Private Select, and Cask Strength. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Maker's Mark is a wheated Kentucky straight bourbon produced at Star Hill Farm in Loretto, Kentucky — one of the most recognised bourbon labels in the world. Using winter wheat instead of rye as the secondary grain, it's known for a soft, sweet, accessible character and its hand-dipped red wax seal.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'weller', brandKeywords: ['Weller'], name: 'Weller',
    seo: brandSeo({
      brand: 'Weller', categoryLabel: 'Bourbon',
      titleTag: 'Weller Bourbon — Antique 107, 12 Year & Full Proof',
      h1: 'Weller Bourbon — Antique 107, 12 Year, Full Proof & Daniel Weller Allocations',
      metaDescription: 'Buy Weller bourbon online — Antique 107, 12 Year, Full Proof, and the ultra-rare Daniel Weller Spelt Wheat. Direct allocations at Aged & Amber.',
      hook: 'Weller is Buffalo Trace’s allocated wheated bourbon line — the recipe that also underpins Pappy Van Winkle — prized for its soft, honeyed, easy-drinking wheated profile across expressions from Special Reserve up to Full Proof and single barrel picks.',
      transactionalCTA: 'Buy Weller bourbon online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'blantons', brandKeywords: ["Blanton's"], name: "Blanton's",
    seo: brandSeo({
      brand: "Blanton's", categoryLabel: 'Single Barrel Bourbon', titleTag: "Blanton's Bourbon — Original, Gold & SFTB",
      h1: "Blanton's Single Barrel Bourbon — Original, Gold, Straight From the Barrel Allocations",
      metaDescription: "Buy Blanton's bourbon online — Original, Gold, and the rare Straight From the Barrel. Can't find Blanton's near you? Ships to 45 states.",
      hook: "Blanton's Original Single Barrel, drawn from Buffalo Trace's high-rye Mash Bill #2, was the world's first modern single barrel bourbon when it launched in 1984 — recognisable by its iconic horse-and-jockey stopper.",
      transactionalCTA: "Can't find Blanton's near you? Aged & Amber ships allocated Blanton's Original, Gold, and Straight From the Barrel to 45 US states.",
      faqs: [{ question: "Why is Blanton's so hard to find?", answer: "Blanton's is a heavily allocated release from Buffalo Trace — demand far outpaces the limited number of barrels selected for bottling each year, making it one of the most sought-after bourbons on the secondary and retail market alike." }],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'angels-envy', brandKeywords: ["Angel's Envy"], name: "Angel's Envy",
    seo: brandSeo({
      brand: "Angel's Envy", categoryLabel: 'Bourbon',
      titleTag: "Angel's Envy — Port Barrel Finish & Cask Strength",
      h1: "Angel's Envy Bourbon — Port Barrel Finish, Cask Strength & Rye Allocations",
      metaDescription: "Buy Angel's Envy online — port barrel finished bourbon, Cask Strength, and rye. Direct allocations at Aged & Amber. Free shipping on $300+.",
      hook: "Angel's Envy is a Louisville, Kentucky bourbon finished in ruby port wine barrels — a process pioneered by master distiller Lincoln Henderson. The port finishing adds distinctive dried fruit and sweetness to a classic wheated bourbon base.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'elijah-craig', brandKeywords: ['Elijah Craig'], name: 'Elijah Craig',
    seo: brandSeo({
      brand: 'Elijah Craig', categoryLabel: 'Bourbon',
      titleTag: 'Elijah Craig — Small Batch & Barrel Proof',
      h1: 'Elijah Craig Bourbon — Small Batch, Barrel Proof & Toasted Barrel Allocations',
      metaDescription: 'Buy Elijah Craig online — Small Batch, cask-strength Barrel Proof, Toasted Barrel, and the rare 18 Year. Direct allocations, free on $300+.',
      hook: 'Elijah Craig is a Heaven Hill bourbon named for the Baptist minister often credited (informally) as the "father of bourbon." The Small Batch and cask-strength Barrel Proof releases are core allocated favourites among enthusiasts.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'michters', brandKeywords: ["Michter's"], name: "Michter's",
    seo: brandSeo({
      brand: "Michter's", categoryLabel: 'Bourbon',
      titleTag: "Michter's — US*1, 10 Year & Celebration",
      h1: "Michter's Bourbon — US*1, 10 Year, Celebration Sour Mash & Toasted Barrel Allocations",
      metaDescription: "Buy Michter's online — US*1, 10 Year, Celebration Sour Mash, and Toasted Barrel bourbon. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Michter's is a Kentucky bourbon and rye producer known for its meticulous single barrel selection process and heat-cycled warehouses — the US*1 range and limited 10 Year and Celebration releases are consistently allocated.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'old-forester', brandKeywords: ['Old Forester'], name: 'Old Forester',
    seo: brandSeo({
      brand: 'Old Forester', categoryLabel: 'Bourbon',
      titleTag: 'Old Forester — Birthday Bourbon & Whiskey Row',
      h1: 'Old Forester Bourbon — Birthday Bourbon, 1920, 1910, 1897 & Statesman Allocations',
      metaDescription: 'Buy Old Forester online — Birthday Bourbon and the Whiskey Row Series (1920, 1910, 1897), plus Statesman. Direct allocations, free on $300+.',
      hook: 'Old Forester, distilled in Louisville by Brown-Forman, is the oldest continuously sold bourbon brand in the US, having remained in production through Prohibition under a medicinal whiskey license. The Birthday Bourbon and Whiskey Row Series are among its most collected annual releases.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'russells-reserve', brandKeywords: ["Russell's Reserve"], name: "Russell's Reserve",
    seo: brandSeo({
      brand: "Russell's Reserve", categoryLabel: 'Bourbon',
      titleTag: "Russell's Reserve — Single Barrel & 10 Year",
      h1: "Russell's Reserve Bourbon — Single Barrel, 10 Year & Wild Turkey Allocations",
      metaDescription: "Buy Russell's Reserve online — Wild Turkey's premium Single Barrel and 10 Year bourbon. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Russell's Reserve is Wild Turkey's premium line, named for master distiller Jimmy Russell and his son Eddie — the Single Barrel and 10 Year expressions showcase a fuller-proof, higher-rye take on the Wild Turkey house style.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'colonel-eh-taylor', brandKeywords: ['E.H. Taylor', 'Eh Taylor'], name: 'Colonel E.H. Taylor',
    seo: brandSeo({
      brand: 'Colonel E.H. Taylor', categoryLabel: 'Bourbon',
      titleTag: 'Colonel E.H. Taylor — Small Batch & Barrel Proof',
      h1: 'Colonel E.H. Taylor Bourbon — Small Batch, Barrel Proof, Single Barrel & Sour Mash Allocations',
      metaDescription: 'Buy Colonel E.H. Taylor online — Small Batch, Barrel Proof, Single Barrel, and the annual Old Fashioned Sour Mash. Buffalo Trace allocations.',
      hook: 'Colonel E.H. Taylor is Buffalo Trace’s tribute line to Colonel Edmund Haynes Taylor Jr., a pioneering 19th-century distiller — the range spans Small Batch, Barrel Proof, Single Barrel, and the annual limited Old Fashioned Sour Mash release.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'larceny', brandKeywords: ['Larceny'], name: 'Larceny',
    seo: brandSeo({
      brand: 'Larceny', categoryLabel: 'Bourbon',
      titleTag: 'Larceny — Small Batch & Barrel Proof',
      h1: 'Larceny Bourbon — Small Batch, Cask-Strength Barrel Proof & Wheated Allocations',
      metaDescription: 'Buy Larceny online — Heaven Hill’s wheated Small Batch and cask-strength Barrel Proof (batches A–B) bourbon. Direct allocations, free $300+.',
      hook: 'Larceny is Heaven Hill’s wheated bourbon line, named for the legend of a whiskey-loving bank guard skimming barrels for himself — the Small Batch and cask-strength Barrel Proof (batches A–B numbered) editions lead the range.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'bookers', brandKeywords: ["Booker's"], name: "Booker's",
    seo: brandSeo({
      brand: "Booker's", categoryLabel: 'Bourbon',
      titleTag: "Booker's — Uncut, Unfiltered Cask Strength",
      h1: "Booker's Bourbon — Cask Strength, Uncut & Unfiltered Batch Allocations",
      metaDescription: "Buy Booker's online — Jim Beam's uncut, unfiltered, cask-strength bourbon. Each year's named batches direct allocated. Free on $300+.",
      hook: "Booker's is Jim Beam's uncut, unfiltered, cask-strength bourbon, named for master distiller Booker Noe. Each year's batches carry a unique name and proof point straight from the barrel.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'four-roses', brandKeywords: ['Four Roses'], name: 'Four Roses',
    seo: brandSeo({
      brand: 'Four Roses', categoryLabel: 'Single Barrel Bourbon', titleTag: 'Four Roses — Single Barrel & Small Batch',
      h1: 'Four Roses Bourbon — Single Barrel & Small Batch Allocations',
      metaDescription: 'Buy Four Roses online — Single Barrel OESO/OBSV picks and Limited Edition Small Batch. Ten proprietary recipes. Direct allocations, free $300+.',
      hook: 'Four Roses distils ten distinct bourbon recipes — a combination of two mash bills and five proprietary yeast strains — then blends or single-barrels them into a wide, well-documented range including the collector-favourite Limited Edition Small Batch and Single Barrel OESO/OBSV picks.',
      faqs: [{ question: 'What do the Four Roses recipe codes mean?', answer: 'Four Roses labels each recipe with a four-letter code — the first two letters are always "OE" or "OB" (mash bill), and the last two identify the yeast strain, each contributing a distinct flavour note from fruity to spicy to floral.' }],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'knob-creek', brandKeywords: ['Knob Creek'], name: 'Knob Creek',
    seo: brandSeo({
      brand: 'Knob Creek', categoryLabel: 'Bourbon',
      titleTag: 'Knob Creek — 9 Year, Single Barrel & Rye',
      h1: 'Knob Creek Bourbon — 9 Year, Single Barrel, Cask Strength & Rye Allocations',
      metaDescription: 'Buy Knob Creek online — 9 Year, Single Barrel, cask strength, Smoked Maple, and rye. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Knob Creek is Jim Beam’s small batch, full-proof bourbon line, launched in 1992 as part of the original small batch bourbon movement — the 9 Year, Single Barrel, and cask-strength expressions anchor the range alongside a dedicated rye.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: '1792', brandKeywords: ['1792'], name: '1792',
    seo: brandSeo({
      brand: '1792', categoryLabel: 'Bourbon',
      titleTag: '1792 — Full Proof, Single Barrel & Sweet Wheat',
      h1: '1792 Bourbon — Full Proof, Single Barrel, Aged 12 & Sweet Wheat Allocations',
      metaDescription: 'Buy 1792 online — Full Proof, Single Barrel, Aged 12, Port Finish, and Sweet Wheat bourbon. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Named for the year Kentucky achieved statehood, 1792 is a high-rye bourbon line from Barton 1792 Distillery in Bardstown — the Small Batch, Full Proof, Single Barrel, and Sweet Wheat editions each showcase a different side of the house mash bill.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'bulleit', brandKeywords: ['Bulleit'], name: 'Bulleit',
    seo: brandSeo({
      brand: 'Bulleit', categoryLabel: 'Bourbon',
      titleTag: 'Bulleit — Frontier Whiskey, Rye & Barrel Strength',
      h1: 'Bulleit Bourbon — Frontier Whiskey, 10 Year, Rye & Barrel Strength Allocations',
      metaDescription: 'Buy Bulleit online — Frontier Whiskey bourbon, 10 Year, Barrel Strength, and dedicated rye. Direct allocations. Free shipping on $300+.',
      hook: 'Bulleit Frontier Whiskey is a high-rye Kentucky bourbon revived by Tom Bulleit based on his great-great-grandfather’s original recipe — bottled at 90 proof with a distinctive spicy, dry finish, alongside a well-regarded dedicated rye and Barrel Strength release.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'basil-hayden', brandKeywords: ['Basil Hayden'], name: 'Basil Hayden',
    seo: brandSeo({
      brand: 'Basil Hayden', categoryLabel: 'Bourbon',
      titleTag: 'Basil Hayden — Dark Rye, Toast & 10 Year',
      h1: 'Basil Hayden Bourbon — Dark Rye, Toast, Malted Rye & 10 Year Allocations',
      metaDescription: 'Buy Basil Hayden online — the light-bodied Jim Beam Small Batch bourbon, plus Dark Rye, Toast, and Malted Rye. Direct allocations, free $300+.',
      hook: 'Basil Hayden is a lighter-bodied, high-rye bourbon from the Jim Beam family, bottled at an approachable 80 proof — one of the original Jim Beam Small Batch Collection releases alongside Knob Creek, Booker’s, and Baker’s.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'jim-beam', brandKeywords: ['Jim Beam'], name: 'Jim Beam',
    seo: brandSeo({
      brand: 'Jim Beam', categoryLabel: 'Bourbon',
      titleTag: "Jim Beam — Black, Double Oak & Devil's Cut",
      h1: "Jim Beam Bourbon — Black, Double Oak, Devil's Cut & Signature Craft Allocations",
      metaDescription: "Buy Jim Beam online — Black Label, Double Oak, Devil's Cut, and Signature Craft bourbon. Direct allocations at Aged & Amber. Free on $300+.",
      hook: 'Jim Beam is the world’s best-selling bourbon, distilled in Clermont, Kentucky by the same family for seven generations — the core White Label sits alongside Black, Double Oak, Devil’s Cut, and Signature Craft expressions.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'evan-williams', brandKeywords: ['Evan Williams'], name: 'Evan Williams',
    seo: brandSeo({
      brand: 'Evan Williams', categoryLabel: 'Bourbon',
      titleTag: 'Evan Williams — Single Barrel & Bottled-in-Bond',
      h1: 'Evan Williams Bourbon — Single Barrel Vintage, Bottled-in-Bond & Black Label Allocations',
      metaDescription: 'Buy Evan Williams online — Single Barrel Vintage, Bottled-in-Bond, and Black Label bourbon. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Evan Williams is a Heaven Hill bourbon named for Kentucky’s first commercial distiller — the Black Label is the everyday staple, while the Bottled-in-Bond and Single Barrel Vintage releases are prized by collectors for exceptional value.',
    }),
  },

  // ─── SCOTCH ───────────────────────────────────────────
  {
    categorySlug: 'scotch-whisky', hubSlug: 'macallan', brandKeywords: ['Macallan'], name: 'The Macallan',
    seo: brandSeo({
      brand: 'The Macallan', categoryLabel: 'Scotch', titleTag: 'The Macallan — 12, 18, 25 Year & Rare Cask',
      h1: 'The Macallan — Sherry Oak, Double Cask & Rare Cask Allocations',
      metaDescription: 'Buy The Macallan online — 12, 18, 25 Year, Rare Cask, Harmony Collection, and rare expressions. Speyside’s finest. Direct allocations.',
      hook: 'The Macallan is a single malt Scotch whisky distilled at Easter Elchies Estate in Speyside — one of the world’s most recognised luxury spirits brands, famous for its commitment to natural colour and exceptional sherry oak cask quality, spanning the core 12 Year through to ultra-rare collectible expressions.',
      transactionalCTA: 'Buy The Macallan online — direct allocations of 12, 18, 25 Year, Rare Cask, and limited Harmony Collection. Ships to 45 US states.',
      faqs: [{ question: 'Why is The Macallan so expensive?', answer: 'The Macallan’s pricing reflects genuine scarcity of high-quality first-fill sherry oak casks (which cost far more than standard bourbon barrels), decades of ageing on rare expressions, and intense global collector demand — a 1926 Macallan sold at auction for over £1.5 million, the most expensive bottle of whisky ever sold.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'johnnie-walker', brandKeywords: ['Johnnie Walker'], name: 'Johnnie Walker',
    seo: brandSeo({
      brand: 'Johnnie Walker', categoryLabel: 'Blended Scotch', titleTag: 'Johnnie Walker — Blue, Black & Rare Labels',
      h1: 'Johnnie Walker — Blue Label, Black Label, King George V & Rare Label Allocations',
      metaDescription: 'Buy Johnnie Walker online — Blue Label, Black Label, Green Label, King George V, and rare label expressions. Direct allocations, free $300+.',
      hook: 'Johnnie Walker is the world’s best-selling Scotch whisky, blended from malts and grains sourced across every Scotch region — the coloured-label hierarchy (Red through Blue) signals increasing age, rarity, and blend complexity.',
      transactionalCTA: 'Buy Johnnie Walker Blue Label online — direct allocations of the ultra-premium Scotch blend, ships to 45 US states.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glenfiddich', brandKeywords: ['Glenfiddich'], name: 'Glenfiddich',
    seo: brandSeo({
      brand: 'Glenfiddich', categoryLabel: 'Scotch', titleTag: 'Glenfiddich — 12, 18, 21 Year & Grand Series',
      h1: 'Glenfiddich — 12, 15, 18, 21 Year & Grand Series Allocations',
      metaDescription: 'Buy Glenfiddich online — 12, 15, 18, 21 Year, Grand Cru, and rare 30 Year. The world’s best-selling single malt. Direct allocations, free $300+.',
      hook: 'Glenfiddich, meaning "valley of the deer" in Gaelic, is the world’s best-selling single malt Scotch — still family-owned and distilled at Speyside’s most-visited distillery, with a range spanning the core 12 Year through the experimental Grand Series finishes.',
      faqs: [{ question: 'How do you pronounce Glenfiddich?', answer: 'Glenfiddich is pronounced "glen-FID-ick" — the "ch" at the end is a soft Scottish Gaelic sound, closer to the "ch" in "loch" than an English "ch."' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glenlivet', brandKeywords: ['Glenlivet'], name: 'The Glenlivet',
    seo: brandSeo({
      brand: 'The Glenlivet', categoryLabel: 'Scotch',
      titleTag: 'The Glenlivet — 12, 15, 18 Year & Founder’s Reserve',
      h1: 'The Glenlivet — 12, 15, 18 Year, Founder’s Reserve & Nadurra Allocations',
      metaDescription: 'Buy The Glenlivet online — 12, 15, 18 Year, Founder’s Reserve, and cask-strength Nadurra. Speyside’s founding distillery. Direct allocations.',
      hook: 'The Glenlivet holds the first licence ever granted to a Speyside distillery in 1824, and remains one of the region’s most influential producers — the 12 and Founder’s Reserve are approachable, fruity entry points to the wider Nadurra and 18 Year range.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'laphroaig', brandKeywords: ['Laphroaig'], name: 'Laphroaig',
    seo: brandSeo({
      brand: 'Laphroaig', categoryLabel: 'Islay Scotch',
      titleTag: 'Laphroaig — 10 Year, Quarter Cask & Lore',
      h1: 'Laphroaig — 10 Year, Quarter Cask, Lore & Cairdeas Allocations',
      metaDescription: 'Buy Laphroaig online — 10 Year, Quarter Cask, Lore, Select, and the annual Cairdeas release. Islay’s most intensely peated malt.',
      hook: 'Laphroaig is one of Islay’s most intensely peated single malts, still floor-malting some of its own barley on-site — the 10 Year is the classic entry point, with Quarter Cask, Lore, and the annual Cairdeas release for enthusiasts.',
      faqs: [{ question: 'How do you pronounce Laphroaig?', answer: 'Laphroaig is pronounced "la-FROYG" — a Gaelic name meaning "the beautiful hollow by the broad bay," referring to the distillery’s shoreline setting on Islay.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'ardbeg', brandKeywords: ['Ardbeg'], name: 'Ardbeg',
    seo: brandSeo({
      brand: 'Ardbeg', categoryLabel: 'Islay Scotch',
      titleTag: 'Ardbeg — 10 Year, Uigeadail & Corryvreckan',
      h1: 'Ardbeg — 10 Year, Uigeadail, Corryvreckan, Wee Beastie & An Oa Allocations',
      metaDescription: 'Buy Ardbeg online — the Ten, Uigeadail, Corryvreckan, Wee Beastie, and An Oa. Islay’s heaviest-peated core range. Direct allocations.',
      hook: 'Ardbeg is renowned among Islay distilleries for the heaviest peating level in its core range, balanced by unusually long fermentation — the 10 Year "Ten" is the benchmark, alongside the sherried Uigeadail and cask-strength Corryvreckan.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'lagavulin', brandKeywords: ['Lagavulin'], name: 'Lagavulin',
    seo: brandSeo({
      brand: 'Lagavulin', categoryLabel: 'Islay Scotch',
      titleTag: 'Lagavulin — 16 Year, 8 Year & Distillers Edition',
      h1: 'Lagavulin — 16 Year, 8 Year, 12 Year Cask Strength & Distillers Edition Allocations',
      metaDescription: 'Buy Lagavulin online — 16 Year, 8 Year, cask-strength 12 Year, and Distillers Edition. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Lagavulin uses an unusually slow, deliberate distillation with exceptionally short, wide stills to produce one of Islay’s richest, most intensely peated single malts — the 16 Year is the enduring benchmark of the style.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'highland-park', brandKeywords: ['Highland Park'], name: 'Highland Park',
    seo: brandSeo({
      brand: 'Highland Park', categoryLabel: 'Scotch',
      titleTag: 'Highland Park — 12, 18, 21 & 25 Year',
      h1: 'Highland Park — 12, 18, 21, 25 Year & Viking Honour Allocations',
      metaDescription: 'Buy Highland Park online — 12, 18, 21, and 25 Year Orkney single malt, plus Viking Honour. Direct allocations. Free shipping on $300+.',
      hook: 'Highland Park distils on Orkney, Scotland’s northernmost whisky-producing island, still floor-malting its own barley over local heather-infused peat — giving its whisky a distinctive gentle smoke rather than Islay’s maritime intensity.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'dalmore', brandKeywords: ['Dalmore'], name: 'Dalmore',
    seo: brandSeo({
      brand: 'The Dalmore', categoryLabel: 'Scotch',
      titleTag: 'The Dalmore — 12, 15, 18 Year & King Alexander III',
      h1: 'The Dalmore — 12, 15, 18 Year, King Alexander III & Luminary Allocations',
      metaDescription: 'Buy The Dalmore online — 12, 15, 18 Year, King Alexander III, and Luminary. Matured in rare fortified wine casks. Direct allocations.',
      hook: 'The Dalmore is a Highland single malt distilled on the Cromarty Firth, known for maturing spirit in a sequence of ex-bourbon and rare fortified wine casks — Matusalem sherry butts in particular define its rich, orange-and-spice house style.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'balvenie', brandKeywords: ['Balvenie'], name: 'The Balvenie',
    seo: brandSeo({
      brand: 'The Balvenie', categoryLabel: 'Scotch',
      titleTag: 'The Balvenie — DoubleWood, Caribbean Cask & PortWood',
      h1: 'The Balvenie — 12 DoubleWood, 14 Caribbean Cask, 21 PortWood & Tun 1509 Allocations',
      metaDescription: 'Buy The Balvenie online — 12 DoubleWood, 14 Caribbean Cask, 21 PortWood, and Tun 1509. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'The Balvenie is one of the few Speyside distilleries that still grows some of its own barley and employs its own coppersmith and resident malt master — the DoubleWood, Caribbean Cask, and PortWood editions are built around distinctive secondary cask finishes.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'springbank', brandKeywords: ['Springbank'], name: 'Springbank',
    seo: brandSeo({
      brand: 'Springbank', categoryLabel: 'Campbeltown Scotch',
      titleTag: 'Springbank — 10, 15, 18 Year & Local Barley',
      h1: 'Springbank — 10, 15, 18 Year, Local Barley & 100 Proof Allocations',
      metaDescription: 'Buy Springbank online — 10, 15, 18 Year, Local Barley, and 100 Proof. Campbeltown’s fully on-site, hand-crafted malt. Direct allocations.',
      hook: 'Springbank is one of the last Scottish distilleries to perform every step — malting, distilling, and maturing — entirely on-site in Campbeltown, a nearly vanished whisky region it now anchors almost single-handedly. Its releases are famously allocated and highly sought by collectors.',
      transactionalCTA: 'Buy Springbank online — one of the highest-demand allocated Scotch releases in the category. Ships to 45 US states.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'bruichladdich', brandKeywords: ['Bruichladdich'], name: 'Bruichladdich',
    seo: brandSeo({
      brand: 'Bruichladdich', categoryLabel: 'Islay Scotch',
      titleTag: 'Bruichladdich — Classic Laddie, Port Charlotte & Octomore',
      h1: 'Bruichladdich — Classic Laddie, Islay Barley, Port Charlotte & Octomore Allocations',
      metaDescription: 'Buy Bruichladdich online — unpeated Classic Laddie, peated Port Charlotte, and super-heavily-peated Octomore. Direct allocations, free $300+.',
      hook: 'Bruichladdich distils three distinct styles under one Islay roof: the unpeated Classic Laddie, the super-heavily-peated Octomore, and the traditionally peated Port Charlotte — all built around 100% Scottish-grown barley.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'oban', brandKeywords: ['Oban'], name: 'Oban',
    seo: brandSeo({
      brand: 'Oban', categoryLabel: 'Highland Scotch',
      titleTag: 'Oban — 14 Year, 18 Year & Distillers Edition',
      h1: 'Oban — 14 Year, 18 Year, Distillers Edition & Little Bay Allocations',
      metaDescription: 'Buy Oban online — 14 Year, 18 Year, Distillers Edition, and Little Bay single malt. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Oban is one of Scotland’s smallest and oldest working distilleries, built into the hillside of the coastal town it shares its name with — its West Highland single malt balances coastal, smoky, and fruity notes in one of Scotch’s most distinctive house styles.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'aberlour', brandKeywords: ['Aberlour'], name: 'Aberlour',
    seo: brandSeo({
      brand: 'Aberlour', categoryLabel: 'Scotch', titleTag: 'Aberlour — 12, 16, 18 Year & A’bunadh',
      h1: 'Aberlour — 12, 16, 18 Year & A’bunadh Cask Strength Allocations',
      metaDescription: 'Buy Aberlour online — 12, 16, 18 Year, and the cask-strength A’bunadh. First-fill Oloroso sherry butt Speyside malt. Direct allocations.',
      hook: 'Aberlour is a Speyside distillery whose A’bunadh release — bottled at cask strength with no chill-filtration or added colour, entirely from first-fill sherry butts — has become a benchmark for sherried, cask-strength Scotch among enthusiasts.',
      faqs: [{ question: 'What is Aberlour A’bunadh?', answer: 'A’bunadh (Gaelic for "the origin") is Aberlour’s cask-strength, non-chill-filtered, uncoloured single malt matured entirely in first-fill Oloroso sherry butts. Each numbered batch varies slightly in proof and profile, making it a favourite among collectors chasing specific batches.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glendronach', brandKeywords: ['GlenDronach'], name: 'GlenDronach',
    seo: brandSeo({
      brand: 'GlenDronach', categoryLabel: 'Scotch', titleTag: 'GlenDronach — 12, 15, 18, 21 Year & Parliament',
      h1: 'GlenDronach — 12, 15 Revival, 18 Allardice & 21 Parliament Allocations',
      metaDescription: 'Buy GlenDronach online — 12, 15 Revival, 18 Allardice, and 21 Parliament. Deeply sherried Highland single malt. Direct allocations, free $300+.',
      hook: 'GlenDronach is a Highland distillery built around traditional direct-fired stills and extensive Oloroso and Pedro Ximénez sherry cask maturation — its deeply sherried house style has made it one of the most collected Highland single malts.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glen-scotia', brandKeywords: ['Glen Scotia'], name: 'Glen Scotia',
    seo: brandSeo({
      brand: 'Glen Scotia', categoryLabel: 'Campbeltown Scotch',
      titleTag: 'Glen Scotia — 15 Year, Double Cask & 18 Year',
      h1: 'Glen Scotia — 15 Year, Double Cask, 18 & 25 Year Campbeltown Allocations',
      metaDescription: 'Buy Glen Scotia online — 15 Year, Double Cask, 18, and 25 Year. One of Campbeltown’s last three working distilleries. Free shipping on $300+.',
      hook: 'Glen Scotia is one of only three working distilleries left in Campbeltown, Scotland’s smallest official whisky region — its single malts carry a distinctive briny, slightly oily character shaped by the coastal warehouse environment.',
    }),
  },

  // ─── IRISH ───────────────────────────────────────────
  {
    categorySlug: 'irish-whiskey', hubSlug: 'spot-whiskey', brandKeywords: ['Spot Single Pot Still', 'Green Spot', 'Yellow Spot', 'Red Spot'], name: 'Spot Whiskey',
    seo: brandSeo({
      brand: 'Spot Whiskey', categoryLabel: 'Irish Whiskey', titleTag: 'Spot Whiskey — Green, Blue, Yellow & Red Spot',
      h1: 'Spot Whiskey — Buy Green Spot, Blue Spot, Yellow Spot & Red Spot Online',
      metaDescription: 'Buy Spot whiskey — Green Spot, Yellow Spot, Blue Spot 7 Year, and Red Spot 15 Year. Ireland’s rarest single pot still whiskeys. Direct allocations.',
      hook: 'The Spot range — named for the coloured spots of paint historically used by Dublin wine merchants Mitchell & Son to mark barrel ageing — is among Ireland’s most celebrated single pot still whiskey families, distilled at Midleton and matured in a mix of bourbon, sherry, and Madeira casks.',
      transactionalCTA: 'Buy Blue Spot whiskey online — the highest buyer-intent search in the entire Irish whiskey category. Ships to 45 US states.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'jameson', brandKeywords: ['Jameson'], name: 'Jameson',
    seo: brandSeo({
      brand: 'Jameson', categoryLabel: 'Irish Whiskey',
      titleTag: 'Jameson — Black Barrel, Caskmates & 18 Year',
      h1: 'Jameson Irish Whiskey — Black Barrel, Caskmates, Select Reserve & 18 Year Allocations',
      metaDescription: 'Buy Jameson online — Black Barrel, Caskmates Stout Edition, Select Reserve, and the rare 18 Year. Direct allocations at Aged & Amber.',
      hook: 'Jameson is the world’s best-selling Irish whiskey, triple distilled and blended at Midleton Distillery in County Cork — Black Barrel, Caskmates, and the 18 Year sit alongside the iconic core blend.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'redbreast', brandKeywords: ['Redbreast'], name: 'Redbreast',
    seo: brandSeo({
      brand: 'Redbreast', categoryLabel: 'Single Pot Still Irish Whiskey',
      titleTag: 'Redbreast — 12, 15, 21 & 27 Year',
      h1: 'Redbreast — 12, 15, 21, 27 Year & Cask Strength Single Pot Still Allocations',
      metaDescription: 'Buy Redbreast online — 12, 15, 21, 27 Year, cask-strength 12 CS, and Lustau Edition. The benchmark single pot still. Free on $300+.',
      hook: 'Redbreast is widely regarded as the benchmark single pot still Irish whiskey — distilled at Midleton from a mash of malted and unmalted barley, with the 12 Year, cask-strength 12 CS, and rare 21 and 27 Year among the most collected releases.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'teeling', brandKeywords: ['Teeling'], name: 'Teeling',
    seo: brandSeo({
      brand: 'Teeling', categoryLabel: 'Irish Whiskey',
      titleTag: 'Teeling — Small Batch, Single Grain & Single Malt',
      h1: 'Teeling — Small Batch, Single Grain, Single Malt, Trinity & Brabazon Allocations',
      metaDescription: 'Buy Teeling online — Small Batch, Single Grain, Single Malt, Trinity, and the Brabazon series. Dublin’s first new distillery in 125 years.',
      hook: 'Teeling was Dublin’s first new distillery in over 125 years when it opened in 2015, built by a family with generations of Irish distilling history — the Small Batch, Single Grain, and Single Malt lines lean into experimental cask finishes.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'bushmills', brandKeywords: ['Bushmills'], name: 'Bushmills',
    seo: brandSeo({
      brand: 'Bushmills', categoryLabel: 'Irish Whiskey',
      titleTag: 'Bushmills — Black Bush, 10, 16 & 21 Year',
      h1: 'Bushmills — Black Bush, 10, 16, 21 Year & Causeway Collection Allocations',
      metaDescription: 'Buy Bushmills online — Black Bush, 10, 16, 21 Year single malt, and the Causeway Collection. The world’s oldest licensed distillery.',
      hook: 'Bushmills holds the world’s oldest licence to distil whiskey, granted in 1608 in County Antrim, Northern Ireland — Black Bush, the 10, 16, and 21 Year single malts, and the Causeway Collection anchor a range built on triple distillation.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'tullamore-dew', brandKeywords: ['Tullamore'], name: 'Tullamore D.E.W.',
    seo: brandSeo({
      brand: 'Tullamore D.E.W.', categoryLabel: 'Irish Whiskey', titleTag: 'Tullamore D.E.W. — Buy All Expressions Online',
      h1: 'Tullamore D.E.W. Irish Whiskey — Original, 12 Year, 18 Year & XO Allocations',
      hook: 'Tullamore D.E.W. is a triple-distilled, triple-blended Irish whiskey — combining pot still, malt, and grain whiskeys — named for 19th-century distillery owner Daniel E. Williams, whose initials still mark the label.',
      transactionalCTA: 'Buy Tullamore D.E.W. online — Original, 12 Year, 18 Year, Honey, and Rum Cask allocations, ships to 45 US states.',
      faqs: [{ question: 'What does Tullamore D.E.W. stand for?', answer: 'D.E.W. stands for Daniel E. Williams, the distillery manager and later owner credited with expanding and modernising the Tullamore distillery in the late 19th century.' }],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'powers', brandKeywords: ['Powers'], name: 'Powers',
    seo: brandSeo({
      brand: 'Powers', categoryLabel: 'Irish Whiskey',
      titleTag: "Powers — John's Lane, Three Swallow & Gold Label",
      h1: "Powers Irish Whiskey — John's Lane, Three Swallow, Signature Release & Gold Label Allocations",
      metaDescription: "Buy Powers online — John's Lane, Three Swallow, Signature Release, and Gold Label single pot still. Direct allocations, free on $300+.",
      hook: 'Powers is one of Ireland’s oldest distilling names, dating to 1791, and a longtime favourite within Ireland for its spicier, more robust single pot still character — the John’s Lane and Three Swallow releases lead the allocated range.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'connemara', brandKeywords: ['Connemara'], name: 'Connemara',
    seo: brandSeo({
      brand: 'Connemara', categoryLabel: 'Irish Whiskey',
      titleTag: 'Connemara — Peated Irish Single Malt',
      h1: 'Connemara — Peated Single Malt, Cask Strength & Turf Mór Allocations',
      metaDescription: 'Buy Connemara online — Ireland’s rare peated single malt, plus Cask Strength and Turf Mór. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Connemara is a rarity in Irish whiskey — a peated single malt, made from barley dried over peat fires in the traditional Scotch style, giving it a smoky character almost never found in Irish whiskey.',
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'knappogue-castle', brandKeywords: ['Knappogue'], name: 'Knappogue Castle',
    seo: brandSeo({
      brand: 'Knappogue Castle', categoryLabel: 'Irish Whiskey', titleTag: 'Knappogue Castle Irish Whiskey',
      h1: 'Knappogue Castle Irish Whiskey — 12, 14, 16 & 21 Year Single Malt',
      hook: 'Knappogue Castle is a single malt Irish whiskey named for the restored 15th-century castle in County Clare pictured on its label — a small-production range built around 12, 14, 16, and rare 21 Year expressions.',
      transactionalCTA: 'Buy Knappogue Castle — one of Ireland’s rarest allocated single malts, near-zero search competition across the 12, 14, 16, and 21 Year range.',
      faqs: [{ question: 'How do you pronounce Knappogue?', answer: 'Knappogue is pronounced "na-POG" — an anglicisation of the Irish "Cnapóg."' }],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: '2-gingers', brandKeywords: ['2 Gingers'], name: '2 Gingers',
    seo: brandSeo({
      brand: '2 Gingers', categoryLabel: 'Irish Whiskey',
      titleTag: '2 Gingers Whiskey — Blended Irish Whiskey',
      h1: '2 Gingers Irish Whiskey — Smooth, Easy-Mixing Blended Allocations',
      metaDescription: 'Buy 2 Gingers whiskey online — the smooth, easy-mixing blended Irish whiskey. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: '2 Gingers is a blended Irish whiskey named for founder Kieran Folliard’s red-headed mother and aunt — a smooth, easy-mixing whiskey positioned as an accessible everyday pour rather than a sipping collector’s bottle.',
    }),
  },
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'coole-swan', brandKeywords: ['Coole Swan'], name: 'Coole Swan',
    seo: brandSeo({
      brand: 'Coole Swan', categoryLabel: 'Irish Cream Liqueur', titleTag: 'Coole Swan — Premium Irish Cream Liqueur',
      h1: 'Coole Swan Irish Cream Liqueur — Premium Direct Allocations',
      metaDescription: 'Buy Coole Swan online — premium Irish cream liqueur blending fresh dairy cream, single malt whiskey, and Belgian white chocolate. Free $300+.',
      hook: 'Coole Swan is a premium Irish cream liqueur blending fresh Irish dairy cream, single malt Irish whiskey, and Belgian white chocolate — a richer, less sweet alternative to standard cream liqueurs.',
    }),
  },

  // ─── JAPANESE ───────────────────────────────────────────
  {
    categorySlug: 'japanese-whisky', hubSlug: 'yamazaki', brandKeywords: ['Yamazaki'], name: 'Yamazaki',
    seo: brandSeo({
      brand: 'Yamazaki', categoryLabel: 'Japanese Whisky',
      titleTag: 'Yamazaki — 12, 18, 25 Year & Sherry Cask',
      h1: 'Yamazaki — 12, 18, 25 Year, Distiller’s Reserve & Sherry Cask Allocations',
      metaDescription: 'Buy Yamazaki online — 12, 18, 25 Year, Distiller’s Reserve, and Sherry Cask. Japan’s first whisky distillery, ships to 45 states.',
      hook: 'Yamazaki, distilled by Suntory since 1923, is Japan’s first and most storied whisky distillery — its single malts, aged across a wide range of cask types including rare Mizunara oak, put Japanese whisky on the world map after major international award wins in the 2000s and 2010s.',
      transactionalCTA: 'Looking to buy Yamazaki online? Ships to 45 US states from our Napa Valley cellar.',
      faqs: [{ question: 'Is Yamazaki made from rice?', answer: 'No — Yamazaki, like other Japanese single malts, is made from malted barley, following the Scotch tradition. Rice is used in Japanese sake and shochu, not in Japanese whisky production.' }],
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'hibiki', brandKeywords: ['Hibiki'], name: 'Hibiki',
    seo: brandSeo({
      brand: 'Hibiki', categoryLabel: 'Japanese Whisky',
      titleTag: 'Hibiki — Japanese Harmony, 17, 21 & 30 Year',
      h1: 'Hibiki — Japanese Harmony, Master Select, 17, 21 & 30 Year Allocations',
      metaDescription: 'Buy Hibiki online — Japanese Harmony, Master Select, and the rare 17, 21, and 30 Year. Suntory’s flagship blend. Direct allocations.',
      hook: 'Hibiki is Suntory’s flagship blended Japanese whisky, combining malt and grain whiskies from across the Suntory distillery portfolio — the Japanese Harmony expression is designed for exceptional balance and approachability.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'nikka', brandKeywords: ['Nikka'], name: 'Nikka',
    seo: brandSeo({
      brand: 'Nikka', categoryLabel: 'Japanese Whisky',
      titleTag: 'Nikka — From The Barrel, Coffey Grain & Coffey Malt',
      h1: 'Nikka — From The Barrel, Coffey Grain, Coffey Malt & Days Allocations',
      metaDescription: 'Buy Nikka online — From The Barrel, Coffey Grain, Coffey Malt, and Days. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Nikka was founded by Masataka Taketsuru, the distiller who trained in Scotland and helped establish Japanese whisky production itself — the From The Barrel, Coffey Grain, and Coffey Malt expressions showcase the breadth of the Nikka range.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'hakushu', brandKeywords: ['Hakushu'], name: 'Hakushu',
    seo: brandSeo({
      brand: 'Hakushu', categoryLabel: 'Japanese Whisky',
      titleTag: 'Hakushu — 12, 18 Year & Heavily Peated',
      h1: 'Hakushu — 12, 18 Year, Distiller’s Reserve & Heavily Peated Allocations',
      metaDescription: 'Buy Hakushu online — 12, 18 Year, Distiller’s Reserve, and the rare Heavily Peated expression. Suntory’s mountain distillery.',
      hook: 'Hakushu, Suntory’s mountain distillery in the Southern Japanese Alps, is known for a fresher, greener, more herbal single malt character than its sister distillery Yamazaki — the Heavily Peated expression is a distinctive outlier in the Japanese whisky category.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'suntory-toki', brandKeywords: ['Toki'], name: 'Suntory Toki',
    seo: brandSeo({
      brand: 'Suntory Toki', categoryLabel: 'Japanese Whisky',
      titleTag: 'Suntory Toki — Blended Japanese Whisky',
      h1: 'Suntory Toki — Blended Japanese Whisky for the Highball, Direct Allocations',
      metaDescription: 'Buy Suntory Toki online — the blended Japanese whisky built for the highball, from Yamazaki, Hakushu, and Chita. Direct allocations.',
      hook: 'Suntory Toki is a blended Japanese whisky combining malt and grain whisky from Yamazaki, Hakushu, and Chita distilleries, purpose-built for the Japanese highball — light, crisp, and mixable.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'kavalan', brandKeywords: ['Kavalan'], name: 'Kavalan',
    seo: brandSeo({
      brand: 'Kavalan', categoryLabel: 'Japanese-Style Whisky',
      titleTag: 'Kavalan — Solist, Concertmaster & Podium',
      h1: 'Kavalan — Solist, Concertmaster, Podium & Classic Allocations',
      metaDescription: 'Buy Kavalan online — Solist, Concertmaster, Podium, and Classic. Taiwan’s award-winning single malt. Direct allocations, free $300+.',
      hook: 'Kavalan is Taiwan’s pioneering single malt distillery, founded in 2005 — its subtropical climate accelerates maturation dramatically compared to Scotland or Japan, producing intensely fruity, fast-maturing whisky that has won blind-tasting awards against Scotch and Japanese rivals alike.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'togouchi', brandKeywords: ['Togouchi'], name: 'Togouchi',
    seo: brandSeo({
      brand: 'Togouchi', categoryLabel: 'Japanese Whisky',
      titleTag: 'Togouchi — 9 Year & 18 Year Blended Whisky',
      h1: 'Togouchi — 9 Year & 18 Year Tunnel-Matured Blended Whisky Allocations',
      metaDescription: 'Buy Togouchi online — 9 Year and 18 Year blended Japanese whisky, matured in a Hiroshima railway tunnel. Direct allocations, free $300+.',
      hook: 'Togouchi is a blended Japanese whisky matured in a decommissioned railway tunnel in Hiroshima Prefecture, where naturally stable temperature and humidity are used for maturation — the 9 Year and 18 Year are the most widely available expressions.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'akashi', brandKeywords: ['Akashi'], name: 'Akashi',
    seo: brandSeo({
      brand: 'Akashi', categoryLabel: 'Japanese Whisky',
      titleTag: 'Akashi — Single Malt & White Oak',
      h1: 'Akashi — Single Malt, Blended & White Oak Distillery Allocations',
      metaDescription: 'Buy Akashi online — single malt and blended whisky from White Oak Distillery, one of Japan’s oldest producers. Direct allocations, free $300+.',
      hook: 'Akashi is produced by White Oak Distillery in Hyogo Prefecture, one of Japan’s smaller and older whisky producers, distilling since 1919 — its single malt and blended expressions offer an entry point into Japanese whisky distinct from the larger Suntory and Nikka houses.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'iwai', brandKeywords: ['Iwai'], name: 'Iwai',
    seo: brandSeo({
      brand: 'Iwai', categoryLabel: 'Japanese Whisky',
      titleTag: 'Iwai — Mars Shinshu Tradition Whisky',
      h1: 'Iwai Japanese Whisky — Tradition & Mizunara Cask Allocations',
      metaDescription: 'Buy Iwai online — Mars Shinshu’s Tradition expression, matured in ex-bourbon and Mizunara oak. Direct allocations at Aged & Amber.',
      hook: 'Iwai is produced by Mars Shinshu Distillery, named for founder Kiichiro Iwai, a distiller who worked alongside Masataka Taketsuru in Japanese whisky’s earliest days — the Tradition expression is matured partly in ex-bourbon and Mizunara casks.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'mars-shinshu', brandKeywords: ['Mars Shinshu', 'Mars Komagatake', 'Mars Maltage'], name: 'Mars Shinshu',
    seo: brandSeo({
      brand: 'Mars Shinshu', categoryLabel: 'Japanese Whisky',
      titleTag: 'Mars Shinshu — Komagatake & Maltage Cosmo',
      h1: 'Mars Shinshu — Komagatake & Maltage Cosmo High-Altitude Allocations',
      metaDescription: 'Buy Mars Shinshu online — Komagatake and Maltage Cosmo from Japan’s highest-altitude distillery. Direct allocations. Free shipping $300+.',
      hook: 'Mars Shinshu is Japan’s highest-altitude whisky distillery, set in the Japanese Alps at over 800 metres — the cool climate slows maturation for a lighter, more delicate spirit under the Komagatake and Maltage Cosmo labels.',
    }),
  },

  // ─── RYE & OTHER WHISKEY ───────────────────────────────────────────
  {
    categorySlug: 'other-whiskey', hubSlug: 'whistlepig', brandKeywords: ['WhistlePig'], name: 'WhistlePig',
    seo: brandSeo({
      brand: 'WhistlePig', categoryLabel: 'Rye Whiskey',
      titleTag: 'WhistlePig — 10, 12, 15 Year & Boss Hog',
      h1: 'WhistlePig Rye — 10, 12, 15 Year, Boss Hog & Farm Stock Allocations',
      metaDescription: 'Buy WhistlePig online — 10, 12, 15 Year rye, the collector Boss Hog, and Farm Stock. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'WhistlePig, based on a former dairy farm in Vermont, helped drive the modern American rye whiskey revival — the 10 Year, 12 Year Old World, 15 Year, and the collector-favourite Boss Hog annual release anchor the range.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'rittenhouse', brandKeywords: ['Rittenhouse'], name: 'Rittenhouse',
    seo: brandSeo({
      brand: 'Rittenhouse', categoryLabel: 'Rye Whiskey',
      titleTag: 'Rittenhouse Rye — Bottled-in-Bond',
      h1: 'Rittenhouse Rye — Bottled-in-Bond, 100 Proof & Rare 21 Year Allocations',
      metaDescription: 'Buy Rittenhouse rye online — Bottled-in-Bond 100 proof and the rare 21 Year. A bartender favorite for classic rye cocktails. Free on $300+.',
      hook: 'Rittenhouse Bottled-in-Bond Rye, produced by Heaven Hill, is a bartender favourite for its exceptional value — full-proof, straight rye character that anchors classic rye cocktails like the Sazerac and Manhattan.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'sazerac-rye', brandKeywords: ['Sazerac'], name: 'Sazerac Rye',
    seo: brandSeo({
      brand: 'Sazerac Rye', categoryLabel: 'Rye Whiskey',
      titleTag: 'Sazerac Rye — 6 Year & Thomas H. Handy',
      h1: 'Sazerac Rye — 6 Year & Thomas H. Handy Antique Collection Allocations',
      metaDescription: 'Buy Sazerac rye online — the 6 Year and the ultra-allocated Thomas H. Handy Sazerac. Buffalo Trace Antique Collection. Free on $300+.',
      hook: 'Sazerac Rye, produced by Buffalo Trace, shares its name with the classic New Orleans cocktail it was built for — the 6 Year is the standard release, while the annual Thomas H. Handy Sazerac from the Buffalo Trace Antique Collection is one of the most allocated ryes in the US.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'pikesville-rye', brandKeywords: ['Pikesville'], name: 'Pikesville Rye',
    seo: brandSeo({
      brand: 'Pikesville Rye', categoryLabel: 'Rye Whiskey',
      titleTag: 'Pikesville Rye — 110 Proof Maryland Rye',
      h1: 'Pikesville Rye — 110 Proof Historic Maryland Rye Whiskey Allocations',
      metaDescription: 'Buy Pikesville rye online — Heaven Hill’s 110-proof revival of the historic Maryland rye style. Direct allocations. Free shipping on $300+.',
      hook: 'Pikesville, produced by Heaven Hill, revives a historic Maryland rye whiskey name and bottles at a robust 110 proof — a higher-proof, spicier alternative to Rittenhouse from the same distillery.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'new-riff', brandKeywords: ['New Riff'], name: 'New Riff',
    seo: brandSeo({
      brand: 'New Riff', categoryLabel: 'Rye Whiskey',
      titleTag: 'New Riff — Bottled-in-Bond & Single Barrel Rye',
      h1: 'New Riff Rye — Bottled-in-Bond, Single Barrel & Spring Rye Allocations',
      metaDescription: 'Buy New Riff online — Bottled-in-Bond rye, Single Barrel selections, and Spring Rye. Chill-filtration-free Kentucky rye. Free on $300+.',
      hook: 'New Riff is a Kentucky distillery just across the river from Cincinnati, bottling every release without chill-filtration at bonded-strength or higher — its Bottled-in-Bond rye and Single Barrel selections have quickly built a following among enthusiasts.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'high-west', brandKeywords: ['High West'], name: 'High West',
    seo: brandSeo({
      brand: 'High West', categoryLabel: 'Rye Whiskey',
      titleTag: 'High West — Double Rye, Rendezvous & Campfire',
      h1: 'High West Rye — Double Rye, Rendezvous Rye & Campfire Blend Allocations',
      metaDescription: 'Buy High West online — Double Rye, Rendezvous Rye, and the rye/bourbon/Scotch Campfire blend. Utah’s first legal distillery. Free on $300+.',
      hook: 'High West, based in Park City, Utah, was the first legal distillery in the state since Prohibition — the Double Rye, Rendezvous Rye, and Campfire (a rye/bourbon/Scotch blend) are known for creative sourcing and blending.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'sagamore-spirit', brandKeywords: ['Sagamore'], name: 'Sagamore Spirit',
    seo: brandSeo({
      brand: 'Sagamore Spirit', categoryLabel: 'Maryland Rye Whiskey',
      titleTag: 'Sagamore Spirit — Cask Strength & Double Oak Rye',
      h1: 'Sagamore Spirit Rye — Cask Strength, Double Oak & Cognac Finish Allocations',
      metaDescription: 'Buy Sagamore Spirit online — Maryland-style rye, Cask Strength, Double Oak, and Cognac Finish. Direct allocations. Free shipping on $300+.',
      hook: 'Sagamore Spirit revives the once-dominant Maryland rye whiskey style, blending two proprietary rye mash bills distilled on the Baltimore waterfront — the core release, Cask Strength, and Double Oak lead a range built entirely around rye.',
    }),
  },

  // ─── TEQUILA & MEZCAL ───────────────────────────────────────────
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'don-julio', brandKeywords: ['Don Julio'], name: 'Don Julio',
    seo: brandSeo({
      brand: 'Don Julio', categoryLabel: 'Tequila', titleTag: 'Don Julio — 1942, Reposado, Añejo & Real',
      h1: 'Don Julio Tequila — 1942, Reposado, Añejo, Real & Primavera Allocations',
      metaDescription: 'Buy Don Julio online — the ultra-premium 1942 and rare Real, plus Blanco, Reposado, Añejo, and 70 Cristalino. Direct allocations, free $300+.',
      hook: 'Don Julio was founded by Don Julio González, one of the first producers to bottle 100% agave tequila for sipping rather than mixing — the ultra-premium 1942 and rare Real expressions sit above the widely available Blanco, Reposado, and Añejo range.',
      transactionalCTA: 'Buy Don Julio 1942 online — the highest buyer-intent tequila search we track. Prominent allocations, ships to 45 US states.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'casamigos', brandKeywords: ['Casamigos'], name: 'Casamigos',
    seo: brandSeo({
      brand: 'Casamigos', categoryLabel: 'Tequila',
      titleTag: 'Casamigos — Blanco, Reposado, Añejo & Mezcal',
      h1: 'Casamigos Tequila — Blanco, Reposado, Añejo & Mezcal Allocations',
      metaDescription: 'Buy Casamigos online — Blanco, Reposado, Añejo tequila, and Mezcal. Co-founded by George Clooney. Direct allocations. Free on $300+.',
      hook: 'Casamigos was co-founded by George Clooney and Rande Gerber as a slow-roasted, additive-free tequila built specifically for smooth sipping — Blanco, Reposado, Añejo, and a Mezcal round out the range.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'clase-azul', brandKeywords: ['Clase Azul'], name: 'Clase Azul',
    seo: brandSeo({
      brand: 'Clase Azul', categoryLabel: 'Tequila',
      titleTag: 'Clase Azul — Reposado, Añejo & Ultra',
      h1: 'Clase Azul — Reposado, Añejo, Ultra & Gold Ceramic Decanter Allocations',
      metaDescription: 'Buy Clase Azul online — hand-painted ceramic Reposado, Añejo, Ultra, and Gold. Direct allocations at Aged & Amber. Free shipping $300+.',
      hook: 'Clase Azul is instantly recognisable for its hand-painted ceramic decanter bottles, produced by artisans in Guanajuato, Mexico — the Reposado is the most widely available expression, with Añejo, Ultra, and Gold at the collectible high end.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'patron', brandKeywords: ['Patrón', 'Patron'], name: 'Patrón',
    seo: brandSeo({
      brand: 'Patrón', categoryLabel: 'Tequila', titleTag: 'Patrón — Silver, Reposado & Extra Añejo',
      h1: 'Patrón Tequila — Silver, Reposado & Extra Añejo Allocations',
      metaDescription: 'Buy Patrón online — Silver, Reposado, Añejo, Extra Añejo, and the ultra-rare Gran Patrón collection. Direct allocations, free on $300+.',
      hook: 'Patrón was one of the brands that helped popularise ultra-premium sipping tequila in the US market — the Silver, Reposado, Añejo, and Extra Añejo core range sits alongside the ultra-rare Gran Patrón collection.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'fortaleza', brandKeywords: ['Fortaleza'], name: 'Fortaleza',
    seo: brandSeo({
      brand: 'Fortaleza', categoryLabel: 'Tequila',
      titleTag: 'Fortaleza — Tahona-Crushed Tequila',
      h1: 'Fortaleza Tequila — Traditional Tahona Stone Wheel Allocations',
      metaDescription: 'Buy Fortaleza online — traditional tahona-crushed, copper-pot-distilled tequila. A bartender and purist favorite. Direct allocations, free $300+.',
      hook: 'Fortaleza is produced using a traditional tahona stone wheel to crush cooked agave and a small copper pot still — a deliberately old-fashioned process that has made it a favourite among tequila purists and bartenders.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: '818-tequila', brandKeywords: ['818 Tequila'], name: '818 Tequila',
    seo: brandSeo({
      brand: '818 Tequila', categoryLabel: 'Tequila',
      titleTag: "818 Tequila — Kendall Jenner's Highland Agave",
      h1: '818 Tequila — Blanco, Reposado & Añejo Highland Allocations',
      metaDescription: '818 is a 100% additive-free tequila founded by Kendall Jenner, produced in the highlands of Jalisco — the range spans Blanco through Añejo. Free $300+.',
      hook: '818 is a 100% additive-free tequila founded by Kendall Jenner, produced in the highlands of Jalisco — the range spans Blanco through Añejo.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'g4-tequila', brandKeywords: ['G4 Tequila', 'G4 Blanco', 'G4 Reposado', 'G4 Añejo'], name: 'G4 Tequila',
    seo: brandSeo({
      brand: 'G4 Tequila', categoryLabel: 'Tequila',
      titleTag: 'G4 Tequila — Blanco, Reposado & Añejo',
      h1: 'G4 Tequila — Blanco, Reposado & Añejo Small-Batch Allocations',
      metaDescription: 'Buy G4 online — small-batch tequila from a fourth-generation Jalisco family distillery. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'G4 is a small-batch tequila from master distiller Felipe Camarena’s fourth-generation family distillery in Jalisco — built around traditional roasting and fermentation methods favoured by bartenders and enthusiasts.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'komos', brandKeywords: ['Komos'], name: 'Komos',
    seo: brandSeo({
      brand: 'Komos', categoryLabel: 'Ultra-Premium Tequila',
      titleTag: 'Komos — Ultra-Premium Tequila',
      h1: 'Komos Tequila — Ultra-Premium Extended Fermentation Allocations',
      metaDescription: 'Buy Komos online — ultra-premium tequila in hand-blown Rioja glass decanters. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Komos is an ultra-premium tequila line built around extended fermentation and hand-blown Rioja glass decanters, positioned at the luxury end of the category.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'cincoro', brandKeywords: ['Cincoro'], name: 'Cincoro',
    seo: brandSeo({
      brand: 'Cincoro', categoryLabel: 'Tequila',
      titleTag: "Cincoro — Michael Jordan's Small-Batch Tequila",
      h1: 'Cincoro Tequila — Blanco, Reposado, Añejo & Extra Añejo Allocations',
      metaDescription: 'Buy Cincoro online — Michael Jordan’s small-batch, additive-free Jalisco tequila. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Cincoro is a tequila brand co-founded by NBA legend Michael Jordan and four fellow team owners, produced in Jalisco with a focus on small-batch, additive-free production.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'lobos-1707', brandKeywords: ['Lobos 1707'], name: 'Lobos 1707',
    seo: brandSeo({
      brand: 'Lobos 1707', categoryLabel: 'Tequila & Mezcal',
      titleTag: 'Lobos 1707 — LeBron James Tequila & Mezcal',
      h1: 'Lobos 1707 — Tequila & Mezcal Allocations, Co-Founded by LeBron James',
      metaDescription: 'Buy Lobos 1707 online — tequila and mezcal co-founded by LeBron James, drawing on a family agave legacy since 1707. Direct allocations, free $300+.',
      hook: 'Lobos 1707 is a tequila and mezcal brand co-founded by LeBron James and Maverick Carter, drawing on a family agave-growing history dating back to 1707.',
    }),
  },

  // ─── RUM ───────────────────────────────────────────
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'diplomatico', brandKeywords: ['Diplomático', 'Diplomatico'], name: 'Diplomático',
    seo: brandSeo({
      brand: 'Diplomático', categoryLabel: 'Rum',
      titleTag: 'Diplomático — Reserva Exclusiva & Selección de Familia',
      h1: 'Diplomático Rum — Reserva Exclusiva & Selección de Familia Allocations',
      metaDescription: 'Buy Diplomático online — Reserva Exclusiva and the award-winning Selección de Familia. Venezuelan rum. Direct allocations. Free $300+.',
      hook: 'Diplomático is a Venezuelan rum producer blending pot still, batch kettle, and column still spirits — the Reserva Exclusiva and top-tier Selección de Familia are among the most awarded rums in the category.',
      faqs: [{ question: 'Is Diplomático a Venezuelan rum?', answer: 'Yes — Diplomático (also written Ron Diplomático) is distilled at Destilerías Unidas in Venezuela, blending pot still, batch kettle, and column still spirits into its Reserva Exclusiva and Selección de Familia expressions.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'zacapa', brandKeywords: ['Zacapa'], name: 'Ron Zacapa',
    seo: brandSeo({
      brand: 'Ron Zacapa', categoryLabel: 'Rum',
      titleTag: 'Ron Zacapa — 23 Solera Gran Reserva & XO',
      h1: 'Ron Zacapa Rum — 23 Solera Gran Reserva & XO High-Altitude Allocations',
      metaDescription: 'Buy Ron Zacapa online — 23 Solera Gran Reserva and XO, matured above the clouds in Guatemala. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Ron Zacapa is matured "above the clouds" in Guatemala’s highlands, over 2,000 metres above sea level, where cooler temperatures slow ageing — the 23 Solera Gran Reserva and XO are blended using the solera system across multiple cask ages.',
      faqs: [{ question: 'What does "Solera" mean on Ron Zacapa\'s label?', answer: 'Solera is a fractional blending system, borrowed from sherry and brandy production, where rums of different ages are blended together across a stack of casks — Ron Zacapa 23 uses this method to combine rums aged up to 23 years.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'appleton-estate', brandKeywords: ['Appleton Estate', 'Appleton'], name: 'Appleton Estate',
    seo: brandSeo({
      brand: 'Appleton Estate', categoryLabel: 'Rum',
      titleTag: 'Appleton Estate — Signature, 8, 12 & 21 Year',
      h1: 'Appleton Estate Rum — Signature Blend, 8 Year Reserve, 12 Year Rare Casks & 21 Year Allocations',
      metaDescription: 'Buy Appleton Estate online — Signature Blend, 8 Year Reserve, 12 Year Rare Casks, and the rare 21 Year Nassau Valley. Direct allocations, free $300+.',
      hook: 'Appleton Estate has been distilling in Jamaica’s Nassau Valley since 1749, one of the longest continuously operating rum estates in the world — the Signature Blend, 8 Year Reserve, 12 Year Rare Casks, and rare 21 Year showcase Jamaican pot still character.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'plantation', brandKeywords: ['Plantation', 'Planteray'], name: 'Planteray (Plantation)',
    seo: brandSeo({
      brand: 'Planteray', categoryLabel: 'Rum',
      titleTag: 'Planteray (Plantation) — 3 Stars, Original Dark & XO',
      h1: 'Planteray Rum — 3 Stars White, Original Dark & XO 20th Anniversary Allocations',
      metaDescription: 'Buy Planteray online — formerly Plantation — 3 Stars White, Original Dark, and the XO 20th Anniversary. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Planteray — known as Plantation in the US until a 2023 rebrand — sources rum from distilleries across the Caribbean and Latin America, then finishes select releases with additional ageing in French cognac casks at Maison Ferrand’s cellars in Cognac, France. The XO 20th Anniversary is its best-known expression.',
      faqs: [{ question: 'Why did Plantation Rum change its name to Planteray?', answer: 'Maison Ferrand renamed Plantation Rum to Planteray outside the United States in 2023 following a naming dispute — both names refer to the same rum, and older US stock may still carry the Plantation label.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'mount-gay', brandKeywords: ['Mount Gay'], name: 'Mount Gay',
    seo: brandSeo({
      brand: 'Mount Gay', categoryLabel: 'Rum',
      titleTag: 'Mount Gay — Black Barrel & XO',
      h1: 'Mount Gay Rum — Black Barrel & XO Barbados Allocations',
      metaDescription: 'Buy Mount Gay online — Black Barrel and premium XO from Barbados’ oldest rum brand, distilling since 1703. Direct allocations, free $300+.',
      hook: 'Mount Gay holds a documented distilling history in Barbados dating to 1703, making it one of the oldest rum brands in continuous production — the Black Barrel and premium XO are the range’s standout allocated releases.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'flor-de-cana', brandKeywords: ['Flor de Caña', 'Flor de Cana'], name: 'Flor de Caña',
    seo: brandSeo({
      brand: 'Flor de Caña', categoryLabel: 'Rum',
      titleTag: 'Flor de Caña — 12 Year & Extra Dry 4 Year',
      h1: 'Flor de Caña Rum — 12 Year & Extra Dry 4 Year White Allocations',
      metaDescription: 'Buy Flor de Caña online — 12 Year and Extra Dry 4 Year White, carbon-neutral Nicaraguan rum. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Flor de Caña is a Nicaraguan rum distilled and aged at the base of the San Cristóbal volcano, and is certified carbon neutral across its production — the age-stated 12 Year and unaged Extra Dry 4 Year White anchor the range.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'el-dorado', brandKeywords: ['El Dorado'], name: 'El Dorado',
    seo: brandSeo({
      brand: 'El Dorado', categoryLabel: 'Demerara Rum',
      titleTag: 'El Dorado — 12 & 15 Year Demerara Rum',
      h1: 'El Dorado Rum — 12 & 15 Year Demerara Allocations',
      metaDescription: 'Buy El Dorado online — 12 and 15 Year Demerara rum from Guyana’s rare wooden pot stills. Direct allocations. Free shipping on $300+.',
      hook: 'El Dorado is distilled in Guyana using rare wooden pot stills, some dating back over a century, alongside traditional column stills — the 12 and 15 Year releases are prized for their rich, dark Demerara character.',
      faqs: [{ question: 'What is Demerara rum?', answer: 'Demerara rum is rum distilled in Guyana along the Demerara River, traditionally using a mix of wooden pot stills (some over a century old) and column stills — it’s known for a rich, dark, full-bodied character distinct from lighter Caribbean rum styles.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'bacardi', brandKeywords: ['Bacardí', 'Bacardi'], name: 'Bacardí',
    seo: brandSeo({
      brand: 'Bacardí', categoryLabel: 'Rum',
      titleTag: 'Bacardí — Spiced & Superior White Rum',
      h1: 'Bacardí Rum — Spiced & Superior White Allocations',
      metaDescription: 'Buy Bacardí online — Spiced Rum and Superior White, from the world’s largest privately held spirits company. Direct allocations, free $300+.',
      hook: 'Bacardí, founded in Cuba in 1862, is the world’s largest privately held spirits company and one of the best-known rum names globally — Superior White is the clean, mixable original, while Spiced Rum layers in vanilla and warm spice.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'bumbu', brandKeywords: ['Bumbu'], name: 'Bumbu',
    seo: brandSeo({
      brand: 'Bumbu', categoryLabel: 'Rum',
      titleTag: 'Bumbu — Original & XO Rum',
      h1: 'Bumbu Rum — Original & Sherry-Cask XO Allocations',
      metaDescription: 'Buy Bumbu online — Original and sherry-cask-finished XO, Barbados rum bottled for a sweeter, dessert-leaning style. Direct allocations, free $300+.',
      hook: 'Bumbu is produced in Barbados and bottled at reduced proof for a sweeter, dessert-leaning rum style — the XO expression adds sherry-cask finishing for toffee, dried orange, and light spice atop the brand’s signature profile.',
      transactionalCTA: "Can't find Bumbu near you? Aged & Amber ships allocated Bumbu Original and XO to every state with compliant direct-to-consumer alcohol shipping laws.",
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'captain-morgan', brandKeywords: ['Captain Morgan'], name: 'Captain Morgan',
    seo: brandSeo({
      brand: 'Captain Morgan', categoryLabel: 'Spiced Rum',
      titleTag: 'Captain Morgan — Original Spiced Rum',
      h1: 'Captain Morgan Original Spiced Rum — Direct Allocations',
      metaDescription: 'Buy Captain Morgan online — Original Spiced Rum blending Caribbean rum with vanilla and clove. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Captain Morgan Original Spiced blends Caribbean rum with vanilla and light clove spice for one of the best-selling spiced rums in the US — named for the 17th-century Welsh privateer Sir Henry Morgan.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'don-q', brandKeywords: ['Don Q'], name: 'Don Q',
    seo: brandSeo({
      brand: 'Don Q', categoryLabel: 'Rum',
      titleTag: 'Don Q — Cristal White Rum',
      h1: 'Don Q Cristal White Rum — Puerto Rico\'s Best-Selling Rum, Direct Allocations',
      metaDescription: 'Buy Don Q online — Cristal White Rum from Destilería Serrallés, Puerto Rico\'s top-selling rum. Can\'t find it near you? Ships to 45 US states.',
      hook: 'Don Q is Puerto Rico’s best-selling rum, distilled and filtered at Destilería Serrallés since 1865 — Cristal is its clean, neutral-profile white rum, built for daiquiris and mojitos.',
      transactionalCTA: 'Can\'t find Don Q near you? Aged & Amber ships allocated Don Q Cristal to every state with compliant direct-to-consumer alcohol shipping laws.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'foursquare', brandKeywords: ['Foursquare'], name: 'Foursquare',
    seo: brandSeo({
      brand: 'Foursquare', categoryLabel: 'Rum',
      titleTag: 'Foursquare — Exceptional Cask Selection',
      h1: 'Foursquare 2010 Exceptional Cask Selection — Additive-Free Barbados Rum',
      metaDescription: 'Buy Foursquare online — the 2010 Exceptional Cask Selection, additive-free vintage-dated Barbados rum. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Foursquare Distillery, run by master blender Richard Seale, is one of the most acclaimed names in modern rum — bottling every Exceptional Cask Selection release without additives at high proof, prized by enthusiasts for genuine intensity and transparency.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'goslings', brandKeywords: ["Gosling's", 'Goslings'], name: "Gosling's",
    seo: brandSeo({
      brand: "Gosling's", categoryLabel: 'Rum',
      titleTag: "Gosling's — Black Seal Rum",
      h1: "Gosling's Black Seal Rum — The Dark 'n' Stormy Original, Direct Allocations",
      metaDescription: "Buy Gosling's online — Black Seal rum, the trademarked base of the Dark 'n' Stormy. Bermuda rum since the 1800s. Direct allocations, free $300+.",
      hook: "Gosling's has blended Black Seal rum in Bermuda since the 1800s — it's the legally trademarked base spirit of the Dark 'n' Stormy cocktail, prized for its caramel and light char character.",
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'kraken', brandKeywords: ['Kraken'], name: 'Kraken',
    seo: brandSeo({
      brand: 'Kraken', categoryLabel: 'Spiced Rum',
      titleTag: 'Kraken — Black Spiced Rum',
      h1: 'Kraken Black Spiced Rum — 94 Proof Allocations',
      metaDescription: 'Buy Kraken online — Black Spiced Rum at 94 proof, cinnamon, clove, and molasses in a signature black bottle. Direct allocations, free $300+.',
      hook: 'Kraken Black Spiced Rum is bottled at 94 proof with pronounced cinnamon, clove, and molasses sweetness, packaged in a distinctive black bottle named for the legendary sea monster.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'malibu', brandKeywords: ['Malibu'], name: 'Malibu',
    seo: brandSeo({
      brand: 'Malibu', categoryLabel: 'Rum',
      titleTag: 'Malibu — Original Coconut Rum',
      h1: 'Malibu Original Coconut Rum — Direct Allocations',
      metaDescription: 'Buy Malibu online — Original Coconut Rum, the tiki-cocktail staple blending Barbados rum with coconut. Direct allocations. Free shipping $300+.',
      hook: 'Malibu blends Barbados rum with coconut flavoring at a reduced proof, purpose-built for sweet tiki-style cocktails like the piña colada — one of the best-known flavored rum brands in the world.',
      faqs: [{ question: 'Is Malibu rum gluten-free?', answer: 'Yes — Malibu is distilled from sugarcane-based rum, which is naturally gluten-free, though anyone with a severe gluten allergy should check the label for cross-contamination warnings.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'myerss', brandKeywords: ["Myers's", 'Myers'], name: "Myers's",
    seo: brandSeo({
      brand: "Myers's", categoryLabel: 'Rum',
      titleTag: "Myers's — Original Dark Rum",
      h1: "Myers's Original Dark Rum — Jamaican Blend, Direct Allocations",
      metaDescription: "Buy Myers's online — Original Dark Rum, the classic Jamaican blend for rum punch and tiki cocktails. Direct allocations at Aged & Amber. Free $300+.",
      hook: "Myers's Original Dark Rum is a blended Jamaican rum long favored as the classic base for rum punch and tiki cocktails, known for its rich molasses character.",
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'sailor-jerry', brandKeywords: ['Sailor Jerry'], name: 'Sailor Jerry',
    seo: brandSeo({
      brand: 'Sailor Jerry', categoryLabel: 'Spiced Rum',
      titleTag: 'Sailor Jerry — Spiced Rum',
      h1: 'Sailor Jerry Spiced Rum — 92 Proof Allocations',
      metaDescription: 'Buy Sailor Jerry online — Spiced Rum at 92 proof, vanilla and cinnamon named for the legendary tattoo artist. Direct allocations, free $300+.',
      hook: 'Sailor Jerry blends Caribbean rum with vanilla and cinnamon flavoring at 92 proof for a bolder spiced profile than most competitors — named for Norman "Sailor Jerry" Collins, the father of American traditional tattooing.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'smith-and-cross', brandKeywords: ['Smith and Cross', 'Smith & Cross'], name: 'Smith and Cross',
    seo: brandSeo({
      brand: 'Smith and Cross', categoryLabel: 'Jamaica Rum',
      titleTag: 'Smith & Cross — Traditional Jamaica Rum',
      h1: 'Smith & Cross Traditional Jamaica Rum — Hampden Estate Allocations',
      metaDescription: 'Buy Smith & Cross online — traditional Jamaica rum from Hampden Estate, prized for its funky, tropical-fruit character. Direct allocations, free $300+.',
      hook: 'Produced at Hampden Estate for Smith & Cross, this navy-strength Jamaican rum is prized by bartenders for its pronounced funky tropical-fruit and grassy character, built for classic tiki cocktails.',
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'wray-and-nephew', brandKeywords: ['Wray and Nephew', 'Wray & Nephew'], name: 'Wray and Nephew',
    seo: brandSeo({
      brand: 'Wray and Nephew', categoryLabel: 'Overproof Rum',
      titleTag: 'Wray & Nephew — Overproof White Rum',
      h1: 'Wray & Nephew Overproof White Rum — Jamaican Staple, Direct Allocations',
      metaDescription: 'Buy Wray & Nephew online — Overproof White Rum, a staple of Jamaican rum culture at 126 proof. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'J. Wray & Nephew\'s overproof bottling is a staple of Jamaican rum culture, valued for its intense funk and sugarcane pungency — a foundational ingredient in Jamaican rum punch and countless tiki cocktails.',
    }),
  },

  // ─── GIN ───────────────────────────────────────────
  {
    categorySlug: 'artisanal-gin', hubSlug: 'hendricks', brandKeywords: ["Hendrick's", 'Hendricks'], name: "Hendrick's",
    seo: brandSeo({
      brand: "Hendrick's", categoryLabel: 'Gin',
      titleTag: "Hendrick's — Original & Flora Adora Gin",
      h1: "Hendrick's Gin — Original & Flora Adora Allocations",
      metaDescription: "Buy Hendrick's online — the rose and cucumber infused Original, plus Flora Adora. Direct allocations at Aged & Amber. Free shipping on $300+.",
      hook: "Hendrick's is infused with rose and cucumber alongside its core juniper botanicals — an unconventional combination when it launched in 1999 that helped spark the modern craft gin movement. Flora Adora adds a floral, marmalade-forward twist to the house style.",
      faqs: [
        { question: 'Is Hendrick\'s gin gluten-free?', answer: 'Yes — Hendrick\'s is distilled from a neutral grain spirit and the distillation process removes gluten proteins, making it safe for most people with gluten sensitivity, though it is not independently certified gluten-free.' },
        { question: 'Is Hendrick\'s a London Dry gin?', answer: 'No — Hendrick\'s is a distilled gin, not a London Dry. It infuses rose and cucumber essence after distillation, which London Dry rules do not permit, giving it a softer, more floral character than a classic London Dry.' },
      ],
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'tanqueray', brandKeywords: ['Tanqueray'], name: 'Tanqueray',
    seo: brandSeo({
      brand: 'Tanqueray', categoryLabel: 'London Dry Gin',
      titleTag: 'Tanqueray — London Dry, No. Ten & Sevilla Orange',
      h1: 'Tanqueray Gin — London Dry, No. Ten & Sevilla Orange Allocations',
      metaDescription: 'Buy Tanqueray online — the classic London Dry recipe since 1830, No. Ten, and Sevilla Orange. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Tanqueray has distilled London Dry gin from the same four-botanical recipe since 1830, using a distinctive pot-and-column still combination still in use at its Cameronbridge distillery today. No. Ten adds fresh citrus and chamomile from a small-batch copper pot, while Sevilla Orange layers in bittersweet Seville orange peel.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'aviation', brandKeywords: ['Aviation'], name: 'Aviation',
    seo: brandSeo({
      brand: 'Aviation', categoryLabel: 'American Gin',
      titleTag: "Aviation — Ryan Reynolds' American Gin",
      h1: 'Aviation Gin — American-Style Lavender & Cardamom Allocations',
      metaDescription: "Buy Aviation gin online — Ryan Reynolds' American-style gin with lavender and cardamom notes. Direct allocations. Free shipping on $300+.",
      hook: 'Aviation is an American gin co-owned by actor Ryan Reynolds, built around a lighter juniper presence and more prominent lavender and cardamom notes than a traditional London Dry style.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'monkey-47', brandKeywords: ['Monkey 47'], name: 'Monkey 47',
    seo: brandSeo({
      brand: 'Monkey 47', categoryLabel: 'Gin',
      titleTag: 'Monkey 47 — 47-Botanical Black Forest Gin',
      h1: 'Monkey 47 Gin — 47-Botanical Black Forest Allocations',
      metaDescription: 'Buy Monkey 47 online — 47 botanicals distilled in Germany’s Black Forest. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Monkey 47 is distilled in Germany’s Black Forest from 47 botanicals, including regional ingredients like lingonberry and spruce sprouts — a much higher botanical count than most gins, giving it a dense, layered profile.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'botanist', brandKeywords: ['Botanist'], name: 'The Botanist',
    seo: brandSeo({
      brand: 'The Botanist', categoryLabel: 'Islay Gin',
      titleTag: 'The Botanist — 22 Hand-Foraged Islay Botanicals',
      h1: 'The Botanist Gin — 22 Hand-Foraged Islay Botanical Allocations',
      metaDescription: 'Buy The Botanist online — 22 hand-foraged Islay botanicals, distilled by Bruichladdich. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'The Botanist is distilled by Bruichladdich on Islay using 22 hand-foraged local botanicals alongside 9 classic gin aromatics, distilled in a converted Lomond still nicknamed "Ugly Betty."',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'roku', brandKeywords: ['Roku'], name: 'Roku',
    seo: brandSeo({
      brand: 'Roku', categoryLabel: 'Japanese Gin',
      titleTag: 'Roku — Japanese Craft Gin',
      h1: 'Roku Gin — Sakura, Sencha Tea & Yuzu Japanese Allocations',
      metaDescription: 'Buy Roku online — Suntory’s Japanese gin with sakura flower, sencha tea, and yuzu peel. Direct allocations. Free shipping on $300+.',
      hook: 'Roku, from Suntory, blends eight traditional gin botanicals with distinctly Japanese ingredients — sakura flower, sencha tea, and yuzu peel among them — each distilled separately to preserve individual character.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'empress-1908', brandKeywords: ['Empress 1908', 'Empress'], name: 'Empress 1908',
    seo: brandSeo({
      brand: 'Empress 1908', categoryLabel: 'Gin',
      titleTag: 'Empress 1908 — Indigo & Cucumber Lemon Gin',
      h1: 'Empress 1908 Gin — Indigo & Cucumber Lemon Allocations',
      metaDescription: 'Buy Empress 1908 online — the Indigo gin naturally coloured with butterfly pea blossom, plus Cucumber Lemon. Direct allocations. Free $300+.',
      hook: 'Empress 1908 Indigo is coloured naturally with butterfly pea blossom, giving it a striking indigo hue that shifts toward pink or purple when mixed with acidic ingredients like citrus or tonic — Cucumber Lemon layers in fresh, crisp citrus atop the same base.',
      faqs: [{ question: 'What makes Empress 1908 gin purple?', answer: 'Empress 1908 Indigo gets its natural indigo-blue colour from butterfly pea flower, a plant-based colourant rather than artificial dye — the colour shifts toward pink or purple when mixed with acidic ingredients like citrus, tonic, or sparkling wine.' }],
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'drumshanbo', brandKeywords: ['Drumshanbo'], name: 'Drumshanbo Gunpowder',
    seo: brandSeo({
      brand: 'Drumshanbo Gunpowder', categoryLabel: 'Irish Gin',
      titleTag: 'Drumshanbo Gunpowder Irish Gin',
      h1: 'Drumshanbo Gunpowder Irish Gin — Direct Allocations',
      metaDescription: 'Buy Drumshanbo Gunpowder online — Irish gin infused with gunpowder tea, citrus, and juniper. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Drumshanbo Gunpowder is an Irish gin infused with gunpowder tea alongside citrus and juniper, distilled in a copper pot still nicknamed "Christina" at the small-batch Shed Distillery in County Leitrim.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'barr-hill', brandKeywords: ['Barr Hill'], name: 'Barr Hill',
    seo: brandSeo({
      brand: 'Barr Hill', categoryLabel: 'Craft Gin',
      titleTag: 'Barr Hill — Raw Honey Gin',
      h1: 'Barr Hill Gin — Raw Honey-Finished Vermont Allocations',
      metaDescription: 'Buy Barr Hill online — Vermont craft gin finished with raw honey instead of a standard botanical bittering agent. Direct allocations, free $300+.',
      hook: 'Barr Hill, distilled by Caledonia Spirits in Vermont, finishes its gin with raw honey rather than a typical bittering botanical — a distinctive approach that gives the spirit a soft, floral sweetness alongside its juniper base.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'beefeater', brandKeywords: ['Beefeater'], name: 'Beefeater',
    seo: brandSeo({
      brand: 'Beefeater', categoryLabel: 'London Dry Gin',
      titleTag: 'Beefeater — London Dry Gin',
      h1: 'Beefeater London Dry Gin — Direct Allocations',
      metaDescription: 'Buy Beefeater online — the classic nine-botanical London Dry recipe, distilled in London since 1863. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Beefeater has used the same nine-botanical recipe since 1863, built on juniper, citrus peel, and coriander seed — and unlike most "London Dry" gins, it is still genuinely distilled within London city limits.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'bluecoat', brandKeywords: ['Bluecoat'], name: 'Bluecoat',
    seo: brandSeo({
      brand: 'Bluecoat', categoryLabel: 'American Dry Gin',
      titleTag: 'Bluecoat — American Dry Gin',
      h1: 'Bluecoat American Dry Gin — Direct Allocations',
      metaDescription: 'Buy Bluecoat online — Philadelphia Distilling’s organic-citrus American Dry gin, zestier than a classic London Dry. Direct allocations, free $300+.',
      hook: 'Philadelphia Distilling produces Bluecoat with organic citrus peels for a zestier, brighter profile than traditional London Dry gin, using all-organic botanicals.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'bombay-sapphire', brandKeywords: ['Bombay Sapphire'], name: 'Bombay Sapphire',
    seo: brandSeo({
      brand: 'Bombay Sapphire', categoryLabel: 'London Dry Gin',
      titleTag: 'Bombay Sapphire — London Dry Gin',
      h1: 'Bombay Sapphire London Dry Gin — Direct Allocations',
      metaDescription: 'Buy Bombay Sapphire online — ten botanicals vapor-infused for a light, balanced London Dry. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Bombay Sapphire passes vapor through a basket of ten botanicals rather than boiling them directly, distilled at Laverstoke Mill in England — a lighter, more delicately blended profile than most London Dry gins.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'brokers', brandKeywords: ["Broker's", 'Brokers'], name: "Broker's",
    seo: brandSeo({
      brand: "Broker's", categoryLabel: 'London Dry Gin',
      titleTag: "Broker's — London Dry Gin",
      h1: "Broker's London Dry Gin — Direct Allocations",
      metaDescription: "Buy Broker's online — a classic ten-botanical English London Dry recipe. Direct allocations at Aged & Amber. Free shipping on $300+.",
      hook: "Broker's follows a classic English ten-botanical recipe, keeping juniper firmly at the center alongside coriander and orris root — instantly recognisable for its miniature bowler-hat bottle topper.",
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'gordons', brandKeywords: ["Gordon's", 'Gordons'], name: "Gordon's",
    seo: brandSeo({
      brand: "Gordon's", categoryLabel: 'London Dry Gin',
      titleTag: "Gordon's — London Dry Gin",
      h1: "Gordon's London Dry Gin — Direct Allocations",
      metaDescription: "Buy Gordon's online — the world's best-selling London Dry gin, distilled to the same recipe since 1769. Direct allocations, free on $300+.",
      hook: "Gordon's has used the same juniper-heavy recipe since 1769, and is the world's best-selling London Dry gin — a no-frills, sharply botanical everyday pour built for classic cocktails.",
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'gray-whale', brandKeywords: ['Gray Whale'], name: 'Gray Whale',
    seo: brandSeo({
      brand: 'Gray Whale', categoryLabel: 'Craft Gin',
      titleTag: 'Gray Whale — California Coastal Gin',
      h1: 'Gray Whale Gin — California Coastal Botanical Allocations',
      metaDescription: 'Buy Gray Whale online — California craft gin built around coastal botanicals. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Gray Whale Gin is distilled in California around a botanical bill that draws on the state\'s Pacific coastline, giving it a distinctive regional character among American craft gins.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'ki-no-bi', brandKeywords: ['Ki No Bi', 'KiNoBi'], name: 'Ki No Bi',
    seo: brandSeo({
      brand: 'Ki No Bi', categoryLabel: 'Japanese Botanical Gin',
      titleTag: 'Ki No Bi — Kyoto Dry Gin',
      h1: 'Ki No Bi Kyoto Dry Gin — Direct Allocations',
      metaDescription: 'Buy Ki No Bi online — Kyoto Distillery\'s Japanese gin, built from six botanical categories including yuzu and gyokuro tea. Direct allocations.',
      hook: 'Ki No Bi is distilled by Kyoto Distillery from six categories of Japanese botanicals — including yuzu, gyokuro green tea, and sansho pepper — assembled through a multi-still blending process unique to the brand.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'malfy', brandKeywords: ['Malfy'], name: 'Malfy',
    seo: brandSeo({
      brand: 'Malfy', categoryLabel: 'Italian Gin',
      titleTag: 'Malfy — Con Arancia & Con Limone Gin',
      h1: 'Malfy Gin — Con Arancia & Con Limone Allocations',
      metaDescription: 'Buy Malfy online — Con Arancia (Sicilian blood orange) and Con Limone (Amalfi Coast lemon) Italian gin. Direct allocations, free on $300+.',
      hook: 'Malfy is distilled in Moncalieri, Italy, and built around real Italian citrus — Con Arancia layers in Sicilian blood orange, while Con Limone uses lemons from the Amalfi Coast, both atop a juniper-forward base.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'no-3', brandKeywords: ['No. 3', 'No 3'], name: 'No. 3',
    seo: brandSeo({
      brand: 'No. 3', categoryLabel: 'London Dry Gin',
      titleTag: 'No. 3 — Six-Botanical London Dry Gin',
      h1: 'No. 3 London Dry Gin — Direct Allocations',
      metaDescription: 'Buy No. 3 online — Berry Bros. & Rudd\'s six-botanical London Dry, precision-built around juniper, citrus, and cardamom. Direct allocations.',
      hook: 'No. 3, produced for the historic wine and spirits merchant Berry Bros. & Rudd, pares its recipe down to just six botanicals, keeping juniper, citrus, and cardamom in sharp, uncluttered focus.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'nolets', brandKeywords: ["Nolet's", 'Nolets'], name: "Nolet's",
    seo: brandSeo({
      brand: "Nolet's", categoryLabel: 'Botanical Gin',
      titleTag: "Nolet's — Silver & Reserve Gin",
      h1: "Nolet's Gin — Silver & Ultra-Rare Reserve Allocations",
      metaDescription: "Buy Nolet's online — Silver, layered with Turkish rose and white peach, and the ultra-rare annual Reserve release. Direct allocations, free $300+.",
      hook: "Nolet's is distilled by the same Dutch family behind Ketel One vodka — Silver layers Turkish rose, white peach, and raspberry over a juniper base, while the limited annual Reserve release sits at the very top of the ultra-premium gin category.",
      faqs: [{ question: 'Is Nolet\'s related to Ketel One?', answer: 'Yes — both are produced by the Nolet family, who have distilled spirits in Schiedam, Netherlands since 1691. Nolet\'s Gin and Ketel One Vodka share the same distilling heritage but are distinct, separately crafted products.' }],
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'sipsmith', brandKeywords: ['Sipsmith'], name: 'Sipsmith',
    seo: brandSeo({
      brand: 'Sipsmith', categoryLabel: 'London Dry Gin',
      titleTag: 'Sipsmith — London Dry Gin',
      h1: 'Sipsmith London Dry Gin — Direct Allocations',
      metaDescription: 'Buy Sipsmith online — London\'s first new copper-pot gin distillery in nearly 200 years, classic juniper-citrus profile. Direct allocations.',
      hook: 'Sipsmith was the first new copper-pot gin distillery to open in London in nearly 200 years, producing a rounded, classic juniper-and-citrus London Dry.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'st-george', brandKeywords: ['St. George', 'St George'], name: 'St. George',
    seo: brandSeo({
      brand: 'St. George', categoryLabel: 'Craft Gin',
      titleTag: 'St. George — Terroir Gin',
      h1: 'St. George Terroir Gin — Douglas Fir Forest Allocations',
      metaDescription: 'Buy St. George online — Terroir gin built on Douglas fir, bay laurel, and sage instead of typical citrus-forward botanicals. Direct allocations.',
      hook: 'St. George Spirits\' Terroir gin evokes a Northern California forest walk with Douglas fir, bay laurel, and sage in place of the citrus-forward botanicals most gins lean on.',
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'whitley-neill', brandKeywords: ['Whitley Neill'], name: 'Whitley Neill',
    seo: brandSeo({
      brand: 'Whitley Neill', categoryLabel: 'Botanical Gin',
      titleTag: 'Whitley Neill — Raspberry Gin',
      h1: 'Whitley Neill Raspberry Gin — Direct Allocations',
      metaDescription: 'Buy Whitley Neill online — ripe raspberry layered over juniper and South African botanicals like baobab. Direct allocations, free on $300+.',
      hook: 'Whitley Neill layers ripe raspberry over a juniper base alongside South African botanicals like baobab, giving it a fruity, distinctive character among British-distilled gins.',
    }),
  },

  // ─── COGNAC & BRANDY ───────────────────────────────────────────
  {
    categorySlug: 'cognac-brandy', hubSlug: 'hennessy', brandKeywords: ['Hennessy'], name: 'Hennessy',
    seo: brandSeo({
      brand: 'Hennessy', categoryLabel: 'Cognac',
      titleTag: 'Hennessy — VS, VSOP, XO & Paradis',
      h1: 'Hennessy Cognac — VS, VSOP, XO & Paradis Allocations',
      metaDescription: 'Buy Hennessy online — VS, VSOP, XO, and the ultra-premium Paradis. The world’s best-selling cognac house. Direct allocations, free $300+.',
      hook: 'Hennessy is the world’s best-selling cognac house, founded in 1765 by an Irish officer in the French army — the VS, VSOP, and XO form the core range, with Paradis and Richard Hennessy at the ultra-premium tier.',
      transactionalCTA: 'Buy Hennessy online — direct allocations of VS, VSOP, XO, and Paradis, ships to 45 US states.',
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'remy-martin', brandKeywords: ['Rémy Martin', 'Remy Martin'], name: 'Rémy Martin',
    seo: brandSeo({
      brand: 'Rémy Martin', categoryLabel: 'Cognac',
      titleTag: 'Rémy Martin — VSOP, XO & 1738',
      h1: 'Rémy Martin Cognac — VSOP, XO & 1738 Accord Royal Allocations',
      metaDescription: 'Buy Rémy Martin online — VSOP, XO, and 1738 Accord Royal Fine Champagne cognac. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Rémy Martin uses only grapes from the Grande and Petite Champagne crus — the two premier growing zones in the Cognac region — a designation known as "Fine Champagne" cognac.',
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'courvoisier', brandKeywords: ['Courvoisier'], name: 'Courvoisier',
    seo: brandSeo({
      brand: 'Courvoisier', categoryLabel: 'Cognac',
      titleTag: 'Courvoisier — VS, VSOP & XO',
      h1: 'Courvoisier Cognac — VS, VSOP & XO Allocations',
      metaDescription: 'Buy Courvoisier online — VS, VSOP, and XO, a fruit-forward, Napoleon-era cognac house. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Courvoisier is one of the oldest cognac houses, with a history tracing to Napoleon-era Paris — the VS, VSOP, and XO anchor a range known for a fruit-forward, approachable house style.',
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'martell', brandKeywords: ['Martell'], name: 'Martell',
    seo: brandSeo({
      brand: 'Martell', categoryLabel: 'Cognac',
      titleTag: 'Martell — VSOP, Cordon Bleu & XO',
      h1: 'Martell Cognac — VSOP, Cordon Bleu & XO Allocations',
      metaDescription: 'Buy Martell online — VSOP, Cordon Bleu, and XO from the oldest major cognac house, founded 1715. Direct allocations. Free shipping on $300+.',
      hook: 'Martell, founded in 1715, is the oldest of the major cognac houses — known for leaning more heavily on Borderies cru eaux-de-vie than its rivals, giving its range a distinctive violet and nutty character.',
    }),
  },

  // ─── VODKA ───────────────────────────────────────────
  {
    categorySlug: 'craft-vodka', hubSlug: 'grey-goose', brandKeywords: ['Grey Goose'], name: 'Grey Goose',
    seo: brandSeo({
      brand: 'Grey Goose', categoryLabel: 'Vodka',
      titleTag: 'Grey Goose — French Wheat Vodka',
      h1: 'Grey Goose Vodka — Picardie Wheat & Flavored Allocations',
      metaDescription: 'Buy Grey Goose online — French Picardie wheat vodka, filtered through Champagne limestone. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Grey Goose is distilled in France from single-origin Picardie winter wheat and filtered through Champagne limestone, positioned since its 1997 launch as a premium French alternative to Russian and Polish vodka.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'titos', brandKeywords: ["Tito's"], name: "Tito's",
    seo: brandSeo({
      brand: "Tito's", categoryLabel: 'Vodka',
      titleTag: "Tito's — Handmade Corn Vodka",
      h1: "Tito's Handmade Vodka — Gluten-Free Corn Vodka Allocations",
      metaDescription: "Buy Tito's online — handmade, gluten-free corn vodka from Austin, Texas's first legal distillery. Direct allocations. Free shipping on $300+.",
      hook: "Tito's Handmade Vodka is distilled from corn in old-fashioned pot stills at Austin, Texas’s first legal distillery since Prohibition — naturally gluten-free and one of the best-selling vodkas in the US.",
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'ciroc', brandKeywords: ['Ciroc'], name: 'Cîroc',
    seo: brandSeo({
      brand: 'Cîroc', categoryLabel: 'Vodka',
      titleTag: 'Cîroc — French Grape Vodka',
      h1: 'Cîroc Vodka — French Grape-Distilled Allocations',
      metaDescription: 'Buy Cîroc online — distilled from French grapes for a smoother, fruit-forward character. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Cîroc is distilled from French grapes rather than the grain or potato base used by most vodkas, giving it a naturally smoother, subtly fruit-forward character.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'belvedere', brandKeywords: ['Belvedere'], name: 'Belvedere',
    seo: brandSeo({
      brand: 'Belvedere', categoryLabel: 'Vodka',
      titleTag: 'Belvedere — Polish Single Estate Rye Vodka',
      h1: 'Belvedere Vodka — Polish Single Estate Rye Allocations',
      metaDescription: 'Buy Belvedere online — quadruple-distilled Polish rye vodka from a single estate. Direct allocations at Aged & Amber. Free shipping $300+.',
      hook: 'Belvedere is a Polish rye vodka distilled from a single estate rye grain, quadruple distilled for exceptional purity — one of the first vodkas marketed as ultra-premium when it launched internationally in the 1990s.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'ketel-one', brandKeywords: ['Ketel One'], name: 'Ketel One',
    seo: brandSeo({
      brand: 'Ketel One', categoryLabel: 'Vodka',
      titleTag: 'Ketel One — Dutch Copper Pot Vodka',
      h1: 'Ketel One Vodka — Dutch Copper Pot Still Allocations',
      metaDescription: 'Buy Ketel One online — Dutch vodka distilled by the Nolet family since 1691. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Ketel One is distilled by the Nolet family, who have made spirits in the Netherlands since 1691 — a blend of column-distilled and traditional copper pot still spirit gives it a distinctively smooth, wheat-forward character.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'crystal-head', brandKeywords: ['Crystal Head'], name: 'Crystal Head',
    seo: brandSeo({
      brand: 'Crystal Head', categoryLabel: 'Vodka',
      titleTag: 'Crystal Head — Skull Bottle Vodka',
      h1: 'Crystal Head Vodka — Herkimer Diamond Filtered Allocations',
      metaDescription: 'Buy Crystal Head online — Dan Aykroyd’s skull-bottle vodka, filtered through Herkimer diamond crystal. Direct allocations. Free on $300+.',
      hook: 'Crystal Head, co-founded by actor Dan Aykroyd, is instantly recognisable for its skull-shaped bottle — the vodka itself is filtered through layers of Herkimer diamond crystal.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'stolichnaya', brandKeywords: ['Stolichnaya', 'Stoli'], name: 'Stolichnaya',
    seo: brandSeo({
      brand: 'Stolichnaya', categoryLabel: 'Vodka',
      titleTag: 'Stolichnaya — Russian Wheat Vodka',
      h1: 'Stolichnaya Vodka — Russian Winter Wheat Allocations',
      metaDescription: 'Buy Stolichnaya online — Russian winter wheat vodka, filtered through quartz sand and charcoal. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Stolichnaya, commonly called "Stoli," is one of the most internationally recognised vodka names, distilled from Russian winter wheat and traditionally filtered through quartz sand and charcoal.',
    }),
  },

  // ─── NON-ALCOHOLIC SPIRITS ───────────────────────────────────────────
  {
    categorySlug: 'na-spirits', hubSlug: 'seedlip', brandKeywords: ['Seedlip'], name: 'Seedlip',
    seo: brandSeo({
      brand: 'Seedlip', categoryLabel: 'Non-Alcoholic Spirits', titleTag: 'Seedlip — Garden, Spice & Grove',
      h1: 'Seedlip Non-Alcoholic Spirits — Garden, Spice & Grove Allocations',
      metaDescription: 'Buy Seedlip online — Garden, Spice, and Grove, the world’s first distilled non-alcoholic spirit. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Seedlip was the world’s first widely distributed non-alcoholic distilled spirit, launched in 2015 — each botanical range (Garden, Spice, Grove) is genuinely distilled rather than simply de-alcoholised, aiming to replicate the complexity of gin or whiskey without the ethanol.',
    }),
  },
  {
    categorySlug: 'na-spirits', hubSlug: 'lyres', brandKeywords: ["Lyre's", 'Lyres'], name: "Lyre's",
    seo: brandSeo({
      brand: "Lyre's", categoryLabel: 'Non-Alcoholic Spirits',
      titleTag: "Lyre's — Non-Alcoholic Spirit Alternatives",
      h1: "Lyre's Non-Alcoholic Spirits — Whiskey, Gin, Rum & Aperitif Allocations",
      metaDescription: "Buy Lyre's online — non-alcoholic alternatives modeled on whiskey, gin, rum, and aperitif styles. Direct allocations. Free shipping on $300+.",
      hook: "Lyre's produces one of the widest non-alcoholic spirit ranges available, with alternatives modelled on whiskey, gin, rum, and aperitif styles, each built to work as a direct swap in classic cocktail recipes.",
    }),
  },
  {
    categorySlug: 'na-spirits', hubSlug: 'ritual', brandKeywords: ['Ritual'], name: 'Ritual Zero Proof',
    seo: brandSeo({
      brand: 'Ritual Zero Proof', categoryLabel: 'Non-Alcoholic Spirits',
      titleTag: 'Ritual Zero Proof — Non-Alcoholic Spirits',
      h1: 'Ritual Zero Proof — Whiskey, Tequila, Gin & Rum Alternative Allocations',
      metaDescription: 'Buy Ritual Zero Proof online — non-alcoholic whiskey, tequila, gin, and rum alternatives. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Ritual Zero Proof makes non-alcoholic alternatives across whiskey, tequila, gin, and rum styles, formulated to deliver the bite and mouthfeel of the real spirit without alcohol, calories, or added sugar.',
    }),
  },
];
