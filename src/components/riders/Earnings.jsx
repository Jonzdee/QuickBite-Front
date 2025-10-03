import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { 
  FiDollarSign, 
  FiTrendingUp, 
  FiCalendar,
  FiDownload,
  FiClock
} from 'react-icons/fi';
import { MdDeliveryDining } from 'react-icons/md';

function Earnings() {
  const [timeFilter, setTimeFilter] = useState('week');

  const stats = {
    today: 3250,
    week: 45000,
    month: 185000,
    totalDeliveries: 47,
    avgPerDelivery: 957,
    bonus: 5000
  };

  const dailyEarnings = [
    { day: 'Mon', amount: 8500, deliveries: 9 },
    { day: 'Tue', amount: 7200, deliveries: 8 },
    { day: 'Wed', amount: 9100, deliveries: 10 },
    { day: 'Thu', amount: 6800, deliveries: 7 },
    { day: 'Fri', amount: 10200, deliveries: 11 },
    { day: 'Sat', amount: 3200, deliveries: 2 },
    { day: 'Sun', amount: 0, deliveries: 0 }
  ];

  const recentPayments = [
    { 
      date: 'Oct 1, 2025',
      amount: 42500,
      deliveries: 45,
      status: 'completed',
      method: 'Bank Transfer'
    },
    { 
      date: 'Sep 24, 2025',
      amount: 38200,
      deliveries: 38,
      status: 'completed',
      method: 'Bank Transfer'
    },
    { 
      date: 'Sep 17, 2025',
      amount: 41000,
      deliveries: 42,
      status: 'completed',
      method: 'Bank Transfer'
    },
    { 
      date: 'Sep 10, 2025',
      amount: 39800,
      deliveries: 40,
      status: 'completed',
      method: 'Bank Transfer'
    }
  ];

  const breakdownData = [
    { label: 'Base Earnings', amount: 38000, percentage: 84 },
    { label: 'Tips', amount: 2000, percentage: 4 },
    { label: 'Bonuses', amount: 5000, percentage: 11 }
  ];

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 md:ml-44 min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-4 py-4 md:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Earnings</h1>
              <p className="text-sm text-gray-600 mt-1">Track your income and payouts</p>
            </div>
            <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              <FiDownload />
              <span className="hidden md:inline">Export</span>
            </button>
          </div>
        </div>

        <div className="p-4 md:p-6 pb-24 md:pb-6 max-w-7xl">
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {['today', 'week', 'month'].map((filter) => (
              <button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  timeFilter === filter
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                
                <FiTrendingUp className="text-xl" />
              </div>
              <p className="text-3xl md:text-4xl font-bold mb-2">
                ₦{stats[timeFilter].toLocaleString()}
              </p>
              <p className="text-sm opacity-90">
                Total earnings this {timeFilter}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <MdDeliveryDining className="text-3xl text-blue-600" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stats.totalDeliveries}
              </p>
              <p className="text-sm text-gray-600">
                Deliveries this {timeFilter}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <FiClock className="text-3xl text-green-600" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                ₦{stats.avgPerDelivery}
              </p>
              <p className="text-sm text-gray-600">Average per delivery</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Daily Breakdown</h2>
                <div className="space-y-3">
                  {dailyEarnings.map((day) => (
                    <div key={day.day} className="flex items-center gap-4">
                      <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                      <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-orange-600 h-full flex items-center px-3 text-white text-sm font-medium transition-all"
                          style={{ width: `${(day.amount / 12000) * 100}%` }}
                        >
                          {day.amount > 0 && `₦${day.amount.toLocaleString()}`}
                        </div>
                      </div>
                      <div className="w-24 text-right text-sm text-gray-600">
                        {day.deliveries} {day.deliveries === 1 ? 'order' : 'orders'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800">Payment History</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deliveries</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentPayments.map((payment, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-800">{payment.date}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                            ₦{payment.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{payment.deliveries}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{payment.method}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                              {payment.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Earnings Breakdown</h3>
                <div className="space-y-4">
                  {breakdownData.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="font-semibold text-gray-800">₦{item.amount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-orange-600 h-2 rounded-full transition-all"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-800">Total</span>
                    <span className="text-xl font-bold text-orange-600">
                      ₦{stats.week.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-600 rounded-full p-2">
                    <FiCalendar className="text-white" />
                  </div>
                  <h3 className="font-semibold text-blue-900">Next Payout</h3>
                </div>
                <p className="text-2xl font-bold text-blue-900 mb-1">Friday, Oct 10</p>
                <p className="text-sm text-blue-800">
                  Expected: ₦{stats.week.toLocaleString()}
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">💰 Bonus Alert!</p>
                <p className="text-xs text-green-800">
                  Complete 5 more deliveries this week to unlock ₦2,000 bonus!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Earnings;