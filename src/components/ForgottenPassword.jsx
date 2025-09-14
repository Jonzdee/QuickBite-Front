import React from "react";

function ForgotPassword() {
  return (
    <form className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div>
        {/* Header Section */}
        <div className="relative bg-[#0A0A23] rounded-t-3xl px-6 pt-24 pb-24">
          {/* Back Button */}
          <button className="absolute top-8 left-4 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow">
            <span className="text-lg text-black">&#8592;</span>
          </button>

          {/* Title */}
          <h1 className="text-white text-2xl font-bold text-center">
            Forgot Password
          </h1>
          <p className="text-gray-300 text-sm text-center mt-2">
            Please sign in to your existing account
          </p>
        </div>

        {/* Form Container */}
        <div className="h-70 relative -mt-18 bg-white rounded-2xl px-12 py-12">
          {/* Email Label */}
          <label className="block text-sm text-gray-700 font-semibold mb-2">
            EMAIL
          </label>

          {/* Email Input */}
          <input
            type="email"
            placeholder="example@gmail.com"
            required="please fill out this field"
            className="w-full px-4 py-3 bg-[#F1F5F9] text-gray-800 rounded-xl outline-none mb-6"
          />

          {/* Send Code Button */}
          <button className="w-full bg-[#FF6B00] hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-200 mb-">
            SEND CODE
          </button>
        </div>
      </div>
    </form>
  );
}
export default ForgotPassword;
