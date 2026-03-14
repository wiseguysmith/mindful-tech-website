import { NextResponse } from 'next/server';

/**
 * Middleware - pass-through for main app.
 * next-intl middleware was causing routing issues on Netlify (app has no [locale] segment).
 */
export default function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

