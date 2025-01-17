'use client';

import React from 'react';

export type StepsProps = {
  steps: {
    title: string;
    description: string;
    content: React.ReactNode;
  }[];
};

const mockSteps = [
  {
    title: 'Step 1',
    description: 'İlk Adım',
    content: <p>Step 1 content</p>,
  },
  {
    title: 'Step 2',
    description: 'Do this second',
    content: <p>Step 2 content</p>,
  },
  {
    title: 'Step 3',
    description: 'Do this third',
    content: <p>Step 3 content</p>,
  },
];

export function Steps({ steps }: Readonly<StepsProps>) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      {mockSteps.map((step, index) => (
        <div key={step.title} className="relative w-full">
          <span className="bg-accent-blue absolute inset-y-0 left-2 w-0.5 dark:bg-blue-300">
            <span className="bg-accent-blue dark:text-offgray-950 absolute top-0 left-1/2 inline-flex size-6 -translate-x-1/2 transform items-center justify-center rounded-md font-mono text-sm text-white dark:bg-blue-300">
              {index + 1}
            </span>
          </span>
          <div className="container mx-auto flex flex-col items-start justify-center pl-10">
            <div className="mb-2 flex w-full flex-col items-start justify-center">
              <h2 className="h4 font-lora text-accent-blue mb-4 font-bold dark:text-blue-300">
                {step.title}
              </h2>
              <p className="subheader border-b border-dashed font-mono">{step.description}</p>
            </div>
            <div className="flex flex-col items-center justify-center">{step.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
