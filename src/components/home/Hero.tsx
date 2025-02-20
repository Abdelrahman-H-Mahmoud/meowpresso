'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cat, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100vh] pt-20 flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80"
          alt="Coffee Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <Cat className="w-12 h-12 text-white" />
              <h2 className="text-2xl font-bold text-white">Meowpresso</h2>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Purrfect Your Coffee Making Skills
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Join our feline baristas in exploring the art of coffee making. From whisker-licking good recipes to tail-raising brewing techniques.
            </p>
            <Link 
              href="/recipes"
              className="inline-flex items-center px-6 py-3 bg-brown-600 hover:bg-brown-700 dark:bg-accent-500 dark:hover:bg-accent-600 text-white rounded-lg transition-colors group"
            >
              Start Brewing
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-72 h-72 md:w-96 md:h-96 relative"
          >
            <Image
              src="/images/logo.png"
              alt="Meowpresso Cat Mascot"
              width={400}
              height={400}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 