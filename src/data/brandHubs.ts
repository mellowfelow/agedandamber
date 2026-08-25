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
    categorySlug: 'japanese-whisky', hubSlug: 'mars-shinshu', brandKeywords: ['Mars Shinshu', 'Mars Komagatake', 'Mars Maltage'], name: 'Mars Shinshu',
    seo: brandSeo({
      brand: 'Mars Shinshu', categoryLabel: 'Japanese Whisky',
      titleTag: 'Mars Shinshu Distillery — Japanese Whisky Guide',
      h1: 'Mars Shinshu — Japan’s Highest-Altitude Whisky Distillery',
      metaDescription: 'Learn about Mars Shinshu, Japan’s highest-altitude whisky distillery, home of the Komagatake and Maltage Cosmo lines — plus its Iwai range, available direct at Aged & Amber.',
      transactionalCTA: 'Mars Shinshu\'s core Komagatake and Maltage Cosmo range is not currently part of our allocation. We do carry the distillery\'s sister Iwai range direct — browse Iwai 45 and Iwai Tradition.',
      hook: 'Mars Shinshu is Japan’s highest-altitude whisky distillery, set in the Japanese Alps at over 800 metres — the cool climate slows maturation for a lighter, more delicate spirit. The distillery produces the Komagatake single malt and Maltage Cosmo blended lines, alongside the more widely available Iwai range.',
      faqs: [
        { question: 'Is Mars Shinshu the same as Mars Iwai?', answer: 'They\'re related but distinct lines from the same distillery. Mars Shinshu is the distillery itself, home to the Komagatake single malt and Maltage Cosmo blended ranges. Iwai is a separate, more widely distributed blended line from the same distillery, named for co-founder Kiichiro Iwai.' },
        { question: 'Where can I buy Mars Komagatake or Maltage Cosmo?', answer: 'Komagatake and Maltage Cosmo are not currently part of our direct allocation. We do carry Mars Shinshu\'s Iwai range — Iwai 45 and Iwai Tradition — available now.' },
      ],
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
