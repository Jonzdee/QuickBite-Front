import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const mockData = {
  "7d": [
    { date: "Sep 1", revenue: 1200 },
    { date: "Sep 2", revenue: 2100 },
    { date: "Sep 3", revenue: 800 },
    { date: "Sep 4", revenue: 1600 },
    { date: "Sep 5", revenue: 1900 },
    { date: "Sep 6", revenue: 2400 },
    { date: "Sep 7", revenue: 1700 },
  ],
  "30d": Array.from({ length: 30 }, (_, i) => ({
    date: `Day ${i + 1}`,
    revenue: Math.floor(Math.random() * 2500) + 500,
  })),
  "3m": Array.from({ length: 12 }, (_, i) => ({
    date: `W${i + 1}`,
    revenue: Math.floor(Math.random() * 4000) + 1000,
  })),
};

export default function TotalRevenueCard() {
  const [range, setRange] = useState("7d");

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Total Revenue
        </span>

        {/* Desktop toggle */}
        <div className="hidden md:flex space-x-2">
          {[
            { key: "7d", label: "7 days" },
            { key: "30d", label: "30 days" },
            { key: "3m", label: "3 months" },
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => setRange(opt.key)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                range === opt.key
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Mobile dropdown */}
        <select
          className="md:hidden text-sm border border-gray-300 rounded px-2 py-1"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="7d">7 days</option>
          <option value="30d">30 days</option>
          <option value="3m">3 months</option>
        </select>
      </div>

      {/* Total number */}
      <p className="text-xl font-bold text-gray-900 mb-3">
        $
        {mockData[range]
          .reduce((sum, d) => sum + d.revenue, 0)
          .toLocaleString()}
      </p>

      {/* Chart */}
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockData[range]}>
            <defs>
              <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF7622" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FF7622" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" hide />
            <YAxis hide />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#FF7622"
              fillOpacity={1}
              fill="url(#orangeGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
