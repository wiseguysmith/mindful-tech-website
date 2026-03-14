import { NextRequest, NextResponse } from 'next/server';

/**
 * Middleware - pass-through for main app.
 * next-intl middleware was causing routing issues on Netlify (app has no [locale] segment).
 * Main app at app/ does not use next-intl; routes work without locale rewriting.
 */
export default function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

