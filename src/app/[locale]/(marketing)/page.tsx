import { redirect } from 'next/navigation';
import { setStaticParamsLocale } from 'next-international/server';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setStaticParamsLocale(locale);
    return (
        <div>
            <h1>Marketting Page</h1>
        </div>
    );
}
