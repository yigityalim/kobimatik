import Image from 'next/image';
import { MarketingHeader } from '@/components/marketing/header';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { getScopedI18n } from '@/locales/server';

export default async function NotFound() {
  const t = await getScopedI18n('pages.notFound');
  return (
    <>
      <MarketingHeader />
      <div className="relative flex flex-col items-center gap-2 px-4 pt-[calc(57px+2rem)] lg:gap-8">
        <h1 className="font-lora text-[clamp(1.85rem,_1.3rem_+_2.5vw,_2.15rem)] text-pretty text-blue-300">
          {t('heading')}
        </h1>
        <div className="relative">
          <Icons.Light404 />
          <Icons.Dark404 />
          <Image
            alt="Grid illustration"
            loading="lazy"
            width="768"
            height="592"
            decoding="async"
            data-nimg="1"
            priority={false}
            className="pointer-events-none absolute top-0 z-1 opacity-80 lg:top-[-80px] dark:opacity-20"
            src="/grid-pattern.png"
          />
        </div>
        <div className="max-w-lg pb-12 text-center lg:pt-12">
          <p className="text-offgray-600 mb-4 w-full leading-relaxed">
            {t('description', {
              support: (
                <Link
                  href="mailto:support@acme.com"
                  className="text-accent-blue underline underline-offset-2"
                >
                  {t('supportTeam')}
                </Link>
              ),
            })}
          </p>
        </div>
        <Link href="/" className={buttonVariants()}>
          {t('home')}
        </Link>
      </div>
    </>
  );
}
