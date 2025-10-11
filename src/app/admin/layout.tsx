import AdminSidebar from '@molecules/AdminSidebar/AdminSidebar';
import { supabaseService } from '@/services/supabaseService';
import NextTopLoader from 'nextjs-toploader';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await supabaseService.getUser();
  console.log('user', user);

  return (
    <div className="flex min-h-screen">
      <NextTopLoader showSpinner={false} />
      <AdminSidebar />
      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
}
