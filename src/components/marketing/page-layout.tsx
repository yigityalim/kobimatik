'use client';

import React from 'react';
import { notFound, usePathname } from 'next/navigation';
import { flattenMenu, menu } from '@/lib/menu';
import { Home } from 'lucide-react';

export function PageLayout({ children }: React.PropsWithChildren) {
    const pathname = usePathname();
    const flatMenu = React.useMemo(() => flattenMenu(menu), []);
    const page = flatMenu.find((item) => item.href === pathname);

    if (!page) notFound();

    const Icon = page.icon ?? Home;

    return (
        <div className="w-full px-4 pt-4 pb-24 md:mx-auto md:max-w-[1248px] lg:pt-8 xl:px-6">
            <section className="relative mb-4 w-full overflow-clip bg-linear-to-t from-blue-100/30 px-4 py-12 sm:px-6 dark:from-blue-900/5">
                <div className="absolute top-0 left-0">
                    <Icon className="size-[400px] fill-blue-600/10 blur-sm" />
                </div>
                <div className="mx-auto flex w-full max-w-(--breakpoint-sm) flex-col items-start justify-between gap-8 md:max-w-[1200px] md:flex-row md:items-center">
                    <hgroup className="mx-auto flex w-full max-w-lg max-w-xl flex-col items-center gap-1">
                        <h2 className="font-lora text-accent-blue mb-2.5 scroll-mt-24 text-center text-[clamp(2.5rem,1.2rem_+_1vw,1.7rem)] font-medium text-pretty dark:text-blue-300">
                            {page.name}
                        </h2>
                        <p className="text-offgray-50 dark:text-offgray-600 text-center tracking-tight">
                            <span>
                                <span>Her bütçeye uygun fiyatlarla, en iyi hizmeti alın.</span>
                            </span>
                        </p>
                    </hgroup>
                </div>
            </section>
            <div className="relative grid w-full grid-cols-5 gap-6 pb-10 xl:gap-16">{children}</div>
        </div>
    );
}
