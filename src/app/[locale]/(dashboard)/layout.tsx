import React from 'react';
import { ComingSoon } from '@/components/coming-soon';

export default function Layout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <>
      <header className="pointer-events-none flex flex-row items-center justify-between gap-x-2 px-4 py-2 select-none">
        <span>acme</span>
        <span>menu</span>
      </header>
      <main className="pointer-events-none px-4 select-none">{children}</main>
      <footer className="pointer-events-none px-4 pt-12 select-none">footer</footer>
      {process.env.NODE_ENV !== 'production' && <ComingSoon />}
    </>
  );
}
