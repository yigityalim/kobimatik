import { useState, useCallback, useEffect } from 'react';
import { z } from 'zod';
import { FormData, MultiStepFormProps } from '@/types/form-types';
import { authClient } from '@/lib/auth/client';
import { useRouter } from 'next/navigation';

export function useMultiStepForm<T extends z.ZodObject<any>>({
  steps,
  onSubmit,
  checkSession,
}: Pick<MultiStepFormProps<T>, 'steps' | 'onSubmit' | 'checkSession'>) {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setCollectedData] = useState<FormData>({});
  const [showLoginModal, setShowLoginModal] = useState(false);

  const session = authClient.useSession();
  const isLoggedIn = !!session?.data?.session;
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      setCurrentStep(0);
      setCollectedData({});
    }
  }, [isLoggedIn]);

  const handleFormSubmit = useCallback(
    async (data: Partial<z.infer<T>>) => {
      const updatedData = { ...collectedData, ...data };
      setCollectedData(updatedData);
      console.log('MultiStepForm -> updatedData', updatedData);

      if (currentStep < steps.length - 1) {
        const nextStep = currentStep + 1;
        if (checkSession?.(nextStep) && !isLoggedIn) {
          setShowLoginModal(true);
          return;
        }
        setCurrentStep(nextStep);
      } else {
        await onSubmit(updatedData as z.infer<T>);
      }
    },
    [currentStep, steps.length, collectedData, onSubmit, checkSession, isLoggedIn],
  );

  const handleLogin = useCallback(() => {
    router.push('/sign-in');
    setShowLoginModal(false);
  }, []);

  const resetForm = useCallback(() => {
    setCurrentStep(0);
    setCollectedData({});
  }, []);

  return {
    currentStep,
    setCurrentStep,
    collectedData,
    setCollectedData,
    handleFormSubmit,
    isLoggedIn,
    showLoginModal,
    setShowLoginModal,
    handleLogin,
    resetForm,
  };
}
