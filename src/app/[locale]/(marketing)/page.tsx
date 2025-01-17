import { setStaticParamsLocale } from 'next-international/server';
import { Banner } from '@/components/marketing/banner';
import { HomePageClient } from '@/app/[locale]/(marketing)/page.client';
import { Blockquote } from '@/components/blockquote';
import { ConsentBanner } from '@/components/consent-banner';
import { cookies } from 'next/headers';
import { Cookies } from '@/lib/cookies';
import { HomePage } from '@/components/pages/home';

export default async function Page({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const cookieStore = await cookies();
  setStaticParamsLocale(locale);

  const showTrackingConsent = !cookieStore.has(Cookies.TrackingConsent);

  return (
    <main className="pb-24">
      <Banner />
      <HomePage />
      {showTrackingConsent && <ConsentBanner />}
    </main>
  );
}
