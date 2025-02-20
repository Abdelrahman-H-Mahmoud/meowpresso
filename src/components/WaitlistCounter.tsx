'use client';

import { useWaitlistStore } from '@/stores/waitlist';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tooltip } from '@/components/ui/Tooltip';

export function WaitlistCounter() {
  const count = useWaitlistStore(state => state.count);

  return (
    <Tooltip content="Coffee enthusiasts on waitlist">
      <motion.div 
        className="flex items-center gap-1.5 px-2 py-1.5 bg-brown-50 dark:bg-accent-900/20 
          rounded-full text-brown-600 dark:text-accent-400 cursor-help"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Users className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
        <span className="text-xs md:text-sm font-medium leading-none">{count}</span>
      </motion.div>
    </Tooltip>
  );
} 