import { setStaticParamsLocale } from 'next-international/server';
import { Slider } from '@/components/marketing/slider';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setStaticParamsLocale(locale);
    return (
        <div>
            <Slider />
        </div>
    );
}
