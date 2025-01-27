"use client";

import { useScroll, motion } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brown-600 dark:bg-accent-500 transform origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
} 