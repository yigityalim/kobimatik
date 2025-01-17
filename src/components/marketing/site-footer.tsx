'use client';
import Link from 'next/link';
import { footerMenu } from '@/lib/menu';
import React from 'react';
import { Status } from '@/components/status';
import { useScopedI18n } from '@/locales/client';
import { ThemeButton } from '@/components/theme-button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Noise } from '@/components/Noise';
import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';

export function MarkettingFooter() {
  const t = useScopedI18n('menu');
  return (
    <footer className="bg-accent-blue text-neutral relative h-full w-full overflow-hidden p-4 pt-8 pb-[60px]">
      <Noise />
      <div className="z-0 mx-auto grid w-full max-w-(--breakpoint-sm) grid-cols-1 gap-6 divide-white/10 pb-12 md:max-w-[1200px] md:grid-cols-4 md:gap-8 lg:grid-cols-6 lg:divide-x">
        <div className="col-span-1 flex flex-col gap-4 sm:col-span-2">
          <Link href="/" className="opacity-100 hover:opacity-80">
            <BrandLogo className="text-white" />
          </Link>
          <div className="flex flex-col space-y-1">
            <p className="text-offgray-200 text-xs leading-5">
              &copy; {new Date().getFullYear()} ACME. {t('allRightsReserved')}.
            </p>
            <div className="text-offgray-200 text-xs leading-5">
              <Link href="/terms">{t('terms')}</Link> · <Link href="/privacy">{t('privacy')}</Link>{' '}
              · <Link href="/cookie-policy">{t('cookiePolicy')}</Link>
            </div>
          </div>
        </div>
        {footerMenu.map((item) => {
          return (
            <div className="flex w-full flex-col gap-4" key={item.title}>
              <h6 className="font-lora h6 scroll-mt-24 font-medium text-pretty text-white">
                {item.title}
              </h6>
              {item.children.map((child) => {
                const external = child.href.startsWith('http');
                const Comp = external ? 'a' : Link;
                return (
                  <Comp
                    target={(child.href.startsWith('http') && '_blank') || undefined}
                    rel={(child.href.startsWith('http') && 'noreferrer noopener') || undefined}
                    key={child.name}
                    href={child.href}
                    className="text-offgray-200 inline-flex items-center gap-x-1 text-xs leading-5 underline decoration-white/20 underline-offset-2 transition-all hover:decoration-white"
                  >
                    {t(child.name)}
                    {external && (
                      <span className="text-neutral/50">
                        <ArrowUpRight size={12} />
                      </span>
                    )}
                  </Comp>
                );
              })}
            </div>
          );
        })}
      </div>
      <ThemeButton className="mb-4 w-fit" />
      <LanguageSwitcher />
      <Status />
    </footer>
  );
}
