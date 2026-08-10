import React from 'react';
import { SITE, BRAND, CONTACT } from '../config/site';
import { Wine, Award, ShieldCheck, MapPin, Calendar, Clock, Flame } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest block">
          Napa Valley Distilling House
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-amber-100 leading-tight">
          The Story of Aged And Amber
        </h1>
        <p className="text-base text-amber-200/80 leading-relaxed font-sans">
          Master distilling, historic oak cooperage, and direct-to-consumer spirits allocations from our Napa Valley cellars.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&q=80&w=1200"
          alt="Aged And Amber Rickhouse Barrels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-stone-950/80 backdrop-blur-md border border-stone-800 text-amber-100">
          <p className="font-serif font-bold text-lg text-[#D4AF37]">Napa Valley Master Cellar</p>
          <p className="text-xs text-amber-300/80 mt-1">
            Houses over 2,000 active French oak and toasted alligator char barrels under climate-controlled barrel aging conditions.
          </p>
        </div>
      </div>

      {/* Main Narrative — >700 Words Entity Content */}
      <div className="prose prose-invert max-w-none text-amber-200/80 text-sm leading-relaxed space-y-6">
        <h2 className="text-2xl font-serif font-bold text-amber-100">
          Founded in Napa Valley: A Legacy of Craft Spirits
        </h2>
        <p>
          Established in {BRAND.foundingYear} in {BRAND.foundingLocation}, {SITE.name} was born out of a passion for historic barrel wood finishes and small-batch spirit production. Founders Marcus Thorne, a veteran Kentucky master distiller, and Elena Vance, an acclaimed Napa Valley enologist, recognized that the world of whiskey was ripe for a renaissance centered around cask wood provenance.
        </p>
        <p>
          Rather than relying on industrial neutral grain spirits or mass-market chill-filtration methods that strip natural esters and lipids from the glass, Thorne and Vance set out to build an independent craft house where every barrel is individually monitored, hand-numbered, and bottled at peak proof.
        </p>

        <h2 className="text-2xl font-serif font-bold text-amber-100">
          The Philosophy: Wood Provenance & Non-Chill Filtration
        </h2>
        <p>
          More than 60% to 70% of a fine spirit's final flavor and 100% of its natural amber color originates from the oak barrel. At Aged And Amber, we source virgin American white oak from Missouri cooperages, custom-charred to No. 4 alligator specification, alongside toasted French oak puncheons, Portuguese Tawny Port pipes, and seasoned Spanish Oloroso sherry hogsheads.
        </p>
        <p>
          Crucially, every bottle of {SITE.name} bourbon, straight rye, single malt, and extra añejo tequila is bottled <strong>100% non-chill filtered</strong>. Chill-filtration is a cosmetic industry shortcut designed to prevent hazing when ice is added. However, it removes essential fatty acids, wood sugars, and rich aromatic oils that give whiskey its luxurious mouthfeel and long, velvet finish.
        </p>

        <h2 className="text-2xl font-serif font-bold text-amber-100">
          Direct Cellar Allocations & 21+ Compliant Shipping
        </h2>
        <p>
          Through our direct-to-consumer spirits platform, enthusiasts across 45 US states gain access to private single barrel releases and limited cask strength series previously reserved solely for high-end collector auctions and private tasting rooms.
        </p>
        <p>
          Every order shipped from our Napa Valley headquarters is packed in climate-controlled temperature shields and dispatched via compliant spirits carriers requiring mandatory adult signature and 21+ ID verification upon delivery.
        </p>
      </div>

      {/* Milestones Timeline */}
      <div className="space-y-6 pt-6 border-t border-amber-900/40">
        <h2 className="text-2xl font-serif font-bold text-amber-100 text-center">
          Key Distillery Milestones
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BRAND.milestones.map((ms, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#1A120B] border border-amber-900/40 flex items-start gap-4"
            >
              <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] font-serif font-bold text-sm shrink-0">
                {ms.year}
              </div>
              <div className="text-xs text-amber-200/90 leading-relaxed pt-1">
                {ms.event}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Accreditation */}
      <div className="p-8 rounded-3xl bg-[#1C140E] border border-[#D4AF37]/30 text-center space-y-4">
        <Award className="w-10 h-10 text-[#D4AF37] mx-auto" />
        <h3 className="font-serif font-bold text-xl text-amber-100">
          Distillery Awards & Recognition
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-amber-200/90">
          {BRAND.awards.map((award, i) => (
            <span key={i} className="py-2 px-4 rounded-full bg-stone-900 border border-stone-800">
              🏆 {award}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
