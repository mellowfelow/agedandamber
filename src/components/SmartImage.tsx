import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  fallbackSrc = 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&q=80&w=800',
  className = '',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  return (
    <img
      src={isError ? fallbackSrc : imgSrc}
      alt={alt}
      onError={() => {
        if (!isError) {
          setIsError(true);
          setImgSrc(fallbackSrc);
        }
      }}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};
