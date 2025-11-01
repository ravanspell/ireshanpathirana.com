/**
 * Application Routes
 *
 * Centralized route definitions for the application.
 * Using constants ensures consistency and makes refactoring easier.
 *
 * @example
 * import { ROUTES } from '@/lib/constants/routes';
 * redirect(ROUTES.ADMIN.EDITOR);
 */

/**
 * Public routes accessible without authentication
 */
export const PUBLIC_ROUTES = {
  /** Home page */
  HOME: '/',

  /** Login page */
  LOGIN: '/login',

  /** Authentication callback routes */
  AUTH: '/auth',

  /** Error page */
  ERROR: '/error',
} as const;

/**
 * Admin routes requiring authentication
 */
export const ADMIN_ROUTES = {
  /** Admin dashboard */
  DASHBOARD: '/admin',

  /** Blog editor */
  EDITOR: '/admin/editor',
} as const;

/**
 * Blog routes
 */
export const BLOG_ROUTES = {
  /** Blog listing page */
  INDEX: '/blog',

  /**
   * Generate a blog post URL from a slug
   * @param slug - The blog post slug
   * @returns The full blog post URL
   */
  POST: (slug: string) => `/blog/${slug}`,
} as const;

/**
 * All application routes combined
 */
export const ROUTES = {
  ...PUBLIC_ROUTES,
  ADMIN: ADMIN_ROUTES,
  BLOG: BLOG_ROUTES,
} as const;

/**
 * Routes that should bypass authentication middleware
 * Used in middleware to allow public access
 */
export const PUBLIC_ROUTE_PATTERNS = [
  ROUTES.LOGIN,
  ROUTES.AUTH,
  ROUTES.ERROR,
  ROUTES.BLOG.INDEX, // Blog listing and all blog posts
] as const;

/**
 * Type-safe route checker
 *
 * Checks if a given path should be publicly accessible without authentication.
 * Handles exact matches and prefix matches appropriately.
 *
 * @param path - The path to check
 * @returns True if the path is a public route
 */
export const isPublicRoute = (path: string): boolean => {
  // Home page - exact match only
  if (path === ROUTES.HOME) {
    return true;
  }

  // Check other public route patterns with startsWith
  // This allows routes like /blog/my-post to match /blog
  return PUBLIC_ROUTE_PATTERNS.some((route) => path.startsWith(route));
};
