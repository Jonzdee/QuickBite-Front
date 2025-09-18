import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaTruck, FaBullhorn, FaCreditCard, FaChartLine } from "react-icons/fa";

function VendorBenefits() {
  const benefits = [
    {
      icon: <FaUsers />,
      title: "Reach More Customers",
      desc: "Expand your reach and get discovered by thousands of hungry customers every day.",
      color: "text-blue-500 bg-blue-100",
    },
    {
      icon: <FaTruck />,
      title: "Free Delivery Support",
      desc: "QuickBite handles reliable deliveries so you can focus on cooking and serving.",
      color: "text-orange-500 bg-orange-100",
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing & Promotions",
      desc: "Get featured in promotions, discounts, and campaigns that drive more sales.",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: <FaCreditCard />,
      title: "Secure & Fast Payouts",
      desc: "Enjoy quick and safe payouts directly to your account with no delays.",
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: <FaChartLine />,
      title: "Vendor Dashboard & Insights",
      desc: "Track orders, earnings, and performance with real-time analytics tools.",
      color: "text-pink-600 bg-pink-100",
    },
  ];

  return (
    <section className="bg-white text-gray-800 body-font">
      <div className="container px-5 py-20 mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Join <span className="text-orange-500">QuickBite?</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-white text-center flex flex-col items-center"
            >
              <div
                className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full text-2xl ${benefit.color}`}
              >
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VendorBenefits;
