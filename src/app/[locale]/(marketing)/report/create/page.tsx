import React from 'react';
import { PageLayout } from '@/components/marketing/page-layout';
import { MultiStepForm } from '@/components/multi-step-form';
import { create_report_step } from '@/lib/steps/create-report-step';
import { stepSchemas } from '@/lib/schemas';

export default function Page() {
  return (
    <PageLayout pageHeading="report.create.title" pageDescription="report.create.description">
      <MultiStepForm
        checkSession={(step) => step >= 3} // 3. adımdan itibaren session kontrolü yapar
        steps={create_report_step as any}
        schemas={stepSchemas}
        onSubmit={(data) => {
          console.log('data', data);
        }}
      />
    </PageLayout>
  );
}
