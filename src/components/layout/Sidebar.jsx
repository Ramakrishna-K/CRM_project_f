import {
  LayoutDashboard,
  ClipboardList,
  MessageCircle,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Interactions",
    icon: ClipboardList,
  },
  {
    title: "AI Assistant",
    icon: MessageCircle,
  },
  {
    title: "HCPs",
    icon: Users,
  },
  {
    title: "Reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-slate-700">
        <h2 className="text-2xl font-bold tracking-wide">
          CRM
        </h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-blue-600 transition duration-300"
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className="bg-slate-800 rounded-xl p-4">
          <h3 className="font-semibold">
            AI CRM
          </h3>

          <p className="text-sm text-gray-300 mt-1">
            Smart healthcare interaction management powered by AI.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;