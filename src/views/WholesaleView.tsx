'use client';

import React, { useRef, useState } from 'react';
import { SITE, FORMS } from '../config/site';
import { Building2, ShieldCheck, Award, ArrowRight, CheckCircle2, Check, X } from 'lucide-react';

type TierId = 'bar' | 'barrel' | 'collector';

interface Tier {
  id: TierId;
  icon: typeof Building2;
  title: string;
  blurb: string;
  bullets: string[];
  popular?: boolean;
  /** Values this tier pre-selects in the inquiry form. */
  licenseType: string;
  estimatedVolume: string;
}

const TIERS: Tier[] = [
  {
    id: 'bar',
    icon: Building2,
    title: 'Hospitality & Bar Tier',
    blurb:
      'Case pricing on small batch bourbon, rye, and single malt scotch for cocktail programs and luxury bars.',
    bullets: ['Minimum 5 cases / order', 'Priority recurring dispatch', 'POS bar mats & tasting notes'],
    licenseType: 'Liquor Retailer / On-Premise Bar',
    estimatedVolume: '10-25 Cases / Month',
  },
  {
    id: 'barrel',
    icon: Award,
    title: 'Single Barrel Pick',
    blurb:
      'Reserve an entire hand-selected barrel. Includes custom neck tag engraving and barrel head memorabilia.',
    bullets: [
      'Approx 180-210 bottles at barrel proof',
      'Custom engraved bottle neck tags',
      'Includes head barrel display plaque',
    ],
    popular: true,
    licenseType: 'Single Barrel Private Pick',
    estimatedVolume: 'Single Barrel Whole Purchase',
  },
  {
    id: 'collector',
    icon: ShieldCheck,
    title: 'Cellar Collector Vault',
    blurb:
      'Guaranteed allocations for private cellar collectors, corporate gifting, and luxury spirits investors.',
    bullets: [
      'Guaranteed annual allocations',
      'Access to rare Mizunara & Port finishes',
      'Direct concierge support',
    ],
    licenseType: 'Private Collector Vault',
    estimatedVolume: '25+ Cases / Month',
  },
];

export const WholesaleView: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    licenseType: 'Liquor Retailer / On-Premise Bar',
    estimatedVolume: '10-25 Cases / Month',
    notes: '',
  });

  const [selectedTier, setSelectedTier] = useState<TierId | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Strip a leading "Interested in: …" line (with its trailing blank line)
  // so the customer's own note survives selecting / switching / clearing.
  const stripTierLine = (notes: string) => notes.replace(/^Interested in:[^\n]*\n{0,2}/i, '');

  const selectTier = (tier: Tier) => {
    const isDeselect = selectedTier === tier.id;
    setSelectedTier(isDeselect ? null : tier.id);

    if (isDeselect) {
      setFormData((prev) => ({ ...prev, notes: stripTierLine(prev.notes) }));
      return;
    }

    setFormData((prev) => {
      const own = stripTierLine(prev.notes);
      return {
        ...prev,
        licenseType: tier.licenseType,
        estimatedVolume: tier.estimatedVolume,
        notes: `Interested in: ${tier.title}.${own ? `\n\n${own}` : ''}`,
      };
    });

    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const clearTier = () => {
    setSelectedTier(null);
    setFormData((prev) => ({ ...prev, notes: stripTierLine(prev.notes) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selected = TIERS.find((t) => t.id === selectedTier);
    const text =
      `Wholesale Inquiry${selected ? ` — ${selected.title}` : ''}\n` +
      `Business: ${formData.businessName}\n` +
      `Contact: ${formData.contactName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `License Type: ${formData.licenseType}\n` +
      `Estimated Volume: ${formData.estimatedVolume}\n` +
      `Notes: ${formData.notes}`;

    // Server route: durable log + Resend (if configured).
    fetch('/api/inquiry/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        kind: 'wholesale',
        subject: `Wholesale allocation request from ${formData.businessName}`,
        text,
        replyTo: formData.email,
      }),
    }).catch(() => {});

    // Web3Forms, direct from the browser (populates the Web3Forms dashboard).
    if (FORMS.web3formsKey) {
      const bodyFormData = new FormData();
      bodyFormData.append('access_key', FORMS.web3formsKey);
      bodyFormData.append('subject', `Wholesale Allocation Request from ${formData.businessName}`);
      bodyFormData.append('from_name', SITE.name);
      bodyFormData.append('email', formData.email);
      bodyFormData.append('replyto', formData.email);
      bodyFormData.append('message', text);
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: bodyFormData,
        });
      } catch {
        // Ad-blocker / offline — the server route above still logged it.
      }
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
          Licensed Trade &amp; Private Collectors
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100">
          Wholesale &amp; Barrel Allocations
        </h1>
        <p className="text-sm text-amber-200/70">
          Direct distillery allocations, private single barrel picks, and commercial tier pricing for
          licensed venues and high-volume collectors.
        </p>
        <p className="text-[11px] text-amber-400/60 uppercase tracking-wider pt-1">
          Select a tier to start your application
        </p>
      </div>

      {/* Tiers Grid — click to select and pre-fill the inquiry form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TIERS.map((tier) => {
          const Icon = tier.icon;
          const isSelected = selectedTier === tier.id;
          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => selectTier(tier)}
              aria-pressed={isSelected}
              className={`relative text-left p-6 rounded-3xl border space-y-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/70 ${
                isSelected
                  ? 'bg-[#2C1A0E] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10 -translate-y-1 ring-1 ring-[#D4AF37]/40'
                  : tier.popular
                    ? 'bg-[#2C1A0E] border-[#D4AF37]/50 shadow-xl hover:-translate-y-1 hover:border-[#D4AF37]/80'
                    : 'bg-[#1A120B] border-amber-900/40 hover:-translate-y-1 hover:border-[#D4AF37]/50'
              }`}
            >
              {tier.popular && !isSelected && (
                <span className="absolute -top-3 right-6 py-1 px-3 rounded-full bg-[#D4AF37] text-[#140D08] font-bold text-[10px] uppercase">
                  Most Popular
                </span>
              )}
              {isSelected && (
                <span className="absolute -top-3 right-6 py-1 px-3 rounded-full bg-emerald-500 text-[#0b1f14] font-bold text-[10px] uppercase flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Selected
                </span>
              )}

              <div
                className={`p-3 rounded-2xl w-fit ${
                  isSelected || tier.popular ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#D4AF37]/10 text-[#D4AF37]'
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>

              <h3
                className={`font-serif font-bold text-lg ${
                  isSelected || tier.popular ? 'text-amber-100' : 'text-[#D4AF37]'
                }`}
              >
                {tier.title}
              </h3>

              <p className={`text-xs leading-relaxed ${isSelected || tier.popular ? 'text-amber-200/80' : 'text-amber-200/70'}`}>
                {tier.blurb}
              </p>

              <ul
                className={`text-xs space-y-1.5 pt-2 ${
                  isSelected || tier.popular ? 'text-amber-200' : 'text-amber-300/80'
                }`}
              >
                {tier.bullets.map((b) => (
                  <li key={b}>✓ {b}</li>
                ))}
              </ul>

              <span
                className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider pt-1 ${
                  isSelected ? 'text-emerald-400' : 'text-[#D4AF37]'
                }`}
              >
                {isSelected ? 'Added to your application' : 'Select this tier'}
                {!isSelected && <ArrowRight className="w-3.5 h-3.5" />}
              </span>
            </button>
          );
        })}
      </div>

      {/* Inquiry Form */}
      <div ref={formRef} className="scroll-mt-24 p-8 rounded-3xl bg-[#1C140E] border border-[#D4AF37]/30 space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-amber-100">Apply for Wholesale Allocation</h2>
          <p className="text-xs text-amber-200/70 mt-1">
            Submit your business credentials to receive current tier price sheets and barrel availability.
          </p>
          {selectedTier && (
            <span className="mt-3 inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-semibold text-amber-100">
              {TIERS.find((t) => t.id === selectedTier)?.title}
              <button
                type="button"
                onClick={clearTier}
                className="text-amber-300 hover:text-white"
                aria-label="Clear selected tier"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="font-serif font-bold text-amber-100 text-xl">Application Received</h3>
            <p className="text-xs text-amber-200/80">
              Our Napa Valley wholesale director will review your license details and respond within 1
              business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Business / Legal Venue Name"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
              />
              <input
                type="text"
                required
                placeholder="Contact Person Name"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                required
                placeholder="Business Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
              />
              <input
                type="tel"
                required
                placeholder="Direct Phone Line"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                value={formData.licenseType}
                onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 text-xs focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="Liquor Retailer / On-Premise Bar">Liquor Retailer / On-Premise Bar</option>
                <option value="Restaurant / Hotel Hospitality">Restaurant / Hotel Hospitality</option>
                <option value="Single Barrel Private Pick">Single Barrel Private Pick</option>
                <option value="Private Collector Vault">Private Collector Vault</option>
              </select>

              <select
                value={formData.estimatedVolume}
                onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 text-xs focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="5-10 Cases / Month">5-10 Cases / Month</option>
                <option value="10-25 Cases / Month">10-25 Cases / Month</option>
                <option value="25+ Cases / Month">25+ Cases / Month</option>
                <option value="Single Barrel Whole Purchase">Single Barrel Whole Purchase</option>
              </select>
            </div>

            <textarea
              rows={3}
              placeholder="Tell us about your venue, tasting program, or specific cask preferences..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-xs hover:bg-[#E5C158] transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Wholesale Allocation Inquiry'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
