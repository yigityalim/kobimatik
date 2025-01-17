import { Award, Goal } from 'lucide-react';
import { Link } from '@/components/link';
import { buttonVariants } from '@/components/ui/button';
import { GridBackground } from '@/components/grid-background';
import { Section } from '@/components/pages/section';

export function Hero() {
  return (
    <Section>
      <div className="mx-auto flex w-full max-w-(--breakpoint-sm) flex-col items-center gap-8 px-4 md:max-w-[1200px]">
        <div className="flex h-full flex-col items-center justify-center gap-2">
          <h1 className="font-lora h0 text-accent-blue visible-desktop-only scroll-mt-24 text-center font-normal text-pretty dark:text-blue-300">
            Gelişmiş Fizibilite Raporu
          </h1>
          <h1 className="font-lora h0 text-accent-blue visible-mobile-only scroll-mt-24 text-center font-normal text-pretty dark:text-blue-300">
            Gelişmiş <br />
            Fizibilite Raporu
          </h1>
          <p className="visible-desktop-only max-w-lg text-center tracking-tight">
            İş Planınızı hazırlayın ve Hemen faaliyete geçin.
          </p>
          <p className="visible-mobile-only max-w-lg text-center tracking-tight">
            İş Planınızı hazırlayın <br /> Faaliyete geçin.
          </p>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
          <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row">
            <Link href="/try" className={buttonVariants({ variant: 'success' })}>
              <Award size={14} />
              Hemen Dene
            </Link>
            <Link className={buttonVariants()} href="/features">
              <Goal size={14} />
              İncele
            </Link>
          </div>
          <p className="flex flex-wrap items-center justify-center gap-2 text-center text-[.8125rem]">
            İstediğiniz her yerde. Ücretsiz, hızlı ve güvenli.{' '}
          </p>
        </div>
      </div>
      <GridBackground />
    </Section>
  );
}
