import React from "react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-60 md:h-80 flex items-center justify-center text-center px-4">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.fliprogram.com/u/2023/09/29153245/Street-Food-4.webp?strip=all&lossy=1&ssl=1')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold leading-tight">
            Terms Of Use
          </h2>

        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 ">
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">
          By creating an account or placing an order, you agree to these terms
          and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">2. User Responsibilities</h2>
        <p className="text-gray-600 mb-4">
          You are responsible for keeping your account secure and your
          information accurate.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">3. Orders & Payments</h2>
        <p className="text-gray-600 mb-4">
          All payments must be made when placing an order. Menu items and prices
          may change without prior notice.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">4. Limitation of Liability</h2>
        <p className="text-gray-600 mb-4">
          Foodie Vendor is not responsible for delays, losses, or damages
          outside of our control, including delivery or third-party food
          quality.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">5. Contact</h2>
        <p className="text-gray-600">
          For questions, contact us at{" "}
          <span className="font-medium">support@quickbite.com</span>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
