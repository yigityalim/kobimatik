import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { DEFAULT_LANG, locales } from '@/locales/server';
import { getSessionFromRequest } from '@/lib/auth/middleware';
import { getProjectByOrganizationId } from '@/db/queries/project';

const I18nMiddleware = createI18nMiddleware({
    locales,
    defaultLocale: DEFAULT_LANG,
});

export default async function middleware(request: NextRequest) {
    const i18nResponse = await I18nMiddleware(request);

    console.log(request.nextUrl.pathname);

    // Only proceed with organization check for login path
    if (request.nextUrl.pathname.includes('/sign-in')) {
        const data = await getSessionFromRequest();

        if (!data?.user.id) {
            return i18nResponse;
        }
    }

    return i18nResponse;
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
