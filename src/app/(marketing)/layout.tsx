import React from 'react';
import { MarketingHeader } from '@/components/marketing/site-header';
import { MarkettingFooter } from '@/components/marketing/site-footer';

export default function MarkettingLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <MarketingHeader />
            <div className="mt-[calc(57px+20px)]" />
            <main className="">{children}</main>
            <MarkettingFooter />
        </>
    );
}
