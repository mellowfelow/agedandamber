'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '../types';
import { SmartImage } from './SmartImage';
import { ShoppingBag, Eye, Flame, Award, Plus, Minus, Check } from 'lucide-react';
import { SITE } from '../config/site';
import { getRouteUrl } from '../utils/routes';
import { useAppState } from '../../app/providers';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setQuickViewProduct } = useAppState();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const productUrl = getRouteUrl.product(product.category, product.slug);

  return (
    <div className="group bg-[#1A120B] rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/10">
      {/* 4:3 White Product Frame Canvas */}
      <div className="relative aspect-[4/3] bg-white rounded-t-2xl p-4 flex items-center justify-center overflow-hidden">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 py-1 px-3 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#2C1A0E] text-[#D4AF37] border border-[#D4AF37]/40 shadow-md flex items-center gap-1">
            <Award className="w-3 h-3 text-[#D4AF37]" />
            {product.badge}
          </span>
        )}

        {/* Proof Tag */}
        <span className="absolute top-3 right-3 z-10 py-1 px-2.5 rounded-full text-[11px] font-semibold bg-stone-900/80 text-amber-200 backdrop-blur-md flex items-center gap-1">
          <Flame className="w-3 h-3 text-amber-500" />
          {product.proof} Proof
        </span>

        {/* Image */}
        <Link
          href={productUrl}
          className="w-full h-full flex items-center justify-center cursor-pointer transform group-hover:scale-105 transition-transform duration-500"
        >
          <SmartImage
            src={product.images[0]}
            alt={product.name}
            className="max-h-full max-w-full object-contain filter drop-shadow-xl"
          />
        </Link>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px] pointer-events-none">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="py-2.5 px-4 rounded-xl bg-white text-stone-900 font-semibold text-xs hover:bg-[#D4AF37] hover:text-[#140D08] transition-colors shadow-lg flex items-center gap-1.5 pointer-events-auto"
          >
            <Eye className="w-4 h-4" />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-amber-400/70 font-medium mb-1">
            <span className="uppercase tracking-wider">{product.subcategory}</span>
            <span>{product.volume}</span>
          </div>

          <Link
            href={productUrl}
            className="font-serif font-bold text-amber-100 text-lg hover:text-[#D4AF37] cursor-pointer transition-colors line-clamp-2 leading-snug block"
          >
            {product.name}
          </Link>

          <p className="text-amber-200/60 text-xs mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Cask Wood Info */}
        <div className="pt-2 border-t border-amber-900/30 text-[11px] text-amber-300/60 flex items-center justify-between">
          <span className="truncate">Cask: {product.caskType}</span>
          <span className="shrink-0 font-medium text-amber-400/80">{product.age}</span>
        </div>

        {/* Footer Price & Quantity Stepper Add Button */}
        <div className="pt-3 border-t border-amber-900/30 space-y-3">
          {/* Price Row */}
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-xl font-serif font-bold text-[#D4AF37]">
                {SITE.currencySymbol}{product.price}
              </div>
              <div className="text-[10px] text-emerald-400 font-medium">
                {SITE.currencySymbol}{(product.price * 0.9).toFixed(0)} with Crypto
              </div>
            </div>
            {quantity > 1 && (
              <div className="text-right text-[11px] text-amber-300/80 font-medium">
                Total: <span className="font-bold text-amber-100">{SITE.currencySymbol}{product.price * quantity}</span>
              </div>
            )}
          </div>

          {/* Quantity Stepper & Add Button Row */}
          <div className="flex items-center gap-2">
            {/* Quantity Stepper */}
            <div
              className="flex items-center rounded-xl bg-stone-900/90 border border-amber-900/40 p-1 shrink-0 shadow-inner"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleDecrement}
                className="w-7 h-7 rounded-lg text-amber-200 hover:bg-stone-800 hover:text-white flex items-center justify-center font-bold text-xs transition-colors active:scale-95"
                aria-label="Decrease quantity"
                title="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-7 text-center font-bold text-xs text-amber-100 font-mono select-none">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                className="w-7 h-7 rounded-lg text-amber-200 hover:bg-stone-800 hover:text-white flex items-center justify-center font-bold text-xs transition-colors active:scale-95"
                aria-label="Increase quantity"
                title="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs transition-all shadow-md flex items-center justify-center gap-1.5 active:scale-95 ${
                isAdded
                  ? 'bg-emerald-500 text-stone-950 shadow-emerald-500/20'
                  : 'bg-[#D4AF37] text-[#140D08] hover:bg-[#E5C158] shadow-[#D4AF37]/10'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 text-stone-950 shrink-0" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 shrink-0" />
                  <span className="truncate">Add {quantity > 1 ? `(${quantity})` : ''}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
