'use client';

import { useNavigationView } from '@/utils/hooks/useNavigationView';
import Link from 'next/link';

/**
 * Sidebar navigation component for the admin dashboard
 *
 * Highlights the active navigation link based on the current URL.
 */
export default function AdminSidebar() {
  // Define your nav items
  const navItems = [{ label: 'Blog editor', href: '/admin/editor' }];

  const { isActive } = useNavigationView(navItems);

  return (
    <aside className="w-64 p-4 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <h2 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Admin</h2>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-3 py-2 rounded-md transition-colors ${
              isActive(item.href)
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
