import { useState } from "react";
import { motion } from "framer-motion";

const notifications = [
  {
    id: 1, name: "Tanbir Ahmed", action: "Placed a new order",
    time: "20 min ago",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    icon: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 2,
    name: "Salim Smith",
    action: "left a 5 star review",
    time: "20 min ago",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    icon: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 3,
    name: "Royal Bengol",
    action: "agreed to cancel",
    time: "20 min ago",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    icon: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 4,
    name: "Pabel Vuiya",
    action: "Placed a new order",
    time: "20 min ago",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    icon: "https://randomuser.me/api/portraits/men/13.jpg",
  },
];

const messages = [
  {
    id: 1,
    name: "Royal Parvej",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    message: "Sounds awesome!",
    time: "19:37",
    unreadCount: 1,
    online: true,
  },
  {
    id: 2,
    name: "Cameron Williamson",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    message: "Ok, Just hurry up little bit...😅",
    time: "19:37",
    unreadCount: 2,
    online: true,
  },
  {
    id: 3,
    name: "Ralph Edwards",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    message: "Thanks dude.",
    time: "19:37",
    unreadCount: 1,
    online: true,
  },
  {
    id: 4,
    name: "Eleanor Pena",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    message: "Thanks for the awesome food man...!",
    time: "19:37",
    unreadCount: 0,
    online: false,
  },
];

export default function NotificationAndMessages() {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <div className="bg-white min-h-screen w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-xl font-semibold text-gray-800 capitalize">
          {activeTab}
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
       
        <button
          onClick={() => setActiveTab("notifications")}
          className={`flex-1 text-center py-3 text-sm font-medium ${
            activeTab === "notifications"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-400"
          }`}
        >
          Notifications
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`flex-1 text-center py-3 text-sm font-medium ${
            activeTab === "messages"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-400"
          }`}
        >
          Messages ({messages.length})
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-2 overflow-y-auto">
        {activeTab === "notifications" &&
          notifications.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 border-b border-gray-200"
            >
              <div className="flex items-start space-x-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm leading-tight">
                    <span className="font-medium">{item.name}</span>{" "}
                    <span className="text-gray-500">{item.action}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                </div>
              </div>
              <img
                src={item.icon}
                alt="notification icon"
                className="w-10 h-10 rounded-md object-cover"
              />
            </div>
          ))}

        {activeTab === "messages" &&
          messages.map((msg) => (
            <div
              key={msg.id}
              className="flex items-center justify-between py-3 border-b border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={msg.avatar}
                    alt={msg.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {msg.online && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white"></span>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {msg.name}
                  </h4>
                  <p className="text-sm text-gray-500 truncate max-w-[200px]">
                    {msg.message}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-400">{msg.time}</span>
                {msg.unreadCount > 0 && (
                  <span className="mt-1 w-5 h-5 text-xs text-white bg-orange-500 rounded-full flex items-center justify-center">
                    {msg.unreadCount}
                  </span>
                )}
              </div>
            </div>
          ))}
      </div>
      </motion.div>
    </div>
  );
}
