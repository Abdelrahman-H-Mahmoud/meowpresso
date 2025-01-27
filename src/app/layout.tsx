import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { QueryProvider } from '@/providers/QueryProvider';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { ScrollProgress } from '@/components/ScrollProgress';
import { PageTransition } from '@/components/PageTransition';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meowpresso",
  description: "Meowpresso is a platform for coffee lovers to explore recipes, brewing techniques, and coffee culture.",
  manifest: "/manifest.json",
  themeColor: "#4A2C2A",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Meowpresso",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://meowpresso-nfzq.vercel.app/',
    siteName: 'Meowpresso',
    title: 'Meowpresso - Your Coffee Recipe Companion',
    description: 'Discover and brew perfect coffee with our curated recipes and guides',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Meowpresso - Coffee Recipes and Brewing Guides',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meowpresso - Your Coffee Recipe Companion',
    description: 'Discover and brew perfect coffee with our curated recipes and guides',
    images: ['/images/logo.png'],
    creator: '@meowpresso',
  },
  keywords: ['coffee', 'recipes', 'brewing', 'espresso', 'cafe', 'barista', 'coffee guide'],
  authors: [{ name: 'Meowpresso Team' }],
  creator: 'Meowpresso',
  publisher: 'Meowpresso',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple-touch-icon.png" />
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#4A2C2A" />
        
      </head>
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
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
