'use client';

import { useKbd } from '@/lib/hooks/use-kbd';

export function Kbd() {
  const key = useKbd();
  return (
    <kbd className="dark:border-offgray-400/10 dark:bg-cream-900/10 flex hidden h-5 max-w-max items-center gap-0.5 rounded-xs border border-gray-500/20 border-white/20! bg-gray-50/50 bg-white/10! px-1.5 text-[.6875rem] font-bold text-gray-500 text-white! sm:flex dark:text-gray-300">
      {key}
    </kbd>
  );
}
