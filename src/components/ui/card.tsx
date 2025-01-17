import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva('default-border-color flex w-full flex-col rounded-sm border p-0! p-2.5', {
  variants: {
    variant: {
      default: 'dark:bg-offgray-800/8 bg-white/60 sh-alt',
      destructive:
        'dark:bg-offgray-800/8 bg-white/60 text-white dark:[box-shadow:6px_6px_0_#82181a40] hover:bg-red-600 active:[box-shadow:none] hover:[box-shadow:none] dark:hover:[box-shadow:none] [box-shadow:6px_6px_0_#ffa2a2]',
    },
    size: {},
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string;
  description?: string;
  header?: React.ReactNode;
}

export function Card({
  children,
  title,
  description,
  header,
  variant,
  className,
}: Readonly<CardProps>) {
  return (
    <div className={cn(cardVariants({ variant, className }))}>
      {title && description && (
        <div className="space-y-1 border-b px-4 pt-4 pb-3 dark:border-gray-600/40">
          <span className="flex w-full items-center justify-between">
            <h4
              className={cn(
                'font-lora h4 scroll-mt-24 font-medium text-pretty',
                variant === 'default' && 'text-accent-blue dark:text-blue-300',
                variant === 'destructive' && 'text-red-500 dark:text-red-400',
              )}
            >
              {title}
            </h4>
            {header}
          </span>
          <p className="text-offgray-800 mb-2 dark:text-white">{description}</p>
        </div>
      )}
      <div className="bg-cream-50/30 dark:bg-offgray-900/5 flex items-center gap-4 p-2.5">
        {children}
      </div>
    </div>
  );
}
