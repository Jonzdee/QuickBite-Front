import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaLeaf, FaShieldAlt, FaStar } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex px-5 py-20 items-center justify-between flex-col md:flex-row">
        
       
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left mb-10 md:mb-0 md:w-1/2"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Fresh Meals, <span className="text-orange-500">Delivered Fast</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Order from your favorite local restaurants and get hot meals delivered in minutes.
          </p>

     
          <div className="grid grid-cols-2 gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <FaTruck className="text-orange-500 text-2xl" />
              <span className="text-gray-700 font-medium">Fast Delivery</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <FaLeaf className="text-green-500 text-2xl" />
              <span className="text-gray-700 font-medium">Fresh Ingredients</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <FaShieldAlt className="text-blue-500 text-2xl" />
              <span className="text-gray-700 font-medium">Secure Payment</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <FaStar className="text-yellow-400 text-2xl" />
              <span className="text-gray-700 font-medium">4.9/5 Rating</span>
            </motion.div>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 w-full"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="food delivery"
            className="rounded-2xl shadow-lg "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
