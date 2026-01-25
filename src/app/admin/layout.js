import SideNavigation from "../Components/adminComponents/SideNavigation";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="sticky top-0 h-screen flex justify-center items-center">
        <SideNavigation />
      </aside>

      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
