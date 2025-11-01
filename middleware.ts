import { type NextRequest, NextResponse } from 'next/server';
import { createClient } from './src/utils/supabase/middleware';
import { ROUTES, isPublicRoute } from './src/lib/constants/routes';

/**
 * Next.js Middleware
 *
 * Handles authentication for all routes using Supabase.
 * - Checks if user is authenticated
 * - Redirects unauthenticated users to login (except for public routes)
 * - Refreshes the session if needed
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 */
export async function middleware(request: NextRequest) {
  const { supabase, response } = await createClient(request);

  // Refresh session if expired - required for Server Components
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Check if user is trying to access a protected route without authentication
  if (!user && !isPublicRoute(request.nextUrl.pathname)) {
    // Redirect unauthenticated users to login page
    const url = request.nextUrl.clone();
    url.pathname = ROUTES.LOGIN;
    return NextResponse.redirect(url);
  }

  return response;
}

/**
 * Middleware Configuration
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Image files (svg, png, jpg, jpeg, gif, webp)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
