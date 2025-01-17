import React from 'react';
import { PageLayout } from '@/components/marketing/page-layout';
import { pricing } from '@/mocks/pricing';
import { PricingCard } from '@/components/marketing/pricing-card';
import { setStaticParamsLocale } from 'next-international/server';
import { getStaticParams } from '@/locales/server';
import { Blockquote } from '@/components/blockquote';
import { getSession } from '@/lib/session';

function generateStaticParams() {
  return getStaticParams();
}

export default async function Page({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const session = await getSession();
  setStaticParamsLocale(locale);
  return (
    <PageLayout pageHeading="pricing.title" pageDescription="pricing.description">
      <div className="col-span-5 grid gap-6 lg:col-span-4">
        {pricing.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} session={session} />
        ))}
      </div>
    </PageLayout>
  );
}
