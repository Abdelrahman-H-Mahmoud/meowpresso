'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-brown-600/5 dark:bg-accent-500/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-coffee-dark dark:text-white mb-4">
            Ready to Start Your Coffee Journey?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of coffee enthusiasts and discover the perfect brew for every moment.
          </p>
          <Link 
            href="/recipes"
            className="inline-flex items-center px-6 py-3 bg-brown-600 hover:bg-brown-700 dark:bg-accent-500 dark:hover:bg-accent-600 text-white rounded-lg transition-colors group"
          >
            Explore Recipes
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 