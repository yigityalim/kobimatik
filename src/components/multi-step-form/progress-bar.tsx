import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import NumberFlow from '@number-flow/react';
import { FormData, Step } from '@/types/form-types';
import { useFormContext } from 'react-hook-form';

interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  progress: number;
}

export function ProgressBar({
  steps,
  currentStep,
  setCurrentStep,
  progress,
}: Readonly<ProgressBarProps>) {
  return (
    <div className="relative mt-4 flex w-full flex-col gap-2">
      <motion.div
        transition={{
          staggerChildren: 0.1,
        }}
        className={cn(
          'flex w-full flex-row items-center gap-x-2',
          steps.length < 4 ? 'justify-start' : 'justify-between',
        )}
      >
        {steps.map((_, i) => (
          <motion.div
            key={i}
            whileHover={i + 1 === currentStep ? {} : { scale: 1.1 }}
            whileTap={i + 1 === currentStep ? {} : { scale: 0.9 }}
            onClick={() => {
              setCurrentStep(i);
            }}
            className={cn(
              'flex size-6 cursor-pointer items-center justify-center rounded-md text-[10px] font-bold transition-colors duration-300 select-none md:size-7 md:text-sm',
              steps.length < 4 ? 'rounded-md' : 'rounded-full',
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
          trend={(oldValue, value) => (value > oldValue ? 1 : -1)}
        />
      </div>
    </div>
  );
}
