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
  {
    categorySlug: 'scotch-whisky',
    hubSlug: 'campbeltown-scotch',
    subcategoryName: 'Campbeltown Scotch',
    name: 'Campbeltown Scotch',
    seo: {
      titleTag: 'Campbeltown Scotch Whisky — Allocated',
      h1: 'Campbeltown Scotch Whisky — Buy Allocated Single Malt Online',
      metaDescription: 'Buy Campbeltown scotch online — allocated single malt from Scotland’s smallest whisky region, prized for its briny, oily, lightly smoky character.',
      transactionalCTA: 'Buy Campbeltown scotch online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Campbeltown is the smallest of Scotland’s official whisky regions, once home to over 30 distilleries and now just three. Campbeltown single malts are known for a distinctive briny, oily, lightly smoky character shaped by the peninsula’s maritime climate.',
      faqs: [
        { question: 'Why are there so few Campbeltown distilleries left?', answer: 'Campbeltown once had over 30 distilleries in the early 1900s, but overproduction, poor-quality whisky, and Prohibition-era export collapse wiped out most of them. Only three working distilleries remain today, though the region kept its official designation for its distinctive style.' },
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
  // GIN
  {
    categorySlug: 'artisanal-gin',
    hubSlug: 'london-dry-gin',
    subcategoryName: 'London Dry Gin',
    name: 'London Dry Gin',
    seo: {
      titleTag: 'London Dry Gin — Allocated',
      h1: 'London Dry Gin — Buy Allocated Classic-Style Gin Online',
      metaDescription: 'Buy London Dry gin online — the classic style with all botanicals distilled in and no post-distillation additives. Direct allocations, free $300+.',
      transactionalCTA: 'Buy London Dry gin online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'London Dry is a production method, not a geographic requirement — the gin can be made anywhere, but every botanical must be present during distillation, with no colouring or flavouring added afterward beyond a touch of sugar. It\'s the driest, most juniper-forward gin style and the classic base for a Martini or Gin & Tonic.',
      faqs: [
        { question: 'Does London Dry gin have to be made in London?', answer: 'No — "London Dry" is a legally defined production method, not a location. It can be distilled anywhere in the world, as long as every botanical is added during distillation and nothing is added afterward except a small amount of water and, rarely, a touch of sugar.' },
      ],
    },
  },
  // BEER
  {
    categorySlug: 'beer',
    hubSlug: 'lager',
    subcategoryName: 'Lager',
    name: 'Lager',
    seo: {
      titleTag: 'Lager Beer — Allocated',
      h1: 'Lager Beer — Buy Allocated Craft & Import Lagers Online',
      metaDescription: 'Buy lager beer online — allocated pilsners, helles, and craft lagers with a clean, crisp, bottom-fermented profile. Free shipping on $300+.',
      transactionalCTA: 'Buy lager online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Lager is beer fermented with bottom-fermenting yeast at cold temperatures over several weeks, then cold-conditioned ("lagered") before release. The slow, cool fermentation produces a cleaner, crisper profile than an ale, with less fruity ester character — the style behind pilsners, helles, and most of the world\'s best-selling beers.',
      faqs: [
        { question: 'What is the difference between lager and ale?', answer: 'Lager is fermented with bottom-fermenting yeast at cold temperatures over several weeks, producing a clean, crisp profile. Ale is fermented with top-fermenting yeast at warmer temperatures over just days, producing a fruitier, more complex flavor faster.' },
      ],
    },
  },
  {
    categorySlug: 'beer',
    hubSlug: 'ipa',
    subcategoryName: 'IPA',
    name: 'IPA',
    seo: {
      titleTag: 'IPA Craft Beer — Allocated',
      h1: 'IPA — Buy Allocated India Pale Ale Craft Beer Online',
      metaDescription: 'Buy IPA online — allocated India Pale Ale craft beer with bold hop bitterness and aroma, from West Coast to hazy styles. Free shipping on $300+.',
      transactionalCTA: 'Buy IPA online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'IPA (India Pale Ale) is a hop-forward ale style defined by pronounced bitterness and aroma from generous hop additions. Modern IPA spans West Coast (clear, piney, bitter), New England / hazy (soft, juicy, low bitterness), and double or imperial (higher-strength) variations, and remains the best-selling craft beer style in the US.',
      faqs: [
        { question: 'What makes an IPA different from a regular pale ale?', answer: 'IPA uses significantly more hops than a standard pale ale, producing stronger bitterness and more pronounced hop aroma and flavor. The name traces back to extra-hopped pale ales brewed in England for the trade route to India, where the added hops helped preserve the beer.' },
      ],
    },
  },
  {
    categorySlug: 'beer',
    hubSlug: 'ale-wheat',
    subcategoryName: 'Ale & Wheat',
    name: 'Ale & Wheat',
    seo: {
      titleTag: 'Ale & Wheat Beer — Allocated',
      h1: 'Ale & Wheat Beer — Buy Allocated Craft Ales Online',
      metaDescription: 'Buy ale and wheat beer online — allocated pale ales, wheat beers, and Belgian-style ales with fruity, top-fermented character. Free on $300+.',
      transactionalCTA: 'Buy ale and wheat beer online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Ales are fermented with top-fermenting yeast at warmer temperatures than lager, over just a few days, producing fruitier, more complex flavors faster. Wheat beers substitute a portion of the malt bill with wheat, giving styles like hefeweizen and witbier their characteristic light body, haze, and notes of banana, clove, or citrus.',
      faqs: [
        { question: 'What is the difference between a wheat beer and a regular ale?', answer: 'A wheat beer replaces a significant portion of the barley malt with wheat, which gives it a lighter body, hazier appearance, and often fruity or spicy yeast notes such as banana, clove, or citrus. Regular pale ales are brewed almost entirely from barley malt.' },
      ],
    },
  },
  {
    categorySlug: 'beer',
    hubSlug: 'stout-porter',
    subcategoryName: 'Stout & Porter',
    name: 'Stout & Porter',
    seo: {
      titleTag: 'Stout & Porter Beer — Allocated',
      h1: 'Stout & Porter — Buy Allocated Dark Craft Beer Online',
      metaDescription: 'Buy stout and porter beer online — allocated dark, roasted craft beers with notes of coffee, chocolate, and toasted malt. Free shipping on $300+.',
      transactionalCTA: 'Buy stout and porter online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Stout and porter are dark ales built on heavily roasted malts, producing flavors of coffee, dark chocolate, and toasted bread. Porter developed first in 18th-century London; stout began as a stronger ("stout") version of porter and has since branched into its own family, including dry stout, milk stout, and imperial stout.',
      faqs: [
        { question: 'What is the difference between a stout and a porter?', answer: 'Historically, stout began as a stronger version of porter — the name comes from "stout porter." Today the line is blurrier, but porters generally use malted barley for a smoother, sweeter profile, while stouts often include roasted unmalted barley for a drier, more coffee-like bitterness.' },
      ],
    },
  },
  // CHAMPAGNE & SPARKLING
  {
    categorySlug: 'champagne-sparkling',
    hubSlug: 'champagne',
    subcategoryName: 'Champagne',
    name: 'Champagne',
    seo: {
      titleTag: 'Champagne — Allocated',
      h1: 'Champagne — Buy Allocated Grower & Prestige Cuvée Online',
      metaDescription: 'Buy Champagne online — allocated grower Champagne, vintage, and prestige cuvée from the only region legally permitted to use the name. Free on $300+.',
      transactionalCTA: 'Buy Champagne online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Champagne is sparkling wine made exclusively in the Champagne region of France, using the traditional method of secondary fermentation inside the bottle. Only wine produced there, from permitted grapes — mostly Chardonnay, Pinot Noir, and Pinot Meunier — under strict regional rules may legally carry the name; sparkling wine made anywhere else, however similar the method, is Prosecco, Cava, or simply sparkling wine.',
      faqs: [
        { question: 'Does Champagne go bad?', answer: 'Unopened Champagne can age for years, especially vintage bottles, though most non-vintage Champagne is best within three to four years of release. Once opened, it loses its fizz quickly — even refrigerated with a proper stopper, expect it to stay drinkable for only one to three days.' },
      ],
    },
  },
  {
    categorySlug: 'champagne-sparkling',
    hubSlug: 'prosecco',
    subcategoryName: 'Prosecco',
    name: 'Prosecco',
    seo: {
      titleTag: 'Prosecco — Allocated Italian',
      h1: 'Prosecco — Buy Allocated Italian Sparkling Wine Online',
      metaDescription: 'Buy Prosecco online — allocated Italian sparkling wine from Veneto, made in the tank method for a lighter, fruitier style than Champagne. Free on $300+.',
      transactionalCTA: 'Buy Prosecco online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Prosecco is Italian sparkling wine made primarily from the Glera grape in the Veneto and Friuli regions, most notably around Valdobbiadene and Conegliano. Unlike Champagne, Prosecco is typically made using the tank (Charmat) method — secondary fermentation happens in large pressurized tanks rather than individual bottles — producing a lighter, fruitier, more immediately approachable style, usually at a lower price point.',
      faqs: [
        { question: 'What is the difference between Prosecco and Champagne?', answer: 'Champagne is made in France using the traditional method, with secondary fermentation inside each bottle, producing a yeasty, complex character. Prosecco is made in Italy using the tank method, where secondary fermentation happens in large pressurized tanks, producing a lighter, fruitier style that is typically less expensive.' },
      ],
    },
  },
  {
    categorySlug: 'champagne-sparkling',
    hubSlug: 'cava',
    subcategoryName: 'Cava',
    name: 'Cava',
    seo: {
      titleTag: 'Cava — Allocated Spanish Sparkling',
      h1: 'Cava — Buy Allocated Spanish Sparkling Wine Online',
      metaDescription: 'Buy Cava online — allocated Spanish sparkling wine made in the traditional method from native Catalan grapes. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Cava online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Cava is Spanish sparkling wine, produced mainly in Catalonia\'s Penedès region using the same traditional method as Champagne — secondary fermentation inside the bottle — but from native Spanish grapes, chiefly Macabeo, Xarel·lo, and Parellada. The shared production method gives Cava genuine bottle-aged complexity, usually at a significantly lower price than Champagne.',
      faqs: [
        { question: 'What is Cava?', answer: 'Cava is Spanish sparkling wine made using the traditional method — the same secondary-in-bottle fermentation process used for Champagne — but from native Spanish grapes such as Macabeo, Xarel·lo, and Parellada, mostly in the Penedès region of Catalonia.' },
      ],
    },
  },
  {
    categorySlug: 'champagne-sparkling',
    hubSlug: 'sparkling-wine',
    subcategoryName: 'Sparkling Wine',
    name: 'Sparkling Wine',
    seo: {
      titleTag: 'Sparkling Wine — Allocated',
      h1: 'Sparkling Wine — Buy Allocated Domestic & International Bubbles Online',
      metaDescription: 'Buy sparkling wine online — allocated American and international sparkling wine outside the Champagne, Prosecco, and Cava designations. Free on $300+.',
      transactionalCTA: 'Buy sparkling wine online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Sparkling wine is the broad category covering every carbonated wine style outside the legally protected Champagne, Prosecco, and Cava designations — including American sparkling wine (often made in the traditional method by Champagne-house offshoots), German Sekt, and other regional styles. Production methods vary from traditional bottle fermentation to the simpler tank and injection methods.',
      faqs: [
        { question: 'Is sparkling wine the same as Champagne?', answer: 'No — Champagne is a legally protected name for sparkling wine made only in the Champagne region of France. "Sparkling wine" is the broader category that includes Champagne along with Prosecco, Cava, and every other carbonated wine made anywhere in the world, under any production method.' },
      ],
    },
  },
  {
    categorySlug: 'champagne-sparkling',
    hubSlug: 'sparkling-rose',
    subcategoryName: 'Sparkling Rosé',
    name: 'Sparkling Rosé',
    seo: {
      titleTag: 'Sparkling Rosé — Allocated',
      h1: 'Sparkling Rosé — Buy Allocated Pink Sparkling Wine Online',
      metaDescription: 'Buy sparkling rosé online — allocated pink sparkling wine made by brief skin contact or blending, from Champagne rosé to sparkling rosé worldwide.',
      transactionalCTA: 'Buy sparkling rosé online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Sparkling rosé gets its color either from brief skin contact with red grapes during fermentation (the saignée method) or by blending a small amount of still red wine into a white sparkling base — a technique actually permitted in Champagne production, unusual for red-in-white blending. The result ranges from pale salmon to vivid pink, with fruit character typically brighter and redder than a white sparkling wine.',
      faqs: [
        { question: 'How is sparkling rosé made?', answer: 'Sparkling rosé gets its pink color either from brief skin contact with red grapes during fermentation (the saignée method) or by blending a small amount of still red wine into a white sparkling wine base — the latter is actually the standard method for rosé Champagne.' },
      ],
    },
  },
  // RTD & LIQUEURS
  {
    categorySlug: 'rtd-liqueurs',
    hubSlug: 'craft-cocktails',
    subcategoryName: 'Craft Cocktails',
    name: 'Craft Cocktails',
    seo: {
      titleTag: 'Craft Cocktails RTD — Allocated',
      h1: 'Craft Cocktails — Buy Allocated Ready-to-Drink Bottled Cocktails Online',
      metaDescription: 'Buy craft cocktails online — allocated ready-to-drink bottled cocktails made with real spirits and bartender-quality recipes. Free shipping $300+.',
      transactionalCTA: 'Buy craft cocktails online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Craft cocktails, in ready-to-drink form, are professionally batched cocktails bottled or canned at the recipe\'s intended strength — made with real spirits and fresh-style ingredients rather than the syrupy pre-mixes of an earlier RTD generation. They\'re built to be poured over ice or served straight, delivering a bartender-quality drink without the shaker.',
      faqs: [
        { question: 'What makes a ready-to-drink cocktail "craft"?', answer: 'A craft RTD cocktail is batched using real spirits and proper cocktail ratios — the same recipe a bartender would build to order — rather than the sugary, artificially flavored pre-mixes that once defined the category. Quality of ingredients and recipe fidelity are what separate craft RTDs from mass-market coolers.' },
      ],
    },
  },
  {
    categorySlug: 'rtd-liqueurs',
    hubSlug: 'cream-liqueurs',
    subcategoryName: 'Cream Liqueurs',
    name: 'Cream Liqueurs',
    seo: {
      titleTag: 'Cream Liqueurs — Allocated',
      h1: 'Cream Liqueurs — Buy Allocated Irish Cream & Dessert Liqueurs Online',
      metaDescription: 'Buy cream liqueurs online — allocated Irish cream and dessert liqueurs blending fresh dairy cream with spirit and sugar. Free shipping on $300+.',
      transactionalCTA: 'Buy cream liqueurs online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Cream liqueurs blend fresh dairy cream with a spirit base — most commonly Irish whiskey — along with sugar and flavoring, specially stabilized so the cream doesn\'t curdle against the alcohol. Typically bottled around 15–20% ABV, they\'re sipped neat, over ice, or added to coffee and dessert cocktails.',
      faqs: [
        { question: 'What is Irish cream?', answer: 'Irish cream is a cream liqueur made by blending fresh dairy cream with Irish whiskey, sugar, and flavorings such as cocoa or vanilla. Emulsifiers keep the cream stable against the alcohol so it won\'t curdle, and it\'s typically bottled around 15–17% ABV.' },
      ],
    },
  },
  {
    categorySlug: 'rtd-liqueurs',
    hubSlug: 'aperitifs',
    subcategoryName: 'Aperitifs',
    name: 'Aperitifs',
    seo: {
      titleTag: 'Aperitifs — Allocated',
      h1: 'Aperitifs — Buy Allocated Pre-Dinner Spirits Online',
      metaDescription: 'Buy aperitifs online — allocated low-alcohol, bittersweet spirits traditionally served before a meal to stimulate the appetite. Free on $300+.',
      transactionalCTA: 'Buy aperitifs online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'An aperitif is a lower-alcohol drink traditionally served before a meal to stimulate the appetite — typically bittersweet, herbal, or citrus-forward rather than heavy or sweet, so it doesn\'t dull the palate ahead of dinner. Classic examples include Aperol, Campari, and aromatized wines like vermouth, usually served on ice or with soda.',
      faqs: [
        { question: 'What is an aperitif?', answer: 'An aperitif is a lower-alcohol, typically bittersweet or herbal drink served before a meal to stimulate the appetite — the opposite role of a digestif, which is taken after eating to aid digestion. Aperol, Campari, and vermouth are classic examples.' },
      ],
    },
  },
  {
    categorySlug: 'rtd-liqueurs',
    hubSlug: 'amaro-digestifs',
    subcategoryName: 'Amaro & Digestifs',
    name: 'Amaro & Digestifs',
    seo: {
      titleTag: 'Amaro & Digestifs — Allocated',
      h1: 'Amaro & Digestifs — Buy Allocated Bitter Italian Liqueurs Online',
      metaDescription: 'Buy amaro and digestifs online — allocated Italian bitter herbal liqueurs traditionally sipped after a meal to aid digestion. Free on $300+.',
      transactionalCTA: 'Buy amaro and digestifs online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Amaro (Italian for "bitter") is a family of herbal liqueurs infused with roots, barks, citrus peel, and botanicals, traditionally sipped after a meal as a digestif. Styles range from intensely bitter to noticeably sweeter and more approachable, but all share the same after-dinner role of settling the stomach.',
      faqs: [
        { question: 'What is amaro?', answer: 'Amaro is a category of Italian bitter herbal liqueurs, infused with roots, barks, citrus peel, and other botanicals, traditionally served after a meal as a digestif. Styles vary widely in bitterness and sweetness — some are famously intense, while others are milder and more approachable.' },
      ],
    },
  },
  {
    categorySlug: 'rtd-liqueurs',
    hubSlug: 'coffee-liqueur',
    subcategoryName: 'Coffee Liqueur',
    name: 'Coffee Liqueur',
    seo: {
      titleTag: 'Coffee Liqueur — Allocated',
      h1: 'Coffee Liqueur — Buy Allocated Espresso Martini Essentials Online',
      metaDescription: 'Buy coffee liqueur online — allocated coffee-flavored liqueurs for Espresso Martinis, White Russians, and more. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy coffee liqueur online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Coffee liqueur is made by infusing or blending a spirit base — most often rum or a neutral spirit — with coffee and sugar, producing a rich, sweet, roasted flavor. It\'s the essential ingredient behind the Espresso Martini, White Russian, and Black Russian.',
      faqs: [
        { question: 'Is all coffee liqueur the same as Kahlúa?', answer: 'No — Kahlúa is the best-known brand, but coffee liqueur is a broader category made by many producers with their own spirit bases and coffee sourcing. Kahlúa is rum-based; other coffee liqueurs use neutral spirit or even whiskey as their base.' },
      ],
    },
  },
  {
    categorySlug: 'rtd-liqueurs',
    hubSlug: 'fruit-liqueur',
    subcategoryName: 'Fruit Liqueur',
    name: 'Fruit Liqueur',
    seo: {
      titleTag: 'Fruit Liqueur — Allocated',
      h1: 'Fruit Liqueur — Buy Allocated Berry & Stone Fruit Liqueurs Online',
      metaDescription: 'Buy fruit liqueur online — allocated berry, stone fruit, and tropical liqueurs for sipping and cocktails. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy fruit liqueur online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Fruit liqueurs are made by macerating or infusing fruit — berries, stone fruit, or tropical varieties — into a spirit base, then sweetening it, producing a lower-proof, concentrated fruit flavor. They\'re used to add sweetness and character to cocktails or sipped on their own over ice.',
      faqs: [
        { question: 'What is the difference between a fruit liqueur and a fruit brandy?', answer: 'A fruit brandy is distilled from fermented fruit, so the fruit flavor comes from distillation itself and the spirit is typically unsweetened. A fruit liqueur starts from a neutral or base spirit that has fruit and sugar added to it afterward, producing a sweeter, lower-proof drink.' },
      ],
    },
  },
  {
    categorySlug: 'rtd-liqueurs',
    hubSlug: 'herbal-liqueur',
    subcategoryName: 'Herbal Liqueur',
    name: 'Herbal Liqueur',
    seo: {
      titleTag: 'Herbal Liqueur — Allocated',
      h1: 'Herbal Liqueur — Buy Allocated Botanical Liqueurs Online',
      metaDescription: 'Buy herbal liqueur online — allocated liqueurs built on proprietary blends of herbs, roots, and botanicals. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy herbal liqueur online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Herbal liqueurs are built on a proprietary blend of herbs, roots, spices, and other botanicals infused into a spirit base — recipes that are often closely guarded trade secrets. The category spans from intensely bitter, medicinal-tasting styles to sweeter, more aromatic expressions.',
      faqs: [
        { question: 'What is a herbal liqueur made from?', answer: 'Herbal liqueurs are made by infusing a spirit base with a blend of herbs, roots, spices, and other botanicals — often dozens of ingredients in a single recipe. Producers typically keep their exact formula a closely guarded secret, which is part of what gives each herbal liqueur its distinct character.' },
      ],
    },
  },
  {
    categorySlug: 'rtd-liqueurs',
    hubSlug: 'orange-liqueur',
    subcategoryName: 'Orange Liqueur',
    name: 'Orange Liqueur',
    seo: {
      titleTag: 'Orange Liqueur — Allocated',
      h1: 'Orange Liqueur — Buy Allocated Triple Sec & Curaçao Online',
      metaDescription: 'Buy orange liqueur online — allocated triple sec, curaçao, and premium orange liqueurs for Margaritas, Cosmopolitans, and Sidecars. Free on $300+.',
      transactionalCTA: 'Buy orange liqueur online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Orange liqueur is made by infusing a spirit base with orange peel, ranging from everyday triple sec (named for its "triple distillation," though the term is now used loosely) to premium expressions like Cointreau and Grand Marnier. It\'s a foundational cocktail ingredient, essential to the Margarita, Cosmopolitan, and Sidecar.',
      faqs: [
        { question: 'What is triple sec?', answer: 'Triple sec is a style of orange liqueur made by infusing a spirit base with orange peel — the name references "triple distillation," though usage varies by producer today. It ranges from inexpensive bar-well versions to premium expressions, and is a core ingredient in the Margarita and Cosmopolitan.' },
      ],
    },
  },
  {
    categorySlug: 'rtd-liqueurs',
    hubSlug: 'cordial-liqueurs',
    subcategoryName: 'Cordial Liqueurs',
    name: 'Cordial Liqueurs',
    seo: {
      titleTag: 'Cordial Liqueurs — Allocated',
      h1: 'Cordial Liqueurs — Buy Allocated Sweet Sipping Liqueurs Online',
      metaDescription: 'Buy cordial liqueurs online — allocated sweet, lower-proof sipping liqueurs in a wide range of fruit and botanical flavors. Free on $300+.',
      transactionalCTA: 'Buy cordial liqueurs online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'In American usage, "cordial" is largely interchangeable with "liqueur" — a sweetened, flavored spirit, typically lower in proof than the base spirit it started from. The term traditionally carried a slightly more refined, delicate connotation, often used for fruit- or botanical-based liqueurs meant for slow sipping rather than mixing.',
      faqs: [
        { question: 'What is the difference between a cordial and a liqueur?', answer: 'In the US, the terms are used interchangeably — a cordial is simply a sweetened, flavored spirit, the same definition used for liqueur. In parts of Europe, "cordial" instead refers to a non-alcoholic fruit syrup meant to be diluted, which can cause confusion in imported recipes.' },
      ],
    },
  },
  // CRAFT VODKA
  {
    categorySlug: 'craft-vodka',
    hubSlug: 'plain-vodka',
    subcategoryName: 'Plain Vodka',
    name: 'Plain Vodka',
    seo: {
      titleTag: 'Plain Vodka — Allocated',
      h1: 'Plain Vodka — Buy Allocated Unflavored Vodka Online',
      metaDescription: 'Buy plain vodka online — allocated unflavored vodka valued for clean, neutral purity and versatility in any cocktail. Free shipping on $300+.',
      transactionalCTA: 'Buy plain vodka online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Plain vodka is unflavored vodka, distilled and filtered purely for a clean, neutral character with no added flavoring. Its lack of distinct flavor is the point — a well-made plain vodka is prized for smoothness and versatility, working equally well in a Martini, a Moscow Mule, or sipped chilled on its own.',
      faqs: [
        { question: 'If vodka is supposed to be neutral, why do brands taste different?', answer: 'Even within the neutral-spirit category, differences in base ingredient (wheat, rye, potato, corn, or grape), water source, number of distillations, and filtration method all shape subtle differences in mouthfeel and finish — even though none of it is "flavor" in the added-ingredient sense.' },
      ],
    },
  },
  {
    categorySlug: 'craft-vodka',
    hubSlug: 'premium-vodka',
    subcategoryName: 'Premium Vodka',
    name: 'Premium Vodka',
    seo: {
      titleTag: 'Premium Vodka — Allocated',
      h1: 'Premium Vodka — Buy Allocated Ultra-Smooth Vodka Online',
      metaDescription: 'Buy premium vodka online — allocated vodka distinguished by superior base ingredients, extra distillation, and refined filtration. Free on $300+.',
      transactionalCTA: 'Buy premium vodka online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Premium vodka distinguishes itself from everyday vodka through higher-quality base ingredients, additional distillation passes, and more refined filtration methods — techniques like quartz, charcoal, or coconut-husk filtration are common. The goal across all of it is exceptional smoothness with the least possible burn or off-flavor.',
      faqs: [
        { question: 'Does more distillation actually make vodka smoother?', answer: 'Generally yes, up to a point — each additional distillation pass removes more impurities and congeners that contribute to harshness, producing a cleaner, smoother spirit. Beyond a handful of passes the gains diminish, which is why premium producers focus on quality distillation and filtration rather than distillation count alone.' },
      ],
    },
  },
  {
    categorySlug: 'craft-vodka',
    hubSlug: 'flavored-vodka',
    subcategoryName: 'Flavored Vodka',
    name: 'Flavored Vodka',
    seo: {
      titleTag: 'Flavored Vodka — Allocated',
      h1: 'Flavored Vodka — Buy Allocated Infused Vodka Online',
      metaDescription: 'Buy flavored vodka online — allocated vodka infused with real fruit, vanilla, and spice for cocktails that need no extra mixers. Free on $300+.',
      transactionalCTA: 'Buy flavored vodka online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Flavored vodka starts from a base vodka and has natural or artificial flavoring added after distillation — fruit, vanilla, and spice are the most common, though the range extends much further. It\'s built for cocktails, letting a simple mixer like soda or lemonade do the rest of the work.',
      faqs: [
        { question: 'Is flavored vodka lower quality than plain vodka?', answer: 'Not inherently — flavored vodka starts from the same distilled base as plain vodka, with flavoring added afterward. Quality depends on the base spirit and whether real ingredients or artificial flavoring were used, not on the fact that it\'s flavored at all.' },
      ],
    },
  },
  {
    categorySlug: 'craft-vodka',
    hubSlug: 'craft-batch-vodka',
    subcategoryName: 'Craft Vodka',
    name: 'Craft Vodka',
    seo: {
      titleTag: 'Craft Vodka — Small-Batch Allocated',
      h1: 'Craft Vodka — Buy Allocated Small-Batch Vodka Online',
      metaDescription: 'Buy craft vodka online — allocated small-batch vodka from independent distillers using distinctive base ingredients. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy craft vodka online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Craft vodka comes from smaller, independent distillers who emphasize distinctive base ingredients — anything from estate-grown grain to grapes, corn, or even quinoa — and hands-on production methods over mass-market scale. The result is more variation in character between brands than the more uniform, ultra-neutral profile typical of large commercial vodka.',
      faqs: [
        { question: 'What makes a vodka "craft" instead of just premium?', answer: 'Premium vodka is usually a larger producer refining its process for extra smoothness. Craft vodka comes from smaller, independent distillers who often use unusual or estate-specific base ingredients and hands-on production methods, prioritizing a distinctive character over the near-total neutrality that defines most mass-market vodka.' },
      ],
    },
  },
  // COGNAC & BRANDY
  {
    categorySlug: 'cognac-brandy',
    hubSlug: 'vs-cognac',
    subcategoryName: 'VS Cognac',
    name: 'VS Cognac',
    seo: {
      titleTag: 'VS Cognac — Allocated',
      h1: 'VS Cognac — Buy Allocated Very Special Cognac Online',
      metaDescription: 'Buy VS cognac online — allocated Very Special cognac aged a minimum of 2 years, the youngest and most versatile cognac tier. Free on $300+.',
      transactionalCTA: 'Buy VS cognac online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'VS ("Very Special," sometimes marked with three stars) is the youngest official cognac designation, requiring a minimum of two years aging in French oak for the youngest eau-de-vie in the blend. It\'s typically brighter and more fruit-forward than older tiers, and is the classic choice for cognac cocktails like the Sidecar.',
      faqs: [
        { question: 'Is VS cognac good for cocktails?', answer: 'Yes — VS is generally the tier bartenders reach for in cocktails. Its brighter, more fruit-forward character (from the shorter minimum aging) holds up well against other cocktail ingredients, while older tiers like XO are usually reserved for sipping neat.' },
      ],
    },
  },
  {
    categorySlug: 'cognac-brandy',
    hubSlug: 'vsop-cognac',
    subcategoryName: 'VSOP Cognac',
    name: 'VSOP Cognac',
    seo: {
      titleTag: 'VSOP Cognac — Allocated',
      h1: 'VSOP Cognac — Buy Allocated Very Superior Old Pale Online',
      metaDescription: 'Buy VSOP cognac online — allocated cognac aged a minimum of 4 years, balancing fruit character with barrel-derived depth. Free on $300+.',
      transactionalCTA: 'Buy VSOP cognac online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'VSOP ("Very Superior Old Pale") requires a minimum of four years aging in French oak for the youngest eau-de-vie in the blend — double the minimum for VS. The extra time in barrel adds depth and roundness while keeping real fruit character intact, making VSOP the most popular tier for sipping neat or on the rocks.',
      faqs: [
        { question: 'What does VSOP mean on a cognac bottle?', answer: 'VSOP stands for "Very Superior Old Pale," an official designation requiring the youngest eau-de-vie in the blend to be aged at least four years in French oak — twice the minimum required for VS.' },
      ],
    },
  },
  {
    categorySlug: 'cognac-brandy',
    hubSlug: 'xo-cognac',
    subcategoryName: 'XO Cognac',
    name: 'XO Cognac',
    seo: {
      titleTag: 'XO Cognac — Allocated',
      h1: 'XO Cognac — Buy Allocated Extra Old Cognac Online',
      metaDescription: 'Buy XO cognac online — allocated Extra Old cognac aged a minimum of 10 years for deep rancio, dried fruit, and leather complexity. Free on $300+.',
      transactionalCTA: 'Buy XO cognac online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'XO ("Extra Old") requires a minimum of ten years aging in French oak — the regulator raised this from six years in 2018 to better reflect what top producers were already doing in practice. The extended time in barrel develops rancio, dried fruit, and leather notes well beyond what VS or VSOP typically show.',
      faqs: [
        { question: 'Why did the minimum age for XO cognac change?', answer: 'In 2018 the Cognac regulator (the BNIC) raised the minimum age for XO from six years to ten years, formalizing a standard most reputable XO producers already exceeded in practice. The change gave the designation a clearer, more meaningful gap from VSOP.' },
      ],
    },
  },
  {
    categorySlug: 'cognac-brandy',
    hubSlug: 'xxo-cognac',
    subcategoryName: 'XXO Cognac',
    name: 'XXO Cognac',
    seo: {
      titleTag: 'XXO Cognac — Ultra-Aged',
      h1: 'XXO Cognac — Buy Allocated Extra Extra Old Cognac Online',
      metaDescription: 'Buy XXO cognac online — allocated Extra Extra Old cognac aged a minimum of 14 years, the newest and oldest official cognac tier. Free on $300+.',
      transactionalCTA: 'Buy XXO cognac online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'XXO ("Extra Extra Old") is the newest official cognac designation, introduced in 2018 to formally recognize cognacs aged well beyond the XO minimum — requiring at least fourteen years for the youngest eau-de-vie in the blend. It sits above XO as the oldest, rarest, and most expensive tier in the official classification.',
      faqs: [
        { question: 'Is XXO older than XO cognac?', answer: 'Yes — XXO requires a minimum of fourteen years aging, compared to ten years for XO. The designation was created in 2018 specifically to give ultra-aged cognacs their own official tier above XO.' },
      ],
    },
  },
  {
    categorySlug: 'cognac-brandy',
    hubSlug: 'rare-brandy',
    subcategoryName: 'Rare Brandy',
    name: 'Rare Brandy',
    seo: {
      titleTag: 'Rare Brandy — Allocated',
      h1: 'Rare Brandy — Buy Allocated Aged Brandy Online',
      metaDescription: 'Buy rare brandy online — allocated aged brandy from outside the Cognac designation, including Armagnac and other fine grape brandies. Free on $300+.',
      transactionalCTA: 'Buy rare brandy online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Brandy is any spirit distilled from fermented fruit, most often grapes, and aged in wood. Cognac is simply the most famous style of brandy — one made under strict regional rules in France — while rare brandy covers everything else worth seeking out, including aged Armagnac, American brandy, and other fine grape spirits made outside the Cognac designation.',
      faqs: [
        { question: 'Is Armagnac the same as Cognac?', answer: 'No — both are French grape brandies aged in oak, but Cognac comes from the Cognac region using double pot-still distillation, while Armagnac comes from Gascony and is traditionally distilled just once in a column still, giving it a generally more rustic, robust character.' },
      ],
    },
  },
  // FINE WINE
  {
    categorySlug: 'fine-wine',
    hubSlug: 'red-wine',
    subcategoryName: 'Red Wine',
    name: 'Red Wine',
    seo: {
      titleTag: 'Red Wine — Allocated',
      h1: 'Red Wine — Buy Allocated Cellar-Reserve Red Wine Online',
      metaDescription: 'Buy red wine online — allocated cellar-reserve red wine from Napa Valley, Bordeaux, and beyond. Direct allocations. Free shipping on $300+.',
      transactionalCTA: 'Buy red wine online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Red wine is made by fermenting dark-skinned grapes with their skins intact, which is what gives red wine its color, tannin, and body — white wine, by contrast, is typically fermented without skin contact. Styles range from light and fruity to full-bodied and tannic, shaped by grape variety, climate, and winemaking choices.',
      faqs: [
        { question: 'What makes a red wine "dry" instead of sweet?', answer: 'A dry red wine is one where the yeast has fermented nearly all the grape sugar into alcohol, leaving little residual sweetness. A sweet red wine either stops fermentation early or has sugar added back, and tends to taste fruitier and less tannic.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'white-wine',
    subcategoryName: 'White Wine',
    name: 'White Wine',
    seo: {
      titleTag: 'White Wine — Allocated',
      h1: 'White Wine — Buy Allocated Cellar-Reserve White Wine Online',
      metaDescription: 'Buy white wine online — allocated cellar-reserve white wine from crisp and dry to rich and aromatic styles. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy white wine online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'White wine is made by fermenting grape juice without skin contact — even when the grapes themselves are red-skinned. Without tannin from the skins, white wine tends toward a lighter body and higher acidity, with styles ranging from crisp and bone-dry to lusciously sweet.',
      faqs: [
        { question: 'What is a dry white wine?', answer: 'A dry white wine is one where fermentation has converted nearly all the grape sugar into alcohol, leaving very little residual sweetness — Sauvignon Blanc and most Pinot Grigio are classic examples, in contrast to sweeter styles like Moscato or Riesling.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'rose-wine',
    subcategoryName: 'Rosé Wine',
    name: 'Rosé Wine',
    seo: {
      titleTag: 'Rosé Wine — Allocated',
      h1: 'Rosé Wine — Buy Allocated Cellar-Reserve Rosé Online',
      metaDescription: 'Buy rosé wine online — allocated Provence-style and international rosé from brief skin-contact winemaking. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy rosé wine online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Rosé wine gets its pink color from brief skin contact with red grapes — typically just a few hours, far less than a red wine — before the juice is separated and fermented like a white. The short contact time extracts color and some tannin without the full weight of a red, producing wine that ranges from pale, dry Provence-style rosé to darker, fruitier styles.',
      faqs: [
        { question: 'How is rosé wine made?', answer: 'Rosé is made by briefly macerating red grape skins with the juice — usually just a few hours, compared to weeks for a red wine — before pressing and fermenting it like a white wine. The short contact time extracts color and light tannin without the full body of a red.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'cabernet-sauvignon',
    subcategoryName: 'Cabernet Sauvignon',
    name: 'Cabernet Sauvignon',
    seo: {
      titleTag: 'Cabernet Sauvignon — Allocated',
      h1: 'Cabernet Sauvignon — Buy Allocated Cellar-Reserve Cabernet Online',
      metaDescription: 'Buy Cabernet Sauvignon online — allocated cellar-reserve Cabernet from Napa Valley and Bordeaux estates. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Cabernet Sauvignon online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Cabernet Sauvignon is a red grape variety — a natural cross of Cabernet Franc and Sauvignon Blanc — known for firm tannin, dark fruit character, and excellent aging potential. It thrives in warm climates such as Napa Valley and Bordeaux, and its structure makes it one of the most widely planted and recognized red wine grapes in the world.',
      faqs: [
        { question: 'Is Cabernet Sauvignon a dry or sweet wine?', answer: 'Cabernet Sauvignon is a dry red wine — virtually all the grape sugar is fermented into alcohol, leaving little residual sweetness. Its dark fruit flavors can read as "sweet" on the nose, but the wine itself is not sweet in a technical sense.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'pinot-noir',
    subcategoryName: 'Pinot Noir',
    name: 'Pinot Noir',
    seo: {
      titleTag: 'Pinot Noir — Allocated',
      h1: 'Pinot Noir — Buy Allocated Cellar-Reserve Pinot Noir Online',
      metaDescription: 'Buy Pinot Noir online — allocated cellar-reserve Pinot Noir with soft tannin and bright red fruit character. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Pinot Noir online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Pinot Noir is a thin-skinned red grape prized for producing light-to-medium-bodied, elegant wine with soft tannin and bright red fruit character. It\'s notoriously difficult to grow, sensitive to climate and site, which is part of why well-made Pinot Noir from top regions like Burgundy and Oregon\'s Willamette Valley commands such attention.',
      faqs: [
        { question: 'Is Pinot Noir a light or full-bodied wine?', answer: 'Pinot Noir is generally a light-to-medium-bodied red wine, with soft tannin and bright acidity rather than the heavy structure of a Cabernet Sauvignon or Malbec — one reason it\'s often recommended to red wine drinkers who find bolder styles too heavy.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'chardonnay',
    subcategoryName: 'Chardonnay',
    name: 'Chardonnay',
    seo: {
      titleTag: 'Chardonnay — Allocated',
      h1: 'Chardonnay — Buy Allocated Cellar-Reserve Chardonnay Online',
      metaDescription: 'Buy Chardonnay online — allocated cellar-reserve Chardonnay from buttery, oaked to crisp, unoaked styles. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Chardonnay online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Chardonnay is a highly adaptable white grape that takes on dramatically different character depending on winemaking style — oaked and buttery in a warm-climate, barrel-aged style, or crisp, mineral, and unoaked in a cooler-climate style like Chablis. It\'s one of the most widely planted white grapes in the world precisely because of that versatility.',
      faqs: [
        { question: 'Is Chardonnay a sweet or dry wine?', answer: 'Chardonnay is typically a dry white wine — almost all the grape sugar ferments into alcohol. Buttery, oaked styles can taste richer due to malolactic fermentation and oak aging, which can be mistaken for sweetness, but true residual sugar is usually minimal.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'sauvignon-blanc',
    subcategoryName: 'Sauvignon Blanc',
    name: 'Sauvignon Blanc',
    seo: {
      titleTag: 'Sauvignon Blanc — Allocated',
      h1: 'Sauvignon Blanc — Buy Allocated Cellar-Reserve Sauvignon Blanc Online',
      metaDescription: 'Buy Sauvignon Blanc online — allocated cellar-reserve Sauvignon Blanc with crisp acidity and vivid citrus character. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Sauvignon Blanc online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Sauvignon Blanc is a crisp, aromatic white grape known for high acidity and vivid flavors of citrus, green apple, and fresh-cut grass, with a distinctive herbaceous character. Cooler regions like the Loire Valley and Marlborough, New Zealand produce especially vibrant, zesty expressions of the grape.',
      faqs: [
        { question: 'Is Sauvignon Blanc a sweet or dry wine?', answer: 'Sauvignon Blanc is almost always a dry white wine, valued for its high acidity and crisp citrus character rather than sweetness. Its vivid fruit flavors can read as sweet on the nose even though very little residual sugar remains in the finished wine.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'malbec',
    subcategoryName: 'Malbec',
    name: 'Malbec',
    seo: {
      titleTag: 'Malbec — Allocated',
      h1: 'Malbec — Buy Allocated Cellar-Reserve Argentine Malbec Online',
      metaDescription: 'Buy Malbec online — allocated cellar-reserve Malbec from Mendoza and beyond, rich with dark plum and blackberry. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Malbec online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Malbec is a dark-skinned red grape originally from southwest France, now most closely associated with Argentina, where the high-altitude vineyards of Mendoza produce its richest, most velvety expressions. It typically shows deep color, soft tannin, and flavors of dark plum and blackberry.',
      faqs: [
        { question: 'What is Malbec wine?', answer: 'Malbec is a dark-skinned red grape variety originally from France, now grown most famously in Mendoza, Argentina, where high-altitude vineyards produce rich, velvety wine with deep color and dark fruit flavors like plum and blackberry.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'riesling',
    subcategoryName: 'Riesling',
    name: 'Riesling',
    seo: {
      titleTag: 'Riesling — Allocated',
      h1: 'Riesling — Buy Allocated Cellar-Reserve Riesling Online',
      metaDescription: 'Buy Riesling online — allocated cellar-reserve Riesling from bone-dry to lusciously sweet, always high in acidity. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Riesling online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Riesling is an aromatic white grape capable of an unusually wide range of sweetness levels — from bone-dry to lusciously sweet — while retaining the high acidity that keeps even its sweetest styles balanced rather than cloying. Germany\'s Mosel and Rheingau regions are considered its spiritual home.',
      faqs: [
        { question: 'Is Riesling always a sweet wine?', answer: 'No — Riesling spans the full range from bone-dry to very sweet, and producers increasingly label the style clearly. Its naturally high acidity keeps even the sweeter styles feeling balanced and refreshing rather than heavy, which is part of why the grape is so versatile.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'zinfandel',
    subcategoryName: 'Zinfandel',
    name: 'Zinfandel',
    seo: {
      titleTag: 'Zinfandel — Allocated',
      h1: 'Zinfandel — Buy Allocated Cellar-Reserve Zinfandel Online',
      metaDescription: 'Buy Zinfandel online — allocated cellar-reserve, bold, jammy old-vine Zinfandel from California. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Zinfandel online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Zinfandel is a red grape that thrives in California, especially old-vine plantings in Sonoma and Lodi, producing bold, jammy wine high in alcohol with flavors of blackberry, pepper, and spice. The same grape also makes white Zinfandel, a pink, off-dry style produced by limiting skin contact.',
      faqs: [
        { question: 'Is Zinfandel red or white wine?', answer: 'Red Zinfandel is a bold, full-bodied red wine. White Zinfandel is made from the same grape but with limited skin contact, producing a pink, off-dry wine that\'s a completely different style — much lighter and sweeter than its red counterpart.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'pinot-grigio',
    subcategoryName: 'Pinot Grigio',
    name: 'Pinot Grigio',
    seo: {
      titleTag: 'Pinot Grigio — Allocated',
      h1: 'Pinot Grigio — Buy Allocated Cellar-Reserve Pinot Grigio Online',
      metaDescription: 'Buy Pinot Grigio online — allocated cellar-reserve Pinot Grigio, light, crisp, and dry Italian white wine. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Pinot Grigio online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Pinot Grigio is a white grape — genetically the same as Pinot Gris — typically vinified in a light, crisp, neutral style in Italy, where it\'s the country\'s most popular white wine export. French and Alsatian versions labeled Pinot Gris tend toward a richer, more aromatic style from the identical grape.',
      faqs: [
        { question: 'Is Pinot Grigio a sweet or dry wine?', answer: 'Pinot Grigio is typically a dry, light-bodied white wine with crisp acidity and subtle fruit character — not sweet. Its Alsatian counterpart, labeled Pinot Gris, is usually made in a richer, sometimes off-dry style from the identical grape.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'moscato',
    subcategoryName: 'Moscato',
    name: 'Moscato',
    seo: {
      titleTag: 'Moscato — Allocated',
      h1: 'Moscato — Buy Allocated Cellar-Reserve Moscato Online',
      metaDescription: 'Buy Moscato online — allocated cellar-reserve Moscato, lightly sparkling, sweet, and intensely aromatic. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Moscato online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Moscato is a family of aromatic Muscat grapes best known for the lightly sparkling, low-alcohol, sweet Moscato d\'Asti style from Italy\'s Piedmont region. Its intensely floral, peachy, grapey aroma and gentle sweetness make it one of the most approachable wine styles for newer wine drinkers.',
      faqs: [
        { question: 'Is Moscato always sweet?', answer: 'Most Moscato on the market is sweet, particularly the popular Moscato d\'Asti style, which is lightly sparkling and low in alcohol. The Muscat grape can be made in drier styles too, but sweet, aromatic Moscato is what most bottles labeled this way deliver.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'merlot',
    subcategoryName: 'Merlot',
    name: 'Merlot',
    seo: {
      titleTag: 'Merlot — Allocated',
      h1: 'Merlot — Buy Allocated Cellar-Reserve Merlot Online',
      metaDescription: 'Buy Merlot online — allocated cellar-reserve Merlot with soft tannin and plush dark fruit character. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Merlot online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Merlot is a red grape known for soft tannin, plush texture, and approachable dark fruit flavors like plum and black cherry, making it one of the most widely planted and easy-drinking red wine grapes in the world. It\'s a key blending partner in Bordeaux and also excels as a varietal wine on its own.',
      faqs: [
        { question: 'Is Merlot a sweet or dry wine?', answer: 'Merlot is a dry red wine — its soft tannin and plush dark fruit character can taste rounder on the palate than a firmer wine like Cabernet Sauvignon, but very little actual residual sugar remains after fermentation.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'organic-natural-wine',
    subcategoryName: 'Organic & Natural Wine',
    name: 'Organic & Natural Wine',
    seo: {
      titleTag: 'Organic & Natural Wine — Allocated',
      h1: 'Organic & Natural Wine — Buy Allocated Minimal-Intervention Wine Online',
      metaDescription: 'Buy organic and natural wine online — allocated wine from certified-organic vineyards and minimal-intervention cellars. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy organic and natural wine online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Organic wine is made from grapes grown without synthetic pesticides or fertilizers, certified under standards that vary by country. Natural wine goes further, made with minimal intervention in the cellar — often no added sulfites, wild fermentation, and no fining or filtration — producing wine that can taste noticeably different, and less predictable, than conventional bottlings.',
      faqs: [
        { question: 'What is the difference between organic and natural wine?', answer: 'Organic wine refers to how the grapes were farmed — without synthetic pesticides or fertilizers, under a certified standard. Natural wine is a broader, less formally regulated philosophy about minimal intervention in the cellar, such as wild fermentation and no added sulfites, and doesn\'t necessarily require certified-organic grapes.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'port',
    subcategoryName: 'Port',
    name: 'Port',
    seo: {
      titleTag: 'Port — Allocated Fortified Wine',
      h1: 'Port — Buy Allocated Fortified Port Wine Online',
      metaDescription: 'Buy Port online — allocated fortified Port wine from Portugal\'s Douro Valley, from Ruby to bottle-aged Vintage styles. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Port online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Port is a fortified wine from Portugal\'s Douro Valley, made by adding grape spirit partway through fermentation — stopping the yeast before all the sugar converts to alcohol, which is why Port is both sweet and higher in alcohol (typically 19–22% ABV) than table wine. Styles range from youthful Ruby to complex, bottle-aged Vintage Port.',
      faqs: [
        { question: 'What is port wine?', answer: 'Port is a fortified wine from Portugal\'s Douro Valley, made by adding grape spirit during fermentation to stop the yeast early — leaving natural grape sugar behind and raising the alcohol to around 19–22%. That\'s why Port is both sweeter and stronger than typical table wine.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'sherry',
    subcategoryName: 'Sherry',
    name: 'Sherry',
    seo: {
      titleTag: 'Sherry — Allocated Fortified Wine',
      h1: 'Sherry — Buy Allocated Fortified Sherry Online',
      metaDescription: 'Buy sherry online — allocated fortified sherry from Jerez, Spain, from bone-dry Fino to rich Cream Sherry. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy sherry online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Sherry is a fortified wine from the Jerez region of Spain, made in styles ranging from bone-dry (Fino and Manzanilla, aged under a protective layer of yeast called flor) to rich and sweet (Pedro Ximénez and Cream Sherry). Its distinctive aging methods, including the solera blending system, give Sherry a flavor range unlike any other fortified wine.',
      faqs: [
        { question: 'What is sherry?', answer: 'Sherry is a fortified wine made in the Jerez region of Spain, in styles ranging from bone-dry (Fino, Manzanilla) to rich and sweet (Cream Sherry, Pedro Ximénez). Its aging methods — including a protective yeast layer called flor and the solera blending system — set it apart from other fortified wines like Port.' },
      ],
    },
  },
  {
    categorySlug: 'fine-wine',
    hubSlug: 'icewine-dessert-wine',
    subcategoryName: 'Icewine & Dessert Wine',
    name: 'Icewine & Dessert Wine',
    seo: {
      titleTag: 'Icewine & Dessert Wine — Allocated',
      h1: 'Icewine & Dessert Wine — Buy Allocated Sweet Wine Online',
      metaDescription: 'Buy icewine and dessert wine online — allocated frozen-harvest icewine and other intensely sweet wine styles. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy icewine and dessert wine online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Icewine is made from grapes left on the vine until they freeze naturally, then pressed while still frozen — the water stays behind as ice, concentrating the sugar and acid into an intensely sweet, small-batch wine. Dessert wine is the broader category of any wine made specifically to be sweet, including icewine, late-harvest wine, and fortified styles.',
      faqs: [
        { question: 'What is icewine?', answer: 'Icewine is made from grapes left on the vine until they freeze naturally in the cold — often into December or later — then pressed while still frozen. The ice crystals are mostly water, so pressing leaves behind a small amount of intensely concentrated, sweet juice, making icewine one of the most labor-intensive wine styles to produce.' },
      ],
    },
  },
  // AGED & DARK RUM
  {
    categorySlug: 'aged-dark-rum',
    hubSlug: 'dark-rum',
    subcategoryName: 'Dark Rum',
    name: 'Dark Rum',
    seo: {
      titleTag: 'Dark Rum — Allocated',
      h1: 'Dark Rum — Buy Allocated Rich, Full-Bodied Rum Online',
      metaDescription: 'Buy dark rum online — allocated dark rum with toffee, caramel, and baking spice character from Jamaica, Barbados, and beyond. Free on $300+.',
      transactionalCTA: 'Buy dark rum online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Dark rum gets its deep color and richer flavor from extended barrel aging, caramel coloring, or molasses-forward production — often a combination of all three. It typically shows notes of toffee, dark caramel, and baking spice, and while most dark rum is aged, color alone isn\'t proof of age since some producers add caramel coloring to a younger spirit.',
      faqs: [
        { question: 'Is dark rum always aged rum?', answer: 'Not necessarily — while most dark rum does get its color from oak aging, some producers add caramel coloring to a younger spirit to achieve a darker appearance. Checking for an age statement is the only reliable way to know how long a dark rum actually spent in barrel.' },
      ],
    },
  },
  {
    categorySlug: 'aged-dark-rum',
    hubSlug: 'aged-rum',
    subcategoryName: 'Aged Rum',
    name: 'Aged Rum',
    seo: {
      titleTag: 'Aged Rum — Allocated',
      h1: 'Aged Rum — Buy Allocated Barrel-Matured Rum Online',
      metaDescription: 'Buy aged rum online — allocated barrel-matured rum with vanilla, dried fruit, and baking spice character. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy aged rum online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Aged rum spends time maturing in oak barrels, developing color, smoothness, and flavors like vanilla, dried fruit, and baking spice that unaged rum doesn\'t have. Aging rules and age-statement practices vary widely by country — some regions use a solera blending system, which can make the printed age reflect only part of the blend — so reading the label carefully matters more with rum than with most spirits.',
      faqs: [
        { question: 'Why do rum age statements vary so much between countries?', answer: 'Unlike Scotch or bourbon, there is no single international standard for how rum age is calculated or labeled. Some countries require the age statement to reflect the youngest rum in the blend, while others allow a solera system, where the stated age can represent only a portion of an ever-refreshed blend — so the same age statement doesn\'t always mean the same thing bottle to bottle.' },
      ],
    },
  },
  {
    categorySlug: 'aged-dark-rum',
    hubSlug: 'spiced-rum',
    subcategoryName: 'Spiced Rum',
    name: 'Spiced Rum',
    seo: {
      titleTag: 'Spiced Rum — Allocated',
      h1: 'Spiced Rum — Buy Allocated Spice-Infused Rum Online',
      metaDescription: 'Buy spiced rum online — allocated rum infused with cinnamon, vanilla, and clove for easy sipping and mixing. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy spiced rum online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Spiced rum is infused with spices such as cinnamon, vanilla, clove, and nutmeg, sometimes alongside caramel coloring, layered over an aged or unaged rum base. It\'s built for easy sipping and mixing, with the spice blend doing much of the flavor work rather than barrel aging alone.',
      faqs: [
        { question: 'Is spiced rum the same as aged rum with spices added?', answer: 'Not exactly — spiced rum can start from either an aged or unaged rum base, with spices and often caramel coloring added afterward specifically to shape its flavor. An aged rum\'s character comes primarily from time in oak, while spiced rum is deliberately flavored on top of whatever base it starts from.' },
      ],
    },
  },
  {
    categorySlug: 'aged-dark-rum',
    hubSlug: 'white-rum',
    subcategoryName: 'White Rum',
    name: 'White Rum',
    seo: {
      titleTag: 'White Rum — Allocated',
      h1: 'White Rum — Buy Allocated Light & Silver Rum Online',
      metaDescription: 'Buy white rum online — allocated light, clean rum ideal for Mojitos, Daiquiris, and other classic rum cocktails. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy white rum online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'White rum (also called light or silver rum) is unaged or briefly aged, then typically charcoal-filtered to strip out any color it picked up, resulting in a clean, light-bodied spirit. Its neutral character makes it the classic base for Mojitos, Daiquiris, and other rum cocktails where the mixer, not the rum, is meant to lead.',
      faqs: [
        { question: 'Is white rum unaged?', answer: 'Most white rum is either unaged or aged only briefly, then charcoal-filtered to remove any color picked up from the barrel — which is why it stays clear even when some aging did occur. That clean, neutral profile is exactly what makes it work so well in cocktails.' },
      ],
    },
  },
  // BAR ESSENTIALS
  {
    categorySlug: 'bar-essentials',
    hubSlug: 'bitters',
    subcategoryName: 'Bitters',
    name: 'Bitters',
    seo: {
      titleTag: 'Bitters — Allocated',
      h1: 'Bitters — Buy Allocated Cocktail Bitters Online',
      metaDescription: 'Buy bitters online — allocated aromatic and specialty cocktail bitters for a properly built home bar. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy bitters online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Bitters are a highly concentrated, alcohol-based flavoring made by infusing spirits with bittering agents, herbs, roots, and spices — used in drops, not shots, to season a cocktail the way a dash of salt seasons food. Angostura is the best-known name, but the modern bitters revival has produced dozens of flavor profiles beyond the classic aromatic style.',
      faqs: [
        { question: 'What are bitters?', answer: 'Bitters are a concentrated, alcohol-based flavoring made by infusing a spirit with bittering botanicals, herbs, and spices. They\'re used in tiny amounts — a few dashes — to add depth and balance to a cocktail, functioning more like a seasoning than an ingredient you\'d drink on its own.' },
      ],
    },
  },
  {
    categorySlug: 'bar-essentials',
    hubSlug: 'vermouth',
    subcategoryName: 'Vermouth',
    name: 'Vermouth',
    seo: {
      titleTag: 'Vermouth — Allocated',
      h1: 'Vermouth — Buy Allocated Sweet & Dry Vermouth Online',
      metaDescription: 'Buy vermouth online — allocated sweet and dry aromatized fortified wine for Martinis, Manhattans, and Negronis. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy vermouth online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Vermouth is an aromatized, fortified wine flavored with a proprietary blend of botanicals, then fortified with additional spirit. Dry vermouth is the pale, herbal backbone of a classic Martini, while sweet vermouth brings the rounder, slightly bitter sweetness essential to a Manhattan or Negroni.',
      faqs: [
        { question: 'What is the difference between sweet and dry vermouth?', answer: 'Dry vermouth is pale, herbal, and barely sweet — the classic Martini ingredient. Sweet vermouth (sometimes called red or Italian vermouth) is darker, rounder, and noticeably sweeter, used in drinks like the Manhattan and Negroni. Both are aromatized, fortified wines, just made to very different flavor profiles.' },
      ],
    },
  },
  {
    categorySlug: 'bar-essentials',
    hubSlug: 'mixers-syrups',
    subcategoryName: 'Mixers & Syrups',
    name: 'Mixers & Syrups',
    seo: {
      titleTag: 'Mixers & Syrups — Allocated',
      h1: 'Mixers & Syrups — Buy Allocated Cocktail Mixers Online',
      metaDescription: 'Buy cocktail mixers and syrups online — allocated tonic, soda, juice, and specialty syrups for building drinks from scratch. Free on $300+.',
      transactionalCTA: 'Buy mixers and syrups online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Mixers and syrups are the non-alcoholic building blocks of a cocktail — tonic, soda, and juice for volume and dilution, and simple, flavored, or specialty syrups for sweetness and balance. A quality mixer matters as much as the spirit it\'s paired with, since it makes up a large share of what actually ends up in the glass.',
      faqs: [
        { question: 'Why does the quality of a mixer matter if it\'s not the main ingredient?', answer: 'A mixer often makes up half or more of the liquid in a cocktail, so a low-quality tonic, soda, or syrup can flatten or clash with even a great spirit. Bartenders treat mixers as a genuine ingredient to be chosen deliberately, not an afterthought poured on top.' },
      ],
    },
  },
  {
    categorySlug: 'bar-essentials',
    hubSlug: 'cocktail-mixes',
    subcategoryName: 'Cocktail Mixes',
    name: 'Cocktail Mixes',
    seo: {
      titleTag: 'Cocktail Mixes — Allocated',
      h1: 'Cocktail Mixes — Buy Allocated Ready-to-Use Drink Mixes Online',
      metaDescription: 'Buy cocktail mixes online — allocated margarita, bloody mary, and piña colada mixes for a consistent drink every time. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy cocktail mixes online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Cocktail mixes are pre-formulated blends — margarita mix, bloody mary mix, piña colada mix, and similar — designed to recreate a specific classic drink by simply adding spirit. They trade some of the control of building a cocktail from scratch for genuine convenience and consistency.',
      faqs: [
        { question: 'Are cocktail mixes as good as making a drink from scratch?', answer: 'Quality varies widely — a well-made cocktail mix from a reputable producer can come close to a fresh-made version, while cheaper mixes often lean on excess sugar and artificial flavoring to compensate. The convenience trade-off is real, but it\'s worth choosing a mix the same way you\'d choose any other ingredient.' },
      ],
    },
  },
  {
    categorySlug: 'bar-essentials',
    hubSlug: 'garnishes',
    subcategoryName: 'Garnishes',
    name: 'Garnishes',
    seo: {
      titleTag: 'Cocktail Garnishes — Allocated',
      h1: 'Cocktail Garnishes — Buy Allocated Bar Garnishes Online',
      metaDescription: 'Buy cocktail garnishes online — allocated cherries, olives, and citrus garnishes to finish a drink properly. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy cocktail garnishes online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Cocktail garnishes range from purely decorative — an orange peel twist, a cherry, a cocktail umbrella — to genuinely functional, where citrus oils expressed from a peel or a fresh herb sprig actually change the drink\'s aroma and first impression. A good garnish is chosen to complement the drink, not just decorate the glass.',
      faqs: [
        { question: 'Do cocktail garnishes actually affect the taste of a drink?', answer: 'Some do meaningfully — expressing a citrus peel over a drink releases aromatic oils that change what you smell (and therefore taste) with the first sip, and a fresh herb sprig like mint works the same way. Purely decorative garnishes like a cherry or umbrella mostly affect presentation rather than flavor.' },
      ],
    },
  },
  {
    categorySlug: 'bar-essentials',
    hubSlug: 'glassware-barware',
    subcategoryName: 'Glassware & Barware',
    name: 'Glassware & Barware',
    seo: {
      titleTag: 'Glassware & Barware — Allocated',
      h1: 'Glassware & Barware — Buy Allocated Bar Tools Online',
      metaDescription: 'Buy glassware and barware online — allocated coupes, rocks glasses, shakers, and bar tools for proper cocktail service. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy glassware and barware online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Glassware and barware are the physical tools of proper cocktail service — the coupe, rocks glass, and highball each shaped to suit a specific style of drink, alongside shakers, jiggers, strainers, and bar spoons used to build the cocktail itself. The right glass and tools don\'t just look the part; they affect dilution, temperature, and aroma.',
      faqs: [
        { question: 'Does the type of glass actually matter for a cocktail?', answer: 'Yes — glass shape affects how quickly a drink warms, how aroma concentrates at the rim, and even how much ice it holds, all of which change how the drink tastes and how quickly it dilutes. A Martini in a coupe and the same drink in a rocks glass genuinely drink differently.' },
      ],
    },
  },
  // OTHER WHISKEY
  {
    categorySlug: 'other-whiskey',
    hubSlug: 'rye-whiskey',
    subcategoryName: 'Rye Whiskey',
    name: 'Rye Whiskey',
    seo: {
      titleTag: 'Rye Whiskey — Allocated',
      h1: 'Rye Whiskey — Buy Allocated Spicy American Rye Online',
      metaDescription: 'Buy rye whiskey online — allocated straight rye with a spicier, drier profile than bourbon, essential in classic cocktails. Free on $300+.',
      transactionalCTA: 'Buy rye whiskey online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Rye whiskey is an American whiskey distilled from a mash bill of at least 51% rye grain, producing a spicier, drier, more peppery profile than corn-forward bourbon. Rye was the dominant American whiskey style before Prohibition and is the backbone of classic cocktails like the Manhattan, Sazerac, and the original Old Fashioned.',
      faqs: [
        { question: 'What is the difference between rye whiskey and bourbon?', answer: 'Bourbon must be at least 51% corn in the mash bill, giving it a sweeter profile. Rye whiskey must be at least 51% rye, producing a spicier, drier, more peppery character. Both must be aged in new charred oak barrels and produced in the United States.' },
      ],
    },
  },
  {
    categorySlug: 'other-whiskey',
    hubSlug: 'canadian-whisky',
    subcategoryName: 'Canadian Whisky',
    name: 'Canadian Whisky',
    seo: {
      titleTag: 'Canadian Whisky — Allocated',
      h1: 'Canadian Whisky — Buy Allocated Smooth Blended Whisky Online',
      metaDescription: 'Buy Canadian whisky online — allocated smooth, blended whisky aged a minimum of three years in small wood. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Canadian whisky online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Canadian whisky is typically a blend of a lighter base whisky and a small amount of more flavorful "flavoring whisky," often high in rye, producing a smoother, lighter style than most American whiskey. Canadian law requires a minimum of three years aging in small wood barrels but doesn\'t impose the strict mash-bill rules that define bourbon or rye.',
      faqs: [
        { question: 'Why is Canadian whisky often called "rye" even when it isn\'t mostly rye?', answer: 'Historically, Canadian distillers used rye grain to add flavor to an otherwise light base whisky, and the nickname "rye" stuck as a colloquial term for Canadian whisky generally — even though, unlike American rye whiskey, there\'s no legal requirement that Canadian whisky contain any specific percentage of rye grain.' },
      ],
    },
  },
  {
    categorySlug: 'other-whiskey',
    hubSlug: 'tennessee-whiskey',
    subcategoryName: 'Tennessee Whiskey',
    name: 'Tennessee Whiskey',
    seo: {
      titleTag: 'Tennessee Whiskey — Allocated',
      h1: 'Tennessee Whiskey — Buy Allocated Charcoal-Mellowed Whiskey Online',
      metaDescription: 'Buy Tennessee whiskey online — allocated whiskey charcoal-filtered through the Lincoln County Process before barreling. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Tennessee whiskey online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Tennessee whiskey meets all the legal requirements of bourbon — at least 51% corn, aged in new charred oak — but adds one additional step: the Lincoln County Process, filtering the spirit through a thick bed of sugar maple charcoal before it goes into the barrel. That extra filtration mellows the whiskey and is the legal distinction that keeps it from being labeled bourbon, even though it otherwise qualifies.',
      faqs: [
        { question: 'Is Tennessee whiskey the same as bourbon?', answer: 'Tennessee whiskey meets every legal requirement for bourbon, but producers additionally filter it through sugar maple charcoal (the Lincoln County Process) before barreling. That extra step is what distinguishes it on the label, even though a Tennessee whiskey could technically be called bourbon if the producer chose to.' },
      ],
    },
  },
  {
    categorySlug: 'other-whiskey',
    hubSlug: 'taiwanese-whisky',
    subcategoryName: 'Taiwanese Whisky',
    name: 'Taiwanese Whisky',
    seo: {
      titleTag: 'Taiwanese Whisky — Allocated',
      h1: 'Taiwanese Whisky — Buy Allocated Award-Winning Whisky Online',
      metaDescription: 'Buy Taiwanese whisky online — allocated whisky from Taiwan\'s tropical climate, which accelerates maturation dramatically. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Taiwanese whisky online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Taiwanese whisky is a remarkably young whisky-producing category — its best-known distillery only opened in 2005 — but Taiwan\'s hot, humid climate accelerates barrel maturation far faster than in Scotland, letting whisky develop remarkable depth in a fraction of the time. That speed, combined with meticulous production, has earned Taiwanese whisky major international awards in a very short span.',
      faqs: [
        { question: 'Why has Taiwanese whisky become so acclaimed so quickly?', answer: 'Taiwan\'s hot, humid climate dramatically accelerates barrel aging compared to Scotland\'s cool weather — whisky matures faster and loses more to evaporation, but develops complexity in years rather than decades. Combined with careful production, this let Taiwanese distilleries win major international awards within just a couple of decades of opening.' },
      ],
    },
  },
  // JAPANESE WHISKY
  {
    categorySlug: 'japanese-whisky',
    hubSlug: 'blended-japanese-whisky',
    subcategoryName: 'Blended Japanese Whisky',
    name: 'Blended Japanese Whisky',
    seo: {
      titleTag: 'Blended Japanese Whisky — Allocated',
      h1: 'Blended Japanese Whisky — Buy Allocated Bottles Online',
      metaDescription: 'Buy blended Japanese whisky online — allocated whisky combining malt and grain components for a refined house style. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy blended Japanese whisky online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Blended Japanese whisky combines malt and grain whiskies, often from multiple distilleries owned by the same producer, crafted by a master blender to achieve a specific, consistent house style. Japan\'s most globally recognized whisky names built their reputation on this blending tradition rather than single malt alone.',
      faqs: [
        { question: 'Is blended Japanese whisky lower quality than single malt?', answer: 'No — blended Japanese whisky is a distinct craft, not a lesser one. Master blenders combine malt and grain whiskies with deliberate skill to achieve balance and a signature house character that a single distillery\'s malt alone couldn\'t replicate.' },
      ],
    },
  },
  {
    categorySlug: 'japanese-whisky',
    hubSlug: 'single-malt-japanese-whisky',
    subcategoryName: 'Single Malt Japanese Whisky',
    name: 'Single Malt Japanese Whisky',
    seo: {
      titleTag: 'Single Malt Japanese Whisky — Allocated',
      h1: 'Single Malt Japanese Whisky — Buy Allocated Bottles Online',
      metaDescription: 'Buy single malt Japanese whisky online — allocated 100% malted barley whisky from a single distillery. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy single malt Japanese whisky online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Single malt Japanese whisky is made entirely from malted barley at a single distillery, following production principles adapted from Scotch but refined with distinctly Japanese precision — including maturation in native mizunara oak, which imparts unique notes of sandalwood and incense not found in whisky aged in American or European oak.',
      faqs: [
        { question: 'What makes single malt Japanese whisky different from single malt Scotch?', answer: 'Both follow similar core production methods — malted barley, pot still distillation, oak aging — but Japanese producers often use native mizunara oak casks, which impart distinctive sandalwood, incense, and coconut notes that Scotch, aged in American or European oak, doesn\'t typically show.' },
      ],
    },
  },
  {
    categorySlug: 'japanese-whisky',
    hubSlug: 'premium-japanese-whisky',
    subcategoryName: 'Premium Japanese Whisky',
    name: 'Premium Japanese Whisky',
    seo: {
      titleTag: 'Premium Japanese Whisky — Allocated',
      h1: 'Premium Japanese Whisky — Buy Allocated Rare Bottles Online',
      metaDescription: 'Buy premium Japanese whisky online — allocated top-tier, highly sought-after Japanese whisky releases. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy premium Japanese whisky online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Premium Japanese whisky covers the category\'s top-tier and most limited releases — often age-stated bottlings that have become increasingly scarce as global demand outpaced production capacity built decades earlier. Since the early 2000s, Japanese whisky\'s international acclaim has made these premium expressions some of the most allocated bottles in the world.',
      faqs: [
        { question: 'Why is premium Japanese whisky so hard to find?', answer: 'Japanese distilleries built their production capacity decades ago, based on demand levels at the time. When Japanese whisky won major international awards starting in the early 2000s, global demand surged far faster than distilleries could expand supply, making many age-stated and premium releases genuinely scarce.' },
      ],
    },
  },
  // SCOTCH (continued)
  {
    categorySlug: 'scotch-whisky',
    hubSlug: 'highland-scotch',
    subcategoryName: 'Highland Scotch',
    name: 'Highland Scotch',
    seo: {
      titleTag: 'Highland Scotch Whisky — Allocated',
      h1: 'Highland Scotch Whisky — Buy Allocated Bottles Online',
      metaDescription: 'Buy Highland scotch whisky online — allocated single malt from Scotland\'s largest, most diverse whisky region. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Highland scotch online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'The Highlands are Scotland\'s largest whisky region by geography, spanning the mainland north and west of an imaginary line from Dundee to Greenock. That size means enormous stylistic range — from light and floral in the north to richer and occasionally lightly peated near the coast — making "Highland" more a geographic designation than a single flavor profile.',
      faqs: [
        { question: 'What does Highland Scotch taste like?', answer: 'There isn\'t one Highland flavor profile — the region is Scotland\'s largest and most geographically diverse, so Highland malts range from light and floral in the north to fuller-bodied and occasionally lightly peated near the coast. Any single Highland malt reflects its specific distillery and sub-region far more than the "Highland" label alone.' },
      ],
    },
  },
  {
    categorySlug: 'scotch-whisky',
    hubSlug: 'aged-premium-scotch',
    subcategoryName: 'Aged and Premium Scotch',
    name: 'Aged and Premium Scotch',
    seo: {
      titleTag: 'Aged & Premium Scotch — Allocated',
      h1: 'Aged & Premium Scotch Whisky — Buy Allocated Bottles Online',
      metaDescription: 'Buy aged and premium scotch online — allocated extra-aged and rare Scotch whisky from across Scotland\'s regions. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy aged and premium scotch online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Aged and premium Scotch spans any region — Speyside, Islay, Highland, or beyond — united by extended cask maturation and greater rarity rather than a single style. Extra time in oak deepens color and complexity, and combined with limited production, is what pushes a bottle from an everyday dram into premium, allocated territory.',
      faqs: [
        { question: 'Does a higher age statement always mean better Scotch?', answer: 'Not automatically — age brings more time for oak influence and complexity, but a whisky can also be over-oaked if left too long, and plenty of exceptional Scotch carries no age statement at all. Age is one meaningful factor among several, including cask type and the spirit\'s own character, that determine quality.' },
      ],
    },
  },
  // IRISH WHISKEY (continued)
  {
    categorySlug: 'irish-whiskey',
    hubSlug: 'blended-irish-whiskey',
    subcategoryName: 'Blended Irish Whiskey',
    name: 'Blended Irish Whiskey',
    seo: {
      titleTag: 'Blended Irish Whiskey — Allocated',
      h1: 'Blended Irish Whiskey — Buy Allocated Bottles Online',
      metaDescription: 'Buy blended Irish whiskey online — allocated smooth, triple-distilled blends combining pot still, malt, and grain whiskey. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy blended Irish whiskey online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Blended Irish whiskey combines pot still, malt, and/or grain whiskeys, typically triple-distilled for an especially smooth, approachable style. It\'s the most widely consumed style of Irish whiskey worldwide.',
      faqs: [
        { question: 'Why is Irish whiskey usually described as smoother than Scotch?', answer: 'Most Irish whiskey, including the popular blended style, is triple-distilled rather than the double distillation typical of Scotch, which strips out more congeners and produces a lighter, smoother spirit. Not all Irish whiskey follows this exactly, but it\'s the tradition most associated with the category\'s reputation for approachability.' },
      ],
    },
  },
  {
    categorySlug: 'irish-whiskey',
    hubSlug: 'premium-irish-whiskey',
    subcategoryName: 'Premium Irish Whiskey',
    name: 'Premium Irish Whiskey',
    seo: {
      titleTag: 'Premium Irish Whiskey — Allocated',
      h1: 'Premium Irish Whiskey — Buy Allocated Rare Bottles Online',
      metaDescription: 'Buy premium Irish whiskey online — allocated extra-aged and limited-release Irish whiskey. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy premium Irish whiskey online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Premium Irish whiskey covers the category\'s extra-aged, single-cask, and limited-release bottlings — a fast-growing tier as Irish whiskey\'s global popularity has driven distilleries to expand beyond their traditional easy-drinking blends into genuinely collectible, allocated expressions.',
      faqs: [
        { question: 'What makes an Irish whiskey "premium" rather than a standard blend?', answer: 'Premium Irish whiskey is typically distinguished by extended cask aging, single-cask or small-batch bottling, and genuine scarcity — as opposed to the larger-volume blended whiskeys most people associate with the category. It reflects Irish whiskey\'s recent expansion into more serious, collector-oriented releases.' },
      ],
    },
  },
  {
    categorySlug: 'irish-whiskey',
    hubSlug: 'irish-cream-whiskey',
    subcategoryName: 'Irish Cream Whiskey',
    name: 'Irish Cream Whiskey',
    seo: {
      titleTag: 'Irish Cream Whiskey — Allocated',
      h1: 'Irish Cream Whiskey — Buy Allocated Whiskey-Based Cream Liqueur Online',
      metaDescription: 'Buy Irish cream whiskey online — allocated cream liqueur built on a genuine Irish whiskey base. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy Irish cream whiskey online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Irish cream whiskey is a cream liqueur built specifically on an Irish whiskey base, blended with fresh dairy cream, sugar, and flavoring, and stabilized so the cream won\'t curdle against the alcohol. It\'s shelved here as part of the whiskey range because the spirit underneath — not the cream — is what defines it.',
      faqs: [
        { question: 'Is Irish cream whiskey the same as a regular cream liqueur?', answer: 'The production method is the same — cream, sugar, and flavoring blended with a spirit base — but Irish cream whiskey specifically uses Irish whiskey as that base, whereas cream liqueurs generally can be built on other spirits too. The whiskey base is what gives it its character and its place in the Irish whiskey category.' },
      ],
    },
  },
  // ARTISANAL GIN (continued)
  {
    categorySlug: 'artisanal-gin',
    hubSlug: 'botanical-gin',
    subcategoryName: 'Botanical Gin',
    name: 'Botanical Gin',
    seo: {
      titleTag: 'Botanical Gin — Allocated',
      h1: 'Botanical Gin — Buy Allocated Contemporary Gin Online',
      metaDescription: 'Buy botanical gin online — allocated contemporary gin built on an adventurous, wide-ranging botanical palette beyond classic juniper. Free on $300+.',
      transactionalCTA: 'Buy botanical gin online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Botanical gin is the modern, contemporary style built on a wider and more adventurous botanical palette than classic London Dry — often dialing back juniper\'s dominance in favor of florals, fruit, and unusual local ingredients. It\'s the category responsible for gin\'s recent resurgence among drinkers who found traditional styles too piney.',
      faqs: [
        { question: 'How is botanical gin different from London Dry gin?', answer: 'London Dry is defined by a strict production method and a juniper-forward flavor profile. Botanical gin is a looser, more contemporary style that widens the botanical mix — often reducing juniper\'s dominance in favor of florals, citrus, and unusual regional ingredients — without following London Dry\'s specific legal production rules.' },
      ],
    },
  },
  {
    categorySlug: 'artisanal-gin',
    hubSlug: 'craft-gin',
    subcategoryName: 'Craft Gin',
    name: 'Craft Gin',
    seo: {
      titleTag: 'Craft Gin — Allocated',
      h1: 'Craft Gin — Buy Allocated Small-Batch Gin Online',
      metaDescription: 'Buy craft gin online — allocated small-batch gin from independent distillers with distinctive local botanicals. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy craft gin online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Craft gin comes from smaller, independent distillers who emphasize distinctive, often locally sourced botanicals and hands-on production over the scale of major gin houses. The result is more experimentation and regional character than the more standardized profiles typical of large commercial gin brands.',
      faqs: [
        { question: 'What makes a gin "craft" instead of just another brand?', answer: 'Craft gin generally comes from a smaller, independent distillery that emphasizes distinctive, often locally sourced botanicals and hands-on production methods, rather than the scale and standardization of major gin houses. It tends to prioritize a distinctive regional character over a widely recognizable "safe" profile.' },
      ],
    },
  },
  // BOURBON (continued)
  {
    categorySlug: 'bourbon-whiskey',
    hubSlug: 'premium-bourbon',
    subcategoryName: 'Premium Bourbon',
    name: 'Premium Bourbon',
    seo: {
      titleTag: 'Premium Bourbon — Allocated',
      h1: 'Premium Bourbon — Buy Allocated Rare Bourbon Online',
      metaDescription: 'Buy premium bourbon online — allocated extra-aged and highly sought-after bourbon releases. Direct allocations. Free on $300+.',
      transactionalCTA: 'Buy premium bourbon online — direct allocations shipped to every state with compliant direct-to-consumer alcohol shipping laws.',
      definitionHook: 'Premium bourbon covers the category\'s most sought-after tier — extra-aged, higher-proof, or extremely limited releases that command significant demand well beyond the everyday bourbon shelf. Scarcity, allocation, and secondary-market attention are as much a part of the premium bourbon story as the whiskey itself.',
      faqs: [
        { question: 'What separates premium bourbon from standard bourbon?', answer: 'Premium bourbon is typically distinguished by extended barrel aging, higher proof (including barrel-proof or cask-strength bottlings), and genuine scarcity — often released in limited annual batches. The intense demand this creates is part of why premium bourbon commands such attention beyond everyday releases.' },
      ],
    },
  },
  // NON-ALCOHOLIC WINE
  {
    categorySlug: 'na-wine',
    hubSlug: 'non-alcoholic-red-wine',
    subcategoryName: 'Non-Alcoholic Red Wine',
    name: 'Non-Alcoholic Red Wine',
    seo: {
      titleTag: 'Non-Alcoholic Red Wine — Zero-Proof',
      h1: 'Non-Alcoholic Red Wine — Buy De-Alcoholized Red Wine Online',
      metaDescription: 'Buy non-alcoholic red wine online — de-alcoholized red wine keeping real tannin and dark fruit character. Shipped nationwide, no age restrictions.',
      transactionalCTA: 'Buy non-alcoholic red wine online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic red wine starts as real red wine, fully fermented on the skins for color and tannin, then has the alcohol removed — typically through vacuum distillation or reverse osmosis, both of which pull out ethanol at low temperature to preserve as much of the wine\'s original flavor and aroma as possible.',
      faqs: [
        { question: 'How is the alcohol removed from non-alcoholic wine?', answer: 'Most producers use vacuum distillation or reverse osmosis, both of which remove alcohol at low temperatures to protect the wine\'s delicate flavor and aroma compounds — a gentler process than simply boiling off the alcohol, which would also cook away much of what makes the wine taste like wine.' },
      ],
    },
  },
  {
    categorySlug: 'na-wine',
    hubSlug: 'non-alcoholic-white-wine',
    subcategoryName: 'Non-Alcoholic White Wine',
    name: 'Non-Alcoholic White Wine',
    seo: {
      titleTag: 'Non-Alcoholic White Wine — Zero-Proof',
      h1: 'Non-Alcoholic White Wine — Buy De-Alcoholized White Wine Online',
      metaDescription: 'Buy non-alcoholic white wine online — de-alcoholized white wine keeping delicate aromatics and crisp character. Shipped nationwide, no age restrictions.',
      transactionalCTA: 'Buy non-alcoholic white wine online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic white wine is made the same way as its red counterpart — fully fermented as a real wine, then dealcoholized through vacuum distillation or reverse osmosis. Because white wine relies more on delicate aromatics than tannin, producers pay especially close attention to preserving those aromas through the alcohol-removal process.',
      faqs: [
        { question: 'Does non-alcoholic wine taste like real wine?', answer: 'Quality has improved significantly as producers refine gentler alcohol-removal methods, but most non-alcoholic wine still tastes noticeably different from its alcoholic counterpart — alcohol carries body, texture, and some flavor compounds that are difficult to fully replace once removed.' },
      ],
    },
  },
  {
    categorySlug: 'na-wine',
    hubSlug: 'non-alcoholic-rose-wine',
    subcategoryName: 'Non-Alcoholic Rosé Wine',
    name: 'Non-Alcoholic Rosé Wine',
    seo: {
      titleTag: 'Non-Alcoholic Rosé — Zero-Proof',
      h1: 'Non-Alcoholic Rosé Wine — Buy De-Alcoholized Rosé Online',
      metaDescription: 'Buy non-alcoholic rosé wine online — de-alcoholized rosé keeping light, fruity, easy-drinking character. Shipped nationwide, no age restrictions.',
      transactionalCTA: 'Buy non-alcoholic rosé online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic rosé follows the same brief skin-contact winemaking as regular rosé, then has the alcohol removed through vacuum distillation or reverse osmosis. The result aims to keep rosé\'s light, fruity, easy-drinking character intact at under 0.5% ABV.',
      faqs: [
        { question: 'Is non-alcoholic rosé completely alcohol-free?', answer: 'In the US, wine labeled "non-alcoholic" must contain less than 0.5% ABV — a trace amount can remain even after dealcoholization, similar to what naturally occurs in some fruit juices and breads. It is not the same as a guaranteed 0.0%, so anyone avoiding alcohol entirely should check the specific brand\'s stated ABV.' },
      ],
    },
  },
  // NON-ALCOHOLIC CHAMPAGNE & SPARKLING
  {
    categorySlug: 'na-champagne-sparkling',
    hubSlug: 'non-alcoholic-sparkling-wine',
    subcategoryName: 'Non-Alcoholic Sparkling Wine',
    name: 'Non-Alcoholic Sparkling Wine',
    seo: {
      titleTag: 'Non-Alcoholic Sparkling Wine — Zero-Proof',
      h1: 'Non-Alcoholic Sparkling Wine — Buy Zero-Proof Bubbles Online',
      metaDescription: 'Buy non-alcoholic sparkling wine online — de-alcoholized sparkling wine with real effervescence for any toast. Shipped nationwide, no age restrictions.',
      transactionalCTA: 'Buy non-alcoholic sparkling wine online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic sparkling wine is made by fermenting and carbonating a base wine as usual, then removing the alcohol through vacuum distillation or reverse osmosis and reintroducing carbonation to restore the bubbles lost in processing. It aims to recreate the toast-worthy occasion of Champagne without the alcohol.',
      faqs: [
        { question: 'Can non-alcoholic sparkling wine be called Champagne?', answer: 'No — Champagne is a protected name reserved for sparkling wine made with alcohol in the Champagne region of France under strict regional rules. Non-alcoholic versions are labeled "sparkling wine" or similar, regardless of how closely they\'re styled after Champagne.' },
      ],
    },
  },
  {
    categorySlug: 'na-champagne-sparkling',
    hubSlug: 'non-alcoholic-sparkling-rose',
    subcategoryName: 'Non-Alcoholic Sparkling Rosé',
    name: 'Non-Alcoholic Sparkling Rosé',
    seo: {
      titleTag: 'Non-Alcoholic Sparkling Rosé — Zero-Proof',
      h1: 'Non-Alcoholic Sparkling Rosé — Buy Zero-Proof Pink Bubbles Online',
      metaDescription: 'Buy non-alcoholic sparkling rosé online — de-alcoholized pink sparkling wine with bright, fruity character. Shipped nationwide, no age restrictions.',
      transactionalCTA: 'Buy non-alcoholic sparkling rosé online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic sparkling rosé combines brief skin-contact winemaking with dealcoholization and re-carbonation, aiming for the same pale pink color and bright, fruity character as its alcoholic counterpart at under 0.5% ABV.',
      faqs: [
        { question: 'Why does non-alcoholic sparkling rosé need carbonation added back?', answer: 'The vacuum distillation and reverse osmosis processes used to remove alcohol also strip out much of the wine\'s natural carbonation. Producers reintroduce carbonation afterward — similar to how sparkling water is carbonated — to restore the bubbles that make it feel like a proper sparkling wine.' },
      ],
    },
  },
  {
    categorySlug: 'na-champagne-sparkling',
    hubSlug: 'sparkling-grape-juice',
    subcategoryName: 'Sparkling Grape Juice',
    name: 'Sparkling Grape Juice',
    seo: {
      titleTag: 'Sparkling Grape Juice — Zero-Proof',
      h1: 'Sparkling Grape Juice — Buy Zero-Proof Celebratory Bubbles Online',
      metaDescription: 'Buy sparkling grape juice online — carbonated, unfermented grape juice for any celebration. Shipped nationwide, no age restrictions apply.',
      transactionalCTA: 'Buy sparkling grape juice online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Sparkling grape juice is unfermented grape juice that has been carbonated, giving it the bubbles of a sparkling wine without any alcohol at any point in its production — unlike de-alcoholized sparkling wine, it was never fermented in the first place. It\'s a long-standing celebratory alternative, familiar from holiday tables well before the modern non-alcoholic wine category existed.',
      faqs: [
        { question: 'Is sparkling grape juice the same as non-alcoholic sparkling wine?', answer: 'No — sparkling grape juice is simply carbonated grape juice that was never fermented, so it tends to taste sweeter and simpler than wine. Non-alcoholic sparkling wine is actually fermented like real wine first, then has the alcohol removed afterward, giving it more wine-like complexity and dryness.' },
      ],
    },
  },
  // NON-ALCOHOLIC SPIRITS
  {
    categorySlug: 'na-spirits',
    hubSlug: 'non-alcoholic-whiskey-alternative',
    subcategoryName: 'Non-Alcoholic Whiskey Alternative',
    name: 'Non-Alcoholic Whiskey Alternative',
    seo: {
      titleTag: 'Non-Alcoholic Whiskey Alternative',
      h1: 'Non-Alcoholic Whiskey Alternative — Buy Zero-Proof Online',
      metaDescription: 'Buy non-alcoholic whiskey alternative online — botanical, oak-flavored zero-proof spirit built to recreate whiskey\'s warmth. Shipped nationwide.',
      transactionalCTA: 'Buy non-alcoholic whiskey alternative online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic whiskey alternatives aren\'t whiskey with the alcohol removed — they\'re built from scratch using botanical extracts, oak-derived flavoring, and spices blended to recreate whiskey\'s warmth, smokiness, and body without any distillation or alcohol at all.',
      faqs: [
        { question: 'How do non-alcoholic whiskey alternatives mimic the "burn" of real whiskey?', answer: 'Producers use ingredients like capsaicin (the compound behind chili heat) or peppery botanicals in careful, small amounts to recreate the warming sensation alcohol normally provides, alongside oak extracts and spices that echo whiskey\'s aroma and flavor.' },
      ],
    },
  },
  {
    categorySlug: 'na-spirits',
    hubSlug: 'non-alcoholic-gin-alternative',
    subcategoryName: 'Non-Alcoholic Gin Alternative',
    name: 'Non-Alcoholic Gin Alternative',
    seo: {
      titleTag: 'Non-Alcoholic Gin Alternative',
      h1: 'Non-Alcoholic Gin Alternative — Buy Zero-Proof Online',
      metaDescription: 'Buy non-alcoholic gin alternative online — juniper and botanical-forward zero-proof spirit for a G&T without the alcohol. Shipped nationwide.',
      transactionalCTA: 'Buy non-alcoholic gin alternative online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic gin alternatives are built around the same botanicals that define real gin — juniper, citrus peel, coriander, and other aromatics — extracted and blended into a non-alcoholic base rather than distilled into a spirit. The goal is to recreate gin\'s aromatic complexity so it still works in a G&T or a gin-based mocktail.',
      faqs: [
        { question: 'Do non-alcoholic gin alternatives use real juniper?', answer: 'Most reputable brands do use real juniper and other traditional gin botanicals, extracted through infusion or distillation of the botanicals themselves (without alcohol) rather than synthetic flavoring — the goal is genuine aromatic complexity, not just a juniper-scented syrup.' },
      ],
    },
  },
  {
    categorySlug: 'na-spirits',
    hubSlug: 'non-alcoholic-tequila-alternative',
    subcategoryName: 'Non-Alcoholic Tequila Alternative',
    name: 'Non-Alcoholic Tequila Alternative',
    seo: {
      titleTag: 'Non-Alcoholic Tequila Alternative',
      h1: 'Non-Alcoholic Tequila Alternative — Buy Zero-Proof Online',
      metaDescription: 'Buy non-alcoholic tequila alternative online — peppery, agave-inspired zero-proof spirit for margaritas without the alcohol. Shipped nationwide.',
      transactionalCTA: 'Buy non-alcoholic tequila alternative online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic tequila alternatives aim to recreate tequila\'s vegetal, peppery agave character using plant extracts and botanicals rather than actual distilled agave spirit — since real tequila must legally be made from blue Weber agave and contain alcohol, these are built to evoke the flavor rather than replicate the production process.',
      faqs: [
        { question: 'Are non-alcoholic tequila alternatives made from real agave?', answer: 'Some incorporate real agave extract for authenticity, but since the product must remain non-alcoholic, none of them use the fermentation and distillation process that legally defines tequila. They\'re built primarily from botanical extracts designed to evoke tequila\'s peppery, vegetal character.' },
      ],
    },
  },
  {
    categorySlug: 'na-spirits',
    hubSlug: 'non-alcoholic-botanical-spirit',
    subcategoryName: 'Non-Alcoholic Botanical Spirit',
    name: 'Non-Alcoholic Botanical Spirit',
    seo: {
      titleTag: 'Non-Alcoholic Botanical Spirit',
      h1: 'Non-Alcoholic Botanical Spirit — Buy Zero-Proof Online',
      metaDescription: 'Buy non-alcoholic botanical spirit online — original-recipe zero-proof spirit built from herbs and botanicals. Shipped nationwide, no age restrictions.',
      transactionalCTA: 'Buy non-alcoholic botanical spirit online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic botanical spirits don\'t imitate any single traditional spirit — instead they build their own flavor identity from a distinct blend of herbs, spices, and botanicals, distilled or extracted without alcohol. This original-recipe approach helped popularize the category, rather than every non-alcoholic spirit being defined as an "alternative" to something alcoholic.',
      faqs: [
        { question: 'What makes a botanical spirit different from a whiskey or gin alternative?', answer: 'Whiskey and gin alternatives are built to evoke a specific existing spirit\'s character. A botanical spirit instead creates its own original flavor profile from a distinctive blend of herbs and botanicals, without trying to mimic any particular alcoholic category.' },
      ],
    },
  },
  // NON-ALCOHOLIC BEER & CIDER
  {
    categorySlug: 'na-beer-cider',
    hubSlug: 'non-alcoholic-beer',
    subcategoryName: 'Non-Alcoholic Beer',
    name: 'Non-Alcoholic Beer',
    seo: {
      titleTag: 'Non-Alcoholic Beer — Zero-Proof',
      h1: 'Non-Alcoholic Beer — Buy Zero-Proof Craft Beer Online',
      metaDescription: 'Buy non-alcoholic beer online — craft-brewed zero-proof lager, IPA, and stout. Shipped nationwide, no age restrictions apply.',
      transactionalCTA: 'Buy non-alcoholic beer online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic beer is brewed largely the same way as regular beer, then has its alcohol removed — through vacuum distillation, reverse osmosis, or by halting fermentation early — to reach under 0.5% ABV in the US. Modern brewing techniques have dramatically closed the flavor gap with full-strength beer compared to a decade ago.',
      faqs: [
        { question: 'Is non-alcoholic beer completely alcohol-free?', answer: 'In the US, beer labeled "non-alcoholic" must contain less than 0.5% ABV, which can include a trace amount rather than an absolute zero. Brands labeled specifically "alcohol-free" or "0.0%" typically use more rigorous removal processes to get closer to a true zero, so it\'s worth checking the specific bottle if avoiding alcohol entirely matters.' },
      ],
    },
  },
  {
    categorySlug: 'na-beer-cider',
    hubSlug: 'non-alcoholic-cider',
    subcategoryName: 'Non-Alcoholic Cider',
    name: 'Non-Alcoholic Cider',
    seo: {
      titleTag: 'Non-Alcoholic Cider — Zero-Proof',
      h1: 'Non-Alcoholic Cider — Buy Zero-Proof Apple Cider Online',
      metaDescription: 'Buy non-alcoholic cider online — fermented then de-alcoholized apple cider with real tart, fruity character. Shipped nationwide, no age restrictions.',
      transactionalCTA: 'Buy non-alcoholic cider online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic cider is made by fermenting apples into cider as usual, then removing the alcohol — typically through vacuum distillation — to preserve the fruit\'s natural tartness and apple character at under 0.5% ABV.',
      faqs: [
        { question: 'Does non-alcoholic cider taste like apple juice?', answer: 'Not quite — because it starts as fermented cider before the alcohol is removed, it retains more of cider\'s tart, slightly funky, fermented character than apple juice, which is never fermented at all.' },
      ],
    },
  },
  // NON-ALCOHOLIC RTD COCKTAILS
  {
    categorySlug: 'na-rtd-cocktails',
    hubSlug: 'non-alcoholic-cocktails',
    subcategoryName: 'Non-Alcoholic Cocktails',
    name: 'Non-Alcoholic Cocktails',
    seo: {
      titleTag: 'Non-Alcoholic Cocktails — Zero-Proof',
      h1: 'Non-Alcoholic Cocktails — Buy Zero-Proof Mocktails Online',
      metaDescription: 'Buy non-alcoholic cocktails online — pre-mixed mocktails built from real juices, bitters, and botanicals. Shipped nationwide, no age restrictions.',
      transactionalCTA: 'Buy non-alcoholic cocktails online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic cocktails, or mocktails, are pre-mixed blends of juices, bitters, syrups, and botanicals designed to deliver the same balance and complexity as a classic cocktail recipe, just without any spirit base. Canned and bottled versions bring that bar-quality balance to a ready-to-drink format.',
      faqs: [
        { question: 'What is the difference between a mocktail and a non-alcoholic spirit-based drink?', answer: 'A mocktail is typically built from juices, syrups, and bitters alone, without any spirit-style base at all. A drink made with a non-alcoholic spirit alternative swaps in that alcohol-free "spirit" for one of a mocktail\'s components, aiming to more closely replicate the structure of a real cocktail.' },
      ],
    },
  },
  {
    categorySlug: 'na-rtd-cocktails',
    hubSlug: 'non-alcoholic-spritz',
    subcategoryName: 'Non-Alcoholic Spritz',
    name: 'Non-Alcoholic Spritz',
    seo: {
      titleTag: 'Non-Alcoholic Spritz — Zero-Proof',
      h1: 'Non-Alcoholic Spritz — Buy Zero-Proof Bitter-Orange Spritz Online',
      metaDescription: 'Buy non-alcoholic spritz online — bright, bitter-orange zero-proof spritz built for easy sipping. Shipped nationwide, no age restrictions apply.',
      transactionalCTA: 'Buy non-alcoholic spritz online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'A non-alcoholic spritz recreates the bright, bitter-orange, effervescent profile of an Aperol Spritz or similar drink using non-alcoholic aperitif alternatives and sparkling wine or soda, built for the same easy, low-commitment sipping occasion as the original.',
      faqs: [
        { question: 'What gives a non-alcoholic spritz its bitter orange flavor?', answer: 'Most non-alcoholic spritz products use botanical extracts and bitter orange peel to recreate the flavor that alcoholic aperitivos get from their own proprietary bittering ingredients, combined with sparkling wine or soda for the characteristic effervescence.' },
      ],
    },
  },
  {
    categorySlug: 'na-rtd-cocktails',
    hubSlug: 'non-alcoholic-canned-cocktails',
    subcategoryName: 'Non-Alcoholic Canned Cocktails',
    name: 'Non-Alcoholic Canned Cocktails',
    seo: {
      titleTag: 'Non-Alcoholic Canned Cocktails',
      h1: 'Non-Alcoholic Canned Cocktails — Buy Zero-Proof RTD Online',
      metaDescription: 'Buy non-alcoholic canned cocktails online — ready-to-drink, zero-proof cocktails built from real juices and botanicals. Shipped nationwide.',
      transactionalCTA: 'Buy non-alcoholic canned cocktails online — shipped nationwide with no age verification or alcohol shipping restrictions required.',
      definitionHook: 'Non-alcoholic canned cocktails apply the ready-to-drink format popularized by alcoholic RTD cocktails to alcohol-free recipes — pre-batched, carbonated or still, and packaged for the same grab-and-go convenience, built from juices, botanicals, and non-alcoholic spirit alternatives rather than real spirits.',
      faqs: [
        { question: 'Are non-alcoholic canned cocktails just flavored sparkling water?', answer: 'The better ones aren\'t — quality non-alcoholic canned cocktails are built from real juices, bitters, and botanical extracts formulated to recreate a specific cocktail\'s balance, similar to how a mocktail is built, rather than simply flavoring sparkling water.' },
      ],
    },
  },
];
