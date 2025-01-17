'use client';

import { Drawer } from 'vaul';
import { ChevronRight, Info, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth/client';
import { authMenu } from '@/lib/menu';
import React from 'react';
import { useI18n, useScopedI18n } from '@/locales/client';
import { Link } from '@/components/link';
import { cn } from '@/lib/utils';
import { Image } from '@/components/image';
import { Noise } from '@/components/Noise';
import { LoadingText } from '@/components/loading-text';
import { OrganizationBadge } from '@/components/organization-badge';
import { useRouter } from 'next/navigation';

export function AuthDrawer() {
  const session = authClient.useSession();
  const activeOrganization = authClient.useActiveOrganization();
  const t = useI18n();
  const authT = useScopedI18n('menu.auth.values');
  const router = useRouter();

  if (session.isPending || activeOrganization.isPending) {
    return (
      <span className="group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50">
        <User className="size-[14px] text-blue-400" />
        <LoadingText text={t('loading')} />
        <ChevronRight className="ml-auto size-[14px] text-blue-400" />
      </span>
    );
  }

  if (!session.data?.user) {
    return (
      <Link
        href="/sign-in"
        className="group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        <User className="size-[14px] text-blue-400" />
        {t('menu.signIn')}
        <ChevronRight className="ml-auto size-[14px] text-blue-400" />
      </Link>
    );
  }

  return (
    <React.Suspense fallback={null}>
      <Drawer.NestedRoot>
        <Drawer.Trigger className="group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 my-2 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50">
          <div className="flex w-full flex-row items-center justify-between gap-x-2">
            <div className="flex flex-row items-center gap-x-2">
              <div className="h-[36px] w-[36px] shrink-0 rounded-sm bg-blue-100 p-0.5 outline outline-1 outline-blue-300 outline-dashed dark:bg-blue-100/20 dark:outline-blue-300/50">
                <Image
                  removeStyles
                  lightSrc={session.data?.user?.image ?? '/mock-user.png'} // TODO: replace user.name[0] char
                  darkSrc={session.data?.user?.image ?? '/mock-user.png'} // TODO: replace user.name[0] char
                  alt="User Image"
                  width={30}
                  height={30}
                  className="h-[32px] w-[32px] rounded-sm"
                />
              </div>
              <span className="font-lora text-sm font-bold">{session.data?.user?.name}</span>
            </div>
            <ChevronRight className="size-[14px] text-blue-400" />
          </div>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-203 bg-black/40 backdrop-blur-2xl" />
          <Drawer.Content className="border-t-offgray-300 dark:border-t-offgray-950 fixed right-0 bottom-0 left-0 z-203 mt-24 flex flex-col rounded-t-[10px] border-t bg-white outline-none dark:bg-[hsl(218,_13%,_12%)]">
            <Drawer.Description className="sr-only">Auth Drawer</Drawer.Description>
            <Drawer.Title
              className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-600/20"
              asChild
            >
              <header className="relative flex w-full flex-col items-start justify-start gap-4">
                <Image
                  lightSrc={session.data?.user?.image ?? '/mock-user.png'} // TODO: replace user.name[0] char
                  darkSrc={session.data?.user?.image ?? '/mock-user.png'} // TODO: replace user.name[0] char
                  alt="User Image"
                  width={100}
                  height={100}
                  className="aspect-square rounded-sm"
                  containerClassName="rounded-md w-1/2"
                />
                <h1 className="font-lora w-full text-start text-2xl font-bold">
                  {session.data?.user?.name}
                </h1>
                <h4 className="w-fit border-b border-dashed pb-0.5 text-start text-sm text-gray-500">
                  {session.data?.user?.email}
                </h4>
                <div className="bg-accent-blue dark:bg-offgray-950 flex w-full flex-row items-center justify-between rounded-md px-4 py-2">
                  <h6 className="inline-flex items-center gap-x-2 text-sm text-blue-50 dark:text-gray-300">
                    {t('menu.activeOrganization')}
                  </h6>
                  <p className="text-sm text-blue-50 dark:text-gray-300">
                    {activeOrganization.data?.name}
                  </p>
                </div>
                {activeOrganization.isPending ? (
                  <LoadingText text={t('loading')} />
                ) : (
                  <OrganizationBadge
                    user={session.data?.user}
                    organization={activeOrganization.data}
                  />
                )}
              </header>
            </Drawer.Title>
            <main className="flex flex-1 shrink-0 flex-col gap-2 overflow-y-auto p-4">
              <nav className="flex w-full flex-col items-center justify-center gap-2 overflow-y-auto pt-4">
                {authMenu.map(({ href, name, icon: Icon, primary }) => (
                  <Link
                    href={href}
                    key={href}
                    className={cn(
                      'group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                      primary &&
                        'relative border-b border-dashed border-blue-200/80 bg-linear-to-r from-transparent via-blue-100/40 dark:border-blue-300/10 dark:from-transparent dark:via-blue-600/10 dark:to-transparent dark:text-blue-100 dark:hover:bg-blue-700/10',
                    )}
                  >
                    {Icon && <Icon className="size-[14px] text-blue-400" />}
                    {authT(name)}
                    <ChevronRight className="ml-auto size-[14px] text-blue-400" />
                    {primary && <Noise />}
                  </Link>
                ))}
              </nav>
            </main>
            <footer className="mt-auto space-y-2 border-t border-gray-200 p-4 dark:border-gray-600/20">
              <Drawer.Close asChild>
                <Button
                  className="shrink-0"
                  variant="destructive"
                  onClick={async () => {
                    await authClient.signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          router.refresh();
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
            </footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.NestedRoot>
    </React.Suspense>
  );
}
