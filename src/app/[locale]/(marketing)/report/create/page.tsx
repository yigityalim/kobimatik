'use client';
import React from 'react';
import { PageLayout } from '@/components/marketing/page-layout';
import { MultiStepForm } from '@/components/marketing/multi-step-form';

export default function Page() {
    return (
        <PageLayout pageHeading="report.create.title" pageDescription="report.create.description">
            <MultiStepForm />
        </PageLayout>
    );
}
