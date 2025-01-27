import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { QueryProvider } from '@/providers/QueryProvider';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { ScrollProgress } from '@/components/ScrollProgress';
import { PageTransition } from '@/components/PageTransition';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beanlyst",
  description: "Beanlyst is a platform for coffee lovers to explore recipes, brewing techniques, and coffee culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen
        bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}
      >
        <ThemeProvider>
          <QueryProvider>
            <ScrollProgress />
            <Navbar />
            <PageTransition>
              <main className="pt-16">
                {children}
              </main>
            </PageTransition>
            <ScrollToTop />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
