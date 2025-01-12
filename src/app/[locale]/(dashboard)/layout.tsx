import React from 'react';
import { ComingSoon } from '@/components/coming-soon';

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <header className="flex flex-row items-center justify-between gap-x-2 px-4 py-2 pointer-events-none select-none">
                <span>kobimatik</span>
                <span>menu</span>
            </header>
            <main className="px-4 pointer-events-none select-none">{children}</main>
            <footer className="px-4 pt-12 pointer-events-none select-none">footer</footer>
            {process.env.NODE_ENV !== "production" && <ComingSoon />}
        </>
    );
}
