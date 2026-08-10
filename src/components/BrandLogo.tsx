import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const dimensions = {
    sm: { box: 'w-8 h-8', icon: 32, text: 'text-lg', sub: 'text-[9px]' },
    md: { box: 'w-11 h-11', icon: 44, text: 'text-xl md:text-2xl', sub: 'text-[10px]' },
    lg: { box: 'w-14 h-14', icon: 56, text: 'text-2xl md:text-3xl', sub: 'text-[11px]' },
    xl: { box: 'w-20 h-20', icon: 80, text: 'text-3xl md:text-4xl', sub: 'text-[12px]' },
  }[size];

  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      {/* Emblem Crest Seal */}
      <div className={`relative ${dimensions.box} shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#2B1B0E] via-[#1A1008] to-[#0A0603] p-1 border border-[#D4AF37]/50 shadow-xl group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300`}>
        {/* Subtle Gold Foil Accent Corners */}
        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-[#D4AF37]" />
        <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-[#D4AF37]" />
        <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b border-l border-[#D4AF37]" />
        <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-[#D4AF37]" />

        <svg
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        >
          <defs>
            <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7E7A9" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA820A" />
              <stop offset="100%" stop-color="#F5D77F" />
            </linearGradient>
            <linearGradient id="amberCopper" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E67E22" />
              <stop offset="100%" stopColor="#8E44AD" />
            </linearGradient>
          </defs>

          {/* Double Octagon Gold Frame */}
          <rect x="6" y="6" width="88" height="88" rx="16" fill="none" stroke="url(#logoGold)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="39" fill="none" stroke="url(#logoGold)" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />

          {/* Oak Cask Stave Contour Silhouette */}
          <path
            d="M32 24 C38 22, 62 22, 68 24 C74 38, 74 62, 68 76 C62 78, 38 78, 32 76 C26 62, 26 38, 32 24 Z"
            fill="none"
            stroke="url(#logoGold)"
            strokeWidth="1.2"
            opacity="0.35"
          />

          {/* Intertwined Monogram A & A */}
          {/* First A */}
          <path
            d="M34 68 L44 32 L49 32 L59 68 L53 68 L51 59 L42 59 L40 68 Z M43 54 L50 54 L46.5 40 Z"
            fill="url(#logoGold)"
          />
          {/* Second Interlocking A */}
          <path
            d="M48 68 L58 32 L63 32 L73 68 L67 68 L65 59 L56 59 L54 68 Z M57 54 L64 54 L60.5 40 Z"
            fill="url(#logoGold)"
            opacity="0.85"
          />

          {/* Central Wax Seal / Amber Gem Drop */}
          <path
            d="M50 72 C48 75, 46 78, 46 80 C46 82.5, 47.8 84, 50 84 C52.2 84, 54 82.5, 54 80 C54 78, 52 75, 50 72 Z"
            fill="url(#logoGold)"
          />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif font-bold text-amber-100 tracking-tight leading-none ${dimensions.text} drop-shadow-sm`}>
            Aged <span className="text-[#D4AF37] font-serif font-normal">&amp;</span> Amber
          </span>
          <span className={`text-[#D4AF37]/90 font-sans tracking-[0.22em] uppercase font-semibold mt-1.5 block leading-none ${dimensions.sub}`}>
            Fine Spirits &amp; Rare Casks
          </span>
        </div>
      )}
    </div>
  );
};
