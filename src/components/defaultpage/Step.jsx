import React from "react";
import { FaUtensils, FaMotorcycle, FaCreditCard, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

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
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-100 text-orange-600 text-3xl rounded-full"
              >
                {step.icon}
              </motion.div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
