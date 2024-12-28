'use client';
import Link from 'next/link';
import { footerMenu } from '@/lib/menu';
import React from 'react';
import { Status } from '@/components/status';

export function MarkettingFooter() {
    return (
        <footer className="bg-accent-blue text-neutral relative h-full w-full overflow-hidden p-4 pt-8">
            <div className="pointer-events-none absolute inset-0 [z-index:-1] bg-[url(/noise.0e24d0e5.png)] bg-[size:180px] bg-repeat opacity-[0.035] dark:opacity-[0.015]" />
            <div className="mx-auto grid w-full max-w-(--breakpoint-sm) grid-cols-1 gap-6 divide-white/10 pb-12 md:max-w-[1200px] md:grid-cols-4 md:gap-8 lg:grid-cols-6 lg:divide-x">
                <div className="col-span-1 flex flex-col gap-4 sm:col-span-2">
                    <Link href="/" className="opacity-100 hover:opacity-80">
                        <h3 className="text-xl font-bold">Kobimatik</h3>
                    </Link>
                    <div className="flex flex-col space-y-1">
                        <p className="text-offgray-200 text-xs leading-5">
                            &copy; {new Date().getFullYear()} Kobimatik. Tüm hakları saklıdır.
                        </p>
                        <div className="text-offgray-200 text-xs leading-5">
                            <Link href="/terms">Kullanım Şartları</Link> ·{' '}
                            <Link href="/privacy">Gizlilik Politikası</Link> ·{' '}
                            <Link href="/cookie-policy">Çerez Politikası</Link>
                        </div>
                    </div>
                </div>
                {footerMenu.map((item) => {
                    return (
                        <div className="flex w-full flex-col gap-4" key={item.title}>
                            <h6 className="font-lora h6 scroll-mt-24 font-medium text-pretty text-white">
                                {item.title}
                            </h6>
                            {item.children.map((child, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={child.href}
                                        className="text-offgray-200 text-xs leading-5 underline decoration-white/20 underline-offset-2 transition-all hover:decoration-white"
                                    >
                                        {child.name}
                                    </Link>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <Status />
        </footer>
    );
}
