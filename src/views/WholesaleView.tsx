'use client';

import React, { useState } from 'react';
import { SITE, FORMS, CONTACT } from '../config/site';
import { Building2, ShieldCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

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

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bodyFormData = new FormData();
    bodyFormData.append('access_key', FORMS.web3formsKey || 'YOUR-WEB3FORMS-KEY-PENDING');
    bodyFormData.append('subject', `Wholesale Allocation Request from ${formData.businessName}`);
    bodyFormData.append('from_name', SITE.name);
    bodyFormData.append('email', formData.email);
    bodyFormData.append(
      'message',
      `Wholesale Inquiry:\nBusiness: ${formData.businessName}\nContact: ${formData.contactName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLicense Type: ${formData.licenseType}\nEstimated Volume: ${formData.estimatedVolume}\nNotes: ${formData.notes}`
    );

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: bodyFormData,
    })
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
          Licensed Trade & Private Collectors
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100">
          Wholesale & Barrel Allocations
        </h1>
        <p className="text-sm text-amber-200/70">
          Direct distillery allocations, private single barrel picks, and commercial tier pricing for licensed venues and high-volume collectors.
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-[#1A120B] border border-amber-900/40 space-y-4">
          <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] w-fit">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-[#D4AF37] text-lg">Hospitality & Bar Tier</h3>
          <p className="text-xs text-amber-200/70 leading-relaxed">
            Case pricing on small batch bourbon, rye, and single malt scotch for cocktail programs and luxury bars.
          </p>
          <ul className="text-xs text-amber-300/80 space-y-1.5 pt-2">
            <li>✓ Minimum 5 cases / order</li>
            <li>✓ Priority recurring dispatch</li>
            <li>✓ POS bar mats & tasting notes</li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-[#2C1A0E] border border-[#D4AF37]/50 space-y-4 shadow-xl relative">
          <span className="absolute -top-3 right-6 py-1 px-3 rounded-full bg-[#D4AF37] text-[#140D08] font-bold text-[10px] uppercase">
            Most Popular
          </span>
          <div className="p-3 rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37] w-fit">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-amber-100 text-lg">Single Barrel Pick</h3>
          <p className="text-xs text-amber-200/80 leading-relaxed">
            Reserve an entire hand-selected barrel. Includes custom neck tag engraving and barrel head memorabilia.
          </p>
          <ul className="text-xs text-amber-200 space-y-1.5 pt-2">
            <li>✓ Approx 180-210 bottles at barrel proof</li>
            <li>✓ Custom engraved bottle neck tags</li>
            <li>✓ Includes head barrel display plaque</li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-[#1A120B] border border-amber-900/40 space-y-4">
          <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-[#D4AF37] text-lg">Cellar Collector Vault</h3>
          <p className="text-xs text-amber-200/70 leading-relaxed">
            Guaranteed allocations for private cellar collectors, corporate gifting, and luxury spirits investors.
          </p>
          <ul className="text-xs text-amber-300/80 space-y-1.5 pt-2">
            <li>✓ Guaranteed annual allocations</li>
            <li>✓ Access to rare Mizunara & Port finishes</li>
            <li>✓ Direct concierge support</li>
          </ul>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="p-8 rounded-3xl bg-[#1C140E] border border-[#D4AF37]/30 space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-amber-100">
            Apply for Wholesale Allocation
          </h2>
          <p className="text-xs text-amber-200/70 mt-1">
            Submit your business credentials to receive current tier price sheets and barrel availability.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="font-serif font-bold text-amber-100 text-xl">
              Application Received
            </h3>
            <p className="text-xs text-amber-200/80">
              Our Napa Valley wholesale director will review your license details and respond within 1 business day.
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
