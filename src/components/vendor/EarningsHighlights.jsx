import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Vendors", value: 5000 },
  { name: "Orders", value: 50000 },
  { name: "Satisfaction", value: 95 },
];

function EarningsHighlights() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center"
        >
          Vendors earn up to <span className="text-orange-500">₦500,000/month</span> on QuickBite
        </motion.h2>

      
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div className="grid grid-cols-3 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-orange-500">5k+</h3>
              <p className="text-sm text-gray-600">Active Vendors</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-orange-500">50k+</h3>
              <p className="text-sm text-gray-600">Daily Orders</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-orange-500">95%</h3>
              <p className="text-sm text-gray-600">Customer Satisfaction</p>
            </motion.div>
          </div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-64"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#f97316" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EarningsHighlights;
