'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function BlurImage({ src, alt, className }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={cn('relative overflow-hidden bg-gray-200 dark:bg-gray-800', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          'object-cover duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
} 