import { setStaticParamsLocale } from 'next-international/server';
import { Slider } from '@/components/marketing/slider';
import { Banner } from '@/components/marketing/banner';

export default async function Page({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  return (
    <>
      <Banner />
      <Slider />
    </>
  );
}
