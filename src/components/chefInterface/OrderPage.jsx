import React from "react";

const orders = [
  {
    id: "ORD-1001",
    items: "Jollof Rice & Chicken",
    name: "Neymar Junior",
    quantity: 2,
    amount: 5000,
    status: "Pending",
    date: "2025-09-27",
  },
  {
    id: "ORD-1002",
    items: "Pizza Slice",
    name: "Raji safiu",
    quantity: 1,
    amount: 2000,
    status: "Completed",
    date: "2025-09-26",
  },
  {
    id: "ORD-1003",
    items: "Shawarma",
    name: "Michael Olise",
    quantity: 3,
    amount: 4500,
    status: "Cancelled",
    date: "2025-09-25",
  },
  
];

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">📋 Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">Order ID</th>
                <th className="p-3">Items</th>
                <th className="p-3">Name</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Amount (₦)</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`border-b hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-3 font-medium">{order.id}</td>
                  <td className="p-3">{order.items}</td>
                  <td className="p-3">{order.name}</td>
                  <td className="p-3">{order.quantity}</td>
                  <td className="p-3">{order.amount.toLocaleString()}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-lg text-sm font-semibold
                      ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

