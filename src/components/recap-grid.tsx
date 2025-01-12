import Link from 'next/link';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import type { LucideIcon } from 'lucide-react';

/*
  <span className="absolute inset-x-0 bottom-2 z-2 flex h-2 items-center justify-center bg-gradient-to-t from-white dark:from-transparent">
    <ArrowDown className="text-accent-blue size-4 animate-bounce dark:text-blue-300" />
  </span>
*/

export type RecapGridItem = {
  data: {
    title: string;
    href: string;
    date: Date;
    icon: LucideIcon;
  }[];
};

export function RecapGrid({ data }: Readonly<RecapGridItem>) {
  return (
    <div
      role="grid"
      className="default-border-color relative grid max-h-[300px] w-full grid-cols-2 overflow-clip overflow-y-auto border-t border-b border-l [scrollbar-width:none] md:grid-cols-4 lg:max-h-[400px] lg:min-h-[400px] lg:overflow-clip lg:border-b-0 [&::-webkit-scrollbar]:hidden"
    >
      {data.map(({ title, href, date, icon: Icon }) => (
        <Link
          key={title}
          href={href}
          className="group group default-border-color relative flex flex-col items-center justify-center border-r border-b px-4 py-8 text-sm hover:bg-gradient-to-br hover:from-blue-50/40 hover:to-blue-50/80 focus-visible:[outline-offset:-4px]! dark:hover:from-blue-600/4 dark:hover:to-blue-700/8"
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 [z-index:-1] h-full w-full fill-blue-500/50 stroke-blue-500/50 !opacity-20 [mask-image:linear-gradient(to_top,_#ffffffad,_transparent)]"
          >
            <defs>
              <pattern
                id=":r2o:"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                x="-1"
                y="-1"
              >
                <path d="M.5 20V.5H20" fill="none" strokeDasharray="0" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r2o:)" />
          </svg>
          <div className="flex h-full flex-col items-center text-center">
            <Icon className="text-accent-blue size-5 dark:text-blue-300" />
            <span className="group-hover:text-accent-blue mt-2 font-medium dark:group-hover:text-blue-300">
              {title}
            </span>
            <span className="group-hover:text-accent-blue mt-1 text-xs opacity-80 dark:group-hover:text-blue-300">
              {format(date, 'yyyy MMM', { locale: tr })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
