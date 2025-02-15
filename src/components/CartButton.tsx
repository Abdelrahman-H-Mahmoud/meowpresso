'use client';

import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { useEffect, useState } from 'react';

export function CartButton() {
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore(state => state.totalItems());
  const hydrated = useCartStore(state => state.hydrated);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted and hydrated
  if (!mounted || !hydrated) {
    return (
      <div className="w-9 h-9 flex items-center justify-center">
        <ShoppingBag className="w-5 h-5" />
      </div>
    );
  }

  return (
    <Link href="/cart">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <ShoppingBag className="w-5 h-5" />
        {totalItems > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-brown-600 dark:bg-accent-500 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs">{totalItems}</span>
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
} 