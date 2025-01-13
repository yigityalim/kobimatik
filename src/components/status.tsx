'use client';

import NextLink from 'next/link';
import useSWR from 'swr';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useScopedI18n } from '@/locales/client';

const Link = motion.create(NextLink);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Status() {
  const t = useScopedI18n('menu.status');
  /*const { data, error, isLoading } = useSWR(
        'https://status.kobimatik.com/api/v2/status',
        fetcher,
    );*/

  // TODO: Remove this mock data
  const data = {
    status: {
      indicator: 'none',
    },
  };

  const error = false;
  const isLoading = false;

  return (
    <Link
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'border-offgray-200 dark:border-offgray-600 flex w-fit items-center justify-between space-x-2 rounded-full border px-3 py-1.5',
        {
          'border-gray-500': isLoading,
          'border-red-500': error || data.status.indicator !== 'none',
          'border-green-500': !error && data.status.indicator === 'none',
          'border-yellow-500': !error && data.status.indicator === 'minor',
          'border-purple-500': !error && data.status.indicator === 'major',
        },
      )}
      href="#"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <p className="text-foreground font-mono text-xs">
          {isLoading ? t('isLoading') : ''}
          {error && t('error')}
          {!error && data.status.indicator === 'none' && t('operational')}
          {!error && data.status.indicator === 'minor' && t('partialOutage')}
          {!error && data.status.indicator === 'major' && t('majorOutage')}
        </p>
      </div>
      <span className="relative ml-auto flex h-1.5 w-1.5">
        <span
          className={cn(
            'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
            { 'bg-gray-500': isLoading },
            { 'bg-red-500': error || data.status.indicator !== 'none' },
            { 'bg-green-500': !error && data.status.indicator === 'none' },
            { 'bg-yellow-500': !error && data.status.indicator === 'minor' },
            { 'bg-red-500': !error && data.status.indicator === 'major' },
          )}
        />
        <span
          className={cn(
            'relative inline-flex h-1.5 w-1.5 rounded-full',
            { 'bg-gray-500': isLoading },
            { 'bg-red-500': error || data.status.indicator !== 'none' },
            { 'bg-green-500': !error && data.status.indicator === 'none' },
            { 'bg-yellow-500': !error && data.status.indicator === 'minor' },
            { 'bg-red-500': !error && data.status.indicator === 'major' },
          )}
        />
      </span>
    </Link>
  );
}
