import Image from 'next/image';
import { MarketingHeader } from '@/components/marketing/site-header';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export default function unauthorized() {
  return (
    <>
      <MarketingHeader />
      <div className="relative flex flex-col items-center gap-2 px-4 pt-[calc(57px+2rem)] lg:gap-8">
        <h1 className="font-lora text-[clamp(1.85rem,_1.3rem_+_2.5vw,_2.15rem)] text-pretty text-blue-300">
          İzinsiz Erişim
        </h1>
        <div className="relative">
          <Icons.Light403 />
          <Icons.Dark403 />
          <Image
            alt="Grid illustration"
            loading="lazy"
            width="768"
            height="592"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none absolute top-0 z-1 opacity-80 lg:top-[-80px] dark:opacity-20"
            src="/grid-pattern.png"
          />
        </div>
        <div className="max-w-lg pb-12 text-center lg:pt-12">
          <p className="text-offgray-600 mb-4 w-full leading-relaxed">
            Aradığınız sayfa oturum erişimi gerektiriyor. Lütfen tekrar deneyin. Eğer bir hata
            olduğunu düşünüyorsanız{' '}
            <a href="#" className="text-accent-blue underline underline-offset-2">
              Destek Ekibi
            </a>{' '}
            ile iletişime geçebilirsiniz.
          </p>
        </div>
        <Link href="/sign-in" className={buttonVariants({ variant: 'success' })}>
          Giriş Yap
        </Link>
        <Link href="/" className={buttonVariants()}>
          Anasayfaya Dön
        </Link>
      </div>
    </>
  );
}
