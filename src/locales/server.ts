import { createI18nServer } from 'next-international/server';

export type Locale = typeof import('./tr').default;

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } = createI18nServer({
    tr: () => import('./tr'),
    en: () => import('./en'),
    de: () => import('./de'),
    fr: () => import('./fr'),
    it: () => import('./it'),
    es: () => import('./es'),
    nl: () => import('./nl'),
});
