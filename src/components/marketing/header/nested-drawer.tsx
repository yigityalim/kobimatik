'use client';

import { Drawer } from 'vaul';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { locales, useChangeLocale, useScopedI18n } from '@/locales/client';
import Image from 'next/image';
import React from 'react';
import { Link } from '@/components/link';
import { Button } from '@/components/ui/button';
import { MenuItem } from '@/lib/menu';
import { Noise } from '@/components/Noise';

export interface NestedDrawerProps {
  item: MenuItem;
  title?: { displayName: string; locale: string };
  locale: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NestedDrawer({ item, title, locale, setOpen }: Readonly<NestedDrawerProps>) {
  const Icon = item.icon;
  const Component = item.component;
  const changeLocale = useChangeLocale();
  const t = useScopedI18n('menu');

  return (
    <Drawer.NestedRoot>
      <Drawer.Trigger>
        <span
          key={item.name}
          className="dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          {Icon && <Icon className="size-[14px] text-blue-400" />}
          {t(item.name as any)} {/* FIXME: Remove any */}
          <ChevronRight className="ml-auto size-[14px] text-blue-400" />
        </span>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-[21] bg-black/40 backdrop-blur-md" />
        <Drawer.Content
          className={cn(
            'border-t-offgray-300 dark:border-t-offgray-950 fixed right-0 bottom-0 left-0 z-203 mt-24 flex flex-col rounded-t-[10px] border-t bg-white outline-none dark:bg-[hsl(218,_13%,_12%)]',
            // "code" in item.children array.
            item.children?.some((item) => 'code' in item) ? 'h-[70%]' : 'h-fit',
          )}
        >
          <Drawer.Description
            className={cn(
              item.title
                ? 'text-offgray-600 dark:text-offgray-200 inline-flex items-center justify-between px-4 pt-8 pb-2 text-lg font-bold'
                : 'sr-only',
            )}
          >
            <span>{t('countrySelect')}</span>{' '}
            {title?.locale && (
              <span className="text-offgray-500 font-lora text-[12px] font-semibold italic">
                {`(${t('choosen')}: ${title.displayName})`}
              </span>
            )}
          </Drawer.Description>
          <Drawer.Title className="sr-only">İkinci Menü</Drawer.Title>
          <nav className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
            {item.children?.map((item) => {
              if ('code' in item) {
                return (
                  <button
                    aria-label={item.name}
                    aria-pressed={locale === item.href}
                    aria-disabled={
                      locale === item.href || !locales.find((l) => l.locale === item.href)
                    }
                    type="button"
                    key={`${item.code}-${item.name}-${crypto.randomUUID()}`}
                    className={cn(
                      'hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 inline-flex w-full cursor-pointer items-center justify-start gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                      locale === item.href
                        ? 'bg-offgray-100/50 dark:bg-offgray-500/10 cursor-auto'
                        : '',
                    )}
                    disabled={!locales.find((l) => l.locale === item.href)}
                    onClick={() => {
                      if (item.href === locale) {
                        //toast.error(t('alreadySelected'));
                        return;
                      }
                      changeLocale(item.href as any); // FIXME: Remove any
                    }}
                  >
                    <Image
                      className="h-8 w-auto"
                      src={(item as any).image} // FIXME: Remove any
                      alt={item.name + ' Flag url'}
                      width={30}
                      height={30}
                    />
                    {item.href === locale && (
                      <span className="dark:text-offgray-200 text-sm font-semibold tracking-tight text-nowrap text-blue-400 italic">
                        {t('active')}
                      </span>
                    )}
                    {!locales.find((l) => l.locale === item.href) && (
                      <span className="text-sm text-red-500">{t('soon')}</span>
                    )}
                    <span className="dark:text-offgray-200 ml-auto text-sm text-[14px] font-semibold tracking-tight text-nowrap text-gray-500">
                      {(item as any).nativeName} {/* FIXME: Remove any */}
                    </span>
                  </button>
                );
              }
              if ('header' in item && item.children) {
                return (
                  <React.Fragment key={item.header}>
                    <h3
                      key={`header-${item.header}-${crypto.randomUUID()}`}
                      className="text-offgray-600 px-2 py-1 font-mono text-[13px] font-bold tracking-wider uppercase"
                    >
                      {item.header}
                    </h3>
                    {item.children.map(({ href, icon: Icon, name, published }) => {
                      if (published === false) return null;
                      return (
                        <Link
                          key={`${name}-${href}`}
                          href={href ?? ''}
                          onClick={() => setOpen(false)}
                          className={cn(
                            'group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                          )}
                        >
                          {Icon && <Icon className="size-[14px] text-blue-400" />}
                          {t(name as any)} {/* FIXME: Remove any */}
                          <ChevronRight className="ml-auto size-[14px] text-blue-400" />
                        </Link>
                      );
                    })}
                  </React.Fragment>
                );
              }

              if ('seperator' in item && item.seperator) {
                return (
                  <hr
                    key={`seperator-${crypto.randomUUID()}`}
                    className="my-2 border-gray-200 dark:border-gray-600/20"
                  />
                );
              }

              return null;
            })}
          </nav>
          <hr className="mx-4 my-2 mt-4 border-gray-200 dark:border-gray-600/20" />
          <div className="px-4 py-4">
            <Drawer.Close asChild>
              <Button>{t('closeSubMenu')}</Button>
            </Drawer.Close>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.NestedRoot>
  );
}
