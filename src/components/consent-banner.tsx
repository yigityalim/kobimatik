'use client';

import { trackingConsentAction } from '@/actions/tracking-consent-action';
import { useAction } from 'next-safe-action/hooks';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useScopedI18n } from '@/locales/client';
import { Noise } from '@/components/Noise';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function ConsentBanner() {
  const t = useScopedI18n('consentBanner');
  const [isOpen, setIsOpen] = React.useState(true);
  const [expended, setExpended] = React.useState(false);
  const trackingAction = useAction(trackingConsentAction, {
    onExecute: () => setIsOpen(false),
  });

  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'border-offgray-100 bg-background sh-alt fixed bottom-6 left-6 z-20 flex w-[calc(100vw-3rem)] max-w-[420px] flex-col items-start space-y-4 rounded-sm border p-4 transition-all md:bottom-10 md:left-10 dark:border-gray-400/15',
        isOpen && 'animate-in sm:slide-in-from-bottom-full slide-in-from-bottom-full',
      )}
    >
      <Noise className="size-full" />
      <div className="font-writer text-sm">{t('message')}</div>
      <button
        onClick={() => setExpended(!expended)}
        className="z-30 inline-flex cursor-pointer items-center gap-x-2 text-xs text-gray-500 underline"
      >
        {t(expended ? 'less' : 'more')}{' '}
        <ChevronDown size={16} className={cn(expended && 'rotate-180')} />
      </button>
      <AnimatePresence mode="sync">
        {expended && (
          <div className="z-20 text-xs text-gray-500">
            <p className="mb-1 text-sm font-semibold text-gray-500 md:mb-1.5">
              {t('details.title')}
            </p>
            <p className="text-gray-500">{t('details.description')}</p>
          </div>
        )}
      </AnimatePresence>
      <div className="z-40 flex w-full justify-end space-x-2">
        <Button onClick={() => trackingAction.execute(false)}>{t('reject')}</Button>
        <Button onClick={() => trackingAction.execute(true)}>{t('accept')}</Button>
      </div>
    </motion.div>
  );
}
