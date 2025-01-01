'use client';

import React from 'react';
import { Drawer } from 'vaul';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { menu } from '@/lib/menu';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import { useScopedI18n, useCurrentLocale, useChangeLocale, locales } from '@/locales/client';
import { ThemeButton } from '@/components/theme-button';

export function MarketingHeader() {
    return (
        <header className="bg-background dark:border-b-offgray-800 fixed inset-x-0 top-0 z-2 flex h-[57px] w-full items-center justify-between px-6 py-2 md:gap-x-4 dark:border-b">
            <h1 className="font-bold">ACME</h1>
            <MobileNav />
            <DesktopNav />
        </header>
    );
}

function MobileNav() {
    const [open, setOpen] = React.useState(false);
    const t = useScopedI18n('menu');
    const changeLocale = useChangeLocale();
    const locale = useCurrentLocale();
    const title = locales.find((l) => l.locale === locale);

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
                <Drawer.Overlay className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm" />
                <Drawer.Content className="bg-background fixed right-0 bottom-0 left-0 z-101 mt-24 flex h-fit flex-col rounded-t-[10px] outline-none">
                    <Drawer.Description className="sr-only">Menü</Drawer.Description>
                    <Drawer.Title className="sr-only">Menü</Drawer.Title>
                    <nav className="flex flex-col gap-2 px-4 pt-6">
                        {menu.map((item, index) => {
                            if ('drawer' in item && item.drawer) {
                                const Icon = item.icon;
                                return (
                                    <Drawer.NestedRoot
                                        key={`drawer-${index}-${item.name}-${item.title ?? ''}`}
                                    >
                                        <Drawer.Trigger asChild>
                                            <span
                                                key={index}
                                                className="dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                {Icon && (
                                                    <Icon className="size-[14px] text-blue-400" />
                                                )}
                                                {t(item.name as any)} {/* FIXME: Remove any */}
                                                <ChevronRight className="ml-auto size-[14px] text-blue-400" />
                                            </span>
                                        </Drawer.Trigger>
                                        <Drawer.Portal>
                                            <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-md" />
                                            <Drawer.Content
                                                className={cn(
                                                    'bg-background fixed right-0 bottom-0 left-0 z-102 mt-24 flex flex-col rounded-t-[10px] outline-none',
                                                    // "code" in item.children array.
                                                    item.children?.some((item) => 'code' in item)
                                                        ? 'h-[70%]'
                                                        : 'h-fit',
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
                                                <Drawer.Title className="sr-only">
                                                    İkinci Menü
                                                </Drawer.Title>
                                                <nav className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
                                                    {item.children?.map((item, subIndex) => {
                                                        if ('code' in item) {
                                                            return (
                                                                <button
                                                                    aria-label={item.name}
                                                                    aria-pressed={
                                                                        locale === item.href
                                                                    }
                                                                    aria-disabled={
                                                                        locale === item.href ||
                                                                        !locales.find(
                                                                            (l) =>
                                                                                l.locale ===
                                                                                item.href,
                                                                        )
                                                                    }
                                                                    type="button"
                                                                    key={`${item.code}-${item.name}-${subIndex}`}
                                                                    className={cn(
                                                                        'hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 inline-flex w-full cursor-pointer items-center justify-start gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                                                                        locale === item.href
                                                                            ? 'bg-offgray-100/50 dark:bg-offgray-500/10 cursor-auto'
                                                                            : '',
                                                                    )}
                                                                    disabled={
                                                                        !locales.find(
                                                                            (l) =>
                                                                                l.locale ===
                                                                                item.href,
                                                                        )
                                                                    }
                                                                    onClick={() => {
                                                                        if (item.href === locale) {
                                                                            //toast.error(t('alreadySelected'));
                                                                            return;
                                                                        }
                                                                        changeLocale(
                                                                            item.href as any,
                                                                        ); // FIXME: Remove any
                                                                    }}
                                                                >
                                                                    <Image
                                                                        className="h-8 w-auto"
                                                                        src={(item as any).image} // FIXME: Remove any
                                                                        alt={
                                                                            item.name + ' Flag url'
                                                                        }
                                                                        width={30}
                                                                        height={30}
                                                                    />
                                                                    {item.href === locale && (
                                                                        <span className="dark:text-offgray-200 text-sm font-semibold tracking-tight text-nowrap text-blue-400 italic">
                                                                            {t('active')}
                                                                        </span>
                                                                    )}
                                                                    {!locales.find(
                                                                        (l) =>
                                                                            l.locale === item.href,
                                                                    ) && (
                                                                        <span className="text-sm text-red-500">
                                                                            {t('soon')}
                                                                        </span>
                                                                    )}
                                                                    <span className="dark:text-offgray-200 ml-auto text-sm text-[14px] font-semibold tracking-tight text-nowrap text-gray-500">
                                                                        {(item as any).nativeName}{' '}
                                                                        {/* FIXME: Remove any */}
                                                                    </span>
                                                                </button>
                                                            );
                                                        }
                                                        if ('header' in item && item.children) {
                                                            return (
                                                                <React.Fragment key={item.header}>
                                                                    <h3
                                                                        key={`header-${item.header}-${subIndex}`}
                                                                        className="text-offgray-600 px-2 py-1 font-mono text-[13px] font-bold tracking-wider uppercase"
                                                                    >
                                                                        {item.header}
                                                                    </h3>
                                                                    {item.children.map(
                                                                        ({
                                                                            href,
                                                                            icon: Icon,
                                                                            name,
                                                                            published,
                                                                        }) => {
                                                                            if (published === false)
                                                                                return null;
                                                                            return (
                                                                                <Link
                                                                                    key={`${name}-${href}`}
                                                                                    href={
                                                                                        href ?? ''
                                                                                    }
                                                                                    onClick={() =>
                                                                                        setOpen(
                                                                                            false,
                                                                                        )
                                                                                    }
                                                                                    className={cn(
                                                                                        'group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                                                                                    )}
                                                                                >
                                                                                    {Icon && (
                                                                                        <Icon className="size-[14px] text-blue-400" />
                                                                                    )}
                                                                                    {t(name as any)}{' '}
                                                                                    {/* FIXME: Remove any */}
                                                                                    <ChevronRight className="ml-auto size-[14px] text-blue-400" />
                                                                                </Link>
                                                                            );
                                                                        },
                                                                    )}
                                                                </React.Fragment>
                                                            );
                                                        }

                                                        if ('seperator' in item && item.seperator) {
                                                            return (
                                                                <hr
                                                                    key={`seperator-${subIndex}`}
                                                                    className="my-2 border-gray-200 dark:border-gray-600/20"
                                                                />
                                                            );
                                                        }

                                                        return null;
                                                    })}
                                                </nav>
                                                <hr
                                                    key={`seperator-${index}`}
                                                    className="mx-4 my-2 mt-4 border-gray-200 dark:border-gray-600/20"
                                                />
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

                            if ('header' in item) {
                                // Header mark
                                return (
                                    <div key={`header-${item.header}`}>
                                        {/* Header içeriği düzenleme alanı */}
                                        <span className="text-sm text-gray-500 italic">
                                            [Header alanı]
                                        </span>
                                    </div>
                                );
                            }

                            if ('seperator' in item && item.seperator) {
                                return (
                                    <hr
                                        className="my-2 border-gray-200 dark:border-gray-600/20"
                                        key={`seperator-${index}`}
                                    />
                                );
                            }

                            if ('children' in item && item.children && !('drawer' in item)) {
                                return item.children.map((item) => {
                                    const Icon = item.icon ?? 'span';
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href ?? ''}
                                            onClick={() => setOpen(false)}
                                            className={cn(
                                                'group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                                            )}
                                        >
                                            <Icon className="size-[14px] text-blue-400" />
                                            {t(item.name as any)} {/* FIXME: Remove any */}
                                            <ChevronRight className="ml-auto size-[14px] text-blue-400" />
                                        </Link>
                                    );
                                });
                            }

                            const Icon = item.icon ?? 'span';

                            if (!item.href && item.name) {
                                return (
                                    <span
                                        key={item.name}
                                        className="dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <Icon className="size-[14px] text-blue-400" />
                                        {t(item.name)}
                                        <ChevronRight className="ml-auto size-[14px] text-blue-400" />
                                    </span>
                                );
                            }

                            return (
                                <Link
                                    key={index}
                                    href={item.href ?? ''}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        'group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                                    )}
                                >
                                    <Icon className="size-[14px] text-blue-400" />
                                    {t(item.name as any)} {/* FIXME: Remove any */}
                                    <ChevronRight className="ml-auto size-[14px] text-blue-400" />
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

function DesktopNav() {
    return (
        <div className="hidden w-full flex-row items-center justify-between md:flex">
            <NavigationMenu.Root
                className="flex flex-row items-center justify-start gap-x-2"
                role="navigation"
            >
                <NavigationMenu.List className="flex flex-row items-center justify-start gap-x-2">
                    {menu.map((item, index) => {
                        if ('drawer' in item && item.drawer) {
                            return (
                                <NavigationMenu.Item key={index} className="relative">
                                    <NavigationMenu.Trigger className="group dark:text-offgray-200 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 relative flex h-8 cursor-pointer items-center justify-center gap-2 rounded-sm border border-transparent px-1.5 text-xs tracking-tight text-nowrap text-black transition-colors duration-75 duration-200 select-none disabled:cursor-not-allowed disabled:opacity-50">
                                        {item.name}
                                        <ChevronDown className="size-[14px] text-blue-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                    </NavigationMenu.Trigger>
                                    <NavigationMenu.Content className="popover-content">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{
                                                type: 'spring',
                                                bounce: 0.2,
                                                duration: 0.6,
                                            }}
                                        >
                                            <div className="border-offgray-200 dark:border-offgray-900 dark:bg-offgray-900 dark:bg-secondary absolute top-full left-0 z-10 mt-2 min-w-auto rounded-md border bg-white shadow-lg">
                                                <nav className="flex flex-row gap-x-2">
                                                    {item.children?.map((subItem, subIndex) => {
                                                        if (
                                                            !('code' in subItem) &&
                                                            subItem.header
                                                        ) {
                                                            return (
                                                                <div
                                                                    className={cn(
                                                                        'flex flex-col items-start justify-start gap-2 p-2',
                                                                        subIndex === 0 &&
                                                                            'border-r-offgray-200 dark:border-r-offgray-900 border-r',
                                                                    )}
                                                                    key={subItem.header}
                                                                >
                                                                    <h3
                                                                        key={`header-${subItem.header}`}
                                                                        className="text-offgray-600 px-2 py-1 font-mono text-[13px] font-bold tracking-wider uppercase"
                                                                    >
                                                                        {subItem.header}
                                                                    </h3>
                                                                    <div className="flex flex-col gap-2">
                                                                        {subItem?.children?.map(
                                                                            ({
                                                                                href,
                                                                                name,
                                                                                icon: Icon,
                                                                            }) => (
                                                                                <NavigationMenu.Link
                                                                                    key={name}
                                                                                    asChild
                                                                                >
                                                                                    <Link
                                                                                        href={
                                                                                            href ??
                                                                                            ''
                                                                                        }
                                                                                        className={cn(
                                                                                            'group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-[12px] tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                                                                                        )}
                                                                                    >
                                                                                        {Icon && (
                                                                                            <Icon className="size-[14px] text-blue-400" />
                                                                                        )}
                                                                                        {name}
                                                                                    </Link>
                                                                                </NavigationMenu.Link>
                                                                            ),
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                        return null;
                                                    })}
                                                </nav>
                                            </div>
                                        </motion.div>
                                    </NavigationMenu.Content>
                                </NavigationMenu.Item>
                            );
                        }

                        if (('seperator' in item && item.seperator) || 'header' in item)
                            return null;

                        if ('children' in item && item.children && !('drawer' in item)) {
                            return item.children.map((subItem, subIndex) => (
                                <NavigationMenu.Item key={subIndex}>
                                    <NavigationMenu.Link asChild>
                                        <Link
                                            href={subItem.href ?? ''}
                                            className={cn(
                                                'group dark:text-offgray-200 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 relative flex h-8 items-center justify-center gap-2 rounded-sm border border-transparent px-1.5 text-xs tracking-tight text-nowrap text-black transition-colors duration-75 duration-200 select-none disabled:cursor-not-allowed disabled:opacity-50',
                                            )}
                                        >
                                            {subItem.name}
                                        </Link>
                                    </NavigationMenu.Link>
                                </NavigationMenu.Item>
                            ));
                        }

                        return null;
                    })}
                </NavigationMenu.List>
            </NavigationMenu.Root>
            <div>user</div>
        </div>
    );
}

function Link({
    href,
    children,
    className,
    ...props
}: Readonly<React.ComponentProps<typeof NextLink>>) {
    const pathname = usePathname();
    const Component = href === pathname ? 'span' : NextLink;
    return (
        <Component
            href={href}
            className={cn(className)}
            {...(href === pathname ? {} : { passHref: true })}
            {...props}
        >
            {children}
        </Component>
    );
}
