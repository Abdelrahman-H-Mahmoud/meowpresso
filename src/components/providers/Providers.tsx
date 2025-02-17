'use client';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { QueryProvider } from '@/providers/QueryProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import { WaitlistProvider } from '@/providers/WaitlistProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WaitlistProvider>
      <AuthProvider>
        <ThemeProvider>
          <QueryProvider>
            {children}
          </QueryProvider>
        </ThemeProvider>
      </AuthProvider>
    </WaitlistProvider>
  );
} 