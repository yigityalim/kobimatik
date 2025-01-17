'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function Hr() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.1, delay: 0.4 }}
      className="-mx-3 flex items-center justify-center md:-mx-12"
    >
      <hr className="grid-border-color w-full border-t" />
    </motion.section>
  );
}
