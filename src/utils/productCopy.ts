/**
 * The product templates were written for whiskey and then reused across
 * the whole catalog, so a 12-pack of lager showed "Cask Wood Finish",
 * "Distillery Location", and "USD per 750ml bottle". These helpers make
 * the labels and the strength line fit the actual product type.
 */

type LabelSet = {
  /** Label for the `caskType` field (grain bill / botanicals / grape / method). */
  spec: string;
  /** Label for the `distilleryLocation` field. */
  origin: string;
  /** Show "N proof" alongside "% ABV" (a spirits convention). */
  showProof: boolean;
  /** Word for the container in the price line ("bottle", "pack", "can"). */
  unitNoun: string;
};

const WHISKEY = new Set(['bourbon-whiskey', 'scotch-whisky', 'irish-whiskey', 'japanese-whisky', 'other-whiskey']);
const CLEAR_AGAVE_RUM = new Set(['craft-vodka', 'tequila-mezcal', 'artisanal-gin', 'aged-dark-rum', 'cognac-brandy']);
const WINE = new Set(['fine-wine', 'champagne-sparkling', 'na-wine', 'na-champagne-sparkling']);
const BEER = new Set(['beer', 'cider', 'na-beer-cider']);
const NA_SPIRIT = new Set(['na-spirits', 'na-rtd-cocktails', 'rtd-liqueurs']);

export function productLabels(category: string): LabelSet {
  if (WHISKEY.has(category)) {
    return { spec: 'Cask & Wood', origin: 'Distillery', showProof: true, unitNoun: 'bottle' };
  }
  if (CLEAR_AGAVE_RUM.has(category)) {
    return { spec: 'Base & Character', origin: 'Distillery', showProof: true, unitNoun: 'bottle' };
  }
  if (WINE.has(category)) {
    return { spec: 'Grape & Style', origin: 'Winery / Region', showProof: false, unitNoun: 'bottle' };
  }
  if (BEER.has(category)) {
    return { spec: 'Malt, Grain & Hops', origin: 'Brewery', showProof: false, unitNoun: 'pack' };
  }
  if (NA_SPIRIT.has(category)) {
    return { spec: 'Base & Botanicals', origin: 'Producer', showProof: false, unitNoun: 'bottle' };
  }
  return { spec: 'Details', origin: 'Producer', showProof: false, unitNoun: 'item' };
}

/** "40% ABV · 80 proof" for spirits, "4.5% ABV" for beer, "Alcohol-free" for 0-proof. */
export function strengthLine(proof: number, category: string): string {
  if (!proof || proof <= 0) return 'Alcohol-free';
  const abv = proof / 2;
  const abvStr = `${Number.isInteger(abv) ? abv : abv.toFixed(1)}% ABV`;
  return productLabels(category).showProof ? `${abvStr} · ${proof} proof` : abvStr;
}
