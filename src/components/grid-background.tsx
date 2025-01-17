import React from 'react';
import { cn } from '@/lib/utils';

export function GridBackground({
  className,
  ...props
}: Readonly<React.HTMLAttributes<SVGSVGElement>>) {
  const id = `${React.useId()}${crypto.getRandomValues(new Uint32Array(1))[0]}:`;
  return (
    <React.Suspense>
      <svg
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 [z-index:-1] h-full w-full fill-blue-500/50 stroke-blue-500/50 opacity-[.30] [mask-image:linear-gradient(to_top,_#ffffffad,_transparent)]',
          className,
        )}
        {...props}
      >
        <defs>
          <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse" x="-1" y="-1">
            <path d="M.5 20V.5H20" fill="none" strokeDasharray="0" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill={`url(#${id})`} />
      </svg>
    </React.Suspense>
  );
}
