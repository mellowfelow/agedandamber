import React from 'react';
import { CartItem } from '../types';
import { SmartImage } from './SmartImage';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, AlertCircle, Coins, Truck } from 'lucide-react';
import { SITE, SHOP } from '../config/site';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const minOrderMet = subtotal >= SHOP.minOrder;
  const freeShippingMet = subtotal >= SHOP.freeShippingThreshold;
  const dollarsToFreeShipping = Math.max(0, SHOP.freeShippingThreshold - subtotal);
  const dollarsToMinOrder = Math.max(0, SHOP.minOrder - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#160E08] border-l border-[#D4AF37]/30 text-amber-50 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-amber-900/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-serif font-bold text-lg text-amber-100">
                Your Vault Cart ({cart.reduce((sum, i) => sum + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-amber-300 hover:text-amber-100 hover:bg-amber-950/60 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Threshold Progress Bar */}
          <div className="p-4 bg-[#1C140E] border-b border-amber-900/30 text-xs space-y-2">
            {!minOrderMet ? (
              <div className="flex items-center gap-2 text-amber-300">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Minimum order is <strong>{SITE.currencySymbol}{SHOP.minOrder}</strong>. Add <strong>{SITE.currencySymbol}{dollarsToMinOrder}</strong> more to checkout.
                </span>
              </div>
            ) : !freeShippingMet ? (
              <div className="flex items-center gap-2 text-emerald-300">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Add <strong>{SITE.currencySymbol}{dollarsToFreeShipping}</strong> more for <strong>FREE Express Shipping</strong>!
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Congratulations! You qualify for FREE Express Shipping.</span>
              </div>
            )}

            {/* Progress bar visual */}
            <div className="w-full bg-stone-900 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#D4AF37] h-full transition-all duration-300"
                style={{
                  width: `${Math.min(100, (subtotal / SHOP.freeShippingThreshold) * 100)}%`,
                }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <ShoppingBag className="w-12 h-12 text-amber-600/40 mx-auto" />
                <p className="text-amber-300/60 text-sm">Your spirits vault cart is currently empty.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800 flex items-center gap-4"
                >
                  <div className="w-16 h-16 bg-white rounded-lg p-1 shrink-0 flex items-center justify-center">
                    <SmartImage
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-xs text-amber-100 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-amber-400/60">
                      {item.product.proof} Proof • {item.product.volume}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center bg-stone-800 rounded-lg border border-stone-700">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-amber-300 hover:bg-stone-700 rounded-l-lg"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-amber-100">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-amber-300 hover:bg-stone-700 rounded-r-lg"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif font-bold text-sm text-[#D4AF37]">
                        {SITE.currencySymbol}{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-stone-500 hover:text-red-400 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#1A120B] border-t border-amber-900/40 space-y-4">
              <div className="space-y-2 text-xs text-amber-300/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-serif font-bold text-amber-100 text-sm">
                    {SITE.currencySymbol}{subtotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>{freeShippingMet ? 'FREE' : `${SITE.currencySymbol}${SHOP.shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span className="flex items-center gap-1">
                    <Coins className="w-3.5 h-3.5" />
                    Crypto Discount (10% Off)
                  </span>
                  <span>-{SITE.currencySymbol}{(subtotal * 0.1).toFixed(0)}</span>
                </div>
              </div>

              <button
                disabled={!minOrderMet}
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                  minOrderMet
                    ? 'bg-[#D4AF37] text-[#140D08] hover:bg-[#E5C158] active:scale-98'
                    : 'bg-stone-800 text-stone-500 cursor-not-allowed'
                }`}
              >
                {minOrderMet ? (
                  <>
                    Checkout Vault Order
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  `Minimum Order ${SITE.currencySymbol}${SHOP.minOrder} Required`
                )}
              </button>

              <p className="text-[10px] text-center text-amber-400/50">
                21+ Adult Signature Required at Delivery • Fully Insured Spirits Express
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
