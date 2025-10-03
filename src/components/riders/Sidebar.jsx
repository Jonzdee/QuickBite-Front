import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { FiFolder, FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { FaToggleOn } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menus = [
    { name: "Overview", link: "/overview", icon: MdOutlineDashboard },
    { name: "Deliveries", link: "/jobs", icon: FiShoppingCart },
    { name: "Earnings", link: "/earnings", icon: TbReportAnalytics },
    {
      name: "Performance",
      link: "/performance",
      icon: AiOutlineUser,
      margin: true,
    },
    { name: "Schedule", link: "/schedule", icon: FiFolder },
    { name: "Map", link: "/map", icon: FaToggleOn },
    { name: "Support", link: "/support", icon: AiOutlineHeart, margin: true },
    { name: "Inbox", link: "/inbox", icon: FiMessageSquare },
    { name: "Account", link: "/account", icon: RiSettings4Line },
  ];

  
  const primaryTabs = [
    menus[0], // this is for Overview
    menus[1], // and this for Deliveries
    menus[2], // for Earnings
    menus[5], // also for  Map
  ];


  const secondaryMenus = menus.filter((m) => !primaryTabs.includes(m));

  const isActive = (link) => location.pathname === link;

  return (
    <>
    
      <aside className="hidden md:block">
        <div
          className={`bg-white min-h-screen ${
            open ? "w-44" : "w-16"
          } duration-500 text-gray-700 px-4 border-r border-gray-200 shadow-sm fixed left-0 top-0 z-40`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer hover:text-orange-600 transition-colors"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                key={i}
                to={menu?.link}
                className={`${menu?.margin && "mt-5"} ${
                  isActive(menu.link)
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-700"
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-orange-50 rounded-md hover:text-orange-600 transition-all duration-200`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit z-50`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </aside>

    
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="flex justify-around items-center h-16 px-2">
          {primaryTabs.map((tab) => (
            <Link
              key={tab.link}
              to={tab.link}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive(tab.link)
                  ? "text-orange-600 bg-orange-50"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              {React.createElement(tab.icon, { size: "22" })}
              <span className="text-xs font-medium">{tab.name}</span>
            </Link>
          ))}

        
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg text-gray-600 hover:text-orange-600 transition-all duration-200"
          >
            <HiMenuAlt3 size={22} />
            <span className="text-xs font-medium">More</span>
          </button>
        </div>
      </nav>


      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <HiX size={24} className="text-gray-600" />
            </button>
          </div>

          <div className="p-4 space-y-2">
            {secondaryMenus.map((menu, i) => (
              <Link
                key={i}
                to={menu.link}
                onClick={() => setMobileMenuOpen(false)}
                className={`${
                  isActive(menu.link)
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-700"
                } flex items-center gap-3 w-full p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200`}
              >
                {React.createElement(menu.icon, { size: "20" })}
                <span className="font-medium">{menu.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
