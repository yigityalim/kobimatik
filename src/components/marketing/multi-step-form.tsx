'use client';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { stepSchemas, type FormData } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { FormStep } from './form-step';
import { FormField } from './form-field';
import { FormSelect } from './form-select';
import { cn } from '@/lib/utils';
import NumberFlow from '@number-flow/react';
import { useEventListener } from 'usehooks-ts';
import { Drawer } from 'vaul';
import { create_report_step as steps } from '@/lib/steps/create-report-step';
import { useScopedI18n } from '@/locales/client';

export function MultiStepForm() {
    const buttonT = useScopedI18n('button');
    const t = useScopedI18n('pages.report.create');
    const [currentStep, setCurrentStep] = React.useState(0);
    const [collectedData, setCollectedData] = React.useState<Partial<FormData>>({});

    const methods = useForm<FormData>({
        resolver: zodResolver(stepSchemas[currentStep]),
        mode: 'onBlur',
    });

    console.log('MultiStepForm - collectedData', collectedData);

    const onSubmit = (data: Partial<FormData>) => {
        setCollectedData((prev) => ({ ...prev, ...data }));
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log('Tüm veriler gönderiliyor:', collectedData);
            // Backend'e istekte bulunabilirsiniz.
        }
    };

    useEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && methods.formState.isValid) {
            setCurrentStep(Math.min(currentStep + 1, steps.length - 1));
        }

        if (e.key === 'Enter' && methods.formState.isValid) {
            onSubmit(methods.getValues());
        }

        if (e.key === 'ArrowLeft') {
            setCurrentStep(Math.max(0, currentStep - 1));
        }

        if (e.key === 'Enter' && !methods.formState.isValid) {
            e.preventDefault();
        }
    });

    const progress = ((currentStep + 1) / steps.length) * 100;

    return (
        <FormProvider {...methods}>
            <div className="relative mt-4 flex w-full flex-col gap-2">
                <motion.div
                    transition={{
                        staggerChildren: 0.1,
                    }}
                    className="flex w-full items-center justify-between"
                >
                    {Array.from({ length: steps.length }, (_, i) => (
                        <motion.div
                            key={i}
                            whileHover={i + 1 === currentStep ? {} : { scale: 1.1 }}
                            whileTap={i + 1 === currentStep ? {} : { scale: 0.9 }}
                            onClick={() => {
                                if (i < currentStep || methods.formState.isValid) {
                                    setCurrentStep(i); // Geçerli form doldurulmuşsa ilerlemeye izin ver
                                } else {
                                    // Eğer form geçersizse geçişe izin verme (istenirse hata mesajı gösterilebilir)
                                    console.warn('Formu doldurmalısınız.');
                                }
                            }}
                            className={cn(
                                'flex size-6 cursor-pointer items-center justify-center rounded-full text-[10px] font-bold transition-colors duration-300 select-none md:size-7 md:text-sm',
                                {
                                    'bg-accent-blue dark:text-offgray-900 text-blue-100 dark:bg-blue-300':
                                        i <= currentStep,
                                    'dark:bg-offgray-900 bg-gray-300 text-white': i > currentStep,
                                },
                            )}
                        >
                            {i + 1}
                        </motion.div>
                    ))}
                </motion.div>
                <div className="dark:bg-offgray-900 relative mt-1 h-1 w-full overflow-hidden rounded-full bg-gray-300">
                    <motion.span
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
                        className="bg-accent-blue absolute top-0 left-0 h-full dark:bg-blue-300"
                    />
                </div>
                <div className="flex w-full items-center justify-end gap-x-2">
                    <NumberFlow
                        className="text-offgray-400 dark:text-offgray-600 text-sm select-none"
                        format={{ notation: 'compact' }}
                        value={progress}
                        prefix={'(%'}
                        suffix={')'}
                        continuous
                        trend={(oldValue, value) => (value > oldValue ? 1 : -1)}
                    />
                </div>
            </div>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FormStep title={t(steps[currentStep].title as any) /* FIXME: fix any */}>
                            {steps[currentStep].fields.map((field) =>
                                field.type === 'select' ? (
                                    <FormSelect
                                        key={field.name}
                                        name={field.name as keyof FormData}
                                        label={field.label}
                                        options={field.options || []}
                                        icon={field.icon}
                                    />
                                ) : (
                                    <FormField
                                        key={field.name}
                                        name={field.name as keyof FormData}
                                        label={field.label}
                                        type={field.type || 'text'}
                                        placeholder={field.placeholder}
                                        icon={field.icon}
                                    />
                                ),
                            )}
                        </FormStep>
                    </motion.div>
                </AnimatePresence>
                <div className="flex w-full items-center justify-between gap-x-2">
                    <Button
                        type="button"
                        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                        disabled={currentStep === 0}
                    >
                        {buttonT('previous')}
                    </Button>
                    {currentStep === steps.length - 1 ? (
                        <Button
                            type="button"
                            onClick={() => console.log('Önizleme moduna geçiliyor:', collectedData)}
                        >
                            {buttonT('preview')}
                        </Button>
                    ) : (
                        <Button type="submit" disabled={!methods.formState.isValid}>
                            {buttonT('next')}
                        </Button>
                    )}
                </div>
                {currentStep > 0 && (
                    <Drawer.Root>
                        <Drawer.Trigger asChild>
                            <Button
                                type="button"
                                onClick={() => console.log('Önceki form verileri:', collectedData)}
                                className="mt-4"
                            >
                                Önceki Form Verileri
                            </Button>
                        </Drawer.Trigger>
                        <Drawer.Portal>
                            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                            <Drawer.Content className="bg-background/50 fixed right-0 bottom-0 left-0 z-5 mt-24 flex h-1/2 flex-col rounded-t-[10px] outline-none">
                                <Drawer.Description className="sr-only">
                                    Bu alanda önceki form verileri görüntülenir.
                                </Drawer.Description>
                                <div className="bg-background flex-1 rounded-t-[10px] p-4">
                                    <div className="mx-auto max-w-md">
                                        <Drawer.Title className="text-accent-blue font-lora mb-4 text-xl font-medium dark:text-blue-300">
                                            Önceki Form Verileri
                                        </Drawer.Title>
                                        <div className="h-1/2 space-y-4 overflow-y-scroll">
                                            {/*
                                            FIXME: Fix this drawer.
                                            TODO: Bu drawer önizleme olmalı. şu an amacı dışı kullanılıyor. kullanıcı bir önceki form (lar) da neleri doldurmuş görmeli.
                                            */}
                                            {steps.map((step, i) => (
                                                <Drawer.Close asChild key={i}>
                                                    <Button
                                                        type="button"
                                                        onClick={() => setCurrentStep(i)}
                                                        className={cn(
                                                            'w-full text-left',
                                                            i === currentStep
                                                                ? 'bg-accent-blue dark:text-offgray-900 text-blue-100 dark:bg-blue-300'
                                                                : 'dark:bg-offgray-950 text-whit bg-gray-300',
                                                        )}
                                                    >
                                                        {step.title}
                                                    </Button>
                                                </Drawer.Close>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Drawer.Content>
                        </Drawer.Portal>
                    </Drawer.Root>
                )}
            </form>
        </FormProvider>
    );
}
