import React from "react";
import { FaStore, FaUtensils, FaMotorcycle, FaCreditCard } from "react-icons/fa";
import { motion } from "framer-motion";

function Steps() {
  const steps = [
    { 
      icon: <FaStore />, 
      title: "Create Your Store", 
      desc: "Sign up and set up your restaurant or food outlet in minutes." 
    },
    { 
      icon: <FaUtensils />, 
      title: "Add Your Menu", 
      desc: "Upload your meals, set prices, and customize availability." 
    },
    { 
      icon: <FaMotorcycle />, 
      title: "Receive Orders", 
      desc: "Customers place orders, and QuickBite handles the delivery." 
    },
    { 
      icon: <FaCreditCard />, 
      title: "Get Paid Fast", 
      desc: "Secure payouts straight to your account, always on time." 
    },
  ];

  return (
    <section className="text-gray-700 body-font bg-white">
      <div className="container px-5 py-20 mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900"
        >
          How It Works for Vendors
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
              className="text-center p-6 rounded-lg shadow hover:shadow-lg transition bg-white"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-100 text-orange-600 text-3xl rounded-full"
              >
                {step.icon}
              </motion.div>
              <h3 className="font-semibold text-lg text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
