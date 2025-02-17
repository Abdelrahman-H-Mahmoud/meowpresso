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
        className="flex items-center gap-1.5 px-3 py-1.5 bg-brown-50 dark:bg-accent-900/20 
          rounded-full text-brown-600 dark:text-accent-400 cursor-help"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Users className="w-4 h-4 flex-shrink-0" />
        <div className="flex flex-col -space-y-0.5">
          <span className="text-sm font-semibold leading-none">{count}</span>
          <span className="text-[10px] leading-none opacity-80">on waitlist</span>
        </div>
      </motion.div>
    </Tooltip>
  );
} 