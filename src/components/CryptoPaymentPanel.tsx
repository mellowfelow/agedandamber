'use client';

import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Check, Copy } from 'lucide-react';
import { CRYPTO_WALLETS } from '../config/site';

interface CryptoPaymentPanelProps {
  /** Which coin the customer picked at the payment-method step. */
  coin: 'BTC' | 'USDT';
  /** Exact amount due, for display and (BTC only) baked into the QR. */
  amount: number;
}

const USDT_NETWORKS = CRYPTO_WALLETS.filter((w) => w.id.startsWith('USDT-'));

export const CryptoPaymentPanel: React.FC<CryptoPaymentPanelProps> = ({ coin, amount }) => {
  const [networkId, setNetworkId] = useState<string>(coin === 'BTC' ? 'BTC' : USDT_NETWORKS[0].id);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Reset to this coin's default network whenever the customer switches coins.
  useEffect(() => {
    setNetworkId(coin === 'BTC' ? 'BTC' : USDT_NETWORKS[0].id);
  }, [coin]);

  const wallet = CRYPTO_WALLETS.find((w) => w.id === networkId) || CRYPTO_WALLETS[0];

  useEffect(() => {
    // BTC wallets widely support the BIP21 URI (bitcoin:<address>?amount=<btc>),
    // auto-filling the amount on scan. USDT has no equivalent standard honoured
    // across TRC20/ERC20/SOL wallets, so its QR carries the address only — the
    // customer enters the amount themselves, same as any exchange deposit QR.
    const payload =
      wallet.id === 'BTC' ? `bitcoin:${wallet.address}?amount=${amount.toFixed(8)}` : wallet.address;

    let cancelled = false;
    QRCode.toDataURL(payload, { width: 220, margin: 1, color: { dark: '#140D08', light: '#FFFFFF' } })
      .then((url) => {
        if (!cancelled) setQrDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setQrDataUrl('');
      });
    return () => {
      cancelled = true;
    };
  }, [wallet, amount]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wallet.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the address is still selectable/visible as text */
    }
  };

  return (
    <div className="p-4 rounded-xl bg-stone-950/80 border border-[#D4AF37]/30 space-y-3">
      {coin === 'USDT' && (
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
            Choose network
          </span>
          <div className="grid grid-cols-3 gap-2">
            {USDT_NETWORKS.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => setNetworkId(n.id)}
                className={`py-2 px-2 rounded-lg border text-[11px] font-semibold transition-all ${
                  networkId === n.id
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-amber-100'
                    : 'bg-stone-900/60 border-stone-800 text-amber-300/70 hover:bg-stone-800'
                }`}
              >
                {n.network}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-amber-300/60">
            Sending USDT on the wrong network loses the funds — confirm your wallet supports{' '}
            {wallet.network} before sending.
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="shrink-0 bg-white p-2 rounded-xl">
          {qrDataUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={qrDataUrl} alt={`${wallet.name} (${wallet.network}) deposit QR code`} width={160} height={160} />
          ) : (
            <div className="w-40 h-40 bg-stone-200 animate-pulse rounded" />
          )}
        </div>

        <div className="flex-1 w-full space-y-2">
          <div>
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
              {wallet.name} address ({wallet.network})
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="w-full flex items-center justify-between gap-2 p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-left hover:border-[#D4AF37]/50 transition-colors"
            >
              <span className="text-[11px] font-mono text-amber-100 break-all">{wallet.address}</span>
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Copy className="w-4 h-4 text-amber-400/70 shrink-0" />
              )}
            </button>
          </div>
          <div className="flex justify-between text-xs pt-1 border-t border-stone-800">
            <span className="text-amber-300/70">Amount due</span>
            <span className="font-bold text-[#D4AF37]">${amount.toFixed(2)} USD equiv.</span>
          </div>
          <p className="text-[10px] text-amber-300/60">
            Send the equivalent of ${amount.toFixed(2)} in {wallet.name} at your wallet&apos;s current
            rate, then upload a payment confirmation once sent.
          </p>
        </div>
      </div>
    </div>
  );
};
