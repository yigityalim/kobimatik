import { setStaticParamsLocale } from 'next-international/server';

export default async function Page({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  return <div>raporlar sayfası</div>;
}
