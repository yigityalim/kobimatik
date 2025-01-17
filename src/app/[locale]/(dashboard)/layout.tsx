import React from 'react';
import { ComingSoon } from '@/components/coming-soon';
import { getSession } from '@/lib/session';
import { unauthorized } from 'next/navigation';
import { DashboardHeader } from '@/components/dashboard/header';

export default async function DashboardLayout({ children }: Readonly<React.PropsWithChildren>) {
  const session = await getSession();

  if (!session?.data) unauthorized();

  return (
    <>
      <DashboardHeader />
      <div className="h-16" />
      <main className="pointer-events-none h-[1000px] px-4 select-none">{children}</main>
      <footer className="pointer-events-none px-4 pt-12 select-none">footer</footer>
      {process.env.NODE_ENV === 'production' && <ComingSoon />}
    </>
  );
}
