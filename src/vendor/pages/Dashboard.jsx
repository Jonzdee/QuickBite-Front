import DashboardStats from "../component/DashboardStats";
import TotalRevenueCard from "../component/TotalRevenueCard";

export default function Dashboard() {
  return (
    <div className="p-4 pb-20">
      {/* Top header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-500">Current Location</p>
          <h2 className="text-lg font-semibold text-gray-800">Chef Interfaces</h2>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>

      {/* Stats cards grid */}
      <DashboardStats />

      {/* Earnings card with dropdown + chart */}
      <TotalRevenueCard />

      {/* Right now section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Right Now</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow h-24 flex items-center justify-center text-gray-400">
            IMG
          </div>
          <div className="bg-white rounded-xl shadow h-24 flex items-center justify-center text-gray-400">
            IMG
          </div>
        </div>
      </div>
    </div>
  );
}
