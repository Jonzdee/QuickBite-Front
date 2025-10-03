import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  FiShoppingCart,
  FiClock,
  FiTrendingUp,
  FiDollarSign,
  FiMapPin,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { MdDeliveryDining } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

function Overview() {
  const [isOnline, setIsOnline] = useState(false);

  const stats = {
    todayEarnings: 3250,
    todayDeliveries: 12,
    completionRate: 98,
    avgTime: 18,
    weeklyEarnings: 45000,
    rating: 4.8,
  };

  const activeOrders = [
    {
      id: "#ORD-2847",
      restaurant: "Chicken Republic",
      customer: "Kemi",
      distance: "2.3 km",
      time: "12 mins",
      amount: 450,
      status: "picked_up",
    },
    {
      id: "#ORD-2848",
      restaurant: "Dominos Pizza",
      customer: "Raji",
      distance: "3.1 km",
      time: "18 mins",
      amount: 680,
      status: "ready",
    },
  ];

  const recentActivity = [
    { time: "2:45 PM", action: "Delivered to Ikeja", amount: 350 },
    { time: "2:20 PM", action: "Delivered to Surulere", amount: 420 },
    { time: "1:50 PM", action: "Delivered to Yaba", amount: 380 },
    { time: "1:15 PM", action: "Delivered to VI", amount: 520 },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 md:ml-44 min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-4 py-4 md:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Good afternoon, Rider 
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isOnline
                  ? "bg-green-50 text-green-700 hover:bg-green-100"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  isOnline ? "bg-green-500" : "bg-gray-400"
                }`}
              />
              {isOnline ? "Online" : "Offline"}
            </button>
          </div>
        </div>

        <div className="p-4 md:p-6 pb-24 md:pb-6 max-w-7xl ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
               
                <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">
                  Today
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-1">
                ₦{stats.todayEarnings.toLocaleString()}
              </p>
              <p className="text-xs opacity-90">Earnings</p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <FiShoppingCart className="text-2xl text-blue-600" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                {stats.todayDeliveries}
              </p>
              <p className="text-xs text-gray-600">Deliveries</p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <FiCheck className="text-2xl text-green-600" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                {stats.completionRate}%
              </p>
              <p className="text-xs text-gray-600">Completion</p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <AiOutlineClockCircle className="text-2xl text-purple-600" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                {stats.avgTime}m
              </p>
              <p className="text-xs text-gray-600">Avg Time</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                    <MdDeliveryDining className="text-orange-600 text-xl" />
                    Active Orders
                  </h2>
                  <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2 py-1 rounded">
                    {activeOrders.length} Active
                  </span>
                </div>

                <div className="p-4 space-y-3">
                  {activeOrders.length > 0 ? (
                    activeOrders.map((order) => (
                      <div
                        key={order.id}
                        className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-semibold text-gray-800">
                              {order.restaurant}
                            </p>
                            <p className="text-sm text-gray-600">{order.id}</p>
                          </div>
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded ${
                              order.status === "picked_up"
                                ? "bg-blue-50 text-blue-700"
                                : "bg-yellow-50 text-yellow-700"
                            }`}
                          >
                            {order.status === "picked_up"
                              ? "In Transit"
                              : "Ready for Pickup"}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <FiMapPin className="text-gray-400" />
                            <span>{order.distance}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiClock className="text-gray-400" />
                            <span>{order.time}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600">
                            Deliver to:{" "}
                            <span className="font-medium text-gray-800">
                              {order.customer}
                            </span>
                          </p>
                          <p className="font-semibold text-orange-600">
                            ₦{order.amount}
                          </p>
                        </div>

                        <button className="w-full mt-3 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-medium transition-colors">
                          {order.status === "picked_up"
                            ? "Navigate to Customer"
                            : "Navigate to Restaurant"}
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <FiAlertCircle className="text-4xl text-gray-300 mx-auto mb-2" />
                      <p className="text-gray-500">No active orders</p>
                      <p className="text-sm text-gray-400 mt-1">
                        Go online to start receiving orders
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors text-left">
                  <FiClock className="text-xl text-orange-600 mb-2" />
                  <p className="font-medium text-gray-800 text-sm">
                    View Schedule
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Manage your shifts
                  </p>
                </button>

                <button className="bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors text-left">
                  <FiTrendingUp className="text-xl text-green-600 mb-2" />
                  <p className="font-medium text-gray-800 text-sm">
                    Earnings Report
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    View detailed stats
                  </p>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                <h3 className="font-semibold text-gray-800 mb-4">This Week</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Total Earnings
                    </span>
                    <span className="font-semibold text-gray-800">
                      ₦{stats.weeklyEarnings.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Total Deliveries
                    </span>
                    <span className="font-semibold text-gray-800">47</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Your Rating</span>
                    <span className="font-semibold text-orange-600 flex items-center gap-1">
                      ⭐ {stats.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">
                    Recent Activity
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <div>
                        <p className="text-gray-800 font-medium">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                      <span className="text-green-600 font-medium">
                        +₦{activity.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">
                  💡 Performance Tip
                </p>
                <p className="text-xs text-blue-800">
                  Your acceptance rate is 95%! Keep it above 90% to qualify for
                  bonus incentives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Overview;
