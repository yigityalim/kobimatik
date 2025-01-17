import '../../styles/globals.css';
import type { Metadata, Viewport } from 'next';
import React, { Suspense } from 'react';
import { Providers } from '@/app/providers';
import { Authors } from '@/components/authors';
import { Lora } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { getStaticParams } from '@/locales/server';
import { Noise } from '@/components/Noise';
import { WebVitals } from '@/components/web-vitals';

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
  title: 'ACME',
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
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'bg-cream-100/20 text-offgray dark:text-offgray-300 relative min-h-screen w-screen overflow-x-hidden dark:bg-[hsl(218,_13%,_8%)]',
          writer.className,
          lora.variable,
        )}
      >
        <Providers locale={locale}>
          <div className="h-full w-full">{children}</div>
          <Noise />
        </Providers>
        <Authors key="authors" />
      </body>
    </html>
  );
}
