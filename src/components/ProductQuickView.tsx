'use client';

import React, { useState } from 'react';
import { SmartImage } from './SmartImage';
import { X, Flame, Shield, Truck, Coins, ShoppingBag, Check } from 'lucide-react';
import { SITE, SHOP } from '../config/site';
import { useAppState } from '../../app/providers';

export const ProductQuickView: React.FC = () => {
  const { quickViewProduct: product, setQuickViewProduct, addToCart } = useAppState();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const onClose = () => setQuickViewProduct(null);

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1A120B] rounded-3xl border border-[#D4AF37]/30 text-amber-50 shadow-2xl p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-amber-950/60 text-amber-300 hover:text-amber-100 hover:bg-amber-900/60 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Image Canvas */}
          <div className="relative aspect-[4/3] bg-white rounded-2xl p-6 flex items-center justify-center overflow-hidden">
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 py-1.5 px-3 rounded-full text-xs font-bold uppercase bg-[#2C1A0E] text-[#D4AF37] border border-[#D4AF37]/40 shadow-md">
                {product.badge}
              </span>
            )}
            <SmartImage
              src={product.images[0]}
              alt={product.name}
              className="max-h-full max-w-full object-contain filter drop-shadow-2xl"
            />
          </div>

          {/* Details */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
                <span>{product.subcategory}</span>
                <span>•</span>
                <span>{product.volume}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-amber-400">
                  <Flame className="w-3.5 h-3.5" />
                  {product.proof} Proof
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 leading-tight">
                {product.name}
              </h2>

              <p className="text-amber-200/70 text-sm mt-3 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Tasting Notes */}
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-900/40 text-xs space-y-2">
              <h4 className="font-serif font-bold text-[#D4AF37] text-sm uppercase tracking-wide">
                Tasting Profile
              </h4>
              <p><strong className="text-amber-200">Nose:</strong> {product.tastingNotes.nose}</p>
              <p><strong className="text-amber-200">Palate:</strong> {product.tastingNotes.palate}</p>
              <p><strong className="text-amber-200">Finish:</strong> {product.tastingNotes.finish}</p>
            </div>

            {/* Cask Info */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800">
                <span className="text-amber-400/60 block text-[10px] uppercase font-semibold">Cask Type</span>
                <span className="font-medium text-amber-100">{product.caskType}</span>
              </div>
              <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800">
                <span className="text-amber-400/60 block text-[10px] uppercase font-semibold">Aging & Proof</span>
                <span className="font-medium text-amber-100">{product.age} ({product.proof} Proof)</span>
              </div>
            </div>

            {/* Price & Crypto Banner */}
            <div className="pt-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-serif font-bold text-[#D4AF37]">
                  {SITE.currencySymbol}{product.price}
                </span>
                <span className="text-xs text-amber-300/70">USD per bottle</span>
              </div>

              <div className="mt-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs flex items-center gap-2">
                <Coins className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Pay with <strong>BTC or USDT</strong> for an instant 10% discount: <strong>{SITE.currencySymbol}{(product.price * 0.9).toFixed(0)}</strong>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center rounded-xl bg-stone-900 border border-stone-800 p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg text-amber-200 hover:bg-stone-800 font-bold"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-sm text-amber-100">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg text-amber-200 hover:bg-stone-800 font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-900" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    Add To Cart ({SITE.currencySymbol}{product.price * quantity})
                  </>
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-between text-[11px] text-amber-400/60 pt-3 border-t border-amber-900/30">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                21+ Adult Signature Required
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
                Free Ship Over ${SHOP.freeShippingThreshold}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
