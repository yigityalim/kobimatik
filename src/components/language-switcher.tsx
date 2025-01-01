'use client';

import { Drawer } from 'vaul';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import countries from '@/lib/countries';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';

export function LanguageSwitcher() {
    const t = useI18n();
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();
    const isLaptop = useMediaQuery('(min-width: 1024px)');
    return (
        <Drawer.Root direction={isLaptop ? 'right' : 'bottom'}>
            <Drawer.Trigger asChild>
                <Button className="mb-8 w-fit">{t('menu.language')}</Button>
            </Drawer.Trigger>
            <Drawer.Overlay className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm" />
            <Drawer.Content
                className="fixed right-0 bottom-0 left-0 z-101 mt-24 flex h-[70%] flex-col rounded-t-[10px] outline-none md:top-2 md:right-2 md:bottom-2 md:left-auto md:w-[300px] md:rounded-[10px]"
                style={
                    isLaptop
                        ? ({ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties)
                        : {}
                }
            >
                <Drawer.Description className="sr-only">Menü</Drawer.Description>
                <Drawer.Title className="bg-background text-offgray-600 dark:text-offgray-200 inline-flex items-center justify-between px-4 pt-8 pb-2 text-lg font-bold">
                    <span>{t('menu.countrySelect')}</span>{' '}
                    <span className="text-offgray-500 font-lora text-[12px] font-semibold italic">
                        {t('menu.choosen')}:{' '}
                        {countries.find((item) => item.href === locale)?.nativeName}
                    </span>
                </Drawer.Title>
                <nav className="bg-background flex flex-1 flex-col gap-2 overflow-y-auto p-4">
                    {countries.map((item, index) => (
                        <button
                            key={`${item.code}-${item.name}-${index}`}
                            className={cn(
                                'hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 inline-flex w-full cursor-pointer items-center justify-between rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                                locale === item.href
                                    ? 'bg-offgray-100/50 dark:bg-offgray-500/10'
                                    : '',
                            )}
                            disabled={locale === item.href}
                            onClick={() => {
                                if (item.href === locale) {
                                    return;
                                }
                                changeLocale(item.href);
                            }}
                        >
                            <Image
                                className="h-8 w-auto"
                                src={item.image}
                                alt={item.name + ' Flag url'}
                                width={30}
                                height={30}
                            />
                            <span className="text-sm text-gray-500 italic">{item.nativeName}</span>
                        </button>
                    ))}
                </nav>
                <div className="bg-background border-t border-t-gray-200 px-4 py-4 dark:border-t-gray-600/20">
                    <Drawer.Close asChild>
                        <Button>{t('menu.closeSubMenu')}</Button>
                    </Drawer.Close>
                </div>
            </Drawer.Content>
        </Drawer.Root>
    );
}
