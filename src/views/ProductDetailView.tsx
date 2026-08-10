'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '../types';
import { SmartImage } from '../components/SmartImage';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeft, Flame, Shield, Truck, Coins, ShoppingBag, Award, Check } from 'lucide-react';
import { SITE, SHOP } from '../config/site';
import { getRouteUrl } from '../utils/routes';
import { useAppState } from '../../app/providers';

interface ProductDetailViewProps {
  product: Product;
  allProducts: Product[];
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, allProducts }) => {
  const { addToCart } = useAppState();
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back Button */}
      <Link
        href={getRouteUrl.shop(product.category)}
        className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-amber-100 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Spirits Vault
      </Link>

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Gallery Canvas */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] bg-white rounded-3xl p-8 flex items-center justify-center border border-[#D4AF37]/30 shadow-2xl overflow-hidden">
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 py-1.5 px-3.5 rounded-full text-xs font-bold uppercase bg-[#2C1A0E] text-[#D4AF37] border border-[#D4AF37]/40 shadow-md flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                {product.badge}
              </span>
            )}

            <SmartImage
              src={product.images[selectedImg] || product.images[0]}
              alt={product.name}
              className="max-h-full max-w-full object-contain filter drop-shadow-2xl"
            />
          </div>

          {/* Thumbnails if multiple images */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`w-20 h-20 bg-white rounded-xl p-2 border-2 transition-all ${
                    selectedImg === idx ? 'border-[#D4AF37]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <SmartImage src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Product Meta */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
              <span>{product.subcategory}</span>
              <span>•</span>
              <span>{product.volume}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-amber-400">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                {product.proof} Proof ({product.proof / 2}% ABV)
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 leading-tight">
              {product.name}
            </h1>

            <p className="text-amber-200/80 text-sm mt-4 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Tasting Profile Card */}
          <div className="p-5 rounded-2xl bg-[#1C140E] border border-amber-900/40 space-y-3 text-xs">
            <h3 className="font-serif font-bold text-[#D4AF37] text-sm uppercase tracking-wider">
              Organoleptic Tasting Profile
            </h3>
            <div className="space-y-2 text-amber-200/90 leading-relaxed">
              <p><strong className="text-amber-100 font-serif">Nose:</strong> {product.tastingNotes.nose}</p>
              <p><strong className="text-amber-100 font-serif">Palate:</strong> {product.tastingNotes.palate}</p>
              <p><strong className="text-amber-100 font-serif">Finish:</strong> {product.tastingNotes.finish}</p>
            </div>
          </div>

          {/* Cask Specifications */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800">
              <span className="text-amber-400/60 block text-[10px] uppercase font-semibold">Cask Wood Finish</span>
              <span className="font-bold text-amber-100">{product.caskType}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800">
              <span className="text-amber-400/60 block text-[10px] uppercase font-semibold">Distillery Location</span>
              <span className="font-bold text-amber-100">{product.distilleryLocation}</span>
            </div>
          </div>

          {/* Pricing & Crypto Banner */}
          <div className="pt-2 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-serif font-bold text-[#D4AF37]">
                {SITE.currencySymbol}{product.price}
              </span>
              <span className="text-xs text-amber-300/70">USD per 750ml bottle</span>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-800/50 text-emerald-300 text-xs flex items-center gap-3">
              <Coins className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold block">10% Cryptocurrency Discount</span>
                <span className="text-[11px] text-emerald-200/80">
                  Pay with Bitcoin or USDT to reduce price to <strong>{SITE.currencySymbol}{(product.price * 0.9).toFixed(0)}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center rounded-xl bg-stone-900 border border-stone-800 p-1.5">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 rounded-lg text-amber-200 hover:bg-stone-800 font-bold"
              >
                -
              </button>
              <span className="w-12 text-center font-bold text-sm text-amber-100">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 rounded-lg text-amber-200 hover:bg-stone-800 font-bold"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 py-4 px-6 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all shadow-xl flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check className="w-5 h-5 text-emerald-900" />
                  Bottle Added to Vault Cart!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  Add To Vault Cart ({SITE.currencySymbol}{product.price * quantity})
                </>
              )}
            </button>
          </div>

          {/* Delivery & Carrier Guarantees */}
          <div className="pt-4 border-t border-amber-900/40 grid grid-cols-2 gap-4 text-xs text-amber-300/70">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>21+ Adult Signature Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Free Express Shipping over ${SHOP.freeShippingThreshold}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pt-12 border-t border-amber-900/30 space-y-6">
          <h2 className="text-2xl font-serif font-bold text-amber-100">
            Complementary Spirits Allocations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
