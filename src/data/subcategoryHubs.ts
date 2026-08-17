import { SubcategoryHub } from '../types';

export const SUBCATEGORY_HUBS: SubcategoryHub[] = [
  // BOURBON
  {
    categorySlug: 'bourbon-whiskey',
    hubSlug: 'kentucky-bourbon',
    subcategoryName: 'Kentucky Bourbon',
    name: 'Kentucky Bourbon',
    seo: {
      titleTag: 'Kentucky Straight Bourbon — Allocated',
      h1: 'Kentucky Straight Bourbon Whiskey — Direct Allocation Vault',
      metaDescription: 'Buy Kentucky straight bourbon online — allocated single barrel, small batch, and limited expressions from the heart of Kentucky. Free shipping $300+.',
      transactionalCTA: 'Buy Kentucky straight bourbon online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Kentucky straight bourbon whiskey must be produced in Kentucky, distilled from at least 51% corn, aged in new charred American white oak barrels, and contain no added colouring, flavouring, or blending material. Kentucky accounts for the vast majority of the world’s bourbon production.',
      faqs: [
        { question: 'Does bourbon have to be made in Kentucky?', answer: 'No — bourbon can legally be made anywhere in the United States. "Kentucky straight bourbon" is a more specific designation requiring production in Kentucky and a minimum two years of ageing, but Kentucky is where roughly 95% of the world’s bourbon is actually produced.' },
      ],
    },
  },
  {
    categorySlug: 'bourbon-whiskey',
    hubSlug: 'single-barrel-bourbon',
    subcategoryName: 'Single Barrel Bourbon',
    name: 'Single Barrel Bourbon',
    seo: {
      titleTag: 'Single Barrel Bourbon — Allocated',
      h1: 'Single Barrel Bourbon — Buy Allocated Private Barrel Selections Online',
      metaDescription: 'Buy single barrel bourbon online — each bottle drawn from one individual barrel, numbered and dated. The most unique expression of American whiskey.',
      transactionalCTA: 'Buy single barrel bourbon online — allocated private barrel selections shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Single barrel bourbon (also called single cask) is whiskey drawn entirely from one individual barrel rather than blended across multiple casks. Each barrel has unique flavour characteristics — the single barrel concept celebrates this variation. Barrel number, warehouse location, and fill date are often printed on the label.',
      faqs: [
        { question: 'Why does single barrel bourbon taste different bottle to bottle?', answer: 'Because each single barrel release comes from exactly one cask, and no two barrels age identically — warehouse position, wood grain, and micro-climate all shape the final flavour. That variation is the appeal for collectors chasing a specific barrel’s character.' },
      ],
    },
  },
  {
    categorySlug: 'bourbon-whiskey',
    hubSlug: 'small-batch-bourbon',
    subcategoryName: 'Small Batch Bourbon',
    name: 'Small Batch Bourbon',
    seo: {
      titleTag: 'Small Batch Bourbon — Allocated',
      h1: 'Small Batch Bourbon — Buy Allocated Selections Online',
      metaDescription: 'Buy small batch bourbon online — allocated selections from the finest small batch producers. Direct from distillery. Free shipping on $300+.',
      transactionalCTA: 'Buy small batch bourbon online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Small batch bourbon is blended from a limited, hand-selected number of barrels — far fewer than a standard large-batch bottling — to achieve a specific, consistent flavour profile while still preserving more barrel character than a mass-produced release.',
      faqs: [
        { question: 'How many barrels go into a small batch bourbon?', answer: 'There is no legal definition, but small batch bourbon is typically blended from a limited group of barrels — often a few dozen — hand-selected by the distiller, compared to hundreds or thousands for large-batch production.' },
      ],
    },
  },
  {
    categorySlug: 'bourbon-whiskey',
    hubSlug: 'wheated-bourbon',
    subcategoryName: 'Wheated Bourbon',
    name: 'Wheated Bourbon',
    seo: {
      titleTag: 'Wheated Bourbon — Allocated',
      h1: 'Wheated Bourbon — Buy Allocated Wheated Expressions Online',
      metaDescription: 'Buy wheated bourbon online — allocated wheated bourbon using winter wheat as the secondary grain for a softer, more approachable profile.',
      transactionalCTA: 'Buy wheated bourbon online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Wheated bourbon substitutes winter wheat for rye as the secondary grain in the mash bill, alongside corn and malted barley. This produces a softer, sweeter, more approachable bourbon than a high-rye recipe — the style behind some of the most sought-after names in American whiskey.',
      faqs: [
        { question: 'What is the difference between wheated bourbon and rye bourbon?', answer: "Wheated bourbon uses wheat as the secondary grain, producing a softer, sweeter, bread-like profile. Rye (or 'high-rye') bourbon uses rye as the secondary grain, giving a spicier, drier, more peppery character." },
      ],
    },
  },
  // SCOTCH
  {
    categorySlug: 'scotch-whisky',
    hubSlug: 'blended-scotch',
    subcategoryName: 'Blended Scotch',
    name: 'Blended Scotch',
    seo: {
      titleTag: 'Blended Scotch Whisky — Allocated',
      h1: 'Blended Scotch Whisky — Buy Allocated Bottles Online',
      metaDescription: 'Buy blended scotch whisky online — allocated blended malt and blended grain Scotch built for balance and approachability. Free shipping on $300+.',
      transactionalCTA: 'Buy blended scotch online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Blended Scotch combines single malt whiskies from multiple distilleries with lighter grain whisky, crafted by a master blender for a consistent, balanced house style. It is the most widely consumed style of Scotch worldwide.',
      faqs: [
        { question: 'Is blended Scotch lower quality than single malt?', answer: "No — blended Scotch is a different style, not a lesser one. A skilled master blender combines dozens of malt and grain whiskies to achieve balance and consistency that would be difficult from any single distillery alone." },
      ],
    },
  },
  {
    categorySlug: 'scotch-whisky',
    hubSlug: 'islay-scotch',
    subcategoryName: 'Islay Scotch',
    name: 'Islay Scotch',
    seo: {
      titleTag: 'Islay Scotch Whisky — Peated & Allocated',
      h1: 'Islay Scotch Whisky — Buy Allocated Peated Single Malt Online',
      metaDescription: 'Buy Islay scotch whisky online — allocated peated single malt from Scotland’s smokiest whisky region. Direct allocations. Free shipping on $300+.',
      transactionalCTA: 'Buy Islay scotch online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Islay is a small island off Scotland’s west coast renowned for producing the peatiest, smokiest single malt Scotch in the world. Barley is traditionally dried over peat fires, and the smoke compounds carry through distillation into the finished whisky’s signature medicinal, maritime character.',
      faqs: [
        { question: 'Why is Islay Scotch so smoky?', answer: 'Islay distilleries traditionally dry malted barley over peat fires before distillation. The smoke compounds absorb into the grain and survive fermentation and distillation, giving Islay single malts their distinctive smoky, medicinal, and maritime flavour.' },
      ],
    },
  },
  {
    categorySlug: 'scotch-whisky',
    hubSlug: 'speyside-scotch',
    subcategoryName: 'Speyside Scotch',
    name: 'Speyside Scotch',
    seo: {
      titleTag: 'Speyside Whisky — Allocated',
      h1: 'Speyside Whisky — Buy Allocated Single Malt Online',
      metaDescription: 'Buy Speyside whisky online — allocated single malt Scotch from Scotland’s largest whisky region, known for fruity, elegant, sherried expressions.',
      transactionalCTA: 'Buy Speyside whisky online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Speyside is Scotland’s most concentrated whisky-producing region, home to more distilleries than anywhere else in the country. Speyside single malts are typically fruity, elegant, and often sherry-cask finished — a lighter, sweeter counterpoint to Islay’s peat-forward style.',
      faqs: [
        { question: 'What does Speyside Scotch taste like compared to Islay?', answer: 'Speyside single malts are typically fruity, floral, and honeyed, often with sherry-cask sweetness — a lighter, more elegant style. Islay whisky is smoky and peated. Speyside is the more approachable entry point for most drinkers.' },
      ],
    },
  },
  // IRISH
  {
    categorySlug: 'irish-whiskey',
    hubSlug: 'single-pot-still',
    subcategoryName: 'Single Pot Still Irish Whiskey',
    name: 'Single Pot Still Irish Whiskey',
    seo: {
      titleTag: 'Single Pot Still Irish Whiskey — Allocated',
      h1: 'Single Pot Still Irish Whiskey — Buy Allocated Bottles Online',
      metaDescription: 'Buy single pot still whiskey online — Ireland’s most distinctive whiskey style, made from malted and unmalted barley. Direct allocations, free on $300+.',
      transactionalCTA: 'Buy single pot still whiskey online — near-zero competition for this search, and direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Single pot still whiskey is a style unique to Ireland, distilled from a mash of both malted and unmalted barley in a traditional copper pot still at a single distillery. It delivers a spicier, creamier, more full-bodied character than single malt.',
      faqs: [
        { question: 'What makes single pot still whiskey different from single malt?', answer: 'Single malt is made entirely from malted barley. Single pot still whiskey uses a mash of both malted and unmalted barley, distilled in a traditional copper pot still — a style found only in Ireland, giving a spicier, creamier mouthfeel.' },
      ],
    },
  },
  {
    categorySlug: 'irish-whiskey',
    hubSlug: 'single-malt',
    subcategoryName: 'Single Malt Irish Whiskey',
    name: 'Single Malt Irish Whiskey',
    seo: {
      titleTag: 'Irish Single Malt Whiskey — Allocated',
      h1: 'Irish Single Malt Whiskey — Buy Direct Allocation Online',
      metaDescription: 'Buy Irish single malt whiskey online — allocated single malt from Ireland’s craft and heritage distilleries. Direct allocations. Free shipping $300+.',
      transactionalCTA: 'Buy Irish single malt whiskey online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Irish single malt whiskey is made entirely from malted barley at a single distillery, typically triple distilled for a lighter, smoother profile than Scotch single malt — Ireland’s answer to the Scottish style.',
      faqs: [
        { question: 'Is Irish single malt the same as Scotch single malt?', answer: 'Both are made entirely from malted barley at one distillery, but Irish single malt is typically triple distilled (versus twice for most Scotch), producing a lighter, smoother spirit with less peat influence.' },
      ],
    },
  },
  // TEQUILA & MEZCAL
  {
    categorySlug: 'tequila-mezcal',
    hubSlug: 'blanco',
    subcategoryName: 'Blanco Tequila',
    name: 'Blanco Tequila',
    seo: {
      titleTag: 'Blanco Tequila — Allocated',
      h1: 'Blanco Tequila — Buy Allocated Silver Tequila Online',
      metaDescription: 'Buy blanco tequila online — allocated silver, unaged 100% agave tequila for sipping or margaritas. Direct allocations. Free shipping on $300+.',
      transactionalCTA: 'Buy blanco tequila online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Blanco (also called silver or plata) tequila is bottled unaged, or rested for less than two months, straight from distillation. It showcases the purest agave character — bright, vegetal, and peppery — and is the classic choice for margaritas.',
      faqs: [
        { question: 'Is blanco tequila good for sipping, or just cocktails?', answer: 'Premium blanco tequila is increasingly enjoyed neat by enthusiasts who want the purest expression of the agave itself, unmasked by oak. It remains the classic base for a margarita, but a well-made blanco holds up on its own.' },
      ],
    },
  },
  {
    categorySlug: 'tequila-mezcal',
    hubSlug: 'reposado',
    subcategoryName: 'Reposado Tequila',
    name: 'Reposado Tequila',
    seo: {
      titleTag: 'Reposado Tequila — Allocated',
      h1: 'Reposado Tequila — Buy Allocated Rested Tequila Online',
      metaDescription: 'Buy reposado tequila online — allocated tequila rested 2 months to a year in oak for a balance of agave and light barrel character.',
      transactionalCTA: 'Buy reposado tequila online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Reposado means "rested" — tequila aged in oak barrels for a minimum of two months and up to one year. It develops a light gold colour and a softer profile than unaged Blanco, without the deeper oak influence of Añejo.',
      faqs: [
        { question: 'What does "reposado" mean on a tequila label?', answer: 'Reposado means "rested." The tequila has spent between two months and one year in oak barrels — enough to soften the spirit and add light gold colour and vanilla notes, while still tasting distinctly of agave.' },
      ],
    },
  },
  {
    categorySlug: 'tequila-mezcal',
    hubSlug: 'anejo',
    subcategoryName: 'Añejo Tequila',
    name: 'Añejo Tequila',
    seo: {
      titleTag: 'Añejo Tequila — Allocated',
      h1: 'Añejo Tequila — Buy Allocated Aged Tequila Online',
      metaDescription: 'Buy añejo tequila online — allocated tequila aged 1 to 3 years in oak for a rich, sipping-grade profile. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy añejo tequila online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Añejo tequila is aged in oak barrels for one to three years, developing deep amber colour and rich notes of caramel, vanilla, and dried fruit alongside the underlying agave character. It is generally regarded as sipping-grade tequila.',
      faqs: [
        { question: 'Is añejo tequila meant to be sipped or mixed?', answer: 'Añejo is generally considered sipping-grade tequila — its extended oak ageing builds complexity that is best appreciated neat or with a small amount of ice, similar to a fine whiskey.' },
      ],
    },
  },
  {
    categorySlug: 'tequila-mezcal',
    hubSlug: 'extra-anejo',
    subcategoryName: 'Extra Añejo Tequila',
    name: 'Extra Añejo Tequila',
    seo: {
      titleTag: 'Extra Añejo Tequila — Allocated',
      h1: 'Extra Añejo Tequila — Buy Allocated Ultra-Aged Tequila Online',
      metaDescription: 'Buy extra añejo tequila online — allocated ultra-premium tequila aged 3+ years in oak. Direct allocations at Aged & Amber. Free shipping on $300+.',
      transactionalCTA: 'Buy extra añejo tequila online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Extra Añejo is the oldest legally defined tequila category, aged a minimum of three years in oak — often compared to fine cognac or aged whiskey for its depth and complexity. The category was formally established in 2006.',
      faqs: [
        { question: 'What makes Extra Añejo different from Añejo?', answer: 'Añejo is aged one to three years; Extra Añejo requires a minimum of three years in oak. The extra time produces a darker, more complex spirit often compared to fine cognac — a relatively new legal category, established in 2006.' },
      ],
    },
  },
  {
    categorySlug: 'tequila-mezcal',
    hubSlug: 'mezcal',
    subcategoryName: 'Mezcal',
    name: 'Mezcal',
    seo: {
      titleTag: 'Best Mezcal — Allocated',
      h1: 'Mezcal — Buy Allocated Artisanal Agave Spirits Online',
      metaDescription: 'Buy mezcal online — allocated artisanal mezcal from over 30 agave varieties, traditionally pit-roasted for a distinctive smoky character.',
      transactionalCTA: 'Buy mezcal online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Mezcal is the broader category of Mexican agave spirits, made from over 30 varieties of agave across a wider growing region than tequila. Agave is traditionally roasted in earthen pits lined with hot stones, giving mezcal its characteristic smoky, earthy profile.',
      faqs: [
        { question: 'Does mezcal always have a worm in the bottle?', answer: "No — the 'worm in the bottle' is a marketing gimmick from a specific brand, not a mezcal tradition or requirement. Premium mezcal is judged on agave variety, roasting method, and distillation, not novelty additions." },
        { question: 'What is the difference between tequila and mezcal?', answer: 'Tequila must be made from 100% blue Weber agave in designated regions. Mezcal can use over 30 agave varieties across a wider area of Mexico, traditionally pit-roasted — giving it a smokier character than tequila.' },
      ],
    },
  },
  // OTHER WHISKEY
  {
    categorySlug: 'other-whiskey',
    hubSlug: 'american-single-malt',
    subcategoryName: 'American Single Malt',
    name: 'American Single Malt Whiskey',
    seo: {
      titleTag: 'American Single Malt Whiskey — Allocated',
      h1: 'American Single Malt Whiskey — Buy Allocated Bottles Online',
      metaDescription: 'Buy American single malt whiskey online — allocated malted-barley whiskey from the newest recognised American whiskey style. Free shipping $300+.',
      transactionalCTA: 'Buy American single malt whiskey online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'American single malt whiskey is made from 100% malted barley at a single US distillery — a category formally recognised by US regulators in 2025. It bridges Scotch tradition with American experimentation, often using varied cask types and smoke levels distillery to distillery.',
      faqs: [
        { question: 'How is American single malt different from Scotch?', answer: 'Both are made entirely from malted barley at a single distillery, but American single malt is not bound by Scotch’s regional rules — US producers experiment freely with cask types, peat levels, and mash bills, giving the category far more stylistic range.' },
      ],
    },
  },
  {
    categorySlug: 'other-whiskey',
    hubSlug: 'flavored-whiskey',
    subcategoryName: 'Flavored Whiskey',
    name: 'Flavored Whiskey',
    seo: {
      titleTag: 'Flavored Whiskey — Allocated',
      h1: 'Flavored Whiskey — Buy Honey, Cinnamon & Fruit-Infused Whiskey Online',
      metaDescription: 'Buy flavored whiskey online — honey, cinnamon, apple, and fruit-infused whiskey blended with real whiskey for an approachable, mixable profile.',
      transactionalCTA: 'Buy flavored whiskey online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Flavored whiskey blends real whiskey with natural or artificial flavourings — honey, cinnamon, apple, and salted caramel are the most common — producing a sweeter, more approachable, highly mixable spirit distinct from traditional straight whiskey.',
      faqs: [
        { question: 'Is flavored whiskey still "real" whiskey?', answer: "Flavored whiskey starts as real whiskey, then has flavourings added after distillation — by US labelling rules it can no longer be called 'straight' or 'bourbon' once flavoured, but the whiskey base is genuine." },
      ],
    },
  },
];
