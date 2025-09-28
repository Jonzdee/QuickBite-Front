import React from 'react'
import { motion } from "framer-motion";

function Notifications() {
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
  return (
     <div className="bg-white min-h-screen w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">

        <button
          className="flex-1 text-center py-3 text-lg font-medium"
        >
          Notifications
        </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            >
    
          {/* Content */}
          <div className="flex-1 px-4 py-2 overflow-y-auto">
            {
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
    
           
          </div>
          </motion.div>
        </div>
      );
}

export default Notifications