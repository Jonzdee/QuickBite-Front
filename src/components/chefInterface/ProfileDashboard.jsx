import React from 'react';
import { FaCaretRight } from "react-icons/fa";


const ProfileDashboard = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
        
        {/* Profile + Balance */}
        <div className="bg-orange-500 text-white p-8 lg:w-1/3 relative rounded-lg">
          <div className="mt-10 text-center lg:text-left lg:mt-20">
            <h2 className="text-xl font-semibold">My Profile</h2>
            <p className="text-sm opacity-90 mt-1">Available Balance</p>
            <h1 className="text-5xl font-bold mt-2">$500.00</h1>
            <button className="mt-6 px-6 py-2 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-orange-500 transition">
              Withdraw
            </button>
          </div>
        </div>


        {/* MenuItem */}
        <div className="p-6 lg:p-10 flex-1 space-y-4">
          <MenuItem icon="👤" label="Personal Info" />
          <MenuItem icon="⚙️" label="Settings" />
          <MenuItem icon="💸" label="Withdrawal History" />
          <MenuItem icon="📦" label="Number of Orders" value="29K" />
          <MenuItem icon="⭐" label="User Reviews" />
          <MenuItem icon="↩" label="Log Out" />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center justify-between max-w-6xl p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{icon}</span>
        <span className="text-lg font-medium">{label}</span>
      </div>
      {value ? (
        <span className="text-base font-semibold text-gray-700">{value}</span>
      ) : (
        <span className="text-gray-400 text-2xl"><FaCaretRight  /></span>
      )}
    </div>
  );
};

export default ProfileDashboard;
