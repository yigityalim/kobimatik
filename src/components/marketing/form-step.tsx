import React from 'react';

interface FormStepProps extends React.PropsWithChildren {
    title: string;
}

export function FormStep({ title, children }: FormStepProps) {
    return (
        <div className="space-y-4">
            <h3 className="font-lora text-accent-blue border-b-accent-blue mb-2.5 mb-4 scroll-mt-24 border-b pb-1 text-start text-xl font-medium text-pretty dark:border-blue-300 dark:text-blue-300">
                {title}
            </h3>
            {children}
        </div>
    );
}
