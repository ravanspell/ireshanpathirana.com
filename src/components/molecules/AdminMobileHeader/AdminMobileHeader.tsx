'use client';

import AdminSidebar from '@molecules/AdminSidebar/AdminSidebar';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

/**
 * Mobile-only header for the admin dashboard.
 *
 * Isolated as its own client component so the surrounding dashboard
 * layout can stay a Server Component — only the Sheet's open/close
 * state needs to run on the client.
 */
export default function AdminMobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:hidden sticky top-0 z-40 border-b bg-card px-4 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <AdminSidebar onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
