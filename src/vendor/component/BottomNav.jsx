import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  IconGrid,
  IconBell,
  IconPlus,
  IconUser,
  IconThreeDots,
} from "../icons";

export default function BottomNav({ expanded, setExpanded, children }) {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-lg"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 35 }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(e, info) => {
        if (info.offset.y < -50) setExpanded(true); // swipe up
        if (info.offset.y > 50) setExpanded(false); // swipe down
      }}
    >
      {/* Drag handle */}
      {expanded && ( 
        <div className="flex justify-center py-2">
          <div className="w-12 h-1.5 rounded-full bg-gray-300" />
        </div>
      )}

      {expanded ? (
        // Expanded state → Running Orders
        <div className="max-h-[70vh] overflow-y-auto">{children}</div>
      ) : (
        // Collapsed nav only
        <div className="flex justify-around items-center py-3">
          <NavLink
            to="/chef/dashboard"
            className={({ isActive }) =>
              `w-6 h-6 ${isActive ? "text-orange-500" : "text-gray-600"}`
            }
          >
            <IconGrid />
          </NavLink>

          <NavLink
            to="/chef/foods"
            className={({ isActive }) =>
              `w-6 h-6 ${isActive ? "text-orange-500" : "text-gray-600"}`
            }
          >
            <IconThreeDots />
          </NavLink>

          <NavLink to="/chef/add-food">
            <button
              className="w-12 h-12 -mt-8 rounded-full flex items-center justify-center shadow-md 
              border border-orange-500 bg-orange-500/10"
            >
              <IconPlus className="w-6 h-6 text-orange-500" />
            </button>
          </NavLink>

          <NavLink
            to="/chef/notifications"
            className={({ isActive }) =>
              `w-6 h-6 ${isActive ? "text-orange-500" : "text-gray-600"}`
            }
          >
            <IconBell />
          </NavLink>

          <NavLink
            to="/chef/profile"
            className={({ isActive }) =>
              `w-6 h-6 ${isActive ? "text-orange-500" : "text-gray-600"}`
            }
          >
            <IconUser />
          </NavLink>
        </div>
      )}
    </motion.div>
  );
}
