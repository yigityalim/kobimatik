import React from 'react';
import { PageLayout } from '@/components/marketing/page-layout';
import { pricing } from '@/mocks/pricing';
import { PricingCard } from '@/components/marketing/pricing-card';
import { setStaticParamsLocale } from 'next-international/server';
import { getStaticParams } from '@/locales/server';

function generateStaticParams() {
    return getStaticParams();
}

export default async function Page({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  return (
    <PageLayout pageHeading="pricing.title" pageDescription="pricing.description">
      <div className="col-span-5 grid lg:col-span-4">
        {pricing.map((pricing) => (
          <PricingCard key={pricing.id} {...pricing} />
        ))}
      </div>
    </PageLayout>
  );
}
