'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SmartImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  fallbackSrc = 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&q=80&w=800',
  className = '',
  priority = false,
  sizes = '(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 320px',
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  return (
    <span className="relative block w-full h-full">
      <Image
        src={isError ? fallbackSrc : imgSrc}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => {
          if (!isError) {
            setIsError(true);
            setImgSrc(fallbackSrc);
          }
        }}
        className={className}
      />
    </span>
  );
};
