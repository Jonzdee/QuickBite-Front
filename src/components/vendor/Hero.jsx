import React from "react";
import { motion } from "framer-motion";
import Vendor from "@/assets/Images/IvoryBites.png"
function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-16 md:py-24">
        
  
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Start Selling with{" "}
            <span className="text-orange-500">QuickBite</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            Join thousands of restaurants and food vendors growing their
            business. QuickBite makes it easy to reach more customers, deliver
            meals fast, and get paid securely.
          </p>

          
          <div className="flex flex-col space-y-4 mt-6 w-full max-w-xs">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/vendor-signup"
              className="px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 text-center"
            >
              Start Selling on QuickBite
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/vendor-login"
              className="px-6 py-3 rounded-xl bg-white text-gray-800 font-medium border shadow text-center hover:bg-gray-100"
            >
              Login
            </motion.a>
          </div>

 
          <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-10 text-center sm:text-left">
            <div>
              <h3 className="text-2xl font-bold text-orange-500">5k+</h3>
              <p className="text-sm text-gray-600">Active Vendors</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-500">50k+</h3>
              <p className="text-sm text-gray-600">Daily Orders</p>
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0 relative"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-200 to-orange-400 rounded-3xl blur-2xl opacity-30"></div>
            <motion.img
              src={Vendor}
              alt="Vendor preparing food"
              className="relative rounded-3xl shadow-xl w-full max-w-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
