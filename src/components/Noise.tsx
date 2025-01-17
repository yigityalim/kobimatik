import React from 'react';
import { cn } from '@/lib/utils';

export const Noise: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => (
  <React.Suspense>
    <div
      id={React.useId() + crypto.getRandomValues(new Uint32Array(1))[0]}
      className={cn(
        'pointer-events-none absolute inset-0 [z-index:-1] bg-[url(/noise.0e24d0e5.png)] bg-[size:180px] bg-repeat opacity-[0.035] dark:opacity-[0.015]',
        className,
      )}
      {...props}
    />
  </React.Suspense>
);
