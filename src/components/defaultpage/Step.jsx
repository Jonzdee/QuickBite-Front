import React from "react";
import { FaUtensils, FaMotorcycle, FaCreditCard, FaSmile } from "react-icons/fa";

function Steps() {
  const steps = [
    { icon: <FaUtensils />, title: "Choose Your Meal", desc: "Pick from hundreds of local restaurants." },
    { icon: <FaCreditCard />, title: "Pay Securely", desc: "Multiple payment options available." },
    { icon: <FaMotorcycle />, title: "Track Delivery", desc: "Know exactly when your food will arrive." },
    { icon: <FaSmile />, title: "Enjoy Your Meal", desc: "Fresh, hot, and delicious." },
  ];

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-20 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-100 text-orange-600 text-3xl rounded-full">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
