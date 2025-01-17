import React from 'react';
import { MarketingHeader } from '@/components/marketing/header';
import { MarkettingFooter } from '@/components/marketing/site-footer';

export default function MarkettingLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <>
      <MarketingHeader />
      <div className="mt-[calc(57px)]" />
      <main className="">{children}</main>
      <MarkettingFooter />
    </>
  );
}
