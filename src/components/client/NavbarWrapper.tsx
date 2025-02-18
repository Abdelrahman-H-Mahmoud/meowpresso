'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Navbar = dynamic(() => import('@/components/client/Navbar'), {
  ssr: false,
  loading: () => null,
});

export function NavbarWrapper() {
  return (
    <Suspense fallback={null}>
      <Navbar />
    </Suspense>
  );
} 