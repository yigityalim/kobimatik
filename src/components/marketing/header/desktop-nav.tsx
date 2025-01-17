'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { menu } from '@/lib/menu';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Link } from '@/components/link';
import React from 'react';

export function DesktopNav() {
  return (
    <div className="hidden w-full flex-row items-center justify-between md:flex">
      <NavigationMenu.Root
        className="flex flex-row items-center justify-start gap-x-2"
        role="navigation"
      >
        <NavigationMenu.List className="flex flex-row items-center justify-start gap-x-2">
          {menu.map((item) => {
            if ('drawer' in item && item.drawer) {
              return (
                <NavigationMenu.Item key={crypto.randomUUID()} className="relative">
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
                            if (!('code' in subItem) && subItem.header) {
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
                                    key={`header-${crypto.randomUUID()}`}
                                    className="text-offgray-600 px-2 py-1 font-mono text-[13px] font-bold tracking-wider uppercase"
                                  >
                                    {subItem.header}
                                  </h3>
                                  <div className="flex flex-col gap-2">
                                    {subItem?.children?.map(({ href, name, icon: Icon }) => (
                                      <NavigationMenu.Link key={name} asChild>
                                        <Link
                                          href={href ?? ''}
                                          className={cn(
                                            'group dark:text-offgray-50 hover:bg-offgray-100/50 dark:hover:bg-offgray-500/10 flex h-8 w-full items-center justify-start gap-3 gap-x-2 rounded-sm border border-transparent px-2.5 text-[12px] tracking-tight text-nowrap text-black transition-colors duration-75 select-none disabled:cursor-not-allowed disabled:opacity-50',
                                          )}
                                        >
                                          {Icon && <Icon className="size-[14px] text-blue-400" />}
                                          {name}
                                        </Link>
                                      </NavigationMenu.Link>
                                    ))}
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

            if (('seperator' in item && item.seperator) || 'header' in item) return null;

            if ('children' in item && item.children && !('drawer' in item)) {
              return item.children.map((subItem) => (
                <NavigationMenu.Item key={crypto.randomUUID()}>
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
