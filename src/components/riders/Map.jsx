import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  FiNavigation,
  FiPhone,
  FiMessageCircle,
  FiMapPin,
} from "react-icons/fi";
import { MdDeliveryDining } from "react-icons/md";

function Map() {
  const [activeOrder, setActiveOrder] = useState({
    id: "#ORD-2847",
    restaurant: "Chicken Republic",
    restaurantAddress: "12 Allen Avenue, Ikeja",
    customer: "Kemi",
    customerAddress: "45 Opebi Road, Ikeja",
    phone: "+234 803 123 4567",
    distance: "2.3 km",
    estimatedTime: "12 mins",
    amount: 450,
    status: "picked_up",
    instructions: "Please ring the doorbell twice",
  });

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 md:ml-44 min-h-screen bg-gray-50">
        <div className="h-screen flex flex-col">
          <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-800">
              Live Delivery
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Active</span>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.12373285887!2d3.2635822!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1696345678901!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Delivery Map"
              ></iframe>
            </div>

            <div className="absolute top-4 right-4 z-10">
              <button className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors">
                <FiNavigation className="text-xl text-orange-600" />
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-4 md:p-6 mb-16 md:mb-0 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 rounded-full p-3">
                    <MdDeliveryDining className="text-2xl text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {activeOrder.id}
                    </p>
                    <p className="text-sm text-gray-600">
                      {activeOrder.status === "picked_up"
                        ? "Delivering to customer"
                        : "Picking up from restaurant"}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    activeOrder.status === "picked_up"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-yellow-50 text-yellow-700"
                  }`}
                >
                  {activeOrder.status === "picked_up" ? "In Transit" : "Ready"}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-2 mt-1">
                      <FiMapPin className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">
                        {activeOrder.status === "picked_up"
                          ? "Picked up from"
                          : "Pick up from"}
                      </p>
                      <p className="font-semibold text-gray-800">
                        {activeOrder.restaurant}
                      </p>
                      <p className="text-sm text-gray-600">
                        {activeOrder.restaurantAddress}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 rounded-full p-2 mt-1">
                      <FiMapPin className="text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">Deliver to</p>
                      <p className="font-semibold text-gray-800">
                        {activeOrder.customer}
                      </p>
                      <p className="text-sm text-gray-600">
                        {activeOrder.customerAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-blue-800">
                  <span className="font-medium">Delivery Instructions:</span>{" "}
                  {activeOrder.instructions}
                </p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Distance</p>
                    <p className="font-semibold text-gray-800">
                      {activeOrder.distance}
                    </p>
                  </div>
                  <div className="h-8 w-px bg-gray-300"></div>
                  <div>
                    <p className="text-xs text-gray-500">Est. Time</p>
                    <p className="font-semibold text-gray-800">
                      {activeOrder.estimatedTime}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Delivery Fee</p>
                  <p className="text-xl font-bold text-orange-600">
                    ₦{activeOrder.amount}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  <FiPhone />
                  Call Customer
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  <FiMessageCircle />
                  Message
                </button>
              </div>

              <div className="flex items-center justify-center ">
                <button className="w-90 mt-3 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition-colors">
                  {activeOrder.status === "picked_up"
                    ? "Mark as Delivered"
                    : "Confirm Pickup"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Map;
