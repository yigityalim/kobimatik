import type React from 'react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/image';
import { ArrowRight } from 'lucide-react';

export type RecapOptions = {
  locale: string;
  year: string;
  recaps: {
    component: React.ComponentType;
    date: Date;
    title: string;
    description: string;
    footer: React.ComponentType;
  }[];
};

export const recapOptions: RecapOptions = {
  locale: 'en',
  year: '2024',
  recaps: [
    {
      component: () => null,
      date: new Date('2024-01-01'),
      title: "Acme's 2024 Recap",
      description:
        "This year was a breakthrough for acme. Lots of incredible achievements, which definitely wouldn't have been possible without you. Let's recap.",
      footer: () => (
        <>
          <p className="subheader inline-flex items-center gap-x-2 opacity-90 md:hidden">
            Kaydırın. <ArrowRight className="animate-arrow-transform size-3" />
          </p>
          <div className="hidden items-center gap-2 text-xs opacity-80 md:flex">
            <kbd className="dark:border-offgray-400/10 dark:bg-cream-900/10 flex max-w-max items-center gap-0.5 rounded-xs border border-gray-500/20 bg-gray-50/50 p-1.5 text-[.6875rem] font-bold text-gray-500 dark:text-gray-300">
              <ArrowRight className="size-3 rotate-180" />
            </kbd>{' '}
            veya{' '}
            <kbd className="dark:border-offgray-400/10 dark:bg-cream-900/10 flex max-w-max items-center gap-0.5 rounded-xs border border-gray-500/20 bg-gray-50/50 p-1.5 text-[.6875rem] font-bold text-gray-500 dark:text-gray-300">
              <ArrowRight className="size-3" />
            </kbd>{' '}
            tuşlarına basın.
          </div>
        </>
      ),
    },
    {
      component: () => (
        <Image lightSrc="/oss-light.webp" darkSrc="/oss-dark.webp" alt="2024 Recap" />
      ),
      date: new Date('2024-02-01'),
      title: 'Open Source Contributions',
      description:
        'We have made significant contributions to the open-source community. We have released several new projects and contributed to existing ones.',
      footer: () => <Button className="mt-auto">View Projects</Button>,
    },
  ],
};
