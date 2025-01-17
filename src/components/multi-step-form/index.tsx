'use client';

import React, { useEffect, useCallback, useMemo } from 'react';
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
import { DynamicTable } from '@/components/multi-step-form/dynamic-table';
import { useMultiStepForm } from '@/lib/hooks/use-form-step';
import { LoginModal } from '@/components/login-modal';
import { authClient } from '@/lib/auth/client';

export function MultiStepForm<T extends z.ZodObject<any>>({
  steps,
  schemas,
  onSubmit,
  checkSession,
}: Readonly<MultiStepFormProps<T>>) {
  const {
    currentStep,
    setCurrentStep,
    collectedData,
    handleFormSubmit,
    isLoggedIn,
    showLoginModal,
    setShowLoginModal,
    handleLogin,
    resetForm,
  } = useMultiStepForm<T>({
    steps,
    onSubmit,
    checkSession,
  });

  const methods = useForm<z.infer<T>>({
    resolver: zodResolver(schemas[currentStep]),
    mode: 'onSubmit',
  });

  useEffect(() => {
    Object.entries(collectedData).forEach(([key, value]) => {
      methods.setValue(key as Path<z.infer<T>>, value as any);
    });
  }, [currentStep, collectedData, methods]);

  useEffect(() => {
    if (!isLoggedIn) {
      resetForm();
      methods.reset();
    }

    return () => {
      if (!isLoggedIn) {
        resetForm();
        methods.reset();
      }
    };
  }, [resetForm, methods, isLoggedIn]);

  const renderField = useCallback((field: Field) => {
    switch (field.type) {
      case 'select':
        return <FormSelect key={field.name} {...field} />;
      case 'dynamicTable':
        return <DynamicTable key={field.name} {...field} />;
      default:
        return <FormField key={field.name} {...field} />;
    }
  }, []);

  const memoizedProgressBar = useMemo(
    () => (
      <ProgressBar
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        progress={((currentStep + 1) / steps.length) * 100}
      />
    ),
    [steps, currentStep, setCurrentStep],
  );

  const memoizedNavigationButtons = useMemo(
    () => (
      <NavigationButtons
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        stepsLength={steps.length}
        checkSession={checkSession}
        isLoggedIn={isLoggedIn}
        setShowLoginModal={setShowLoginModal}
      />
    ),
    [currentStep, setCurrentStep, steps.length, checkSession, isLoggedIn, setShowLoginModal],
  );

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => handleFormSubmit({ ...collectedData, ...data }))}
        className="space-y-4"
      >
        {memoizedProgressBar}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {steps[currentStep].fields.map(renderField)}
          </motion.div>
        </AnimatePresence>

        {memoizedNavigationButtons}
        {currentStep > 0 && (
          <PreviousDataDrawer
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            collectedData={collectedData}
          />
        )}
      </form>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </FormProvider>
  );
}
