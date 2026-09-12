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
];
