'use client';
import { createI18nClient } from 'next-international/client';

export const locales = [
  {
    locale: 'tr',
    displayName: 'Türkçe',
  },
  {
    locale: 'en',
    displayName: 'English',
  },
  {
    locale: 'de',
    displayName: 'Deutsch',
  },
  {
    locale: 'fr',
    displayName: 'Français',
  },
  {
    locale: 'it',
    displayName: 'Italiano',
  },
  {
    locale: 'es',
    displayName: 'Español',
  },
  {
    locale: 'nl',
    displayName: 'Nederlands',
  },
] as const;

export type Locale = typeof import('./tr').default;

export type Locales = {
  [key in (typeof locales)[number]['locale']]: Locale;
};

export const { useI18n, useScopedI18n, useCurrentLocale, useChangeLocale, I18nProviderClient } =
  createI18nClient({
    tr: () => import('./tr'),
    en: () => import('./en'),
    //de: () => import('./de'),
    //fr: () => import('./fr'),
    //it: () => import('./it'),
    //es: () => import('./es'),
    //nl: () => import('./nl'),
  });
