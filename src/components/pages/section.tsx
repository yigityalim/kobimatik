'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function Section({
  children,
  className,
  ...props
}: Readonly<React.ComponentProps<typeof motion.section>>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative bg-linear-to-t from-blue-100/20 px-4 pt-20 pb-[12rem] sm:px-6 sm:pt-28 md:pb-[10.9rem] dark:from-blue-900/5',
        className,
      )}
      {...props}
    >
      {children}
    </motion.section>
  );
}
