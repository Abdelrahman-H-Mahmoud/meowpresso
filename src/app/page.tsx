'use client';

import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { CTA } from '@/components/home/CTA';
import { WaitlistSubscribe } from '@/components/WaitlistSubscribe';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <CTA />
      <WaitlistSubscribe />
    </div>
  );
}

