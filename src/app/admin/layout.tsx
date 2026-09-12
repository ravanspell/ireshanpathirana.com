import AdminSidebar from '@molecules/AdminSidebar/AdminSidebar';
import AdminMobileHeader from '@molecules/AdminMobileHeader/AdminMobileHeader';
import NextTopLoader from 'nextjs-toploader';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <NextTopLoader showSpinner={false} />

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block">
        <AdminSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <AdminMobileHeader />

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
