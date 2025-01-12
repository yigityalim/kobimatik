'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider, type Path, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'motion/react';
import { z } from 'zod';
import { Field, FormData, MultiStepFormProps } from '@/types/form-types';
import { FormField } from './form-field';
import { FormSelect } from './form-select';
import { ProgressBar } from '@/components/multi-step-form/progress-bar';
import { NavigationButtons } from '@/components/multi-step-form/navigation-buttons';
import { PreviousDataDrawer } from '@/components/multi-step-form/previous-data-drawer';

export function MultiStepForm<T extends z.ZodObject<any>>({
                                                            steps,
                                                            schemas,
                                                            onSubmit
                                                          }: MultiStepFormProps<T>) {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setCollectedData] = useState<FormData>({});

  const methods = useForm<z.infer<T>>({
    resolver: zodResolver(schemas[currentStep]),
    mode: 'onSubmit'
  });

  useEffect(() => {
    Object.entries(collectedData).forEach(([key, value]) => {
      methods.setValue(key as Path<z.infer<T>>, value as any);
    });
  }, [currentStep, collectedData, methods]);

  const handleFormSubmit = async (data: Partial<z.infer<T>>) => {
    const updatedData = { ...collectedData, ...data };
    setCollectedData(updatedData);
    console.log("MultiStepForm -> updatedData", updatedData);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      await onSubmit(updatedData as z.infer<T>);
    }
  };

  const nextStep = () => setCurrentStep(current => Math.min(current + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(current => Math.max(current - 1, 0));

  const renderField = (field: Field) => {
    if (field.type === 'select') {
      return <FormSelect key={field.name} {...field} />;
    }
    return <FormField key={field.name} {...field} />;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => handleFormSubmit({ ...collectedData, ...data }))} className="space-y-4">
        <ProgressBar
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          progress={((currentStep + 1) / steps.length) * 100}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {steps[currentStep].fields.map(renderField)}
          </motion.div>
        </AnimatePresence>

        <NavigationButtons currentStep={currentStep} setCurrentStep={setCurrentStep} stepsLength={steps.length} />
        {currentStep > 0 && (
          <PreviousDataDrawer steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} collectedData={collectedData} />
        )}
      </form>
    </FormProvider>
  );
}

