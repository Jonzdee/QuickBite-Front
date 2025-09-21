import React from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Plate from "@/assets/vendorslogo/plate.png";

function VendorLogin() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-6 overflow-hidden">
      
      
      <motion.img
        src={Plate}
        alt="Plate"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
        transition={{
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-[28rem] drop-shadow-2xl pointer-events-none select-none hidden md:block"
      />

      <div className="relative z-10 w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center"
        >
          QuickBite
        </motion.h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          Sign in to manage your restaurant on{" "}
          <span className="text-orange-500 font-semibold">QuickBite</span>
        </p>

        <form className="mt-8 space-y-6">
         
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

         
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600"
          >
            Login
          </motion.button>

          
          <div className="flex justify-between items-center text-sm mt-4">
            <Link to="/forgot-password" className="text-orange-500 hover:underline">
              Forgot Password?
            </Link>
            <Link to="/vendor-signup" className="text-gray-600 hover:underline">
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default VendorLogin;
