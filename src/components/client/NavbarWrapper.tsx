'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Navbar = dynamic(() => import('@/components/layout/navbar'), {
  ssr: false,
  loading: () => <div className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm" />
});

export function NavbarWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm" />;
  }

  return <Navbar />;
} 