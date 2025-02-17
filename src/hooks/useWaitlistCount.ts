'use client';

import { useEffect } from 'react';
import { useWaitlistStore } from '@/stores/waitlist';

export function useWaitlistCount() {
  const { count, fetchCount } = useWaitlistStore();

  useEffect(() => {
    fetchCount();
  }, [fetchCount]);

  return count;
}