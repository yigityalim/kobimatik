import { Button } from '@/components/ui/button';
import { useScopedI18n } from '@/locales/client';

interface NavigationButtonsProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  stepsLength: number;
}

export function NavigationButtons({
  currentStep,
  setCurrentStep,
  stepsLength,
}: Readonly<NavigationButtonsProps>) {
  const buttonT = useScopedI18n('button');
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Button
        type="button"
        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
        disabled={currentStep === 0}
      >
        {buttonT('previous')}
      </Button>
      {currentStep === stepsLength - 1 ? (
        <Button type="submit">{buttonT('submit')}</Button>
      ) : (
        <Button type="submit">{buttonT('next')}</Button>
      )}
    </div>
  );
}
