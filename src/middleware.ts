import { type NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/middleware';
import { ROUTES, isPublicRoute } from '@/lib/constants/routes';
import { NEXT_PARAM, safeNextPath } from '@/lib/auth/redirect';

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

  // Public routes skip the Supabase round-trip entirely. This runs on every
  // request, so calling `getUser()` for anonymous visitors reading the blog is
  // a network hop per page view for an answer nobody uses.
  //
  // Safe because middleware is no longer load-bearing for authorisation:
  // Server Actions POST to whatever route the caller is on, so pathname checks
  // never protected them — `PostService`/`TagService` enforce it at the write.
  // The only thing skipped is the session refresh, and any authenticated call
  // builds its own Supabase client and refreshes there.
  if (isPublicRoute(request.nextUrl.pathname)) {
    return response;
  }

  // Refresh session if expired - required for Server Components
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // Redirect unauthenticated users to login page, remembering where they
    // were headed so the login can hand them back to it.
    const url = request.nextUrl.clone();
    url.pathname = ROUTES.LOGIN;
    // `clone()` carries the original query string over; it belongs to the
    // attempted route, not to /login, so it is folded into `next` instead.
    url.search = '';

    const attempted = safeNextPath(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
    );
    if (attempted) {
      url.searchParams.set(NEXT_PARAM, attempted);
    }

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
