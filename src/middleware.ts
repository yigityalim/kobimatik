import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';
import { locales } from '@/locales/client';

const I18nMiddleware = createI18nMiddleware({
    locales: ['tr', 'en', 'de', 'fr', 'it', 'es', 'nl'],
    defaultLocale: 'tr',
});

export function middleware(request: NextRequest) {
    return I18nMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
