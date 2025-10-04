import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  FiMessageCircle,
  FiSend,
  FiClock,
  FiUser,
  FiPackage,
} from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";

function Inbox() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      type: "customer",
      name: "Kemi Ogundele",
      orderId: "#ORD-2847",
      lastMessage: "Please ring the doorbell when you arrive",
      time: "2 mins ago",
      unread: 2,
      avatar: "JD",
      status: "active",
    },
    {
      id: 2,
      type: "customer",
      name: "Walentino",
      orderId: "#ORD-2848",
      lastMessage: "Thank you for the delivery!",
      time: "15 mins ago",
      unread: 0,
      avatar: "JS",
      status: "completed",
    },
    {
      id: 3,
      type: "support",
      name: "QuickBite Support",
      orderId: null,
      lastMessage: "Your weekly earnings report is ready",
      time: "1 hour ago",
      unread: 1,
      avatar: "QB",
      status: "support",
    },
    {
      id: 4,
      type: "restaurant",
      name: "Chicken Republic",
      orderId: "#ORD-2845",
      lastMessage: "Order is ready for pickup",
      time: "2 hours ago",
      unread: 0,
      avatar: "CR",
      status: "completed",
    },
    {
      id: 5,
      type: "customer",
      name: "Michael Brown",
      orderId: "#ORD-2843",
      lastMessage: "Can you add extra napkins?",
      time: "3 hours ago",
      unread: 0,
      avatar: "MB",
      status: "completed",
    },
  ];

  const chatMessages = {
    1: [
      {
        sender: "customer",
        text: "Hi, I ordered food from Chicken Republic",
        time: "2:30 PM",
      },
      {
        sender: "rider",
        text: "Yes, I have your order. On my way!",
        time: "2:32 PM",
      },
      {
        sender: "customer",
        text: "Please ring the doorbell when you arrive",
        time: "2:35 PM",
      },
      { sender: "rider", text: "Sure, will do!", time: "2:36 PM" },
    ],
    2: [
      {
        sender: "customer",
        text: "Hello, is the order on the way?",
        time: "1:15 PM",
      },
      { sender: "rider", text: "Yes, arriving in 5 minutes", time: "1:16 PM" },
      {
        sender: "customer",
        text: "Thank you for the delivery!",
        time: "1:25 PM",
      },
    ],
    3: [
      {
        sender: "support",
        text: "Hello! Your weekly earnings report is ready",
        time: "12:00 PM",
      },
      {
        sender: "support",
        text: "You earned ₦45,000 this week with 47 deliveries",
        time: "12:00 PM",
      },
    ],
  };

  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 md:ml-44 min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-4 py-4 md:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Inbox
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Messages and notifications
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
                3 unread
              </span>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100vh-80px)]">
          <div className="w-full md:w-96 bg-white border-r border-gray-200 overflow-y-auto pb-20 md:pb-0">
            <div className="p-4">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-300"
              />
            </div>

            <div className="divide-y divide-gray-200">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv)}
                  className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                    selectedChat?.id === conv.id
                      ? "bg-orange-50 border-l-4 border-orange-600"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                        conv.type === "support"
                          ? "bg-blue-600"
                          : conv.type === "restaurant"
                          ? "bg-green-600"
                          : "bg-orange-600"
                      }`}
                    >
                      {conv.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-gray-800 truncate">
                          {conv.name}
                        </p>
                        <span className="text-xs text-gray-500">
                          {conv.time}
                        </span>
                      </div>
                      {conv.orderId && (
                        <p className="text-xs text-gray-500 mb-1">
                          {conv.orderId}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate flex-1">
                          {conv.lastMessage}
                        </p>
                        {conv.unread > 0 && (
                          <span className="ml-2 bg-orange-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-1 flex-col">
            {selectedChat ? (
              <>
                <div className="bg-white border-b border-gray-200 p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                        selectedChat.type === "support"
                          ? "bg-blue-600"
                          : selectedChat.type === "restaurant"
                          ? "bg-green-600"
                          : "bg-orange-600"
                      }`}
                    >
                      {selectedChat.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {selectedChat.name}
                      </p>
                      {selectedChat.orderId && (
                        <p className="text-xs text-gray-500">
                          {selectedChat.orderId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {chatMessages[selectedChat.id]?.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.sender === "rider" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs ${
                          msg.sender === "rider"
                            ? "bg-orange-600 text-white"
                            : "bg-white text-gray-800 border border-gray-200"
                        } rounded-lg px-4 py-2`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.sender === "rider"
                              ? "text-orange-100"
                              : "text-gray-500"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  )) || (
                    <div className="text-center text-gray-500 py-8">
                      <FiMessageCircle className="text-4xl mx-auto mb-2 text-gray-300" />
                      <p>No messages yet</p>
                    </div>
                  )}
                </div>

                <div className="bg-white border-t border-gray-200 p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-300"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <FiSend />
                      Send
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-center p-8">
                <div>
                  <FiMessageCircle className="text-6xl text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Select a conversation</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Choose a message to start chatting
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedChat && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
            <div className="bg-white border-b border-gray-200 p-4">
              <button
                onClick={() => setSelectedChat(null)}
                className="text-orange-600 font-medium mb-2"
              >
                ← Back
              </button>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                    selectedChat.type === "support"
                      ? "bg-blue-600"
                      : selectedChat.type === "restaurant"
                      ? "bg-green-600"
                      : "bg-orange-600"
                  }`}
                >
                  {selectedChat.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {selectedChat.name}
                  </p>
                  {selectedChat.orderId && (
                    <p className="text-xs text-gray-500">
                      {selectedChat.orderId}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {chatMessages[selectedChat.id]?.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "rider" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs ${
                      msg.sender === "rider"
                        ? "bg-orange-600 text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    } rounded-lg px-4 py-2`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === "rider"
                          ? "text-orange-100"
                          : "text-gray-500"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border-t border-gray-200 p-4 pb-20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-300"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg transition-colors"
                >
                  <FiSend />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Inbox;
