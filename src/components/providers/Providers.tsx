'use client';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { QueryProvider } from '@/providers/QueryProvider';
import { AuthProvider } from '@/providers/AuthProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <QueryProvider>
          {children}
        </QueryProvider>
      </ThemeProvider>
    </AuthProvider>
  );
} 