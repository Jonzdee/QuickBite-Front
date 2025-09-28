import React from "react";
import { motion } from "framer-motion";


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


  return (
    <div className="bg-white min-h-screen w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">


        
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >

      <button
          onClick={() => setActiveTab("notifications")}
          className="flex-1 text-center py-3 text-lg font-medium"
        >
          Messages
        </button>
    

      {/* Content */}
      <div className="flex-1 px-4 py-2 overflow-y-auto">

        {
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
