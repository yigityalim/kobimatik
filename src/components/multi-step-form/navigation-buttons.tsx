import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useScopedI18n } from '@/locales/client';

interface NavigationButtonsProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  stepsLength: number;
  checkSession?: (step: number) => boolean;
  isLoggedIn: boolean;
  setShowLoginModal: (value: boolean) => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = React.memo(
  ({ currentStep, setCurrentStep, stepsLength, checkSession, isLoggedIn, setShowLoginModal }) => {
    const t = useScopedI18n('button');

    const handlePrevious = () => {
      setCurrentStep(Math.max(0, currentStep - 1));
    };

    const handleNext = () => {
      if (currentStep < stepsLength - 1) {
        const nextStep = currentStep + 1;
        if (checkSession?.(nextStep) && !isLoggedIn) {
          setShowLoginModal(true);
          return;
        }
        setCurrentStep(nextStep);
      }
    };

    return (
      <div className="mt-4 flex justify-between gap-x-2">
        <Button type="button" onClick={handlePrevious} disabled={currentStep === 0}>
          {t('previous')}
        </Button>
        <Button type={currentStep === stepsLength - 1 ? 'submit' : 'button'} onClick={handleNext}>
          {t(currentStep === stepsLength - 1 ? 'submit' : 'next')}
        </Button>
      </div>
    );
  },
);

NavigationButtons.displayName = 'NavigationButtons';
