'use client';

import React from 'react';
import { PageLayout } from '@/components/marketing/page-layout';
import { pricing } from '@/mocks/pricing';
import { cn, sleep } from '@/lib/utils';
import { PricingCard } from '@/components/marketing/pricing-card';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { smoothScroll } from '@/lib/utils';
import Link from 'next/link';
import { Drawer } from 'vaul';
import { ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
    const [open, setOpen] = React.useState(false);
    const pricingIds = pricing.map((p) => p.id.toString());
    const activeId = useIntersectionObserver(pricingIds);

    const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        e.preventDefault();
        smoothScroll(id, 100);
    };

    return (
        <PageLayout>
            <div className="text-offgray-600 col-span-5 max-w-5xl px-0 pb-2.5 text-center font-mono text-[.6875rem] font-bold tracking-wider uppercase lg:col-span-1 lg:px-2.5 lg:text-left">
                <nav className="fixed bottom-0 left-0 z-2 flex w-full px-4 py-2 md:hidden">
                    <Drawer.Root open={open} onOpenChange={setOpen}>
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
                                    {pricing.map((p, index) => {
                                        const Icon = p.icon;
                                        return (
                                            <React.Fragment key={p.id}>
                                                <button
                                                    onClick={async (e) => {
                                                        setOpen(false);
                                                        await sleep(500);
                                                        handleLinkClick(e, p.id.toString());
                                                    }}
                                                    className={cn(
                                                        'dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                                                        activeId === p.id.toString()
                                                            ? 'bg-offgray-100/50 dark:bg-offgray-500/10'
                                                            : '',
                                                    )}
                                                >
                                                    <Icon className="size-[14px] text-blue-400" />
                                                    {p.name}
                                                    {!(activeId === p.id.toString()) && (
                                                        <ChevronRight className="ml-auto size-[14px] text-blue-400" />
                                                    )}
                                                </button>
                                                {index < pricing.length - 1 && (
                                                    <div className="border-offgray-200 dark:border-offgray-800/50 border-b" />
                                                )}
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
                <nav className="pt-0 lg:sticky lg:top-24 lg:pt-10">
                    <p className="text-offgray-600 px-0 pt-4 pb-2.5 text-center font-mono text-[.6975rem] font-bold tracking-wider uppercase select-none lg:border-l lg:px-2.5 lg:text-left dark:border-l-gray-700/20">
                        Size Özel Seçeneklerimiz
                    </p>
                    <ul
                        className="flex overflow-x-auto text-sm lg:flex-col"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {pricing.map((p) => (
                            <li className="flex w-full flex-1" key={p.id}>
                                <button
                                    className={cn(
                                        'dark:text-offgray-300 w-full cursor-pointer scroll-mt-0 border-b p-2.5 text-center text-[.6875rem] font-bold tracking-wider text-nowrap uppercase transition-colors duration-300 focus-visible:[outline-offset:-4px]! lg:border-b-0 lg:border-l lg:px-4 lg:py-1 lg:text-left dark:border-l-gray-700/20',
                                        activeId === p.id.toString()
                                            ? 'text-accent-blue bg-accent-blue/5 dark:bg-accent-blue/12 border-accent-blue/50 border-b-accent-blue dark:border-blue-300/40 dark:border-b-blue-300 dark:text-blue-400'
                                            : 'hover:bg-accent-blue/10 border-b-offgray-200 dark:border-b-oggray-800 dark:border-gray-700/20',
                                    )}
                                    onClick={(e) => handleLinkClick(e, p.id.toString())}
                                >
                                    {p.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="col-span-5 grid lg:col-span-4">
                {pricing.map((pricing) => (
                    <PricingCard key={pricing.id} {...pricing} />
                ))}
            </div>
        </PageLayout>
    );
}
