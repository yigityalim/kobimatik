import { createI18nServer } from 'next-international/server';

export type Locale = typeof import('./tr').default;

export const DEFAULT_LANG = 'tr';
export const locales = [DEFAULT_LANG, 'en', 'de', 'fr', 'it', 'es', 'nl'] as const;

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } = createI18nServer({
    tr: () => import('./tr'),
    en: () => import('./en'),
    de: () => import('./de'),
    fr: () => import('./fr'),
    it: () => import('./it'),
    es: () => import('./es'),
    nl: () => import('./nl'),
});
