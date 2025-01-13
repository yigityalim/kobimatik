'use client';

import { useScopedI18n } from '@/locales/client';
import Link from 'next/link';

export function AcceptTerms() {
  const t = useScopedI18n('accept_terms');

  return (
    <p className="mt-4 text-xs text-[#878787]">
      {t('content', {
        terms: (
          <Link href="/terms" className="underline">
            {t('terms_of_service')}
          </Link>
        ),
        privacy: (
          <Link href="/privacy" className="underline">
            {t('privacy_policy')}
          </Link>
        ),
      })}
    </p>
  );
}
