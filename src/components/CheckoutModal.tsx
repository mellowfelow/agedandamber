'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, Coins, CheckCircle2, ArrowRight } from 'lucide-react';
import { SHOP, CONTACT, SITE, FORMS } from '../config/site';
import { useAppState } from '../../app/providers';

export const CheckoutModal: React.FC = () => {
  const { cart, checkoutModalOpen, setCheckoutModalOpen, clearCart } = useAppState();

  const [selectedPayment, setSelectedPayment] = useState('crypto-BTC');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    ageConfirmed: false,
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<{
    orderNumber: string;
    grandTotal: number;
    selectedPayment: string;
    name: string;
    email: string;
    emailDelivered: boolean;
  } | null>(null);

  if (!checkoutModalOpen) return null;

  const onClose = () => setCheckoutModalOpen(false);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const isCrypto = selectedPayment.startsWith('crypto-');
  const cryptoDiscountAmount = isCrypto ? subtotal * 0.1 : 0;
  const shippingFee = subtotal >= SHOP.freeShippingThreshold ? 0 : SHOP.shippingFee;
  const grandTotal = subtotal - cryptoDiscountAmount + shippingFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ageConfirmed) {
      alert('You must confirm that you are at least 21 years old to place a spirits order.');
      return;
    }

    setIsSubmitting(true);

    // Snapshot the order BEFORE the cart is cleared, so the confirmation
    // screen shows what was actually ordered, not a recomputed (by then
    // empty) cart.
    const payload = {
      items: cart.map((i) => ({
        name: i.product.name,
        quantity: i.quantity,
        lineTotal: i.product.price * i.quantity,
      })),
      subtotal,
      cryptoDiscount: cryptoDiscountAmount,
      shipping: shippingFee,
      total: grandTotal,
      paymentMethod:
        SHOP.paymentMethods.find((pm) => pm.id === selectedPayment)?.name || selectedPayment,
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        notes: formData.notes,
      },
    };

    // Client-side fallback reference, only used if the API call can't be
    // reached at all (offline). The server is the source of truth otherwise.
    let orderNumber = `AA-${String(Date.now()).slice(-6)}`;
    let emailDelivered = false;

    // 1) Server route: durable log + short order number + Resend (if set up).
    try {
      const res = await fetch('/api/order/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data?.ok && data.orderNumber) {
        orderNumber = data.orderNumber;
        emailDelivered = Boolean(data.emailDelivered);
      }
    } catch {
      // Network failure — keep the fallback order number.
    }

    // 2) Web3Forms, direct from the browser. This is what populates the
    //    Web3Forms dashboard; a real browser origin also gets past their
    //    firewall (a server-to-server call does not). Independent of (1) —
    //    if either channel delivers, the order was notified.
    if (FORMS.web3formsKey) {
      try {
        const fd = new FormData();
        fd.append('access_key', FORMS.web3formsKey);
        fd.append('subject', `New order ${orderNumber} — ${formData.name} — $${grandTotal.toFixed(2)}`);
        fd.append('from_name', `${SITE.name} Orders`);
        fd.append('email', formData.email);
        fd.append('replyto', formData.email);
        fd.append(
          'message',
          `Order ${orderNumber}\n\n` +
            `Items:\n${payload.items.map((i) => `- ${i.name} x${i.quantity} ($${i.lineTotal.toFixed(2)})`).join('\n')}\n\n` +
            `Subtotal: $${subtotal.toFixed(2)}\n` +
            `Crypto discount: -$${cryptoDiscountAmount.toFixed(2)}\n` +
            `Shipping: $${shippingFee.toFixed(2)}\n` +
            `Total: $${grandTotal.toFixed(2)}\n` +
            `Payment: ${payload.paymentMethod}\n\n` +
            `Customer:\n${formData.name}\n${formData.email}\n${formData.phone}\n` +
            `${formData.street}, ${formData.city}, ${formData.state} ${formData.zip}\n` +
            (formData.notes ? `Notes: ${formData.notes}` : '')
        );
        fd.append('botcheck', '');
        const w3 = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: fd,
        });
        const w3json = await w3.json().catch(() => ({}));
        if (w3.ok && w3json?.success === true) emailDelivered = true;
      } catch {
        // Blocked by an ad-blocker / offline — the server route above still
        // logged the order; the confirmation screen handles the messaging.
      }
    }

    setCompletedOrder({
      orderNumber,
      grandTotal,
      selectedPayment: payload.paymentMethod,
      name: formData.name,
      email: formData.email,
      emailDelivered,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 animate-fade-in">
      <div className="min-h-full flex items-start justify-center">
      <div className="relative w-full max-w-2xl bg-[#1A120B] rounded-3xl border border-[#D4AF37]/30 text-amber-50 shadow-2xl p-6 md:p-8 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-amber-950/60 text-amber-300 hover:text-amber-100 hover:bg-amber-900/60 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted && completedOrder ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h2 className="text-3xl font-serif font-bold text-amber-100">
              Spirits Reserve Order Received!
            </h2>

            <p className="text-amber-200/80 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-amber-100">{completedOrder.name}</strong>. Your order has been logged with our Napa Valley concierge, who will email you shortly with secure payment instructions for <strong className="text-amber-100">{completedOrder.selectedPayment}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-xs text-left max-w-md mx-auto space-y-2">
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-amber-400/60">Order Number:</span>
                <span className="font-bold text-amber-200">{completedOrder.orderNumber}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-amber-400/60">Selected Payment Method:</span>
                <span className="font-bold text-amber-200">{completedOrder.selectedPayment}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-amber-400/60">Total Order Amount:</span>
                <span className="font-bold text-[#D4AF37]">${completedOrder.grandTotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-amber-300/70 pt-1">
                {completedOrder.emailDelivered ? (
                  <>A confirmation has been sent to <strong>{completedOrder.email}</strong>. Our concierge will follow up within 2 hours (business hours) with payment routing details and adult-signature tracking.</>
                ) : (
                  <>Our concierge will contact you within 2 hours (business hours) with payment details. If you don&apos;t hear from us, reach out directly quoting order <strong>{completedOrder.orderNumber}</strong> — {CONTACT.email} or WhatsApp {CONTACT.phone}.</>
                )}
              </p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="py-3 px-8 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all"
            >
              Return to Cellar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
                Direct Reserve Order
              </span>
              <h2 className="text-2xl font-serif font-bold text-amber-100">
                Spirits Vault Checkout
              </h2>
            </div>

            {/* Customer Details */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Adult Receiver Information (21+)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Legal Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Street Address"
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  className="w-full p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37] md:col-span-2"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone (for 21+ Delivery)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  type="text"
                  required
                  placeholder="State"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  type="text"
                  required
                  placeholder="ZIP Code"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="w-full p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Age Confirmation Checkbox */}
            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-900/50 flex items-start gap-3">
              <input
                type="checkbox"
                id="ageCheck"
                required
                checked={formData.ageConfirmed}
                onChange={(e) => setFormData({ ...formData, ageConfirmed: e.target.checked })}
                className="mt-1 rounded bg-stone-900 border-amber-700 text-[#D4AF37] focus:ring-[#D4AF37]"
              />
              <label htmlFor="ageCheck" className="text-xs text-amber-200/90 cursor-pointer">
                <strong>Adult Signature Required:</strong> I certify that I am at least 21 years of age and that an adult aged 21 or older will be present to sign and present ID upon delivery.
              </label>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                Select Payment Method
              </label>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                {SHOP.paymentMethods.map((pm) => (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setSelectedPayment(pm.id)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between ${
                      selectedPayment === pm.id
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-amber-100 shadow-md'
                        : 'bg-stone-900/50 border-stone-800 text-amber-300/70 hover:bg-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{pm.name}</span>
                      {pm.discount && (
                        <span className="py-0.5 px-1.5 rounded bg-emerald-950 text-emerald-400 text-[9px] font-bold">
                          10% OFF
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-amber-300/70">Subtotal</span>
                <span className="font-bold text-amber-100">${subtotal.toFixed(2)}</span>
              </div>
              {isCrypto && (
                <div className="flex justify-between text-emerald-400">
                  <span>Crypto Instant Discount (10% Off)</span>
                  <span>-${cryptoDiscountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-amber-300/70">Insured Express Shipping</span>
                <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee}`}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-800 text-sm font-serif font-bold text-[#D4AF37]">
                <span>Total Due</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all shadow-xl flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Processing Spirits Order...'
              ) : (
                <>
                  Confirm Spirits Order (${grandTotal.toFixed(2)})
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
      </div>
    </div>
  );
};
