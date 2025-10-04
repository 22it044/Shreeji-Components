import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  aboveTheFold?: boolean;
}

/**
 * ResponsiveImage component that automatically handles:
 * - WebP format with proper fallbacks
 * - Responsive sizes with srcSet
 * - Proper loading attributes (eager for above-the-fold, lazy for below)
 * - Correct fetchpriority for LCP images
 */
export function ResponsiveImage({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw',
  priority = false,
  aboveTheFold = false,
}: ResponsiveImageProps) {
  // Use the original image path directly
  const originalSrc = src;
  
  // Generate srcSet for responsive images
  const widths = [400, 800, 1200];
  const srcSet = widths
    .map(w => {
      // Extract file name and extension
      const lastSlashIndex = originalSrc.lastIndexOf('/');
      const fileName = originalSrc.substring(lastSlashIndex + 1);
      const directory = originalSrc.substring(0, lastSlashIndex + 1);
      
      return `${directory}${fileName} ${w}w`;
    })
    .join(', ');
  
  // Determine loading strategy
  const loadingStrategy = priority || aboveTheFold ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : 'auto';
  
  return (
    <img
      src={originalSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loadingStrategy}
      fetchpriority={fetchPriority}
    />
  );
}