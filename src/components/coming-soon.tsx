'use client';

import { useI18n } from '@/locales/client';
import { useEffect } from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth/client';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function ComingSoon() {
    const t = useI18n();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur z-2">
            <div className="flex flex-col items-center gap-6 max-w-lg text-center p-8">
                <h2 className="text-2xl font-medium font-lora italic text-accent-blue underline underline-offset-2">{t('coming_soon.title')}</h2>
                <p className="text-muted-foreground">
                    {t('coming_soon.description', { name: 'kobimatik' })}
                </p>
                <p>{t('coming_soon.cta')}</p>
                <div className="flex flex-row gap-x-2 items-center">
                    <a href="https://twitter.com/kobimatik" className="text-primary underline">Twitter</a>
                    <a href="https://instagram.com/kobimatik" className="text-primary underline">Instagram</a>
                    <a href="https://facebook.com/kobimatik" className="text-primary underline">Facebook</a>
                </div>
                <Button
                    onClick={async () => {
                        await authClient.signOut();
                        redirect('/');
                    }}
                >
                    Çıkış Yap
                </Button>
            </div>
            <div className="bg-[url('/noise.0e24d0e5.png')] min-h-dvh pointer-events-none absolute inset-0 -z-1 bg-[size:180px] bg-repeat opacity-[0.035] dark:opacity-[0.020]" />
        </div>
    );
}