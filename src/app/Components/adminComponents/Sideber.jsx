import {
  LayoutDashboard,
  PlusCircle,
  Database,
  Users,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admin" },
    { name: "Add API", icon: <PlusCircle size={20} />, path: "/admin/add-api" },
    { name: "All APIs", icon: <Database size={20} />, path: "/admin/all-apis" },
    { name: "All Users", icon: <Users size={20} />, path: "/admin/all-users" },
    {
      name: "Add Category",
      icon: <PlusCircle size={20} />,
      path: "/admin/addcategoty",
    },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg transition">
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
