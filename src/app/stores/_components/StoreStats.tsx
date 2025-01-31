'use client';

import { Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

interface StoreStatsProps {
  totalStores: number;
}

export function StoreStats({ totalStores }: StoreStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center mb-12"
    >
      <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md">
        <Coffee className="w-5 h-5 text-brown-600 dark:text-accent-400" />
        <span className="text-gray-600 dark:text-gray-300">
          Showing <span className="font-bold text-coffee-dark dark:text-white">{totalStores}</span> coffee stores
        </span>
      </div>
    </motion.div>
  );
} 