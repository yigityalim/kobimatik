'use client';
import React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Link({
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
