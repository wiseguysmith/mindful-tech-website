import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware - TEMPORARILY DISABLED to test if it causes /about invalid response.
 * Matcher excludes all to effectively disable.
 */
export default function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

