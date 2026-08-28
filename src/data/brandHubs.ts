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
      titleTag: "Maker's Mark — 46, Kentucky Straight & Private Selection",
      h1: "Maker's Mark Bourbon — 46, Kentucky Straight & Private Selection Allocations",
      metaDescription: "Buy Maker's Mark online — the wheated bourbon icon, plus 46 and Private Selection. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Maker's Mark is a wheated Kentucky straight bourbon produced at Star Hill Farm in Loretto, Kentucky — one of the most recognised bourbon labels in the world. Using winter wheat instead of rye as the secondary grain, it's known for a soft, sweet, accessible character and its hand-dipped red wax seal.",
      faqs: [
        { question: 'Is Maker\'s Mark a wheated bourbon?', answer: 'Yes — Maker\'s Mark replaces rye with soft red winter wheat as the secondary grain in its mash bill. This gives it a sweeter, softer, and more approachable character compared to high-rye bourbons, and helped popularise the wheated style among everyday bourbon drinkers.' },
        { question: 'What is Maker\'s 46?', answer: 'Maker\'s 46 is a premium expression of Maker\'s Mark finished with seared French oak staves inserted into the barrel for additional maturation. This adds more vanilla, caramel, and spice while keeping the smooth, wheated base character. It is bottled at 94 proof, four points higher than the standard Maker\'s Mark.' },
        { question: 'What makes Maker\'s Mark different from other bourbons?', answer: 'Three things: the wheated mash bill (wheat replaces rye for a softer profile), the hand-dipped red wax seal (each bottle is individually dipped by hand at the distillery), and a rotated barrel programme that moves barrels within the warehouse during maturation for consistent flavour development.' },
        { question: 'Who owns Maker\'s Mark?', answer: 'Maker\'s Mark is owned by Beam Suntory — the spirits division of Japan\'s Suntory Holdings. The Star Hill Farm Distillery in Loretto, Kentucky (a National Historic Landmark) has produced Maker\'s Mark since 1954.' },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'weller', brandKeywords: ['Weller'], name: 'Weller',
    seo: brandSeo({
      brand: 'Weller', categoryLabel: 'Bourbon',
      titleTag: 'Weller Bourbon — Antique 107, 12 Year & Full Proof',
      h1: 'Weller Bourbon — Special Reserve, Antique 107, 12 Year, Full Proof & Daniel Weller Allocations',
      metaDescription: 'Buy Weller bourbon online — Special Reserve, Antique 107, 12 Year, Full Proof, and the ultra-rare Daniel Weller Spelt Wheat. Direct allocations at Aged & Amber.',
      hook: 'Weller is Buffalo Trace’s allocated wheated bourbon line — the recipe that also underpins Pappy Van Winkle — prized for its soft, honeyed, easy-drinking wheated profile across expressions from Special Reserve up to Full Proof and single barrel picks.',
      transactionalCTA: 'Buy Weller bourbon online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      faqs: [
        { question: 'What is Weller bourbon?', answer: 'Weller is a family of wheated bourbons from the Buffalo Trace Distillery in Frankfort, Kentucky — using the same wheat-forward mash bill as the legendary Pappy Van Winkle. The range includes Special Reserve, 12 Year, Full Proof, Antique 107, and the annual Buffalo Trace Antique Collection release, William Larue Weller.' },
        { question: 'Is Weller the same mash bill as Pappy Van Winkle?', answer: 'Yes — Weller and Pappy Van Winkle share the same wheated mash bill from Buffalo Trace. The key differences are age and barrel selection: Pappy is aged significantly longer and drawn from the finest barrels, which is why Weller is often called the "poor man\'s Pappy."' },
        { question: 'What is the difference between Weller 12 and Weller Full Proof?', answer: 'Weller 12 Year is aged 12 years and bottled at 90 proof for a smooth, mellow wheated character. Weller Full Proof is bottled at 114 proof — the proof it entered the barrel at — for a bolder, richer expression with more oak and spice.' },
        { question: 'Why is Weller so hard to find?', answer: 'Weller\'s scarcity comes from three factors: it shares the Pappy Van Winkle mash bill, making it a sought-after proxy for buyers who can\'t find Pappy; Buffalo Trace allocates it in limited quantities; and demand for wheated bourbons has surged in recent years.' },
      ],
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
      faqs: [
        { question: "What is Blanton's Bourbon?", answer: "Blanton's is the world's first commercially released single barrel bourbon, introduced in 1984 by the Buffalo Trace Distillery. Each bottle is drawn from a single cask and sealed with a metal stopper featuring a horse-and-jockey pose — collect all eight to spell 'BLANTON'S.'" },
        { question: "Why is Blanton's so hard to find?", answer: "Blanton's is a heavily allocated release from Buffalo Trace — demand far outpaces the limited number of barrels selected for bottling each year, making it one of the most sought-after bourbons on the secondary and retail market alike." },
        { question: "What are the Blanton's letters on the stopper?", answer: "Each Blanton's bottle features a metal stopper with one of eight different horse-and-jockey poses. On the bottom of each stopper is one letter spelling out 'BLANTON'S' — collecting all eight is a popular tradition among enthusiasts." },
        { question: "What is the difference between Blanton's Original and Gold?", answer: "Original Single Barrel is bottled at 93 proof (46.5% ABV). Gold Edition is bottled at a higher 103 proof (51.5% ABV) for a richer, more intense profile. Straight From the Barrel is cask strength, typically around 130 proof and varying by barrel." },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'angels-envy', brandKeywords: ["Angel's Envy"], name: "Angel's Envy",
    seo: brandSeo({
      brand: "Angel's Envy", categoryLabel: 'Bourbon',
      titleTag: "Angel's Envy — Port Barrel Finish & Cask Strength",
      h1: "Angel's Envy Bourbon — Port Barrel Finish & Cask Strength Allocations",
      metaDescription: "Buy Angel's Envy online — port barrel finished bourbon and Cask Strength. Direct allocations at Aged & Amber. Free shipping on $300+.",
      hook: "Angel's Envy is a Louisville, Kentucky bourbon finished in ruby port wine barrels — a process pioneered by master distiller Lincoln Henderson. The port finishing adds distinctive dried fruit and sweetness to a classic wheated bourbon base.",
      faqs: [
        { question: "What makes Angel's Envy different from other bourbons?", answer: "Angel's Envy finishes its bourbon in port wine barrels after standard ageing — a non-traditional step not required by law. This adds layers of dried fruit, vanilla, and subtle sweetness, and it was one of the first mainstream bourbons to popularise the 'finished' bourbon category." },
        { question: "Is Angel's Envy a good bourbon?", answer: "Angel's Envy is widely regarded as one of the most approachable and distinctive bourbons in its price range. The port barrel finish makes it uniquely smooth and fruit-forward, appealing to both bourbon veterans and newcomers." },
        { question: "Who makes Angel's Envy?", answer: "Angel's Envy was founded in 2010 by master distiller Lincoln Henderson. The brand was acquired by Bacardi in 2015, and the Louisville distillery opened in 2016, producing the whiskey entirely on-site." },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'elijah-craig', brandKeywords: ['Elijah Craig'], name: 'Elijah Craig',
    seo: brandSeo({
      brand: 'Elijah Craig', categoryLabel: 'Bourbon',
      titleTag: 'Elijah Craig — Small Batch & Barrel Proof',
      h1: 'Elijah Craig Bourbon — Small Batch & Cask-Strength Barrel Proof Allocations',
      metaDescription: 'Buy Elijah Craig online — Small Batch and cask-strength Barrel Proof bourbon. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Elijah Craig is a Heaven Hill bourbon named for the Baptist minister often credited (informally) as the "father of bourbon." The Small Batch and cask-strength Barrel Proof releases are core allocated favourites among enthusiasts.',
      faqs: [{ question: "What's the difference between Elijah Craig Small Batch and Barrel Proof?", answer: "Small Batch is bottled at a standard 94 proof for an approachable, everyday pour, while Barrel Proof is bottled straight from the barrel with nothing added or removed — typically well above 120 proof — for a more concentrated, cask-strength expression released in a handful of numbered batches each year." }],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'michters', brandKeywords: ["Michter's"], name: "Michter's",
    seo: brandSeo({
      brand: "Michter's", categoryLabel: 'Bourbon',
      titleTag: "Michter's — US*1 Small Batch Bourbon",
      h1: "Michter's US*1 Small Batch Bourbon — Direct Allocations",
      metaDescription: "Buy Michter's online — the flagship US*1 Small Batch bourbon, hand-selected and heat-cycled for a smooth, rich profile. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Michter's is a Kentucky bourbon and rye producer known for its meticulous single barrel selection process and heat-cycled warehouses — the flagship US*1 Small Batch bourbon is non-chill filtered and never released before it's ready, regardless of age statement.",
      faqs: [
        { question: "What is Michter's US*1?", answer: "US*1 is Michter's core range — single barrel minimum releases of bourbon, rye, American whiskey, and sour mash. The 'US*1' designation reflects the brand's single barrel bottling commitment." },
        { question: "Who makes Michter's?", answer: "Michter's is produced at the Michter's Fort Nelson Distillery in Louisville, with roots tracing to one of America's oldest whiskey-making traditions in Pennsylvania." },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'old-forester', brandKeywords: ['Old Forester'], name: 'Old Forester',
    seo: brandSeo({
      brand: 'Old Forester', categoryLabel: 'Bourbon',
      titleTag: 'Old Forester 86 Proof — Kentucky Straight Bourbon',
      h1: 'Old Forester 86 Proof Bourbon — Direct Allocations',
      metaDescription: "Buy Old Forester 86 Proof online — the flagship bottling from America's oldest continuously sold bourbon brand. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Old Forester, distilled in Louisville by Brown-Forman, is the oldest continuously sold bourbon brand in the US, having remained in production through Prohibition under a medicinal whiskey license. The 86 Proof expression is the brand's original flagship recipe, unchanged since 1870.",
      faqs: [
        { question: 'Does Aged & Amber carry Old Forester Birthday Bourbon?', answer: "Not currently — we stock the Old Forester 86 Proof flagship. Birthday Bourbon is a heavily allocated annual release; contact us to ask about future availability." },
        { question: 'Who makes Old Forester?', answer: "Old Forester is produced by Brown-Forman Corporation in Louisville, Kentucky — the only bourbon brand documented to have been sold before, during, and after Prohibition, thanks to a medicinal whiskey license." },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'russells-reserve', brandKeywords: ["Russell's Reserve"], name: "Russell's Reserve",
    seo: brandSeo({
      brand: "Russell's Reserve", categoryLabel: 'Bourbon',
      titleTag: "Russell's Reserve — Single Barrel Bourbon",
      h1: "Russell's Reserve Single Barrel Bourbon — Direct Allocations",
      metaDescription: "Buy Russell's Reserve Single Barrel online — Wild Turkey's premium single barrel bourbon. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Russell's Reserve is Wild Turkey's premium line, named for master distiller Jimmy Russell and his son Eddie — the Single Barrel expression showcases a fuller-proof, higher-rye take on the Wild Turkey house style, hand-selected barrel by barrel.",
      faqs: [
        { question: "Who makes Russell's Reserve?", answer: "Russell's Reserve is Wild Turkey's premium small batch line, curated by master distiller Jimmy Russell (50+ years at the distillery) and his son, co-distiller Eddie Russell." },
        { question: "What is Russell's Reserve Single Barrel?", answer: "A hand-selected, single-cask bourbon bottled at 110 proof — a fuller-proof, higher-rye expression of the Wild Turkey house style, with each bottle drawn from one individual barrel." },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'colonel-eh-taylor', brandKeywords: ['E.H. Taylor', 'Eh Taylor'], name: 'Colonel E.H. Taylor',
    seo: brandSeo({
      brand: 'Colonel E.H. Taylor', categoryLabel: 'Bourbon',
      titleTag: 'Colonel E.H. Taylor — Small Batch & Single Barrel',
      h1: 'Colonel E.H. Taylor Bourbon — Small Batch & Single Barrel Allocations',
      metaDescription: 'Buy Colonel E.H. Taylor online — Small Batch and Single Barrel bourbon from Buffalo Trace. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Colonel E.H. Taylor is Buffalo Trace's tribute line to Colonel Edmund Haynes Taylor Jr., a pioneering 19th-century distiller — the Small Batch and Single Barrel expressions are both bottled in bond at 100 proof.",
      faqs: [
        { question: 'What is Colonel E.H. Taylor bourbon?', answer: 'A heritage bottled-in-bond bourbon range from Buffalo Trace named for Edmund Haynes Taylor Jr. — one of the most important figures in bourbon history, credited with helping pass the 1897 Bottled-in-Bond Act.' },
        { question: 'What does bottled-in-bond mean for E.H. Taylor?', answer: 'Every E.H. Taylor expression meets the 1897 Bottled-in-Bond Act requirements: produced at one distillery, in one distilling season, aged at least 4 years, and bottled at exactly 100 proof.' },
      ],
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
      faqs: [
        { question: 'Is Larceny a wheated bourbon?', answer: 'Yes — Larceny uses wheat as the secondary grain instead of rye, following the same wheated mash bill tradition as the historic Old Fitzgerald recipe, for a softer, sweeter profile.' },
        { question: 'What is Larceny Barrel Proof?', answer: 'Larceny Barrel Proof is bottled straight from the cask with nothing added or removed, no chill filtration — typically 118–126 proof — and is released three times a year in lettered batches (A, B, C).' },
      ],
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
      faqs: [
        { question: "What is Booker's bourbon?", answer: "A cask strength, uncut, unfiltered small batch bourbon from the Jim Beam family, created by master distiller Booker Noe — Jim Beam's grandson." },
        { question: "What is a Booker's batch?", answer: "Each bi-annual Booker's release is a named 'batch' with its own story and natural proof — typically 121–130 proof, varying batch to batch since nothing is added or removed after barreling." },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'four-roses', brandKeywords: ['Four Roses'], name: 'Four Roses',
    seo: brandSeo({
      brand: 'Four Roses', categoryLabel: 'Single Barrel Bourbon', titleTag: 'Four Roses — Single Barrel & Small Batch',
      h1: 'Four Roses Bourbon — Single Barrel & Small Batch Allocations',
      metaDescription: 'Buy Four Roses online — Single Barrel OESO/OBSV picks and Limited Edition Small Batch. Ten proprietary recipes. Direct allocations, free $300+.',
      hook: 'Four Roses distils ten distinct bourbon recipes — a combination of two mash bills and five proprietary yeast strains — then blends or single-barrels them into a wide, well-documented range including the collector-favourite Limited Edition Small Batch and Single Barrel OESO/OBSV picks.',
      faqs: [
        { question: 'What do the Four Roses recipe codes mean?', answer: 'Four Roses labels each recipe with a four-letter code — the first two letters are always "OE" or "OB" (mash bill), and the last two identify the yeast strain, each contributing a distinct flavour note from fruity to spicy to floral.' },
        { question: 'How many recipes does Four Roses use?', answer: 'Ten — a combination of 2 mash bills (high-rye and low-rye) crossed with 5 proprietary yeast strains, each producing a distinct flavour profile that master blenders combine or bottle single-barrel.' },
        { question: 'Who owns Four Roses?', answer: 'Kirin Brewery Company of Japan, which acquired Four Roses in 2002.' },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'knob-creek', brandKeywords: ['Knob Creek'], name: 'Knob Creek',
    seo: brandSeo({
      brand: 'Knob Creek', categoryLabel: 'Bourbon',
      titleTag: 'Knob Creek — 9 Year & Single Barrel Reserve',
      h1: 'Knob Creek Bourbon — 9 Year & Single Barrel Reserve Allocations',
      metaDescription: 'Buy Knob Creek online — 9 Year Small Batch and Single Barrel Reserve bourbon. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Knob Creek is Jim Beam’s small batch, full-proof bourbon line, launched in 1992 as part of the original small batch bourbon movement — the 9 Year and hand-selected Single Barrel Reserve anchor the range.',
      faqs: [
        { question: 'Who makes Knob Creek?', answer: "Jim Beam's Clermont, Kentucky distillery — named after the creek near Abraham Lincoln's boyhood home." },
        { question: 'What proof is Knob Creek?', answer: 'The 9 Year is bottled at 100 proof; Single Barrel Reserve is bottled at a fuller 120 proof for a bolder, more concentrated pour.' },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: '1792', brandKeywords: ['1792'], name: '1792',
    seo: brandSeo({
      brand: '1792', categoryLabel: 'Bourbon',
      titleTag: '1792 — Small Batch Bourbon',
      h1: '1792 Small Batch Bourbon — Direct Allocations',
      metaDescription: "Buy 1792 Small Batch online — Barton 1792 Distillery's high-rye Kentucky straight bourbon. Direct allocations at Aged & Amber. Free on $300+.",
      hook: '1792 is named for the year Kentucky achieved statehood, a high-rye bourbon line from Barton 1792 Distillery in Bardstown — the Small Batch expression is bottled at 93.7 proof for a drier, spicier take on Kentucky bourbon.',
      faqs: [
        { question: 'Who makes 1792 Bourbon?', answer: '1792 is produced by the Barton 1792 Distillery in Bardstown, Kentucky — one of the state\'s oldest continuously operating bourbon facilities, dating to 1879, now owned by Sazerac Company.' },
        { question: 'Is 1792 a wheated bourbon?', answer: 'No — 1792 uses a high-rye mash bill, giving it a spicier, more complex flavor with pepper, dried fruit, and caramel notes, distinct from softer wheated bourbons like Maker\'s Mark or Weller.' },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'bulleit', brandKeywords: ['Bulleit'], name: 'Bulleit',
    seo: brandSeo({
      brand: 'Bulleit', categoryLabel: 'Bourbon',
      titleTag: 'Bulleit — Frontier Whiskey Bourbon',
      h1: 'Bulleit Bourbon — Frontier Whiskey Allocations',
      metaDescription: 'Buy Bulleit Bourbon online — the high-rye Frontier Whiskey recipe revived by Tom Bulleit. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Bulleit Frontier Whiskey is a high-rye Kentucky bourbon revived by Tom Bulleit based on his great-great-grandfather’s original recipe — bottled at 90 proof with a distinctive spicy, dry finish.',
      faqs: [{ question: 'Is Bulleit Bourbon a high-rye or wheated bourbon?', answer: "Bulleit Bourbon is a high-rye bourbon, built on a mash bill with a higher-than-typical percentage of rye grain, which gives it a spicier, drier profile than wheated bourbons like Maker's Mark or Weller." }],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'basil-hayden', brandKeywords: ['Basil Hayden'], name: 'Basil Hayden',
    seo: brandSeo({
      brand: 'Basil Hayden', categoryLabel: 'Bourbon',
      titleTag: 'Basil Hayden — Kentucky Straight Bourbon',
      h1: 'Basil Hayden Kentucky Straight Bourbon — Direct Allocations',
      metaDescription: 'Buy Basil Hayden online — the light-bodied, high-rye Jim Beam Small Batch bourbon bottled at 80 proof. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Basil Hayden is a lighter-bodied, high-rye bourbon from the Jim Beam family, bottled at an approachable 80 proof — one of the original Jim Beam Small Batch Collection releases alongside Knob Creek and Booker’s.',
      faqs: [
        { question: 'Who makes Basil Hayden?', answer: "Part of the Jim Beam Small Batch Collection, produced at the Beam distillery in Clermont, Kentucky." },
        { question: 'What proof is Basil Hayden?', answer: '80 proof — one of the lowest-proof flagship bourbons on the market, designed for approachability.' },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'jim-beam', brandKeywords: ['Jim Beam'], name: 'Jim Beam',
    seo: brandSeo({
      brand: 'Jim Beam', categoryLabel: 'Bourbon',
      titleTag: 'Jim Beam — Kentucky Straight Bourbon (White Label)',
      h1: 'Jim Beam Kentucky Straight Bourbon — White Label Allocations',
      metaDescription: 'Buy Jim Beam online — the original White Label Kentucky Straight Bourbon, distilled by the same family for seven generations. Direct allocations, free on $300+.',
      hook: 'Jim Beam is the world’s best-selling bourbon, distilled in Clermont, Kentucky by the same family for seven generations — the core White Label Kentucky Straight is the bottling that put the Beam name on bars and shelves worldwide.',
      faqs: [
        { question: 'Is Jim Beam a bourbon?', answer: 'Yes — Jim Beam Kentucky Straight Bourbon is made from a mash of roughly 77% corn, 13% rye, and 10% malted barley, aged a minimum of 4 years.' },
        { question: 'Who owns Jim Beam?', answer: 'Beam Suntory, a joint venture of Jim Beam Brands and Suntory Holdings of Japan.' },
      ],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'evan-williams', brandKeywords: ['Evan Williams'], name: 'Evan Williams',
    seo: brandSeo({
      brand: 'Evan Williams', categoryLabel: 'Bourbon',
      titleTag: 'Evan Williams — Black Label & Single Barrel',
      h1: 'Evan Williams Bourbon — Black Label & Single Barrel Vintage Allocations',
      metaDescription: 'Buy Evan Williams online — Black Label and Single Barrel Vintage bourbon. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Evan Williams is a Heaven Hill bourbon named for Kentucky’s first commercial distiller — the Black Label is the everyday staple, while the Single Barrel Vintage release is prized by collectors for exceptional value at its price point.',
      faqs: [
        { question: 'Who makes Evan Williams bourbon?', answer: 'Heaven Hill Distillery in Bardstown, Kentucky — America\'s largest independent family-owned spirits producer.' },
        { question: 'What is Evan Williams Single Barrel Vintage?', answer: 'An annual vintage-dated release drawn from a single barrel, with the distillation year printed on the label — widely regarded as one of the best-value single barrel bourbons available.' },
      ],
    }),
  },

  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'wild-turkey', brandKeywords: ['Wild Turkey'], name: 'Wild Turkey',
    // No SEMrush volume data found for this brand (no dedicated page; only surfaces inside the Russell's Reserve page in the source) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Wild Turkey', categoryLabel: 'Bourbon',
      titleTag: 'Wild Turkey — 101 & Rare Breed',
      h1: 'Wild Turkey Bourbon — 101 & Rare Breed Allocations',
      metaDescription: 'Buy Wild Turkey online — the 101 proof flagship and cask-strength Rare Breed. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Wild Turkey is a high-rye Kentucky straight bourbon distilled in Lawrenceburg under Jimmy Russell, the longest-tenured active master distiller in the industry — the 101 proof flagship anchors the range, while Rare Breed blends barrels of different ages and bottles at genuine barrel proof.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'eagle-rare', brandKeywords: ['Eagle Rare'], name: 'Eagle Rare',
    // No dedicated brand-page data for Eagle Rare (only a competitor-list name-drop and an allocation-scarcity FAQ mention in the source) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Eagle Rare', categoryLabel: 'Bourbon',
      titleTag: 'Eagle Rare — 10 Year & 17 Year Bourbon',
      h1: 'Eagle Rare Bourbon — 10 Year & 17 Year Allocations',
      metaDescription: 'Buy Eagle Rare online — the allocated 10 Year single barrel and ultra-rare 17 Year from the Buffalo Trace Antique Collection. Free on $300+.',
      hook: 'Eagle Rare is a single barrel bourbon from Buffalo Trace, hand-selected for a balance of sweetness and dry oak — the 10 Year is one of the most sought-after everyday-priced allocated bourbons in America, while the 17 Year is released once a year as part of the fall Buffalo Trace Antique Collection.',
      faqs: [{ question: 'Why is Eagle Rare so hard to find?', answer: "Eagle Rare, like Blanton's and Colonel E.H. Taylor, is a heavily allocated Buffalo Trace release — demand for its single-barrel 10 Year and the ultra-limited 17 Year far outpaces the barrels selected for bottling each year." }],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'buffalo-trace', brandKeywords: ['Buffalo Trace'], name: 'Buffalo Trace',
    // Head term "buffalo trace bourbon" (49,500/60) exists but was explicitly dropped by the source as too competitive ("revisit in 6 months") — no dedicated brand page. Using generic/inferred terms instead, not SEMrush-backed at this level.
    seo: brandSeo({
      brand: 'Buffalo Trace', categoryLabel: 'Bourbon',
      titleTag: 'Buffalo Trace — Kentucky Straight Bourbon',
      h1: 'Buffalo Trace Kentucky Straight Bourbon — Direct Allocations',
      metaDescription: 'Buy Buffalo Trace online — the flagship low-rye bourbon from the historic Frankfort, Kentucky distillery. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Buffalo Trace is the flagship low-rye bourbon from the Buffalo Trace Distillery in Frankfort, Kentucky — a National Historic Landmark that operated continuously through Prohibition under a medicinal whiskey license. Distilled from Mash Bill #1, the same recipe behind Eagle Rare and George T. Stagg, it is typically aged eight to nine years.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'old-grand-dad', brandKeywords: ['Old Grand-Dad', 'Old Grand Dad'], name: 'Old Grand-Dad',
    // Confirmed zero SEMrush data anywhere in the source dataset (full-tree grep) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Old Grand-Dad', categoryLabel: 'Bourbon',
      titleTag: 'Old Grand-Dad 114 — Kentucky Straight Bourbon',
      h1: 'Old Grand-Dad 114 Bourbon — Direct Allocations',
      metaDescription: 'Buy Old Grand-Dad 114 online — a high-rye, barrel-proof-style Kentucky straight bourbon. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Old Grand-Dad is a Jim Beam family high-rye bourbon dating back to the 19th century, named for founder Basil Hayden Sr. — the 114 expression is bottled at a robust 114 proof, making it one of the best-value cask-strength-style bourbons on the market.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'old-fitzgerald', brandKeywords: ['Old Fitzgerald'], name: 'Old Fitzgerald',
    // Only an incidental mention in the source (as Larceny's mash-bill lineage) — no product-level numeric data. Generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Old Fitzgerald', categoryLabel: 'Bourbon',
      titleTag: 'Old Fitzgerald — Bottled-in-Bond Bourbon',
      h1: 'Old Fitzgerald Bottled-in-Bond Bourbon — Direct Allocations',
      metaDescription: 'Buy Old Fitzgerald Bottled-in-Bond online — a wheated bourbon in the Van Winkle lineage, released each spring and fall. Direct allocations, free on $300+.',
      hook: 'Old Fitzgerald traces its lineage to the wheated bourbon tradition later popularized by the Van Winkle family, using wheat instead of rye as its secondary grain. Each seasonal Bottled-in-Bond release carries its own age statement and sells out quickly.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'elmer-t-lee', brandKeywords: ['Elmer T. Lee', 'Elmer T Lee'], name: 'Elmer T. Lee',
    // Only an incidental mention in the source (as Blanton's historical creator) — no product-level numeric data. Generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Elmer T. Lee', categoryLabel: 'Bourbon',
      titleTag: 'Elmer T. Lee — Single Barrel Bourbon',
      h1: 'Elmer T. Lee Single Barrel Bourbon — Direct Allocations',
      metaDescription: 'Buy Elmer T. Lee online — the single barrel bourbon named for the Buffalo Trace distiller who pioneered the category. Direct allocations, free on $300+.',
      hook: "Elmer T. Lee is named for the legendary Buffalo Trace distiller who pioneered the single-barrel bourbon category and created the original Blanton's recipe — this expression carries forward his exacting palate for smoothness and balance, and is fiercely allocated.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'rock-hill-farms', brandKeywords: ['Rock Hill Farms'], name: 'Rock Hill Farms',
    // Confirmed zero SEMrush data anywhere in the source dataset (full-tree grep) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Rock Hill Farms', categoryLabel: 'Bourbon',
      titleTag: 'Rock Hill Farms — Single Barrel Bourbon',
      h1: 'Rock Hill Farms Single Barrel Bourbon — Direct Allocations',
      metaDescription: 'Buy Rock Hill Farms online — a Buffalo Trace single barrel bourbon bottled at a bold 100 proof. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Rock Hill Farms is bottled at a bold 100 proof from single barrels in Buffalo Trace's high-rye mash bill lineup — it flies under the radar compared to stablemates Blanton's and Eagle Rare despite comparable pedigree and genuinely elegant, well-aged character.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'george-t-stagg', brandKeywords: ['George T. Stagg', 'George T Stagg'], name: 'George T. Stagg',
    // Real SEMrush volume (5,400–6,600/18–24) but no dedicated brand page in the source (routed to a blog opportunity instead) — used here as the hub's primary target since it is genuinely sourced.
    seo: brandSeo({
      brand: 'George T. Stagg', categoryLabel: 'Bourbon',
      titleTag: 'George T. Stagg — Barrel Proof Bourbon',
      h1: 'George T. Stagg Bourbon — Buffalo Trace Antique Collection Allocations',
      metaDescription: 'Buy George T. Stagg online — the uncut, unfiltered barrel-proof release from the Buffalo Trace Antique Collection. Direct allocations, free on $300+.',
      hook: 'George T. Stagg is named for the founder of the O.F.C. Distillery, the historic root of today\'s Buffalo Trace — released once a year uncut and unfiltered at whatever proof the barrels yield, often crossing into hazmat-shipping territory, it is one of the most intense and sought-after releases in the Buffalo Trace Antique Collection.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'pappy-van-winkle', brandKeywords: ['Pappy Van Winkle', 'Van Winkle'], name: 'Pappy Van Winkle',
    // Real SEMrush volume (18,100/33) but no dedicated brand page in the source (routed to a blog opportunity instead) — used here as the hub's primary target since it is genuinely sourced.
    seo: brandSeo({
      brand: 'Pappy Van Winkle', categoryLabel: 'Bourbon',
      titleTag: 'Pappy Van Winkle — Family Reserve 15 Year',
      h1: 'Pappy Van Winkle Family Reserve 15 Year Bourbon — Direct Allocations',
      metaDescription: 'Buy Pappy Van Winkle 15 Year online — the wheated bourbon phenomenon distilled at Buffalo Trace. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Pappy Van Winkle is named for Julian \"Pappy\" Van Winkle Sr., the original owner of the old Stitzel-Weller Distillery — crafted from the Van Winkle family's wheated recipe and distilled today at Buffalo Trace, the 15 Year Family Reserve spends fifteen years mellowing into the silky, dessert-like character that made Pappy a cultural phenomenon. Allocation is brutally limited.",
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'new-riff', brandKeywords: ['New Riff'], name: 'New Riff',
    // Confirmed zero SEMrush data anywhere in the source dataset (full-tree grep) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'New Riff', categoryLabel: 'Bourbon',
      titleTag: 'New Riff — Single Barrel Bourbon',
      h1: 'New Riff Single Barrel Bourbon — Direct Allocations',
      metaDescription: 'Buy New Riff online — an independent Kentucky craft distillery\'s genuine barrel-proof single barrel bourbon. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'New Riff is an independent craft distillery in Newport, Kentucky, founded in 2014 just across the river from Cincinnati — it distills a high-rye mash bill without chill filtration or additives, and its single-barrel program has quickly become a favorite among enthusiasts chasing bold, unmasked flavor.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'kentucky-owl', brandKeywords: ['Kentucky Owl'], name: 'Kentucky Owl',
    // Confirmed zero SEMrush data anywhere in the source dataset (full-tree grep) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Kentucky Owl', categoryLabel: 'Bourbon',
      titleTag: 'Kentucky Owl — The Wiseman Bourbon',
      h1: 'Kentucky Owl The Wiseman Bourbon — Direct Allocations',
      metaDescription: 'Buy Kentucky Owl The Wiseman online — a blended bourbon built on the Kentucky Owl brand\'s painstaking blending philosophy. Direct allocations, free on $300+.',
      hook: 'Kentucky Owl was founded by Dixon Dedman, drawing on his family\'s pre-Prohibition distilling records — the brand built its reputation on painstakingly blended, high-proof rarities, and The Wiseman brings that same blending philosophy to a more accessible, lower-proof expression.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'barrell-bourbon', brandKeywords: ['Barrell Bourbon', 'Barrell Craft Spirits'], name: 'Barrell Bourbon',
    // Confirmed zero SEMrush data anywhere in the source dataset (full-tree grep) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Barrell Bourbon', categoryLabel: 'Bourbon',
      titleTag: 'Barrell Bourbon — Batch Series',
      h1: 'Barrell Bourbon Batch Series 31 — Direct Allocations',
      metaDescription: 'Buy Barrell Bourbon online — Barrell Craft Spirits\' cask-strength, sourced-and-blended Batch Series bourbon. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Barrell Craft Spirits, founded by Joe Beatrice, sources mature barrels from distilleries across the country and blends them into small, ever-changing batches bottled at full cask strength without chill filtration or coloring — each release is numbered rather than age-stated, and Batch 31 leans on barrels aged six to sixteen years.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'yellowstone', brandKeywords: ['Yellowstone'], name: 'Yellowstone',
    // Confirmed zero SEMrush data anywhere in the source dataset (full-tree grep) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Yellowstone', categoryLabel: 'Bourbon',
      titleTag: 'Yellowstone — Select Kentucky Straight Bourbon',
      h1: 'Yellowstone Select Kentucky Straight Bourbon — Direct Allocations',
      metaDescription: 'Buy Yellowstone Select online — one of the oldest bourbon trademarks in America, revived by the Beam family\'s Limestone Branch Distillery. Direct allocations, free on $300+.',
      hook: 'Yellowstone revives one of the oldest bourbon trademarks in America, produced today by descendants of the Beam family at Limestone Branch Distillery in Bardstown — the Select expression blends four- and seven-year-old barrels into a layered, well-rounded whiskey that honors its 19th-century roots.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'woodford-reserve', brandKeywords: ['Woodford Reserve'], name: 'Woodford Reserve',
    // No dedicated brand-page data exists for Woodford Reserve in the source — the only real number ("woodford reserve bourbon", 22,200/42) was flagged as "competitor comparison content only," not a page target. Generic/inferred keywords used, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Woodford Reserve', categoryLabel: 'Bourbon',
      titleTag: 'Woodford Reserve — Kentucky Straight, Double Oaked & Batch Proof',
      h1: 'Woodford Reserve Bourbon — Kentucky Straight, Double Oaked & Batch Proof Allocations',
      metaDescription: 'Buy Woodford Reserve online — Kentucky Straight, Double Oaked, and the annual cask-strength Batch Proof. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Woodford Reserve is Brown-Forman\'s super-premium bourbon, triple-distilled in copper pot stills at the historic Woodford County, Kentucky distillery — a National Historic Landmark. Double Oaked rests a second time in a freshly charred barrel, while the annual Batch Proof release bottles the house recipe at true batch strength with no water added.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'frank-august', brandKeywords: ['Frank August'], name: 'Frank August',
    // Real SEMrush volume for this brand (frank august small batch bourbon, 4,400/4 — one of the best Vol/KD ratios in the dataset) but no dedicated brand page exists in the source. Copy reflects the sourced primary keyword directly.
    seo: brandSeo({
      brand: 'Frank August', categoryLabel: 'Bourbon',
      titleTag: 'Frank August — Small Batch Kentucky Straight Bourbon',
      h1: 'Frank August Small Batch Bourbon — Direct Allocations',
      metaDescription: 'Buy Frank August Small Batch online — a high-proof small batch Kentucky straight bourbon from an undisclosed Kentucky distillery. Direct allocations, free on $300+.',
      hook: 'Frank August Small Batch is bottled at a robust 100 proof from a small, hand-selected batch of Kentucky straight bourbon barrels — a craft-positioned release with limited distribution that delivers more intensity and structure than standard-proof small batch bourbons.',
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'henry-mckenna', brandKeywords: ['Henry McKenna'], name: 'Henry McKenna',
    seo: brandSeo({
      brand: 'Henry McKenna', categoryLabel: 'Bourbon',
      titleTag: 'Henry McKenna — 10 Year Bottled-in-Bond',
      h1: 'Henry McKenna Bourbon — 10 Year Single Barrel, Allocations',
      metaDescription: 'Buy Henry McKenna 10 Year online — Heaven Hill\'s bottled-in-bond single barrel, Best in Show Whiskey at the 2019 SFWSC. Direct allocations at Aged & Amber.',
      hook: 'Henry McKenna 10 Year won Best in Show Whiskey at the 2019 San Francisco World Spirits Competition — a rare feat for a bottled-in-bond bourbon that regularly retails under $70, made by Heaven Hill in Bardstown.',
      faqs: [{ question: 'Did Henry McKenna win an award?', answer: 'Yes — Henry McKenna 10 Year Bottled-in-Bond won Best in Show Whiskey at the 2019 San Francisco World Spirits Competition.' }],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'very-old-barton', brandKeywords: ['Very Old Barton'], name: 'Very Old Barton',
    seo: brandSeo({
      brand: 'Very Old Barton', categoryLabel: 'Bourbon',
      titleTag: 'Very Old Barton — Bottled-in-Bond Budget Bourbon',
      h1: 'Very Old Barton Bourbon — Bottled-in-Bond Allocations',
      metaDescription: 'Buy Very Old Barton online — a budget-priced bottled-in-bond bourbon named a Whisky Advocate Best Buy. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Very Old Barton is bottled in bond at 100 proof from Barton 1792 Distillery and has been named a Best Buy Whiskey of the Year by Whisky Advocate, consistently over-delivering for its price.',
      faqs: [{ question: 'Is Very Old Barton a good bourbon?', answer: 'Very Old Barton is widely considered one of the best-value bourbons on the market — Whisky Advocate has named it a Best Buy Whiskey of the Year.' }],
    }),
  },
  {
    categorySlug: 'bourbon-whiskey', hubSlug: 'willett', brandKeywords: ['Willett'], name: 'Willett',
    seo: brandSeo({
      brand: 'Willett', categoryLabel: 'Bourbon',
      titleTag: 'Willett — Pot Still Reserve Bourbon',
      h1: 'Willett Bourbon — Pot Still Reserve, Allocations',
      metaDescription: 'Buy Willett Pot Still Reserve online — small batch bourbon in the brand\'s signature pot-still-shaped bottle. Direct allocations at Aged & Amber. Free $300+.',
      hook: "Willett Pot Still Reserve is sourced and blended by the Kulsveen family's Willett Distillery, bottled in the brand's distinctive pot-still-shaped decanter and carrying strong collector and social-media interest.",
      faqs: [{ question: 'Why is Willett bottled in a pot-still-shaped bottle?', answer: "It's a signature packaging choice for the Willett Distillery, distinguishing the brand's bottles on the shelf." }],
    }),
  },

  // ─── SCOTCH ───────────────────────────────────────────
  {
    categorySlug: 'scotch-whisky', hubSlug: 'macallan', brandKeywords: ['Macallan'], name: 'The Macallan',
    seo: brandSeo({
      brand: 'The Macallan', categoryLabel: 'Scotch', titleTag: 'The Macallan — 12, 15 & 18 Year Sherry Oak, Double Cask',
      h1: 'The Macallan — 12 & 15 Double Cask, 12 & 18 Year Sherry Oak Allocations',
      metaDescription: 'Buy The Macallan online — 12 Double Cask, 12 & 18 Year Sherry Oak, and 15 Double Cask. Speyside’s finest. Direct allocations.',
      hook: 'The Macallan is a single malt Scotch whisky distilled at Easter Elchies Estate in Speyside — one of the world’s most recognised luxury spirits brands, famous for its commitment to natural colour and exceptional sherry oak cask quality, spanning the core 12 Year through to ultra-rare collectible expressions.',
      transactionalCTA: 'Buy The Macallan online — direct allocations of 12 Double Cask, 12 & 18 Year Sherry Oak, and 15 Double Cask. Ships to 45 US states.',
      faqs: [
        { question: 'Why is The Macallan so expensive?', answer: 'The Macallan’s pricing reflects genuine scarcity of high-quality first-fill sherry oak casks (which cost far more than standard bourbon barrels), decades of ageing on rare expressions, and intense global collector demand — a 1926 Macallan sold at auction for over £1.5 million, the most expensive bottle of whisky ever sold.' },
        { question: 'What is the difference between Macallan 12 Sherry Oak and Double Cask?', answer: 'Sherry Oak uses exclusively European and American oak seasoned with Spanish oloroso sherry for the richest, most intensely sherried flavor and deep amber color. Double Cask combines American oak (seasoned with American sherry) and European oak for a lighter, more accessible sherry influence at a lower price.' },
        { question: 'Is The Macallan peated?', answer: 'No — The Macallan is not peated. It is a non-peated Highland single malt from Speyside, where light, fruit-forward, sherry-influenced whiskies are typical. Its flavor complexity comes entirely from its oak cask programme, not peat smoke.' },
        { question: 'Who owns The Macallan?', answer: 'The Macallan is owned by The Edrington Group, a privately held Scottish spirits company based in Glasgow, which also owns Highland Park.' },
      ],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'johnnie-walker', brandKeywords: ['Johnnie Walker'], name: 'Johnnie Walker',
    seo: brandSeo({
      brand: 'Johnnie Walker', categoryLabel: 'Blended Scotch', titleTag: 'Johnnie Walker — Black, Blue, Double Black & Gold Label Reserve',
      h1: 'Johnnie Walker — Black Label, Blue Label, Double Black & Gold Label Reserve Allocations',
      metaDescription: 'Buy Johnnie Walker online — Black Label, Blue Label, Double Black, and Gold Label Reserve. Direct allocations, free $300+.',
      hook: 'Johnnie Walker is the world’s best-selling Scotch whisky, blended from malts and grains sourced across every Scotch region — the coloured-label hierarchy (Red through Blue) signals increasing age, rarity, and blend complexity.',
      transactionalCTA: 'Buy Johnnie Walker Blue Label online — direct allocations of the ultra-premium Scotch blend, ships to 45 US states.',
      faqs: [
        { question: 'What is Johnnie Walker Blue Label?', answer: 'Blue Label is an ultra-premium blended Scotch made from the rarest casks in the Walker inventory — including some from distilleries that are now silent. Only 1 in 10,000 casks is deemed exceptional enough to qualify, and it carries no age statement.' },
        { question: 'What is the difference between Black Label and Double Black?', answer: 'Black Label is aged a minimum of 12 years and blended from around 40 whiskies. Double Black uses a similar blend but incorporates whiskies matured in heavily charred casks and smokier malts for a bolder, more intense profile at the same age.' },
        { question: 'Is Johnnie Walker a Scotch whisky?', answer: 'Yes — all Johnnie Walker expressions are blended Scotch whiskies produced in Scotland by Diageo.' },
      ],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glenfiddich', brandKeywords: ['Glenfiddich'], name: 'Glenfiddich',
    seo: brandSeo({
      brand: 'Glenfiddich', categoryLabel: 'Scotch', titleTag: 'Glenfiddich — 12, 15 Solera & 18 Year',
      h1: 'Glenfiddich — 12 Year, 12 Sherry Cask Finish, 15 Solera & 18 Year Allocations',
      metaDescription: 'Buy Glenfiddich online — 12 Year, 12 Year Sherry Cask Finish, 15 Year Solera, and 18 Year. The world’s best-selling single malt. Direct allocations, free $300+.',
      hook: 'Glenfiddich, meaning "valley of the deer" in Gaelic, is the world’s best-selling single malt Scotch — still family-owned and distilled at Speyside’s most-visited distillery, with a range spanning the core 12 Year through the experimental Grand Series finishes.',
      faqs: [
        { question: 'How do you pronounce Glenfiddich?', answer: 'Glenfiddich is pronounced "glen-FID-ick" — the "ch" at the end is a soft Scottish Gaelic sound, closer to the "ch" in "loch" than an English "ch."' },
        { question: 'Is Glenfiddich peated?', answer: 'The core range — 12, 15, and 18 Year — is not peated. Glenfiddich is known for a fresh, fruity, pear-forward style rather than smoke.' },
        { question: 'Who owns Glenfiddich?', answer: 'William Grant & Sons — a privately held Scottish family company founded in 1887, still family-owned today.' },
      ],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glenlivet', brandKeywords: ['Glenlivet'], name: 'The Glenlivet',
    seo: brandSeo({
      brand: 'The Glenlivet', categoryLabel: 'Scotch',
      titleTag: 'The Glenlivet — 12 Year & 14 Year Cognac Cask',
      h1: 'The Glenlivet — 12 Year & 14 Year Cognac Cask Selection Allocations',
      metaDescription: 'Buy The Glenlivet online — the 12 Year and the 14 Year Cognac Cask Selection. Speyside’s founding distillery. Direct allocations.',
      hook: 'The Glenlivet holds the first licence ever granted to a Speyside distillery in 1824, and remains one of the region’s most influential producers — the 12 and Founder’s Reserve are approachable, fruity entry points to the wider Nadurra and 18 Year range.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'laphroaig', brandKeywords: ['Laphroaig'], name: 'Laphroaig',
    seo: brandSeo({
      brand: 'Laphroaig', categoryLabel: 'Islay Scotch',
      titleTag: 'Laphroaig — 10 Year & Lore',
      h1: 'Laphroaig — 10 Year & Lore Allocations',
      metaDescription: 'Buy Laphroaig online — the 10 Year and Lore. Islay’s most intensely peated malt. Direct allocations, free $300+.',
      hook: 'Laphroaig is one of Islay’s most intensely peated single malts, still floor-malting some of its own barley on-site — the 10 Year is the classic entry point, with Quarter Cask, Lore, and the annual Cairdeas release for enthusiasts.',
      faqs: [
        { question: 'How do you pronounce Laphroaig?', answer: 'Laphroaig is pronounced "la-FROYG" — a Gaelic name meaning "the beautiful hollow by the broad bay," referring to the distillery’s shoreline setting on Islay.' },
        { question: 'What does Laphroaig taste like?', answer: 'Intensely smoky, medicinal, and briny — notes of iodine, seaweed, TCP, bonfire smoke, and brine, the most polarizing flavor profile in Scotch whisky.' },
      ],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'ardbeg', brandKeywords: ['Ardbeg'], name: 'Ardbeg',
    seo: brandSeo({
      brand: 'Ardbeg', categoryLabel: 'Islay Scotch',
      titleTag: 'Ardbeg — 10 Year & Uigeadail',
      h1: 'Ardbeg — 10 Year & Uigeadail Allocations',
      metaDescription: 'Buy Ardbeg online — the Ten and Uigeadail. Islay’s heaviest-peated core range. Direct allocations.',
      hook: 'Ardbeg is renowned among Islay distilleries for the heaviest peating level in its core range, balanced by unusually long fermentation — the 10 Year "Ten" is the benchmark, alongside the sherried Uigeadail and cask-strength Corryvreckan.',
      faqs: [
        { question: 'What is Ardbeg Uigeadail?', answer: 'Uigeadail (pronounced "oog-a-dal") is a non-age-statement Ardbeg matured in ex-bourbon and ex-sherry casks, named after the loch that supplies Ardbeg\'s water source. It combines the distillery\'s signature intense peat smoke with rich sherry sweetness.' },
        { question: 'What is the Ardbeg Committee?', answer: 'The Ardbeg Committee is the distillery\'s fan club, founded in 2000. Committee Releases are typically the most sought-after Ardbeg expressions, often released at higher strength and in limited quantities before wider distribution.' },
      ],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'lagavulin', brandKeywords: ['Lagavulin'], name: 'Lagavulin',
    seo: brandSeo({
      brand: 'Lagavulin', categoryLabel: 'Islay Scotch',
      titleTag: 'Lagavulin — 16 Year Peated Islay Scotch',
      h1: 'Lagavulin 16 Year — Peated Islay Scotch Allocations',
      metaDescription: 'Buy Lagavulin 16 Year online — Islay’s richest, most intensely peated single malt. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Lagavulin uses an unusually slow, deliberate distillation with exceptionally short, wide stills to produce one of Islay’s richest, most intensely peated single malts — the 16 Year is the enduring benchmark of the style.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'highland-park', brandKeywords: ['Highland Park'], name: 'Highland Park',
    seo: brandSeo({
      brand: 'Highland Park', categoryLabel: 'Scotch',
      titleTag: 'Highland Park 18 Year — Orkney Single Malt Scotch',
      h1: 'Highland Park 18 Year — Orkney Single Malt Scotch Allocations',
      metaDescription: 'Buy Highland Park 18 Year online — an award-laden Orkney single malt balancing heather honey with gentle smoke. Direct allocations. Free shipping on $300+.',
      hook: 'Highland Park distils on Orkney, Scotland’s northernmost whisky-producing island, still floor-malting its own barley over local heather-infused peat — giving its whisky a distinctive gentle smoke rather than Islay’s maritime intensity.',
      faqs: [{ question: 'What is Highland Park Viking Honour?', answer: 'Viking Honour is Highland Park’s 12 Year expression — it is not currently part of our allocation. We carry the 18 Year, one of the most decorated whiskies in the world.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'dalmore', brandKeywords: ['Dalmore'], name: 'Dalmore',
    seo: brandSeo({
      brand: 'The Dalmore', categoryLabel: 'Scotch',
      titleTag: 'The Dalmore — 12 & 15 Year Highland Scotch',
      h1: 'The Dalmore — 12 & 15 Year Allocations',
      metaDescription: 'Buy The Dalmore online — 12 and 15 Year. Matured in rare fortified wine casks. Direct allocations.',
      hook: 'The Dalmore is a Highland single malt distilled on the Cromarty Firth, known for maturing spirit in a sequence of ex-bourbon and rare fortified wine casks — Matusalem sherry butts in particular define its rich, orange-and-spice house style.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'balvenie', brandKeywords: ['Balvenie'], name: 'The Balvenie',
    seo: brandSeo({
      brand: 'The Balvenie', categoryLabel: 'Scotch',
      titleTag: 'The Balvenie — 12 DoubleWood & 21 PortWood',
      h1: 'The Balvenie — 12 Year DoubleWood & 21 Year PortWood Allocations',
      metaDescription: 'Buy The Balvenie online — 12 Year DoubleWood and 21 Year PortWood. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'The Balvenie is one of the few Speyside distilleries that still grows some of its own barley and employs its own coppersmith and resident malt master — the DoubleWood, Caribbean Cask, and PortWood editions are built around distinctive secondary cask finishes.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'springbank', brandKeywords: ['Springbank'], name: 'Springbank',
    seo: brandSeo({
      brand: 'Springbank', categoryLabel: 'Campbeltown Scotch',
      titleTag: 'Springbank — 8 Year Local Barley',
      h1: 'Springbank 8 Year Local Barley — Campbeltown Allocations',
      metaDescription: 'Buy Springbank Local Barley online — a cask-strength Campbeltown single malt distilled from barley grown near the distillery. Direct allocations.',
      hook: 'Springbank is one of the last Scottish distilleries to perform every step — malting, distilling, and maturing — entirely on-site in Campbeltown, a nearly vanished whisky region it now anchors almost single-handedly. Its releases are famously allocated and highly sought by collectors.',
      transactionalCTA: 'Buy Springbank online — one of the highest-demand allocated Scotch releases in the category. Ships to 45 US states.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'bruichladdich', brandKeywords: ['Bruichladdich'], name: 'Bruichladdich',
    seo: brandSeo({
      brand: 'Bruichladdich', categoryLabel: 'Islay Scotch',
      titleTag: 'Bruichladdich — Port Charlotte 10 Year',
      h1: 'Port Charlotte 10 Year — Bruichladdich Islay Single Malt Allocations',
      metaDescription: 'Buy Port Charlotte 10 Year online — Bruichladdich’s heavily peated Islay single malt, bottled without chill filtration or added colour. Direct allocations, free $300+.',
      hook: 'Bruichladdich distils three distinct styles under one Islay roof: the unpeated Classic Laddie, the super-heavily-peated Octomore, and the traditionally peated Port Charlotte — all built around 100% Scottish-grown barley.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'oban', brandKeywords: ['Oban'], name: 'Oban',
    seo: brandSeo({
      brand: 'Oban', categoryLabel: 'Highland Scotch',
      titleTag: 'Oban — 14 Year & 18 Year',
      h1: 'Oban — 14 Year & 18 Year Allocations',
      metaDescription: 'Buy Oban online — the 14 Year and 18 Year single malt. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Oban is one of Scotland’s smallest and oldest working distilleries, built into the hillside of the coastal town it shares its name with — its West Highland single malt balances coastal, smoky, and fruity notes in one of Scotch’s most distinctive house styles.',
      faqs: [
        { question: 'Oban 14 vs 18?', answer: 'The 18 Year is more complex and layered; the 14 Year is Oban’s everyday classic and the standard expression from the distillery.' },
        { question: 'What is the Oban Distillers Edition?', answer: 'The Distillers Edition takes the 14 Year and finishes it in ex-Montilla Fino sherry casks for a double-maturation finish. It is not currently part of our allocation.' },
      ],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'aberlour', brandKeywords: ['Aberlour'], name: 'Aberlour',
    seo: brandSeo({
      brand: 'Aberlour', categoryLabel: 'Scotch', titleTag: 'Aberlour — 16 & 18 Year Double Cask',
      h1: 'Aberlour — 16 Year Double Cask & 18 Year Double Sherry Cask Allocations',
      metaDescription: 'Buy Aberlour online — 16 Year Double Cask and 18 Year Double Sherry Cask Finish. First-fill Oloroso sherry butt Speyside malt. Direct allocations.',
      hook: 'Aberlour is a Speyside distillery whose A’bunadh release — bottled at cask strength with no chill-filtration or added colour, entirely from first-fill sherry butts — has become a benchmark for sherried, cask-strength Scotch among enthusiasts.',
      faqs: [{ question: 'What is Aberlour A’bunadh?', answer: 'A’bunadh (Gaelic for "the origin") is Aberlour’s cask-strength, non-chill-filtered, uncoloured single malt matured entirely in first-fill Oloroso sherry butts. Each numbered batch varies slightly in proof and profile, making it a favourite among collectors chasing specific batches.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glendronach', brandKeywords: ['GlenDronach'], name: 'GlenDronach',
    seo: brandSeo({
      brand: 'GlenDronach', categoryLabel: 'Scotch', titleTag: 'GlenDronach — 15 Revival & 18 Allardice',
      h1: 'GlenDronach — 15 Year Revival & 18 Year Allardice Allocations',
      metaDescription: 'Buy GlenDronach online — 15 Year Revival and 18 Year Allardice. Deeply sherried Highland single malt. Direct allocations, free $300+.',
      hook: 'GlenDronach is a Highland distillery built around traditional direct-fired stills and extensive Oloroso and Pedro Ximénez sherry cask maturation — its deeply sherried house style has made it one of the most collected Highland single malts.',
      faqs: [
        { question: 'Is GlenDronach better than Macallan?', answer: 'Many enthusiasts consider GlenDronach better value for money — the 15 Year Revival in particular frequently outperforms similarly priced Macallan releases in blind tastings, though both distilleries share a deep commitment to sherry cask maturation.' },
        { question: 'What is GlenDronach Parliament 21?', answer: 'Parliament 21 is GlenDronach’s 21 Year Old, named after the "parliament" of rooks that nest near the distillery. It is not currently part of our allocation.' },
        { question: 'Who owns GlenDronach?', answer: 'GlenDronach is owned by The BenRiach Distillery Company, which was acquired by Brown-Forman in 2016.' },
      ],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'bowmore', brandKeywords: ['Bowmore'], name: 'Bowmore',
    // Thin-data brand: Bowmore appears only as a phenol-ppm FAQ example in the source dataset, no dedicated keyword cluster — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Bowmore', categoryLabel: 'Islay Scotch',
      titleTag: 'Bowmore — 12 Year Islay Single Malt',
      h1: 'Bowmore 12 Year — Islay Single Malt Scotch Allocations',
      metaDescription: 'Buy Bowmore 12 Year online — a gently peated Islay single malt matured in the distillery’s historic No. 1 Vaults. Direct allocations, free $300+.',
      hook: 'Bowmore is Islay’s oldest legally licensed distillery, founded in 1779 in the town that shares its name. Its whisky matures in the famous No. 1 Vaults — one of Scotland’s oldest maturation warehouses, built partly below sea level on the shore of Loch Indaal — producing a softer, more balanced style of peated single malt than its Islay neighbours.',
      faqs: [{ question: 'How peated is Bowmore?', answer: 'Bowmore malts its barley to a moderate phenol level, around 8ppm in some releases — noticeably gentler than heavily peated Islay malts like Laphroaig or Ardbeg, giving it a softer, more balanced smoke character.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'buchanans', brandKeywords: ["Buchanan's", 'Buchanans'], name: "Buchanan's",
    // Confirmed zero SEMrush data anywhere in the source dataset (full-tree grep) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: "Buchanan's", categoryLabel: 'Blended Scotch',
      titleTag: "Buchanan's — DeLuxe 12 Year Blended Scotch",
      h1: "Buchanan's DeLuxe 12 Year — Blended Scotch Whisky Allocations",
      metaDescription: "Buy Buchanan's DeLuxe 12 Year online — a smooth, approachable blended Scotch whisky. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Buchanan's is a blended Scotch whisky brand founded by James Buchanan in 1884 and now owned by Diageo. The DeLuxe 12 Year blends aged malt and grain whiskies from across Scotland for a smooth, easy-drinking character, and remains one of the best-selling Scotch brands in Latin America and the US Hispanic market.",
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'chivas-regal', brandKeywords: ['Chivas Regal', 'Chivas'], name: 'Chivas Regal',
    // Thin-data brand: Chivas Regal appears only as an LSI mention ("chivas regal blended") inside the Blended Scotch category page, no dedicated brand page or individual Vol/KD — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Chivas Regal', categoryLabel: 'Blended Scotch',
      titleTag: 'Chivas Regal — 12 & 18 Year Blended Scotch',
      h1: 'Chivas Regal — 12 Year & 18 Year Gold Signature Allocations',
      metaDescription: 'Buy Chivas Regal online — the 12 Year and 18 Year Gold Signature blended Scotch. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Chivas Regal is a Speyside-led blended Scotch whisky founded in Aberdeen in 1801 and now owned by Pernod Ricard’s Chivas Brothers. Built around Strathisla single malt at its heart, the 12 Year is one of the world’s best-known blends, while the 18 Year Gold Signature adds a rounder, more complex character.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'deanston', brandKeywords: ['Deanston'], name: 'Deanston',
    // Confirmed zero SEMrush data anywhere in the source dataset (full-tree grep) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Deanston', categoryLabel: 'Highland Scotch',
      titleTag: 'Deanston — 12 Year Highland Single Malt',
      h1: 'Deanston 12 Year — Highland Single Malt Scotch Allocations',
      metaDescription: 'Buy Deanston 12 Year online — an un-chill-filtered Highland single malt distilled at a converted 18th-century cotton mill. Direct allocations, free $300+.',
      hook: 'Deanston distils at a former cotton mill in Doune, Perthshire, built in 1785 and converted to a distillery in 1966. The site is partly powered by its own hydroelectric turbine on the River Teith, and Deanston bottles its whisky un-chill-filtered for a fuller, more textured character.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'dewars', brandKeywords: ["Dewar's", 'Dewars'], name: "Dewar's",
    // Thin-data brand: Dewar's appears only as "dewars blended" inside the Blended Scotch category page's LSI list — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: "Dewar's", categoryLabel: 'Blended Scotch',
      titleTag: "Dewar's — White Label Blended Scotch",
      h1: "Dewar's White Label — Blended Scotch Whisky Allocations",
      metaDescription: "Buy Dewar's White Label online — a double-aged blended Scotch built around Aberfeldy Highland malt. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Dewar's was founded by John Dewar in 1846 and is now owned by Bacardi. White Label, first blended in 1899, is \"double-aged\" — married a second time and rested further after blending — a process built around Aberfeldy single malt, the brand's home distillery in Highland Perthshire.",
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glenfarclas', brandKeywords: ['Glenfarclas'], name: 'Glenfarclas',
    // Confirmed zero SEMrush data anywhere in the source dataset (full-tree grep) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Glenfarclas', categoryLabel: 'Speyside Scotch',
      titleTag: 'Glenfarclas — 12 Year Speyside Single Malt',
      h1: 'Glenfarclas 12 Year — Speyside Single Malt Scotch Allocations',
      metaDescription: 'Buy Glenfarclas 12 Year online — a traditional sherry-matured Speyside malt from an independent, family-owned distillery. Direct allocations, free $300+.',
      hook: 'Glenfarclas has remained independently family-owned by the Grant family since 1865 — one of the few Speyside distilleries never to have been sold to a large drinks conglomerate. It matures its whisky in sherry casks for a rich, traditional Speyside style.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'monkey-shoulder', brandKeywords: ['Monkey Shoulder'], name: 'Monkey Shoulder',
    // Confirmed zero SEMrush data anywhere in the source dataset (full-tree grep) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'Monkey Shoulder', categoryLabel: 'Blended Scotch',
      titleTag: 'Monkey Shoulder — Blended Malt Scotch Whisky',
      h1: 'Monkey Shoulder — Blended Malt Scotch Whisky Allocations',
      metaDescription: 'Buy Monkey Shoulder online — a blend of Speyside single malts created for cocktails and easy sipping. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Monkey Shoulder is created by William Grant & Sons from a blend of Speyside single malts only, with no grain whisky — a "blended malt" style. Its name references the repetitive-strain shoulder injury historically suffered by malt men who turned barley by hand, and the whisky is designed and marketed specifically for cocktails and bartending.',
      faqs: [{ question: 'What does the name Monkey Shoulder mean?', answer: '"Monkey shoulder" was a historical term for a repetitive-strain injury suffered by malt men who spent long hours turning germinating barley by hand with a wooden shovel, causing one arm to hang lower than the other. The brand adopted the name as a nod to traditional malting craft.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'the-singleton', brandKeywords: ['The Singleton', 'Singleton'], name: 'The Singleton',
    // Confirmed zero SEMrush data anywhere in the source dataset (full-tree grep) — generic/inferred keywords, not SEMrush-backed.
    seo: brandSeo({
      brand: 'The Singleton', categoryLabel: 'Speyside Scotch',
      titleTag: 'The Singleton — 12 Year Speyside Single Malt',
      h1: 'The Singleton 12 Year — Speyside Single Malt Scotch Allocations',
      metaDescription: 'Buy The Singleton 12 Year online — an approachable, fruit-forward Speyside single malt from Diageo’s Dufftown distillery. Direct allocations, free $300+.',
      hook: 'The Singleton is a Diageo-owned single malt brand built around the Dufftown distillery in Speyside — the range is sold under different distillery names in different global markets. The 12 Year is designed as an approachable introduction to single malt Scotch, blending orchard fruit and honeyed malt sweetness.',
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glen-scotia', brandKeywords: ['Glen Scotia'], name: 'Glen Scotia',
    seo: brandSeo({
      brand: 'Glen Scotia', categoryLabel: 'Campbeltown Scotch',
      titleTag: 'Glen Scotia — Double Cask Campbeltown Scotch',
      h1: 'Glen Scotia Double Cask — Campbeltown Single Malt Allocations',
      metaDescription: 'Buy Glen Scotia Double Cask online — one of Campbeltown’s last three working distilleries. Free shipping on $300+.',
      hook: 'Glen Scotia is one of only three working distilleries left in Campbeltown, Scotland’s smallest official whisky region — its single malts carry a distinctive briny, slightly oily character shaped by the coastal warehouse environment.',
      faqs: [
        { question: 'What is Glen Scotia?', answer: 'Glen Scotia is one of only three remaining active distilleries in Campbeltown, Scotland — a whisky region once home to over 30 distilleries. Founded in 1832, it produces single malts with a distinctive briny, coastal character.' },
        { question: 'What is Campbeltown whisky?', answer: 'Campbeltown is one of Scotland’s five officially recognised whisky regions — the smallest by number of working distilleries. Once home to over 30 distilleries, only three remain today, producing malts known for a maritime, slightly oily character.' },
        { question: 'What is Glen Scotia Victoriana?', answer: 'Victoriana is finished in heavily charred virgin oak casks following initial maturation in ex-rum and ex-bourbon barrels, bottled at 51.5% ABV. It is not currently part of our allocation.' },
      ],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'aberfeldy', brandKeywords: ['Aberfeldy'], name: 'Aberfeldy',
    seo: brandSeo({
      brand: 'Aberfeldy', categoryLabel: 'Highland Scotch',
      titleTag: 'Aberfeldy — Highland Single Malt, Heart of Dewar\'s',
      h1: 'Aberfeldy Scotch — 12 Year, Allocations',
      metaDescription: 'Buy Aberfeldy 12 Year online — the Highland single malt at the heart of Dewar\'s blended whisky. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Aberfeldy supplies the malt whisky at the heart of Dewar's blend while also bottling its own 12 Year single malt, known for a distinctive heather-honey sweetness from its local water source.",
      faqs: [{ question: 'What is Aberfeldy known for?', answer: "Aberfeldy is the distillery that supplies the malt whisky component of Dewar's blended Scotch, while also releasing its own honeyed 12 Year single malt." }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'auchentoshan', brandKeywords: ['Auchentoshan'], name: 'Auchentoshan',
    seo: brandSeo({
      brand: 'Auchentoshan', categoryLabel: 'Lowland Scotch',
      titleTag: 'Auchentoshan — Triple-Distilled Lowland Scotch',
      h1: 'Auchentoshan Scotch — 12 Year, Allocations',
      metaDescription: 'Buy Auchentoshan 12 Year online — one of the few triple-distilled Scotch whiskies, from Scotland\'s only Lowland distillery inside Glasgow. Direct allocations.',
      hook: 'Auchentoshan triple-distills its whisky — unusual in Scotch production — for an unusually light, smooth Lowland style, and is Scotland\'s only distillery located within Glasgow\'s city limits.',
      faqs: [{ question: 'Why is Auchentoshan triple distilled?', answer: 'Most Scotch is distilled twice; Auchentoshan distills three times, a technique more common in Irish whiskey, producing a lighter, smoother spirit.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'cragganmore', brandKeywords: ['Cragganmore'], name: 'Cragganmore',
    seo: brandSeo({
      brand: 'Cragganmore', categoryLabel: 'Speyside Scotch',
      titleTag: 'Cragganmore — Diageo Classic Malts, Speyside',
      h1: 'Cragganmore Scotch — 12 Year, Allocations',
      metaDescription: 'Buy Cragganmore 12 Year online — one of Diageo\'s six Classic Malts, distilled with unusually flat-topped stills. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Cragganmore is one of Diageo\'s original six Classic Malts, distilled using distinctively flat-topped pot stills that produce a more complex, fruit-forward spirit than typical Speyside malts.',
      faqs: [{ question: 'What are the Diageo Classic Malts?', answer: 'The Classic Malts are six single malts Diageo selected to represent Scotland\'s whisky regions, including Cragganmore for Speyside, Oban for the West Highlands, and Talisker for the islands.' }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'glenmorangie', brandKeywords: ['Glenmorangie'], name: 'Glenmorangie',
    seo: brandSeo({
      brand: 'Glenmorangie', categoryLabel: 'Highland Scotch',
      titleTag: 'Glenmorangie — Highland Single Malt, Lasanta & 18 Year',
      h1: 'Glenmorangie Scotch — Lasanta & 18 Year, Allocations',
      metaDescription: 'Buy Glenmorangie online — The Lasanta (relaunched 2025 as a 15 Year) and 18 Year Extremely Rare. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Glenmorangie uses some of the tallest stills in Scotland, producing an unusually light, floral new-make spirit before finishing expressions like Lasanta in sherry casks for added depth.',
      faqs: [{ question: 'What changed with Glenmorangie Lasanta in 2025?', answer: "Glenmorangie relaunched Lasanta in 2025, raising its age statement from 12 to 15 years as part of a recipe update by director of whisky creation Dr. Bill Lumsden." }],
    }),
  },
  {
    categorySlug: 'scotch-whisky', hubSlug: 'talisker', brandKeywords: ['Talisker'], name: 'Talisker',
    seo: brandSeo({
      brand: 'Talisker', categoryLabel: 'Island Scotch',
      titleTag: 'Talisker — Isle of Skye Single Malt',
      h1: 'Talisker Scotch — 10 Year, Allocations',
      metaDescription: 'Buy Talisker 10 Year online — the peppery, maritime flagship from Diageo\'s most-visited distillery, on the Isle of Skye. Direct allocations at Aged & Amber.',
      hook: "Talisker is the only distillery on the Isle of Skye and one of Diageo's most-visited, known for a distinctively peppery, maritime character — part of the same Classic Malts tier as the site's Oban.",
      faqs: [{ question: 'Where is Talisker made?', answer: 'Talisker is distilled on the Isle of Skye, off Scotland\'s northwest coast, and is the only distillery on the island.' }],
    }),
  },

  // ─── IRISH ───────────────────────────────────────────
  {
    categorySlug: 'irish-whiskey', hubSlug: 'spot-whiskey', brandKeywords: ['Spot Single Pot Still', 'Green Spot', 'Yellow Spot', 'Blue Spot'], name: 'Spot Whiskey',
    seo: brandSeo({
      brand: 'Spot Whiskey', categoryLabel: 'Irish Whiskey', titleTag: 'Spot Whiskey — Green, Yellow & Blue Spot',
      h1: 'Spot Whiskey — Buy Green Spot, Yellow Spot & Blue Spot Online',
      metaDescription: 'Buy Spot whiskey online — Green Spot, Yellow Spot 12 Year, and Blue Spot 7 Year Cask Strength. Ireland’s rarest single pot still whiskeys. Direct allocations.',
      hook: 'The Spot range — named for the coloured spots of paint historically used by Dublin wine merchants Mitchell & Son to mark barrel ageing — is among Ireland’s most celebrated single pot still whiskey families, distilled at Midleton and matured in a mix of bourbon, sherry, and Madeira casks. We carry three of the range’s expressions: Green Spot, Yellow Spot 12 Year, and Blue Spot 7 Year Cask Strength.',
      transactionalCTA: 'Buy Blue Spot whiskey online — the highest buyer-intent search in the entire Irish whiskey category. Ships to 45 US states.',
      faqs: [
        { question: 'What is the Spot Whiskey range?', answer: 'A family of Irish single pot still whiskeys produced at Midleton Distillery in County Cork and distributed exclusively by Mitchell & Son — Ireland’s oldest wine and spirits merchant, established 1805. We stock three expressions: Green Spot (the classic), Yellow Spot 12 Year, and Blue Spot 7 Year Cask Strength.' },
        { question: 'What is Blue Spot?', answer: 'A 7-year-old cask strength expression (roughly 61.5% ABV) matured across bourbon, sherry, and Madeira casks — the most allocated and sought-after Spot expression we carry.' },
        { question: 'Green Spot vs Blue Spot?', answer: 'Green Spot is 7–10 years old, bottled at 40% ABV, an approachable classic. Blue Spot is cask strength at roughly 61.5% ABV, matured across three cask types, and considerably more intense and complex.' },
      ],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'jameson', brandKeywords: ['Jameson'], name: 'Jameson',
    seo: brandSeo({
      brand: 'Jameson', categoryLabel: 'Irish Whiskey',
      titleTag: 'Jameson — Original, Black Barrel & Bow Street 18 Year',
      h1: 'Jameson Irish Whiskey — Original, Black Barrel, Triple Triple & Bow Street 18 Year Cask Strength',
      metaDescription: 'Buy Jameson online — Original, Black Barrel, Triple Triple, and the rare Bow Street 18 Year Cask Strength. Direct allocations at Aged & Amber.',
      hook: 'Jameson is the world’s best-selling Irish whiskey, triple distilled and blended at Midleton Distillery in County Cork — Black Barrel, Triple Triple, and the rare Bow Street 18 Year Cask Strength sit alongside the iconic core blend.',
      faqs: [
        { question: 'What is Jameson Black Barrel?', answer: 'Finished in heavily charred (double-charred) bourbon barrels after initial maturation in ex-bourbon and sherry casks — richer, sweeter, and more complex than the core blend, bottled at 40% ABV.' },
        { question: 'Is Jameson triple distilled?', answer: 'Yes — triple distilled at the Midleton Distillery in County Cork, which creates the notably smooth, clean character that defines Jameson’s profile.' },
      ],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'redbreast', brandKeywords: ['Redbreast'], name: 'Redbreast',
    seo: brandSeo({
      brand: 'Redbreast', categoryLabel: 'Single Pot Still Irish Whiskey',
      titleTag: 'Redbreast — 12, 15, 21 Year & Lustau Edition',
      h1: 'Redbreast — 12, 15, 21 Year & Lustau Edition Single Pot Still Allocations',
      metaDescription: 'Buy Redbreast online — 12 Year, 15 Year, 21 Year, and the sherry-finished Lustau Edition. The benchmark single pot still Irish whiskey. Free on $300+.',
      hook: 'Redbreast is widely regarded as the benchmark single pot still Irish whiskey — distilled at Midleton from a mash of malted and unmalted barley, with the 12 Year, sherry-finished Lustau Edition, and rare 21 Year among our most collected releases.',
      faqs: [
        { question: 'What is Redbreast 12 Cask Strength?', answer: 'The undiluted, uncut version of the flagship 12 Year — bottled at natural barrel strength (typically 57–59% ABV) without water reduction, released annually in limited quantities.' },
        { question: 'Who makes Redbreast?', answer: 'Redbreast is produced at the Midleton Distillery in County Cork, Ireland, owned by Irish Distillers (a Pernod Ricard company). The brand dates to 1903 and is considered the benchmark expression of the single pot still Irish whiskey style.' },
      ],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'teeling', brandKeywords: ['Teeling'], name: 'Teeling',
    seo: brandSeo({
      brand: 'Teeling', categoryLabel: 'Irish Whiskey',
      titleTag: 'Teeling — Single Malt, Small Batch & 18 Year',
      h1: 'Teeling — Single Malt, Small Batch & 18 Year Renaissance Series Allocations',
      metaDescription: 'Buy Teeling online — Single Malt, Small Batch, and the rare 18 Year Renaissance Series. Dublin’s first new distillery in 125 years.',
      hook: 'Teeling was Dublin’s first new distillery in over 125 years when it opened in 2015 in the Liberties quarter, built by the Teeling family whose roots trace back to a Dublin distillery founded in 1782 — the Single Malt and rum-finished Small Batch anchor the range, with the rare 18 Year Renaissance Series topping it.',
      faqs: [
        { question: 'Who founded Teeling?', answer: 'Brothers Jack and Stephen Teeling opened the distillery in Dublin’s Liberties quarter in 2015 — the first new distillery in the city in over 125 years, and the first to distill whiskey in Dublin itself in decades.' },
        { question: 'What makes Teeling Single Malt distinctive?', answer: 'It’s matured across five different wine cask types, giving it an unusually fruity, wine-influenced profile compared to most Irish single malts.' },
      ],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'bushmills', brandKeywords: ['Bushmills'], name: 'Bushmills',
    seo: brandSeo({
      brand: 'Bushmills', categoryLabel: 'Irish Whiskey',
      titleTag: 'Bushmills — Black Bush, Original, 10, 16 & 21 Year',
      h1: 'Bushmills — Black Bush, Original, 10, 16 & 21 Year Single Malt Allocations',
      metaDescription: 'Buy Bushmills online — Original, Black Bush, 10 Year, 16 Year, and the ultra-aged 21 Year single malt. The world’s oldest licensed distillery.',
      hook: 'Bushmills holds the world’s oldest licence to distil whiskey, granted in 1608 in County Antrim, Northern Ireland — the triple-distilled Original and Black Bush blends sit alongside the 10, 16, and 21 Year single malts.',
      faqs: [
        { question: 'How old is Bushmills distillery?', answer: 'Bushmills was granted the world’s first licence to distil whiskey in 1608, though distilling on the site is believed to predate that grant. It remains in operation in County Antrim, Northern Ireland today.' },
        { question: 'What’s the difference between Bushmills Original and Black Bush?', answer: 'Original is a lighter blend of grain whiskey with a small proportion of malt. Black Bush uses a much higher proportion of aged single malt, most of it matured in Oloroso sherry casks, for a richer, fruitier profile.' },
      ],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'tullamore-dew', brandKeywords: ['Tullamore'], name: 'Tullamore D.E.W.',
    seo: brandSeo({
      brand: 'Tullamore D.E.W.', categoryLabel: 'Irish Whiskey', titleTag: 'Tullamore D.E.W. — Original, 12 Year & XO Rum Cask',
      h1: 'Tullamore D.E.W. Irish Whiskey — Original, 12 Year Special Reserve & XO Rum Cask Finish Allocations',
      metaDescription: 'Buy Tullamore D.E.W. online — Original, 12 Year Special Reserve, and XO Rum Cask Finish. Triple distilled, triple blended. Free on $300+.',
      hook: 'Tullamore D.E.W. is a triple-distilled, triple-blended Irish whiskey — combining pot still, malt, and grain whiskeys, a rare combination even in Ireland — named for 19th-century distillery owner Daniel E. Williams, whose initials still mark the label.',
      transactionalCTA: 'Buy Tullamore D.E.W. online — Original, 12 Year Special Reserve, and XO Rum Cask Finish allocations, ships to 45 US states.',
      faqs: [
        { question: 'What does Tullamore D.E.W. stand for?', answer: 'D.E.W. stands for Daniel E. Williams, a former general manager of the original Tullamore Distillery in County Offaly, Ireland, whose initials were adopted as the brand name in the 1930s. D.E.W. has also become a back-acronym for “Dew of the Morning.”' },
        { question: 'What is Tullamore D.E.W. triple blend?', answer: 'Combining three different Irish whiskey styles — grain whiskey, single malt, and single pot still whiskey — in one blend. This is rare even in Ireland.' },
        { question: 'What is the XO?', answer: 'The Original triple blend finished in premium Caribbean rum casks, bottled at 43% ABV.' },
      ],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'powers', brandKeywords: ['Powers'], name: 'Powers',
    seo: brandSeo({
      brand: 'Powers', categoryLabel: 'Irish Whiskey',
      titleTag: "Powers — John's Lane 12 Year Single Pot Still",
      h1: "Powers Irish Whiskey — John's Lane 12 Year Single Pot Still Allocations",
      metaDescription: "Buy Powers John's Lane 12 Year online — Ireland's historic higher-proof single pot still whiskey. Direct allocations, free on $300+.",
      hook: 'Powers is one of Ireland’s oldest distilling names, dating to 1791, and a longtime favourite within Ireland for its spicier, more robust single pot still character — our John’s Lane 12 Year leads the allocated range, bottled at a higher proof true to the historic Powers style.',
      faqs: [
        { question: 'What other Powers expressions exist?', answer: 'Powers’ wider range includes Gold Label and Three Swallow — we currently carry the John’s Lane 12 Year, the brand’s flagship single pot still expression.' },
      ],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'connemara', brandKeywords: ['Connemara'], name: 'Connemara',
    seo: brandSeo({
      brand: 'Connemara', categoryLabel: 'Irish Whiskey',
      titleTag: 'Connemara — Original Peated Single Malt',
      h1: 'Connemara Original Peated Single Malt Irish Whiskey Allocations',
      metaDescription: 'Buy Connemara Original Peated online — Ireland’s rare peated single malt, distilled at Cooley Distillery. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Connemara is a rarity in Irish whiskey — a peated single malt, made from barley dried over peat fires in the traditional Scotch style, giving it a smoky character almost never found in Irish whiskey. It’s distilled at the Cooley Distillery in County Louth.',
      faqs: [
        { question: 'Are there other Connemara expressions?', answer: 'Connemara’s wider range also includes Cask Strength and Turf Mór bottlings — we currently carry the Original Peated expression, the brand’s flagship.' },
      ],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'knappogue-castle', brandKeywords: ['Knappogue'], name: 'Knappogue Castle',
    seo: brandSeo({
      brand: 'Knappogue Castle', categoryLabel: 'Irish Whiskey', titleTag: 'Knappogue Castle — 12 Year & Rare 21 Year Single Malt',
      h1: 'Knappogue Castle Irish Whiskey — 12 Year & Rare 21 Year Single Malt',
      metaDescription: 'Buy Knappogue Castle online — 12 Year and rare 21 Year single malt Irish whiskey. Near-zero search competition, allocated direct.',
      hook: 'Knappogue Castle is a single malt Irish whiskey named for the restored 15th-century castle in County Clare pictured on its label — built around the 12 Year and the rare 21 Year expression.',
      transactionalCTA: 'Buy Knappogue Castle online — the 12 Year and the rare 21 Year, among the lowest-competition allocated single malts in the entire Irish whiskey category.',
      faqs: [
        { question: 'How do you pronounce Knappogue?', answer: 'Knappogue is pronounced "na-POG" — an anglicisation of the Irish "Cnapóg."' },
        { question: 'Where is Knappogue Castle whiskey made?', answer: 'At Cooley Distillery in County Louth, Ireland — now owned by Beam Suntory. The Knappogue Castle brand itself is owned by Gosling-Castle Partners.' },
      ],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: '2-gingers', brandKeywords: ['2 Gingers'], name: '2 Gingers',
    seo: brandSeo({
      brand: '2 Gingers', categoryLabel: 'Irish Whiskey',
      titleTag: '2 Gingers Whiskey — Blended Irish Whiskey',
      h1: '2 Gingers Irish Whiskey — Smooth, Easy-Mixing Blended Allocations',
      metaDescription: 'Buy 2 Gingers whiskey online — the smooth, easy-mixing blended Irish whiskey. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: '2 Gingers is a blended Irish whiskey produced at the Kilbeggan Distillery in County Westmeath, Ireland, and named by founder Kieran Folliard for his two red-haired daughters — a smooth, easy-mixing whiskey positioned as an accessible everyday pour rather than a sipping collector’s bottle.',
      faqs: [
        { question: 'What is 2 Gingers whiskey?', answer: 'A blended Irish whiskey produced at the Kilbeggan Distillery in County Westmeath, Ireland, and now part of the Beam Suntory portfolio. Named after founder Kieran Folliard’s two red-haired daughters.' },
        { question: 'What is the Big Ginger cocktail?', answer: '2 Gingers Irish whiskey over ice with a splash of ginger ale (traditionally Canada Dry), garnished with a lime wedge.' },
      ],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'midleton-very-rare', brandKeywords: ['Midleton Very Rare', 'Midleton'], name: 'Midleton Very Rare',
    seo: brandSeo({
      brand: 'Midleton Very Rare', categoryLabel: 'Irish Whiskey', titleTag: 'Midleton Very Rare — Ireland’s Original Luxury Whiskey',
      h1: 'Midleton Very Rare — Annual Vintage Release Allocations',
      metaDescription: 'Buy Midleton Very Rare online — Ireland’s original luxury whiskey, hand-selected and released as a numbered annual vintage since 1984.',
      hook: 'First released in 1984, Midleton Very Rare is a blend of the finest pot still and grain whiskeys hand-selected each year by the master distillers at Midleton Distillery in County Cork — widely credited with establishing the modern luxury tier of Irish whiskey.',
      transactionalCTA: 'Buy Midleton Very Rare online — Ireland’s original numbered annual vintage release, ships to 45 US states.',
      faqs: [
        { question: 'What is Midleton Very Rare?', answer: 'An annual vintage release first launched in 1984, widely considered Ireland’s original luxury whiskey. Each year’s blend is hand-selected by Midleton’s master distillers from a range of pot still and grain whiskey casks, then individually numbered.' },
      ],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'dingle', brandKeywords: ['Dingle'], name: 'Dingle',
    seo: brandSeo({
      brand: 'Dingle', categoryLabel: 'Irish Whiskey',
      titleTag: 'Dingle — Ireland\'s Westernmost Distillery',
      h1: 'Dingle Irish Whiskey — Single Malt Allocations',
      metaDescription: 'Buy Dingle Single Malt online — triple-distilled whiskey from Ireland\'s remote Dingle Peninsula. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Dingle Distillery sits on Ireland\'s remote Dingle Peninsula, the country\'s westernmost distillery, triple-distilling and fully maturing its single malt across bourbon and Pedro Ximénez sherry casks.',
      faqs: [{ question: 'Where is Dingle whiskey made?', answer: "Dingle is distilled on Ireland's Dingle Peninsula in County Kerry, the westernmost point of the country." }],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'kilbeggan', brandKeywords: ['Kilbeggan'], name: 'Kilbeggan',
    seo: brandSeo({
      brand: 'Kilbeggan', categoryLabel: 'Irish Whiskey',
      titleTag: 'Kilbeggan — Historic Blended Irish Whiskey',
      h1: 'Kilbeggan Irish Whiskey — Allocations',
      metaDescription: 'Buy Kilbeggan online — a budget-accessible blend from a distillery site licensed in 1757, one of Ireland\'s oldest. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Kilbeggan takes its name from a County Westmeath distillery site licensed in 1757, one of the oldest in Ireland, now blended into an easy-drinking, entry-priced whiskey.',
      faqs: [{ question: 'How old is the Kilbeggan distillery site?', answer: 'The Kilbeggan distillery site in County Westmeath was licensed in 1757, making it one of the oldest in Ireland.' }],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'method-and-madness', brandKeywords: ['Method and Madness', 'Method & Madness'], name: 'Method and Madness',
    seo: brandSeo({
      brand: 'Method and Madness', categoryLabel: 'Irish Whiskey',
      titleTag: 'Method and Madness — Experimental Midleton Whiskey',
      h1: 'Method and Madness Irish Whiskey — Allocations',
      metaDescription: 'Buy Method and Madness online — Midleton Distillery\'s experimental line, using unconventional cask finishes. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Method and Madness is Midleton Distillery\'s experimental line, encouraging its distillers to try unconventional cask types like French chestnut rarely used elsewhere in whiskey maturation.',
      faqs: [{ question: 'Who makes Method and Madness whiskey?', answer: 'Method and Madness is produced by Midleton Distillery in County Cork, the same distillery behind Jameson and Redbreast, as an experimental line.' }],
    }),
  },
  {
    categorySlug: 'irish-whiskey', hubSlug: 'writers-tears', brandKeywords: ["Writers' Tears", 'Writers Tears'], name: "Writers' Tears",
    seo: brandSeo({
      brand: "Writers' Tears", categoryLabel: 'Irish Whiskey',
      titleTag: "Writers' Tears — Copper Pot Irish Whiskey",
      h1: "Writers' Tears Irish Whiskey — Allocations",
      metaDescription: "Buy Writers' Tears online — a Copper Pot blend of pot still and malt whiskey, including limited Marsala cask finishes. Direct allocations at Aged & Amber.",
      hook: "Writers' Tears blends pot still and malt whiskey into its signature Copper Pot style, with limited-edition releases finished in unconventional casks like Sicilian Florio Marsala.",
      faqs: [{ question: "What does Writers' Tears mean?", answer: "The name references Ireland's literary tradition and the whiskey's approachable, well-rounded character." }],
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
      titleTag: 'Hibiki — Japanese Harmony, Blossom Harmony & 21 Year',
      h1: 'Hibiki — Japanese Harmony, Blossom Harmony Limited Edition & 21 Year Allocations',
      metaDescription: 'Buy Hibiki online — Japanese Harmony, the limited Blossom Harmony, and the rare 21 Year. Suntory’s flagship blend. Direct allocations.',
      hook: 'Hibiki is Suntory’s flagship blended Japanese whisky, combining malt and grain whiskies from across the Suntory distillery portfolio — the Japanese Harmony expression is designed for exceptional balance and approachability, with the seasonal Blossom Harmony Limited Edition and the rare 21 Year sitting above it.',
      faqs: [{ question: 'Why is Hibiki 17 no longer available?', answer: 'Hibiki 17 was discontinued in 2015 due to a shortage of aged Japanese whisky stocks that had been depleted during years of lower domestic demand. The global surge in Japanese whisky popularity left Suntory unable to maintain adequate stocks of 17-year-old whisky. Remaining bottles now trade at significant premiums on the secondary market.' }],
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'nikka', brandKeywords: ['Nikka'], name: 'Nikka',
    seo: brandSeo({
      brand: 'Nikka', categoryLabel: 'Japanese Whisky',
      titleTag: 'Nikka — Miyagikyo, Taketsuru, Yoichi & From The Barrel',
      h1: 'Nikka — Miyagikyo, Taketsuru, Yoichi, From The Barrel & Coffey Malt Allocations',
      metaDescription: 'Buy Nikka online — Miyagikyo, Taketsuru Pure Malt, Yoichi, From The Barrel, Days, and Coffey Malt. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Nikka was founded by Masataka Taketsuru, the distiller who trained in Scotland and helped establish Japanese whisky production itself — the Miyagikyo and Yoichi single malts represent the two distilleries at the heart of the house, alongside the Taketsuru Pure Malt named for the founder, the acclaimed From The Barrel, and the entry-level Days.',
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'hakushu', brandKeywords: ['Hakushu'], name: 'Hakushu',
    seo: brandSeo({
      brand: 'Hakushu', categoryLabel: 'Japanese Whisky',
      titleTag: 'Hakushu — 12 Year, 18 Year & Distiller’s Reserve',
      h1: 'Hakushu — 12 Year, 18 Year & Distiller’s Reserve Allocations',
      metaDescription: 'Buy Hakushu online — 12 Year, 18 Year, and Distiller’s Reserve. Suntory’s forest distillery in the Southern Japanese Alps. Direct allocations, free $300+.',
      hook: 'Hakushu, Suntory’s "Forest Distillery" set in the Southern Japanese Alps, draws its water from the surrounding woodland — producing a fresher, greener, more herbal single malt character than its sister distillery Yamazaki. Demand for the aged 12 and 18 Year expressions has pushed real-world prices well above original list pricing.',
      faqs: [
        { question: 'What does Hakushu whisky taste like?', answer: 'Hakushu is known for a crisp, green, herbal character — mint, pear, and light smoke are common notes, a result of the distillery\'s forest surroundings in the Southern Japanese Alps. It\'s typically lighter and fresher than its sister distillery Yamazaki.' },
        { question: 'Hakushu vs Yamazaki — what\'s the difference?', answer: 'Both are Suntory single malt distilleries, but Hakushu\'s mountain-forest setting produces a fresher, greener, more herbal spirit, while Yamazaki\'s single malt is typically richer and more fruit-driven. Many collectors consider them complementary rather than competing styles.' },
        { question: 'Why is Hakushu 18 so expensive?', answer: 'Hakushu 18 Year has become increasingly scarce as global demand for aged Japanese whisky has outpaced supply — the same dynamic that has driven up prices across Suntory\'s premium range. Allocated stock is limited, and real-world pricing now runs well above the original list price.' },
      ],
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
      faqs: [
        { question: 'What is the best way to drink Suntory Toki?', answer: 'Suntory Toki is specifically designed for the highball (mizuwari) — whisky poured over ice with cold sparkling water and stirred gently. Its light, crisp profile is built to stay balanced and refreshing when mixed, rather than heavily flavoured cocktails.' },
        { question: 'Suntory Toki vs Hibiki — what\'s the difference?', answer: 'Both are Suntory blends drawing on Yamazaki, Hakushu, and Chita whiskies, but Toki is a lighter, entry-level expression built specifically for mixing into highballs, while Hibiki is the premium, more complex flagship blend intended for sipping neat or on the rocks.' },
        { question: 'Is Suntory Toki a good beginner Japanese whisky?', answer: 'Yes — Toki\'s light body and clean, gently spiced profile make it one of the most approachable entry points into Japanese whisky, whether served neat, on the rocks, or as a highball.' },
      ],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'kavalan', brandKeywords: ['Kavalan'], name: 'Kavalan',
    seo: brandSeo({
      brand: 'Kavalan', categoryLabel: 'Taiwanese Whisky',
      titleTag: 'Kavalan — Taiwanese Single Malt Whisky',
      h1: 'Kavalan — Taiwan\'s Award-Winning Single Malt, Classic Allocation Coming Soon',
      metaDescription: 'Buy Kavalan online — Taiwan\'s pioneering, award-winning single malt whisky. Classic expression coming soon. Direct allocations, free $300+.',
      hook: 'Kavalan is Taiwan\'s pioneering single malt distillery, founded in 2005 — its subtropical climate accelerates maturation dramatically compared to Scotland or Japan, producing intensely fruity, fast-maturing whisky that has won blind-tasting awards against Scotch and Japanese rivals alike.',
      faqs: [{ question: 'Is Kavalan considered Japanese whisky?', answer: 'No — Kavalan is produced in Taiwan, not Japan. It is a Taiwanese single malt whisky, not Japanese whisky under the 2021 Japanese regulations. However, Kavalan is often grouped with Asian whiskies and has won numerous international awards, becoming one of the world\'s most decorated distilleries since its founding in 2005.' }],
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'togouchi', brandKeywords: ['Togouchi'], name: 'Togouchi',
    seo: brandSeo({
      brand: 'Togouchi', categoryLabel: 'Japanese Whisky',
      titleTag: 'Togouchi — Premium & 15 Year Blended Whisky',
      h1: 'Togouchi — Premium & 15 Year Tunnel-Matured Blended Whisky Allocations',
      metaDescription: 'Buy Togouchi online — Premium and 15 Year blended Japanese whisky, matured in a Hiroshima railway tunnel. Direct allocations, free $300+.',
      hook: 'Togouchi is a blended Japanese whisky matured in a decommissioned railway tunnel in Hiroshima Prefecture, where naturally stable temperature and humidity are used for maturation — the Premium Blended and 15 Year are the expressions in our allocation.',
      faqs: [
        { question: 'What makes Togouchi whisky different?', answer: 'Togouchi ages its whisky inside a decommissioned railway tunnel in the mountains of Hiroshima Prefecture, produced by Chugoku Jozo. The tunnel\'s naturally stable, cool temperature and humidity are said to give the whisky a smoother, rounder maturation than a standard warehouse.' },
        { question: 'What is the difference between Togouchi Premium and Togouchi 15 Year?', answer: 'Togouchi Premium Blended is the entry-level expression, built for everyday sipping and highballs. Togouchi 15 Year is the longer-matured expression, offering a more rounded, honeyed, and mellow character from its extended time in the tunnel.' },
      ],
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
      faqs: [
        { question: 'Is Akashi a single malt or a blended whisky?', answer: 'White Oak Distillery produces both — a single malt Akashi and a more widely available blended Akashi, which combines malt and grain whisky matured in ex-bourbon, shochu, and virgin oak casks. The blended expression is the more accessible, everyday style.' },
        { question: 'What is White Oak Distillery?', answer: 'White Oak Distillery, operated by Eigashima Shuzo in Akashi, Hyogo Prefecture, has been distilling since 1919 — making it one of Japan\'s older whisky producers, predating the larger Suntory and Nikka houses. It remains a small-scale, independent operation.' },
      ],
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'iwai', brandKeywords: ['Iwai'], name: 'Iwai',
    seo: brandSeo({
      brand: 'Iwai', categoryLabel: 'Japanese Whisky',
      titleTag: 'Iwai Whisky — Iwai 45 & Iwai Tradition',
      h1: 'Iwai Whisky — Iwai 45 & Iwai Tradition Allocations',
      metaDescription: 'Buy Iwai whisky online — Iwai 45 and Iwai Tradition from Mars Shinshu Distillery, matured in ex-bourbon oak. Direct allocations at Aged & Amber.',
      hook: 'Iwai is produced by Mars Shinshu Distillery, named for founder Kiichiro Iwai, a distiller who worked alongside Masataka Taketsuru in Japanese whisky’s earliest days. Iwai 45 is bottled at a fuller 90 proof for extra body, while Iwai Tradition is the lighter, more approachable standard blend — both matured in ex-bourbon oak.',
      faqs: [
        { question: 'What is the difference between Iwai 45 and Iwai Tradition?', answer: 'Iwai 45 is bottled at a higher 90 proof for a fuller, more bourbon-leaning body. Iwai Tradition is bottled at a lighter 80 proof, giving a softer, more easy-drinking style suited to mixing. Both are produced at Mars Shinshu Distillery and matured in ex-bourbon oak.' },
        { question: 'Who is Iwai whisky named after?', answer: 'Iwai is named for Kiichiro Iwai, a chemist and distiller who worked alongside Masataka Taketsuru — the founder of Nikka and a foundational figure in Japanese whisky — in the industry\'s earliest days. Mars Shinshu Distillery honours him with the Iwai range.' },
      ],
    }),
  },
  {
    // Informational/brand-education only: Mars Shinshu's core Komagatake and Maltage Cosmo range is NOT stocked —
    // only the sister Iwai range (separate hub above) is in our allocation. No transactional CTA or "buy"
    // framing here so this page never implies unstocked products are purchasable.
    categorySlug: 'japanese-whisky', hubSlug: 'mars-shinshu', brandKeywords: ['Mars Shinshu', 'Mars Komagatake', 'Mars Maltage', 'Mars Tsunuki'], name: 'Mars Shinshu',
    seo: brandSeo({
      brand: 'Mars Shinshu', categoryLabel: 'Japanese Whisky',
      titleTag: 'Mars Shinshu — Komagatake, Tsunuki & Iwai',
      h1: 'Mars Shinshu — Japan’s Highest-Altitude Whisky Distillery',
      metaDescription: 'Buy Mars Shinshu online — Komagatake single malt, Tsunuki single malt, and the Iwai range. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Mars Shinshu is Japan’s highest-altitude whisky distillery, set in the Japanese Alps at over 800 metres, and also operates a second, subtropical distillery in Kagoshima producing the Tsunuki single malt — a warm-climate counterpoint to Komagatake\'s mountain-matured style. The distillery also produces the more widely distributed Iwai range.',
      faqs: [
        { question: 'What is the difference between Mars Komagatake and Mars Tsunuki?', answer: 'Both are single malts from Mars Shinshu, but Komagatake is distilled at the original high-altitude Nagano site in the Japanese Alps, while Tsunuki is distilled at a second, subtropical site in Kagoshima — the warmer climate matures the whisky faster and gives it a distinct character.' },
        { question: 'Is Mars Shinshu the same as Mars Iwai?', answer: 'They\'re related but distinct lines from the same distillery. Mars Shinshu is the distillery itself, home to the Komagatake and Tsunuki single malts. Iwai is a separate, more widely distributed blended line from the same distillery, named for co-founder Kiichiro Iwai.' },
      ],
    }),
  },

  {
    categorySlug: 'japanese-whisky', hubSlug: 'chichibu', brandKeywords: ['Chichibu', "Ichiro's Malt"], name: 'Chichibu',
    seo: brandSeo({
      brand: 'Chichibu', categoryLabel: 'Japanese Whisky',
      titleTag: "Chichibu — Ichiro's Malt Cult Japanese Whisky",
      h1: 'Chichibu Whisky — Distillery II, Allocations',
      metaDescription: "Buy Chichibu online — Ichiro Akuto's cult Japanese whisky, Distillery II's 2025-debut release at a more attainable price than the original line. Direct allocations.",
      hook: "Chichibu, founded by Ichiro Akuto, is one of the most sought-after names in Japanese whisky, producing only around 60,000 liters a year — original-line bottles regularly trade for four figures on the secondary market. The 2025-introduced Distillery II line offers a more attainable entry point.",
      faqs: [{ question: 'Why is Chichibu whisky so expensive?', answer: 'Chichibu produces only around 60,000 liters a year, and cult demand for the original single malt line has pushed secondary-market prices into four figures. The newer Distillery II line is priced more accessibly.' }],
    }),
  },
  {
    categorySlug: 'japanese-whisky', hubSlug: 'fuji', brandKeywords: ['Fuji'], name: 'Fuji',
    seo: brandSeo({
      brand: 'Fuji', categoryLabel: 'Japanese Whisky',
      titleTag: 'Fuji — Kirin\'s Single Malt from Fuji Gotemba',
      h1: 'Fuji Whisky — Single Malt Allocations',
      metaDescription: 'Buy Fuji Single Malt online — Kirin\'s whisky from the Fuji Gotemba Distillery at the base of Mount Fuji. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Fuji is distilled at Kirin\'s Fuji Gotemba Distillery, sited at the base of Mount Fuji, released under a rebranded export line the company introduced to build recognition beyond Japan\'s better-known distilleries.',
      faqs: [{ question: 'Who makes Fuji whisky?', answer: 'Fuji is produced by Kirin at the Fuji Gotemba Distillery, located at the base of Mount Fuji in Shizuoka, Japan.' }],
    }),
  },

  // ─── RYE & OTHER WHISKEY ───────────────────────────────────────────
  {
    categorySlug: 'other-whiskey', hubSlug: 'whistlepig', brandKeywords: ['WhistlePig'], name: 'WhistlePig',
    seo: brandSeo({
      brand: 'WhistlePig', categoryLabel: 'Rye Whiskey',
      titleTag: 'WhistlePig — 10, 12, 15 Year & Boss Hog',
      h1: 'WhistlePig Rye — 10, 12, 15 Year, Boss Hog & PiggyBack Allocations',
      metaDescription: 'Buy WhistlePig online — 10, 12, 15 Year rye, the collector Boss Hog, and the young, feisty PiggyBack. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'WhistlePig, based on a former dairy farm in Vermont, helped drive the modern American rye whiskey revival — the 10 Year, 12 Year Old World, 15 Year, and the collector-favourite Boss Hog annual release anchor the range.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'rittenhouse', brandKeywords: ['Rittenhouse'], name: 'Rittenhouse',
    seo: brandSeo({
      brand: 'Rittenhouse', categoryLabel: 'Rye Whiskey',
      titleTag: 'Rittenhouse Rye — Bottled-in-Bond',
      h1: 'Rittenhouse Rye — Bottled-in-Bond, 100 Proof Allocations',
      metaDescription: 'Buy Rittenhouse rye online — Bottled-in-Bond, 100 proof, a bartender favorite for classic rye cocktails. Free on $300+.',
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
      faqs: [
        { question: 'What is Thomas H. Handy Sazerac Rye?', answer: "Thomas H. Handy Sazerac is the barrel-proof rye in Buffalo Trace's annual Antique Collection, named for the 19th-century New Orleans bartender credited with adding rye whiskey to the original Sazerac cocktail. Aged around six years and bottled straight from the barrel with no chill filtration or dilution — typically well above 125 proof — it's one of the most sought-after and hard-to-find ryes released each year." },
        { question: 'What is the difference between Sazerac 6 Year Rye and Thomas H. Handy?', answer: "Sazerac Rye (6 Year) is Buffalo Trace's widely available, standard-proof rye built for the Sazerac cocktail and everyday sipping. Thomas H. Handy is the barrel-proof sibling released once a year as part of the limited Buffalo Trace Antique Collection — intensely concentrated, uncut, and far more scarce." },
      ],
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
    // Informational/brand-education only: New Riff's rye lineup (Bottled-in-Bond Rye, Single Barrel Rye, Spring
    // Rye) is NOT currently stocked — only the distillery's Single Barrel Bourbon is in our allocation, filed
    // under Bourbon. No transactional CTA or "buy" framing here so this page never implies unstocked rye is
    // purchasable.
    categorySlug: 'other-whiskey', hubSlug: 'new-riff', brandKeywords: ['New Riff'], name: 'New Riff',
    seo: brandSeo({
      brand: 'New Riff', categoryLabel: 'Rye Whiskey',
      titleTag: 'New Riff Distillery — Kentucky Rye & Bourbon Guide',
      h1: 'New Riff — Non-Chill-Filtered Kentucky Rye & Bourbon',
      metaDescription: 'Learn about New Riff, the Newport, Kentucky distillery known for bonded-strength, chill-filtration-free whiskey. We carry the New Riff Single Barrel Bourbon direct.',
      transactionalCTA: 'New Riff\'s Bottled-in-Bond and Single Barrel rye are not currently part of our allocation. We do carry the distillery\'s Single Barrel Bourbon direct — browse it under Bourbon.',
      hook: 'New Riff is a Kentucky distillery just across the river from Cincinnati, bottling every release without chill-filtration at bonded-strength or higher — best known among enthusiasts for its Bottled-in-Bond rye and Single Barrel rye, alongside a well-regarded high-rye bourbon line.',
      faqs: [{ question: 'Does Aged & Amber carry New Riff rye?', answer: 'Not currently — New Riff\'s Bottled-in-Bond and Single Barrel rye are not part of our present allocation. We do carry the distillery\'s New Riff Single Barrel Bourbon, available under our Bourbon selection.' }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'high-west', brandKeywords: ['High West'], name: 'High West',
    seo: brandSeo({
      brand: 'High West', categoryLabel: 'Rye Whiskey',
      titleTag: 'High West — Double Rye & Rendezvous Rye',
      h1: 'High West Rye — Double Rye & Rendezvous Rye Allocations',
      metaDescription: 'Buy High West online — Double Rye and Rendezvous Rye, blended rye whiskeys from Utah’s first legal distillery. Free on $300+.',
      hook: 'High West, based in Park City, Utah, was the first legal distillery in the state since Prohibition — the Double Rye and Rendezvous Rye blend multiple aged rye whiskey stocks for layered, spice-driven complexity, known for High West’s creative sourcing and blending approach.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'sagamore-spirit', brandKeywords: ['Sagamore'], name: 'Sagamore Spirit',
    seo: brandSeo({
      brand: 'Sagamore Spirit', categoryLabel: 'Maryland Rye Whiskey',
      titleTag: 'Sagamore Spirit — Signature Maryland-Style Rye',
      h1: 'Sagamore Spirit — Signature Rye Whiskey Allocations',
      metaDescription: 'Buy Sagamore Spirit online — the Signature Rye reviving Maryland’s historic rye whiskey style. Direct allocations. Free shipping on $300+.',
      hook: 'Sagamore Spirit revives the once-dominant Maryland rye whiskey style, blending two proprietary rye mash bills distilled on Baltimore’s waterfront into its Signature Rye — spicier and drier than a typical Kentucky-style rye.',
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'balcones', brandKeywords: ['Balcones'], name: 'Balcones',
    seo: brandSeo({
      brand: 'Balcones', categoryLabel: 'Texas Single Malt Whisky',
      titleTag: 'Balcones — Texas Single Malt Whisky',
      h1: 'Balcones Texas Single Malt Whisky — Direct Allocations',
      metaDescription: "Buy Balcones online — the high-proof Texas single malt matured through dramatic Waco heat and temperature swings. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Balcones, founded in Waco, Texas in 2008, was the first distillery in the state to release a single malt whisky and helped pioneer the modern American craft whiskey movement. Its Hill Country climate drives extreme daily and seasonal temperature swings that accelerate barrel interaction, producing an intensely concentrated, fast-maturing single malt bottled at a robust 106 proof.",
      faqs: [
        { question: 'What makes Balcones different from Scotch single malt?', answer: "Balcones distills and matures its single malt in Waco, Texas, where dramatic temperature swings drive far more aggressive barrel interaction than Scotland's cooler, steadier climate. The whisky matures faster and hits bolder, more concentrated flavors at a younger age, and is bottled at a higher proof — 106 — than most Scotch single malts." },
        { question: 'Was Balcones the first Texas single malt whisky?', answer: "Yes — Balcones, founded in Waco in 2008, was the first legal distillery in Waco since Prohibition and the first in Texas to release a single malt whisky, helping establish Texas as a serious American whiskey-producing state." },
      ],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'bulleit-rye', brandKeywords: ['Bulleit'], name: 'Bulleit Rye',
    seo: brandSeo({
      brand: 'Bulleit Rye', categoryLabel: 'Rye Whiskey',
      titleTag: 'Bulleit Rye — 95% Rye Whiskey',
      h1: 'Bulleit 95 Rye Whiskey — Direct Allocations',
      metaDescription: "Buy Bulleit Rye online — the assertively spicy 95% rye mash bill whiskey built for classic cocktails. Not the bourbon — this is Bulleit's rye. Direct allocations, free on $300+.",
      hook: "Bulleit Rye is a distinct release from Bulleit Bourbon — built on an unusually high 95% rye mash bill for an assertively spicy, peppery profile, historically sourced from the MGP of Indiana distillery in Lawrenceburg rather than Bulleit's own Shelbyville, Kentucky facility.",
      faqs: [
        { question: 'Is Bulleit Rye the same as Bulleit Bourbon?', answer: "No — they're separate expressions. Bulleit Bourbon is a high-rye Kentucky bourbon distilled at Bulleit's own Shelbyville, Kentucky distillery. Bulleit Rye (also called Bulleit 95 Rye) is a straight rye whiskey built on a 95% rye mash bill, historically sourced from MGP of Indiana. If you're after the rye, look for '95 Rye' or 'Rye Whiskey' on the label." },
        { question: "What does Bulleit Rye's mash bill mean for flavor?", answer: "At 95% rye, Bulleit's mash bill sits near the top of what's legally distilled as rye whiskey, leaving little room for corn's sweetness. That translates to a dry, black-pepper-and-dill-forward profile that stands up well in a Manhattan or an old fashioned." },
      ],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'canadian-club', brandKeywords: ['Canadian Club'], name: 'Canadian Club',
    seo: brandSeo({
      brand: 'Canadian Club', categoryLabel: 'Canadian Whisky',
      titleTag: 'Canadian Club — 1858 Canadian Whisky',
      h1: 'Canadian Club 1858 Canadian Whisky — Direct Allocations',
      metaDescription: "Buy Canadian Club online — the historic 1858 blend from Hiram Walker, one of the whisky brands that defined the Canadian style. Direct allocations, free on $300+.",
      hook: "Canadian Club traces to 1858, when Hiram Walker began distilling and blending grain whisky in Windsor, Ontario — its light, easy-mixing, rye-tinged style became so popular across the border that 'Club Whisky' had to add 'Canadian' to its label to distinguish it from American imitators, cementing the name still used today.",
      faqs: [
        { question: 'Why is it called Canadian Club?', answer: "Hiram Walker originally marketed his whisky simply as 'Club Whisky.' It became so popular in American gentlemen's clubs that domestic distillers lobbied for a law requiring imported whisky to state its country of origin on the label — Walker responded by renaming it Canadian Club, turning a regulatory jab into one of whisky's most recognizable brand names." },
        { question: 'Is Canadian Club a rye whisky?', answer: "Canadian Club is a blended Canadian whisky — Canadian law allows the term 'rye whisky' to apply broadly to Canadian whisky blends even when rye is a minor component, rather than the majority-rye mash bill required for American rye. Canadian Club blends grain whiskies for a soft, easy-drinking profile with a touch of rye spice." },
      ],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'crown-royal', brandKeywords: ['Crown Royal'], name: 'Crown Royal',
    seo: brandSeo({
      brand: 'Crown Royal', categoryLabel: 'Canadian Whisky',
      titleTag: 'Crown Royal — Black, Reserve, XO, Northern Harvest Rye & More',
      h1: 'Crown Royal Canadian Whisky — Fine De Luxe, Black, Reserve, XO, Northern Harvest Rye & Flavored Editions',
      metaDescription: "Buy Crown Royal online — Fine De Luxe, Black, Reserve, XO, the award-winning Northern Harvest Rye, plus Apple, Peach & Vanilla. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Crown Royal has been blended at the Gimli, Manitoba distillery since 1939, when Seagram created it as a tribute to King George VI and Queen Elizabeth's royal visit to Canada — the purple velvet bag remains one of spirits' most recognizable packages. The range spans the original Fine De Luxe blend, the fuller-proof Black, the cognac-cask-finished XO, the rye-forward Northern Harvest (named 2016 World Whisky of the Year by critic Jim Murray), and a run of fruit and dessert-flavored expressions including Apple, Peach, and Vanilla.",
      faqs: [
        { question: 'What is the difference between Crown Royal Black and the original Fine De Luxe?', answer: "Black is bottled at a fuller 90 proof using toasted oak for bolder, spicier character, while Fine De Luxe is Crown Royal's original 80-proof blend of more than 50 whiskies, prized for its soft, honeyed smoothness in the classic purple bag." },
        { question: 'Why did Crown Royal Northern Harvest Rye win World Whisky of the Year?', answer: "In the Whisky Bible 2016, critic Jim Murray named Northern Harvest Rye — built on a 90% rye mash bill — his top whisky worldwide, the first time a Canadian whisky topped that ranking. It put Canadian rye back on the map for enthusiasts who had written the category off." },
        { question: 'Does Crown Royal make flavored whisky?', answer: "Yes — alongside its core Canadian whisky blends, Crown Royal produces flavored expressions including Apple, Peach, and Vanilla, all built on the brand's signature soft blended base rather than a rye-forward or bourbon-style profile." },
      ],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'fireball', brandKeywords: ['Fireball'], name: 'Fireball',
    seo: brandSeo({
      brand: 'Fireball', categoryLabel: 'Cinnamon Whisky',
      titleTag: 'Fireball — Cinnamon Whisky',
      h1: 'Fireball Cinnamon Whisky — Direct Allocations',
      metaDescription: "Buy Fireball online — the red-hot cinnamon whisky shot that became a billion-dollar brand. Produced by Sazerac. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Fireball started life in the mid-1980s as a Dr. McGillicuddy's cinnamon flavor before Sazerac, which acquired the brand in 1989, relaunched it under its own name in 2007 — the resulting cinnamon-candy shot became one of the fastest-growing spirits of the 2010s, built on a light Canadian whisky base bottled at 66 proof.",
      faqs: [
        { question: 'Is Fireball a whiskey?', answer: "Fireball is a whisky-based liqueur, not a straight whiskey — it starts from a light Canadian whisky base infused with cinnamon flavoring and sweeteners, then bottled at 66 proof (33% ABV), lower than the Canadian whisky it's built on." },
        { question: 'Who makes Fireball?', answer: "Fireball is produced by The Sazerac Company, which acquired the Dr. McGillicuddy's brand — Fireball's original name — in 1989 and rebranded it as standalone Fireball Cinnamon Whisky in 2007." },
      ],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'forty-creek', brandKeywords: ['Forty Creek'], name: 'Forty Creek',
    seo: brandSeo({
      brand: 'Forty Creek', categoryLabel: 'Canadian Whisky',
      titleTag: 'Forty Creek — Barrel Select Canadian Whisky',
      h1: 'Forty Creek Barrel Select Canadian Whisky — Direct Allocations',
      metaDescription: "Buy Forty Creek online — Barrel Select, the small-batch Canadian whisky that separately ages corn, rye, and barley before blending. Direct allocations, free on $300+.",
      hook: "Forty Creek was founded by veteran winemaker John Hall, who bought a shuttered Grimsby, Ontario distillery in 1992 and spent eight years perfecting his process before the first release in 2000 — rather than blending a single mash bill, Hall distills and ages corn, rye, and barley whiskies separately before marrying them, a technique borrowed from winemaking that gives Barrel Select its rounded, balanced character.",
      faqs: [{ question: 'What makes Forty Creek different from other Canadian whisky?', answer: "Forty Creek distills and matures corn, rye, and barley whiskies separately in different barrel types before blending them, a technique founder John Hall — a career winemaker — adapted from wine production. Most Canadian whisky blends finished whiskies together; Forty Creek's separate-aging approach is meant to preserve each grain's distinct character before marrying." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'george-dickel', brandKeywords: ['George Dickel', 'Dickel'], name: 'George Dickel',
    seo: brandSeo({
      brand: 'George Dickel', categoryLabel: 'Tennessee Whisky',
      titleTag: 'George Dickel — No. 8, No. 12 & Bottled in Bond',
      h1: 'George Dickel Tennessee Whisky — No. 8, No. 12 & 13 Year Bottled in Bond Allocations',
      metaDescription: "Buy George Dickel online — No. 8, No. 12, and the extended-aged 13 Year Bottled in Bond. Charcoal-mellowed Tennessee whisky. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "George Dickel, distilled in Tullahoma, Tennessee, is Jack Daniel's chief rival in the Lincoln County Process — sugar-maple charcoal mellowing before barreling — but chills its whisky before filtering, a practice founder George Dickel believed produced a smoother spirit. No. 8 and No. 12 anchor the everyday range, while the Bottled-in-Bond release brings a rare 13-year age statement at a robust 100 proof.",
      faqs: [
        { question: 'What is the difference between George Dickel No. 8 and No. 12?', answer: "No. 8 is bottled at a softer 80 proof for an easy, approachable sip, while No. 12 is bottled at 90 proof for a fuller-bodied, slightly bolder character. Both go through the same charcoal-mellowing process — the difference comes down to proof and barrel selection." },
        { question: "How is George Dickel different from Jack Daniel's?", answer: "Both use the Lincoln County Process of filtering new-make spirit through sugar maple charcoal before barreling, but Dickel chills the whisky before filtering it — a step founder George Dickel believed slowed the process down enough to produce a smoother result. Dickel is also produced in Tullahoma rather than Lynchburg, and historically spells 'whisky' without the 'e,' a nod to founder George Dickel's Scottish heritage." },
      ],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'jack-daniels', brandKeywords: ["Jack Daniel's", 'Jack Daniels'], name: "Jack Daniel's",
    seo: brandSeo({
      brand: "Jack Daniel's", categoryLabel: 'Tennessee Whiskey',
      titleTag: "Jack Daniel's — Old No. 7, Gentleman Jack, Single Barrel & Flavors",
      h1: "Jack Daniel's Tennessee Whiskey — Old No. 7, Gentleman Jack, Single Barrel Select, Barrel Proof Rye & Flavored Editions",
      metaDescription: "Buy Jack Daniel's online — Old No. 7, Gentleman Jack, Single Barrel Select, Single Barrel Barrel Proof Rye, plus Honey, Fire & Apple. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Jack Daniel's, distilled in Lynchburg, Tennessee since 1866, is the world's best-selling American whiskey and the whiskey that defines the Tennessee whiskey category — every drop is filtered through ten feet of sugar-maple charcoal before barreling, the Lincoln County Process that Jack Daniel learned from Nathan 'Nearest' Green, a formerly enslaved master distiller. Our allocation spans the flagship Old No. 7, the twice-mellowed Gentleman Jack, hand-picked Single Barrel Select, the cask-strength Single Barrel Barrel Proof Rye, and the flavored Tennessee Honey, Tennessee Fire, and Tennessee Apple.",
      faqs: [
        { question: 'What is the Lincoln County Process?', answer: "The Lincoln County Process is the charcoal mellowing step that legally defines Tennessee whiskey: new-make spirit is filtered drop by drop through ten feet of packed sugar-maple charcoal before it ever touches a barrel. Jack Daniel's has used this process since the distillery's founding, and it's the technique historians now credit to Nathan 'Nearest' Green, the enslaved master distiller who taught a young Jack Daniel how to make whiskey." },
        { question: "What's the difference between Jack Daniel's Old No. 7 and Gentleman Jack?", answer: "Old No. 7 is the flagship expression, charcoal mellowed once before barreling. Gentleman Jack repeats the Lincoln County Process a second time after barreling, filtering the finished whiskey again through charcoal for an extra-smooth, softer profile." },
        { question: "Is Jack Daniel's Single Barrel Barrel Proof Rye different from the regular Jack Daniel's?", answer: "Yes — it's a rye whiskey, not the standard Tennessee whiskey mash bill. Drawn from Jack Daniel's 70% rye mash bill and bottled straight from a single barrel with nothing added or removed, it comes in well above 100 proof and varies barrel to barrel, unlike the standardized 80-proof Old No. 7." },
      ],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'knob-creek-rye', brandKeywords: ['Knob Creek'], name: 'Knob Creek Rye',
    seo: brandSeo({
      brand: 'Knob Creek Rye', categoryLabel: 'Rye Whiskey',
      titleTag: 'Knob Creek Rye — 7 Year Rye Whiskey',
      h1: 'Knob Creek 7 Year Rye Whiskey — Direct Allocations',
      metaDescription: "Buy Knob Creek Rye online — not the bourbon, this is Knob Creek's full-proof, full-bodied 7 Year Rye. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Knob Creek Rye is a distinct release from Knob Creek Bourbon — a straight rye whiskey from Jim Beam's small-batch line, aged seven years and bottled at 100 proof, the Bottled-in-Bond strength, for the same uncut, full-bodied intensity that defines the Knob Creek name, in rye form.",
      faqs: [{ question: 'Is Knob Creek Rye the same as Knob Creek Bourbon?', answer: "No — they're separate expressions from the same Jim Beam small-batch line. Knob Creek Bourbon is a Kentucky straight bourbon; Knob Creek Rye is a straight rye whiskey, aged 7 years and bottled at 100 proof. Look for 'Rye Whiskey' on the label to make sure you're getting the rye." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'michters-rye', brandKeywords: ["Michter's"], name: "Michter's Rye",
    seo: brandSeo({
      brand: "Michter's Rye", categoryLabel: 'Rye Whiskey',
      titleTag: "Michter's Rye — US*1 Single Barrel Rye",
      h1: "Michter's US*1 Single Barrel Rye Whiskey — Direct Allocations",
      metaDescription: "Buy Michter's Rye online — the smooth, single barrel US*1 rye from one of American whiskey's oldest trademarks, dating to 1753. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Michter's traces its name to a Pennsylvania distillery founded in 1753 — one of the oldest whiskey trademarks in America, whose whiskey reportedly warmed George Washington's troops at Valley Forge. The modern Michter's, rebuilt in Kentucky in the early 1990s, applies the same single barrel, minimum-release philosophy to its US*1 Single Barrel Rye that it does to its bourbon: nothing is bottled until it's ready, regardless of age statement.",
      faqs: [{ question: "Is Michter's Rye the same as Michter's Bourbon?", answer: "No — they're separate single barrel expressions under the Michter's US*1 line. Michter's US*1 Bourbon is a Kentucky straight bourbon, while Michter's US*1 Single Barrel Rye is a straight rye whiskey, both released only when individual barrels are deemed ready rather than on a fixed age schedule." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'old-forester-rye', brandKeywords: ['Old Forester'], name: 'Old Forester Rye',
    seo: brandSeo({
      brand: 'Old Forester Rye', categoryLabel: 'Rye Whiskey',
      titleTag: 'Old Forester Rye — 100 Proof Rye Whiskey',
      h1: 'Old Forester 100 Proof Rye Whiskey — Direct Allocations',
      metaDescription: "Buy Old Forester Rye online — not the bourbon, this is Brown-Forman's 100 proof rye with an unusually high malted barley content. Direct allocations, free on $300+.",
      hook: "Old Forester, first bottled in 1870 by founder George Garvin Brown and America's first bottled bourbon brand, also produces a straight rye whiskey distinct from its famous bourbon — bottled at 100 proof with an unusually high malted barley content in the mash bill alongside rye grain, giving it a floral, nutty edge that sets it apart from typical Kentucky rye.",
      faqs: [{ question: 'Is Old Forester Rye the same recipe as Old Forester Bourbon?', answer: "No — Old Forester Bourbon and Old Forester Rye use different mash bills. The rye leans on a higher proportion of malted barley alongside rye grain than most competing ryes, giving it a floral, nutty character layered over classic rye pepper, distinct from the corn-forward bourbon." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'skrewball', brandKeywords: ['Skrewball'], name: 'Skrewball',
    seo: brandSeo({
      brand: 'Skrewball', categoryLabel: 'Peanut Butter Whiskey',
      titleTag: 'Skrewball — Peanut Butter Whiskey',
      h1: 'Skrewball Peanut Butter Whiskey — Direct Allocations',
      metaDescription: "Buy Skrewball online — the world's first peanut butter whiskey, born as a shot at a San Diego bar in 2018. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Skrewball started as a whimsical peanut butter-and-whiskey shot at founder Steven Yeng's Ocean Beach, San Diego restaurant before he and his wife Brittany launched it as the world's first peanut butter whiskey in 2018 — it has since become one of the fastest-growing flavored spirits in the US, built for shots, milkshakes, and dessert-style cocktails.",
      faqs: [{ question: 'Is Skrewball the first peanut butter whiskey?', answer: "Yes — Skrewball, launched in San Diego in 2018 by Steven and Brittany Yeng, is credited as the original peanut butter whiskey, a category it created and now dominates. It grew out of a novelty shot served at the couple's Ocean Beach restaurant." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'stranahans', brandKeywords: ["Stranahan's"], name: "Stranahan's",
    seo: brandSeo({
      brand: "Stranahan's", categoryLabel: 'American Single Malt',
      titleTag: "Stranahan's — Original & Sherry Cask Single Malt",
      h1: "Stranahan's American Single Malt Whiskey — Original & Sherry Cask Allocations",
      metaDescription: "Buy Stranahan's online — the Colorado Original and Pedro Ximénez Sherry Cask, from one of the pioneering American single malt distilleries. Direct allocations, free on $300+.",
      hook: "Stranahan's, founded in Denver in 2004 by rancher George Stranahan and firefighter Jess Graber, was one of the earliest American single malt whiskey distilleries — every batch is aged a minimum of four years using Colorado's Rocky Mountain water, with the flagship Original built on virgin American oak and the Sherry Cask finished in Pedro Ximénez casks for added dried-fruit richness.",
      faqs: [{ question: "What is the difference between Stranahan's Original and Sherry Cask?", answer: "Original is aged in virgin American oak for a minimum of four years, giving a malty, honeyed profile. Sherry Cask takes whiskey aged at least seven years and finishes it in Pedro Ximénez sherry casks, adding dried cherry, toasted nut, and richer sweetness on top of the base single malt character." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'uncle-nearest', brandKeywords: ['Uncle Nearest'], name: 'Uncle Nearest',
    seo: brandSeo({
      brand: 'Uncle Nearest', categoryLabel: 'Tennessee Whiskey',
      titleTag: 'Uncle Nearest — 1856, 1884 & Master Blend Edition',
      h1: 'Uncle Nearest Tennessee Whiskey — 1856 Premium Aged, 1884 Small Batch & Master Blend Edition Allocations',
      metaDescription: "Buy Uncle Nearest online — 1856 Premium Aged, 1884 Small Batch, and the cask-strength Master Blend Edition. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Uncle Nearest, launched in 2017 by founder Fawn Weaver, honors Nathan 'Nearest' Green — the enslaved master distiller who taught a young Jack Daniel the Lincoln County charcoal-mellowing process and is now recognized as America's first known Black master distiller. In just a few years it became the most awarded American whiskey brand, with expressions spanning 1856 Premium Aged, the 7-year 1884 Small Batch, and the cask-strength Master Blend Edition selected by Master Blender Victoria Eady Butler, Nearest Green's own descendant.",
      faqs: [
        { question: 'Who was Nathan "Nearest" Green?', answer: "Nathan Green, known as 'Nearest,' was an enslaved and later free master distiller in Lincoln County, Tennessee who taught a young Jack Daniel how to make whiskey, including the sugar-maple charcoal mellowing process that still defines Tennessee whiskey today. His role was largely left out of Jack Daniel's official history for over a century until it resurfaced publicly in 2016." },
        { question: 'What is the difference between Uncle Nearest 1856, 1884, and Master Blend Edition?', answer: "1856 Premium Aged is the entry expression, named for the year Nearest Green is believed to have begun distilling. 1884 Small Batch draws from barrels aged at least seven years. Master Blend Edition is the top tier — hand-selected by Master Blender Victoria Eady Butler, a descendant of Nearest Green, and bottled at full cask strength without chill filtration." },
      ],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'virginia-distillery-co', brandKeywords: ['Virginia Distillery'], name: 'Virginia Distillery Co.',
    seo: brandSeo({
      brand: 'Virginia Distillery Co.', categoryLabel: 'American Single Malt',
      titleTag: 'Virginia Distillery Co. — Courage & Conviction Single Malt',
      h1: 'Virginia Distillery Co. Courage & Conviction American Single Malt — Direct Allocations',
      metaDescription: "Buy Virginia Distillery Co. online — Courage & Conviction, a triple-cask-matured single malt from the largest dedicated American single malt distillery. Direct allocations, free $300+.",
      hook: "Virginia Distillery Co., founded in the Blue Ridge Mountains by Irish immigrant Dr. George G. Moore and now run by his son Gareth, is the largest dedicated American single malt distillery in the country and a founding member of the American Single Malt Commission that helped secure the category's federal recognition. Courage & Conviction, its flagship, matures 100% malted barley across bourbon, sherry, and cider casks for a distinctly layered single malt.",
      faqs: [{ question: 'What makes Courage & Conviction different from other American single malts?', answer: "Courage & Conviction matures across three cask types — ex-bourbon, sherry, and cider casks — before blending, a triple-cask approach that layers vanilla and oak from bourbon barrels with dried fruit richness from sherry and a subtle orchard note from cider casks. It's distilled entirely on-site at Virginia Distillery Co.'s Lovingston, Virginia facility using 100% North American malted barley." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'westward', brandKeywords: ['Westward'], name: 'Westward',
    seo: brandSeo({
      brand: 'Westward', categoryLabel: 'American Single Malt',
      titleTag: 'Westward — American Single Malt & Cask Strength',
      h1: 'Westward American Single Malt Whiskey — Original & Cask Strength Allocations',
      metaDescription: "Buy Westward online — the beer-brewed American single malt and its bolder Cask Strength sibling, from Portland's House Spirits Distillery. Direct allocations, free on $300+.",
      hook: "Westward, produced by House Spirits Distillery in Portland, Oregon since 2004, is built more like a craft beer than a traditional whisky — the mash is fermented with American ale yeast into what's essentially an artisanal pale ale before double pot distillation, giving Westward's single malt a distinctly beer-forward, malty character. Cask Strength bottles select barrels undiluted for a bolder, more intense take on the same house style.",
      faqs: [{ question: 'Why does Westward taste different from other single malts?', answer: "Westward is fermented with American ale yeast, the same approach used to brew pale ale, rather than the distiller's yeast typical of Scotch production. Founders Christian Krogstad and Thomas Mooney built the whiskey around Pacific Northwest brewing culture as much as traditional distilling, giving Westward a noticeably malty, beer-forward character." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'bird-dog', brandKeywords: ['Bird Dog'], name: 'Bird Dog',
    seo: brandSeo({
      brand: 'Bird Dog', categoryLabel: 'Flavored Whiskey',
      titleTag: 'Bird Dog — Blackberry Whiskey',
      h1: 'Bird Dog Blackberry Whiskey — Direct Allocations',
      metaDescription: "Buy Bird Dog Blackberry Whiskey online — Kentucky whiskey infused with ripe blackberry, built for shots and easy mixing. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Bird Dog, produced by Western Spirits Beverage Company out of Bardstown, Kentucky, was one of the brands that helped pioneer the modern flavored-whiskey category — Blackberry blends white-oak-aged Kentucky whiskey with natural blackberry flavoring for a sweet, mixable pour built for shots and casual sipping.",
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'boulder-spirits', brandKeywords: ['Boulder Spirits'], name: 'Boulder Spirits',
    seo: brandSeo({
      brand: 'Boulder Spirits', categoryLabel: 'American Single Malt',
      titleTag: 'Boulder Spirits — High-Altitude American Single Malt',
      h1: 'Boulder Spirits American Single Malt Whiskey — Direct Allocations',
      metaDescription: "Buy Boulder Spirits online — a high-altitude Colorado single malt built on 100% malted barley and Scottish-style pot distillation. Direct allocations, free on $300+.",
      hook: "Boulder Spirits, distilled at over 5,300 feet in Boulder, Colorado on a Scottish-built Forsyths copper pot still, applies traditional Scotch methods — 100% malted barley, twice pot distilled — to a distinctly high-altitude American single malt, where the thinner mountain air and freshly charred American oak drive deep, fast wood interaction.",
      faqs: [{ question: 'Is Boulder Spirits made using Scotch methods?', answer: "Boulder Spirits uses a Scottish-built Forsyths copper pot still and a 100% malted barley mash bill much like traditional Scotch production, but matures its whiskey in freshly charred American oak rather than used casks, and distills at over 5,300 feet of elevation in Boulder, Colorado — a combination that gives it a distinctly American character despite the Scotch-inspired process." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'del-bac', brandKeywords: ['Del Bac'], name: 'Del Bac',
    seo: brandSeo({
      brand: 'Del Bac', categoryLabel: 'American Single Malt',
      titleTag: 'Del Bac — Dorado Mesquite Smoked Single Malt',
      h1: 'Del Bac Dorado Mesquite Smoked American Single Malt Whiskey — Direct Allocations',
      metaDescription: "Buy Del Bac online — Dorado, a desert single malt smoked over Sonoran mesquite instead of peat. From Tucson's Hamilton Distillers. Direct allocations, free on $300+.",
      hook: "Whiskey Del Bac, made by Hamilton Distillers in Tucson, Arizona, was born from a simple question: why smoke malt over peat instead of mesquite? Founder Stephen Paul, a furniture maker who spent decades burning mesquite scraps, taught himself to malt his own barley over the wood — Dorado is the resulting smoked expression, double-distilled and aged in Arizona's desert heat for a savory, smoky single malt unlike anything from Scotland.",
      faqs: [{ question: 'What is mesquite-smoked whiskey?', answer: "Instead of drying malted barley over peat, the traditional Scotch method, Del Bac smokes its barley over Sonoran Desert mesquite wood — a technique founder Stephen Paul developed himself after no commercial maltster offered it. The result carries a savory, campfire-like smoke distinct from peat's earthier, medicinal character." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'jp-wisers', brandKeywords: ["J.P. Wiser's", 'JP Wiser'], name: "J.P. Wiser's",
    seo: brandSeo({
      brand: "J.P. Wiser's", categoryLabel: 'Canadian Whisky',
      titleTag: "J.P. Wiser's — Deluxe, 15 Year & 24 Year",
      h1: "J.P. Wiser's Canadian Whisky — Deluxe, 15 Year & 24 Year Allocations",
      metaDescription: "Buy J.P. Wiser's online — the everyday Deluxe blend plus the award-winning 15 Year and ultra-aged 24 Year. Canadian whisky since 1857. Direct allocations, free $300+.",
      hook: "J.P. Wiser's traces to 1857, when John Philip Wiser began distilling in Prescott, Ontario before the brand found its long-term home at the Hiram Walker distillery in Windsor — under Master Blender Dr. Don Livermore, the range now spans the easy-drinking Deluxe, the gold-medal 15 Year, and the rare, decades-deep 24 Year, all blends of aged corn and rye whiskies.",
      faqs: [
        { question: "How old is J.P. Wiser's whisky?", answer: "J.P. Wiser's dates to 1857, when founder John Philip Wiser began running a distillery in Prescott, Ontario, making it one of Canada's oldest whisky names. The brand later moved production to the Hiram Walker distillery in Windsor, Ontario, where it's made today." },
        { question: "What is the difference between J.P. Wiser's Deluxe, 15 Year, and 24 Year?", answer: "Deluxe is the everyday blend, using corn and rye whiskies aged five to nine years for a light, mixable style. 15 Year is a gold-medal-winning step up, blended from whiskies aged a minimum of fifteen years. 24 Year is the flagship rarity, layering decades-old rye and corn stocks for the deepest, most complex expression in the range." },
      ],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'mccarthys', brandKeywords: ["McCarthy's"], name: "McCarthy's",
    seo: brandSeo({
      brand: "McCarthy's", categoryLabel: 'American Single Malt',
      titleTag: "McCarthy's — Oregon Single Malt Whiskey",
      h1: "McCarthy's Oregon Single Malt Whiskey — Direct Allocations",
      metaDescription: "Buy McCarthy's online — Clear Creek Distillery's pioneering peated single malt, made with malted barley imported from Scotland. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "McCarthy's Oregon Single Malt, produced by Clear Creek Distillery in Portland since the early 1990s, was one of the first American whiskeys to use genuinely peated malt — importing peat-smoked barley from Scotland and distilling it in small copper pots before three years of maturation in Oregon oak and used bourbon barrels, predating the current American single malt boom by decades.",
      faqs: [{ question: "Is McCarthy's a peated whiskey?", answer: "Yes — McCarthy's is distilled from malted barley that's peat-smoked in Scotland before being shipped to Clear Creek Distillery in Portland, Oregon, giving it a genuine campfire-smoke character closer to Islay Scotch than most other American single malts, which typically skip peat altogether." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'nelsons-green-brier', brandKeywords: ["Nelson's Green Brier"], name: "Nelson's Green Brier",
    seo: brandSeo({
      brand: "Nelson's Green Brier", categoryLabel: 'Tennessee Whiskey',
      titleTag: "Nelson's Green Brier — Tennessee Whiskey",
      h1: "Nelson's Green Brier Tennessee Whiskey — Direct Allocations",
      metaDescription: "Buy Nelson's Green Brier online — the revived pre-Prohibition wheated Tennessee whiskey, brought back by Charles Nelson's descendants in 2014. Direct allocations, free $300+.",
      hook: "Charles Nelson built his Green Brier Distillery into Tennessee's largest sour mash whiskey producer in the 1880s before Prohibition shut it down in 1909 — it sat dormant for over a century until his great-great-great-grandsons Charlie and Andy Nelson revived it in Nashville in 2014, reviving the family's original wheated mash bill and Lincoln County charcoal-mellowing process.",
      faqs: [{ question: 'Who was Charles Nelson?', answer: "Charles Nelson was a 19th-century Nashville businessman who built Green Brier Distillery into the largest sour mash whiskey producer in Robertson County, Tennessee by the 1880s, before statewide Prohibition forced its closure in 1909. His great-great-great-grandsons Charlie and Andy Nelson revived the family distillery in 2014 using his original wheated recipe." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'ole-smoky', brandKeywords: ['Ole Smoky'], name: 'Ole Smoky',
    seo: brandSeo({
      brand: 'Ole Smoky', categoryLabel: 'Flavored Whiskey',
      titleTag: 'Ole Smoky — Salty Caramel Whiskey',
      h1: 'Ole Smoky Salty Caramel Whiskey — Direct Allocations',
      metaDescription: "Buy Ole Smoky online — Salty Caramel, a dessert-style flavored whiskey from Tennessee's first legal moonshine distillery. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Ole Smoky opened in Gatlinburg in 2010 as the first federally licensed distillery in East Tennessee history, after a 2009 change in state law finally legalized distilling there — best known for moonshine, the brand has since expanded into flavored whiskeys like Salty Caramel, blending buttery caramel and sea salt over its Tennessee whiskey base.",
      faqs: [{ question: 'Is Ole Smoky a moonshine or a whiskey brand?', answer: "Both — Ole Smoky launched in 2010 as Tennessee's first legal moonshine distillery and remains best known for unaged corn moonshine, but has since built out a full flavored whiskey line, including Salty Caramel, made from Tennessee whiskey blended with buttery caramel and sea salt flavoring." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'proper-no-twelve', brandKeywords: ['Proper No. Twelve', 'Proper Twelve'], name: 'Proper No. Twelve',
    seo: brandSeo({
      brand: 'Proper No. Twelve', categoryLabel: 'Flavored Irish Whiskey',
      titleTag: 'Proper No. Twelve — Irish Apple Whiskey',
      h1: 'Proper No. Twelve Irish Apple Whiskey — Direct Allocations',
      metaDescription: "Buy Proper No. Twelve Irish Apple online — a tart apple infusion over the Dublin blended Irish whiskey named for Crumlin, Dublin 12. Direct allocations, free on $300+.",
      hook: "Proper No. Twelve takes its name from Dublin 12, the postal district that includes Crumlin, and launched in 2018 as a Dublin-blended Irish whiskey now majority-owned by Proximo Spirits — Irish Apple layers a crisp apple infusion over the core blend for a light, chillable sipper.",
      faqs: [{ question: 'What does "No. Twelve" refer to?', answer: "The name refers to Dublin 12, the postal district covering Crumlin, the Dublin neighborhood the brand's founders grew up in. Proper No. Twelve launched in 2018 and is produced as a blended Irish whiskey." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'seagrams-vo', brandKeywords: ["Seagram's VO", 'Seagrams VO'], name: "Seagram's VO",
    seo: brandSeo({
      brand: "Seagram's VO", categoryLabel: 'Canadian Whisky',
      titleTag: "Seagram's VO — Canadian Whisky",
      h1: "Seagram's VO Canadian Whisky — Direct Allocations",
      metaDescription: "Buy Seagram's VO online — the light-bodied Canadian blend introduced in 1913 as a special \"Very Own\" reserve. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Seagram's VO, first introduced in 1913 as a special 'Very Own' reserve blend, is one of Canadian whisky's most enduring names — blended from whiskies aged a minimum of six years at the historic Gimli, Manitoba distillery for a light, easy-drinking style that has anchored North American bars for over a century.",
      faqs: [{ question: 'What does "VO" stand for in Seagram\'s VO?', answer: "VO stands for 'Very Own' — the whisky was originally created in 1913 as a special reserve blend, distinct from Seagram's standard offerings, and the name stuck as the brand grew into one of Canada's best-known whisky exports." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'alberta-premium', brandKeywords: ['Alberta Premium'], name: 'Alberta Premium',
    seo: brandSeo({
      brand: 'Alberta Premium', categoryLabel: 'Canadian Whisky',
      titleTag: 'Alberta Premium — 100% Rye Canadian Whisky',
      h1: 'Alberta Premium Rye — Allocations',
      metaDescription: 'Buy Alberta Premium online — a 100% rye Canadian whisky and cult favorite, especially the Cask Strength variant. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Alberta Premium is one of the few widely available Canadian whiskies made from 100% rye grain rather than a corn-based blend, giving it a spicier, more assertive character.',
      faqs: [{ question: 'What makes Alberta Premium different from other Canadian whisky?', answer: 'Alberta Premium is distilled from 100% rye grain, unlike most Canadian whisky, which blends in corn — giving it a spicier, more rye-forward character.' }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'angels-envy-rye', brandKeywords: ["Angel's Envy Rye"], name: "Angel's Envy",
    seo: brandSeo({
      brand: "Angel's Envy", categoryLabel: 'Rye Whiskey',
      titleTag: "Angel's Envy Rye — Rum & Port Cask Finished",
      h1: "Angel's Envy Rye — Allocations",
      metaDescription: "Buy Angel's Envy Rye online — the rye sibling to the brand's cask-finished bourbon, finished in rum and port casks. Direct allocations at Aged & Amber. Free $300+.",
      hook: "Angel's Envy Rye applies the same cask-finishing philosophy as the brand's flagship bourbon to rye whiskey, finishing in Caribbean rum and port casks for a fruitier counterpoint to the grain's natural spice.",
      faqs: [{ question: 'Is Angel\'s Envy Rye finished the same way as their bourbon?', answer: "Yes — Angel's Envy Rye is finished in rum and port casks, following the same cask-finishing approach the brand is known for with its bourbon." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'frey-ranch', brandKeywords: ['Frey Ranch'], name: 'Frey Ranch',
    seo: brandSeo({
      brand: 'Frey Ranch', categoryLabel: 'Rye Whiskey',
      titleTag: 'Frey Ranch — Farm-to-Bottle Nevada Rye',
      h1: 'Frey Ranch Whiskey — Bottled-in-Bond Rye Allocations',
      metaDescription: 'Buy Frey Ranch online — a genuinely farm-to-bottle Nevada rye, grown, distilled, aged, and bottled on the same estate. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Frey Ranch grows its own rye on its Nevada farm, then distills, ages, and bottles it entirely on-site — a genuinely rare farm-to-bottle model in American whiskey.',
      faqs: [{ question: 'What makes Frey Ranch a "farm-to-bottle" whiskey?', answer: 'Frey Ranch grows its own grain on its Nevada farm and distills, ages, and bottles the whiskey entirely on the same property — a rare, fully vertically integrated model in American whiskey.' }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'journeyman', brandKeywords: ['Journeyman'], name: 'Journeyman Distillery',
    seo: brandSeo({
      brand: 'Journeyman Distillery', categoryLabel: 'Craft American Whiskey',
      titleTag: 'Journeyman Distillery — Featherbone Bourbon',
      h1: 'Journeyman Whiskey — Featherbone Bourbon, Allocations',
      metaDescription: 'Buy Journeyman Featherbone Bourbon online — handmade, organic craft bourbon from a converted 19th-century Michigan factory. Direct allocations at Aged & Amber.',
      hook: "Journeyman Distillery operates out of the former Featherbone Factory in Three Oaks, Michigan — a 19th-century corset-stay manufacturer the whiskey is named for.",
      faqs: [{ question: 'Where is Journeyman whiskey made?', answer: 'Journeyman Distillery is located in Three Oaks, Michigan, inside the former Featherbone Factory building.' }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'lot-no-40', brandKeywords: ['Lot No. 40', 'Lot 40'], name: 'Lot No. 40',
    seo: brandSeo({
      brand: 'Lot No. 40', categoryLabel: 'Canadian Whisky',
      titleTag: 'Lot No. 40 — 100% Rye Canadian Whisky',
      h1: 'Lot No. 40 Rye — Allocations',
      metaDescription: 'Buy Lot No. 40 online — a rare 100% rye Canadian whisky, pot-distilled by the historic Hiram Walker distillery. Direct allocations at Aged & Amber. Free $300+.',
      hook: "Lot No. 40 is distilled entirely from rye grain using pot stills at Hiram Walker's historic Windsor, Ontario distillery — a departure from the corn-based blends that dominate Canadian whisky.",
      faqs: [{ question: 'Is Lot No. 40 a rye or a blend?', answer: 'Lot No. 40 is distilled from 100% rye grain using pot stills, unlike most Canadian whisky, which blends in corn.' }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'lost-lantern', brandKeywords: ['Lost Lantern'], name: 'Lost Lantern',
    seo: brandSeo({
      brand: 'Lost Lantern', categoryLabel: 'Independent Bottler',
      titleTag: 'Lost Lantern — American Independent Bottler',
      h1: 'Lost Lantern Whiskey — Allocations',
      metaDescription: 'Buy Lost Lantern online — an independent bottler sourcing and blending single malt whiskey from craft distilleries nationwide. Direct allocations at Aged & Amber.',
      hook: 'Lost Lantern operates in the Scottish independent-bottler tradition — rather than distilling its own spirit, it sources and blends casks from craft distilleries across the country.',
      faqs: [{ question: 'Does Lost Lantern distill its own whiskey?', answer: "No — Lost Lantern is an independent bottler that sources and blends whiskey from other American craft distilleries, similar to the independent-bottler tradition in Scotch whisky." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'old-overholt', brandKeywords: ['Old Overholt'], name: 'Old Overholt',
    seo: brandSeo({
      brand: 'Old Overholt', categoryLabel: 'Rye Whiskey',
      titleTag: "Old Overholt — America's Oldest Whiskey Brand",
      h1: 'Old Overholt Rye — Allocations',
      metaDescription: "Buy Old Overholt online — America's oldest continuously produced whiskey brand, dating to 1810, now a budget rye staple. Direct allocations at Aged & Amber. Free $300+.",
      hook: 'Old Overholt traces its name to 1810, making it the oldest continuously produced whiskey brand in the United States.',
      faqs: [{ question: 'How old is the Old Overholt brand?', answer: 'Old Overholt dates to 1810, making it the oldest continuously produced whiskey brand in the United States.' }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'redemption', brandKeywords: ['Redemption'], name: 'Redemption',
    seo: brandSeo({
      brand: 'Redemption', categoryLabel: 'Rye Whiskey',
      titleTag: 'Redemption Rye — High-Rye Craft Whiskey',
      h1: 'Redemption Rye — Allocations',
      metaDescription: 'Buy Redemption Rye online — an established, widely-available craft rye built for classic cocktails. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Redemption Rye is distilled from a high-rye mash bill, widely available and priced accessibly for both sipping and classic rye cocktails.',
      faqs: [{ question: 'Is Redemption Rye good for cocktails?', answer: "Yes — its high-rye mash bill and accessible price make it a popular choice for classic rye cocktails like the Manhattan and Sazerac." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'templeton', brandKeywords: ['Templeton'], name: 'Templeton',
    seo: brandSeo({
      brand: 'Templeton', categoryLabel: 'Rye Whiskey',
      titleTag: 'Templeton Rye — "The Good Stuff"',
      h1: 'Templeton Rye — Allocations',
      metaDescription: 'Buy Templeton Rye online — an Iowa rye brand built on real Prohibition-era bootlegging history. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Templeton Rye trades on its hometown's real Prohibition-era history — Templeton, Iowa was a documented bootlegging hotspot — branding itself \"The Good Stuff.\"",
      faqs: [{ question: 'Why is Templeton Rye called "The Good Stuff"?', answer: 'The nickname references the real Prohibition-era moonshine reportedly made in Templeton, Iowa, which the brand is named after.' }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'wilderness-trail', brandKeywords: ['Wilderness Trail'], name: 'Wilderness Trail',
    seo: brandSeo({
      brand: 'Wilderness Trail', categoryLabel: 'Rye Whiskey',
      titleTag: 'Wilderness Trail — Sweet Mash Kentucky Rye',
      h1: 'Wilderness Trail Rye — Allocations',
      metaDescription: 'Buy Wilderness Trail online — Kentucky craft rye distilled using a proprietary sweet mash process, including a Bottled-in-Bond tier. Direct allocations at Aged & Amber.',
      hook: "Wilderness Trail distills its rye using founder Shane Baker's proprietary sweet mash fermentation process — a technique credited with producing a smoother, more consistent whiskey than the industry-standard sour mash approach.",
      faqs: [{ question: 'What is sweet mash fermentation?', answer: "Wilderness Trail's proprietary sweet mash process uses fresh yeast for each fermentation rather than recycling backset from a previous batch (the industry-standard sour mash method), which the distillery says produces a more consistent result." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'woodford-reserve', brandKeywords: ['Woodford Reserve'], name: 'Woodford Reserve',
    seo: brandSeo({
      brand: 'Woodford Reserve', categoryLabel: 'Rye Whiskey',
      titleTag: 'Woodford Reserve Rye — Triple Pot Still Distilled',
      h1: 'Woodford Reserve Rye — Allocations',
      metaDescription: 'Buy Woodford Reserve Rye online — the rye sibling to the brand\'s bourbon, from the same historic triple-copper-pot-still distillery. Direct allocations at Aged & Amber.',
      hook: "Woodford Reserve Rye applies the distillery's triple-copper-pot-still process to a rye mash bill, from the same historic Kentucky distillery as the brand's bourbon.",
      faqs: [{ question: 'Is Woodford Reserve Rye made the same way as their bourbon?', answer: "Yes — Woodford Reserve Rye is distilled using the same triple-copper-pot-still process at the same historic Versailles, Kentucky distillery as the brand's bourbon." }],
    }),
  },
  {
    categorySlug: 'other-whiskey', hubSlug: 'woodinville', brandKeywords: ['Woodinville'], name: 'Woodinville',
    seo: brandSeo({
      brand: 'Woodinville', categoryLabel: 'Rye Whiskey',
      titleTag: 'Woodinville — Grain-to-Glass Washington Rye',
      h1: 'Woodinville Rye — Allocations',
      metaDescription: 'Buy Woodinville online — 100% rye whiskey grown, distilled, and aged entirely at the Washington State distillery, including 6 and 8 Year releases. Direct allocations.',
      hook: "Woodinville Whiskey Co. distills its flagship rye from 100% rye grain grown on the company's own farm in eastern Washington, then pot-distills and ages it at the Woodinville facility for a genuinely grain-to-glass product.",
      faqs: [{ question: 'Where does Woodinville source its rye grain?', answer: "Woodinville grows its own rye on a company-owned farm in eastern Washington, making its whiskey a genuinely grain-to-glass product distilled and aged at the Woodinville, Washington facility." }],
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
  {
    categorySlug: 'tequila-mezcal', hubSlug: '1800-tequila', brandKeywords: ['1800 Tequila', '1800 Añejo', '1800 Reposado', '1800 Silver', '1800 Cristalino'], name: '1800 Tequila',
    seo: brandSeo({
      brand: '1800 Tequila', categoryLabel: 'Tequila',
      titleTag: '1800 Tequila — Silver, Reposado, Añejo & Cristalino',
      h1: '1800 Tequila — Silver, Reposado, Añejo & Cristalino Añejo Allocations',
      metaDescription: 'Buy 1800 Tequila online — Silver, Reposado, Añejo, and the port-cask-finished Cristalino Añejo. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "1800 Tequila takes its name from 1800, the year tequila was first successfully aged in oak — a nod from its founders, the Beckmann family (also behind José Cuervo), to the origins of aged tequila. The range spans an unaged Silver through Reposado, Añejo, and a port-cask-finished Cristalino.",
      faqs: [
        { question: 'Who makes 1800 Tequila?', answer: "1800 Tequila is produced by the Beckmann family, the same family that owns José Cuervo — one of tequila's oldest and largest producers. The 1800 name commemorates the year tequila was first aged in oak casks." },
        { question: 'What is 1800 Cristalino?', answer: "1800 Cristalino Añejo is an aged tequila that is charcoal-filtered after a finish in port wine casks to strip out its color while retaining the vanilla, caramel, and oak character developed during barrel aging." },
      ],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'cazadores', brandKeywords: ['Cazadores'], name: 'Cazadores',
    seo: brandSeo({
      brand: 'Cazadores', categoryLabel: 'Tequila',
      titleTag: 'Cazadores Tequila — Blanco & Reposado',
      h1: 'Cazadores Tequila — Highland Blanco & Reposado Allocations',
      metaDescription: 'Buy Cazadores online — herbal, highland-grown Blanco and Reposado tequila from Arandas, Jalisco. Owned by Bacardi. Direct allocations, free $300+.',
      hook: 'Cazadores was created in 1922 by Don José María Bañuelos in Arandas, in the highlands (Los Altos) of Jalisco, and has been part of Bacardi Limited since 2002 — the double-distilled, double-fermented recipe is largely unchanged, prized for its herbal, peppery highland agave character.',
      faqs: [{ question: 'Who owns Cazadores?', answer: 'Cazadores has been owned by Bacardi Limited since 2002. The brand was originally founded in 1922 by Don José María Bañuelos in Arandas, in the highlands of Jalisco, and still uses double distillation and double fermentation.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'el-jimador', brandKeywords: ['El Jimador'], name: 'El Jimador',
    seo: brandSeo({
      brand: 'El Jimador', categoryLabel: 'Tequila',
      titleTag: 'El Jimador Tequila — Blanco, Reposado & Añejo',
      h1: 'El Jimador Tequila — Blanco, Reposado & Añejo Allocations',
      metaDescription: "Buy El Jimador online — Blanco, Reposado, and Añejo from Casa Herradura. Mexico's #1-selling tequila. Direct allocations at Aged & Amber. Free $300+.",
      hook: "El Jimador launched in 1994 from Casa Herradura's distillery in Amatitán, Jalisco, named for the jimador — the skilled field worker who harvests agave by hand. Owned by Brown-Forman since its 2007 acquisition of Casa Herradura, it's the best-selling tequila in Mexico.",
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'espolon', brandKeywords: ['Espolòn', 'Espolon'], name: 'Espolòn',
    seo: brandSeo({
      brand: 'Espolòn', categoryLabel: 'Tequila',
      titleTag: 'Espolòn Tequila — Blanco, Reposado & Añejo',
      h1: 'Espolòn Tequila — Blanco, Reposado & Añejo Skull-Label Allocations',
      metaDescription: 'Buy Espolòn online — peppery highland Blanco, Reposado, and Añejo, famous for its calavera skull-label bottle. Direct allocations at Aged & Amber. Free $300+.',
      hook: "Espolòn was founded by master distiller Cirilo Oropeza at the Casa San Nicolás distillery in Los Altos, Jalisco, and is instantly recognizable for label art paying tribute to Mexican printmaker José Guadalupe Posada's calavera skull illustrations. Campari Group acquired the brand in 2009.",
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'herradura', brandKeywords: ['Herradura'], name: 'Herradura',
    seo: brandSeo({
      brand: 'Herradura', categoryLabel: 'Tequila',
      titleTag: 'Herradura Tequila — Silver, Reposado, Añejo & Suprema',
      h1: 'Herradura Tequila — Silver, Reposado, Añejo & Suprema Extra Añejo Allocations',
      metaDescription: "Buy Herradura online — Silver, Reposado, Añejo, and the ultra-aged Suprema Extra Añejo. Direct allocations from one of tequila's oldest distilleries. Free $300+.",
      hook: "Herradura has distilled tequila at the Hacienda San José del Refugio in Amatitán, Jalisco since 1870, and pioneered both the reposado category (1974) and the extra añejo category (1995) — its Silver, Reposado, Añejo, and Suprema range are aged well beyond the legal minimums. Brown-Forman has owned the brand since 2007.",
      faqs: [{ question: 'Did Herradura invent reposado tequila?', answer: "Yes — Herradura released the first commercially labeled reposado tequila in 1974, resting it in oak longer than the category's legal minimum. It went on to launch the first extra añejo tequila, Selección Suprema, in 1995." }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'jose-cuervo', brandKeywords: ['José Cuervo', 'Jose Cuervo'], name: 'José Cuervo',
    seo: brandSeo({
      brand: 'José Cuervo', categoryLabel: 'Tequila',
      titleTag: 'José Cuervo — Especial Gold, Silver & Reserva de la Familia',
      h1: 'José Cuervo Tequila — Especial Gold, Especial Silver & Reserva de la Familia Extra Añejo Allocations',
      metaDescription: "Buy José Cuervo online — Especial Gold and Silver, plus the prestige Reserva de la Familia Extra Añejo. World's best-selling tequila. Direct allocations, free $300+.",
      hook: "José Cuervo has distilled at La Rojeña — the oldest active distillery in Latin America, founded in 1758 — since the 18th century, and remains family-owned by the Beckmann descendants of Don José Antonio de Cuervo. The everyday Especial Gold and Silver sit alongside the annually released, prestige Reserva de la Familia Extra Añejo.",
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'lalo', brandKeywords: ['LALO'], name: 'LALO',
    seo: brandSeo({
      brand: 'LALO', categoryLabel: 'Tequila',
      titleTag: 'LALO Tequila — Additive-Free Highland Blanco',
      h1: 'LALO Blanco Tequila — Additive-Free Highland Allocations',
      metaDescription: "Buy LALO Tequila online — a single, additive-free highland Blanco from Don Julio González's grandson. Direct allocations at Aged & Amber. Free $300+.",
      hook: "LALO was founded by Eduardo 'Lalo' González — grandson of Don Julio González, who created the premium tequila category — alongside David Carballido. The brand produces a single, additive-free Blanco made only from agave, yeast, and water, favored by bartenders for its purity.",
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'tears-of-llorona', brandKeywords: ['Tears of Llorona', 'Llorona'], name: 'Tears of Llorona',
    seo: brandSeo({
      brand: 'Tears of Llorona', categoryLabel: 'Tequila',
      titleTag: 'Tears of Llorona — Extra Añejo Tequila',
      h1: 'Tears of Llorona Extra Añejo Tequila — Multi-Cask Allocations',
      metaDescription: 'Buy Tears of Llorona online — an ultra-premium extra añejo aged roughly five years across Scotch, sherry, and brandy casks. Direct allocations, free $300+.',
      hook: 'Tears of Llorona is an ultra-premium extra añejo created by German González — the master distiller behind Chinaco — aged roughly five years and finished across a rotation of Scotch, sherry, and brandy/Cognac casks for exceptional complexity.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'tequila-ocho', brandKeywords: ['Tequila Ocho'], name: 'Tequila Ocho',
    seo: brandSeo({
      brand: 'Tequila Ocho', categoryLabel: 'Tequila',
      titleTag: 'Tequila Ocho — Plata, Reposado & Añejo',
      h1: 'Tequila Ocho — Single-Estate Plata, Reposado & Añejo Allocations',
      metaDescription: "Buy Tequila Ocho online — Plata, Reposado, and Añejo, tequila's original single-estate, vintage-dated release. Direct allocations at Aged & Amber. Free $300+.",
      hook: 'Tequila Ocho was created by fourth-generation distiller Carlos Camarena and importer Tomas Estes as the first single-estate, vintage-dated tequila — each release names the specific highland ranch and harvest year behind the bottle, prioritizing agave terroir over blending.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'teremana', brandKeywords: ['Teremana'], name: 'Teremana',
    seo: brandSeo({
      brand: 'Teremana', categoryLabel: 'Tequila',
      titleTag: 'Teremana Tequila — Blanco & Reposado',
      h1: 'Teremana Tequila — Blanco & Reposado Allocations',
      metaDescription: 'Buy Teremana online — Dwayne Johnson\'s slow-roasted highland Blanco and whiskey-barrel-aged Reposado. Direct allocations at Aged & Amber. Free $300+.',
      hook: "Teremana was founded by Dwayne 'The Rock' Johnson and partners, produced with the López family in Jalisco's highlands and launched in 2020 to one of the fastest-selling spirits debuts in US history — Mast-Jägermeister now handles its global distribution and holds an investor stake.",
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'casa-dragones', brandKeywords: ['Casa Dragones'], name: 'Casa Dragones',
    seo: brandSeo({
      brand: 'Casa Dragones', categoryLabel: 'Tequila',
      titleTag: 'Casa Dragones — Blanco & Añejo Barrel Blend',
      h1: 'Casa Dragones Tequila — Blanco & Añejo Barrel Blend Allocations',
      metaDescription: 'Buy Casa Dragones online — small-batch sipping Blanco and the dual-oak Añejo Barrel Blend. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Casa Dragones was founded in 2009 by Bertha González Nieves, the first woman certified as a Maestra Tequilera, with a sipping-focused, small-batch philosophy — the brand famously became Oprah Winfrey\'s favorite tequila.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'codigo-1530', brandKeywords: ['Código 1530', 'Codigo 1530'], name: 'Código 1530',
    seo: brandSeo({
      brand: 'Código 1530', categoryLabel: 'Tequila',
      titleTag: 'Código 1530 — Napa Cabernet Cask Reposado',
      h1: 'Código 1530 Reposado Tequila — Napa Cabernet Cask Allocations',
      metaDescription: 'Buy Código 1530 online — Reposado tequila rested in French oak barrels once used for Napa Valley cabernet. Co-founded by George Strait. Free $300+.',
      hook: 'Código 1530 was founded in 2016 by Ron Snyder and Federico Vaughan, with country star George Strait joining as a co-owner, resting its Reposado in French oak barrels previously used to age Napa Valley cabernet. Pernod Ricard acquired the brand in 2022.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'el-tesoro', brandKeywords: ['El Tesoro'], name: 'El Tesoro',
    seo: brandSeo({
      brand: 'El Tesoro', categoryLabel: 'Tequila',
      titleTag: 'El Tesoro — Blanco, Reposado & Extra Añejo',
      h1: 'El Tesoro Tequila — Blanco, Reposado & Extra Añejo Allocations',
      metaDescription: 'Buy El Tesoro online — Blanco, Reposado, and Extra Añejo from the historic La Alteña distillery. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'El Tesoro has been produced at the historic La Alteña distillery in Arandas by the Camarena family since 1937, using traditional tahona-crushing and small copper pot stills — now part of Suntory Global Spirits\' portfolio, it remains a benchmark for purists favoring rustic, full-flavored tequila.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'hornitos', brandKeywords: ['Hornitos'], name: 'Hornitos',
    seo: brandSeo({
      brand: 'Hornitos', categoryLabel: 'Tequila',
      titleTag: 'Hornitos — Reposado Tequila',
      h1: 'Hornitos Reposado Tequila — Direct Allocations',
      metaDescription: 'Buy Hornitos online — an approachable, lightly oaked Reposado from Suntory Global Spirits. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Hornitos is a 100% blue agave tequila from Suntory Global Spirits, resting its Reposado in large American oak vats for limited wood contact — designed to preserve bright agave character for everyday sipping and elevated margaritas alike.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'lunazul', brandKeywords: ['Lunazul'], name: 'Lunazul',
    seo: brandSeo({
      brand: 'Lunazul', categoryLabel: 'Tequila',
      titleTag: 'Lunazul — 100% Agave Blanco Tequila',
      h1: 'Lunazul Blanco Tequila — Direct Allocations',
      metaDescription: 'Buy Lunazul online — Tequila Herradura\'s 100% agave value-tier Blanco. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Lunazul is Tequila Herradura\'s value-tier line, distilled and bottled at the Tierra de Agaves distillery in Tequila, Jalisco entirely from Blue Weber agave — an alternative to budget mixto tequilas at a comparable price point.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'mijenta', brandKeywords: ['Mijenta'], name: 'Mijenta',
    seo: brandSeo({
      brand: 'Mijenta', categoryLabel: 'Tequila',
      titleTag: 'Mijenta — Sustainable, B Corp-Certified Blanco',
      h1: 'Mijenta Blanco Tequila — Sustainable, B Corp-Certified Allocations',
      metaDescription: 'Buy Mijenta online — a sustainably produced highland Blanco guided by master blender Ana María Romero Mena. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Mijenta was co-founded in 2020 by Mike Dolan, Juan Coronado, and Elise Som with sustainability built into its production and supply chain — it\'s the only tequila brand to hold B Corp certification, guided by master blender Ana María Romero Mena.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: '400-conejos', brandKeywords: ['400 Conejos'], name: '400 Conejos',
    seo: brandSeo({
      brand: '400 Conejos', categoryLabel: 'Mezcal',
      titleTag: '400 Conejos — Joven Mezcal',
      h1: '400 Conejos Joven Mezcal — Direct Allocations',
      metaDescription: 'Buy 400 Conejos online — an approachable Espadín Joven mezcal made by maestro mezcalero Don Tacho in Santiago Matatlán, Oaxaca. Free on $300+.',
      hook: '400 Conejos is produced by maestro mezcalero Don Tacho and his son Joel Santiago in Santiago Matatlán, Oaxaca, using traditional stone-oven roasting, horse-drawn tahona crushing, and copper pot distillation — named for the 400 rabbit-gods believed to take over one\'s spirit when mezcal is drunk. The brand is owned by Casa Cuervo.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'banhez', brandKeywords: ['Banhez'], name: 'Banhez',
    seo: brandSeo({
      brand: 'Banhez', categoryLabel: 'Mezcal',
      titleTag: 'Banhez — Espadín and Barril Cooperative Mezcal',
      h1: 'Banhez Espadín and Barril Mezcal — Cooperative-Made Allocations',
      metaDescription: 'Buy Banhez online — an Espadín and Barril ensamble made by a 35+ family cooperative in San Miguel Ejutla, Oaxaca. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Banhez is produced by a cooperative of more than 35 families in San Miguel Ejutla, Oaxaca, founded by Francisco Javier Pérez Cruz — who also served as president of Mexico\'s National Mezcal Council — and today led by his son Luis, blending cultivated Espadín with wild Barril agave.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'bozal', brandKeywords: ['Bozal'], name: 'Bozal',
    seo: brandSeo({
      brand: 'Bozal', categoryLabel: 'Mezcal',
      titleTag: 'Bozal Mezcal — Ensamble & Tobalá',
      h1: 'Bozal Mezcal — Ensamble & Wild Tobalá Allocations',
      metaDescription: 'Buy Bozal online — a multi-agave Ensamble and rare wild Tobalá, crafted in Miahuatlán and Etla, Oaxaca. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Bozal is crafted in Miahuatlán and Etla, Oaxaca, blending cultivated Espadín with wild-harvested agaves like Barril, Mexicano, and Tobalá — now under Mexican ownership after brothers Alejandro and Christian Rossbach\'s Maguey Spirits acquired the brand from founder August Sebastiani in 2024.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'bruxo', brandKeywords: ['Bruxo'], name: 'Bruxo',
    seo: brandSeo({
      brand: 'Bruxo', categoryLabel: 'Mezcal',
      titleTag: 'Bruxo No. 1 — Double-Distilled Espadín Mezcal',
      h1: 'Bruxo No. 1 Espadín Mezcal — Direct Allocations',
      metaDescription: 'Buy Bruxo No. 1 online — a double-distilled Espadín mezcal from Oaxaca, built for a smoother, more restrained smoke profile. Direct allocations, free $300+.',
      hook: 'Bruxo was launched in 2010 by a group of beverage-industry friends connecting artisanal Oaxacan mezcaleros with a wider audience — its numbered range, including the double-distilled No. 1 Espadín, is produced by different maestros mezcaleros across Oaxaca.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'del-maguey', brandKeywords: ['Del Maguey'], name: 'Del Maguey',
    seo: brandSeo({
      brand: 'Del Maguey', categoryLabel: 'Mezcal',
      titleTag: 'Del Maguey — Vida, Chichicapa & Pechuga',
      h1: 'Del Maguey Mezcal — Vida Clásico, Chichicapa & Pechuga Single-Village Allocations',
      metaDescription: 'Buy Del Maguey online — Vida Clásico, Chichicapa, and the rare Pechuga, from the brand that pioneered single-village mezcal. Direct allocations, free $300+.',
      hook: 'Del Maguey was founded in 1995 by artist Ron Cooper, widely credited with introducing artisanal, single-village mezcal to the US market and building direct relationships with producers across Oaxaca — Pernod Ricard took a majority stake in the brand in 2017. Vida is the accessible entry point, Chichicapa the benchmark single-village release, and Pechuga the rare, triple-distilled style redistilled with local fruit and poultry for celebrations.',
      faqs: [
        { question: 'Did Del Maguey invent single-village mezcal?', answer: 'Del Maguey, founded by Ron Cooper in 1995, is widely credited as the brand that pioneered and popularized the single-village mezcal category in the US — naming the specific Oaxacan village and producer behind each bottling rather than blending mezcal from multiple sources.' },
        { question: 'What is Del Maguey Pechuga?', answer: 'Pechuga is a traditional celebratory style of mezcal that is distilled a third time with local seasonal fruits and a raw chicken or turkey breast (pechuga) suspended in the still, adding subtle savory richness. Del Maguey\'s Pechuga is produced in Santa Catarina Minas, Oaxaca.' },
      ],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'derrumbes', brandKeywords: ['Derrumbes'], name: 'Derrumbes',
    seo: brandSeo({
      brand: 'Derrumbes', categoryLabel: 'Mezcal',
      titleTag: 'Derrumbes Oaxaca — Regional Mezcal',
      h1: 'Derrumbes Oaxaca Mezcal — Direct Allocations',
      metaDescription: "Buy Derrumbes Oaxaca online — a joven mezcal pit-roasted over black oak, part of a project spotlighting Mexico's regional mezcal terroirs. Free $300+.",
      hook: 'Derrumbes was built starting in 2012 by former chef Esteban Morales and tequila entrepreneur Sergio Mendoza around a single idea: pairing each bottle with a different Mexican state and local maestro mezcalero, showcasing regional agave and terroir beyond Oaxaca alone.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'dos-hombres', brandKeywords: ['Dos Hombres'], name: 'Dos Hombres',
    seo: brandSeo({
      brand: 'Dos Hombres', categoryLabel: 'Mezcal',
      titleTag: 'Dos Hombres — Espadín Mezcal',
      h1: 'Dos Hombres Espadín Mezcal — Direct Allocations',
      metaDescription: 'Buy Dos Hombres online — Bryan Cranston and Aaron Paul\'s tahona-crushed Espadín mezcal from Santiago Matatlán, Oaxaca. Direct allocations. Free $300+.',
      hook: 'Dos Hombres was co-founded in 2019 by actors Bryan Cranston and Aaron Paul, crafted in Santiago Matatlán — the traditional heart of mezcal production — by third-generation maestro mezcalero Gregorio Velasco using tahona-crushed agave.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'el-jolgorio', brandKeywords: ['El Jolgorio'], name: 'El Jolgorio',
    seo: brandSeo({
      brand: 'El Jolgorio', categoryLabel: 'Mezcal',
      titleTag: 'El Jolgorio — Wild Tobalá Mezcal',
      h1: 'El Jolgorio Tobalá Mezcal — Small-Batch Wild Agave Allocations',
      metaDescription: 'Buy El Jolgorio online — a small-batch wild Tobalá mezcal from the Cortés family\'s collective of Oaxacan maestros mezcaleros. Direct allocations. Free $300+.',
      hook: 'El Jolgorio was built starting in 2010 by the Cortés family into a collective spanning sixteen families across ten regions of Oaxaca — every bottle is traced to its specific agave species, village, harvest year, and maestro mezcalero, including this rare, wild-harvested Tobalá.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'el-silencio', brandKeywords: ['El Silencio'], name: 'El Silencio',
    seo: brandSeo({
      brand: 'El Silencio', categoryLabel: 'Mezcal',
      titleTag: 'El Silencio — Espadín Mezcal',
      h1: 'El Silencio Espadín Mezcal — Direct Allocations',
      metaDescription: 'Buy El Silencio online — an accessible Espadín mezcal produced in San Baltazar Guelavila, Oaxaca. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'El Silencio was founded in 2013 by Fausto Zapata and Vicente Cisneros and is produced in San Baltazar Guelavila, Oaxaca by ninth-generation maestro mezcalero Pedro Hernández — built as a widely available, easy-drinking entry point into mezcal.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'ilegal', brandKeywords: ['Ilegal'], name: 'Ilegal',
    seo: brandSeo({
      brand: 'Ilegal', categoryLabel: 'Mezcal',
      titleTag: 'Ilegal Mezcal — Joven & Reposado',
      h1: 'Ilegal Mezcal — Joven & Oak-Rested Reposado Allocations',
      metaDescription: 'Buy Ilegal online — Joven and barrel-rested Reposado mezcal from Santiago Matatlán, Oaxaca. Now fully owned by Bacardi. Direct allocations, free $300+.',
      hook: 'Ilegal was founded in 2006 by John Rexer, who began smuggling mezcal from Oaxaca to his bar in Antigua, Guatemala before formalizing production at Destilería Tlacolula in Santiago Matatlán — Bacardi Limited became a minority partner in 2015 and completed a full acquisition of the brand in 2023.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'madre-mezcal', brandKeywords: ['Madre Mezcal'], name: 'Madre Mezcal',
    seo: brandSeo({
      brand: 'Madre Mezcal', categoryLabel: 'Mezcal',
      titleTag: 'Madre Mezcal — Espadín',
      h1: 'Madre Mezcal Espadín — Direct Allocations',
      metaDescription: 'Buy Madre Mezcal online — a grassy, food-friendly Espadín sourced from the Blas family across Oaxaca. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Madre Mezcal was founded in 2016 by Chris Stephenson, Davide Berruto, Stefan Wigand, and Tony Farfalla, and has been named one of the fastest-growing mezcal brands in the US — its Espadín is produced by Carlos Blas and family, whose Santiago Matatlán operation dates back to 1930.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'mal-bien', brandKeywords: ['Mal Bien'], name: 'Mal Bien',
    seo: brandSeo({
      brand: 'Mal Bien', categoryLabel: 'Mezcal',
      titleTag: 'Mal Bien — Espadín Mezcal',
      h1: 'Mal Bien Espadín Mezcal — Direct Allocations',
      metaDescription: 'Buy Mal Bien online — an everyday-sipping Espadín mezcal sourced directly from independent producers across Oaxaca. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Mal Bien was founded in 2016 by Ben Scott and Anthony Silas, who source small batches directly from independent mezcaleros across rural Oaxaca and Guerrero rather than operating a single palenque of their own — positioned as an easy-drinking, everyday mezcal.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'montelobos', brandKeywords: ['Montelobos'], name: 'Montelobos',
    seo: brandSeo({
      brand: 'Montelobos', categoryLabel: 'Mezcal',
      titleTag: 'Montelobos — Organic Espadín Mezcal',
      h1: 'Montelobos Espadín Mezcal — Certified Organic Allocations',
      metaDescription: 'Buy Montelobos online — a widely distributed, certified organic Espadín mezcal from Oaxaca. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Montelobos was created by molecular plant biologist Iván Saldaña and launched by William Grant & Sons in 2012, using certified organic Espadín agave — Campari Group took a controlling stake in the brand in 2019.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'nuestra-soledad', brandKeywords: ['Nuestra Soledad'], name: 'Nuestra Soledad',
    seo: brandSeo({
      brand: 'Nuestra Soledad', categoryLabel: 'Mezcal',
      titleTag: 'Nuestra Soledad — San Luis del Río Mezcal',
      h1: 'Nuestra Soledad San Luis del Río Mezcal — Single-Village Allocations',
      metaDescription: 'Buy Nuestra Soledad online — a single-village mezcal from San Luis del Río, Tlacolula, Oaxaca, by the Cortés family of El Jolgorio. Direct allocations, free $300+.',
      hook: 'Nuestra Soledad is the single-village mezcal line from the Cortés family behind El Jolgorio, spotlighting individual Oaxacan producing communities — this San Luis del Río expression is distilled by brothers Iván and Francisco Méndez from high-elevation, sustainably grown Espadín.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'the-lost-explorer', brandKeywords: ['The Lost Explorer'], name: 'The Lost Explorer',
    seo: brandSeo({
      brand: 'The Lost Explorer', categoryLabel: 'Mezcal',
      titleTag: 'The Lost Explorer — Espadín & Tobalá Mezcal',
      h1: 'The Lost Explorer Mezcal — Espadín & Wild Tobalá Allocations',
      metaDescription: 'Buy The Lost Explorer online — additive-free Espadín and Tobalá mezcal co-founded by David de Rothschild and Maestro Fortino Ramos. Direct allocations, free $300+.',
      hook: 'The Lost Explorer was founded in 2020 by David de Rothschild and Thor Björgólfsson in partnership with maestro mezcalero Fortino Ramos, who holds an ownership stake in the brand — production is centered in San Pablo Huixtepec, Oaxaca, with a focus on additive-free, sustainably produced agave spirits.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'vago', brandKeywords: ['Vago'], name: 'Vago',
    seo: brandSeo({
      brand: 'Vago', categoryLabel: 'Mezcal',
      titleTag: 'Vago — Elote Corn-Infused Mezcal',
      h1: 'Vago Elote Mezcal — Toasted Corn Redistillation Allocations',
      metaDescription: 'Buy Vago Elote online — Espadín mezcal redistilled with toasted corn by Aquilino García López in Candelaria Yegolé, Oaxaca. Direct allocations, free $300+.',
      hook: 'Mezcal Vago began when co-founder Judah Kuper met and married the daughter of Aquilino García López, a mezcalero in the tiny mountain village of Candelaria Yegolé, Oaxaca — the Elote expression redistills Espadín mezcal with toasted corn for a distinctive nutty, high-proof character.',
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'astral', brandKeywords: ['Astral'], name: 'Astral',
    seo: brandSeo({
      brand: 'Astral', categoryLabel: 'Tequila',
      titleTag: 'Astral — Single-Estate Organic Tequila',
      h1: 'Astral Tequila — Allocations',
      metaDescription: 'Buy Astral tequila online — single-estate organic blue agave, margarita-forward positioning. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Astral is distilled from organic blue agave grown on a single estate, positioned as a margarita-forward blanco with a clean, additive-free profile.',
      faqs: [{ question: 'Is Astral tequila organic?', answer: 'Yes — Astral is distilled from organically farmed blue agave grown on a single estate.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'avion', brandKeywords: ['Avión', 'Avion'], name: 'Avión',
    seo: brandSeo({
      brand: 'Avión', categoryLabel: 'Tequila',
      titleTag: 'Avión — Mainstream Premium Tequila',
      h1: 'Avión Tequila — Silver & Reposado Allocations',
      metaDescription: 'Buy Avión tequila online — mainstream premium tequila from hand-selected, fully mature agave. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Avión is distilled from hand-selected agave harvested at full maturity, gaining cultural recognition partly through a plotline on HBO's Entourage.",
      faqs: [{ question: 'Is Avión tequila real or fictional?', answer: "Avión is a real, Pernod Ricard-owned tequila brand — its origin story was popularized by a plotline on HBO's Entourage, but the product itself predates and exists independently of the show." }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'cabo-wabo', brandKeywords: ['Cabo Wabo'], name: 'Cabo Wabo',
    seo: brandSeo({
      brand: 'Cabo Wabo', categoryLabel: 'Tequila',
      titleTag: "Cabo Wabo — Sammy Hagar's Original Celebrity Tequila",
      h1: 'Cabo Wabo Tequila — Blanco & Reposado Allocations',
      metaDescription: "Buy Cabo Wabo tequila online — Sammy Hagar's original 1996 celebrity tequila, arguably the category's OG. Direct allocations at Aged & Amber. Free shipping on $300+.",
      hook: "Cabo Wabo was co-founded by Sammy Hagar in 1996, making it one of the earliest celebrity-branded tequilas — a category that has since exploded with entrants — named after his Cabo San Lucas cantina.",
      faqs: [{ question: 'Who founded Cabo Wabo tequila?', answer: 'Cabo Wabo was co-founded by musician Sammy Hagar in 1996, named after his Cabo San Lucas cantina.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'corralejo', brandKeywords: ['Corralejo'], name: 'Corralejo',
    seo: brandSeo({
      brand: 'Corralejo', categoryLabel: 'Tequila',
      titleTag: 'Corralejo — Historic Hacienda Tequila',
      h1: 'Corralejo Tequila — Allocations',
      metaDescription: 'Buy Corralejo tequila online — a historic 1996-revived hacienda brand, ~70% of its sales in the US market. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Corralejo traces to the historic Hacienda Corralejo, revived as a tequila brand in 1996; the majority of the brand\'s sales come from the US market.',
      faqs: [{ question: 'What is the history behind Corralejo tequila?', answer: 'Corralejo takes its name from the historic Hacienda Corralejo in Guanajuato, revived as a modern tequila brand in 1996.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'deleon', brandKeywords: ['DeLeón', 'Deleon'], name: 'DeLeón',
    seo: brandSeo({
      brand: 'DeLeón', categoryLabel: 'Tequila',
      titleTag: 'DeLeón — Prestige Tequila',
      h1: 'DeLeón Tequila — Blanco & Añejo Allocations',
      metaDescription: 'Buy DeLeón tequila online — a prestige-tier tequila brand now solely owned by Diageo. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'DeLeón sits in the prestige tier of tequila, currently a Diageo-owned brand.',
      faqs: [{ question: 'Who owns DeLeón tequila?', answer: 'DeLeón is currently solely owned by Diageo.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'dulce-vida', brandKeywords: ['Dulce Vida'], name: 'Dulce Vida',
    seo: brandSeo({
      brand: 'Dulce Vida', categoryLabel: 'Tequila',
      titleTag: 'Dulce Vida — Organic Austin-Based Tequila',
      h1: 'Dulce Vida Tequila — Allocations',
      metaDescription: 'Buy Dulce Vida tequila online — an Austin-based, USDA-organic-certified tequila brand. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Dulce Vida is a USDA-organic-certified tequila brand based in Austin, Texas, offering an accessible price point within the organic-agave niche.',
      faqs: [{ question: 'Is Dulce Vida tequila organic?', answer: 'Yes — Dulce Vida is USDA-organic certified.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'fidencio', brandKeywords: ['Fidencio'], name: 'Fidencio',
    seo: brandSeo({
      brand: 'Fidencio', categoryLabel: 'Mezcal',
      titleTag: 'Fidencio — 4th-Generation Santiago Matatlán Mezcal',
      h1: 'Fidencio Mezcal — Allocations',
      metaDescription: 'Buy Fidencio mezcal online — a fourth-generation mezcalero family from Santiago Matatlán, Oaxaca\'s mezcal capital. Direct allocations at Aged & Amber.',
      hook: "Fidencio is produced by a fourth-generation mezcalero family in Santiago Matatlán, Oaxaca's mezcal capital.",
      faqs: [{ question: 'Where is Fidencio mezcal made?', answer: "Fidencio is produced in Santiago Matatlán, widely considered the mezcal capital of Oaxaca." }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'maestro-dobel', brandKeywords: ['Maestro Dobel'], name: 'Maestro Dobel',
    seo: brandSeo({
      brand: 'Maestro Dobel', categoryLabel: 'Tequila',
      titleTag: "Maestro Dobel — World's First Cristalino Tequila",
      h1: 'Maestro Dobel Tequila — Diamante Allocations',
      metaDescription: "Buy Maestro Dobel online — Diamante, marketed as the world's first cristalino tequila, from the Beckmann family behind José Cuervo. Direct allocations.",
      hook: "Maestro Dobel Diamante is credited with inventing the cristalino category, created by the Beckmann family, who also own José Cuervo.",
      faqs: [{ question: 'What is a cristalino tequila?', answer: 'Cristalino tequila is aged tequila (reposado, añejo, or extra añejo) that is charcoal-filtered to remove its color while retaining barrel-derived flavor — a category Maestro Dobel is credited with inventing.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'marca-negra', brandKeywords: ['Marca Negra'], name: 'Marca Negra',
    seo: brandSeo({
      brand: 'Marca Negra', categoryLabel: 'Mezcal',
      titleTag: 'Marca Negra — Estate-Grown Espadín Mezcal',
      h1: 'Marca Negra Mezcal — Allocations',
      metaDescription: 'Buy Marca Negra mezcal online — estate-grown Espadín averaging 7-10 years of age, roasted in stone-lined pits. Direct allocations at Aged & Amber.',
      hook: 'Marca Negra uses estate-grown Espadín agave averaging 7 to 10 years old, roasted in traditional stone-lined pits and double-distilled in pot stills.',
      faqs: [{ question: 'How old is the agave used in Marca Negra?', answer: "Marca Negra's Espadín agave averages 7 to 10 years old at harvest, older than many mezcal producers use." }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'milagro', brandKeywords: ['Milagro'], name: 'Milagro',
    seo: brandSeo({
      brand: 'Milagro', categoryLabel: 'Tequila',
      titleTag: 'Milagro — Fastest-Growing Reposado Tequila',
      h1: 'Milagro Tequila — Silver & Reposado Allocations',
      metaDescription: 'Buy Milagro tequila online — ~1M cases sold annually, sitting just below Don Julio and Clase Azul without a celebrity angle. Direct allocations at Aged & Amber.',
      hook: 'Milagro sells around 1 million cases a year and is among the fastest-growing tequila brands in the US.',
      faqs: [{ question: 'Is Milagro a celebrity tequila brand?', answer: 'No — unlike many premium tequilas, Milagro has grown without a celebrity-endorsement angle.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'olmeca-altos', brandKeywords: ['Olmeca Altos'], name: 'Olmeca Altos',
    seo: brandSeo({
      brand: 'Olmeca Altos', categoryLabel: 'Tequila',
      titleTag: 'Olmeca Altos — Bartender-Favorite Value Tequila',
      h1: 'Olmeca Altos Tequila — Allocations',
      metaDescription: 'Buy Olmeca Altos online — ~1.3M cases sold in 2023 with double-digit growth, a bartender-favorite value 100% agave tequila. Direct allocations at Aged & Amber.',
      hook: 'Olmeca Altos moved roughly 1.3 million cases in 2023 with over 12% growth, co-created with acclaimed mixologists.',
      faqs: [{ question: 'Why do bartenders like Olmeca Altos?', answer: 'Olmeca Altos was co-created with acclaimed mixologists and offers real 100% agave quality at a value price, making it a common well-tequila choice.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'padre-azul', brandKeywords: ['Padre Azul'], name: 'Padre Azul',
    seo: brandSeo({
      brand: 'Padre Azul', categoryLabel: 'Tequila',
      titleTag: 'Padre Azul — Austrian-Founded Luxury Tequila',
      h1: 'Padre Azul Tequila — Silver, Reposado & Añejo Allocations',
      metaDescription: 'Buy Padre Azul online — an Austrian-founded ultra-premium tequila in a distinctive skull-motif bottle. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Padre Azul is an Austrian-founded, ultra-premium tequila brand known for its distinctive skull-motif bottle design.',
      faqs: [{ question: 'Where was Padre Azul founded?', answer: 'Padre Azul was founded in Austria, an unusual origin for a tequila brand, though the spirit itself is produced in Jalisco, Mexico.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'real-minero', brandKeywords: ['Real Minero'], name: 'Real Minero',
    seo: brandSeo({
      brand: 'Real Minero', categoryLabel: 'Mezcal',
      titleTag: 'Real Minero — World-Class Prestige Mezcal',
      h1: 'Real Minero Mezcal — Pechuga Allocations',
      metaDescription: 'Buy Real Minero mezcal online — widely considered one of the world\'s finest mezcal producers. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Real Minero is crafted by Master Distiller Edgar Ángeles Carreño and the Ángeles family in Santa Catarina Minas, widely considered by many one of the world\'s finest mezcal producers.',
      faqs: [{ question: 'What is Pechuga mezcal?', answer: 'Pechuga is a traditional style where mezcal is distilled a third time with a raw chicken breast (or sometimes fruit) suspended in the still, adding a subtle savory or fruity note.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'rey-campero', brandKeywords: ['Rey Campero'], name: 'Rey Campero',
    seo: brandSeo({
      brand: 'Rey Campero', categoryLabel: 'Mezcal',
      titleTag: 'Rey Campero — Southern Highlands Family Mezcal',
      h1: 'Rey Campero Mezcal — Allocations',
      metaDescription: 'Buy Rey Campero mezcal online — a family-run Southern Highlands producer offering 12 varietals. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Rey Campero is a family-run mezcal producer from Oaxaca's Southern Highlands, offering a real 12-varietal range.",
      faqs: [{ question: 'How many varietals does Rey Campero produce?', answer: 'Rey Campero offers a real range of 12 different agave varietals.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'siete-leguas', brandKeywords: ['Siete Leguas'], name: 'Siete Leguas',
    seo: brandSeo({
      brand: 'Siete Leguas', categoryLabel: 'Tequila',
      titleTag: 'Siete Leguas — Additive-Free Tahona Tequila',
      h1: 'Siete Leguas Tequila — Blanco, Reposado & Añejo Allocations',
      metaDescription: 'Buy Siete Leguas online — a historic, additive-free, tahona-tradition brand highly respected among enthusiasts. Direct allocations at Aged & Amber.',
      hook: 'Siete Leguas is a historic, family-owned distillery producing additive-free tequila using traditional tahona-stone crushing.',
      faqs: [{ question: 'What is tahona crushing?', answer: 'Tahona is a traditional method of crushing cooked agave with a large stone wheel, rather than mechanical shredders — a slower, more labor-intensive process some producers credit with a fuller flavor.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'sombra', brandKeywords: ['Sombra'], name: 'Sombra',
    seo: brandSeo({
      brand: 'Sombra', categoryLabel: 'Mezcal',
      titleTag: 'Sombra — Accessible Smoky Mezcal',
      h1: 'Sombra Mezcal — Allocations',
      metaDescription: 'Buy Sombra mezcal online — an accessible, intensely smoky mezcal and popular bar-menu staple. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Sombra offers an accessible, mixing-friendly tier of mezcal, intensely smoky and popular as a bar-menu staple for smoky cocktail builds.',
      faqs: [{ question: 'Is Sombra a good mezcal for cocktails?', answer: 'Yes — its intensely smoky, accessible profile has made it a popular bar-menu staple for smoky cocktail builds.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'suerte', brandKeywords: ['Suerte'], name: 'Suerte',
    seo: brandSeo({
      brand: 'Suerte', categoryLabel: 'Tequila',
      titleTag: 'Suerte — Award-Winning Tahona-Crushed Tequila',
      h1: 'Suerte Tequila — Allocations',
      metaDescription: 'Buy Suerte tequila online — award-winning, tahona-crushed, additive-free tequila. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Suerte is award-winning and additive-free, crushed using traditional tahona methods — a natural fit alongside the site\'s stocked Fortaleza and G4.',
      faqs: [{ question: 'What makes Suerte tequila additive-free?', answer: 'Suerte uses only agave, water, and yeast in production, with no added glycerin, coloring, or flavoring — a distinction not all tequila brands can claim.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'tapatio', brandKeywords: ['Tapatío', 'Tapatio'], name: 'Tapatío',
    seo: brandSeo({
      brand: 'Tapatío', categoryLabel: 'Tequila',
      titleTag: 'Tapatío — Camarena Family Cult-Classic Tequila',
      h1: 'Tapatío Tequila — Allocations',
      metaDescription: 'Buy Tapatío tequila online — a cult-classic bartender favorite from the same Camarena family lineage as El Tesoro, Fortaleza, and G4. Direct allocations.',
      hook: 'Tapatío shares its Camarena family lineage with El Tesoro, Fortaleza, and G4, earning cult-classic status among bartenders for its bold, traditional style.',
      faqs: [{ question: 'Is Tapatío related to El Tesoro or Fortaleza?', answer: 'Yes — Tapatío, El Tesoro, Fortaleza, and G4 all trace to the same Camarena family lineage of tequila producers.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'volcan-de-mi-tierra', brandKeywords: ['Volcán de Mi Tierra', 'Volcan de Mi Tierra'], name: 'Volcán de Mi Tierra',
    seo: brandSeo({
      brand: 'Volcán de Mi Tierra', categoryLabel: 'Tequila',
      titleTag: 'Volcán de Mi Tierra — Clooney & Gerber, LVMH-Backed',
      h1: 'Volcán de Mi Tierra Tequila — Allocations',
      metaDescription: 'Buy Volcán de Mi Tierra online — George Clooney and Rande Gerber\'s second, LVMH-backed tequila venture. Direct allocations at Aged & Amber. Free $300+.',
      hook: "Volcán de Mi Tierra is a second venture from the founders of Casamigos, backed by LVMH, blending highland and lowland agave into an additive-free tequila.",
      faqs: [{ question: 'Is Volcán de Mi Tierra related to Casamigos?', answer: 'Yes — both brands were co-founded by George Clooney and Rande Gerber, though Volcán is a separate, LVMH-backed venture.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'wahaka', brandKeywords: ['Wahaka'], name: 'Wahaka',
    seo: brandSeo({
      brand: 'Wahaka', categoryLabel: 'Mezcal',
      titleTag: 'Wahaka — Award-Winning Mezcal',
      h1: 'Wahaka Mezcal — Allocations',
      metaDescription: 'Buy Wahaka mezcal online — an award-winning house with a broad varietal range, including an experimental Vino de Mezcal series. Direct allocations.',
      hook: 'Wahaka is an award-winning mezcal producer offering a broad varietal range beyond the standard Espadín, including an experimental "Vino de Mezcal" series.',
      faqs: [{ question: 'What is Vino de Mezcal?', answer: "Wahaka's experimental Vino de Mezcal series blends mezcal production techniques in unconventional ways, distinct from the brand's standard Espadín line." }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'yuu-baal', brandKeywords: ['Yuu Baal'], name: 'Yuu Baal',
    seo: brandSeo({
      brand: 'Yuu Baal', categoryLabel: 'Mezcal',
      titleTag: 'Yuu Baal — Barrel-Aged Mezcal Collective',
      h1: 'Yuu Baal Mezcal — Allocations',
      metaDescription: 'Buy Yuu Baal mezcal online — an Oaxacan producer collective offering barrel-aged Reposado and Añejo tiers. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Yuu Baal is an Oaxacan producer collective whose range extends into barrel-aged Reposado and Añejo tiers, a differentiator since most mezcal is joven-only.',
      faqs: [{ question: 'Does Yuu Baal make aged mezcal?', answer: 'Yes — unlike most mezcal brands, which are joven-only, Yuu Baal offers real barrel-aged Reposado and Añejo tiers.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'alipus', brandKeywords: ['Alipús', 'Alipus'], name: 'Alipús',
    seo: brandSeo({
      brand: 'Alipús', categoryLabel: 'Mezcal',
      titleTag: 'Alipús — Los Danzantes Village-Mezcal Marketplace',
      h1: 'Alipús Mezcal — San Juan & San Andrés Allocations',
      metaDescription: 'Buy Alipús mezcal online — a top-10 bestselling/trending mezcal brand owned by Los Danzantes. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Alipús is a village-mezcal marketplace project owned by Los Danzantes, ranking among the top-10 best-selling/trending mezcal brands per US bar surveys.',
      faqs: [{ question: 'Who owns Alipús mezcal?', answer: 'Alipús is owned by Los Danzantes, a pioneering Oaxaca mezcal house founded in 1997.' }],
    }),
  },
  {
    categorySlug: 'tequila-mezcal', hubSlug: 'los-danzantes', brandKeywords: ['Los Danzantes'], name: 'Los Danzantes',
    seo: brandSeo({
      brand: 'Los Danzantes', categoryLabel: 'Mezcal',
      titleTag: 'Los Danzantes — Pioneering 1997 Oaxaca Mezcal',
      h1: 'Los Danzantes Mezcal — Añejo Allocations',
      metaDescription: 'Buy Los Danzantes mezcal online — a pioneering 1997 Oaxaca brand, top-10 bestselling/trending. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Los Danzantes is a pioneering mezcal brand founded in 1997, ranking among the top-10 best-selling/trending mezcal in US bar surveys; Filipino conglomerate Emperador acquired a 60% stake in 2025.',
      faqs: [{ question: 'Who owns Los Danzantes mezcal?', answer: 'Los Danzantes was founded in 1997; Filipino conglomerate Emperador acquired a 60% stake in the company in 2025.' }],
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
      faqs: [{ question: 'What does "Nassau Valley" mean on Appleton Estate\'s label?', answer: 'Nassau Valley is the specific Jamaican estate where Appleton has distilled since 1749 — a limestone-filtered water source and pot-and-column still blend unique to the property shape the brand\'s house style across every age statement.' }],
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
      faqs: [{ question: 'Is Mount Gay the oldest rum brand in the world?', answer: 'Mount Gay holds documented distilling records dating to 1703, making it one of the oldest continuously operating rum brands with verifiable history — though several other Caribbean distilleries claim earlier informal production dates.' }],
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
      faqs: [{ question: 'Is Flor de Caña gluten-free?', answer: 'Yes — Flor de Caña is distilled from sugarcane, not grain, making it naturally gluten-free like most rum.' }],
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
      faqs: [{ question: 'Is Bacardí rum or vodka?', answer: 'Bacardí is best known as a rum brand — Superior White and Spiced Rum are both distilled from sugarcane molasses. Bacardí\'s parent company also produces vodka and other spirits under separate labels, which is a common source of the confusion.' }],
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
      faqs: [{ question: 'Is Bumbu rum sweet?', answer: 'Yes — Bumbu is bottled at a reduced proof and formulated for a noticeably sweet, dessert-leaning character, closer to a spiced rum liqueur than a traditional dry sipping rum.' }],
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
      faqs: [{ question: 'What is Captain Morgan rum made from?', answer: 'Captain Morgan Original Spiced is distilled from Caribbean sugarcane on a light column still, then blended with natural flavorings including vanilla and clove to create its signature spiced profile.' }],
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
      faqs: [{ question: 'Is Don Q the same company as Bacardí?', answer: 'No — Don Q is produced by Destilería Serrallés, an independent, family-owned Puerto Rican company distilling since 1865. Bacardí is a separate, much larger multinational company, though both are Puerto Rico\'s two best-known rum names.' }],
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
      faqs: [{ question: 'Why does Foursquare rum contain no additives?', answer: 'Master blender Richard Seale is an outspoken advocate for additive-free rum labeling — Foursquare\'s Exceptional Cask Selection releases contain no added sugar, coloring, or flavoring, letting the pot-and-column-still blend and cask influence speak for themselves.' }],
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
      faqs: [{ question: "Do I need Gosling's ginger beer to make a real Dark 'n' Stormy?", answer: "Gosling's holds the trademark on the name \"Dark 'n' Stormy,\" which technically requires their Black Seal rum specifically — pairing it with their matching Gosling's Ginger Beer keeps the combination authentic to the original Bermuda recipe." }],
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
      faqs: [{ question: "What proof is Kraken rum?", answer: "Kraken Black Spiced Rum is bottled at 94 proof (47% ABV) — higher than most mainstream spiced rums, which typically sit around 70-80 proof, giving it a bolder, warmer character." }],
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
      faqs: [{ question: "Is Myers's rum aged?", answer: "Yes — Myers's Original Dark Rum is a blend of pot still Jamaican rums aged up to four years, though it carries no formal age statement on the label since it's a blend across multiple ages." }],
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
      faqs: [{ question: 'Is Sailor Jerry rum aged?', answer: 'Sailor Jerry Spiced Rum carries no age statement — it\'s a Caribbean rum blend flavored with vanilla and cinnamon at 92 proof, positioned as a bold mixing rum rather than an aged sipping spirit.' }],
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
      faqs: [{ question: 'What is "hogo" in Jamaican rum?', answer: 'Hogo (from the French "haut goût," meaning "high taste") describes the pronounced funky, tropical-fruit, sometimes barnyard-like aroma found in high-ester Jamaican rums like Smith & Cross — produced through long, wild dunder-pit fermentation at estates like Hampden.' }],
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
      faqs: [{ question: 'Can you drink Wray and Nephew Overproof neat?', answer: 'At 126 proof (63% ABV), Wray & Nephew Overproof is rarely sipped neat — in Jamaica it\'s traditionally used in small quantities to season punches, cocktails, and even cooking, or occasionally taken as a small "chaser" shot rather than a full pour.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'admiral-nelson', brandKeywords: ['Admiral Nelson'], name: 'Admiral Nelson',
    seo: brandSeo({
      brand: 'Admiral Nelson', categoryLabel: 'Spiced Rum',
      titleTag: 'Admiral Nelson — Value Spiced Rum',
      h1: 'Admiral Nelson Spiced Rum — Allocations',
      metaDescription: 'Buy Admiral Nelson spiced rum online — Heaven Hill\'s value-priced spiced rum. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Admiral Nelson is Heaven Hill's budget-friendly entry in the spiced rum category, built for mixing rather than sipping.",
      faqs: [{ question: 'Who makes Admiral Nelson rum?', answer: 'Admiral Nelson Spiced Rum is produced by Heaven Hill, the family-owned Kentucky distiller better known for its bourbon lineup.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'blue-chair-bay', brandKeywords: ['Blue Chair Bay'], name: 'Blue Chair Bay',
    seo: brandSeo({
      brand: 'Blue Chair Bay', categoryLabel: 'Spiced Rum',
      titleTag: 'Blue Chair Bay — Coconut Spiced Rum',
      h1: 'Blue Chair Bay Rum — Coconut Spiced Allocations',
      metaDescription: 'Buy Blue Chair Bay rum online — Kenny Chesney\'s Caribbean-inspired coconut spiced rum. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Blue Chair Bay was co-founded by musician Kenny Chesney, building a Caribbean-inspired rum lineup around his own beach-and-island brand identity.',
      faqs: [{ question: 'Who owns Blue Chair Bay rum?', answer: 'Blue Chair Bay was co-founded by country music artist Kenny Chesney, named after his own beach house.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'brugal', brandKeywords: ['Brugal'], name: 'Brugal',
    seo: brandSeo({
      brand: 'Brugal', categoryLabel: 'Aged Rum',
      titleTag: 'Brugal — Dominican Rum Since 1888',
      h1: 'Brugal Rum — Dominican Republic Allocations',
      metaDescription: 'Buy Brugal rum online — Dominican rum since 1888, including the sherry-cask-finished 1888. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Brugal has distilled rum in the Dominican Republic since 1888; its 1888 expression is aged twice, finishing in Spanish Oloroso sherry casks for extra depth.',
      faqs: [{ question: 'What is Brugal 1888?', answer: "Brugal 1888 is the brand's double-aged rum, finished in Spanish Oloroso sherry casks after primary aging in American oak — named for Brugal's founding year." }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'cruzan', brandKeywords: ['Cruzan'], name: 'Cruzan',
    seo: brandSeo({
      brand: 'Cruzan', categoryLabel: 'Spiced Rum',
      titleTag: 'Cruzan — 9-Spice Rum from the US Virgin Islands',
      h1: 'Cruzan Rum — 9 Spiced, Allocations',
      metaDescription: 'Buy Cruzan rum online — 9 Spiced blend from one of the oldest rum distilleries in the world, on St. Croix. Direct allocations at Aged & Amber. Free $300+.',
      hook: "Cruzan Rum Distillery on St. Croix is one of the oldest continuously operating rum distilleries in the world; its 9 Spiced expression blends the house rum with nine natural spices.",
      faqs: [{ question: 'Where is Cruzan rum made?', answer: 'Cruzan is distilled at the Cruzan Rum Distillery on St. Croix in the US Virgin Islands.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'don-papa', brandKeywords: ['Don Papa'], name: 'Don Papa',
    seo: brandSeo({
      brand: 'Don Papa', categoryLabel: 'Aged Rum',
      titleTag: 'Don Papa — Filipino Small-Batch Rum',
      h1: 'Don Papa Rum — Negros Island Allocations',
      metaDescription: 'Buy Don Papa rum online — small-batch rum aged 7 years on Negros Island, Philippines. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Don Papa is distilled from sugarcane grown on Negros Island in the Philippines and aged at the foot of Mount Kanlaon — part of a wave of premium Filipino rum gaining international attention.",
      faqs: [{ question: 'Where does Don Papa rum come from?', answer: "Don Papa is distilled and aged on Negros Island in the Philippines, a region historically known as the country's sugarcane heartland." }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'havana-club', brandKeywords: ['Havana Club'], name: 'Havana Club',
    seo: brandSeo({
      brand: 'Havana Club', categoryLabel: 'Aged Rum',
      titleTag: 'Havana Club — 7 Años Aged Rum',
      h1: 'Havana Club Rum — 7 Años, Allocations',
      metaDescription: 'Buy Havana Club rum online — the 7 Años aged expression, produced by Bacardi in Puerto Rico for the US market. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Havana Club is one of the best-known rum names worldwide, but the bottle legally sold in the US is produced by Bacardi in Puerto Rico rather than Cuba, following a long-running trademark dispute with the Cuban state-owned original.',
      faqs: [{ question: 'Is the Havana Club sold in the US the same as the Cuban version?', answer: "No. Due to a decades-long trademark dispute, the Havana Club sold legally in the US is produced by Bacardi in Puerto Rico — a different product from the Cuban state-owned Havana Club sold internationally." }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'koloa', brandKeywords: ['Koloa'], name: 'Koloa Rum Company',
    seo: brandSeo({
      brand: 'Koloa Rum Company', categoryLabel: 'Aged Rum',
      titleTag: "Koloa — Hawaiian Pot Still Rum",
      h1: "Koloa Rum — Kaua'i Gold Allocations",
      metaDescription: "Buy Koloa Hawaiian rum online — pot-still rum distilled on Kaua'i from locally grown sugarcane. Direct allocations at Aged & Amber. Free $300+.",
      hook: "Koloa Rum Company distills on the island of Kaua'i using pot-still methods and Hawaii-grown sugarcane — a small but growing craft rum scene distilling entirely within the US.",
      faqs: [{ question: 'Is Koloa rum made in Hawaii?', answer: "Yes — Koloa Rum Company distills on the island of Kaua'i, Hawaii, using locally grown sugarcane." }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'old-monk', brandKeywords: ['Old Monk'], name: 'Old Monk',
    seo: brandSeo({
      brand: 'Old Monk', categoryLabel: 'Dark Rum',
      titleTag: 'Old Monk — Iconic Indian Dark Rum',
      h1: 'Old Monk Rum — 7 Year, Allocations',
      metaDescription: 'Buy Old Monk rum online — India\'s iconic dark rum since 1954, aged 7 years. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Old Monk has been distilled in India since 1954 and remains a cult-favorite dark rum, prized for its bold vanilla character from extended oak aging.',
      faqs: [{ question: 'How old is Old Monk rum?', answer: 'Old Monk has been produced by Mohan Meakin in India since 1954.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'parrot-bay', brandKeywords: ['Parrot Bay'], name: 'Parrot Bay',
    seo: brandSeo({
      brand: 'Parrot Bay', categoryLabel: 'Flavored Rum',
      titleTag: 'Parrot Bay — Coconut Rum',
      h1: 'Parrot Bay Coconut Rum — Allocations',
      metaDescription: 'Buy Parrot Bay coconut rum online — a low-proof, widely available coconut rum from the Captain Morgan family of brands. Direct allocations at Aged & Amber.',
      hook: 'Parrot Bay is a Puerto Rican coconut rum from Diageo\'s Captain Morgan family of brands, bottled at a lower 42 proof for easy tropical mixing.',
      faqs: [{ question: 'Who makes Parrot Bay rum?', answer: "Parrot Bay is produced by Diageo, the same parent company behind Captain Morgan." }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'privateer', brandKeywords: ['Privateer'], name: 'Privateer',
    seo: brandSeo({
      brand: 'Privateer', categoryLabel: 'American Rum',
      titleTag: 'Privateer — American Rum from Massachusetts',
      h1: 'Privateer Rum — New England Reserve Allocations',
      metaDescription: 'Buy Privateer rum online — distilled and aged in Ipswich, Massachusetts, reviving New England\'s colonial rum trade. Direct allocations at Aged & Amber.',
      hook: "Privateer was founded by Andrew Cabot, a descendant of a family that distilled rum in Massachusetts in the 18th century — part of a small movement of American-made rum reviving New England's colonial rum trade.",
      faqs: [{ question: 'Where is Privateer rum made?', answer: 'Privateer distills and ages its rum entirely in Ipswich, Massachusetts.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'pussers', brandKeywords: ["Pusser's", 'Pussers'], name: "Pusser's",
    seo: brandSeo({
      brand: "Pusser's", categoryLabel: 'Dark Rum',
      titleTag: "Pusser's — Original British Navy Rum Recipe",
      h1: "Pusser's Rum — British Navy Recipe Allocations",
      metaDescription: "Buy Pusser's rum online — based on the original rum ration recipe issued to the British Royal Navy until 1970. Direct allocations at Aged & Amber. Free $300+.",
      hook: "Pusser's is produced from the recipe used for the British Royal Navy's official rum ration, which was discontinued in 1970 after nearly 300 years of continuous use.",
      faqs: [{ question: 'What does "Pusser\'s" mean?', answer: '"Pusser" was Royal Navy slang for the ship\'s purser, the officer responsible for distributing the daily rum ration to sailors.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'ron-barcelo', brandKeywords: ['Ron Barceló', 'Barcelo', 'Barceló'], name: 'Ron Barceló',
    seo: brandSeo({
      brand: 'Ron Barceló', categoryLabel: 'Aged Rum',
      titleTag: 'Ron Barceló — Dominican Sipping Rum',
      h1: 'Ron Barceló Rum — Imperial, Allocations',
      metaDescription: 'Buy Ron Barceló rum online — Imperial, a 10-year Dominican sipping rum and repeat Double Gold medal winner. Direct allocations at Aged & Amber.',
      hook: "Ron Barceló Imperial is aged a minimum of ten years in the Dominican Republic, a repeat Double Gold medal winner at international spirits competitions.",
      faqs: [{ question: 'How old is Ron Barceló Imperial?', answer: 'Ron Barceló Imperial is aged a minimum of ten years.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'siesta-key', brandKeywords: ['Siesta Key'], name: 'Siesta Key',
    seo: brandSeo({
      brand: 'Siesta Key', categoryLabel: 'Spiced & Flavored Rum',
      titleTag: 'Siesta Key — Florida Craft Rum',
      h1: 'Siesta Key Rum — Spiced & Toasted Coconut Allocations',
      metaDescription: 'Buy Siesta Key rum online — Sarasota, Florida craft rum, including Spiced and 100-proof Toasted Coconut. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Siesta Key Distillery makes its rum in Sarasota, Florida, offering both a standard spiced expression and a higher-proof toasted coconut variant.',
      faqs: [{ question: 'Where is Siesta Key rum made?', answer: 'Siesta Key Rum is distilled in Sarasota, Florida.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'ten-to-one', brandKeywords: ['Ten To One', 'Ten to One'], name: 'Ten To One',
    seo: brandSeo({
      brand: 'Ten To One', categoryLabel: 'Pan-Caribbean Rum',
      titleTag: 'Ten To One — Pan-Caribbean Rum Blends',
      h1: 'Ten To One Rum — Dark & White, Allocations',
      metaDescription: 'Buy Ten To One rum online — Dark and White pan-Caribbean blends celebrating Caribbean rum heritage and Carnival culture. Direct allocations at Aged & Amber.',
      hook: 'Ten To One blends rums from across the Caribbean into single expressions, founded to celebrate the region\'s rum-making traditions and Carnival culture through both the product and its branding.',
      faqs: [{ question: 'Is Ten To One rum from one island?', answer: 'No — Ten To One blends rum sourced from across the Caribbean into a single pan-Caribbean expression, rather than sourcing from one country or distillery.' }],
    }),
  },
  {
    categorySlug: 'aged-dark-rum', hubSlug: 'zaya', brandKeywords: ['Zaya'], name: 'Zaya',
    seo: brandSeo({
      brand: 'Zaya', categoryLabel: 'Aged Rum',
      titleTag: 'Zaya — 12 Year Gran Reserva Rum',
      h1: 'Zaya Rum — 12 Year Gran Reserva Allocations',
      metaDescription: 'Buy Zaya rum online — 12 Year Gran Reserva, a rich sipping rum blend with an excellent reputation for its price. Direct allocations at Aged & Amber.',
      hook: 'Zaya Gran Reserva blends rum aged an average of twelve years into a rich, dessert-like sipping profile that regularly punches above its price point in blind tastings.',
      faqs: [{ question: 'How old is Zaya rum?', answer: 'Zaya Gran Reserva is a blend averaging twelve years of age.' }],
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
      faqs: [{ question: 'How many botanicals does Tanqueray use?', answer: 'Tanqueray\'s core London Dry recipe uses just four botanicals — juniper, coriander, angelica root, and licorice — noticeably fewer than most gins, which contributes to its assertively dry, juniper-forward character.' }],
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
      faqs: [{ question: 'Is Aviation gin named after the cocktail?', answer: 'Yes — Aviation gin takes its name from the classic Aviation cocktail (gin, maraschino liqueur, crème de violette, and lemon), and its lighter juniper, floral profile was specifically designed to work well in that drink.' }],
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
      faqs: [{ question: 'Why is it called Monkey 47?', answer: 'The name references both the gin\'s 47 botanicals and Max the monkey, a rescued primate connected to the Berlin Zoo and Black Forest region history that inspired the brand\'s identity.' }],
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
      faqs: [{ question: 'Is The Botanist made by Bruichladdich?', answer: 'Yes — The Botanist is distilled at the Bruichladdich distillery on Islay, Scotland, better known for its single malt Scotch, using a converted Lomond pot still nicknamed "Ugly Betty" for its slow, gentle distillation.' }],
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
      faqs: [{ question: 'Is Roku a whisky or a gin?', answer: 'Roku is a gin, not a whisky — it\'s produced by Suntory, the Japanese company also known for Yamazaki and Hibiki whisky, which sometimes leads to the mix-up.' }],
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
      faqs: [{ question: 'What does "Drumshanbo" mean?', answer: 'Drumshanbo is the name of the small town in County Leitrim, Ireland, where The Shed Distillery is based — the gin is named directly for its hometown.' }],
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'barr-hill', brandKeywords: ['Barr Hill'], name: 'Barr Hill',
    seo: brandSeo({
      brand: 'Barr Hill', categoryLabel: 'Craft Gin',
      titleTag: 'Barr Hill — Raw Honey Vermont Gin',
      h1: 'Barr Hill Gin — Raw Honey-Finished Vermont Allocations',
      metaDescription: 'Buy Barr Hill online — Caledonia Spirits\' Vermont gin finished with raw honey instead of a standard botanical bittering agent. Free on $300+.',
      hook: 'Barr Hill, distilled by Caledonia Spirits in Vermont, finishes its gin with raw honey rather than a typical bittering botanical — a distinctive approach that gives the spirit a soft, floral sweetness alongside its juniper base.',
      faqs: [{ question: 'Does Barr Hill gin taste sweet?', answer: 'It has a noticeable but subtle honey sweetness rather than an overtly sugary taste — the raw honey rounds out and softens the juniper base rather than dominating it, so it still reads as a genuine gin rather than a liqueur.' }],
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'beefeater', brandKeywords: ['Beefeater'], name: 'Beefeater',
    seo: brandSeo({
      brand: 'Beefeater', categoryLabel: 'London Dry Gin',
      titleTag: 'Beefeater Gin — London Dry',
      h1: 'Beefeater London Dry Gin — Direct Allocations',
      metaDescription: 'Buy Beefeater gin online — the classic nine-botanical London Dry recipe, distilled in London since 1863. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Beefeater has used the same nine-botanical recipe since 1863, built on juniper, citrus peel, and coriander seed — and unlike most "London Dry" gins, it is still genuinely distilled within London city limits.',
      faqs: [{ question: 'Is Beefeater actually distilled in London?', answer: 'Yes — Beefeater is one of the few remaining gins genuinely distilled within London city limits, unlike most "London Dry" gins which can legally be made anywhere in the world under that production method.' }],
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
      faqs: [{ question: 'Is Bluecoat gin organic?', answer: 'Yes — Bluecoat is distilled from 100% certified organic botanicals, including its signature American citrus peels, distilled in small batches in hand-hammered copper pot stills in Philadelphia.' }],
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'bombay-sapphire', brandKeywords: ['Bombay Sapphire'], name: 'Bombay Sapphire',
    seo: brandSeo({
      brand: 'Bombay Sapphire', categoryLabel: 'London Dry Gin',
      titleTag: 'Bombay Sapphire Gin — London Dry',
      h1: 'Bombay Sapphire London Dry Gin — Direct Allocations',
      metaDescription: 'Buy Bombay Sapphire gin online — ten botanicals vapor-infused for a light, balanced London Dry. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Bombay Sapphire passes vapor through a basket of ten botanicals rather than boiling them directly, distilled at Laverstoke Mill in England — a lighter, more delicately blended profile than most London Dry gins.',
      faqs: [
        { question: 'Is Bombay Sapphire gluten-free?', answer: 'Yes — Bombay Sapphire is distilled from a grain-neutral spirit, and the distillation process removes gluten proteins, making it safe for most people with gluten sensitivity.' },
        { question: 'Where is Bombay Sapphire made?', answer: 'Bombay Sapphire is distilled at Laverstoke Mill in Hampshire, England, using a vapor-infusion process that passes spirit vapor through a basket of ten botanicals rather than boiling them directly in the still.' },
      ],
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
      faqs: [{ question: "What's with the bowler hat on Broker's gin bottles?", answer: "The miniature bowler hat sitting on the bottle's neck is a nod to the classic City of London stockbroker's uniform, tying back to the brand's name and English heritage." }],
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
      faqs: [{ question: "Is Gordon's the world's best-selling gin?", answer: "Gordon's is widely cited as the world's best-selling London Dry gin, with a recipe unchanged since Alexander Gordon founded the brand in London in 1769." }],
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'gray-whale', brandKeywords: ['Gray Whale'], name: 'Gray Whale',
    seo: brandSeo({
      brand: 'Gray Whale', categoryLabel: 'Craft Gin',
      titleTag: 'Gray Whale Gin — California Coastal',
      h1: 'Gray Whale Gin — California Coastal Botanical Allocations',
      metaDescription: 'Buy Gray Whale gin online — California craft gin built around coastal botanicals. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Gray Whale Gin is distilled in California around a botanical bill that draws on the state\'s Pacific coastline, giving it a distinctive regional character among American craft gins.',
      faqs: [{ question: 'What makes Gray Whale gin "coastal"?', answer: 'Golden State Distillery forages coastal botanicals like kelp and sage alongside traditional juniper, giving Gray Whale a savory, maritime character distinct from citrus-forward gin styles.' }],
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'ki-no-bi', brandKeywords: ['Ki No Bi', 'KiNoBi'], name: 'Ki No Bi',
    seo: brandSeo({
      brand: 'Ki No Bi', categoryLabel: 'Japanese Botanical Gin',
      titleTag: 'Ki No Bi Gin — Kyoto Dry',
      h1: 'Ki No Bi Kyoto Dry Gin — Direct Allocations',
      metaDescription: 'Buy Ki No Bi gin online — Kyoto Distillery\'s Japanese gin, built from six botanical categories including yuzu and gyokuro tea. Direct allocations.',
      hook: 'Ki No Bi is distilled by Kyoto Distillery from six categories of Japanese botanicals — including yuzu, gyokuro green tea, and sansho pepper — assembled through a multi-still blending process unique to the brand.',
      faqs: [{ question: 'What does "Ki No Bi" mean?', answer: '"Ki No Bi" translates roughly to "the essence of beauty" in Japanese — reflecting the brand\'s focus on Kyoto-sourced water and traditional Japanese botanicals distilled separately across six categories before blending.' }],
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
      faqs: [{ question: 'Is Malfy gin sweet?', answer: 'Malfy leans juicy and citrus-forward rather than sugary-sweet — Con Arancia carries real blood orange character with a bittersweet edge, while Con Limone is bright and tart rather than sweet.' }],
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
      faqs: [{ question: 'Why is it called "No. 3"?', answer: 'No. 3 St James\'s Street is the historic London address of Berry Bros. & Rudd, the wine and spirits merchant founded in 1698 that commissioned the gin — the name is a direct nod to the shop\'s address.' }],
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
      faqs: [{ question: 'What does "Sipsmith" mean?', answer: 'The name combines "sip" (how the founders wanted their gin enjoyed) with "smith" (a nod to traditional craftsmanship) — their copper pot still is nicknamed "Prudence."' }],
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
      faqs: [{ question: 'Where does the Douglas fir in Terroir gin come from?', answer: 'St. George Spirits wildcrafts Douglas fir and California bay laurel from a Mendocino County forest, harvested seasonally as part of local fire-abatement work, alongside ten additional botanicals.' }],
    }),
  },
  {
    categorySlug: 'artisanal-gin', hubSlug: 'whitley-neill', brandKeywords: ['Whitley Neill'], name: 'Whitley Neill',
    seo: brandSeo({
      brand: 'Whitley Neill', categoryLabel: 'Botanical Gin',
      titleTag: 'Whitley Neill — Raspberry Gin',
      h1: 'Whitley Neill Raspberry Gin — Direct Allocations',
      metaDescription: 'Buy Whitley Neill online — Scottish raspberries layered over a classic nine-botanical juniper base. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Whitley Neill layers ripe Scottish raspberries over a juniper, licorice, and citrus base, giving it a fruity, distinctive character — part of a wider range that includes baobab in its original flagship expression.',
      faqs: [{ question: 'Does Whitley Neill Raspberry gin contain baobab?', answer: 'No — baobab is a signature botanical in Whitley Neill\'s Original London Dry expression, but the Raspberry variant\'s actual botanical bill is juniper, coriander, cassia, orris root, angelica root, licorice, sweet orange, lemon, and raspberry.' }],
    }),
  },

  // ─── COGNAC & BRANDY ───────────────────────────────────────────
  {
    categorySlug: 'cognac-brandy', hubSlug: 'hennessy', brandKeywords: ['Hennessy'], name: 'Hennessy',
    seo: brandSeo({
      brand: 'Hennessy', categoryLabel: 'Cognac',
      titleTag: 'Hennessy — VS, VSOP, XO & Paradis',
      h1: 'Hennessy Cognac — VS, VSOP, XO, Paradis & Richard Allocations',
      metaDescription: 'Buy Hennessy online — VSOP, XO, Paradis, and the ultra-rare Richard Hennessy. The world’s best-selling cognac house. Direct allocations, free $300+.',
      hook: 'Hennessy is the world’s best-selling cognac house, founded in 1765 by an Irish officer in the French army — the VS, VSOP, and XO form the core range, with Paradis and the ultra-rare Richard Hennessy at the very top of the house.',
      transactionalCTA: 'Buy Hennessy online — direct allocations of VS, VSOP, XO, and Paradis, ships to 45 US states.',
      faqs: [{ question: 'Is Hennessy a cognac or brandy?', answer: 'Hennessy is a cognac, which is technically a type of brandy — but "cognac" specifically means brandy distilled in the Cognac region of France under strict production rules, so all cognac is brandy, though not all brandy is cognac.' }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'remy-martin', brandKeywords: ['Rémy Martin', 'Remy Martin'], name: 'Rémy Martin',
    seo: brandSeo({
      brand: 'Rémy Martin', categoryLabel: 'Cognac',
      titleTag: 'Rémy Martin — VSOP, XO, 1738 & Louis XIII',
      h1: 'Rémy Martin Cognac — VSOP, XO, 1738 Accord Royal & Louis XIII Allocations',
      metaDescription: 'Buy Rémy Martin online — VSOP, XO, 1738 Accord Royal, and the legendary Louis XIII. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Rémy Martin uses only grapes from the Grande and Petite Champagne crus — the two premier growing zones in the Cognac region — a designation known as "Fine Champagne" cognac. Louis XIII, its flagship ultra-luxury release, is blended from eaux-de-vie aged up to a century and sold in a hand-crafted Baccarat crystal decanter.',
      faqs: [{ question: 'Is Louis XIII made by Rémy Martin?', answer: 'Yes — Louis XIII is Rémy Martin\'s flagship ultra-premium cognac, blended from up to 1,200 different eaux-de-vie aged as long as 100 years, a fact that surprises many searchers since the two names aren\'t always paired together.' }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'courvoisier', brandKeywords: ['Courvoisier'], name: 'Courvoisier',
    seo: brandSeo({
      brand: 'Courvoisier', categoryLabel: 'Cognac',
      titleTag: 'Courvoisier — VS, VSOP, XO & L\'Essence',
      h1: 'Courvoisier Cognac — VS, VSOP, XO & L\'Essence Allocations',
      metaDescription: 'Buy Courvoisier online — VS, VSOP, XO, and the ultra-rare L\'Essence. A fruit-forward, Napoleon-era cognac house. Direct allocations, free $300+.',
      hook: 'Courvoisier is one of the oldest cognac houses, with a history tracing to Napoleon-era Paris — the VS, VSOP, and XO anchor a range known for a fruit-forward, approachable house style, with L\'Essence sitting at the pinnacle as one of the rarest cognacs ever released.',
      faqs: [{ question: 'How do you pronounce Courvoisier?', answer: 'Courvoisier is pronounced "koor-VWAH-zyay" — a common enough question that it\'s one of the most-searched things about the brand.' }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'martell', brandKeywords: ['Martell'], name: 'Martell',
    seo: brandSeo({
      brand: 'Martell', categoryLabel: 'Cognac',
      titleTag: 'Martell — VSOP, XO & Cordon Bleu Extra',
      h1: 'Martell Cognac — VS, VSOP, XO & Cordon Bleu Extra Allocations',
      metaDescription: 'Buy Martell online — VS Single Distillery, VSOP, XO, and Cordon Bleu Extra. The oldest major cognac house, founded 1715. Direct allocations, free $300+.',
      hook: 'Martell, founded in 1715, is the oldest of the major cognac houses — known for leaning more heavily on Borderies cru eaux-de-vie than its rivals, giving its range a distinctive violet and nutty character. Cordon Bleu Extra sits above the standard Cordon Bleu tier as a deeper, longer-aged expression.',
      faqs: [{ question: 'Is Martell the oldest cognac house?', answer: 'Yes — Martell was founded in 1715, making it the oldest of the "big four" cognac houses (Martell, Hennessy, Rémy Martin, and Courvoisier).' }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'dusse', brandKeywords: ["D'Ussé", 'Dusse'], name: "D'Ussé",
    seo: brandSeo({
      brand: "D'Ussé", categoryLabel: 'Cognac',
      titleTag: "D'Ussé — VSOP Cognac",
      h1: "D'Ussé VSOP Cognac — Direct Allocations",
      metaDescription: "Buy D'Ussé online — VSOP cognac sourced from independent Cognac growers for a fuller, slightly sweeter profile. Direct allocations, free $300+.",
      hook: "D'Ussé sources its eaux-de-vie from independent Cognac growers, blended and aged for a fuller, slightly sweeter VSOP profile than many house styles — co-owned by Bacardi and hip-hop artist Jay-Z, who has championed the brand since its 2012 US launch.",
      faqs: [{ question: "Who owns D'Ussé cognac?", answer: "D'Ussé is co-owned by Bacardi and Jay-Z, who partnered on the brand's US launch in 2012 and has been closely associated with promoting it since." }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'camus', brandKeywords: ['Camus'], name: 'Camus',
    seo: brandSeo({
      brand: 'Camus', categoryLabel: 'Cognac',
      titleTag: 'Camus — VSOP & XO Elegance',
      h1: 'Camus Cognac — VSOP & XO Elegance Allocations',
      metaDescription: 'Buy Camus online — VSOP and XO Elegance, built around rare Borderies-cru eaux-de-vie. Family-run since 1863. Direct allocations, free $300+.',
      hook: 'Camus has been family-run since 1863 and is best known for its rare Borderies-region eaux-de-vie, prized for their violet and nutty softness — the VSOP Elegance blends these with Grande and Petite Champagne stocks, while the XO Elegance leans further into the house\'s signature Borderies character.',
      faqs: [{ question: 'Is Camus a family-owned cognac house?', answer: 'Yes — Camus is the last major cognac house still owned and run by its founding family, now in its fifth generation since 1863.' }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'hine', brandKeywords: ['Hine'], name: 'Hine',
    seo: brandSeo({
      brand: 'Hine', categoryLabel: 'Cognac',
      titleTag: 'Hine — Rare VSOP, H by Hine & Antique XO',
      h1: 'Hine Cognac — Rare VSOP, H by Hine & Antique XO Allocations',
      metaDescription: 'Buy Hine online — Rare VSOP, H by Hine, and Antique XO. A historic cognac house favored by British royal warrant. Direct allocations, free $300+.',
      hook: 'Hine is a historic cognac house founded by an English family in 1763, long favored for its elegant, Grande Champagne-forward style — Rare VSOP, the accessible H by Hine, and the richer Antique XO span the range.',
      faqs: [{ question: 'Does Hine cognac hold a royal warrant?', answer: 'Yes — Hine has held a Royal Warrant as cognac supplier to the British royal court since the 18th century, a distinction tied to its English founding family.' }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'meukow', brandKeywords: ['Meukow'], name: 'Meukow',
    seo: brandSeo({
      brand: 'Meukow', categoryLabel: 'Cognac',
      titleTag: 'Meukow — VSOP Cognac',
      h1: 'Meukow Cognac — VSOP Allocations',
      metaDescription: 'Buy Meukow VSOP cognac online — family-owned since 1862, recognized by its black panther bottle. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Meukow has been family-run since 1862, one of the smaller independent houses still operating in Cognac today — instantly recognizable by the black panther on its bottle, a mark the family has used since the 19th century.',
      faqs: [{ question: 'How old is Meukow cognac?', answer: 'Meukow was founded in 1862 by Gustave Meukow and remains a family-owned Cognac house today.' }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'le-portier', brandKeywords: ['Le Portier'], name: 'Le Portier',
    seo: brandSeo({
      brand: 'Le Portier', categoryLabel: 'Cognac',
      titleTag: 'Le Portier — Shay VSOP Cognac',
      h1: 'Le Portier Cognac — Shay VSOP Allocations',
      metaDescription: 'Buy Le Portier Shay VSOP cognac online — a modern Cognac AOC house from the Charente region. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Le Portier is a modern Cognac house producing traditional Charente-region VSOP under contemporary branding aimed at drinkers exploring cognac for the first time — while still meeting the same AOC production standards as the region's oldest houses.",
      faqs: [{ question: 'What is Le Portier Shay VSOP?', answer: 'A VSOP-designated Cognac from the Charente region, aged a minimum of four years, produced by the modern Cognac house Le Portier.' }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'abk6', brandKeywords: ['ABK6'], name: 'ABK6',
    seo: brandSeo({
      brand: 'ABK6', categoryLabel: 'Cognac',
      titleTag: 'ABK6 — Single Estate VSOP Cognac',
      h1: 'ABK6 Cognac — Single Estate VSOP Allocations',
      metaDescription: 'Buy ABK6 VSOP cognac online — single-estate, grown and distilled entirely on one Fins Bois family property. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'ABK6 is grown, distilled, and aged entirely on a single family estate in the Fins Bois cru of Cognac — a genuinely single-estate cognac, rather than blended from purchased eaux-de-vie as most house-style cognacs are.',
      faqs: [{ question: 'What makes ABK6 different from other cognac brands?', answer: 'ABK6 is produced entirely on one family-owned estate in the Fins Bois cru — the grapes, distillation, and aging all happen on the same property, unlike most cognac houses that blend purchased eaux-de-vie.' }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'salignac', brandKeywords: ['Salignac'], name: 'Salignac',
    seo: brandSeo({
      brand: 'Salignac', categoryLabel: 'Cognac',
      titleTag: 'Salignac — Fine Champagne VSOP Cognac',
      h1: 'Salignac Cognac — Fine Champagne VSOP Allocations',
      metaDescription: 'Buy Salignac VSOP cognac online — a historic house since 1809, Fine Champagne designation. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Salignac has produced cognac since 1809, making it one of the older continuously operating houses in the region. Its VSOP carries the Fine Champagne designation, meaning it is blended entirely from Grande and Petite Champagne cru eaux-de-vie.',
      faqs: [{ question: 'What does "Fine Champagne" mean on a cognac label?', answer: 'Fine Champagne is a legal designation meaning the cognac is blended entirely from Grande Champagne and Petite Champagne cru eaux-de-vie, with at least 50% from Grande Champagne.' }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'villon', brandKeywords: ['Villon'], name: 'Villon',
    seo: brandSeo({
      brand: 'Villon', categoryLabel: 'Cognac',
      titleTag: 'Villon — VSOP Cognac Liqueur',
      h1: 'Villon Cognac Liqueur — VSOP Allocations',
      metaDescription: 'Buy Villon VSOP cognac liqueur online — built on genuine VSOP and XO cognac, softened for easy mixing. Direct allocations at Aged & Amber. Free $300+.',
      hook: "Villon is built on a base of genuine VSOP and XO cognac, then gently sweetened for a more approachable, mixable style than a traditional straight VSOP — positioned as a lower-cost entry point into cognac-based drinks rather than a sipping cognac.",
      faqs: [{ question: 'Is Villon a real cognac?', answer: "Villon is a cognac liqueur — it's built on a base of genuine VSOP and XO cognac blended with natural flavors, rather than being sold as a straight, unflavored cognac." }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'ararat', brandKeywords: ['Ararat'], name: 'Ararat',
    seo: brandSeo({
      brand: 'Ararat', categoryLabel: 'Brandy',
      titleTag: 'Ararat — Armenian Brandy',
      h1: 'Ararat Armenian Brandy — Allocations',
      metaDescription: "Buy Ararat Armenian brandy online — Yerevan Brandy Company's signature spirit since 1887, aged in Caucasian oak. Direct allocations at Aged & Amber. Free $300+.",
      hook: "Ararat is Armenia's best-known brandy, produced by the Yerevan Brandy Company since 1887 and aged in oak from the Caucasus mountains. It is a distinct Armenian spirit — legally and stylistically separate from French Cognac — with a history that reportedly includes an endorsement from Winston Churchill.",
      faqs: [{ question: 'Is Ararat a cognac?', answer: 'No — Ararat is Armenian brandy, a distinct spirit legally and stylistically separate from French Cognac, though it is often shelved alongside cognac and other brandies.' }],
    }),
  },
  {
    categorySlug: 'cognac-brandy', hubSlug: 'pierre-ferrand', brandKeywords: ['Pierre Ferrand'], name: 'Pierre Ferrand',
    seo: brandSeo({
      brand: 'Pierre Ferrand', categoryLabel: 'Cognac',
      titleTag: 'Pierre Ferrand — 10 Générations, 1840 & XO',
      h1: 'Pierre Ferrand Cognac — 10 Générations, 1840 Original Formula & XO Allocations',
      metaDescription: 'Buy Pierre Ferrand online — 10 Générations, 1840 Original Formula, and XO. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Pierre Ferrand is produced at the historic Château de Bonbonnet estate, known among bartenders for its 1840 Original Formula — a higher-proof, less-sweetened recipe modeled on 19th-century cognac styles before modern sugar dosing became common.',
      faqs: [{ question: 'What is Pierre Ferrand 1840 Original Formula?', answer: 'It\'s a higher-proof, less-sweetened cognac modeled on 19th-century production methods, before modern sugar dosing became standard — a favorite among bartenders for classic cocktails that call for pre-Prohibition-style cognac.' }],
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
      faqs: [
        { question: 'What is Grey Goose VX?', answer: "Grey Goose VX is a limited, richer expression finished with a touch of Cognac eau de vie — it is not currently part of our allocation. We carry the original Grey Goose, plus the L'Orange and La Poire flavored expressions." },
        { question: 'What is the best Grey Goose cocktail?', answer: "Grey Goose's clean, smooth profile makes it a popular base for a classic vodka martini, and its flavored expressions — L'Orange and La Poire — work well in citrus- or pear-forward cocktails and spritzes." },
      ],
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
      faqs: [
        { question: 'Who owns Cîroc?', answer: "Cîroc is owned by Diageo, with music executive Sean 'Diddy' Combs holding a longtime marketing and equity partnership in the brand that has shaped much of its cultural profile." },
        { question: 'What other Cîroc flavors exist?', answer: "Cîroc's wider range includes Apple, Coconut, Mango, and Watermelon, among others — we currently carry Peach, Pineapple, Red Berry, and the unflavored Ultra-Premium." },
      ],
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
      faqs: [
        { question: 'Is Belvedere vodka gluten free?', answer: 'Belvedere is distilled from 100% Dankowskie rye, a gluten-containing grain. Distillation removes proteins, and most people with gluten sensitivity tolerate distilled spirits fine, but Belvedere is not certified gluten-free the way corn- or potato-based vodkas often are.' },
        { question: 'How does Belvedere compare to Grey Goose?', answer: 'Both are premium single-origin vodkas, but Belvedere is distilled from Polish rye while Grey Goose uses French winter wheat — Belvedere tends to read slightly spicier and fuller-bodied, while Grey Goose is prized for an especially soft, rounded finish.' },
      ],
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
      faqs: [
        { question: 'Does Ketel One make an Espresso Martini?', answer: "Ketel One's clean wheat vodka is a popular base for an Espresso Martini, and the brand markets a ready-to-drink Espresso Martini alongside its vodka range." },
        { question: 'What Ketel One Botanicals flavors exist?', answer: "Ketel One Botanicals also makes a Peach and Orange Blossom expression — it is not currently part of our allocation. We carry Cucumber and Mint and Grapefruit and Rose, alongside the original Ketel One Vodka." },
      ],
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
      faqs: [
        { question: 'What is Crystal Head Aurora or Onyx?', answer: 'Aurora and Onyx are limited-edition colorway releases of the Crystal Head skull bottle — neither is currently part of our allocation. We carry the original Crystal Head Vodka and the John Alexander Art Edition.' },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'stolichnaya', brandKeywords: ['Stolichnaya', 'Stoli', 'Elit'], name: 'Stolichnaya',
    seo: brandSeo({
      brand: 'Stolichnaya', categoryLabel: 'Vodka',
      titleTag: 'Stolichnaya Elit — Freeze-Filtered Vodka',
      h1: 'Stolichnaya Elit Vodka — Freeze-Filtered Allocations',
      metaDescription: 'Buy Stolichnaya Elit online — Stoli\'s ultra-premium, freeze-filtered wheat and rye vodka. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Stolichnaya, commonly called "Stoli," is one of the most internationally recognised vodka names. We carry Elit, Stoli\'s ultra-premium tier — distilled from wheat and rye, then freeze-filtered at sub-zero temperatures for a noticeably silkier, more refined finish than the standard bottling.',
      faqs: [
        { question: 'What makes Stolichnaya Elit different from standard Stoli?', answer: 'Elit goes through an additional freeze-filtration step — chilled to sub-zero temperatures and passed through fine particles to strip impurities without dulling flavor — producing a richer, silkier vodka than Stolichnaya\'s standard bottling.' },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'absolut', brandKeywords: ['Absolut'], name: 'Absolut',
    seo: brandSeo({
      brand: 'Absolut', categoryLabel: 'Vodka',
      titleTag: 'Absolut — Swedish Wheat Vodka & Flavors',
      h1: 'Absolut Vodka — Citron, Mango, Raspberri, Vanilia & Original Allocations',
      metaDescription: 'Buy Absolut online — Swedish wheat vodka in Citron, Mango, Raspberri, Vanilia, and the original. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Absolut has been distilled in the small Swedish town of Åhus since 1879, continuously distilled from local winter wheat with no added sugar — one of the world's best-selling vodkas and one of the brands that built the modern flavored-vodka category.",
      faqs: [
        { question: 'What is Absolut Elyx?', answer: "Absolut Elyx is the brand's premium, single-estate copper-still-distilled line — it is not currently part of our allocation. We carry the classic Absolut range, including Citron, Mango, Raspberri, and Vanilia." },
        { question: 'Where is Absolut vodka made?', answer: 'All Absolut vodka sold worldwide is distilled in one place: Åhus, in southern Sweden, using locally grown winter wheat and the town\'s own well water.' },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'chopin', brandKeywords: ['Chopin'], name: 'Chopin',
    seo: brandSeo({
      brand: 'Chopin', categoryLabel: 'Vodka',
      titleTag: 'Chopin — Polish Potato Vodka',
      h1: 'Chopin Potato Vodka — Single-Estate Polish Allocations',
      metaDescription: 'Buy Chopin Potato Vodka online — single-estate Polish potato vodka with a full-bodied, creamy character. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Chopin is distilled in the Podlasie region of Poland from Stobrawa potatoes grown on a single estate, giving it a fuller-bodied, silkier texture than grain-based vodkas — one of the few major brands built entirely around the potato style.",
      faqs: [
        { question: 'Does Chopin make a rye or wheat vodka?', answer: "Yes — Chopin also produces Rye and Wheat expressions alongside its flagship Potato vodka, each distilled from a single grain type. We currently carry the Potato vodka, the brand's signature bottling." },
        { question: 'What makes potato vodka different from grain vodka?', answer: 'Potato vodka tends to have a fuller body and a slightly creamier, earthier texture than grain vodka, since potatoes carry more natural oils and starches through distillation. Chopin Potato is widely considered a benchmark example of the style.' },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'deep-eddy', brandKeywords: ['Deep Eddy'], name: 'Deep Eddy',
    seo: brandSeo({
      brand: 'Deep Eddy', categoryLabel: 'Vodka',
      titleTag: 'Deep Eddy — Austin, Texas Flavored Vodka',
      h1: 'Deep Eddy Vodka — Lemon, Ruby Red & Sweet Tea Allocations',
      metaDescription: 'Buy Deep Eddy online — Austin, Texas vodka in Lemon, Ruby Red, and Sweet Tea. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Deep Eddy is distilled from corn in Austin, Texas and named for the city's historic swimming hole — its flavored line, led by Lemon, helped popularize flavored vodka as its own category among American craft brands.",
      faqs: [
        { question: 'Is Deep Eddy Vodka still in business?', answer: "Yes. Owner Heaven Hill Brands is closing Deep Eddy's Dripping Springs tasting room, which hasn't served as a working distillery since 2017 — all Deep Eddy production continues at the brand's Austin-area facility with no change to output or staffing." },
        { question: 'What other Deep Eddy flavors exist?', answer: 'Beyond Lemon, Ruby Red, and Sweet Tea, Deep Eddy also makes Grapefruit, Pineapple, Lime, Orange, and Peach — we currently carry Lemon, Ruby Red, and Sweet Tea.' },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'haku', brandKeywords: ['Haku'], name: 'Haku',
    seo: brandSeo({
      brand: 'Haku', categoryLabel: 'Vodka',
      titleTag: 'Haku — Suntory Japanese Rice Vodka',
      h1: 'Haku Japanese Craft Vodka — Rice-Distilled Allocations',
      metaDescription: 'Buy Haku online — Suntory\'s Japanese craft vodka, distilled from white rice and filtered through bamboo charcoal. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Haku is Suntory\'s Japanese craft vodka, distilled from 100% white rice and polished through bamboo charcoal filtration — a distinctly Japanese take on vodka that trades grain or potato for rice as its base.',
      faqs: [
        { question: 'What makes Haku different from other vodkas?', answer: "Haku is distilled entirely from white rice rather than grain or potato, then filtered through bamboo charcoal — techniques drawn from Suntory's whisky-making heritage — for a delicately sweet, silky character." },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'new-amsterdam', brandKeywords: ['New Amsterdam'], name: 'New Amsterdam',
    seo: brandSeo({
      brand: 'New Amsterdam', categoryLabel: 'Vodka',
      titleTag: 'New Amsterdam — American Vodka & Flavors',
      h1: 'New Amsterdam Vodka — Peach, Pineapple, Watermelon & Original Allocations',
      metaDescription: 'Buy New Amsterdam online — five-times-distilled American vodka in Peach, Pineapple, Watermelon, and the original. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'New Amsterdam is distilled five times and filtered three times from a corn-and-grain blend at its Modesto, California facility, built for clean, reliably mixable everyday drinking.',
      faqs: [
        { question: 'Does New Amsterdam make Pink Whitney?', answer: "Pink Whitney is a separate, hugely popular New Amsterdam collaboration with comedian Whitney Cummings — it is not currently part of our allocation. We carry the core New Amsterdam range: Peach, Pineapple, Watermelon, and the original." },
        { question: 'What other New Amsterdam flavors exist?', answer: 'Beyond our range, New Amsterdam also produces Citron, Coconut, Mango, Raspberry, and Grapefruit — we currently carry Peach, Pineapple, Watermelon, and the unflavored original.' },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'pinnacle', brandKeywords: ['Pinnacle'], name: 'Pinnacle',
    seo: brandSeo({
      brand: 'Pinnacle', categoryLabel: 'Vodka',
      titleTag: 'Pinnacle — French Wheat Vodka',
      h1: 'Pinnacle Vodka — Five-Times-Distilled French Wheat Allocations',
      metaDescription: 'Buy Pinnacle Vodka online — French wheat vodka distilled five times at the Distillerie de la Tour. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Pinnacle is distilled five times from French wheat at the Distillerie de la Tour in France's Charente region and charcoal filtered, delivering approachable smoothness at an everyday price.",
      faqs: [
        { question: 'Does Pinnacle make flavored vodkas like Whipped Cream or Cotton Candy?', answer: "Yes — Pinnacle's flavor lineup is one of the largest in the category, including Whipped Cream, Cotton Candy, and Birthday Cake. We currently carry the classic unflavored Pinnacle Vodka; those flavors are not part of our allocation." },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'reyka', brandKeywords: ['Reyka'], name: 'Reyka',
    seo: brandSeo({
      brand: 'Reyka', categoryLabel: 'Vodka',
      titleTag: 'Reyka — Lava-Filtered Icelandic Vodka',
      h1: 'Reyka Icelandic Vodka — Lava Rock-Filtered Allocations',
      metaDescription: 'Buy Reyka online — Icelandic vodka distilled with geothermal energy and filtered through local lava rock. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Reyka is distilled in Borgarnes, Iceland from wheat and barley, using geothermal energy to power the stills and Icelandic lava rock to filter the final spirit for a clean, mineral character.',
      faqs: [
        { question: 'What makes Reyka an Icelandic vodka?', answer: 'Reyka is distilled and filtered entirely in Iceland — the stills run on geothermal energy and the spirit is filtered through local lava rock, both distinctly Icelandic touches that shape its clean, cool profile.' },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'smirnoff', brandKeywords: ['Smirnoff'], name: 'Smirnoff',
    seo: brandSeo({
      brand: 'Smirnoff', categoryLabel: 'Vodka',
      titleTag: 'Smirnoff — No. 21 & Flavored Vodka',
      h1: 'Smirnoff Vodka — No. 21, Peach, Raspberry & Strawberry Allocations',
      metaDescription: "Buy Smirnoff online — the world's best-selling vodka, No. 21 plus Peach, Raspberry, and Strawberry. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Smirnoff No. 21 follows a recipe dating to 1864, triple distilled and filtered through charcoal ten times for the dry, crisp neutrality that has made it the world's best-selling vodka.",
      faqs: [
        { question: 'What other Smirnoff flavors exist?', answer: 'Smirnoff produces a large flavored lineup beyond our range, including Green Apple, Whipped Cream, Vanilla, Kissed Caramel, and Watermelon — we currently carry No. 21, Peach, Raspberry, and Strawberry.' },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'sobieski', brandKeywords: ['Sobieski'], name: 'Sobieski',
    seo: brandSeo({
      brand: 'Sobieski', categoryLabel: 'Vodka',
      titleTag: 'Sobieski — Polish Rye Vodka',
      h1: 'Sobieski Vodka — 100% Polish Rye Allocations',
      metaDescription: 'Buy Sobieski online — 95-point Polish rye vodka distilled from a single grain estate. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Sobieski is distilled at Destylarnia Sobieski in Starogard Gdański from 100% Dankowskie rye grown on the distillery's own farmland, quadruple distilled for a smooth, distinctly rye-forward character that has earned critical scores among the world's best vodkas at a value price.",
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'svedka', brandKeywords: ['Svedka'], name: 'Svedka',
    seo: brandSeo({
      brand: 'Svedka', categoryLabel: 'Vodka',
      titleTag: 'Svedka — Swedish Wheat Vodka & Flavors',
      h1: 'Svedka Vodka — Mango Pineapple, Strawberry Lemonade & Original Allocations',
      metaDescription: 'Buy Svedka online — imported Swedish wheat vodka in Mango Pineapple, Strawberry Lemonade, and the original. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Svedka is continuously distilled from Swedish winter wheat and filtered for clarity, delivering a clean, neutral profile that has made it one of the top-selling imported vodkas in the U.S.',
      faqs: [
        { question: 'What other Svedka flavors exist?', answer: 'Svedka\'s wider range includes Blue Raspberry, Clementine, Cucumber Lime, and Cherry Limeade — we currently carry Mango Pineapple, Strawberry Lemonade, and the unflavored original.' },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'wheatley', brandKeywords: ['Wheatley'], name: 'Wheatley',
    seo: brandSeo({
      brand: 'Wheatley', categoryLabel: 'Vodka',
      titleTag: 'Wheatley — Buffalo Trace Vodka',
      h1: 'Wheatley Vodka — Buffalo Trace Distillery Allocations',
      metaDescription: 'Buy Wheatley Vodka online — a premium wheat-and-corn vodka distilled at Buffalo Trace. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Wheatley Vodka is distilled at Buffalo Trace Distillery in Frankfort, Kentucky from a wheat-and-corn blend and bottled at a slightly higher 82 proof — named for master distiller Harlen Wheatley.",
      faqs: [
        { question: 'Who is Wheatley named after?', answer: "Wheatley Vodka is named for Harlen Wheatley, Buffalo Trace's longtime master distiller, who also oversees the distillery's bourbon and whiskey production." },
        { question: 'Is there a Wheatley Vodka x Cody Rhodes release?', answer: 'Yes — Buffalo Trace released a limited Wheatley Vodka collaboration bottle with WWE star Cody Rhodes. Availability of that specific release varies; our core allocation is the standard Wheatley Vodka.' },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'luksusowa', brandKeywords: ['Luksusowa'], name: 'Luksusowa',
    seo: brandSeo({
      brand: 'Luksusowa', categoryLabel: 'Vodka',
      titleTag: 'Luksusowa — Polish Potato Vodka Since 1928',
      h1: 'Luksusowa Potato Vodka — Polish Allocations Since 1928',
      metaDescription: 'Buy Luksusowa online — 100% Polish potato vodka distilled since 1928. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Luksusowa — Polish for "luxurious" — has been distilled from 100% Polish potatoes since 1928, using traditional methods that preserve the earthy richness potato vodkas are known for.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'broken-shed', brandKeywords: ['Broken Shed'], name: 'Broken Shed',
    seo: brandSeo({
      brand: 'Broken Shed', categoryLabel: 'Vodka',
      titleTag: 'Broken Shed — New Zealand Whey-Distilled Vodka',
      h1: 'Broken Shed Vodka — New Zealand Whey-Distilled Allocations',
      metaDescription: 'Buy Broken Shed online — a creamy, whey-distilled vodka handcrafted in Wanaka, New Zealand. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Broken Shed is handcrafted in Wanaka, New Zealand and distilled from whey rather than grain or potato — a rare choice that lends a naturally soft, creamy mouthfeel — then cut with mineral-rich South Island water and filtered North Island spring water.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'prairie-organic', brandKeywords: ['Prairie Organic', 'Prairie'], name: 'Prairie Organic',
    seo: brandSeo({
      brand: 'Prairie Organic', categoryLabel: 'Vodka',
      titleTag: 'Prairie Organic — Minnesota Organic Corn Vodka',
      h1: 'Prairie Organic Vodka — Certified Organic Corn Allocations',
      metaDescription: 'Buy Prairie Organic Vodka online — certified organic corn vodka distilled in Minnesota. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Prairie Organic is distilled in Princeton, Minnesota from certified organic corn, prized for a subtly sweet, approachable profile among the small field of organic-certified vodka brands.',
      faqs: [
        { question: 'Does Prairie Organic make a cucumber vodka?', answer: 'Yes — Prairie also produces an organic Cucumber vodka, a real line extension not currently part of our allocation. We carry the flagship unflavored Prairie Organic Vodka.' },
      ],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'hanson-of-sonoma', brandKeywords: ['Hanson of Sonoma', 'Hanson'], name: 'Hanson of Sonoma',
    seo: brandSeo({
      // No SEMrush volume data found for this brand — sourced via WebSearch, generic/inferred keywords, not volume-backed.
      brand: 'Hanson of Sonoma', categoryLabel: 'Vodka',
      titleTag: 'Hanson of Sonoma — Organic Grape Vodka',
      h1: 'Hanson of Sonoma Organic Vodka — California Grape-Distilled Allocations',
      metaDescription: 'Buy Hanson of Sonoma online — small-batch organic grape vodka distilled in the Carneros region of Sonoma, California. Direct allocations at Aged & Amber. Free $300+.',
      hook: "Hanson of Sonoma is a family-owned distillery in Sonoma's Carneros region, distilling small-batch vodka from organic Sauvignon Blanc, Chardonnay, and French Colombard grapes — one of the first spirits producers in the U.S. to offer a certified non-GMO product.",
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'woody-creek-distillers', brandKeywords: ['Woody Creek', 'Woody Creek Distillers'], name: 'Woody Creek Distillers',
    seo: brandSeo({
      // No SEMrush volume data found for this brand — sourced via WebSearch, generic/inferred keywords, not volume-backed.
      brand: 'Woody Creek Distillers', categoryLabel: 'Vodka',
      titleTag: 'Woody Creek Distillers — Colorado Potato Vodka',
      h1: 'Woody Creek Distillers Potato Vodka — Colorado-Grown Allocations',
      metaDescription: 'Buy Woody Creek Distillers Potato Vodka online — distilled from potatoes grown on the distillery\'s own Colorado farms. Direct allocations at Aged & Amber. Free $300+.',
      hook: "Woody Creek Distillers, based in Basalt, Colorado since 2012, grows its own potatoes on Colorado farmland — including a rare Polish Stobrawa variety it received special USDA approval to cultivate — and distills them once in a custom column still for a full-bodied, velvety vodka.",
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'blue-ice', brandKeywords: ['Blue Ice'], name: 'Blue Ice',
    seo: brandSeo({
      // No SEMrush volume data found for this brand — sourced via WebSearch, generic/inferred keywords, not volume-backed.
      brand: 'Blue Ice', categoryLabel: 'Vodka',
      titleTag: 'Blue Ice — Idaho Potato Vodka',
      h1: 'Blue Ice Potato Vodka — Idaho-Distilled Allocations',
      metaDescription: 'Buy Blue Ice Potato Vodka online — distilled from Idaho Russet potatoes and filtered five times. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Blue Ice is distilled by 21st Century Spirits in Rigby, Idaho from local Russet potatoes and cut with water drawn from the Snake River Aquifer, then filtered five times for a smooth, creamy character.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'boyd-blair', brandKeywords: ['Boyd & Blair', 'Boyd and Blair'], name: 'Boyd & Blair',
    seo: brandSeo({
      // No SEMrush volume data found for this brand — sourced via WebSearch, generic/inferred keywords, not volume-backed.
      brand: 'Boyd & Blair', categoryLabel: 'Vodka',
      titleTag: 'Boyd & Blair — Pennsylvania Potato Vodka',
      h1: 'Boyd & Blair Potato Vodka — Pennsylvania Craft Allocations',
      metaDescription: 'Buy Boyd & Blair Potato Vodka online — small-batch Pennsylvania potato vodka, hand-bottled and hearts-only distilled. Direct allocations at Aged & Amber. Free $300+.',
      hook: "Boyd & Blair is distilled in Glenshaw, Pennsylvania from locally grown potatoes using a strict hearts-only bottling policy — discarding both the heads and tails of the distillate for purity over yield — and has been ranked among the world's top vodkas by the Spirit Journal.",
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'crop', brandKeywords: ['Crop'], name: 'Crop',
    seo: brandSeo({
      // No SEMrush volume data found for this brand — sourced via WebSearch, generic/inferred keywords, not volume-backed.
      brand: 'Crop', categoryLabel: 'Vodka',
      titleTag: 'Crop — Organic Artisanal Vodka',
      h1: 'Crop Organic Vodka — USDA-Certified Minnesota Allocations',
      metaDescription: 'Buy Crop Organic Vodka online — USDA-certified organic, gluten-free artisanal vodka distilled in Minnesota. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Crop Harvest Earth distills its Artisanal Vodka from certified organic grain in Princeton, Minnesota, using additive-free methods and grain grown without artificial fertilizers or pesticides — prized for a light, clean, precise character.',
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'beluga', brandKeywords: ['Beluga'], name: 'Beluga',
    seo: brandSeo({
      brand: 'Beluga', categoryLabel: 'Vodka',
      titleTag: 'Beluga — Premium Russian Vodka',
      h1: 'Beluga Vodka — Noble, Allocations',
      metaDescription: 'Buy Beluga vodka online — Noble, a premium Siberian-distilled vodka rested with malt spirit. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Beluga distills its vodka in Siberia from malted grain and rests it with additional malt spirit before filtering — a process the house says softens the profile — finished with its signature sturgeon-cartilage filtration.',
      faqs: [{ question: 'What makes Beluga vodka different?', answer: "Beluga rests its vodka with additional malt spirit before bottling and filters it through sturgeon cartilage, both unusual steps in vodka production most brands skip." }],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'burnetts', brandKeywords: ["Burnett's", 'Burnetts'], name: "Burnett's",
    seo: brandSeo({
      brand: "Burnett's", categoryLabel: 'Vodka',
      titleTag: "Burnett's — Value Flavored Vodka",
      h1: "Burnett's Vodka — Original & Flavored Allocations",
      metaDescription: "Buy Burnett's vodka online — one of the largest flavored-vodka lineups in the category at a value price. Direct allocations at Aged & Amber. Free $300+.",
      hook: "Burnett's built its identity around sheer flavor variety, offering dozens of fruit, sweet, and spiced vodka flavors at a value price point.",
      faqs: [{ question: "How many flavors does Burnett's vodka make?", answer: "Burnett's offers dozens of flavors across fruit, sweet, and spiced categories, one of the largest flavored-vodka lineups on the market." }],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'effen', brandKeywords: ['Effen'], name: 'Effen',
    seo: brandSeo({
      brand: 'Effen', categoryLabel: 'Vodka',
      titleTag: 'Effen — French Wheat Vodka',
      h1: 'Effen Vodka — Black Cherry, Allocations',
      metaDescription: 'Buy Effen vodka online — French wheat vodka in a signature engraved-glass bottle, including Black Cherry. Direct allocations at Aged & Amber. Free $300+.',
      hook: "Effen distills a French wheat vodka base, known for its distinctive engraved-glass bottle design and a flavor lineup including Black Cherry and Cucumber.",
      faqs: [{ question: 'What is Effen vodka made from?', answer: 'Effen is distilled from French wheat.' }],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'level', brandKeywords: ['Level'], name: 'Level',
    seo: brandSeo({
      brand: 'Level', categoryLabel: 'Vodka',
      titleTag: 'Level — Absolut\'s Premium Sister Line',
      h1: 'Level Vodka — Allocations',
      metaDescription: "Buy Level vodka online — Absolut's premium sister line, distilled and filtered separately for a smoother profile. Direct allocations at Aged & Amber. Free $300+.",
      hook: 'Level is produced by Absolut as a step-up premium line, distilled and charcoal-filtered separately from the standard Absolut process for a smoother, more refined profile.',
      faqs: [{ question: 'Who makes Level vodka?', answer: 'Level is produced by Absolut/Pernod Ricard as a premium line above the standard Absolut range.' }],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'skyy', brandKeywords: ['SKYY', 'Skyy'], name: 'SKYY',
    seo: brandSeo({
      brand: 'SKYY', categoryLabel: 'Vodka',
      titleTag: 'SKYY — Quadruple-Distilled American Vodka',
      h1: 'SKYY Vodka — Original & Infusions, Allocations',
      metaDescription: 'Buy SKYY vodka online — San Francisco-founded, quadruple-distilled and triple-filtered, including the Infusions real-fruit line. Direct allocations at Aged & Amber.',
      hook: 'SKYY was founded in San Francisco in 1992 and built its identity around a proprietary four-column distillation and triple-filtration process aimed at reducing congeners and impurities.',
      faqs: [{ question: 'Where is SKYY vodka made?', answer: 'SKYY was founded in San Francisco, California, in 1992.' }],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'three-olives', brandKeywords: ['Three Olives'], name: 'Three Olives',
    seo: brandSeo({
      brand: 'Three Olives', categoryLabel: 'Vodka',
      titleTag: 'Three Olives — British Flavored Vodka',
      h1: 'Three Olives Vodka — Flavors, Allocations',
      metaDescription: 'Buy Three Olives vodka online — British-distilled, built around a wide, playful flavored-vodka lineup. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Three Olives is distilled in England and built its identity around a wide flavored-vodka lineup spanning fruit and dessert-inspired flavors.",
      faqs: [{ question: 'Where is Three Olives vodka made?', answer: 'Three Olives is distilled in England.' }],
    }),
  },
  {
    categorySlug: 'craft-vodka', hubSlug: 'zubrowka', brandKeywords: ['Żubrówka', 'Zubrowka'], name: 'Żubrówka',
    seo: brandSeo({
      brand: 'Żubrówka', categoryLabel: 'Vodka',
      titleTag: 'Żubrówka — Polish Bison Grass Vodka',
      h1: 'Żubrówka Bison Grass Vodka — Allocations',
      metaDescription: 'Buy Żubrówka vodka online — Polish rye vodka infused with bison grass from the Białowieża Forest. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Żubrówka is distilled from rye and infused with bison grass harvested from Poland's Białowieża Forest, giving it a distinctive, slightly sweet, herbal character unlike any other widely available vodka.",
      faqs: [{ question: 'What gives Żubrówka its flavor?', answer: "Żubrówka is infused with bison grass (żubrówka in Polish) harvested from Poland's Białowieża Forest, giving it a distinctive herbal, vanilla-like note." }],
    }),
  },

  // ─── NON-ALCOHOLIC SPIRITS ───────────────────────────────────────────
  {
    categorySlug: 'na-spirits', hubSlug: 'seedlip', brandKeywords: ['Seedlip'], name: 'Seedlip',
    seo: brandSeo({
      brand: 'Seedlip', categoryLabel: 'Non-Alcoholic Spirits', titleTag: 'Seedlip — Garden 108 & Grove 42',
      h1: 'Seedlip Non-Alcoholic Spirits — Garden 108 & Grove 42 Allocations',
      metaDescription: 'Buy Seedlip online — Garden 108 and Grove 42, the world’s first distilled non-alcoholic spirit. Direct allocations at Aged & Amber. Free $300+.',
      hook: 'Seedlip was the world’s first widely distributed non-alcoholic distilled spirit, launched in 2015 — each botanical blend is genuinely distilled rather than simply de-alcoholised, aiming to replicate the complexity of gin or whiskey without the ethanol. Garden 108 (peas and garden herbs) and Grove 42 (citrus-forward) are stocked here.',
      faqs: [
        { question: 'Is Seedlip really distilled?', answer: 'Yes — unlike many non-alcoholic spirits that simply blend flavorings, Seedlip’s botanicals are copper-pot distilled individually before blending, the same core technique used for gin.' },
      ],
    }),
  },
  {
    categorySlug: 'na-spirits', hubSlug: 'lyres', brandKeywords: ["Lyre's", 'Lyres'], name: "Lyre's",
    seo: brandSeo({
      brand: "Lyre's", categoryLabel: 'Non-Alcoholic Spirits',
      titleTag: "Lyre's — Non-Alcoholic Spirit Alternatives",
      h1: "Lyre's Non-Alcoholic Spirits — Whiskey, Gin, Agave & Aperitif Allocations",
      metaDescription: "Buy Lyre's online — non-alcoholic alternatives modeled on whiskey, gin, agave, and aperitif styles. Direct allocations. Free shipping on $300+.",
      hook: "Lyre's produces one of the widest non-alcoholic spirit ranges available, with alternatives modelled on whiskey, gin, agave, rum, and aperitif styles, each built to work as a direct swap in classic cocktail recipes.",
    }),
  },
  {
    categorySlug: 'na-spirits', hubSlug: 'ritual', brandKeywords: ['Ritual'], name: 'Ritual Zero Proof',
    seo: brandSeo({
      brand: 'Ritual Zero Proof', categoryLabel: 'Non-Alcoholic Spirits',
      titleTag: 'Ritual Zero Proof — Non-Alcoholic Spirits',
      h1: 'Ritual Zero Proof — Whiskey, Tequila, Gin & Rum Alternative Allocations',
      metaDescription: 'Buy Ritual Zero Proof online — non-alcoholic whiskey, tequila, gin, and rum alternatives. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Ritual Zero Proof makes non-alcoholic alternatives across whiskey, tequila, gin, and rum styles, formulated to deliver the bite and mouthfeel of the real spirit without alcohol, calories, or added sugar. Diageo acquired Ritual in September 2024.',
      faqs: [
        { question: 'Is Ritual Zero Proof good?', answer: 'It’s built specifically to deliver the bite, aroma, and mouthfeel of real spirits rather than just flavoring water — reviewers commonly cite it as one of the more convincing zero-proof lines for classic cocktail builds.' },
        { question: 'How is Ritual made without any alcohol?', answer: 'Through a formulation process using real botanicals and flavor compounds rather than distillation — no fermentation or alcohol is ever produced in the process.' },
      ],
    }),
  },
  {
    categorySlug: 'na-spirits', hubSlug: 'cut-above', brandKeywords: ['Cut Above'], name: 'Cut Above',
    seo: brandSeo({
      brand: 'Cut Above', categoryLabel: 'Non-Alcoholic Spirits',
      titleTag: 'Cut Above — Zero Proof Agave Blanco & Mezcal',
      h1: 'Cut Above — Zero Proof Agave Blanco & Mezcal',
      metaDescription: 'Buy Cut Above online — Zero Proof Agave Blanco and Mezcal. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Cut Above is an independent (not Diageo-owned) non-alcoholic spirits brand out of Houston, Texas, offering four award-winning zero-proof spirits: Whiskey, Agave Blanco, Mezcal, and Gin. The two stocked here — Agave Blanco and Mezcal — are the brand’s tequila-style pair.',
    }),
  },
  {
    categorySlug: 'na-spirits', hubSlug: 'free-spirits', brandKeywords: ['Free Spirits', 'The Spirit of'], name: 'Free Spirits',
    seo: brandSeo({
      brand: 'Free Spirits', categoryLabel: 'Non-Alcoholic Spirits',
      titleTag: 'Free Spirits — The Spirit of Bourbon, Gin & Tequila',
      h1: 'Free Spirits — The Spirit of Bourbon, Gin & Tequila',
      metaDescription: 'Buy Free Spirits online — The Spirit of Bourbon, Gin, and Tequila. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'The Free Spirits Company is based in Marin County, California, and uses a proprietary process called "Distillate Reconstruction" — distilling the natural essence of real ingredients (American White Oak, European juniper, Mexican blue agave) and reconstructing the nose, flavor, and mouthfeel without alcohol. All three stocked SKUs (Bourbon, Gin, Tequila) represent the brand’s complete core "Spirit of" trio.',
    }),
  },
  {
    categorySlug: 'na-spirits', hubSlug: 'monday', brandKeywords: ['Monday', 'Drink Monday'], name: 'Monday',
    seo: brandSeo({
      brand: 'Monday', categoryLabel: 'Non-Alcoholic Spirits',
      titleTag: 'Monday — Zero Alcohol Gin & Whiskey',
      h1: 'Monday — Zero Alcohol Gin & Whiskey',
      metaDescription: 'Buy Monday online — Zero Alcohol Gin and Whiskey. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Drink Monday was founded in 2019 in Los Angeles by Ben Acott and Chris Boyd — the name comes from co-founder Chris Boyd switching to water mid-celebration at his own birthday because "tomorrow is Monday and I have sh!t to do." Spirits are handcrafted at LA’s oldest distillery with zero sugar, zero carbs, and zero calories per pour.',
      faqs: [
        { question: 'Why is it called Monday?', answer: 'Co-founder Chris Boyd was asked why he was switching to water mid-celebration and replied it was because Monday — and everything he had to do — was coming; the answer became the brand name.' },
      ],
    }),
  },

  // ─── FINE WINE ───────────────────────────────────────────
  {
    categorySlug: 'fine-wine', hubSlug: 'josh-cellars', brandKeywords: ['Josh Cellars', 'Josh'], name: 'Josh Cellars',
    seo: brandSeo({
      brand: 'Josh Cellars', categoryLabel: 'Wine',
      titleTag: 'Josh Cellars — Cabernet, Chardonnay, Pinot Noir & More',
      h1: 'Josh Cellars — California Cabernet, Chardonnay, Pinot Noir, Red Blend & Sauvignon Blanc',
      metaDescription: 'Buy Josh Cellars online — Cabernet Sauvignon, Legacy Red Blend, Pinot Noir, Chardonnay, and Sauvignon Blanc. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Josh Cellars was founded in 2013 by third-generation winemaker Joseph Carr, named for his father, Josh. The brand built its reputation on accessible, consistently well-made California wine at a below-reserve price — the Cabernet Sauvignon remains its flagship, extended across a full range of reds and whites sourced from appellations up and down the state.',
      faqs: [
        { question: 'Is Josh Cellars a good everyday wine brand?', answer: "Josh Cellars is built specifically for reliable, reserve-style quality at an everyday price — it's one of the best-known value brands in US wine for exactly that reason, consistent vintage to vintage rather than aiming for critic-score prestige." },
        { question: 'Who makes Josh Cellars wine?', answer: 'Josh Cellars is produced by Vintage Wine Estates, sourcing California fruit across multiple appellations depending on the varietal, under founder Joseph Carr.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'decoy', brandKeywords: ['Decoy'], name: 'Decoy',
    seo: brandSeo({
      brand: 'Decoy', categoryLabel: 'Wine',
      titleTag: 'Decoy — Cabernet Sauvignon, Merlot & Sauvignon Blanc',
      h1: 'Decoy Wine — Cabernet Sauvignon, Merlot & Sauvignon Blanc Allocations',
      metaDescription: 'Buy Decoy wine online — Duckhorn Vineyards’ second label, Cabernet Sauvignon, Merlot, and Sauvignon Blanc. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Decoy is Duckhorn Vineyards' second label, launched in 1985 to make use of young-vine fruit and select lots not destined for flagship Duckhorn bottlings — built for earlier, more approachable drinking than the winery's top-tier releases while keeping the same Napa/Sonoma sourcing standards.",
      faqs: [
        { question: 'Who owns Decoy wine?', answer: 'Decoy is owned by Duckhorn Vineyards, one of Napa and Sonoma’s most established producers — Decoy was created as its accessible second label in 1985.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'catena', brandKeywords: ['Catena', 'Catena Zapata'], name: 'Catena / Catena Zapata',
    seo: brandSeo({
      brand: 'Catena', categoryLabel: 'Malbec',
      titleTag: 'Catena & Catena Zapata — High-Altitude Mendoza Malbec',
      h1: 'Catena & Catena Zapata Malbec — High-Altitude Mendoza Allocations',
      metaDescription: 'Buy Catena and Catena Zapata Malbec online — high-altitude Mendoza, Argentina fruit from the family credited with proving Malbec as a serious fine wine. Free on $300+.',
      hook: "The Catena family has grown grapes in Mendoza, Argentina since 1902. Nicolás Catena Zapata is widely credited with proving Malbec could be a serious high-altitude fine wine rather than a bulk blending grape, planting vineyards well above 3,000 feet to slow ripening and concentrate flavor. Catena Malbec and Catena Zapata Malbec Argentino are two distinct tiers of the same estate's fruit.",
      faqs: [
        { question: "Where are Catena's vineyards?", answer: 'High-altitude sites across Mendoza, including the Gualtallary and Adrianna Vineyard areas of the Uco Valley — elevation is central to the estate’s style, slowing ripening for more structure and aromatic lift than lower-altitude Malbec.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'the-prisoner', brandKeywords: ['The Prisoner', 'Prisoner Wine Company'], name: 'The Prisoner Wine Company',
    seo: brandSeo({
      brand: 'The Prisoner', categoryLabel: 'Wine',
      titleTag: 'The Prisoner — Red Blend & White Blend',
      h1: 'The Prisoner Wine Company — Red Blend & Blindfold White Blend Allocations',
      metaDescription: 'Buy The Prisoner wine online — the Red Blend and Blindfold White Blend from The Prisoner Wine Company. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'The Prisoner was founded by winemaker Dave Phinney, who also founded Orin Swift before selling both brands. Its name and label — drawn from a Francisco Goya etching — set the tone for a deliberately unconventional, multi-varietal blending style. The Prisoner Wine Company is now part of Constellation Brands.',
      faqs: [
        { question: 'Who makes The Prisoner wine?', answer: 'The Prisoner Wine Company was founded by Dave Phinney, who also founded Orin Swift before selling both brands; The Prisoner is now owned by Constellation Brands.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'dr-loosen', brandKeywords: ['Dr. Loosen', 'Dr Loosen'], name: 'Dr. Loosen',
    seo: brandSeo({
      brand: 'Dr. Loosen', categoryLabel: 'Riesling',
      titleTag: 'Dr. Loosen — Mosel Valley Riesling & Eiswein',
      h1: 'Dr. Loosen Riesling & Eiswein — Mosel Valley Allocations',
      metaDescription: 'Buy Dr. Loosen online — Dr. L Riesling, Blue Slate Riesling Kabinett, and Riesling Eiswein from the Mosel Valley. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Dr. Loosen is a historic Mosel Valley estate based in Bernkastel, Germany, run by Ernst “Erni” Loosen, with vineyard holdings on some of the Mosel's steepest blue-slate slopes. Dr. L Riesling is the estate's accessible, off-dry entry point; Blue Slate Kabinett reflects the estate's terroir with more structure; the Riesling Eiswein is a genuine frozen-grape harvest, made only when winter conditions allow.",
      faqs: [
        { question: 'Is Dr. Loosen Riesling sweet?', answer: 'It depends on the bottling — Dr. L is an approachable, slightly off-dry style; Blue Slate Kabinett carries a touch more residual sweetness balanced by Mosel acidity; the Eiswein is genuinely dessert-sweet, concentrated by freezing the grapes on the vine.' },
        { question: 'How do you pronounce "Loosen"?', answer: 'Roughly "LOH-zen" — a common stumbling block for English speakers given the estate’s prominence.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'barefoot', brandKeywords: ['Barefoot'], name: 'Barefoot',
    seo: brandSeo({
      brand: 'Barefoot', categoryLabel: 'Wine',
      titleTag: 'Barefoot — Moscato & Pink Moscato',
      h1: 'Barefoot Wine — Moscato & Pink Moscato Allocations',
      metaDescription: 'Buy Barefoot wine online — Moscato and Pink Moscato. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Barefoot Cellars was founded in 1965 in Sonoma County and has grown into the best-selling wine brand in the US, now owned by E. & J. Gallo. Its Moscato and Pink Moscato sit at the sweeter, easy-drinking end of the range, aimed squarely at approachable, everyday sipping rather than cellar-worthy structure.",
      faqs: [
        { question: 'Is Barefoot Moscato sweet?', answer: 'Yes — Moscato is one of the sweeter styles in the Barefoot range, light-bodied with fresh peach and orange-blossom character, and Pink Moscato adds a touch of red-grape fruitiness on top.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'risata', brandKeywords: ['Risata'], name: 'Risata',
    seo: brandSeo({
      brand: 'Risata', categoryLabel: 'Moscato',
      titleTag: "Risata — Moscato d'Asti & Moscato Rosé",
      h1: "Risata Moscato d'Asti & Rosé — Piedmont Allocations",
      metaDescription: "Buy Risata wine online — Moscato d'Asti and Moscato Rosé in the brand's signature cobalt-blue bottle. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Risata sources its Moscato d'Asti from Italy's Piedmont region, imported and distributed through Trinchero Family Estates — the same family behind Sutter Home — and is instantly recognizable by its signature cobalt-blue bottle across both the classic Moscato d'Asti and the Moscato Rosé.",
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'grahams', brandKeywords: ["Graham's", 'Grahams'], name: "Graham's",
    seo: brandSeo({
      brand: "Graham's", categoryLabel: 'Port',
      titleTag: "Graham's — Tawny & Late Bottled Vintage Port",
      h1: "Graham's Port — 10 & 20 Year Tawny, LBV & Six Grapes Allocations",
      metaDescription: "Buy Graham's Port online — 10 and 20 Year Old Tawny, Late Bottled Vintage, and Six Grapes Reserve. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Graham's was founded in 1820 when Scottish brothers William and John Graham accepted 27 barrels of port as debt repayment. The house became a serious Douro Valley producer after acquiring Quinta dos Malvedos in 1890 — still the backbone of its vintage and tawny blends — and has been owned by the Symington family, Portugal's most storied port dynasty, since 1970.",
      faqs: [
        { question: 'What is tawny port?', answer: "Tawny port is aged in wood casks rather than bottle, taking on nutty, caramelized notes as it slowly oxidizes over years. Graham's tawny range runs from 10 to 40 Year Old in the tiers stocked here, with real expressions up to 80 Year Old in the full lineup." },
        { question: "What's the difference between Graham's tawny and ruby styles?", answer: 'Ruby styles like Six Grapes are bottled young to preserve bright fruit character; tawny is barrel-aged for years to develop nutty, dried-fruit complexity instead.' },
        { question: 'What is LBV port?', answer: "Late Bottled Vintage is made from a single strong year's harvest and aged longer in barrel than standard vintage port, so it's ready to drink without decanting." },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'taylor-fladgate', brandKeywords: ['Taylor Fladgate', "Taylor's"], name: 'Taylor Fladgate',
    seo: brandSeo({
      brand: 'Taylor Fladgate', categoryLabel: 'Port',
      titleTag: 'Taylor Fladgate — Tawny, Ruby & Late Bottled Vintage Port',
      h1: 'Taylor Fladgate Port — 10, 20 & 40 Year Tawny, Ruby & LBV Allocations',
      metaDescription: 'Buy Taylor Fladgate Port online — 10, 20, and 40 Year Old Tawny, First Estate Reserve Ruby, and Late Bottled Vintage. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Tracing to English merchant Job Bearsley's arrival in Portugal in 1692 and formalized as Taylor, Fladgate and Yeatman in 1838, Taylor Fladgate holds two real firsts in the category: it created the world's first dry white port (Chip Dry, 1934) and pioneered commercial Late Bottled Vintage port in 1970. Quinta de Vargellas, purchased in 1893, remains the heart of its vintage blends.",
      faqs: [
        { question: 'Is Taylor port sweet?', answer: "Yes — all Taylor Fladgate styles carry noticeable natural sweetness from fortification, though the Ruby and LBV read fresher and fruitier, while the Tawny range (10, 20, and 40 Year Old here) develops deeper, nuttier, dried-fruit character with age." },
        { question: "What's the difference between Ruby and Vintage port at Taylor Fladgate?", answer: "First Estate Reserve Ruby is an easy-drinking, non-vintage blend meant for everyday enjoyment; true Vintage Port is only declared in exceptional years from top vineyards like Quinta de Vargellas." },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'lustau', brandKeywords: ['Lustau'], name: 'Lustau',
    seo: brandSeo({
      brand: 'Lustau', categoryLabel: 'Sherry',
      titleTag: 'Lustau — Pedro Ximénez & Solera Sherry',
      h1: 'Lustau Sherry — East India Solera & Pedro Ximénez Allocations',
      metaDescription: 'Buy Lustau Sherry online — East India Solera and San Emilio Pedro Ximénez from Jerez de la Frontera. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Bodegas Lustau traces to 1896 and the almacenista (private sherry warehouseman) tradition in Jerez de la Frontera — small producers who aged and sold sherry to larger houses before Emilio Lustau Ortego began bottling under his own name in 1945. Lustau today produces over 40 distinct sherries across its Solera Familiar range, more breadth than almost any other house in Jerez.',
      faqs: [
        { question: 'Is sherry sweet?', answer: 'It depends entirely on style: fino and manzanilla are bone-dry, oloroso and amontillado range dry to off-dry, and Pedro Ximénez — like Lustau’s East India Solera and San Emilio — is intensely sweet.' },
        { question: 'How is sherry made?', answer: 'Sherry is fortified after fermentation, then aged either under a biological layer of flor yeast (fino styles) or oxidatively without it (oloroso styles), often blended through a solera fractional-aging system that combines multiple vintages.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'gonzalez-byass', brandKeywords: ['González Byass', 'Gonzalez Byass'], name: 'González Byass',
    seo: brandSeo({
      brand: 'González Byass', categoryLabel: 'Sherry',
      titleTag: 'González Byass — Néctar Pedro Ximénez Sherry',
      h1: 'González Byass Néctar Pedro Ximénez Sherry Allocations',
      metaDescription: 'Buy González Byass Néctar Pedro Ximénez Sherry online — from the Jerez house behind Tío Pepe. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Founded in 1835 by Manuel María González, González Byass is the Jerez house behind Tío Pepe — Spain’s first registered trademark, 1888 — and remains the only Jerez producer to grow its own Pedro Ximénez grapes, which go directly into wines like the Néctar carried here. The house has also owned the Croft sherry brand since 2001.',
      faqs: [
        { question: 'Is Néctar Pedro Ximénez sweet?', answer: 'Yes — Néctar is one of the richest, sweetest styles in the category, averaging roughly 10 years of age and made from PX grapes grown on the estate’s own vineyards.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'inniskillin', brandKeywords: ['Inniskillin'], name: 'Inniskillin',
    seo: brandSeo({
      brand: 'Inniskillin', categoryLabel: 'Icewine',
      titleTag: 'Inniskillin — Vidal & Cabernet Franc Icewine',
      h1: 'Inniskillin Icewine — Vidal & Cabernet Franc Allocations',
      metaDescription: 'Buy Inniskillin Icewine online — Vidal and Cabernet Franc Icewine from Niagara-on-the-Lake, Canada. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Founded in 1975 by Donald Ziraldo and Karl Kaiser as the first winery license issued in Canada since Prohibition, Inniskillin made history in 1984 when Kaiser netted the vines against birds and produced the winery’s first Vidal icewine. The 1991 Vinexpo Grand Prix d’Honneur for that wine put Canadian icewine on the world map for good.',
      faqs: [
        { question: 'How is icewine made?', answer: 'Grapes are left on the vine into winter and pressed while still frozen, typically at or below -8°C, concentrating sugar and acidity into a small, intensely flavored yield.' },
        { question: 'What grape is Inniskillin Icewine made from?', answer: 'Vidal and Cabernet Franc are both real, established Inniskillin icewine varietals — Vidal is the classic, more widely produced style, while Cabernet Franc yields a rarer, red-fruited icewine.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'frey', brandKeywords: ['Frey', 'Frey Vineyards'], name: 'Frey Vineyards',
    seo: brandSeo({
      brand: 'Frey', categoryLabel: 'Organic Wine',
      titleTag: 'Frey Vineyards — Organic & Natural Wine',
      h1: 'Frey Vineyards — Organic Natural Red Blend & Pinot Noir Allocations',
      metaDescription: "Buy Frey Vineyards wine online — America's first organic winery, Natural Red Blend and Pinot Noir. Direct allocations at Aged & Amber. Free on $300+.",
      hook: "Frey Vineyards, in Redwood Valley, Mendocino County, became America's first organic winery in 1980 when Katrina and Jonathan Frey made their first barrel and joined California Certified Organic Farmers the same year. Frey added Demeter Biodynamic certification in 1996 and helped make Mendocino the first US jurisdiction to ban GMO cultivation.",
      faqs: [
        { question: "Is Frey really America's first organic winery?", answer: 'Yes — Frey and a handful of other Mendocino family vineyards were the first in the US to make wine from certified-organic grapes, starting in 1980.' },
        { question: 'Does Frey wine have added sulfites?', answer: "Frey's wines are produced without added sulfites, in keeping with its natural, no-manipulation winemaking philosophy." },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'bonterra', brandKeywords: ['Bonterra'], name: 'Bonterra',
    seo: brandSeo({
      brand: 'Bonterra', categoryLabel: 'Organic Wine',
      titleTag: 'Bonterra — Organic Cabernet, Chardonnay, Merlot & Sauvignon Blanc',
      h1: "Bonterra Organic Wine — America's #1 Organic Winery Allocations",
      metaDescription: 'Buy Bonterra organic wine online — Cabernet Sauvignon, Chardonnay, Merlot, and Sauvignon Blanc from America’s #1 organic winery. Direct allocations. Free on $300+.',
      hook: "Founded by Barney Fetzer in Mendocino County in 1987, with its first certified-organic vintage in 1993, Bonterra is now America's #1 organic winery and, as of 2021, the largest Regenerative Organic Certified winery in the world. Its McNab Ranch estate — a former sheep farm — has been certified biodynamic since 1996.",
      faqs: [
        { question: "Is Bonterra really organic, or just 'made with organic grapes'?", answer: "Bonterra holds full USDA organic certification across its estate vineyards and markets itself as America's #1 organic winery." },
        { question: 'What does Regenerative Organic Certified mean?', answer: 'A step beyond standard organic certification, covering soil health, animal welfare, and farmworker fairness — Bonterra is the largest ROC-certified winery in the world.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'emiliana', brandKeywords: ['Emiliana', 'Emiliana Natura'], name: 'Emiliana',
    seo: brandSeo({
      brand: 'Emiliana', categoryLabel: 'Organic Wine',
      titleTag: 'Emiliana Natura — Organic & Biodynamic Vegan Wine',
      h1: 'Emiliana Natura — Organic Cabernet Sauvignon & Chardonnay Allocations',
      metaDescription: 'Buy Emiliana Natura wine online — organic, vegan Cabernet Sauvignon and Chardonnay from Chile’s largest certified organic and biodynamic winery. Free on $300+.',
      hook: "Founded in 1986 by brothers Rafael and José Guilisasti as Bodegas y Viñedos Santa Emiliana, the company converted its best Casablanca, Maipo, and Colchagua Valley vineyards to organic farming that same year. Its 2003 “Gê” release was the first biodynamic wine made anywhere in Chile or Latin America, and Emiliana is now the largest certified organic and biodynamic winery on the planet.",
      faqs: [
        { question: 'Is Emiliana Natura vegan?', answer: 'Yes — the Natura line is produced without animal-derived fining agents.' },
        { question: "What's the difference between organic and biodynamic at Emiliana?", answer: 'All Emiliana vineyards are certified organic; select lots, like the flagship Gê and Coyam labels, are additionally certified biodynamic under Demeter.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'avaline', brandKeywords: ['Avaline'], name: 'Avaline',
    seo: brandSeo({
      brand: 'Avaline', categoryLabel: 'Organic Wine',
      titleTag: 'Avaline — Organic Vegan Wine, Red, White & Rosé',
      h1: 'Avaline Organic Wine — Red, White & Rosé Allocations',
      metaDescription: 'Buy Avaline organic wine online — Red, White, and Rosé, made from 100% organic grapes with no added sugar. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Launched in 2020 by actress Cameron Diaz and Katherine Power (founder of Who What Wear, Versed, and Merit), Avaline was built around a simple complaint: wine is one of the only widely consumed products sold with no ingredient list. All three colors are made from 100% organic grapes with no added sugar, produced in partnership with established vintners in California and Spain.",
      faqs: [
        { question: 'Is Avaline wine actually organic?', answer: "Yes — made from 100% organic grapes, and the brand publishes full ingredient transparency on its site, unusual for the wine category." },
        { question: 'Who founded Avaline?', answer: 'Cameron Diaz and Katherine Power co-founded the brand in 2020; neither is a winemaker themselves, so Avaline is produced in partnership with established vineyards in California and Spain.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'stella-rosa', brandKeywords: ['Stella Rosa'], name: 'Stella Rosa',
    seo: brandSeo({
      brand: 'Stella Rosa', categoryLabel: 'Wine',
      titleTag: "Stella Rosa — Moscato d'Asti & Rosé",
      h1: "Stella Rosa — Moscato d'Asti, Pink & Strawberry Rosé Allocations",
      metaDescription: "Buy Stella Rosa wine online — Moscato d'Asti, Pink Rosé, and Strawberry Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.",
      hook: "Produced by Los Angeles' San Antonio Winery — one of the oldest continuously operating wineries in California, having survived Prohibition under a sacramental-wine exemption — Stella Rosa built a large, flavor-driven semi-sweet lineup that has become one of the best-known “gateway” wine brands in the US.",
      faqs: [
        { question: 'Is Stella Rosa a good wine?', answer: "It's a semi-sweet, low-ABV, easy-drinking style aimed at newer wine drinkers rather than a dry, high-tannin bottle — “good” depends on what you're looking for, and it delivers well for its category." },
        { question: 'How much alcohol is in Stella Rosa?', answer: 'Typically lower-ABV than standard table wine, in the 5–7% range depending on the flavor.' },
      ],
    }),
  },
  {
    categorySlug: 'fine-wine', hubSlug: 'whispering-angel', brandKeywords: ['Whispering Angel', "Château d'Esclans", 'Chateau d’Esclans', 'The Palm'], name: 'Whispering Angel / Château d’Esclans',
    seo: brandSeo({
      brand: 'Whispering Angel', categoryLabel: 'Rosé',
      titleTag: 'Whispering Angel — Château d’Esclans Rosé',
      h1: 'Whispering Angel, The Palm & Rock Angel — Château d’Esclans Rosé Allocations',
      metaDescription: 'Buy Whispering Angel, The Palm, and Rock Angel online — Provence rosé from Château d’Esclans. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Sacha Lichine bought the historic Château d'Esclans — gifted in 1201 by the Comte de Provence — in 2005 with the explicit goal of making the world's greatest rosé, an effort credited with sparking the modern “Rosé Renaissance.” Production of Whispering Angel alone grew from roughly 100,000 bottles in its 2006 debut vintage to well over 5 million bottles a year today, under LVMH ownership since 2019.",
      faqs: [
        { question: 'What is Whispering Angel?', answer: 'The entry-level, dry Côtes de Provence rosé from Château d’Esclans — the wine most responsible for popularizing pale, dry Provençal rosé in the US market.' },
        { question: "What's the difference between Whispering Angel and The Palm?", answer: 'The Palm by Whispering Angel is a lighter, fruitier, more casual sibling wine at a lower price point, made for easy warm-weather drinking rather than the more structured flagship. Rock Angel sits above Whispering Angel, with more concentration and barrel-fermented components.' },
        { question: 'Is Whispering Angel rosé sweet?', answer: 'No — it’s a dry Provençal-style rosé, though its ripe fruit character reads as approachable to newer rosé drinkers.' },
      ],
    }),
  },

  // ─── CHAMPAGNE & SPARKLING WINE ───────────────────────────────────────────
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'billecart-salmon', brandKeywords: ['Billecart-Salmon'], name: 'Billecart-Salmon',
    seo: brandSeo({
      brand: 'Billecart-Salmon', categoryLabel: 'Champagne',
      titleTag: 'Billecart-Salmon — Brut Rosé, Réserve & Blanc de Blancs',
      h1: 'Billecart-Salmon Champagne — Brut Rosé, Réserve & Blanc de Blancs Grand Cru',
      metaDescription: 'Buy Billecart-Salmon Champagne online — Brut Rosé, Brut Réserve, and Blanc de Blancs Grand Cru. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Founded in 1818 by the marriage of Nicolas François Billecart and Elisabeth Salmon in Mareuil-sur-Aÿ, Billecart-Salmon remains one of the relatively few grande-marque Champagne houses still under family ownership. Its defining innovation is a double cold-settling (débourbage) process introduced in the 1950s to preserve delicacy and freshness. The house's Brut Rosé, developed in the 1970s to be pale and precise rather than deeply colored, became one of the most acclaimed rosé Champagnes in the category and remains its flagship style today.",
      faqs: [
        { question: 'What is Billecart-Salmon known for?', answer: 'Its Brut Rosé, prized for its pale color and precision rather than deep fruit and color; it’s the wine most responsible for the house’s modern reputation.' },
        { question: 'Is Billecart-Salmon family-owned?', answer: 'Yes — founded in 1818 by the Billecart-Salmon marriage, it remains one of the relatively few grande-marque houses still under family control.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'bollinger', brandKeywords: ['Bollinger'], name: 'Bollinger',
    seo: brandSeo({
      brand: 'Bollinger', categoryLabel: 'Champagne',
      titleTag: 'Bollinger — La Grande Année, Special Cuvée, R.D. & Rosé',
      h1: 'Bollinger Champagne — La Grande Année, Special Cuvée, R.D. & Rosé',
      metaDescription: 'Buy Bollinger Champagne online — La Grande Année, Special Cuvée Brut, R.D., and Rosé. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Founded in 1829 in Aÿ, Bollinger became one of Champagne's most storied houses under Madame Lily Bollinger, who took control in 1941 and ran it for decades. In 1967 she introduced R.D. (Récemment Dégorgé) — a trademarked late-disgorgement style that ages wines far longer than usual on their lees before release. Bollinger has also been the official Champagne of the James Bond film franchise for more than 45 years, first appearing on screen in Moonraker (1979).",
      faqs: [
        { question: 'What does R.D. mean on a Bollinger bottle?', answer: 'Récemment Dégorgé, "recently disgorged": the wine ages far longer than usual on its lees, then is disgorged and released close to that date, giving it added tension and complexity versus a standard vintage release. Bollinger pioneered the style in 1967 and the term is trademarked to the house.' },
        { question: 'Why is Bollinger associated with James Bond?', answer: 'It’s been the official Champagne of the 007 franchise for over 45 years, first appearing on screen in Moonraker (1979) and referenced even earlier in Ian Fleming’s novels.' },
        { question: 'What is Bollinger Special Cuvée?', answer: 'The house’s non-vintage flagship, built from a high proportion of Pinot Noir and barrel-fermented reserve wines for richness and consistency across vintages.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'charles-heidsieck', brandKeywords: ['Charles Heidsieck'], name: 'Charles Heidsieck',
    seo: brandSeo({
      brand: 'Charles Heidsieck', categoryLabel: 'Champagne',
      titleTag: 'Charles Heidsieck — Blanc de Blancs, Brut & Rosé Réserve',
      h1: 'Charles Heidsieck Champagne — Blanc de Blancs, Brut Réserve & Rosé Réserve',
      metaDescription: 'Buy Charles Heidsieck Champagne online — Blanc de Blancs, Brut Réserve, and Rosé Réserve. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Founded in 1851 by Charles-Camille Heidsieck, who became internationally famous as "Champagne Charlie" after his flamboyant 1852 tour of the United States — widely credited with popularizing Champagne in America. Today Charles Heidsieck is one of the smallest of the historic Grandes Marques houses, distinguished by an unusually high proportion of aged reserve wines — roughly 40%, averaging around a decade old — in its non-vintage blends.',
      faqs: [
        { question: 'Who was "Champagne Charlie"?', answer: 'Charles-Camille Heidsieck, the house’s founder; his flamboyant 1850s tours of England and the US made him a celebrity and gave the category an early American foothold.' },
        { question: 'What makes Charles Heidsieck’s Brut Réserve different?', answer: 'An unusually large share of reserve wines (roughly 40%, averaging around 10 years old) goes into the blend, giving it more depth than a typical non-vintage Champagne.' },
        { question: 'Is Charles Heidsieck the same as Piper-Heidsieck?', answer: 'No. Despite sharing the Heidsieck family name and Reims origins, they have been separate, independently owned houses for well over a century.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'dom-perignon', brandKeywords: ['Dom Pérignon', 'Dom Perignon'], name: 'Dom Pérignon',
    seo: brandSeo({
      brand: 'Dom Pérignon', categoryLabel: 'Champagne',
      titleTag: 'Dom Pérignon — Vintage, Rosé & P2 Plénitude',
      h1: 'Dom Pérignon Champagne — Vintage, Rosé & P2 Plénitude Allocations',
      metaDescription: 'Buy Dom Pérignon Champagne online — Vintage, Rosé, and P2 Plénitude. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Named for Dom Pierre Pérignon, a real Benedictine monk and cellarer at the Abbey of Hautvillers (1638–1715) — the popular story crediting him with "inventing" sparkling Champagne is a later marketing legend rather than literal history, though he made real, documented contributions to blending across plots that shaped the region’s technique. The modern Dom Pérignon label (owned by LVMH) is released only as a declared vintage from a single exceptional year, and its Plénitude program re-releases the same vintage at later stages of maturity (P2, P3) under the concept established by longtime chef de cave Richard Geoffroy.',
      faqs: [
        { question: 'Was Dom Pérignon a real monk?', answer: 'Yes, a real Benedictine cellarer at Hautvillers Abbey; the specific claim that he "invented" champagne’s bubbles is a later marketing legend, not historical fact.' },
        { question: 'Why is Dom Pérignon always a vintage?', answer: 'Unlike most Champagne houses, it releases no standard non-vintage wine — every bottle is a declared vintage from a single, exceptional year.' },
        { question: 'What is Plénitude (P2/P3)?', answer: 'A staged re-release concept: the same vintage is disgorged and released at different points in its life — the original release (P1), a second release after 15+ years on lees (P2, stocked here), and a third after 25+ years (P3, not currently stocked) — each showing the wine at a different stage of development.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'krug', brandKeywords: ['Krug'], name: 'Krug',
    seo: brandSeo({
      brand: 'Krug', categoryLabel: 'Champagne',
      titleTag: 'Krug — Grande Cuvée, Clos du Mesnil, Rosé & Vintage',
      h1: 'Krug Champagne — Grande Cuvée, Clos du Mesnil, Rosé & Vintage Allocations',
      metaDescription: 'Buy Krug Champagne online — Grande Cuvée, Clos du Mesnil Blanc de Blancs, Rosé, and Vintage. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Founded in 1843 by Joseph Krug, who broke with convention by treating every Champagne — not just a prestige flagship — with the same meticulous, small-barrel-fermented, multi-vintage blending process. That philosophy still defines Krug’s core wine, Grande Cuvée, released as a numbered "Édition" rather than a fixed recurring recipe. The house also makes two of Champagne’s rarest single-vineyard wines: Clos du Mesnil (a Blanc de Blancs from a walled 1.84-hectare Chardonnay plot bought in 1971) and Clos d’Ambonnay (a Blanc de Noirs from a 0.68-hectare Pinot Noir plot). Krug is owned by LVMH.',
      faqs: [
        { question: 'What is a Krug Grande Cuvée "Edition"?', answer: 'Grande Cuvée blends well over 100 wines from more than 10 vintages, released as a numbered Édition rather than one recurring recipe, so the exact blend genuinely changes release to release.' },
        { question: 'What’s the difference between Krug Clos du Mesnil and Clos d’Ambonnay?', answer: 'Clos du Mesnil is a single-vineyard Blanc de Blancs (100% Chardonnay) from Le Mesnil-sur-Oger; Clos d’Ambonnay is a single-vineyard Blanc de Noirs (100% Pinot Noir) from a much smaller plot. Only Clos du Mesnil is currently stocked.' },
        { question: 'Is Krug expensive?', answer: 'Yes — even the entry-level Grande Cuvée reflects the house’s every-wine-gets-the-prestige-treatment philosophy, and the single-vineyard Clos wines are among the rarest, most expensive Champagnes made anywhere.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'lanson', brandKeywords: ['Lanson'], name: 'Lanson',
    seo: brandSeo({
      brand: 'Lanson', categoryLabel: 'Champagne',
      titleTag: 'Lanson — Le Black Label & Le Blanc de Blancs',
      h1: 'Lanson Champagne — Le Black Label Brut & Le Blanc de Blancs',
      metaDescription: 'Buy Lanson Champagne online — Le Black Label Brut and Le Blanc de Blancs. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 1760, Lanson is one of the oldest Champagne houses still trading under its founding name. Its defining house signature is blocking malolactic fermentation across almost its entire range — a rare choice that preserves freshness and extends aging potential. Le Black Label, named by Victor Lanson in 1937 as a tribute to Lanson’s status as an official supplier to the British Royal Court since 1900, is the one wine in the range that undergoes any malolactic conversion at all, and even then only partially.',
      faqs: [
        { question: 'Why does Lanson avoid malolactic fermentation?', answer: 'It’s a deliberate house signature: skipping the softening malolactic conversion used by most Champagne houses keeps Lanson’s wines crisper and gives them a longer aging window than typical non-vintage Champagne.' },
        { question: 'What does "Le Black Label" mean?', answer: 'Not a tasting note — it’s the name Victor Lanson gave the house’s flagship Brut in 1937, honoring Lanson’s status as an official supplier to the British Royal Court since 1900.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'gh-mumm', brandKeywords: ['G.H. Mumm', 'GH Mumm'], name: 'G.H. Mumm',
    seo: brandSeo({
      brand: 'G.H. Mumm', categoryLabel: 'Champagne',
      titleTag: 'G.H. Mumm — RSRV Blanc de Blancs Champagne',
      h1: 'G.H. Mumm Champagne — RSRV Blanc de Blancs Allocations',
      metaDescription: 'Buy G.H. Mumm Champagne online — RSRV Blanc de Blancs from Cramant Grand Cru. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 1827 in Reims by German-born brothers Jacobus, Gottlieb, and Philipp Mumm, G.H. Mumm’s globally recognized red-sash "Cordon Rouge" label dates to 1875, created as a tribute to France’s Légion d’Honneur. Its Blanc de Blancs cuvée — now sold as RSRV Blanc de Blancs — traces back to 1882 and is sourced entirely from Chardonnay grown in Cramant, a Grand Cru village in the Côte des Blancs. G.H. Mumm remains a French Champagne house owned by Pernod Ricard, and should never be conflated with Mumm Napa.',
      faqs: [
        { question: 'What is G.H. Mumm’s RSRV range?', answer: 'Mumm’s prestige tier, above the everyday Cordon Rouge; RSRV Blanc de Blancs is a single-varietal Chardonnay Champagne from the Grand Cru village of Cramant, a cuvée the house has made since 1882 under earlier names.' },
        { question: 'Is G.H. Mumm the same as Mumm Napa?', answer: 'No. They share a historical origin (G.H. Mumm founded the Napa operation in 1979), but G.H. Mumm is the original French Champagne house based in Reims and still Pernod Ricard-owned, while Mumm Napa is a separate California sparkling wine producer under different ownership today.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'mumm-napa', brandKeywords: ['Mumm Napa'], name: 'Mumm Napa',
    seo: brandSeo({
      brand: 'Mumm Napa', categoryLabel: 'Sparkling Wine',
      titleTag: 'Mumm Napa — Brut Prestige & Brut Rosé',
      h1: 'Mumm Napa — Brut Prestige & Brut Rosé Sparkling Wine',
      metaDescription: 'Buy Mumm Napa online — Brut Prestige and Brut Rosé, traditional-method California sparkling wine. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Founded as Domaine Mumm in 1979, when the French Champagne house G.H. Mumm sent winemaker Guy Devaux to Napa Valley — renamed Mumm Napa in 1990. It uses the traditional méthode traditionnelle (secondary fermentation in the bottle, the same core process used in Champagne), but because the fruit is grown in Napa Valley, none of it is ever legally labeled "Champagne."',
      faqs: [
        { question: 'Is Mumm Napa the same company as G.H. Mumm Champagne?', answer: 'They share a common origin — Mumm Napa was founded by the Champagne house in 1979 — but they are legally and geographically separate today. Never present them as one brand.' },
        { question: 'How is Mumm Napa’s sparkling wine made?', answer: 'Using méthode traditionnelle, the same bottle-fermentation process used in Champagne, but from California-grown fruit — so it’s a sparkling wine, never legally labeled Champagne.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'laurent-perrier', brandKeywords: ['Laurent-Perrier'], name: 'Laurent-Perrier',
    seo: brandSeo({
      brand: 'Laurent-Perrier', categoryLabel: 'Champagne',
      titleTag: 'Laurent-Perrier — Cuvée Rosé & La Cuvée Brut',
      h1: 'Laurent-Perrier Champagne — Cuvée Rosé & La Cuvée Brut',
      metaDescription: 'Buy Laurent-Perrier Champagne online — Cuvée Rosé and La Cuvée Brut. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in Tours-sur-Marne in 1812, Laurent-Perrier became "Veuve Laurent-Perrier" after Eugène Laurent’s widow, Mathilde-Emilie Perrier, took over the house in 1887 — one more real widow-led Champagne story alongside Veuve Clicquot’s. In 1968 the house reintroduced non-vintage rosé champagne using a proprietary 48–72 hour skin-maceration technique; Cuvée Rosé remains the benchmark rosé champagne worldwide.',
      faqs: [
        { question: 'Who makes Laurent-Perrier?', answer: 'An independent, family-owned Champagne house since 1812, one of the largest family-owned houses in Champagne today.' },
        { question: 'Why is Laurent-Perrier Cuvée Rosé considered special?', answer: 'It uses a distinctive 48–72 hour maceration method (rather than blending red and white wine) to achieve its color and flavor, and has been in continuous production since 1968.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'nicolas-feuillatte', brandKeywords: ['Nicolas Feuillatte'], name: 'Nicolas Feuillatte',
    seo: brandSeo({
      brand: 'Nicolas Feuillatte', categoryLabel: 'Champagne',
      titleTag: 'Nicolas Feuillatte — Réserve Exclusive Brut & Rosé',
      h1: 'Nicolas Feuillatte Champagne — Réserve Exclusive Brut & Rosé',
      metaDescription: 'Buy Nicolas Feuillatte Champagne online — Réserve Exclusive Brut and Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 1976 as the youngest of the major Champagne houses, Nicolas Feuillatte is built on a cooperative model of roughly 4,500 member-growers and is today both the #1 selling champagne brand in France and the third-largest Champagne house overall, after Moët & Chandon and Veuve Clicquot.',
      faqs: [
        { question: 'Is Nicolas Feuillatte champagne good?', answer: 'Yes; as the largest grower cooperative in Champagne, it consistently delivers well-regarded quality at a more accessible price point than the grande marque houses.' },
        { question: 'What makes Nicolas Feuillatte different from other champagne houses?', answer: 'It’s a cooperative brand representing thousands of individual grower-members rather than a single family estate, founded in 1976 — genuinely the youngest of the major houses.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'perrier-jouet', brandKeywords: ['Perrier-Jouët', 'Perrier Jouet'], name: 'Perrier-Jouët',
    seo: brandSeo({
      brand: 'Perrier-Jouët', categoryLabel: 'Champagne',
      titleTag: 'Perrier-Jouët — Blanc de Blancs & Belle Epoque',
      h1: 'Perrier-Jouët Champagne — Blanc de Blancs & Belle Epoque',
      metaDescription: 'Buy Perrier-Jouët Champagne online — Blanc de Blancs and Belle Epoque. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Perrier-Jouët’s Belle Epoque bottle — decorated with a spray of Japanese white anemones — was designed in 1902 by Art Nouveau master Émile Gallé for the house’s founding-family collectors. The bottles sat forgotten in the house’s cellars until four examples were rediscovered in 1964, prompting the house to fill them with an especially fine vintage and launch Belle Epoque as its own cuvée.',
      faqs: [
        { question: 'What is Perrier-Jouët Belle Epoque?', answer: 'The house’s prestige cuvée, instantly recognizable by its hand-painted anemone-flower bottle, first released as a standalone cuvée in 1964 using the original 1902 Gallé bottle design.' },
        { question: 'What’s the difference between Perrier-Jouët Grand Brut and Belle Epoque?', answer: 'Grand Brut is the house’s non-vintage entry point; Belle Epoque is the vintage-dated prestige tier in the iconic flowered bottle.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'pol-roger', brandKeywords: ['Pol Roger'], name: 'Pol Roger',
    seo: brandSeo({
      brand: 'Pol Roger', categoryLabel: 'Champagne',
      titleTag: 'Pol Roger — Blanc de Blancs, Brut Réserve & Cuvée Sir Winston Churchill',
      h1: 'Pol Roger Champagne — Blanc de Blancs, Brut Réserve & Cuvée Sir Winston Churchill',
      metaDescription: 'Buy Pol Roger Champagne online — Blanc de Blancs, Brut Réserve, and Cuvée Sir Winston Churchill. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Founded in 1849 and granted a royal warrant by Queen Victoria in 1877, Pol Roger became forever linked to Winston Churchill after he met family member Odette Pol Roger at a British Embassy party in Paris in 1944. Churchill reportedly drank roughly 42,000 bottles of Pol Roger in his lifetime, and the house released its prestige Cuvée Sir Winston Churchill — built from the 1975 vintage — in 1984, four years after his death.',
      faqs: [
        { question: 'What was Winston Churchill’s favorite champagne?', answer: 'Pol Roger; his personal favorite vintage was the 1928, and after he died in 1965, the house had certain bottles shipped to the UK marked with a black mourning border on the label in his honor.' },
        { question: 'What’s the difference between Pol Roger Brut Réserve and Cuvée Sir Winston Churchill?', answer: 'Brut Réserve is the house’s flagship non-vintage blend; Cuvée Sir Winston Churchill is the vintage-dated prestige cuvée, made to a blend that remains a closely guarded family secret.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'pommery', brandKeywords: ['Pommery'], name: 'Pommery',
    seo: brandSeo({
      brand: 'Pommery', categoryLabel: 'Champagne',
      titleTag: 'Pommery — Brut Rosé & Brut Royal',
      h1: 'Pommery Champagne — Brut Rosé & Brut Royal',
      metaDescription: 'Buy Pommery Champagne online — Brut Rosé and Brut Royal. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Pommery & Greno was founded in 1858, but it was Alexandre Pommery’s widow, Louise "Madame" Pommery, who took over in 1860 and transformed it into a serious Champagne house — commissioning 120 Gallo-Roman limestone crayères beneath Reims as temperature-controlled cellars, and in 1874 becoming the first house to commercialize a dry "brut" champagne, breaking decisively from the sweeter style then in fashion.',
      faqs: [
        { question: 'What is brut champagne?', answer: 'Champagne made with minimal added sugar (dosage), resulting in a dry, crisp style; Pommery is historically credited as the house that invented the commercial version of this style, in 1874.' },
        { question: 'Who founded Pommery?', answer: 'Alexandre Pommery and Narcisse Greno in 1858; it was his widow, Madame (Louise) Pommery, who redirected the house toward premium champagne after his death in 1860.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'ruinart', brandKeywords: ['Ruinart', 'Dom Ruinart'], name: 'Ruinart',
    seo: brandSeo({
      brand: 'Ruinart', categoryLabel: 'Champagne',
      titleTag: 'Ruinart — Blanc de Blancs, Brut, Rosé & Dom Ruinart',
      h1: 'Ruinart Champagne — Blanc de Blancs, Brut, Rosé & Dom Ruinart',
      metaDescription: 'Buy Ruinart Champagne online — Blanc de Blancs, Brut, Rosé, and Dom Ruinart Blanc de Blancs. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Founded September 1, 1729 by Nicolas Ruinart, Ruinart is the oldest established Champagne house — founded in the immediate wake of the 1728 royal edict that first permitted wine to be shipped in bottles rather than only barrels, which made a real champagne trade possible at all. The house’s name honors Nicolas’s uncle, Dom Thierry Ruinart, a Benedictine monk who had recognized the promise of this new "wine with bubbles" decades earlier.',
      faqs: [
        { question: 'Is Ruinart the oldest champagne house?', answer: 'Yes, confirmed: founded in 1729, making it the oldest established Champagne house still producing today.' },
        { question: 'What is Dom Ruinart?', answer: 'Ruinart’s prestige tête de cuvée, exclusively Blanc de Blancs, named for the house’s Benedictine-monk namesake; a step above the standard Ruinart Blanc de Blancs in aging and vineyard selection.' },
        { question: 'Why is Ruinart known for Blanc de Blancs?', answer: 'The house has leaned into 100% Chardonnay styles since its earliest days, and Blanc de Blancs remains its signature strength across both the standard and Dom Ruinart tiers.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'taittinger', brandKeywords: ['Taittinger'], name: 'Taittinger',
    seo: brandSeo({
      brand: 'Taittinger', categoryLabel: 'Champagne',
      titleTag: 'Taittinger — Brut La Française, Prestige Rosé & Comtes de Champagne',
      h1: 'Taittinger Champagne — Brut La Française, Prestige Rosé & Comtes de Champagne',
      metaDescription: 'Buy Taittinger Champagne online — Brut La Française, Prestige Rosé, and Comtes de Champagne Blanc de Blancs. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Pierre Taittinger made a personal promise to return to Champagne after serving as a cavalry officer stationed at Château de la Marquetterie during WWI; in 1932 he and brother-in-law Paul Evêque acquired the historic firm of Forest-Fourneaux (founded 1734). His son François created the Comtes de Champagne Blanc de Blancs prestige cuvée in 1952.',
      faqs: [
        { question: 'What is Taittinger Comtes de Champagne?', answer: 'The house’s 100% Chardonnay prestige cuvée, created in 1952 by François Taittinger, aged nearly ten years in the cellars before release.' },
        { question: 'What’s the difference between Brut La Française and Comtes de Champagne?', answer: 'Brut La Française is Taittinger’s flagship non-vintage blend of Chardonnay, Pinot Noir, and Pinot Meunier; Comtes de Champagne is the vintage-dated, all-Chardonnay prestige tier.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'veuve-clicquot', brandKeywords: ['Veuve Clicquot'], name: 'Veuve Clicquot',
    seo: brandSeo({
      brand: 'Veuve Clicquot', categoryLabel: 'Champagne',
      titleTag: 'Veuve Clicquot — Yellow Label, Rosé, Vintage & La Grande Dame',
      h1: 'Veuve Clicquot Champagne — Yellow Label, Rosé, Vintage & La Grande Dame',
      metaDescription: 'Buy Veuve Clicquot Champagne online — Yellow Label Brut, Rosé, Vintage, and La Grande Dame Rosé. Direct allocations at Aged & Amber. Free on $300+.',
      hook: '"Veuve" means widow — Barbe-Nicole Clicquot Ponsardin took over the house at just 27 after her husband François died of typhoid in 1805. In 1816 she invented the riddling table (table de remuage), the technique still used across the industry to clarify champagne of sediment, and her innovations made her one of the first women to run a major commercial enterprise in modern history. The house’s La Grande Dame prestige cuvée is named in her honor.',
      faqs: [
        { question: 'Who was Madame Clicquot?', answer: 'Barbe-Nicole Clicquot Ponsardin, the young widow who took over the house in 1805 and became one of the great innovators in champagne history, inventing the riddling process still used today.' },
        { question: 'Who owns Veuve Clicquot?', answer: 'LVMH (Moët Hennessy Louis Vuitton).' },
        { question: 'What’s the difference between Yellow Label and La Grande Dame?', answer: 'Yellow Label Brut is the house’s iconic non-vintage flagship; La Grande Dame is the vintage-dated prestige cuvée, named for Madame Clicquot herself.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'louis-roederer', brandKeywords: ['Louis Roederer'], name: 'Louis Roederer',
    seo: brandSeo({
      brand: 'Louis Roederer', categoryLabel: 'Champagne',
      titleTag: 'Louis Roederer — Cristal, Collection Brut & Cristal Rosé',
      h1: 'Louis Roederer Champagne — Cristal, Collection Brut & Cristal Rosé',
      metaDescription: 'Buy Louis Roederer Champagne online — Cristal, Cristal Rosé, Cristal Vinothèque, and Collection Brut. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Louis Roederer’s Cristal was created in 1876 for Tsar Alexander II of Russia — the clear, flat-bottomed bottle was reportedly designed at the Tsar’s request, in part so nothing could be hidden beneath a colored bottle, and remained exclusive to the Russian Imperial Court for decades before its first commercial release in 1945. Louis Roederer remains one of the few major Champagne houses still fully family-owned and independent, and should not be conflated with its separate California venture, Roederer Estate.',
      faqs: [
        { question: 'Why does Cristal come in a clear bottle?', answer: 'Created in 1876 for Tsar Alexander II, the flat-bottomed, clear-glass bottle is said to have been designed partly out of security concerns for the Tsar, and it remains Cristal’s signature to this day.' },
        { question: 'What is Louis Roederer Collection?', answer: 'In 2021 the house replaced its long-running Brut Premier NV with "Collection," identified by a rotating base number built from an expanded reserve-wine library.' },
        { question: 'What’s the difference between Cristal and Cristal Vinothèque?', answer: 'Standard Cristal is the flagship prestige cuvée; Vinothèque is a late-disgorged library release, aged substantially longer on its lees before disgorgement, giving it a more developed, toastier character.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'moet-chandon', brandKeywords: ['Moët & Chandon', 'Moet & Chandon', 'Moet Chandon'], name: 'Moët & Chandon',
    seo: brandSeo({
      brand: 'Moët & Chandon', categoryLabel: 'Champagne',
      titleTag: 'Moët & Chandon — Grand Vintage, Impérial Brut & Impérial Rosé',
      h1: 'Moët & Chandon Champagne — Grand Vintage, Impérial Brut & Impérial Rosé',
      metaDescription: 'Buy Moët & Chandon Champagne online — Grand Vintage, Impérial Brut, and Impérial Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded by Épernay wine trader Claude Moët in 1743, the house’s growth accelerated under his grandson Jean-Rémy Moët thanks to a real personal friendship with Napoleon Bonaparte; the "Impérial" name, used since 1869, honors that connection. In 1833 the house became Moët et Chandon after Pierre-Gabriel Chandon de Briailles joined as a partner, and today Moët & Chandon is the best-selling champagne brand in the world.',
      faqs: [
        { question: 'Is Moët a good champagne?', answer: 'Yes; as the largest and most widely distributed champagne house in the world, Moët & Chandon delivers reliable, well-made non-vintage champagne at scale, alongside genuinely prestige-tier Grand Vintage releases in strong years.' },
        { question: 'Why is it called Moët Impérial?', answer: 'The name honors Napoleon Bonaparte, a real personal friend of the Moët family in the early 1800s; the house has used "Impérial" for its flagship non-vintage cuvée since 1869.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'roederer-estate', brandKeywords: ['Roederer Estate'], name: 'Roederer Estate',
    seo: brandSeo({
      brand: 'Roederer Estate', categoryLabel: 'Sparkling Wine',
      titleTag: 'Roederer Estate — Anderson Valley Brut & Brut Rosé',
      h1: 'Roederer Estate — Anderson Valley Brut & Brut Rosé Sparkling Wine',
      metaDescription: 'Buy Roederer Estate online — Anderson Valley Brut and Brut Rosé, from Champagne Louis Roederer’s California venture. Direct allocations. Free on $300+.',
      hook: 'Roederer Estate is Champagne Louis Roederer’s California venture — founded in 1982 when then-president Jean-Claude Rouzaud went looking for American terroir capable of producing world-class sparkling wine, and chose Mendocino County’s cool, fog-shrouded Anderson Valley over the more obvious choices of Napa or Sonoma. The vineyards were planted in 1984, the winery built in 1986, and the first Anderson Valley Brut released in 1988.',
      faqs: [
        { question: 'Is Roederer Estate the same as Louis Roederer champagne?', answer: 'Related but distinct: Roederer Estate is Louis Roederer’s own California sparkling-wine label, made in Anderson Valley from estate-grown fruit — a different, non-Champagne-AOC product from the same family-owned parent company.' },
        { question: 'Why did Louis Roederer choose Anderson Valley?', answer: 'Its cool, fog-influenced climate closely mirrors Champagne’s growing conditions, which is unusual among California AVAs and was the deciding factor for Jean-Claude Rouzaud in 1982.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'la-marca', brandKeywords: ['La Marca'], name: 'La Marca',
    seo: brandSeo({
      brand: 'La Marca', categoryLabel: 'Prosecco',
      titleTag: 'La Marca — Prosecco, Luminore & Prosecco Rosé',
      h1: 'La Marca — Prosecco, Luminore & Prosecco Rosé',
      metaDescription: 'Buy La Marca online — Prosecco, Luminore Conegliano Valdobbiadene DOCG, and Prosecco Rosé. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Founded in 1968 as a cooperative of Veneto and Friuli-Venezia Giulia growers, La Marca takes its name from "La Marca Trevigiana," the historic zone at the heart of Italy’s Prosecco country. Today the cooperative spans nine wineries and roughly 9,000 hectares of vineyard, and is the single largest exporter of Prosecco into the United States.',
      faqs: [
        { question: 'What’s the difference between La Marca’s Prosecco and Luminore?', answer: 'The base Prosecco is DOC-level, made under the broader Prosecco appellation; Luminore is La Marca’s premium tier from the more restrictive, hillside Conegliano Valdobbiadene DOCG zone.' },
        { question: 'Is La Marca Prosecco Rosé the same wine as the Brut?', answer: 'No; the Rosé blends in a small amount of red grape (typically Pinot Noir) for color and red-fruit character, a distinct SKU from the white Prosecco and Luminore.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'segura-viudas', brandKeywords: ['Segura Viudas'], name: 'Segura Viudas',
    seo: brandSeo({
      brand: 'Segura Viudas', categoryLabel: 'Cava',
      titleTag: 'Segura Viudas — Brut Reserva & Heredad Reserva Cava',
      h1: 'Segura Viudas Cava — Brut Reserva & Heredad Reserva',
      metaDescription: 'Buy Segura Viudas Cava online — Brut Reserva and Heredad Reserva. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'The Segura Viudas estate — its Heredad buildings dating back to an 11th-century military watchtower later converted into a Catalan farmhouse — became a modern winery in 1959 in Torrelavit, in the heart of the Penedès. The house today produces a full range of traditional-method Cava, from everyday Brut Reserva to the estate-selected top tier, Reserva Heredad.',
      faqs: [
        { question: 'What’s the difference between Segura Viudas Brut Reserva and Heredad Reserva?', answer: 'Heredad Reserva selects only the best wines from each vintage and ages a minimum of 24 months on the lees — longer and more selective than the standard Brut Reserva, positioning it as the house’s flagship.' },
        { question: 'What is cava wine?', answer: 'A Spanish sparkling wine made via the same traditional (bottle-fermented) method as Champagne, primarily from the Macabeo, Xarel·lo, and Parellada grapes of Catalonia’s Penedès region.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'lucien-albrecht', brandKeywords: ['Lucien Albrecht'], name: 'Lucien Albrecht',
    seo: brandSeo({
      brand: 'Lucien Albrecht', categoryLabel: 'Sparkling Wine',
      titleTag: 'Lucien Albrecht — Crémant d’Alsace Brut & Brut Rosé',
      h1: 'Lucien Albrecht — Crémant d’Alsace Brut & Brut Rosé',
      metaDescription: 'Buy Lucien Albrecht online — Crémant d’Alsace Brut and Brut Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'The Albrecht family’s Alsace winegrowing roots trace to 1425; Maison Lucien Albrecht itself was founded in 1698 when Balthazar Albrecht settled in Orschwihr, south of Colmar. The house was one of the pioneering producers pushing for a formal Crémant d’Alsace appellation, achieved in 1976 — and remains family-owned and managed today.',
      faqs: [
        { question: 'What is Crémant d’Alsace?', answer: 'Alsace’s answer to Champagne: a traditional-method (bottle-fermented) sparkling wine made from Alsatian grapes — chiefly Pinot Blanc, Pinot Auxerrois, Pinot Gris, and Riesling for the white styles — under its own AOC since 1976.' },
        { question: 'What’s the difference between crémant and champagne?', answer: 'Both use the identical traditional (bottle-fermentation) method; the difference is purely geographic and grape-based — Champagne must come from the Champagne region using its permitted grapes, while Crémant d’Alsace comes from Alsace’s own varieties, typically at a friendlier price point.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'mionetto', brandKeywords: ['Mionetto'], name: 'Mionetto',
    seo: brandSeo({
      brand: 'Mionetto', categoryLabel: 'Prosecco',
      titleTag: 'Mionetto — Prosecco Brut & Prosecco Rosé',
      h1: 'Mionetto — Prosecco Brut & Prosecco Rosé',
      metaDescription: 'Buy Mionetto online — Prosecco Brut and Prosecco Rosé from Valdobbiadene. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 1887 by master winemaker Francesco Mionetto in Valdobbiadene — the historic, now UNESCO World Heritage heart of Prosecco country — Mionetto is distinctive for bottling to order rather than stockpiling ahead of demand, a freshness-first practice the house has maintained since its earliest days.',
      faqs: [
        { question: 'Is prosecco sweet?', answer: 'Mionetto’s Brut is the driest style in the range; Extra Dry (not currently stocked) carries noticeably more residual sugar despite the counterintuitive name.' },
        { question: 'What’s the difference between Mionetto’s Prosecco Brut and Prosecco Rosé?', answer: 'The Rosé blends in a portion of red grape for color and red-fruit character; both are DOC-level, made using the Charmat (tank) method.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'chandon', brandKeywords: ['Chandon', 'Chandon California'], name: 'Chandon',
    seo: brandSeo({
      brand: 'Chandon', categoryLabel: 'Sparkling Wine',
      titleTag: 'Chandon — California Brut Classic & Brut Rosé',
      h1: 'Chandon California — Brut Classic & Brut Rosé Sparkling Wine',
      metaDescription: 'Buy Chandon California online — Brut Classic and Brut Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 1973 in Yountville by former Moët et Chandon market-development specialist John Wright, in partnership with the French Champagne house, Domaine Chandon California was the first French-owned sparkling wine producer in Napa Valley — deliberately named to signal both its French pedigree and its distinct, single-vineyard-driven California style.',
      faqs: [
        { question: 'Is Chandon California the same as Moët & Chandon Champagne?', answer: 'Related but distinct: Chandon California is a sister house under the same Moët Hennessy ownership, making sparkling wine from Napa Valley fruit rather than true French Champagne.' },
        { question: 'What’s the difference between champagne and sparkling wine?', answer: 'Chandon’s Brut Classic and Brut Rosé are made using the same traditional method as Champagne, just outside the legally protected Champagne region.' },
      ],
    }),
  },
  {
    categorySlug: 'champagne-sparkling', hubSlug: 'freixenet', brandKeywords: ['Freixenet'], name: 'Freixenet',
    seo: brandSeo({
      brand: 'Freixenet', categoryLabel: 'Cava',
      titleTag: 'Freixenet — Cordón Negro Cava & Italian Rosé',
      h1: 'Freixenet — Cordón Negro Brut Cava & Italian Rosé Sparkling Wine',
      metaDescription: 'Buy Freixenet online — Cordón Negro Brut Cava and Italian Rosé sparkling wine. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded and bottling under its own name from 1914 by Pedro Ferrer Bosch and Dolors Sala Vivé, Freixenet became a household name in 1974 with the launch of Cordón Negro — José Ferrer’s frosted-black-matte-bottle Cava that was the first Cava fermented at a controlled temperature. It became the top-selling imported sparkling wine in the US by 1983 and propelled Freixenet to the world’s #1 Cava producer by 1985.',
      faqs: [
        { question: 'What makes Cordón Negro’s bottle black?', answer: 'A deliberate 1974 design choice by José Ferrer; the frosted black-matte glass was a stylistic break from traditional Cava packaging and remains the brand’s most recognizable signature 50 years later.' },
        { question: 'What is cava wine?', answer: 'A traditional-method Spanish sparkling wine from Catalonia’s Penedès region, primarily Macabeo, Xarel·lo, and Parellada grapes.' },
      ],
    }),
  },

  // ─── CIDER ───────────────────────────────────────────
  {
    categorySlug: 'cider', hubSlug: 'ace', brandKeywords: ['ACE'], name: 'ACE Cider',
    seo: brandSeo({
      brand: 'ACE', categoryLabel: 'Hard Cider',
      titleTag: 'ACE Cider — Apple, Mango & Pineapple Hard Cider',
      h1: 'ACE Hard Cider — Apple, Mango & Pineapple Allocations',
      metaDescription: 'Buy ACE Hard Cider online — Apple, Mango, and Pineapple. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded by Jeffrey House in Sebastopol/Graton, California in July 1993, ACE was the first California hard cider producer and one of the first cideries formed in the US after Prohibition — House even opened the first modern cider-focused pub in the country in 1999. The brand built its reputation on fruit-forward, easy-drinking ciders, with Pineapple standing out as ACE’s biggest seller by real search demand.',
      faqs: [
        { question: 'Is ACE Cider gluten free?', answer: 'Yes — ACE’s fruit ciders are apple-based and naturally gluten-free, though it’s always worth confirming current labeling.' },
        { question: 'Where is ACE Cider made?', answer: 'Sonoma County, California (Sebastopol), where the brand has operated since 1993.' },
      ],
    }),
  },
  {
    categorySlug: 'cider', hubSlug: 'angry-orchard', brandKeywords: ['Angry Orchard'], name: 'Angry Orchard',
    seo: brandSeo({
      brand: 'Angry Orchard', categoryLabel: 'Hard Cider',
      titleTag: 'Angry Orchard — Crisp Apple & Green Apple Hard Cider',
      h1: 'Angry Orchard Hard Cider — Crisp Apple & Green Apple Allocations',
      metaDescription: 'Buy Angry Orchard Hard Cider online — Crisp Apple and Green Apple. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Angry Orchard is owned by The Boston Beer Company — the same brewer behind Samuel Adams — and launched in 2012 to bring craft-style, apple-forward hard cider to a mainstream audience; it’s now one of the best-selling hard cider brands in the US. Crisp Apple, the flagship, and Green Apple, its tarter sibling, anchor the real search demand for the brand.',
      faqs: [
        { question: 'Is Angry Orchard gluten free?', answer: 'Yes — it’s made from fermented apples, not grain.' },
        { question: 'Is Angry Orchard a beer?', answer: 'No — it’s a hard cider, fermented from apples rather than brewed from malted grain, though it’s often sold and served alongside beer.' },
        { question: 'Who owns Angry Orchard?', answer: 'The Boston Beer Company (Samuel Adams).' },
      ],
    }),
  },
  {
    categorySlug: 'cider', hubSlug: 'austin-eastciders', brandKeywords: ['Austin Eastciders'], name: 'Austin Eastciders',
    seo: brandSeo({
      brand: 'Austin Eastciders', categoryLabel: 'Hard Cider',
      titleTag: 'Austin Eastciders — Blood Orange, Original Dry & Pineapple',
      h1: 'Austin Eastciders — Blood Orange, Original Dry & Pineapple Hard Cider',
      metaDescription: 'Buy Austin Eastciders online — Blood Orange, Original Dry, and Pineapple Cider. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 2013 by Ed Gibson — who grew up in Bristol, England, "the cider capital of the world," and previously ran a specialist cider bar there — alongside beer-industry partner Mark King, Austin Eastciders set out to bring traditionally-inspired, less-sweet cider to the notoriously sweet-leaning US market, brewed in an unlikely home base: Austin, Texas. The three stocked flavors reflect that split identity — a genuinely dry, English-style base cider alongside bold, fruit-forward variants built for Texas heat.',
      faqs: [
        { question: 'Where is Austin Eastciders made?', answer: 'Austin, Texas, at the brand’s Springdale Road facility and taproom (opened 2017).' },
        { question: 'Is Austin Eastciders Original Dry Cider sweet?', answer: 'No — it’s built in the drier, more traditional English style founder Ed Gibson grew up with in Bristol, distinct from many mainstream American ciders.' },
      ],
    }),
  },
  {
    categorySlug: 'cider', hubSlug: 'downeast-cider', brandKeywords: ['Downeast Cider House', 'Downeast Cider'], name: 'Downeast Cider House',
    seo: brandSeo({
      brand: 'Downeast Cider House', categoryLabel: 'Hard Cider',
      titleTag: 'Downeast Cider House — Aloha Friday & Blackberry',
      h1: 'Downeast Cider House — Aloha Friday & Blackberry Hard Cider',
      metaDescription: 'Buy Downeast Cider House online — Aloha Friday (pineapple) and Blackberry hard cider. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Downeast Cider House is a Boston-based cidery known for its distinctively unfiltered, cloudy-orange, half-gallon-jug-style cans — a deliberate departure from the clear, filtered look of most mainstream hard cider. Aloha Friday (pineapple) and Blackberry are two of the brand’s rotating fruited flavors, sitting alongside its much larger Original Blend and seasonal lines.',
      faqs: [
        { question: 'Is Downeast Cider gluten free?', answer: 'Yes — like all hard cider, it’s fermented from apples rather than grain.' },
        { question: 'Where is Downeast Cider made?', answer: 'East Boston, Massachusetts.' },
      ],
    }),
  },

  // ─── NON-ALCOHOLIC BEER & CIDER ───────────────────────────────────────────
  {
    categorySlug: 'na-beer-cider', hubSlug: 'athletic-brewing', brandKeywords: ['Athletic Brewing'], name: 'Athletic Brewing',
    seo: brandSeo({
      brand: 'Athletic Brewing', categoryLabel: 'Non-Alcoholic Beer',
      titleTag: 'Athletic Brewing — Free Wave, Run Wild & Upside Dawn',
      h1: 'Athletic Brewing — Free Wave Hazy IPA, Run Wild IPA & Upside Dawn Golden Ale',
      metaDescription: 'Buy Athletic Brewing online — Free Wave Hazy IPA, Run Wild IPA, and Upside Dawn Golden Ale, non-alcoholic craft beer. Direct allocations. Free on $300+.',
      hook: 'Athletic Brewing Company was founded in 2017 by Bill Shufelt — a former Wall Street analyst who quit drinking and couldn’t find a genuinely good-tasting non-alcoholic beer — alongside brewmaster John Walker, based in Stratford, Connecticut, with a second brewery in San Diego. It’s widely credited with kicking off the modern "good-tasting" NA beer boom in the US by brewing beers from the ground up with proprietary fermentation techniques, rather than simply stripping the alcohol out of a regular beer afterward.',
      faqs: [
        { question: 'Who founded Athletic Brewing?', answer: 'Bill Shufelt and John Walker, founded 2017 in Stratford, Connecticut.' },
        { question: 'Is Athletic Brewing beer really non-alcoholic?', answer: 'Yes — all core Athletic Brewing beers are brewed to below 0.5% ABV, the US legal threshold for "non-alcoholic."' },
        { question: 'Does Athletic Brewing taste like real beer?', answer: 'Unlike most legacy NA brewers, Athletic ferments each beer from scratch specifically to be alcohol-free, rather than dealcoholizing a regular beer afterward — the brand’s entire reputation rests on that approach delivering closer-to-real-beer flavor.' },
      ],
    }),
  },

  // ─── BEER ───────────────────────────────────────────
  {
    categorySlug: 'beer', hubSlug: 'brooklyn-brewery', brandKeywords: ['Brooklyn', 'Brooklyn Brewery'], name: 'Brooklyn Brewery',
    seo: brandSeo({
      brand: 'Brooklyn Brewery', categoryLabel: 'Lager',
      titleTag: 'Brooklyn Brewery — Lager & Pilsner',
      h1: 'Brooklyn Brewery — Brooklyn Lager & Pilsner',
      metaDescription: 'Buy Brooklyn Brewery online — Brooklyn Lager and Brooklyn Pilsner. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Brooklyn Brewery was founded in 1988 by former Middle East correspondent Steve Hindy and banker Tom Potter, reviving brewing in a borough that had once been home to dozens of breweries before Prohibition. Brooklyn Lager, the flagship, is a 5.2% ABV Amber Lager modeled on pre-Prohibition New York lagers, dry-hopped for a grapefruit-and-pine aroma; Brooklyn Pilsner is the lighter, crisper sibling.',
      faqs: [
        { question: 'What’s the difference between Brooklyn Lager and Brooklyn Pilsner?', answer: 'Lager is a fuller-bodied 5.2% ABV Amber Lager with dry-hopped citrus/pine aroma; Pilsner is a lighter, crisper golden lager.' },
        { question: 'Is Brooklyn Lager an IPA?', answer: 'No — it’s an Amber Lager, though the dry-hopping technique (unusual for a lager) gives it more hop aroma than most lagers, which sometimes causes confusion.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'corona', brandKeywords: ['Corona'], name: 'Corona',
    seo: brandSeo({
      brand: 'Corona', categoryLabel: 'Lager',
      titleTag: 'Corona — Extra & Light Mexican Lager',
      h1: 'Corona — Extra & Light Mexican Lager',
      metaDescription: 'Buy Corona online — Corona Extra and Corona Light Mexican Lager. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Corona traces to 1925 and Cervecería Modelo in Mexico City; Corona Extra became Mexico’s top-selling beer in the 1980s and the top-selling imported beer in the US shortly after. Corona Extra (4.6% ABV) is the classic clear-bottle pale lager customarily served with a lime wedge; Corona Light (4.0% ABV) is the lower-calorie companion. Constellation Brands holds exclusive US import and marketing rights following a 2013 sale by AB InBev.',
      faqs: [
        { question: 'Who owns Corona?', answer: 'Corona is brewed by Grupo Modelo in Mexico; Constellation Brands holds the exclusive US import and marketing rights following a 2013 sale by AB InBev as a condition of the Grupo Modelo acquisition.' },
        { question: 'What’s the difference between Corona Extra and Corona Light?', answer: 'Extra is the standard 4.6% ABV pale lager; Light is a 4.0% ABV, lower-calorie version aimed at the light-beer segment.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'coors', brandKeywords: ['Coors'], name: 'Coors',
    seo: brandSeo({
      brand: 'Coors', categoryLabel: 'Lager',
      titleTag: 'Coors — Banquet & Light American Lager',
      h1: 'Coors — Banquet & Light American Lager',
      metaDescription: 'Buy Coors online — Coors Banquet and Coors Light American Lager. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Coors traces to 1873 when Adolph Coors and Jacob Schueler founded a brewery in Golden, Colorado, using Rocky Mountain water. Coors Light, launched in 1978, became one of the best-selling light lagers in the US and is known for its "cold-activated" mountains-turn-blue can; Coors Banquet is the brewery’s original full-flavor lager, largely unchanged in recipe since the 1930s.',
      faqs: [
        { question: 'What is Coors Banquet?', answer: 'Molson Coors’ original American lager recipe, brewed continuously (aside from Prohibition) since the 1930s in Golden, Colorado.' },
        { question: 'What’s the ABV of Coors Light?', answer: '4.2% ABV, versus roughly 5% for full-strength Coors Banquet.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'heineken', brandKeywords: ['Heineken'], name: 'Heineken',
    seo: brandSeo({
      brand: 'Heineken', categoryLabel: 'Lager',
      titleTag: 'Heineken — Original Dutch Lager',
      h1: 'Heineken — Original Dutch Lager',
      metaDescription: 'Buy Heineken online — Original Dutch Lager. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Heineken was founded in 1864 by Gerard Adriaan Heineken in Amsterdam and is now one of the largest brewing groups in the world. Heineken Original is a 5% ABV pale lager brewed with the company’s proprietary "A-yeast," a strain used across nearly all Heineken breweries worldwide to keep the flavor consistent regardless of where it’s brewed.',
      faqs: [
        { question: 'What type of beer is Heineken?', answer: 'A pale lager, brewed with Heineken’s own proprietary A-yeast strain.' },
        { question: 'What is Heineken’s alcohol content?', answer: '5% ABV.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'miller-high-life', brandKeywords: ['Miller High Life'], name: 'Miller High Life',
    seo: brandSeo({
      brand: 'Miller High Life', categoryLabel: 'Lager',
      titleTag: 'Miller High Life — The Champagne of Beers',
      h1: 'Miller High Life — American Lager',
      metaDescription: 'Buy Miller High Life online — the Champagne of Beers, American lager. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Miller High Life launched on New Year’s Eve 1903, when founder Frederick Miller set out to make "the good life" accessible to everyday drinkers, not just the upper crust. Its nickname, "The Champagne of Beers," comes from the bottle itself — a Champagne-shaped bottle with sloping shoulders and an elongated neck, deliberately modeled after Champagne bottles, not from any actual similarity in taste or process.',
      faqs: [
        { question: 'Why is Miller High Life called the Champagne of Beers?', answer: 'The nickname refers to the Champagne-shaped bottle, not the beer style; the slogan itself dates to the late 1960s.' },
        { question: 'What is Miller High Life’s ABV?', answer: '4.6% ABV.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'miller-lite', brandKeywords: ['Miller Lite'], name: 'Miller Lite',
    seo: brandSeo({
      brand: 'Miller Lite', categoryLabel: 'Lager',
      titleTag: 'Miller Lite — American Light Lager',
      h1: 'Miller Lite — American Light Lager',
      metaDescription: 'Buy Miller Lite online — American light lager. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Miller Lite launched in 1975 and is widely credited with creating the modern American light-beer category — a descendant of Miller High Life, built to deliver a full beer taste at roughly a third fewer calories.',
      faqs: [
        { question: 'Was Miller Lite the first light beer?', answer: 'It’s widely credited as the beer that popularized and defined the modern American light-lager category, though early light-beer experiments predate it.' },
        { question: 'What is Miller Lite’s ABV?', answer: '4.2% ABV.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'modelo', brandKeywords: ['Modelo'], name: 'Modelo',
    seo: brandSeo({
      brand: 'Modelo', categoryLabel: 'Lager',
      titleTag: 'Modelo — Especial & Negra Mexican Lager',
      h1: 'Modelo — Especial & Negra Mexican Lager',
      metaDescription: 'Buy Modelo online — Modelo Especial and Negra Modelo Mexican lager. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Grupo Modelo began brewing in Mexico City in 1925, launching the Modelo and Negra Modelo brands together by 1928. Modelo Especial (4.4-4.5% ABV) is a full-flavored pale adjunct lager introduced to US drinkers in 1990 and has since become one of the top-selling beer brands in the country; Negra Modelo (5.4% ABV) is a Munich Dunkel-style dark lager, brewed nearly twice as long for a fuller, maltier body.',
      faqs: [
        { question: 'What’s the difference between Modelo Especial and Negra Modelo?', answer: 'Especial is a pale adjunct lager at 4.4-4.5% ABV; Negra Modelo is a darker, maltier Munich Dunkel-style lager at 5.4% ABV.' },
        { question: 'Is Modelo owned by the same company as Corona?', answer: 'Both are brewed by Grupo Modelo; Constellation Brands holds US import/marketing rights for both, following the same 2013 AB InBev divestiture.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'pacifico', brandKeywords: ['Pacifico'], name: 'Pacifico',
    seo: brandSeo({
      brand: 'Pacifico', categoryLabel: 'Lager',
      titleTag: 'Pacifico — Clara Mexican Lager',
      h1: 'Pacifico Clara — Mexican Lager',
      metaDescription: 'Buy Pacifico online — Pacifico Clara Mexican lager. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Cerveza Pacífico Clara has been brewed in the Pacific coast port city of Mazatlán, Sinaloa, since 1900, when three German immigrants opened the Cervecería del Pacífico. It’s a golden, light-bodied Mexican pilsner-style lager, now part of the Grupo Modelo portfolio.',
      faqs: [
        { question: 'Where is Pacifico beer from?', answer: 'Mazatlán, Sinaloa, Mexico, brewed continuously since 1900.' },
        { question: 'What is Pacifico’s ABV?', answer: '4.4% ABV.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'peroni', brandKeywords: ['Peroni'], name: 'Peroni',
    seo: brandSeo({
      brand: 'Peroni', categoryLabel: 'Lager',
      titleTag: 'Peroni — Nastro Azzurro Italian Lager',
      h1: 'Peroni Nastro Azzurro — Italian Lager',
      metaDescription: 'Buy Peroni online — Nastro Azzurro Italian lager. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Peroni Nastro Azzurro launched in 1963 as Birra Peroni’s premium export lager, brewed in Rome with Saaz and Hallertau Magnum hops. At 5.1% ABV, it’s classified as a European/Italian-style pale lager and remains one of the most recognizable Italian beer exports in the US market.',
      faqs: [
        { question: 'Is Peroni Italian?', answer: 'Yes, Peroni Nastro Azzurro is brewed by Birra Peroni Industriale S.p.A. in Rome, Italy.' },
        { question: 'What is Peroni’s ABV?', answer: '5.1% ABV.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'samuel-adams', brandKeywords: ['Samuel Adams', 'Sam Adams'], name: 'Samuel Adams',
    seo: brandSeo({
      brand: 'Samuel Adams', categoryLabel: 'Lager',
      titleTag: 'Samuel Adams — Boston Lager & Utopias',
      h1: 'Samuel Adams — Boston Lager & Utopias',
      metaDescription: 'Buy Samuel Adams online — Boston Lager and the legendary Utopias. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Boston Beer Company was founded in 1984 by Jim Koch, using a family lager recipe, and Samuel Adams Boston Lager — a Vienna-style amber lager — became one of the flagship beers of the American craft-beer revival. Utopias sits at the opposite extreme of the range: an extreme, barrel-aged, high-ABV specialty release far beyond the core Boston Lager, part of a much larger, highly seasonal lineup (Octoberfest, Summer Ale, Winter Lager) not currently stocked beyond these two.',
      faqs: [
        { question: 'What style of beer is Samuel Adams Boston Lager?', answer: 'A Vienna-style amber lager, one of the beers most credited with kickstarting American craft brewing in the 1980s.' },
        { question: 'Who founded Samuel Adams?', answer: 'Jim Koch founded Boston Beer Company in 1984, using a family recipe.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'sapporo', brandKeywords: ['Sapporo'], name: 'Sapporo',
    seo: brandSeo({
      brand: 'Sapporo', categoryLabel: 'Lager',
      titleTag: 'Sapporo — Premium Japanese Lager',
      h1: 'Sapporo Premium — Japanese Lager',
      metaDescription: 'Buy Sapporo online — Sapporo Premium Japanese lager. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Sapporo Breweries was established in 1876 in Hokkaido by Seibei Nakagawa, who defied a government ban to study German brewing techniques abroad — making Sapporo Premium Japan’s oldest beer brand. It’s a 4.9% ABV premium lager blending German lagering tradition with Japanese brewing precision.',
      faqs: [
        { question: 'Is Sapporo the oldest Japanese beer brand?', answer: 'Yes, founded 1876 in Hokkaido.' },
        { question: 'What is Sapporo Premium’s ABV?', answer: '4.9% ABV.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'stella-artois', brandKeywords: ['Stella Artois'], name: 'Stella Artois',
    seo: brandSeo({
      brand: 'Stella Artois', categoryLabel: 'Lager',
      titleTag: 'Stella Artois — Belgian Lager',
      h1: 'Stella Artois — Belgian Lager',
      metaDescription: 'Buy Stella Artois online — Belgian lager. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Stella Artois traces to the Den Hoorn brewery in Leuven, Belgium, founded in 1366, with the "Stella" (Latin for star) name adopted in 1926 as a Christmas beer before becoming year-round. It’s a European/Belgian pale lager at roughly 5% ABV, now part of AB InBev’s global portfolio.',
      faqs: [
        { question: 'What type of beer is Stella Artois?', answer: 'A European/Belgian pale lager, ~5% ABV.' },
        { question: 'What is Stella Artois’s alcohol content?', answer: '5% ABV.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'yuengling', brandKeywords: ['Yuengling'], name: 'Yuengling',
    seo: brandSeo({
      brand: 'Yuengling', categoryLabel: 'Lager',
      titleTag: 'Yuengling — Traditional Lager',
      h1: 'Yuengling Traditional Lager — America’s Oldest Brewery',
      metaDescription: 'Buy Yuengling online — Traditional Lager from America’s oldest continuously-operating brewery. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'D.G. Yuengling & Son was founded in 1829 in Pottsville, Pennsylvania, making it America’s oldest continuously-operating brewery (it survived Prohibition by pivoting briefly to near-beer and dairy products). Yuengling Traditional Lager — an amber lager at 4.5% ABV — is a recipe resurrected from the brewery’s own archives in 1987 and has been the flagship beer ever since.',
      faqs: [
        { question: 'Is Yuengling America’s oldest brewery?', answer: 'Yes, founded 1829, continuously operating aside from a brief Prohibition-era pivot.' },
        { question: 'What style of beer is Yuengling Traditional Lager?', answer: 'An amber lager, 4.5% ABV, brewed with caramel malt and corn grits.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'bells', brandKeywords: ["Bell's", 'Bells'], name: "Bell's",
    seo: brandSeo({
      brand: "Bell's", categoryLabel: 'Beer',
      titleTag: "Bell's — Two Hearted Ale & Oberon",
      h1: "Bell's — Two Hearted Ale IPA & Oberon Wheat Ale",
      metaDescription: "Buy Bell's online — Two Hearted Ale IPA and Oberon Wheat Ale. Direct allocations at Aged & Amber. Free shipping on $300+.",
      hook: "Founded in 1985 in Kalamazoo, Michigan by Larry Bell, Bell's built its national reputation on two very different beers: Two Hearted Ale, a 100%-Centennial-hop IPA that has repeatedly topped national \"Best Beer in America\" polls, and Oberon, a restrained four-ingredient summer wheat ale with zero added spices or fruit. Bell's was sold to Kirin's Lion Little World Beverages in November 2021.",
      faqs: [
        { question: 'What makes Two Hearted Ale so highly rated?', answer: "Single-hop-variety focus (100% Centennial) and remarkable year-to-year consistency; it's repeatedly named America's best beer in national homebrewer/consumer polls." },
        { question: 'Does Oberon have fruit or spices in it?', answer: "No — a deliberate point of difference from most competing summer wheat ales; it's brewed with just wheat malt, Saaz hops, water, and Bell's house ale yeast." },
        { question: "Is Bell's still an independent brewery?", answer: "No; Kirin's Lion Little World Beverages acquired Bell's in November 2021, and founder Larry Bell retired from the company at that time." },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'dogfish-head', brandKeywords: ['Dogfish Head'], name: 'Dogfish Head',
    seo: brandSeo({
      brand: 'Dogfish Head', categoryLabel: 'IPA',
      titleTag: 'Dogfish Head — 60 Minute & 90 Minute IPA',
      h1: 'Dogfish Head — 60 Minute & 90 Minute Imperial IPA',
      metaDescription: 'Buy Dogfish Head online — 60 Minute IPA and 90 Minute Imperial IPA. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 1995 in Milton, Delaware by Sam Calagione, Dogfish Head pioneered "continuous hopping" — a steady stream of hop additions throughout the boil rather than a few discrete additions — to brew both 60 Minute IPA (6% ABV) and 90 Minute IPA (9% ABV, first released 2001). Dogfish Head merged with The Boston Beer Company (Samuel Adams) in a deal that closed in July 2019.',
      faqs: [
        { question: 'What is continuous hopping?', answer: "Dogfish Head's signature technique: instead of adding hops at just a few points in the boil, hops are added in a steady stream throughout, originally accomplished with a hacked vibrating football game." },
        { question: "What's the difference between 60 Minute and 90 Minute IPA?", answer: 'Both use continuous hopping, but 90 Minute is boiled/hopped longer, runs stronger (9% vs. 6% ABV), and carries more malt backbone to balance the added bitterness.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'elysian', brandKeywords: ['Elysian'], name: 'Elysian',
    seo: brandSeo({
      brand: 'Elysian', categoryLabel: 'IPA',
      titleTag: 'Elysian — Space Dust IPA',
      h1: 'Elysian Space Dust IPA',
      metaDescription: 'Buy Elysian Space Dust IPA online. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Elysian Brewing was founded in Seattle in 1996 and built Space Dust IPA (8.2% ABV, Chinook-bittered with Citra and Amarillo dry-hop additions) into one of the most recognizable IPAs on the West Coast after its 2012 debut. Anheuser-Busch InBev acquired Elysian in January 2015.',
      faqs: [
        { question: 'What hops are in Space Dust IPA?', answer: 'Chinook for bittering, with late and dry additions of Citra and Amarillo delivering candied grapefruit, mango, and pine.' },
        { question: 'Is Elysian still an independent craft brewery?', answer: 'No; Anheuser-Busch InBev has owned Elysian since January 2015.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'firestone-walker', brandKeywords: ['Firestone Walker'], name: 'Firestone Walker',
    seo: brandSeo({
      brand: 'Firestone Walker', categoryLabel: 'IPA',
      titleTag: 'Firestone Walker — Union Jack IPA',
      h1: 'Firestone Walker Union Jack IPA',
      metaDescription: 'Buy Firestone Walker Union Jack IPA online. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Founded in 1996 by brothers-in-law Adam Firestone and David Walker, Firestone Walker's Union Jack IPA (7.0% ABV) won back-to-back gold medals in the American IPA category at the Great American Beer Festival in 2008 and 2009, plus gold at the World Beer Cup. In 2015 the brewery merged with Belgium's Duvel Moortgat, which became majority owner.",
      faqs: [
        { question: 'Has Union Jack IPA won major awards?', answer: 'Yes: back-to-back GABF gold medals (2008, 2009) plus World Beer Cup gold, among the most decorated American IPA award records.' },
        { question: 'Is Firestone Walker still independently run?', answer: "Belgium's Duvel Moortgat became majority owner in 2015, but founders David Walker (CEO) and Adam Firestone (board) still lead day-to-day operations in Paso Robles, CA." },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'lagunitas', brandKeywords: ['Lagunitas'], name: 'Lagunitas',
    seo: brandSeo({
      brand: 'Lagunitas', categoryLabel: 'IPA',
      titleTag: 'Lagunitas — IPA',
      h1: 'Lagunitas IPA',
      metaDescription: 'Buy Lagunitas IPA online. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Lagunitas Brewing Company launched its IPA in 1995 from Petaluma, California, and it became one of the foundational, best-known West Coast IPAs in American craft beer, carrying more than 800,000 Untappd ratings. Heineken acquired a 50% stake in 2015 and full ownership by 2017.',
      faqs: [
        { question: 'Who owns Lagunitas now?', answer: 'Heineken has owned Lagunitas fully since 2017 (an initial 50% stake was acquired in 2015).' },
        { question: 'Is Lagunitas IPA a West Coast style?', answer: "Yes, at 6.2% ABV it's widely cited as one of the beers that helped define and popularize the modern West Coast IPA style nationally." },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'new-belgium', brandKeywords: ['New Belgium', 'Voodoo Ranger'], name: 'New Belgium',
    seo: brandSeo({
      brand: 'New Belgium', categoryLabel: 'Beer',
      titleTag: 'New Belgium — Fat Tire & Voodoo Ranger IPA',
      h1: 'New Belgium — Fat Tire Ale & Voodoo Ranger IPA',
      metaDescription: 'Buy New Belgium online — Fat Tire Ale and the Voodoo Ranger IPA line. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "New Belgium Brewing was founded in 1991 in Fort Collins, Colorado by Jeff Lebesch and Kim Jordan. Fat Tire Amber Ale, its longtime flagship, became America's first independently certified carbon-neutral beer in 2020. The brewery also built the Voodoo Ranger line into more than 20 distinct IPAs before selling to Kirin's Lion Little World Beverages in an all-cash deal completed in early 2020 after an employee-owner vote.",
      faqs: [
        { question: 'Why is it called "Fat Tire"?', answer: "Named for co-founder Jeff Lebesch's 1988 bicycle tour through Belgium that directly inspired the recipe." },
        { question: 'Is Fat Tire carbon neutral?', answer: "Yes — it became America's first certified carbon-neutral beer in 2020." },
        { question: "What's the difference between Voodoo Ranger IPA and Imperial IPA?", answer: 'The flagship IPA runs 7% ABV/50 IBU; Imperial IPA is a stronger, more heavily hopped 9% ABV/70 IBU step up.' },
        { question: 'Is New Belgium still employee-owned?', answer: "No; the company sold to Kirin's Lion Little World Beverages in a deal completed in early 2020, ending its run as a 100% employee-owned brewery (since 2012)." },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'sierra-nevada', brandKeywords: ['Sierra Nevada'], name: 'Sierra Nevada',
    seo: brandSeo({
      brand: 'Sierra Nevada', categoryLabel: 'Beer',
      titleTag: 'Sierra Nevada — Pale Ale, IPA & Torpedo',
      h1: 'Sierra Nevada — Pale Ale, Celebration IPA, Hazy Little Thing & Torpedo',
      metaDescription: 'Buy Sierra Nevada online — Pale Ale, Celebration IPA, Hazy Little Thing, and Torpedo Extra IPA. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Sierra Nevada was founded in 1980 in Chico, California by Ken Grossman, and Sierra Nevada Pale Ale is one of the beers most directly credited with launching the modern American craft-beer movement and defining the American Pale Ale style. Its IPA lineup spans Celebration IPA (an annual fresh-hop release every fall since 1981), Hazy Little Thing, and Torpedo Extra IPA, named for the brewery\'s "Hop Torpedo" dry-hopping device. Sierra Nevada remains one of the largest breweries still under independent/employee ownership in the US.',
      faqs: [
        { question: "What's the ABV of Sierra Nevada Pale Ale?", answer: '~5.6% ABV.' },
        { question: 'Is Sierra Nevada still independently owned?', answer: 'Yes — unlike several peer craft breweries now owned by AB InBev, Heineken, or Kirin, Sierra Nevada has never sold to a multinational beverage company.' },
        { question: 'What is Torpedo Extra IPA named after?', answer: "Sierra Nevada's proprietary \"Hop Torpedo\" device, which infuses extra hop aroma during dry-hopping without adding bitterness." },
        { question: 'Is Celebration IPA a seasonal beer?', answer: "Yes, released every fall since 1981 using that year's freshly harvested hops, making it one of the longest-running fresh-hop beers in American craft brewing." },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'stone-brewing', brandKeywords: ['Stone', 'Stone Brewing'], name: 'Stone Brewing',
    seo: brandSeo({
      brand: 'Stone', categoryLabel: 'IPA',
      titleTag: 'Stone Brewing — Stone IPA',
      h1: 'Stone IPA',
      metaDescription: 'Buy Stone IPA online. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Stone Brewing was founded in 1996 in San Diego County by Greg Koch and Steve Wagner. Stone IPA, first brewed in 1997 to mark the company’s first anniversary, became its flagship and is widely credited as one of the beers that defined the West Coast IPA style before the term was in common use. Sapporo, Japan’s oldest beer brand, acquired Stone for $165 million in a deal that closed August 2022.',
      faqs: [
        { question: 'Is Stone IPA a true West Coast IPA?', answer: "Yes; first brewed in 1997, it's one of the style's founding examples." },
        { question: 'Who owns Stone Brewing now?', answer: 'Sapporo acquired Stone Brewing in a deal that closed August 2022; production remains based in Escondido, CA.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'allagash', brandKeywords: ['Allagash'], name: 'Allagash',
    seo: brandSeo({
      brand: 'Allagash', categoryLabel: 'Ale & Wheat',
      titleTag: 'Allagash — White Belgian-Style Wheat Beer',
      h1: 'Allagash White — Belgian-Style Wheat Beer',
      metaDescription: 'Buy Allagash White online — Belgian-style wheat beer. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 1995 by Rob Tod in Portland, Maine, with the goal of introducing Americans to Belgian-inspired ales, Allagash built its entire reputation on one beer: Allagash White, its first-ever recipe and still its flagship today. The witbier has earned 18 total medals across the Great American Beer Festival, World Beer Cup, and European Beer Star, including 10 golds.',
      faqs: [
        { question: 'What makes Allagash White a witbier?', answer: 'Spiced with coriander and curaçao orange peel over a wheat-and-oat grain bill, unfiltered for a hazy, pale-straw pour.' },
        { question: 'Is Allagash White the brewery’s flagship?', answer: "Yes — it was Allagash's very first recipe in 1995 and remains the beer the brewery is best known for." },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'blue-moon', brandKeywords: ['Blue Moon'], name: 'Blue Moon',
    seo: brandSeo({
      brand: 'Blue Moon', categoryLabel: 'Ale & Wheat',
      titleTag: 'Blue Moon — Belgian White',
      h1: 'Blue Moon Belgian White',
      metaDescription: 'Buy Blue Moon Belgian White online. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Blue Moon Belgian White traces to 1995, when brewer Keith Villa created it at the Sandlot Brewery inside Coors Field in Denver, before it grew into Molson Coors\' own Blue Moon Brewing Co. The witbier is built on Valencia orange peel and coriander at 5.4% ABV, and remains one of the most widely available Belgian-style wheat beers in the US.',
      faqs: [
        { question: 'Who created Blue Moon?', answer: 'Brewer Keith Villa, in 1995, at the Sandlot Brewery inside Coors Field, Denver.' },
        { question: 'What’s in Blue Moon Belgian White?', answer: 'Malted barley, white wheat, oats, Valencia orange peel, and coriander.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'kona-brewing', brandKeywords: ['Kona', 'Kona Brewing'], name: 'Kona Brewing',
    seo: brandSeo({
      brand: 'Kona', categoryLabel: 'Ale & Wheat',
      titleTag: 'Kona — Big Wave Golden Ale',
      h1: 'Kona Big Wave Golden Ale',
      metaDescription: 'Buy Kona Big Wave Golden Ale online. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Kona Big Wave Golden Ale is named for the waves at Makaha, on Oahu, where Hawaii\'s first surf competition was held in 1954 — a fitting tribute from a beer brewed in Kailua-Kona on the Big Island. Originally launched in 1994, it\'s built on Galaxy and Citra hops for a bright, tropical character at 4.4% ABV.',
      faqs: [
        { question: 'Where is Kona Big Wave brewed?', answer: "Kailua-Kona, on Hawaii's Big Island — worth verifying against current packaging, since some Kona-branded beers sold on the mainland are produced under license." },
        { question: 'What’s the ABV of Kona Big Wave?', answer: '4.4% ABV, 21 IBU.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'leinenkugels', brandKeywords: ["Leinenkugel's", 'Leinenkugels'], name: "Leinenkugel's",
    seo: brandSeo({
      brand: "Leinenkugel's", categoryLabel: 'Ale & Wheat',
      titleTag: "Leinenkugel's — Summer Shandy & Sunset Wheat",
      h1: "Leinenkugel's — Summer Shandy & Sunset Wheat",
      metaDescription: "Buy Leinenkugel's online — Summer Shandy and Sunset Wheat. Direct allocations at Aged & Amber. Free shipping on $300+.",
      hook: 'Jacob Leinenkugel Brewing Company has operated out of Chippewa Falls, Wisconsin since 1867. Sunset Wheat (2006) is an award-winning Belgian-style witbier with orange and blueberry notes; Summer Shandy (2007) is the beer that arguably invented the modern American shandy category by blending wheat beer with a natural lemonade-style flavor.',
      faqs: [
        { question: 'What is a shandy?', answer: "A beer blended with a lemon-lime soda or lemonade-style flavoring; Leinenkugel's Summer Shandy (2007) is widely credited with popularizing the category nationally." },
        { question: 'Is Sunset Wheat a witbier?', answer: 'Yes, a Belgian-style witbier with orange and blueberry character, GABF Silver and World Beer Cup Bronze medalist in 2006.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'sweetwater', brandKeywords: ['SweetWater'], name: 'SweetWater',
    seo: brandSeo({
      brand: 'SweetWater', categoryLabel: 'Ale & Wheat',
      titleTag: 'SweetWater — 420 Extra Pale Ale',
      h1: 'SweetWater 420 Extra Pale Ale',
      metaDescription: 'Buy SweetWater 420 Extra Pale Ale online. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'SweetWater 420 Extra Pale Ale has been Atlanta’s best-selling pale ale since its first brew day on April 20, 1997 — a date, and a number, that became core to SweetWater’s laid-back brand identity. At 5.7% ABV and 39 IBU, it remains the brewery’s flagship.',
      faqs: [
        { question: 'Why is it called "420"?', answer: 'First brewed on April 20, 1997.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'founders', brandKeywords: ['Founders'], name: 'Founders',
    seo: brandSeo({
      brand: 'Founders', categoryLabel: 'Stout & Porter',
      titleTag: 'Founders — Breakfast Stout, KBS & Porter',
      h1: 'Founders — Breakfast Stout, KBS & Porter',
      metaDescription: 'Buy Founders online — Breakfast Stout, KBS, and Porter. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founders Brewing Co. of Grand Rapids, Michigan has three genuinely distinct stouts stocked here: Breakfast Stout (8.3% ABV, coffee-and-chocolate imperial stout), the legendarily hard-to-find KBS/Kentucky Breakfast Stout (~12% ABV, bourbon-barrel-aged a full year, released once each spring), and the more restrained, twice-GABF-medaled Founders Porter (6.5% ABV).',
      faqs: [
        { question: 'What does KBS stand for?', answer: 'Kentucky Breakfast Stout; aged a full year in bourbon barrels, released annually each spring, and one of the most sought-after annual beer releases in the US.' },
        { question: 'What’s the difference between Breakfast Stout and KBS?', answer: "Breakfast Stout (8.3% ABV) is Founders' year-round coffee-and-chocolate imperial stout; KBS (~12% ABV) is the same idea taken further and bourbon-barrel-aged for a full year as a limited annual release." },
        { question: 'Has Founders Porter won awards?', answer: 'Yes: two-time GABF Silver Medal winner (Robust Porter category, 2014 and 2020).' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'guinness', brandKeywords: ['Guinness'], name: 'Guinness',
    seo: brandSeo({
      brand: 'Guinness', categoryLabel: 'Stout & Porter',
      titleTag: 'Guinness — Draught Irish Stout',
      h1: 'Guinness Draught — Irish Stout',
      metaDescription: 'Buy Guinness Draught online — Irish stout, 4-pack and 8-pack cans. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Guinness Draught is the global reference point for dry Irish stout — brewed in Dublin since 1759 and instantly recognizable by its cascading nitrogen pour, delivered at home via the widget in every can. Both stocked pack sizes carry the exact same beer.',
      faqs: [
        { question: 'How do you pour a Guinness can properly?', answer: "Tilt the glass at 45°, pour steadily, then let the nitrogen widget settle for the signature cascade before topping off." },
        { question: 'Why is there a ball in a Guinness can?', answer: 'It’s the nitrogen widget, which releases pressurized nitrogen gas on opening to recreate a creamy draught-style pour at home.' },
        { question: 'Is Guinness a stout?', answer: 'Yes, it’s the style-defining example of a dry Irish stout globally.' },
      ],
    }),
  },
  {
    categorySlug: 'beer', hubSlug: 'goose-island', brandKeywords: ['Goose Island', '312'], name: 'Goose Island',
    seo: brandSeo({
      brand: 'Goose Island', categoryLabel: 'Beer',
      titleTag: 'Goose Island — 312 Urban Wheat Ale & Bourbon County Stout',
      h1: 'Goose Island — 312 Urban Wheat Ale & Bourbon County Brand Stout',
      metaDescription: 'Buy Goose Island online — 312 Urban Wheat Ale and Bourbon County Brand Stout. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Goose Island Beer Co. is a Chicago brewery with a genuinely striking range spanning both ends of the beer spectrum. 312 Urban Wheat Ale — named for Chicago’s original area code — is an approachable, easy-drinking wheat ale, while Bourbon County Brand Stout, first brewed in 1992, is widely credited with inventing the modern bourbon-barrel-aged beer category and remains one of the most collected annual beer releases in America. Anheuser-Busch InBev has owned Goose Island since 2011.',
      faqs: [
        { question: 'Why is it called "312"?', answer: "Named for Chicago's original telephone area code." },
        { question: 'Did Goose Island invent bourbon-barrel-aged beer?', answer: 'Bourbon County Brand Stout (1992) is widely credited as the beer that started the modern bourbon-barrel-aged beer category.' },
        { question: 'Who owns Goose Island?', answer: 'Anheuser-Busch InBev, since 2011.' },
      ],
    }),
  },

  // ─── NON-ALCOHOLIC CHAMPAGNE & SPARKLING ───────────────────────────────────────────
  {
    categorySlug: 'na-champagne-sparkling', hubSlug: 'chateau-del-ish', brandKeywords: ['Château del ISH', 'Chateau del ISH'], name: 'Château del ISH',
    seo: brandSeo({
      brand: 'Château del ISH', categoryLabel: 'Non-Alcoholic Sparkling Wine',
      titleTag: 'Château del ISH — Non-Alcoholic Sparkling White & Rosé',
      h1: 'Château del ISH — Non-Alcoholic Sparkling White & Rosé',
      metaDescription: 'Buy Château del ISH online — Non-Alcoholic Sparkling White and Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in Copenhagen in 2018 by Morten Sørensen, ISH is a mindful-drinking company built around making it easy to say "yes" to going out — and "yes" to a productive day after. The Sparkling White is a demi-sec made from de-alcoholized Pinot Blanc and Silvaner grapes; the Sparkling Rosé is a de-alcoholized blend of Merlot and Pinot Noir. The brand has won 40+ international taste awards.',
      faqs: [
        { question: 'What is Château del ISH made from?', answer: 'De-alcoholized Pinot Blanc and Silvaner for the White; de-alcoholized Merlot and Pinot Noir for the Rosé — real wine grapes, not a grape-juice base.' },
      ],
    }),
  },
  {
    categorySlug: 'na-champagne-sparkling', hubSlug: 'fre', brandKeywords: ['FRE'], name: 'FRE',
    seo: brandSeo({
      brand: 'FRE', categoryLabel: 'Non-Alcoholic Sparkling Wine',
      titleTag: 'FRE — Alcohol-Removed Sparkling Brut & Rosé',
      h1: 'FRE — Alcohol-Removed Sparkling Brut & Rosé',
      metaDescription: 'Buy FRE online — Alcohol-Removed Sparkling Brut and Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Sutter Home has produced FRE since 1992 — making it one of the longest-running alcohol-removed wine lines in the US. The alcohol is stripped using centrifugal force combined with nitrogen gas and controlled temperature, leaving a trace typically under 0.5% ABV. FRE retail sales grew roughly 300% between 2019 and 2024.',
      faqs: [
        { question: 'Does FRE wine have any alcohol?', answer: 'Under 0.5% ABV, the same trace level as most alcohol-removed wines.' },
        { question: 'Who makes FRE wine?', answer: 'Sutter Home Family Vineyards (Trinchero Family Wine & Spirits); FRE has grown into a standalone brand name in its own right.' },
      ],
    }),
  },
  {
    categorySlug: 'na-champagne-sparkling', hubSlug: 'french-bloom', brandKeywords: ['French Bloom'], name: 'French Bloom',
    seo: brandSeo({
      brand: 'French Bloom', categoryLabel: 'Non-Alcoholic Sparkling Wine',
      titleTag: 'French Bloom — Le Blanc & Le Rosé',
      h1: 'French Bloom — Le Blanc & Le Rosé Alcohol-Free Sparkling Wine',
      metaDescription: 'Buy French Bloom online — Le Blanc and Le Rosé alcohol-free sparkling wine. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded by Maggie Frerejean-Taittinger and Constance Jablonski, French Bloom officially launched in October 2021 after more than two years of R&D, backed by Rodolphe Frerejean-Taittinger, CEO of Champagne Frerejean Frères. Positioned as a luxury alcohol-free alternative to Champagne, the brand’s top-tier "La Cuvée" has been described by trade press as the world’s most expensive alcohol-free wine.',
      faqs: [
        { question: 'Who founded French Bloom?', answer: 'Maggie Frerejean-Taittinger and Constance Jablonski, launched October 2021.' },
        { question: 'Is French Bloom organic?', answer: 'Yes, made from organically farmed French grapes.' },
      ],
    }),
  },
  {
    categorySlug: 'na-champagne-sparkling', hubSlug: 'leitz', brandKeywords: ['Leitz', 'Eins-Zwei-Zero'], name: 'Leitz',
    seo: brandSeo({
      brand: 'Leitz', categoryLabel: 'Non-Alcoholic Sparkling Wine',
      titleTag: 'Leitz — Eins-Zwei-Zero Sparkling Riesling & Rosé',
      h1: 'Leitz Eins-Zwei-Zero — Sparkling Riesling & Rosé',
      metaDescription: 'Buy Leitz Eins-Zwei-Zero online — Sparkling Riesling and Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Josef Leitz’s Eins-Zwei-Zero range comes from his Rheingau, Germany estate, one of the region’s most respected Riesling producers. Alcohol is removed through gentle vacuum distillation — not reverse osmosis or grape-juice blending — which the estate credits for preserving classic green-apple, pear, and Riesling-spice character.',
      faqs: [
        { question: 'How is Leitz Eins-Zwei-Zero made alcohol-free?', answer: 'The grapes are fully fermented into real Riesling first, then alcohol is removed via gentle vacuum distillation.' },
        { question: 'Where is Leitz from?', answer: 'The Rheingau, one of Germany’s most historically important Riesling regions.' },
      ],
    }),
  },
  {
    categorySlug: 'na-champagne-sparkling', hubSlug: 'noughty', brandKeywords: ['Noughty'], name: 'Noughty',
    seo: brandSeo({
      brand: 'Noughty', categoryLabel: 'Non-Alcoholic Sparkling Wine',
      titleTag: 'Noughty — Alcohol-Free Sparkling Chardonnay & Rosé',
      h1: 'Noughty — Alcohol-Free Sparkling Chardonnay & Rosé',
      metaDescription: 'Buy Noughty online — Alcohol-Free Sparkling Chardonnay and Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Noughty is made by Thomson & Scott, founded in 2013 by Amanda Thomson — a former BBC arts journalist who trained at Le Cordon Bleu — with the explicit goal of creating the world’s first premium non-alcoholic wine portfolio. Thomson & Scott is B Corp certified, and Noughty’s wines are organic and vegan.',
      faqs: [
        { question: 'Who makes Noughty wine?', answer: 'Thomson & Scott, founded by Amanda Thomson in 2013.' },
        { question: 'Is Noughty organic and vegan?', answer: 'Yes to both.' },
      ],
    }),
  },
  {
    categorySlug: 'na-champagne-sparkling', hubSlug: 'oddbird', brandKeywords: ['Oddbird'], name: 'Oddbird',
    seo: brandSeo({
      brand: 'Oddbird', categoryLabel: 'Non-Alcoholic Sparkling Wine',
      titleTag: 'Oddbird — Blanc de Blancs & Rosé',
      h1: 'Oddbird — Non-Alcoholic Blanc de Blancs & Rosé',
      metaDescription: 'Buy Oddbird online — Non-Alcoholic Blanc de Blancs and Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Oddbird was founded in Sweden by Moa Gürbüzer and has spent over a decade pushing the non-alcoholic wine category forward. Its Blanc de Blancs is 100% Chardonnay and Colombard sourced from Languedoc-Roussillon, France, matured a full 12 months before the alcohol is gently removed — a slower process the brand credits for a more complex, authentic flavor.',
      faqs: [
        { question: 'Where are Oddbird wines from?', answer: 'The company is Swedish, but the wine itself is French — Languedoc-Roussillon fruit, fully matured before de-alcoholization.' },
        { question: 'What grapes make Oddbird Blanc de Blancs?', answer: 'Chardonnay and Colombard.' },
      ],
    }),
  },
  {
    categorySlug: 'na-champagne-sparkling', hubSlug: 'welchs', brandKeywords: ["Welch's", 'Welchs'], name: "Welch's",
    seo: brandSeo({
      brand: "Welch's", categoryLabel: 'Sparkling Grape Juice',
      titleTag: "Welch's — Sparkling Grape Juice",
      h1: "Welch's — Sparkling Red & White Grape Juice",
      metaDescription: "Buy Welch's online — Sparkling Red and White Grape Juice. Direct allocations at Aged & Amber. Free shipping on $300+.",
      hook: "Welch's traces to 1869, when it was invented specifically as an unfermented, non-alcoholic grape juice for church communion services. It has been a genuine farmer-owned cooperative since 1956 (the National Grape Cooperative Association). The two stocked SKUs use different grapes entirely: deep Concord grapes for the Red Grape Juice Cocktail, and Niagara-style white grapes for the White.",
      faqs: [
        { question: "Is Welch's sparkling juice non-alcoholic?", answer: 'Yes, always has been; it was invented specifically to be a non-fermenting grape juice.' },
        { question: "Is Welch's farmer-owned?", answer: 'Yes, owned by the National Grape Cooperative Association since 1956.' },
      ],
    }),
  },
  {
    categorySlug: 'na-champagne-sparkling', hubSlug: 'wolffer-estate', brandKeywords: ['Wölffer Estate', 'Wolffer Estate', 'Spring in a Bottle'], name: 'Wölffer Estate',
    seo: brandSeo({
      brand: 'Wölffer Estate', categoryLabel: 'Non-Alcoholic Sparkling Wine',
      titleTag: 'Wölffer Estate — Spring in a Bottle',
      h1: 'Wölffer Estate Spring in a Bottle — Sparkling Blanc de Blancs & Rosé',
      metaDescription: 'Buy Wölffer Estate Spring in a Bottle online — Sparkling Blanc de Blancs and Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Wölffer Estate Vineyard has been a fixture of New York’s East End (the Hamptons, Long Island) for more than 30 years. The "Spring in a Bottle" non-alcoholic line is produced in Germany under the Wölffer name — Blanc de Blancs from Moselle Valley fruit, Rosé from Rheinhessen — extending the estate’s reputation into the alcohol-free category.',
      faqs: [
        { question: 'Where is Wölffer’s Spring in a Bottle made?', answer: 'In Germany (Moselle Valley for Blanc de Blancs, Rheinhessen for Rosé), under Wölffer Estate’s direction.' },
        { question: 'What’s the difference between the two Spring in a Bottle wines?', answer: 'The Blanc de Blancs is a delicate, fruit-driven white; the Rosé shows strawberry and red-berry aromas with a fresh, dry finish.' },
      ],
    }),
  },

  // ─── NON-ALCOHOLIC RTD COCKTAILS ───────────────────────────────────────────
  {
    categorySlug: 'na-rtd-cocktails', hubSlug: 'de-soi', brandKeywords: ['De Soi'], name: 'De Soi',
    seo: brandSeo({
      brand: 'De Soi', categoryLabel: 'Non-Alcoholic Spritz',
      titleTag: 'De Soi — Purple Lune & Très Rosé',
      h1: 'De Soi — Purple Lune & Très Rosé Non-Alcoholic Aperitif',
      metaDescription: 'Buy De Soi online — Purple Lune and Très Rosé non-alcoholic aperitif. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Co-founded in 2022 by pop star Katy Perry and Master Distiller Morgan McLachlan, De Soi ("of oneself" in French) grew out of the two women bonding over a shared love of spritzes while both were pregnant and unable to drink. The brand has since expanded to 6,000+ US retail doors including Target, Sprouts, and Publix.',
      faqs: [
        { question: 'Who founded De Soi?', answer: 'Katy Perry and Morgan McLachlan, co-founded 2022.' },
        { question: 'Is De Soi safe to drink while pregnant?', answer: 'De Soi is alcohol-free but contains functional/adaptogenic ingredients; shoppers should confirm with their doctor rather than rely on a blanket claim.' },
      ],
    }),
  },
  {
    categorySlug: 'na-rtd-cocktails', hubSlug: 'free-af', brandKeywords: ['Free AF', 'AF Drinks'], name: 'Free AF',
    seo: brandSeo({
      brand: 'Free AF', categoryLabel: 'Non-Alcoholic Cocktails',
      titleTag: 'Free AF — Apero Spritz & Cuba Libre',
      h1: 'Free AF — Apero Spritz & Non-Alcoholic Cuba Libre',
      metaDescription: 'Buy Free AF online — Apero Spritz and Non-Alcoholic Cuba Libre. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 2020 by New Zealand entrepreneur Lisa King — who also founded Eat My Lunch, a social enterprise that has provided over 1.7 million free lunches to children in need — Free AF (branded "AF Drinks" internationally) became New Zealand’s #1 non-alcoholic cocktail brand before expanding globally. Its defining differentiator is "Afterglow™," a proprietary natural botanical-heat extract designed to mimic the pleasant warmth of drinking alcohol.',
      faqs: [
        { question: 'What is "Afterglow" in Free AF drinks?', answer: 'A proprietary natural botanical-heat ingredient designed to mimic alcohol’s warming sensation — a genuine differentiator unique to this brand.' },
        { question: 'Who makes Free AF?', answer: 'Lisa King’s AF Drinks Company, founded 2020 in New Zealand.' },
      ],
    }),
  },
  {
    categorySlug: 'na-rtd-cocktails', hubSlug: 'ish', brandKeywords: ['ISH'], name: 'ISH',
    seo: brandSeo({
      brand: 'ISH', categoryLabel: 'Non-Alcoholic Canned Cocktails',
      titleTag: 'ISH — Lime Daiquiri, Mojito, Paloma & SpritzISH',
      h1: 'ISH — Lime Daiquiri, Mojito, Paloma & SpritzISH',
      metaDescription: 'Buy ISH online — Non-Alcoholic Lime Daiquiri, Mojito, Paloma, and SpritzISH. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 2018 in Copenhagen by Morten Sørensen after he took a 100-day break from alcohol and found the alcohol-free options on the market lacking. Backed by a 2022 investment from Anora, ISH has won 40+ international taste awards and built out a full range spanning NA sparkling wines, NA "spirits," and canned RTD cocktails — the 4 SKUs stocked here are its RTD cocktail line.',
      faqs: [
        { question: 'Where is ISH from?', answer: 'Copenhagen, Denmark; founded 2018 by Morten Sørensen.' },
        { question: 'Does ISH make anything besides canned cocktails?', answer: 'Yes: the brand’s full range also includes NA sparkling wines and NA "spirits" styled after rum, gin, and tequila.' },
      ],
    }),
  },
  {
    categorySlug: 'na-rtd-cocktails', hubSlug: 'mingle', brandKeywords: ['Mingle'], name: 'Mingle',
    seo: brandSeo({
      brand: 'Mingle', categoryLabel: 'Non-Alcoholic Canned Cocktails',
      titleTag: 'Mingle — Cranberry Cosmo & Key Lime Margarita Mocktails',
      h1: 'Mingle Mocktails — Cranberry Cosmo, Key Lime Margarita & Variety Pack',
      metaDescription: 'Buy Mingle Mocktails online — Cranberry Cosmo, Key Lime Margarita, and the Variety Pack. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 2017 by Laura Taylor, who had been alcohol-free for 5+ years and grew tired of "boring seltzer" being her only option at social events. Mingle has since publicly partnered with Bethenny Frankel to push mocktails into the mainstream. The line is sparkling, juice-and-botanical-based, spanning flavors like Blackberry Hibiscus Bellini, Cranberry Cosmo, and Key Lime Margarita.',
      faqs: [
        { question: 'Who founded Mingle Mocktails?', answer: 'Laura Taylor, in 2017.' },
        { question: 'Is Bethenny Frankel involved with Mingle?', answer: 'Yes, a real, publicized partnership aimed at bringing mocktails into the mainstream.' },
      ],
    }),
  },

  // ─── RTD & LIQUEURS ───────────────────────────────────────────
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'jagermeister', brandKeywords: ['Jägermeister', 'Jagermeister'], name: 'Jägermeister',
    seo: brandSeo({
      brand: 'Jägermeister', categoryLabel: 'Herbal & Coffee Liqueur',
      titleTag: 'Jägermeister — Herbal Liqueur & Cold Brew Coffee Liqueur',
      h1: 'Jägermeister — Herbal Liqueur & Cold Brew Coffee Liqueur',
      metaDescription: 'Buy Jägermeister online — the classic Herbal Liqueur and Cold Brew Coffee Liqueur. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Jägermeister was created in 1934 in Wolfenbüttel, Germany by Curt Mast, who blended 56 different herbs, spices, roots, and fruits — including cinnamon bark, bitter orange peel, sandalwood, ginger, juniper, ginseng, and saffron. The stag-and-cross emblem references the legend of Saint Hubertus, patron saint of hunters. The two stocked SKUs let the hub speak to both the brand's century-old herbal-digestif roots and its newer move into the fast-growing cold-brew-coffee-liqueur category.",
      faqs: [
        { question: 'Is Jägermeister German?', answer: 'Yes — created in 1934 in Wolfenbüttel, Germany, and still produced there today.' },
        { question: 'What flavor is Jägermeister?', answer: 'A bittersweet, herbal-digestif profile built from 56 botanicals, with notes of licorice, citrus peel, and warm spice.' },
        { question: 'What do you mix with Jägermeister?', answer: 'Most commonly served ice-cold as a shot, or mixed with energy drink; it also works in warm winter cocktails given its spice-forward profile.' },
      ],
    }),
  },
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'dekuyper', brandKeywords: ['DeKuyper'], name: 'DeKuyper',
    seo: brandSeo({
      brand: 'DeKuyper', categoryLabel: 'Fruit & Orange Liqueur',
      titleTag: 'DeKuyper — Peachtree Schnapps & Triple Sec',
      h1: 'DeKuyper — Peachtree Schnapps & Triple Sec Liqueur',
      metaDescription: 'Buy DeKuyper online — Peachtree Peach Schnapps and Triple Sec Liqueur. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'DeKuyper traces back to 1695, when Petrus De Kuyper founded a barrel-and-cask business in the Netherlands; the family distillery has been run by 11 consecutive generations, and Queen Beatrix granted the company the "Royal" title on its 300th anniversary in 1995. DeKuyper is arguably the single most influential name in American flavored schnapps — its 1984 launch of Peachtree Schnapps became the fastest-selling new liquor product in the US since Prohibition and directly gave rise to the Sex on the Beach cocktail.',
      faqs: [
        { question: 'What is triple sec?', answer: 'A clear, orange-flavored liqueur distilled from dried orange peels — a foundational ingredient in cocktails like the Margarita and Cosmopolitan.' },
        { question: 'Is triple sec alcoholic?', answer: 'Yes — typically 15-40% ABV depending on the brand and style.' },
      ],
    }),
  },
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'cutwater', brandKeywords: ['Cutwater', 'Cutwater Spirits'], name: 'Cutwater Spirits',
    seo: brandSeo({
      brand: 'Cutwater Spirits', categoryLabel: 'Craft Cocktails',
      titleTag: 'Cutwater Spirits — Canned Cocktails Made with Real Spirits',
      h1: 'Cutwater Spirits — Gin & Tonic, Margarita, Mai Tai & More Canned Cocktails',
      metaDescription: 'Buy Cutwater Spirits online — canned cocktails made with real distilled spirits, not a malt base. Direct allocations at Aged & Amber. Free on $300+.',
      hook: "Cutwater began as a side project inside Ballast Point Brewing — the brainchild of then-head brewer Yuseff Cherney and founder Jack White. When Constellation Brands bought Ballast Point in 2015, Cutwater split off as its own company (2017), building a 50,000-square-foot distillery on San Diego's Distribution Road. Anheuser-Busch acquired Cutwater in 2019. Every Cutwater cocktail is made with actual spirits (vodka, rum, gin, tequila, whiskey) distilled in-house, not a flavored malt base — closer to a bar-made cocktail than a hard seltzer. The brand has won more than 300 gold medals at spirits competitions.",
      faqs: [
        { question: 'What makes Cutwater different from a hard seltzer?', answer: 'Cutwater cocktails are made with real distilled spirits from its own San Diego distillery, not a fermented-sugar or malt base — closer to a bar-made cocktail in a can.' },
        { question: 'Who owns Cutwater Spirits?', answer: 'Anheuser-Busch, since 2019; the brand was founded independently in San Diego in 2017 after splitting off from Ballast Point Brewing.' },
      ],
    }),
  },
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'high-noon', brandKeywords: ['High Noon'], name: 'High Noon',
    seo: brandSeo({
      brand: 'High Noon', categoryLabel: 'Craft Cocktails',
      titleTag: 'High Noon — Vodka Seltzer & Vodka Iced Tea',
      h1: 'High Noon — Vodka Seltzer & Vodka Iced Tea Variety Packs',
      metaDescription: 'Buy High Noon online — Vodka Seltzer and Vodka Iced Tea variety packs. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "High Noon Sun Sips launched in May 2019 from E. & J. Gallo Winery — the same family-owned company behind New Amsterdam Vodka. Unlike most hard seltzers, High Noon's alcohol comes from actual vodka, not malt liquor or fermented cane sugar, paired with real fruit juice. High Noon was named Beverage Brand of the Year at the 2021 Wine Enthusiast Wine Star Awards and was reported as the top-selling spirit brand by volume in the US as of 2023.",
      faqs: [
        { question: "What's different about High Noon vs. a typical hard seltzer?", answer: "It's made with real vodka and real fruit juice, not a malt or fermented-sugar base — a genuine formulation difference, not just marketing." },
        { question: 'Who makes High Noon?', answer: 'E. & J. Gallo Winery, the same family-owned company behind New Amsterdam Vodka.' },
      ],
    }),
  },
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'mikes-hard-lemonade', brandKeywords: ["Mike's Hard Lemonade", "Mike's"], name: "Mike's Hard Lemonade",
    seo: brandSeo({
      brand: "Mike's Hard Lemonade", categoryLabel: 'Craft Cocktails',
      titleTag: "Mike's Hard Lemonade — Original & Variety Pack",
      h1: "Mike's Hard Lemonade — Original & Variety Pack",
      metaDescription: "Buy Mike's Hard Lemonade online — Original and the Variety Pack. Direct allocations at Aged & Amber. Free shipping on $300+.",
      hook: 'Mike\'s Hard Lemonade was created in 1996 by Canadian entrepreneur Anthony von Mandl — the same founder behind Mark Anthony Brands, which later launched White Claw. There was never an actual person named "Mike"; the name was chosen purely for its approachable feel. After US launch in 1999, Mike\'s exploded from 1.1 million cases to 13 million cases by 2001, and — alongside Smirnoff Ice — helped define the flavored-malt-beverage category that hard seltzer would later grow out of.',
      faqs: [
        { question: 'Who is "Mike" from Mike\'s Hard Lemonade?', answer: 'There isn\'t one — "Mike" was invented purely as an approachable brand name by founder Anthony von Mandl in 1996.' },
        { question: "Is Mike's Hard Lemonade a beer, a malt beverage, or a spirit?", answer: "It's a flavored malt beverage (FMB), like a hard seltzer — the alcohol comes from a malted base, not distilled spirits or a wine base." },
      ],
    }),
  },
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'on-the-rocks', brandKeywords: ['On The Rocks', 'On The Rocks Premium Cocktails'], name: 'On The Rocks',
    seo: brandSeo({
      brand: 'On The Rocks', categoryLabel: 'Craft Cocktails',
      titleTag: 'On The Rocks — Margarita & Old Fashioned',
      h1: 'On The Rocks Premium Cocktails — Margarita & Old Fashioned',
      metaDescription: 'Buy On The Rocks online — The Margarita and The Old Fashioned. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'On The Rocks Cocktails was founded in Dallas in 2015 by restaurateurs Patrick Halbert and Rocco Milano. Beam Suntory acquired the brand outright in September 2020. The lineup uses real Beam Suntory spirits by name inside each bottle — the Old Fashioned is built on Knob Creek bourbon, the Margarita on Hornitos tequila — and now spans nine nationally available expressions.',
      faqs: [
        { question: 'Is "On The Rocks" just a generic term for a drink over ice, or a real brand?', answer: 'Both — "on the rocks" is the generic bartending term for a drink served over ice, but On The Rocks Premium Cocktails is also a real, Beam Suntory-owned RTD brand founded in Dallas in 2015.' },
        { question: 'What spirits are actually in On The Rocks cocktails?', answer: 'Named Beam Suntory spirits: Knob Creek bourbon in the Old Fashioned, Hornitos tequila in the Margarita, among others across the line.' },
      ],
    }),
  },
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'tip-top-cocktails', brandKeywords: ['Tip Top Proper Cocktails', 'Tip Top'], name: 'Tip Top Proper Cocktails',
    seo: brandSeo({
      brand: 'Tip Top Proper Cocktails', categoryLabel: 'Craft Cocktails',
      titleTag: "Tip Top Proper Cocktails — Bee's Knees, Espresso Martini & Old Fashioned",
      h1: "Tip Top Proper Cocktails — Bee's Knees, Espresso Martini & Old Fashioned",
      metaDescription: "Buy Tip Top Proper Cocktails online — Bee's Knees, Espresso Martini, and Old Fashioned. Direct allocations at Aged & Amber. Free shipping on $300+.",
      hook: 'Tip Top Proper Cocktails is an Atlanta-founded brand built around a real point of difference: small, 100ml cans of classic cocktails at genuine cocktail-bar strength (24-37% ABV, not diluted to beer strength), canned in Michigan under the tagline "always balanced, never too sweet." The lineup spans six classic recipes, of which this catalog stocks three.',
      faqs: [
        { question: 'Why are Tip Top cocktails sold in such small cans?', answer: 'The 100ml format is deliberate: it mirrors a single bar-poured serving at real cocktail strength (up to 37% ABV), rather than diluting the recipe down to a full 12oz can at beer-level ABV.' },
      ],
    }),
  },
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'twisted-tea', brandKeywords: ['Twisted Tea'], name: 'Twisted Tea',
    seo: brandSeo({
      brand: 'Twisted Tea', categoryLabel: 'Craft Cocktails',
      titleTag: 'Twisted Tea — Original & Half & Half Hard Iced Tea',
      h1: 'Twisted Tea — Original & Half & Half Hard Iced Tea',
      metaDescription: 'Buy Twisted Tea online — Original and Half & Half Hard Iced Tea. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: "Twisted Tea launched in 2001 from the Boston Beer Company (makers of Samuel Adams). Despite the name, Twisted Tea is malt-based, like a beer or hard seltzer, not a distilled spirit — the brewing process is engineered to mask the maltiness and foreground a crisp, tea-forward flavor. By 2022 it had become the best-selling hard iced tea in the US.",
      faqs: [
        { question: 'Is Twisted Tea a beer or a spirit?', answer: "Neither exactly — it's a malt-based beverage (the same brewing base as beer), flavored to taste like sweet tea, not a distilled spirit." },
        { question: 'Who makes Twisted Tea?', answer: 'The Boston Beer Company, the same publicly traded company behind Samuel Adams and Truly Hard Seltzer.' },
      ],
    }),
  },
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'underwood', brandKeywords: ['Underwood'], name: 'Underwood',
    seo: brandSeo({
      brand: 'Underwood', categoryLabel: 'Craft Cocktails',
      titleTag: 'Underwood — Canned Pinot Noir, Pinot Gris & Rosé',
      h1: 'Underwood — Canned Pinot Noir, Pinot Gris & Rosé',
      metaDescription: 'Buy Underwood online — canned Pinot Noir, Pinot Gris, and Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Underwood is the flagship canned line of Union Wine Company, an Oregon winery founded by Ryan Harms in 2005. The team debuted canned Underwood Pinot Noir at Feast PDX in September 2013, a genuine origin point for the modern US canned-wine category. Underwood has grown into the top seller in the premium canned-wine segment by Nielsen sales data.',
      faqs: [
        { question: 'Who makes Underwood wine?', answer: 'Union Wine Company, an Oregon winery founded by Ryan Harms in 2005; Underwood is its canned-wine brand, launched in 2013-2014.' },
        { question: 'Was Underwood really the first canned wine?', answer: "Not the literal first ever, but a genuine category-defining launch: its 2013 canned Pinot Noir debut is widely credited with kicking off the modern US premium canned-wine trend." },
      ],
    }),
  },
  {
    categorySlug: 'rtd-liqueurs', hubSlug: 'white-claw', brandKeywords: ['White Claw'], name: 'White Claw',
    seo: brandSeo({
      brand: 'White Claw', categoryLabel: 'Craft Cocktails',
      titleTag: 'White Claw — Black Cherry & Variety Pack Hard Seltzer',
      h1: 'White Claw Hard Seltzer — Black Cherry & Variety Pack',
      metaDescription: 'Buy White Claw online — Black Cherry Hard Seltzer and the Variety Pack. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'White Claw Hard Seltzer, introduced in 2016 by Mark Anthony Group and Canadian entrepreneur Anthony von Mandl (the same founder behind Mike\'s Hard Lemonade a generation earlier), is credited with creating the hard seltzer category as a mass-market phenomenon. It\'s made from a blend of seltzer water, a gluten-free malted alcohol base, and fruit flavor.',
      faqs: [
        { question: 'Who owns White Claw?', answer: 'Mark Anthony Group, a Canadian company founded by Anthony von Mandl, who also created Mike\'s Hard Lemonade in the 1990s.' },
        { question: 'What\'s actually in White Claw?', answer: 'Carbonated water, a gluten-free malted alcohol base, and fruit flavoring — not vodka, despite the "spiked seltzer" framing some competitors use.' },
      ],
    }),
  },

  // ─── NON-ALCOHOLIC WINE ───────────────────────────────────────────
  {
    categorySlug: 'na-wine', hubSlug: 'ariel', brandKeywords: ['Ariel'], name: 'Ariel',
    seo: brandSeo({
      brand: 'Ariel', categoryLabel: 'Non-Alcoholic Wine',
      titleTag: 'Ariel — Non-Alcoholic Cabernet Sauvignon & Chardonnay',
      h1: 'Ariel Non-Alcoholic Wine — Cabernet Sauvignon & Chardonnay',
      metaDescription: 'Buy Ariel non-alcoholic wine online — Cabernet Sauvignon and Chardonnay. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Ariel Vineyards has been made by J. Lohr Vineyards & Wines since 1985 — seven years before FRE launched — making it one of the very first alcohol-removed wine brands sold in the US. Unlike most of the category, which uses spinning cone technology, Ariel relies on J. Lohr\'s own patented reverse osmosis process, drawing grapes from J. Lohr\'s 4,000+ certified-sustainable acres across Paso Robles and Monterey County\'s Arroyo Seco.',
      faqs: [
        { question: 'Who makes Ariel wine?', answer: 'J. Lohr Vineyards & Wines; Ariel dates to 1985, one of the original alcohol-removed wine brands in the US.' },
        { question: 'How is Ariel wine made alcohol-free?', answer: 'Reverse osmosis, a process J. Lohr patented, rather than the spinning-cone method used by many competitors.' },
      ],
    }),
  },
  {
    categorySlug: 'na-wine', hubSlug: 'fre', brandKeywords: ['FRE'], name: 'FRE',
    seo: brandSeo({
      brand: 'FRE', categoryLabel: 'Non-Alcoholic Wine',
      titleTag: 'FRE — Alcohol-Removed Cabernet, Chardonnay, Merlot & Rosé',
      h1: 'FRE Non-Alcoholic Wine — Cabernet Sauvignon, Chardonnay, Merlot & Rosé',
      metaDescription: 'Buy FRE non-alcoholic wine online — Cabernet Sauvignon, Chardonnay, Merlot, and Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Sutter Home has produced FRE since 1992, making it one of the longest-running alcohol-removed wine lines in the US; alcohol is stripped using a spinning cone process combined with controlled temperature, leaving a trace typically under 0.5% ABV. FRE\'s retail sales grew roughly 300% between 2019 and 2024. FRE also makes a Sparkling Brut and Sparkling Rosé, stocked separately in the Champagne & Sparkling shop.',
      faqs: [
        { question: 'Does FRE wine have any alcohol?', answer: 'Under 0.5% ABV, the same trace level as most alcohol-removed wines.' },
        { question: 'Who makes FRE wine?', answer: 'Sutter Home Family Vineyards (Trinchero Family Wine & Spirits).' },
      ],
    }),
  },
  {
    categorySlug: 'na-wine', hubSlug: 'giesen', brandKeywords: ['Giesen'], name: 'Giesen',
    seo: brandSeo({
      brand: 'Giesen', categoryLabel: 'Non-Alcoholic Wine',
      titleTag: 'Giesen 0% — Pinot Grigio, Sauvignon Blanc, Red Blend & Rosé',
      h1: 'Giesen 0% Non-Alcoholic Wine — Pinot Grigio, Sauvignon Blanc, Premium Red Blend & Rosé',
      metaDescription: 'Buy Giesen 0% non-alcoholic wine online — Pinot Grigio, Sauvignon Blanc, Premium Red Blend, and Rosé. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Giesen is New Zealand\'s largest family-owned winery and was the first New Zealand winery to install spinning cone technology, which separates fragrance and alcohol from the base wine under vacuum. Giesen 0% Sauvignon Blanc is the #1 selling premium alcohol-removed wine in the US, and the Premium Red won 95 points and a Gold Medal at the 2022 International Wine and Spirit Competition.',
      faqs: [
        { question: 'Is Giesen 0% really alcohol-free?', answer: 'Not more than 0.5% ABV, the legal standard for "non-alcoholic" wine in the US, NZ, and Australia.' },
        { question: 'What\'s Giesen\'s best-selling 0% wine?', answer: 'Sauvignon Blanc, the #1 selling premium alcohol-removed wine in the US.' },
      ],
    }),
  },
  {
    categorySlug: 'na-wine', hubSlug: 'lautus', brandKeywords: ['Lautus'], name: 'Lautus',
    seo: brandSeo({
      brand: 'Lautus', categoryLabel: 'Non-Alcoholic Wine',
      titleTag: 'Lautus — Non-Alcoholic Sauvignon Blanc & Savvy Red',
      h1: 'Lautus Non-Alcoholic Wine — Sauvignon Blanc & Savvy Red Blend',
      metaDescription: 'Buy Lautus non-alcoholic wine online — Sauvignon Blanc and Savvy Red Blend. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Lautus was founded in South Africa in 2017 by winemaker Reg Holder — the country\'s first de-alcoholized wine producer — after his wife wanted a genuine wine experience while pregnant. Grapes are picked in two passes, some early for acidity and some at peak ripeness, then run through spinning cone technology twice: once to capture flavor, once to remove alcohol. The name is Latin for "pure, elegant, and sumptuous."',
      faqs: [
        { question: 'Who founded Lautus?', answer: 'Winemaker Reg Holder, South Africa, 2017; inspired by his pregnant wife wanting a real wine experience.' },
        { question: 'What does "Lautus" mean?', answer: 'Latin for pure, elegant, and sumptuous.' },
      ],
    }),
  },
  {
    categorySlug: 'na-wine', hubSlug: 'leitz', brandKeywords: ['Leitz', 'Eins-Zwei-Zero'], name: 'Leitz',
    seo: brandSeo({
      brand: 'Leitz', categoryLabel: 'Non-Alcoholic Wine',
      titleTag: 'Leitz — Eins-Zwei-Zero Riesling & Rosé',
      h1: 'Leitz Eins-Zwei-Zero — Non-Alcoholic Riesling & Rosé',
      metaDescription: 'Buy Leitz Eins-Zwei-Zero non-alcoholic wine online — Riesling and Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Josef Leitz\'s Rheingau, Germany estate is one of the region\'s most respected Riesling producers, and its Eins-Zwei-Zero range removes alcohol through gentle vacuum distillation rather than reverse osmosis or spinning cone technology — a process the estate credits for preserving classic green-apple, pear, and Riesling-spice character. A Sparkling Riesling and Sparkling Rosé from the same estate are stocked separately in the Champagne & Sparkling shop.',
      faqs: [
        { question: 'How is Leitz Eins-Zwei-Zero made alcohol-free?', answer: 'The grapes are fully fermented into real wine first, then alcohol is removed via gentle vacuum distillation.' },
        { question: 'Where is Leitz from?', answer: 'The Rheingau, one of Germany\'s most historically important Riesling regions.' },
      ],
    }),
  },
  {
    categorySlug: 'na-wine', hubSlug: 'noughty', brandKeywords: ['Noughty'], name: 'Noughty',
    seo: brandSeo({
      brand: 'Noughty', categoryLabel: 'Non-Alcoholic Wine',
      titleTag: 'Noughty — Non-Alcoholic Chardonnay, Rosé & Rouge',
      h1: 'Noughty Non-Alcoholic Wine — Chardonnay, Rosé & Rouge',
      metaDescription: 'Buy Noughty non-alcoholic wine online — Chardonnay, Rosé, and Rouge. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Noughty is made by Thomson & Scott, founded in 2013 by Amanda Thomson — a former BBC arts journalist trained at Le Cordon Bleu — with the explicit goal of building the world\'s first premium non-alcoholic wine portfolio. Thomson & Scott is B Corp certified and Noughty\'s wines are organic and vegan. The Rouge is a genuinely rare fully-still (not lightly sparkling) alcohol-free red made from 100% Syrah.',
      faqs: [
        { question: 'Who makes Noughty wine?', answer: 'Thomson & Scott, founded by Amanda Thomson in 2013.' },
        { question: 'Is Noughty organic and vegan?', answer: 'Yes to both.' },
      ],
    }),
  },
  {
    categorySlug: 'na-wine', hubSlug: 'oddbird', brandKeywords: ['Oddbird'], name: 'Oddbird',
    seo: brandSeo({
      brand: 'Oddbird', categoryLabel: 'Non-Alcoholic Wine',
      titleTag: 'Oddbird — Non-Alcoholic GSM Red & Rosé',
      h1: 'Oddbird Non-Alcoholic Wine — GSM Red Blend & Rosé',
      metaDescription: 'Buy Oddbird non-alcoholic wine online — GSM Red Blend and Rosé. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Oddbird was founded in Sweden by Moa Gürbüzer and has spent over a decade pushing the non-alcoholic wine category forward. The GSM sources Grenache, Syrah, Mourvèdre, and Carignan from Saint-Chinian in the Languedoc-Roussillon region of France, using a patented gentle process to remove alcohol after full fermentation — a genuinely uncommon still-red style in a category dominated by whites and rosés.',
      faqs: [
        { question: 'What does GSM stand for?', answer: 'Grenache, Syrah, Mourvèdre (plus Carignan in Oddbird\'s specific blend).' },
        { question: 'Where are Oddbird wines from?', answer: 'The company is Swedish, but the wine itself is French — Saint-Chinian, Languedoc-Roussillon.' },
      ],
    }),
  },
  {
    categorySlug: 'na-wine', hubSlug: 'saint-viviana', brandKeywords: ['Saint Viviana'], name: 'Saint Viviana',
    seo: brandSeo({
      brand: 'Saint Viviana', categoryLabel: 'Non-Alcoholic Wine',
      titleTag: 'Saint Viviana — Non-Alcoholic Cabernet Sauvignon & Sauvignon Blanc',
      h1: 'Saint Viviana Non-Alcoholic Wine — Cabernet Sauvignon & Sauvignon Blanc',
      metaDescription: 'Buy Saint Viviana non-alcoholic wine online — Cabernet Sauvignon and Sauvignon Blanc. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Saint Viviana is a US brand built around a year-long development process involving California and Pacific Northwest winemakers and a master sommelier, starting from high-end base wines specifically so little needs correcting after the alcohol is removed — a Paso Robles Cabernet Sauvignon and a Washington State Sauvignon Blanc.',
    }),
  },

  // ─── BAR ESSENTIALS ───────────────────────────────────────────
  {
    categorySlug: 'bar-essentials', hubSlug: 'angostura', brandKeywords: ['Angostura'], name: 'Angostura',
    seo: brandSeo({
      brand: 'Angostura', categoryLabel: 'Bitters',
      titleTag: 'Angostura — Aromatic & Orange Bitters',
      h1: 'Angostura Bitters — Aromatic & Orange',
      metaDescription: 'Buy Angostura Bitters online — Aromatic and Orange. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 1824 by Dr. Johann Gottlieb Benjamin Siegert, a German-born surgeon in Simón Bolívar\'s army, in the town of Angostura, Venezuela — the family-owned House of Angostura relocated to Trinidad in 1875 amid regional unrest and remains headquartered there today. The exact recipe is a closely guarded secret known to only a handful of people at any time, and the bottle\'s oversized, mismatched label is a genuine 200-year-old production quirk. Aromatic Bitters (44.7% ABV) has been the house\'s core product since 1824; Orange Bitters followed in 2007.',
      faqs: [
        { question: 'Is Angostura bitters alcoholic?', answer: 'Yes, notably so — Aromatic Bitters is 44.7% ABV, higher-proof than most spirits, despite being used only a few dashes at a time.' },
        { question: 'Do Angostura bitters expire or go bad?', answer: 'Effectively no; the high alcohol content preserves it indefinitely, though flavor intensity can mellow slightly over years.' },
      ],
    }),
  },
  {
    categorySlug: 'bar-essentials', hubSlug: 'dolin', brandKeywords: ['Dolin'], name: 'Dolin',
    seo: brandSeo({
      brand: 'Dolin', categoryLabel: 'Vermouth',
      titleTag: 'Dolin — Dry & Rouge Vermouth de Chambéry',
      h1: 'Dolin Vermouth de Chambéry — Dry & Rouge',
      metaDescription: 'Buy Dolin Vermouth de Chambéry online — Dry and Rouge. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in 1821 in Chambéry, Savoie, by distiller Joseph Chavasse, who built the house\'s style around real, locally macerated Alpine botanicals rather than pre-made extracts — a production method formalized in 1932 when Vermouth de Chambéry became the only vermouth style in the world to earn a French Protected Designation of Origin (PDO). Now run by the fifth generation of the Sevez family, Dolin is the last remaining producer still making authentic Vermouth de Chambéry.',
      faqs: [
        { question: 'What makes Vermouth de Chambéry different from other French vermouth?', answer: 'It\'s the only vermouth with a legal French PDO (since 1932), requiring production in Chambéry itself using real botanicals macerated on-site rather than concentrated extracts.' },
        { question: 'Is Dolin family-owned?', answer: 'Yes, run by the Sevez family for five generations since 1905, and one of the very few genuinely independent vermouth houses left in France.' },
      ],
    }),
  },
  {
    categorySlug: 'bar-essentials', hubSlug: 'martini-rossi', brandKeywords: ['Martini & Rossi', 'Martini and Rossi'], name: 'Martini & Rossi',
    seo: brandSeo({
      brand: 'Martini & Rossi', categoryLabel: 'Vermouth',
      titleTag: 'Martini & Rossi — Extra Dry & Rosso Vermouth',
      h1: 'Martini & Rossi Vermouth — Extra Dry & Rosso',
      metaDescription: 'Buy Martini & Rossi Vermouth online — Extra Dry and Rosso. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Founded in July 1863 in Turin by Alessandro Martini, Teofilo Sola, and Luigi Rossi, Martini & Rossi grew into the world\'s largest-volume vermouth producer. Rossi is credited with creating the original Rosso recipe that still anchors the sweet-vermouth line today. Bacardi Limited acquired Martini & Rossi in 1993, pairing its strong European standing with Bacardi\'s dominant US/Latin American presence.',
      faqs: [
        { question: 'Is Martini & Rossi owned by Bacardi?', answer: 'Yes, since 1993; it\'s now part of Bacardi Limited\'s global portfolio alongside its own core rum brand.' },
        { question: 'What\'s the difference between Martini & Rossi Rosso and Extra Dry?', answer: 'Rosso is the original 1863 sweet, red vermouth recipe (built for a Manhattan or a sweet martini); Extra Dry is the pale, crisp style built for the classic dry martini.' },
      ],
    }),
  },
  {
    categorySlug: 'bar-essentials', hubSlug: 'filthy', brandKeywords: ['Filthy'], name: 'Filthy',
    seo: brandSeo({
      brand: 'Filthy', categoryLabel: 'Garnishes',
      titleTag: 'Filthy — Cocktail Cherries & Olives',
      h1: 'Filthy Cocktail Garnishes — Cherries & Stuffed Olives',
      metaDescription: 'Buy Filthy cocktail garnishes online — Black Cherries, Blue Cheese Stuffed Olives, Pimento Olives, and Olive Brine. Direct allocations. Free on $300+.',
      hook: 'Founded by Daniel Singer, who set out to build a genuinely premium alternative to salad-jar olives and dyed dessert cherries, Filthy has become the industry-standard cocktail-garnish brand — served at leading bars, restaurants, hotels, and even on some airlines. Its olives are naturally cured rather than packed in salt and oil, so they don\'t leave the oily slick on a drink that cheaper jarred olives do.',
      faqs: [
        { question: 'What makes Filthy olives different from regular jarred olives?', answer: 'They\'re naturally cured rather than packed in salt brine and oil, so they don\'t leave an oily film on top of a cocktail — a real, brand-stated differentiator.' },
        { question: 'Does Filthy make cocktail onions too?', answer: 'Yes — the brand\'s full real lineup extends beyond what\'s stocked here to include cocktail onions and other olive varieties.' },
      ],
    }),
  },
  {
    categorySlug: 'bar-essentials', hubSlug: 'fever-tree', brandKeywords: ['Fever-Tree', 'Fever Tree'], name: 'Fever-Tree',
    seo: brandSeo({
      brand: 'Fever-Tree', categoryLabel: 'Mixers',
      titleTag: 'Fever-Tree — Tonic Water & Ginger Beer',
      h1: 'Fever-Tree — Club Soda, Tonic Water & Ginger Beer',
      metaDescription: 'Buy Fever-Tree online — Club Soda, Light Tonic, Premium Indian Tonic Water, and Premium Ginger Beer. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Fever-Tree was founded in the UK in 2004 on a simple premise — mixers are half the drink, so they deserve the same care as the spirit — and it\'s credited with essentially inventing the "premium mixer" category. Every stocked line is made with naturally sourced ingredients: real quinine from the Democratic Republic of Congo for the tonics, and a three-ginger blend (Nigerian, Ivory Coast, and Cochin) for the ginger beer.',
      faqs: [
        { question: 'What makes Fever-Tree different from regular tonic water?', answer: 'Naturally sourced quinine and no artificial sweeteners in the standard line — the brand\'s own tagline is "If ¾ of your drink is the mixer, mix with the best."' },
        { question: 'What\'s the difference between Fever-Tree Tonic and Fever-Tree Light Tonic?', answer: 'Light has 44% fewer calories and less sugar, built on the same natural quinine base.' },
      ],
    }),
  },
  {
    categorySlug: 'bar-essentials', hubSlug: 'monin', brandKeywords: ['Monin'], name: 'Monin',
    seo: brandSeo({
      brand: 'Monin', categoryLabel: 'Syrups',
      titleTag: 'Monin — Grenadine, Mojito Mint & Cane Syrup',
      h1: 'Monin Cocktail Syrups — Grenadine, Mojito Mint & Pure Cane',
      metaDescription: 'Buy Monin cocktail syrups online — Grenadine, Mojito Mint, and Pure Cane Syrup. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Monin has made flavored syrups in Bourges, France since 1912, and while the brand is best known in coffee shops, its cocktail-syrup line is a genuine bar staple — the same syrups that show up on the back bar at cocktail-forward restaurants.',
      faqs: [
        { question: 'Is Monin syrup only for coffee?', answer: 'No — Monin\'s cocktail range (grenadine, mint, cane syrup, and dozens of fruit flavors) is a genuine bar-industry staple, not a coffee-only product.' },
        { question: 'What is grenadine made of?', answer: 'Pomegranate, not cherry, despite the common assumption.' },
      ],
    }),
  },
  {
    categorySlug: 'bar-essentials', hubSlug: 'liber-co', brandKeywords: ['Liber & Co.', 'Liber and Co'], name: 'Liber & Co.',
    seo: brandSeo({
      brand: 'Liber & Co.', categoryLabel: 'Syrups',
      titleTag: 'Liber & Co. — Orgeat & Passion Fruit Syrup',
      h1: 'Liber & Co. Cocktail Syrups — Orgeat & Passion Fruit',
      metaDescription: 'Buy Liber & Co. cocktail syrups online — Orgeat Almond Syrup and Passion Fruit Syrup. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Liber & Co. is a small-batch craft syrup maker built specifically for the modern cocktail-bar market — its Orgeat and Passion Fruit syrups are widely used by bartenders rather than aimed primarily at home-baking or coffee use.',
      faqs: [
        { question: 'What is orgeat syrup used for?', answer: 'The essential almond syrup for a Mai Tai; also used broadly in tiki and Japanese-style cocktails.' },
        { question: 'Is Liber & Co. syrup alcohol-free?', answer: 'Yes, all Liber & Co. syrups are non-alcoholic flavor bases.' },
      ],
    }),
  },
  {
    categorySlug: 'bar-essentials', hubSlug: 'q-mixers', brandKeywords: ['Q Mixers', 'Q Tonic'], name: 'Q Mixers',
    seo: brandSeo({
      brand: 'Q Mixers', categoryLabel: 'Mixers',
      titleTag: 'Q Mixers — Ginger Beer & Tonic Water',
      h1: 'Q Mixers — Ginger Beer & Indian Tonic Water',
      metaDescription: 'Buy Q Mixers online — Ginger Beer and Indian Tonic Water. Direct allocations at Aged & Amber. Free shipping on $300+.',
      hook: 'Q Mixers built its whole positioning around real cane sugar or agave, high carbonation, and noticeably less sweetness than legacy tonic and ginger-beer brands — a direct answer to bartenders who found even the premium-mixer category too sweet for a spirit-forward drink.',
      faqs: [
        { question: 'What makes Q Mixers less sweet than other tonic waters?', answer: 'Agave-sweetened rather than cane-sugar-heavy, with markedly higher carbonation — a deliberate, well-documented brand positioning.' },
        { question: 'Does Q Mixers ginger beer contain alcohol?', answer: 'No.' },
      ],
    }),
  },
  {
    categorySlug: 'bar-essentials', hubSlug: 'mr-and-mrs-t', brandKeywords: ['Mr & Mrs T', 'Mr and Mrs T'], name: 'Mr & Mrs T',
    seo: brandSeo({
      brand: 'Mr & Mrs T', categoryLabel: 'Cocktail Mixes',
      titleTag: 'Mr & Mrs T — Bloody Mary & Margarita Mix',
      h1: 'Mr & Mrs T Cocktail Mixes — Bold & Spicy Bloody Mary & Original Margarita',
      metaDescription: 'Buy Mr & Mrs T cocktail mixes online — Bold & Spicy Bloody Mary Mix and Original Margarita Mix. Direct allocations at Aged & Amber. Free on $300+.',
      hook: 'Mr & Mrs T has been a bar and brunch staple for generations — one of the longest-running ready-to-pour mixer brands in the category, currently owned by Mott\'s/Keurig Dr Pepper.',
      faqs: [
        { question: 'Is Mr & Mrs T Bloody Mary mix spicy?', answer: 'The Bold & Spicy version is moderately spicy, horseradish-and-pepper forward.' },
        { question: 'Does Mr & Mrs T margarita mix contain alcohol?', answer: 'No.' },
      ],
    }),
  },
];
