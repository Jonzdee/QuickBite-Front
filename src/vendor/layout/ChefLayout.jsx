import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import BottomNav from "../component/BottomNav";
import RunningOrders from "../component/RunningOrders";
import { useState } from "react";

export default function ChefLayout() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (desktop only) */}
      <aside className="hidden md:block w-64 bg-white border-r">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 bg-gray-50 p-4">
          <Outlet />
        </main>

        {/* Bottom nav (mobile only) */}
        <div className="md:hidden">
          <BottomNav expanded={expanded} setExpanded={setExpanded}>
            {/* Render RunningOrders only when nav is expanded */}
            {expanded && (
              <RunningOrders open={expanded} onClose={() => setExpanded(false)} />
            )}
          </BottomNav>
        </div>
      </div>
    </div>
  );
}
