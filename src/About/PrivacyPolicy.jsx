import React from "react";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h2>

        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 ">
        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We may collect personal details like your name, email, phone number,
          delivery address, and payment details when you place an order.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We use your information to process orders, deliver food, provide
          customer support, and improve our services.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          3. Data Protection
        </h2>
        <p className="text-gray-600 mb-4">
          We implement strong security measures to keep your personal
          information safe and do not share it without consent unless required
          by law.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          4. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have questions, contact us at{" "}
          <span className="font-medium">support@quickbite.com</span>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
