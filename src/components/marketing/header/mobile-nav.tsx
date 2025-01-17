'use client';

import React from 'react';
import { Drawer } from 'vaul';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { menu } from '@/lib/menu';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useScopedI18n, useCurrentLocale } from '@/locales/client';
import { ThemeButton } from '@/components/theme-button';
import { Link } from '@/components/link';
import { AuthDrawer } from '@/components/marketing/header/auth-drawer';
import { NestedDrawer } from '@/components/marketing/header/nested-drawer';
import { Noise } from '@/components/Noise';
import { BrandLogo } from '@/components/brand-logo';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const t = useScopedI18n('menu');
  const locale = useCurrentLocale();

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger className="border-offgray-400/20 dark:border-offgray-800/50 inline-flex size-[32px] items-center justify-center rounded-sm border md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-[14px] text-blue-400"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-201 bg-black/40 backdrop-blur-sm" />
        <Drawer.Content className="fixed right-0 bottom-0 left-0 z-202 mt-24 flex h-fit flex-col rounded-t-[10px] bg-white outline-none dark:bg-[hsl(218,_13%,_12%)]">
          <Drawer.Description className="sr-only">Menü</Drawer.Description>
          <Drawer.Title className="w-full px-6">
            <BrandLogo />
          </Drawer.Title>
          <nav className="flex flex-col gap-2 px-4">
            {menu.map((item) => {
              if ('drawer' in item && item.drawer && item.type === 'authDrawer') {
                return <AuthDrawer key={crypto.randomUUID()} />;
              }

              if ('drawer' in item && item.drawer) {
                return (
                  <NestedDrawer item={item} locale={locale} setOpen={setOpen} key={item.name} />
                );
              }

              if ('header' in item && item.header) {
                return (
                  <div key={`header-${crypto.randomUUID()}`}>
                    <span className="text-sm text-gray-500 italic">[Header alanı]</span>
                  </div>
                );
              }

              if ('seperator' in item && item.seperator) {
                return (
                  <hr
                    className="mb-2 border-gray-200 dark:border-gray-600/20"
                    key={`seperator-${crypto.randomUUID()}`}
                  />
                );
              }

              if ('children' in item && item.children && !('drawer' in item)) {
                return item.children.map((item) => {
                  const Icon = item.icon ?? 'svg';
                  return (
                    <Link
                      key={crypto.randomUUID()}
                      href={item.href ?? ''}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                      )}
                    >
                      <Icon className="size-[14px] text-blue-400" />
                      {t(item.name)}
                      {/*<ChevronRight className="ml-auto size-[14px] text-blue-400" />*/}
                    </Link>
                  );
                });
              }

              if (!item.href && item.name) {
                const Icon = item.icon ?? 'svg';
                return (
                  <span
                    key={crypto.randomUUID()}
                    className="dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Icon className="size-[14px] text-blue-400" />
                    {t(item.name)}
                    {/*<ChevronRight className="ml-auto size-[14px] text-blue-400" />*/}
                  </span>
                );
              }

              const Icon = item.icon ?? 'svg';

              // Main menu item
              return (
                <Link
                  key={item.name}
                  href={item.href ?? ''}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'group hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                    item.primary
                      ? 'relative border-b border-dashed border-blue-200/80 bg-linear-to-r from-transparent via-blue-100/40 dark:border-blue-300/10 dark:from-transparent dark:via-blue-600/10 dark:to-transparent dark:text-blue-100 dark:hover:bg-blue-700/10'
                      : 'dark:text-offgray-50 text-black',
                  )}
                >
                  <Icon className="size-[14px] text-blue-400" />
                  {t(item.name)}
                  {item.primary && (
                    <>
                      <ArrowRight className="animate-arrow-transform text-accent-blue ml-auto size-[14px] dark:text-blue-300" />
                      <Noise />
                    </>
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="mt-3 flex w-full flex-col justify-center gap-2 p-4">
            <ThemeButton />
            <Drawer.Close asChild>
              <Button variant="ghost">{t('closeMenu')}</Button>
            </Drawer.Close>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
