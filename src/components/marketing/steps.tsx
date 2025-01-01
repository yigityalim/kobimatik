'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import NumberFlow from '@number-flow/react';

interface StepProps extends React.HTMLProps<HTMLFormElement> {
    children: React.ReactNode;
}

interface StepsProps {
    steps: React.ComponentType<StepProps>[];
    endStep: React.ReactNode;
}

const useStep = (totalSteps: number) => {
    const [step, setStep] = useState(1);

    const safeSetStep = useCallback(
        (newStep: number) => {
            setStep(Math.max(1, Math.min(newStep, totalSteps)));
        },
        [totalSteps],
    );

    const nextStep = useCallback(() => {
        safeSetStep(step + 1);
    }, [step, safeSetStep]);

    const prevStep = useCallback(() => {
        safeSetStep(step - 1);
    }, [step, safeSetStep]);

    return {
        step,
        setStep,
        nextStep,
        prevStep,
        isFirstStep: step === 1,
        isLastStep: step === totalSteps,
    };
};

export const Steps: React.FC<StepsProps> = React.memo(({ steps, endStep }) => {
    const { step, setStep, nextStep, prevStep, isFirstStep, isLastStep } = useStep(steps.length);
    const CurrentStep = useMemo(() => steps[step - 1], [steps, step]);

    return (
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-2">
            <div className="mt-8 flex w-full justify-between gap-x-2">
                <Button onClick={prevStep} disabled={isFirstStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" /> Geri
                </Button>
                <Button onClick={nextStep} disabled={isLastStep}>
                    İleri <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
            <div className="relative mt-4 flex w-full flex-col gap-2">
                <motion.div
                    transition={{
                        staggerChildren: 0.1,
                    }}
                    className="flex w-full items-center justify-between"
                >
                    {Array.from({ length: steps.length }).map((_, i) => (
                        <motion.div
                            whileHover={i + 1 === step ? {} : { scale: 1.1 }}
                            whileTap={i + 1 === step ? {} : { scale: 0.9 }}
                            onClick={() => i + 1 !== step && setStep(i + 1)}
                            key={i}
                            className={cn(
                                'flex size-6 cursor-pointer items-center justify-center rounded-full text-[10px] font-bold transition-colors duration-300 select-none md:size-7 md:text-sm',
                                {
                                    'bg-accent-blue dark:text-offgray-900 text-blue-100 dark:bg-blue-300':
                                        i < step,
                                    'dark:bg-offgray-900 bg-gray-300 text-white': i >= step,
                                },
                            )}
                        >
                            {i + 1}
                        </motion.div>
                    ))}
                </motion.div>
                <div className="dark:bg-offgray-900 relative mt-1 h-1 w-full overflow-hidden rounded-full bg-gray-300">
                    <motion.span
                        animate={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
                        className="bg-accent-blue absolute top-0 left-0 h-full dark:bg-blue-300"
                    />
                </div>
                <div className="flex w-full items-center justify-end gap-x-2">
                    {/*
                    TODO: Implement reset button
                    <button
                        onClick={() => {
                            if (step === 1) return;
                            setStep(1);
                        }}
                        disabled={isFirstStep}
                        className="text-accent-blue disabled:text-opacity/50 text-sm disabled:cursor-not-allowed dark:text-blue-300"
                    >
                        Formu Sıfırla
                    </button>
                    */}
                    <NumberFlow
                        className="text-offgray-400 dark:text-offgray-600 text-sm select-none"
                        format={{ notation: 'compact' }}
                        value={((step - 1) * 100) / (steps.length - 1)}
                        prefix={'(%'}
                        suffix={')'}
                        continuous
                        trend={(oldValue, value) => (value > oldValue ? 1 : -1)}
                    />
                </div>
            </div>
            <motion.div layout className="relative w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        layoutId={`step-${step}`}
                        variants={{
                            initial: { opacity: 0, height: 0 },
                            target: { opacity: 1, height: 'auto' },
                            exit: { opacity: 0, height: 0 },
                        }}
                        initial="initial"
                        animate="target"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        <CurrentStep>{`Step ${step}`}</CurrentStep>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
            <AnimatePresence>
                {isLastStep && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full pt-4"
                    >
                        {endStep}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});

Steps.displayName = 'Steps';
