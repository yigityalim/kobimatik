'use client';

import React from 'react';
import { notFound, usePathname, useRouter } from 'next/navigation';
import { flattenMenu, menu } from '@/lib/menu';
import { ChevronRight, Home, LucideIcon } from 'lucide-react';
import { Drawer } from 'vaul';
import { cn, sleep, smoothScroll } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';

export type Breadcrumb = {
    id: string;
    name: string;
    icon?: LucideIcon;
    href?: string;
};

type DotNotation<T, K extends string> = T extends object
    ? {
          [P in keyof T]: P extends string
              ? T[P] extends object
                  ? `${P}.${DotNotation<T[P], K>}`
                  : P extends K
                    ? P
                    : never
              : never;
      }[keyof T]
    : never;

export interface PageLayoutProps extends React.PropsWithChildren {
    breadcrumbs?: Breadcrumb[];
    pageHeading: DotNotation<(typeof import('@/locales/tr').default)['pages'], 'title'>;
    pageDescription: DotNotation<(typeof import('@/locales/tr').default)['pages'], 'description'>;
}

export function PageLayout({
    children,
    breadcrumbs,
    pageHeading,
    pageDescription,
}: Readonly<PageLayoutProps>) {
    const pathname = usePathname();
    const t = useScopedI18n('pages');
    const locale = useCurrentLocale();
    const router = useRouter();
    const activeId =
        useIntersectionObserver(breadcrumbs?.map((b) => b.id.toString()) ?? []) ??
        breadcrumbs?.at(0)?.id;
    const flatMenu = React.useMemo(() => flattenMenu(menu, `/${locale}`), [menu, locale]);
    const page = flatMenu.find((item) => item.href === pathname);

    const handleLinkClick = React.useCallback(
        (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
            e.preventDefault();
            smoothScroll(id, 100);
        },
        [],
    );

    if (!page) {
        notFound();
    }

    return (
        <div className="grid w-full grid-cols-5">
            <section className="relative -z-1 col-span-5 mb-4 w-full overflow-clip bg-linear-to-t from-blue-100/30 px-4 py-32 sm:px-6 dark:from-blue-900/5">
                {/* bottom gradient */}
                <div className="from-background via-background/60 to-background/20 pointer-events-none absolute inset-x-0 bottom-0 z-1 h-24 bg-gradient-to-t" />
                {/* top gradient
                <div className="from-background to-background/20 pointer-events-none absolute inset-x-0 top-0 z-1 h-12 bg-gradient-to-b" />
                */}
                {/* left and right gradient
                <div className="from-background to-background/20 pointer-events-none absolute inset-y-0 left-0 z-1 w-12 bg-gradient-to-r" />
                <div className="from-background to-background/20 pointer-events-none absolute inset-y-0 right-0 z-1 w-12 bg-gradient-to-l" />
                */}
                {/* background pattern */}
                <svg
                    className="pointer-events-none absolute inset-0 h-full w-full fill-blue-500/50 stroke-blue-500/50 opacity-20 dark:opacity-10"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="pricing-pattern-page"
                            x="0"
                            y="0"
                            width="13"
                            height="13"
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 13V.5H13" fill="none" strokeDasharray="0" />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth="0"
                        fill="url(#pricing-pattern-page)"
                    />
                </svg>
                <div className="mx-auto flex w-full max-w-(--breakpoint-sm) flex-col items-start justify-between gap-8 md:max-w-[1200px] md:flex-row md:items-center">
                    <hgroup className="mx-auto flex w-full max-w-lg max-w-xl flex-col items-center gap-1">
                        <h2 className="font-lora text-accent-blue mb-2.5 scroll-mt-24 text-center text-[clamp(2.5rem,1.2rem_+_1vw,1.7rem)] font-medium text-pretty dark:text-blue-300">
                            {t(pageHeading)}
                        </h2>
                        <p className="text-offgray-50 dark:text-offgray-600 text-center tracking-tight">
                            {t(pageDescription)}
                        </p>
                    </hgroup>
                </div>
            </section>
            {breadcrumbs && (
                <div className="text-offgray-600 col-span-5 max-w-5xl text-center font-mono text-[.6875rem] font-bold tracking-wider uppercase md:px-0 md:pb-2.5 lg:col-span-1 lg:px-2.5 lg:text-left">
                    <nav className="fixed bottom-0 left-0 z-2 flex w-full px-4 py-2 md:hidden">
                        <Drawer.Root>
                            <Drawer.Trigger className="border-t-offgray-400/50 dark:border-t-offgray-800/50 bg-background fixed bottom-0 left-0 z-2 inline-flex w-full items-center justify-center border-t py-4 md:hidden">
                                Sayfa Menüsünü Aç
                            </Drawer.Trigger>
                            <Drawer.Portal>
                                <Drawer.Overlay className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm" />
                                <Drawer.Content className="bg-background fixed right-0 bottom-0 left-0 z-101 mt-24 flex h-fit flex-col rounded-t-[10px] px-4 pt-6 outline-none">
                                    <Drawer.Description className="sr-only">
                                        Sayfa Menüsü
                                    </Drawer.Description>
                                    <Drawer.Title className="text-offgray-800 dark:text-offgray-50 pb-4 pl-4 font-mono text-lg font-bold uppercase">
                                        Sayfa Menüsü
                                    </Drawer.Title>
                                    <nav className="flex flex-col gap-2">
                                        {breadcrumbs.map((p) => {
                                            const Icon = p.icon;
                                            return (
                                                <React.Fragment key={p.id}>
                                                    <Drawer.Close
                                                        onClick={async (e) => {
                                                            await sleep(500);
                                                            handleLinkClick(e, p.id.toString());
                                                            if (p.href) {
                                                                router.push(p.href);
                                                            }
                                                        }}
                                                        className={cn(
                                                            'dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                                                            activeId === p.id.toString()
                                                                ? 'bg-offgray-100/50 dark:bg-offgray-500/10'
                                                                : '',
                                                            p.href && p.href === pathname
                                                                ? 'text-red-500'
                                                                : '', // TODO: This is test code. Fix it.
                                                        )}
                                                    >
                                                        {Icon && (
                                                            <Icon className="size-[14px] text-blue-400" />
                                                        )}
                                                        {p.name}
                                                        <ChevronRight className="ml-auto size-[14px] text-blue-400" />
                                                    </Drawer.Close>
                                                </React.Fragment>
                                            );
                                        })}
                                    </nav>
                                    <div className="mt-3 flex w-full flex-col justify-center gap-2 p-4">
                                        <Drawer.Close asChild>
                                            <Button variant="ghost">Menüyü Kapat</Button>
                                        </Drawer.Close>
                                    </div>
                                </Drawer.Content>
                            </Drawer.Portal>
                        </Drawer.Root>
                    </nav>
                    <nav className="hidden pt-0 md:block lg:sticky lg:top-24 lg:pt-10 lg:pl-12">
                        <p className="text-offgray-600 px-0 pt-4 pb-2.5 text-center font-mono text-[.6975rem] font-bold tracking-wider uppercase select-none lg:border-l lg:px-2.5 lg:text-left dark:border-l-gray-700/20">
                            {t(pageHeading)}{' '}
                        </p>
                        <ul
                            className="flex overflow-x-auto text-sm lg:flex-col"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >
                            {breadcrumbs.map((b) => (
                                <li className="flex w-full flex-1" key={b.id}>
                                    <button
                                        className={cn(
                                            'dark:text-offgray-300 w-full cursor-pointer scroll-mt-0 border-b p-2.5 text-center text-[.6875rem] font-bold tracking-wider text-nowrap uppercase transition-colors duration-300 focus-visible:[outline-offset:-4px]! lg:border-b-0 lg:border-l lg:px-4 lg:py-1 lg:text-left lg:text-wrap dark:border-l-gray-700/20',
                                            activeId === b.id.toString()
                                                ? 'text-accent-blue bg-accent-blue/5 dark:bg-accent-blue/12 border-accent-blue/50 border-b-accent-blue dark:border-blue-300/40 dark:border-b-blue-300 dark:text-blue-400'
                                                : 'hover:bg-accent-blue/10 border-b-offgray-200 dark:border-b-oggray-800 dark:border-gray-700/20',
                                            b.href && b.href === pathname ? 'text-red-500' : '', // TODO: This is test code. Fix it.
                                        )}
                                        onClick={(e) => {
                                            handleLinkClick(e, b.id.toString());
                                            if (b.href) {
                                                router.push(b.href);
                                            }
                                        }}
                                    >
                                        {b.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
            <div className="relative col-span-5 w-full gap-6 px-4 pb-10 pb-24 md:col-span-4 md:mx-auto md:max-w-[1248px] lg:pt-8 xl:gap-16 xl:px-6">
                {children}
            </div>
        </div>
    );
}
