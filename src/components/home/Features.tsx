'use client';

import { motion } from 'framer-motion';
import { features } from '@/config/features';

export function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-coffee-dark dark:text-white mb-4">
            Everything You Need to Brew Like a Pro
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {`From beginner-friendly guides to advanced techniques, we've got everything you need to elevate your coffee game.`}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-brown-600/5 dark:bg-accent-500/5"
            >
              <feature.icon className="w-12 h-12 text-brown-600 dark:text-accent-500 mb-4" />
              <h3 className="text-xl font-bold text-coffee-dark dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 