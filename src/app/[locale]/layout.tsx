import '../../styles/globals.css';
import type { Metadata, Viewport } from 'next';
import React, { Suspense } from 'react';
import { Providers } from '@/app/providers';
import { Authors } from '@/components/authors';
import { Lora } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { getStaticParams } from '@/locales/server';

const writer = localFont({
    src: [
        {
            path: '../writer-400.p.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../writer-700.p.woff2',
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

function generateStaticParams(): { [p: string]: string }[] {
    return getStaticParams();
}

export default async function RootLayout({
    params,
    children,
}: Readonly<React.PropsWithChildren<{ params: Promise<{ locale: string }> }>>) {
    const { locale } = await params;
    return (
        <html lang={locale} className="" suppressHydrationWarning>
            <body
                className={cn(
                    'bg-background relative overflow-x-hidden',
                    writer.className,
                    lora.variable,
                )}
            >
                <Providers locale={locale}>
                    <div className="h-full w-full">{children}</div>
                    <Suspense fallback={null}>
                        <div
                            style={{
                                backgroundImage: "url('/noise.0e24d0e5.png')",
                            }}
                            className="min-h-dvh pointer-events-none absolute inset-0 -z-1 bg-[size:180px] bg-repeat opacity-[0.035] dark:opacity-[0.020]"
                        />
                    </Suspense>
                </Providers>
                <Authors key="authors" />
            </body>
        </html>
    );
}
