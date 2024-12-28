import '../styles/globals.css';
import type { Metadata, Viewport } from 'next';
import React, { Suspense } from 'react';
import { Providers } from '@/app/providers';
import { Authors } from '@/components/authors';
import { Lora } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const writer = localFont({
    src: [
        {
            path: './writer-400.p.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './writer-700.p.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    style: 'normal',
    display: 'swap',
    weight: '400',
});

const lora = Lora({
    display: 'swap',
    variable: '--font-lora',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Kobimatik',
    description: 'Raporlarınızı hızlıca oluşturun.',
} satisfies Metadata;

export const viewport = {
    minimumScale: 1,
    maximumScale: 1,
    initialScale: 1,
    userScalable: false,
    width: 'device-width',
    height: 'device-height',
    viewportFit: 'cover',
} satisfies Viewport;

export default async function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <html lang="en" className="" suppressHydrationWarning>
            <body
                className={cn('bg-background overflow-x-hidden', writer.className, lora.variable)}
            >
                <Providers>
                    <div className="h-full w-full">
                        {' '}
                        {/* vaul-drawer-wrapper="false" */}
                        <div className="bg-background min-h-dvh">{children}</div>
                    </div>
                    <Suspense fallback={null}>
                        <div
                            style={{
                                backgroundImage: "url('/noise.0e24d0e5.png')",
                            }}
                            className="pointer-events-none fixed inset-0 [z-index:0] bg-[size:180px] bg-repeat opacity-[0.035] dark:opacity-[0.015]"
                        />
                    </Suspense>
                </Providers>
                <Authors key="authors" />
            </body>
        </html>
    );
}
