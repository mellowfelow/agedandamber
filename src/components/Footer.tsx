import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin, Award, Coins, Lock } from 'lucide-react';
import { SITE, CONTACT, BRAND, COMPLIANCE, SHOP } from '../config/site';
import { BrandLogo } from './BrandLogo';
import { getRouteUrl } from '../utils/routes';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#100905] text-amber-200/80 border-t border-[#D4AF37]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top 4 Trust Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-2xl bg-[#1C140E] border border-amber-900/40">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-amber-100 text-sm">21+ Verified Carrier</h4>
              <p className="text-xs text-amber-300/60">Adult signature required upon delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-amber-100 text-sm">100% Cask Provenance</h4>
              <p className="text-xs text-amber-300/60">Direct from Napa & Kentucky barrels</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] shrink-0">
              <Coins className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-amber-100 text-sm">10% Crypto Discount</h4>
              <p className="text-xs text-emerald-400">Save instantly with BTC or USDT</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-amber-100 text-sm">Insured Shipping</h4>
              <p className="text-xs text-amber-300/60">Free express shipping on ${SHOP.freeShippingThreshold}+</p>
            </div>
          </div>
        </div>

        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href={getRouteUrl.home()} className="cursor-pointer inline-block">
              <BrandLogo size="lg" />
            </Link>

            <p className="text-xs text-amber-200/70 leading-relaxed max-w-sm">
              {BRAND.description} Headquartered in Napa Valley and San Francisco, California.
            </p>

            <div className="space-y-2 text-xs text-amber-300/80 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a href={`tel:${CONTACT.phone}`} className="hover:underline">{CONTACT.phone}</a>
              </div>
            </div>
          </div>

          {/* Shop Vault Col */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-100 text-sm uppercase tracking-wider">
              Spirits Vault
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={getRouteUrl.shop('bourbon-whiskey')} className="hover:text-[#D4AF37] transition-colors">
                  Bourbon & Rye Whiskey
                </Link>
              </li>
              <li>
                <Link href={getRouteUrl.shop('scotch-whisky')} className="hover:text-[#D4AF37] transition-colors">
                  Single Malt & Scotch
                </Link>
              </li>
              <li>
                <Link href={getRouteUrl.shop('tequila-mezcal')} className="hover:text-[#D4AF37] transition-colors">
                  Rare Cask & Tequila
                </Link>
              </li>
              <li>
                <Link href={getRouteUrl.wholesale()} className="hover:text-[#D4AF37] transition-colors">
                  Wholesale Allocations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Info */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-100 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={getRouteUrl.about()} className="hover:text-[#D4AF37]">
                  Our Sourcing Story
                </Link>
              </li>
              <li>
                <Link href={getRouteUrl.blog()} className="hover:text-[#D4AF37]">
                  Cask & Wood Journal
                </Link>
              </li>
              <li>
                <Link href={getRouteUrl.faq()} className="hover:text-[#D4AF37]">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href={getRouteUrl.contact()} className="hover:text-[#D4AF37]">
                  Concierge Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Payment */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-100 text-sm uppercase tracking-wider">
              Accepted Payments
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="py-1 px-2 rounded bg-stone-900 border border-stone-800 text-[10px] font-bold text-amber-200">
                Card
              </span>
              <span className="py-1 px-2 rounded bg-stone-900 border border-stone-800 text-[10px] font-bold text-amber-200">
                Apple Pay
              </span>
              <span className="py-1 px-2 rounded bg-stone-900 border border-stone-800 text-[10px] font-bold text-amber-200">
                Cash App
              </span>
              <span className="py-1 px-2 rounded bg-stone-900 border border-stone-800 text-[10px] font-bold text-amber-200">
                Chime
              </span>
              <span className="py-1 px-2 rounded bg-emerald-950 border border-emerald-800 text-[10px] font-bold text-emerald-400">
                BTC (10% Off)
              </span>
              <span className="py-1 px-2 rounded bg-emerald-950 border border-emerald-800 text-[10px] font-bold text-emerald-400">
                USDT (10% Off)
              </span>
            </div>

            <div className="pt-2 text-[11px] text-amber-400/60 leading-normal">
              Minimum Order ${SHOP.minOrder}. Free Shipping on orders ${SHOP.freeShippingThreshold}+.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-900/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-amber-400/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right text-[10px] text-amber-400/50">
            {COMPLIANCE.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
