import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { getScopedI18n } from '@/locales/server';
import { Noise } from '@/components/Noise';

export async function Banner() {
  const t = await getScopedI18n('banner');
  return (
    <Link
      className="text-accent-blue relative flex w-full items-center justify-center gap-2 border-b border-dashed border-blue-200/80 bg-linear-to-r from-transparent via-blue-100/40 to-transparent p-2 text-sm transition-colors hover:border-solid hover:bg-blue-50 dark:border-blue-300/10 dark:from-transparent dark:via-blue-600/10 dark:to-transparent dark:text-blue-100 dark:hover:bg-blue-700/10"
      href="/recap/2024"
    >
      <Calendar className="size-3" />
      {t('link', { year: 2024 })}
      <ArrowRight className="animate-arrow-transform size-3" />
      <Noise />
    </Link>
  );
}
