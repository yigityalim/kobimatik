import { setStaticParamsLocale } from 'next-international/server';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setStaticParamsLocale(locale);
    return <div>raporlar sayfası</div>;
}
