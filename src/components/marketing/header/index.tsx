import React from 'react';
import { Link } from '@/components/link';
import { MobileNav } from '@/components/marketing/header/mobile-nav';
import { DesktopNav } from '@/components/marketing/header/desktop-nav';
import { BrandLogo } from '@/components/brand-logo';

export function MarketingHeader() {
  return (
    <header className="dark:border-b-offgray-950 bg-nav-color border-b-accent-blue/20 fixed inset-x-0 top-0 z-200 flex h-[57px] w-full items-center justify-between border-b px-6 py-2 md:gap-x-4">
      <Link href="/" className="font-bold">
        <BrandLogo />
      </Link>
      <MobileNav />
      <DesktopNav />
    </header>
  );
}
