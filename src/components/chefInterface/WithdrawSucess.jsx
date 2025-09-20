import React from "react";
import { motion
    
 } from "framer-motion";

const WithdrawSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
              <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 flex flex-col items-center text-center">
        
        {/* Top Image */}
        <img
          src="https://st2.depositphotos.com/1688079/10950/i/450/depositphotos_109503892-stock-photo-success-validate-icon-orange-square.jpg" // <--  image link
          alt="Success"
          className="w-32 h-32 object-contain"
        />

        {/* Text */}
        <p className="mt-8 text-xl md:text-2xl font-semibold text-gray-800">
          Withdraw Successful
        </p>

        {/* Button */}
        <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition md:text-lg">
          OK
        </button>
      </div>
      </motion.div>
    </div>
  );
};

export default WithdrawSuccess;
