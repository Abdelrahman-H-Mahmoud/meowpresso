'use client';

import { LucideProps } from 'lucide-react';

export function Steam({ size = 24, className, ...props }: LucideProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" />
      <path d="M7 10.5c0 0 2-3 5-3s5 3 5 3" />
      <path d="M7 13.5c0 0 2 3 5 3s5-3 5-3" />
    </svg>
  );
} 