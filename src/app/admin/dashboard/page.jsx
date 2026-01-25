import getAlluser from "@/action/admin.action";
import { getDashboardStats } from "@/action/admin.action";
import ActionButtons from "@/app/Components/adminComponents/ActionButton";
import StatCard from "@/app/Components/adminComponents/StatCard";
import PendingPayment from "@/app/Components/adminComponents/PendingPayment";
import { paymentSubmit, getAllpendingpayment } from "@/action/payment.action";
import { Users, Database, Crown, ShieldCheck, Terminal } from "lucide-react";
import UserTable from "@/app/Components/adminComponents/UserTabile";

export default async function AdminDashboard() {
  const data = await getDashboardStats();
  const userData = await getAlluser();
  const paymentData = await getAllpendingpayment();

  if (!data.success || !userData.success) {
    return (
      <div className="p-10 text-red-500 text-center">
        Failed to load dashboard data.
      </div>
    );
  }

  const stats = data.stats;
  const allusers = userData.data;
  const allpayment = paymentData.data;

  return (
    <div className="min-h-screen text-slate-200 w-full">
      <main className="flex justify-center w-full">
        <div className="w-full max-w-7xl px-4 md:px-6 py-6 md:py-8 space-y-6 md:space-y-10">
          <header className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white flex justify-center items-center gap-2 md:gap-3">
              <ShieldCheck className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
              Admin Control Center
            </h1>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              Monitor platform performance & manage users
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard
              icon={Users}
              label="Total Users"
              value={stats.totalUsers}
            />
            <StatCard
              icon={Crown}
              label="Premium Users"
              value={stats.premiumUsers}
            />
            <StatCard
              icon={Database}
              label="Total APIs"
              value={stats.totalApis}
            />
            <StatCard
              icon={Terminal}
              label="API Copies"
              value={stats.totalCopies}
            />
          </section>

          <div className="w-full overflow-hidden">
            <PendingPayment allpayment={allpayment} />
          </div>

          <div className="w-full overflow-hidden">
            <UserTable users={allusers} />
          </div>

          <footer className="text-center text-[10px] md:text-xs text-slate-500 pb-6">
            System running smoothly • Admin Dashboard v1.0
          </footer>
        </div>
      </main>
    </div>
  );
}
