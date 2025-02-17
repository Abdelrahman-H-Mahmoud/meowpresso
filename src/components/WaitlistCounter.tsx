'use client';

import { useWaitlistCount } from '@/hooks/useWaitlistCount';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function WaitlistCounter() {
  const count = useWaitlistCount();

  return (
    <motion.div 
      className="flex items-center gap-2 px-3 py-1.5 bg-brown-50 dark:bg-accent-900/20 
        rounded-full text-brown-600 dark:text-accent-400"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Users className="w-4 h-4" />
      <span className="text-sm font-medium">{count}</span>
    </motion.div>
  );
} 