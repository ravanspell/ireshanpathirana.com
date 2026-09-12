'use client';

import { useNavigationView } from '@/utils/hooks/useNavigationView';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { FileEdit, LayoutDashboard } from 'lucide-react';

interface AdminSidebarProps {
  onNavigate?: () => void;
}

/**
 * Sidebar navigation component for the admin dashboard
 *
 * Highlights the active navigation link based on the current URL.
 */
export default function AdminSidebar({ onNavigate }: AdminSidebarProps) {
  // Define your nav items
  const navItems = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Blog Editor', href: '/admin/editor', icon: FileEdit },
  ];

  const { isActive } = useNavigationView(navItems);

  return (
    <aside className="w-64 min-h-screen bg-card border-r flex flex-col">
      <div className="p-6">
        <div className="mb-2">
          <h2 className="font-bold text-xl text-foreground">Admin Panel</h2>
        </div>
        <p className="text-sm text-muted-foreground mt-1">Manage your content</p>
      </div>

      <Separator />

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium',
                active
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <Icon className={cn('h-5 w-5', active ? 'text-primary-foreground' : 'text-muted-foreground')} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Separator />

      <div className="p-4">
        <div className="rounded-lg bg-muted p-4">
          <p className="text-xs font-medium text-foreground mb-1">Need help?</p>
          <p className="text-xs text-muted-foreground">Check our documentation</p>
        </div>
      </div>
    </aside>
  );
}
