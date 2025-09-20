// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import {
  IconGrid,
  IconThreeDots,
  IconPlus,
  IconBell,
  IconUser,
  IconMessage,
} from "../icons";

const navLinks = [
  { to: "/chef/dashboard", label: "Dashboard", icon: IconGrid },
  { to: "/chef/foods", label: "My Food", icon: IconThreeDots },
  { to: "/chef/add-food", label: "Add Item", icon: IconPlus },
  { to: "/chef/orders", label: "Orders", icon: IconGrid },
  { to: "/chef/notifications", label: "Notifications", icon: IconBell },
  { to: "/chef/messages", label: "Messages", icon: IconMessage },
  { to: "/chef/profile", label: "Profile", icon: IconUser },
];

export default function Sidebar() {
  return (
    <nav className="h-screen w-64 flex flex-col p-4 gap-2 bg-white border-r sticky top-0">
      {navLinks.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
              isActive ? "bg-orange-50 text-orange-600" : "text-gray-700"
            }`
          }
        >
          <Icon className="w-5 h-5" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

