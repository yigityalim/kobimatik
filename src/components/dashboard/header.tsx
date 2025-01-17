'use client';

import { Drawer } from 'vaul';
import { Image } from '@/components/image';
import { ChevronRight } from 'lucide-react';
import { LoadingText } from '@/components/loading-text';
import { OrganizationBadge } from '@/components/organization-badge';
import { authMenu } from '@/lib/menu';
import { Link } from '@/components/link';
import { cn } from '@/lib/utils';
import { Noise } from '@/components/Noise';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth/client';
import React from 'react';
import { useI18n, useScopedI18n } from '@/locales/client';

export function DashboardHeader() {
  const t = useI18n();
  return (
    <header className="fixed inset-x-0 top-0 flex flex-row items-center justify-between gap-x-2 px-4 py-2 select-none">
      <span>acme</span>
      <Drawer.Root>
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
          <Drawer.Overlay className="fixed inset-0 z-203 bg-black/40 backdrop-blur-2xl" />
          <Drawer.Content className="border-t-offgray-300 dark:border-t-offgray-950 fixed right-0 bottom-0 left-0 z-203 mt-24 flex flex-col rounded-t-[10px] border-t bg-white outline-none dark:bg-[hsl(218,_13%,_12%)]">
            <Noise />
            <Drawer.Description className="sr-only">Auth Drawer</Drawer.Description>
            <Drawer.Title className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-600/20">
              title
            </Drawer.Title>
            <div className="flex flex-1 shrink-0 flex-col gap-2 overflow-y-auto p-4">
              <nav className="flex w-full flex-col items-center justify-center gap-2 overflow-y-auto pt-4">
                menu
              </nav>
            </div>
            <div className="mt-auto space-y-2 border-t border-gray-200 p-4 dark:border-gray-600/20">
              <Drawer.Close asChild>
                <Button
                  className="shrink-0"
                  variant="destructive"
                  onClick={async () => {
                    await authClient.signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          //router.push('/login');
                        },
                      },
                    });
                  }}
                >
                  {t('menu.signOut')}
                </Button>
              </Drawer.Close>
              <Drawer.Close asChild>
                <Button className="shrink-0">{t('menu.closeSubMenu')}</Button>
              </Drawer.Close>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </header>
  );
}
