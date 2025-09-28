import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProfileDashboard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    accountType: "User",
    notifications: false,
    theme: "System Default",
    language: "System Language",
  });

  const [savedData, setSavedData] = useState(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedData(formData); // update profile header with new data
    alert("Changes Saved Successfully ✅");
  };

  // Function to get initials from fullName
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white min-h-screen w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 rounded-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">
            Profile Dashboard
          </h2>

          {/* Profile Info */}
          <div className="flex items-center gap-4 border-b pb-6 mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold text-xl">
              {getInitials(savedData.fullName)}
            </div>
            <div>
              <h3 className="font-medium">{savedData.fullName}</h3>
              <p className="text-sm text-gray-500">{savedData.email}</p>
              <span className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-md">
                {savedData.accountType}
              </span>
            </div>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Account Type
              </label>
              <input
                type="text"
                name="accountType"
                value={formData.accountType}
                disabled
                className="w-full border border-gray-300 rounded-lg p-2 bg-gra-100 text-gray-500"
              />
            </div>

            {/* Email Notifications */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <label htmlFor="notifications" className="text-sm">
                Enable notifications
              </label>
            </div>

            {/* Theme */}
            <div>
              <label className="block text-sm font-medium mb-1">Theme</label>
              <select
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-orange-500"
              >
                <option>System Default</option>
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium mb-1">Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-orange-500"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex flex-col mt-6 gap-4">
              <Link 
              to="/change-password"
              className="text-sm text-orange-600 hover:underline">
                Change Password
              </Link>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
