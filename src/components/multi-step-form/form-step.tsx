import React from 'react';
import { useScopedI18n } from '@/locales/client';
import { Locale } from '@/locales/server';

interface FormStepProps extends React.PropsWithChildren {
  title: string; //keyof Locale['pages']['report']['create']['steps'];
}

export function FormStep({ title, children }: Readonly<FormStepProps>) {
  const t = useScopedI18n('pages.report.create.steps');
  return (
    <div className="space-y-4">
      <h3 className="font-lora text-accent-blue border-b-accent-blue mb-2.5 mb-4 scroll-mt-24 border-b pb-1 text-start text-xl font-medium text-pretty dark:border-blue-300 dark:text-blue-300">
        {t(title as any)} {/*as keyof Locale['pages']['report']['create']['steps']*/}
      </h3>
      {children}
    </div>
  );
}
