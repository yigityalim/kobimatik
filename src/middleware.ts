import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = '/dashboard';

export async function middleware(request: NextRequest) {}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
