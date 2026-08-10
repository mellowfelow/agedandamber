import React from 'react';
import { SITE, BRAND, CONTACT } from '../config/site';
import { Wine, Award, ShieldCheck, MapPin, Calendar, Clock, Flame } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest block">
          Napa Valley Curated Spirits House
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-amber-100 leading-tight">
          The Story of Aged And Amber
        </h1>
        <p className="text-base text-amber-200/80 leading-relaxed font-sans">
          Careful sourcing, verified authenticity, and direct-to-consumer spirits allocations from our Napa Valley cellar.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
        <img
          src="/images/hero/hero-9.webp"
          alt="Aged And Amber Napa Valley spirits cellar with rows of bottles resting in a climate-controlled rack"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-stone-950/80 backdrop-blur-md border border-stone-800 text-amber-100">
          <p className="font-serif font-bold text-lg text-[#D4AF37]">Napa Valley Spirits Cellar</p>
          <p className="text-xs text-amber-300/80 mt-1">
            Climate-controlled storage for thousands of allocated, single barrel, and cask-finished bottles.
          </p>
        </div>
      </div>

      {/* Main Narrative — Entity Content */}
      <div className="prose prose-invert max-w-none text-amber-200/80 text-sm leading-relaxed space-y-6">
        <h2 className="text-2xl font-serif font-bold text-amber-100">
          Founded in Napa Valley: A Curator's Approach to Spirits
        </h2>
        <p>
          Established in {BRAND.foundingYear} in {BRAND.foundingLocation}, {SITE.name} was born out of a passion for allocated, single barrel, and wood-finished spirits that are difficult to find through ordinary retail channels. Rather than distilling spirits ourselves, we built direct sourcing relationships with distilleries, licensed distributors, and private cask programs so collectors can access verified, authentic bottles they would otherwise struggle to track down.
        </p>
        <p>
          Every bottle that reaches our Napa Valley cellar is sourced from legitimate distillery allocations or licensed distribution channels, checked for condition and authenticity, and stored under climate-controlled conditions until it ships.
        </p>

        <h2 className="text-2xl font-serif font-bold text-amber-100">
          The Philosophy: Provenance & Authenticity First
        </h2>
        <p>
          More than 60% to 70% of a fine spirit's final flavor and 100% of its natural amber color originates from the oak barrel it matured in — which is why cask type and wood provenance are central to how we describe and select every bottle we carry, from virgin American white oak to toasted French oak, Tawny Port pipes, and seasoned Spanish Oloroso sherry hogsheads.
        </p>
        <p>
          We prioritize distilleries and expressions that avoid heavy chill-filtration where possible, since chill-filtration is a cosmetic shortcut that can strip natural fatty acids, wood sugars, and aromatic oils that give whiskey its fuller mouthfeel and finish.
        </p>

        <h2 className="text-2xl font-serif font-bold text-amber-100">
          Direct Allocations & 21+ Compliant Shipping
        </h2>
        <p>
          Through our direct-to-consumer platform, enthusiasts across 45 US states gain access to single barrel picks, limited cask-strength releases, and allocated bottlings that are often difficult to find at retail.
        </p>
        <p>
          Every order shipped from our Napa Valley headquarters is packed in climate-controlled temperature shields and dispatched via compliant spirits carriers requiring mandatory adult signature and 21+ ID verification upon delivery.
        </p>
      </div>

      {/* Milestones Timeline */}
      <div className="space-y-6 pt-6 border-t border-amber-900/40">
        <h2 className="text-2xl font-serif font-bold text-amber-100 text-center">
          Key Company Milestones
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

      {/* Why Collectors Trust Us */}
      <div className="p-8 rounded-3xl bg-[#1C140E] border border-[#D4AF37]/30 text-center space-y-4">
        <Award className="w-10 h-10 text-[#D4AF37] mx-auto" />
        <h3 className="font-serif font-bold text-xl text-amber-100">
          Why Collectors Trust Aged And Amber
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-amber-200/90">
          {BRAND.differentiation.map((point, i) => (
            <span key={i} className="py-2 px-4 rounded-full bg-stone-900 border border-stone-800">
              {point}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
