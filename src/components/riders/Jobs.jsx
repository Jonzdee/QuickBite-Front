import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { 
  FiMapPin, 
  FiClock, 
  FiCheck,
  FiX,
  FiNavigation,
  FiPhone
} from 'react-icons/fi';
import { MdDeliveryDining } from 'react-icons/md';

function Jobs() {
  const [filter, setFilter] = useState('available');

  const availableOrders = [
    {
      id: '#ORD-2851',
      restaurant: 'Chicken Republic',
      restaurantAddress: '12 Allen Avenue, Ikeja',
      customerAddress: '45 Opebi Road, Ikeja',
      distance: '2.3 km',
      time: '12 mins',
      amount: 450,
      pickupTime: '5 mins',
      items: 3
    },
    {
      id: '#ORD-2852',
      restaurant: 'Dominos Pizza',
      restaurantAddress: '8 Admiralty Way, Lekki',
      customerAddress: '21 Fola Osibo, Lekki',
      distance: '3.1 km',
      time: '18 mins',
      amount: 680,
      pickupTime: '8 mins',
      items: 2
    },
    {
      id: '#ORD-2853',
      restaurant: 'KFC',
      restaurantAddress: '15 Marina Street, Lagos Island',
      customerAddress: '32 Broad Street, Lagos Island',
      distance: '1.8 km',
      time: '10 mins',
      amount: 380,
      pickupTime: '3 mins',
      items: 4
    }
  ];

  const activeOrders = [
    {
      id: '#ORD-2847',
      restaurant: 'Chicken Republic',
      restaurantAddress: '12 Allen Avenue, Ikeja',
      customer: 'Raji',
      customerAddress: '45 Opebi Road, Ikeja',
      phone: '+234 803 123 4567',
      distance: '2.3 km',
      time: '12 mins',
      amount: 450,
      status: 'picked_up',
      items: 3
    },
    {
      id: '#ORD-2848',
      restaurant: 'Dominos Pizza',
      restaurantAddress: '8 Admiralty Way, Lekki',
      customer: 'Kemi',
      customerAddress: '21 Fola Osibo, Lekki',
      phone: '+234 803 456 7890',
      distance: '3.1 km',
      time: '18 mins',
      amount: 680,
      status: 'ready',
      items: 2
    }
  ];

  const completedOrders = [
    {
      id: '#ORD-2845',
      restaurant: 'The Place',
      completedAt: '2:45 PM',
      amount: 520,
      distance: '3.5 km',
      rating: 5
    },
    {
      id: '#ORD-2843',
      restaurant: 'Sweet Sensation',
      completedAt: '1:30 PM',
      amount: 380,
      distance: '2.1 km',
      rating: 5
    },
    {
      id: '#ORD-2841',
      restaurant: 'Chicken Republic',
      completedAt: '12:15 PM',
      amount: 450,
      distance: '2.8 km',
      rating: 4
    }
  ];

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 md:ml-44 min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-4 py-4 md:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Deliveries</h1>
              <p className="text-sm text-gray-600 mt-1">Manage your delivery orders</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Today:</span>
              <span className="font-bold text-orange-600">12 deliveries</span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 pb-24 md:pb-6 max-w-7xl ">
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {[
              { key: 'available', label: 'Available', count: availableOrders.length },
              { key: 'active', label: 'Active', count: activeOrders.length },
              { key: 'completed', label: 'Completed', count: completedOrders.length }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  filter === tab.key
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  filter === tab.key 
                    ? 'bg-white/20' 
                    : 'bg-gray-100'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {filter === 'available' && (
            <div className="space-y-4">
              {availableOrders.length > 0 ? (
                availableOrders.map((order) => (
                  <div key={order.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 hover:border-orange-300 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-orange-100 rounded-full p-3">
                          <MdDeliveryDining className="text-xl text-orange-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">{order.restaurant}</p>
                          <p className="text-sm text-gray-600">{order.id}</p>
                          <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <FiClock className="text-orange-600" />
                              Ready in {order.pickupTime}
                            </span>
                            <span>{order.items} items</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-orange-600">₦{order.amount}</p>
                        <p className="text-xs text-gray-500">Delivery fee</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Pick up from</p>
                        <p className="text-sm font-medium text-gray-800">{order.restaurantAddress}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Deliver to</p>
                        <p className="text-sm font-medium text-gray-800">{order.customerAddress}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <FiMapPin className="text-gray-400" />
                          <span>{order.distance}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock className="text-gray-400" />
                          <span>{order.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition-colors">
                        <FiCheck />
                        Accept Order
                      </button>
                      <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors">
                        <FiX />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                  <MdDeliveryDining className="text-5xl text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No available orders</p>
                  <p className="text-sm text-gray-400 mt-1">New orders will appear here</p>
                </div>
              )}
            </div>
          )}

          {filter === 'active' && (
            <div className="space-y-4">
              {activeOrders.length > 0 ? (
                activeOrders.map((order) => (
                  <div key={order.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-3">
                          <MdDeliveryDining className="text-xl text-blue-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-gray-800">{order.restaurant}</p>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                              order.status === 'picked_up' 
                                ? 'bg-blue-50 text-blue-700' 
                                : 'bg-yellow-50 text-yellow-700'
                            }`}>
                              {order.status === 'picked_up' ? 'In Transit' : 'Ready for Pickup'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{order.id}</p>
                          <p className="text-sm text-gray-600 mt-1">{order.items} items</p>
                        </div>
                      </div>
                      <p className="text-xl font-bold text-orange-600">₦{order.amount}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                        <p className="text-xs text-green-700 mb-1">
                          {order.status === 'picked_up' ? '✓ Picked up from' : 'Pick up from'}
                        </p>
                        <p className="text-sm font-medium text-gray-800">{order.restaurantAddress}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Deliver to</p>
                        <p className="text-sm font-medium text-gray-800">{order.customer}</p>
                        <p className="text-sm text-gray-600">{order.customerAddress}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <FiMapPin className="text-gray-400" />
                        <span>{order.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiClock className="text-gray-400" />
                        <span>{order.time}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition-colors">
                        <FiNavigation />
                        {order.status === 'picked_up' ? 'Navigate to Customer' : 'Navigate to Restaurant'}
                      </button>
                      <button className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                        <FiPhone />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                  <MdDeliveryDining className="text-5xl text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No active orders</p>
                  <p className="text-sm text-gray-400 mt-1">Accept an order to get started</p>
                </div>
              )}
            </div>
          )}

          {filter === 'completed' && (
            <div className="space-y-4">
              {completedOrders.length > 0 ? (
                completedOrders.map((order) => (
                  <div key={order.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 rounded-full p-3">
                          <FiCheck className="text-xl text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{order.restaurant}</p>
                          <p className="text-sm text-gray-600">{order.id}</p>
                          <p className="text-xs text-gray-500 mt-1">Completed at {order.completedAt}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">₦{order.amount}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-yellow-500">{'⭐'.repeat(order.rating)}</span>
                        </div>
                        <p className="text-xs text-gray-500">{order.distance}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                  <FiCheck className="text-5xl text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No completed orders</p>
                  <p className="text-sm text-gray-400 mt-1">Your delivery history will appear here</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Jobs;