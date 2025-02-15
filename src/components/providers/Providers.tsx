'use client';

import { CartHydration } from './CartHydration';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CartHydration />
      {children}
    </>
  );
} 