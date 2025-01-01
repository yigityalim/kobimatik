'use client';
import React from 'react';
import { PageLayout } from '@/components/marketing/page-layout';
import { pricing } from '@/mocks/pricing';
import { PricingCard } from '@/components/marketing/pricing-card';

export default function PricingPage() {
    return (
        <PageLayout
            breadcrumbs={
                pricing.map((p) => ({
                    id: p.id,
                    name: p.name,
                    icon: p.icon,
                })) as any
            }
            pageHeading="Ödeme"
        >
            <div className="col-span-5 grid lg:col-span-4">
                {pricing.map((pricing) => (
                    <PricingCard key={pricing.id} {...pricing} />
                ))}
            </div>
        </PageLayout>
    );
}
