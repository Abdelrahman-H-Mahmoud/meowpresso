'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/store/useCartStore';

export function CartHydration() {
  const setHydrated = useCartStore(state => state.setHydrated);

  useEffect(() => {
    setHydrated(true);
  }, [setHydrated]);

  return null;
} 