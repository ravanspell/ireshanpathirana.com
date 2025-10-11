'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

/**
 * Interface for a navigation item
 */
interface NavItem {
  /** Display label of the navigation item */
  label: string;
  /** URL path of the navigation item */
  href: string;
}

/**
 * Custom hook to track which navigation item is active based on current URL
 *
 * @param navItems - Array of navigation items
 * @returns An object containing:
 *  - `activeItem`: The currently active NavItem (or undefined)
 *  - `isActive(href)`: Function to check if a given href is active
 *
 * @example
 * const { isActive } = useNavigationView(navItems);
 * <Link className={isActive("/about") ? "active" : ""}>About</Link>
 */
export function useNavigationView(navItems: NavItem[]) {
  const pathname = usePathname();

  const activeItem = useMemo(() => {
    // Find the first nav item where the current path starts with href
    return navItems.find((item) => pathname === item.href || pathname.startsWith(item.href + '/'));
  }, [pathname, navItems]);

  /**
   * Check if a given href is active
   * @param href - URL path to check
   * @returns boolean indicating if this nav item should be highlighted
   */
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return {
    activeItem,
    isActive,
  };
}
