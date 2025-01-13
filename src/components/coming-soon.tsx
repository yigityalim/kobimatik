'use client';

import { useI18n } from '@/locales/client';
import { useEffect } from 'react';
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
    <div className="bg-background/80 fixed inset-0 z-2 flex items-center justify-center backdrop-blur">
      <div className="flex max-w-lg flex-col items-center gap-6 p-8 text-center">
        <h2 className="font-lora text-accent-blue text-2xl font-medium italic underline underline-offset-2">
          {t('coming_soon.title')}
        </h2>
        <p className="text-muted-foreground">{t('coming_soon.description', { name: 'acme' })}</p>
        <p>{t('coming_soon.cta')}</p>
        <div className="flex flex-row items-center gap-x-2">
          <a href="https://twitter.com/acme" className="text-primary underline">
            Twitter
          </a>
          <a href="https://instagram.com/acme" className="text-primary underline">
            Instagram
          </a>
          <a href="https://facebook.com/acme" className="text-primary underline">
            Facebook
          </a>
        </div>
        <Button
          onClick={async () => {
            await authClient.signOut();
            redirect('/sign-in');
          }}
        >
          {t('coming_soon.signOut')}
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-1 min-h-dvh bg-[url('/noise.0e24d0e5.png')] bg-[size:180px] bg-repeat opacity-[0.035] dark:opacity-[0.020]" />
    </div>
  );
}
