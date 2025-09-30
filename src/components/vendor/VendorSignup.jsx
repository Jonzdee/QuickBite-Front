import React , { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, User, Phone } from "lucide-react";
import { Link, useNavigate} from "react-router-dom";
import Plate from "@/assets/vendorslogo/plate.png";
import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL; 
function VendorSignup() {
   const navigate = useNavigate();
const [countryCode, setCountryCode] = useState("+234");

     const [formData, setFormData] = useState({
       name: "",
       email: "",
       phoneNumber: "",
       password: "",
       confirmPassword: "",
       businessType: "",
     });
   
     const handleChange = (e) => {
       setFormData({
         ...formData,
         [e.target.name]: e.target.value,
       });
     };
     const handleSubmit = async (e) => {
       e.preventDefault();
   
      
       if (formData.password !== formData.confirmPassword) {
         alert("Passwords do not match!");
         return;
       }
   
       try {
         const response = await axios.post(`${API_URL}/vendors/signup`, {
           name: formData.name,
           email: formData.email,
           phoneNumber: formData.phoneNumber,
           password: formData.password,
           businessType: formData.businessType,
           confirmPassword:formData.confirmPassword
         });
   
         console.log("Signup success:", response.data);
      
         navigate("/vendor-otp", { state: { phoneNumber: formData.phoneNumber } });
       } catch (error) {
         console.error("Signup error:", error.response?.data || error.message);
         alert("Signup failed: " + (error.response?.data?.message || error.message));
       }
     };
   
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-6 overflow-hidden">
      
     
      <motion.img
        src={Plate}
        alt="Plate"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
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
          Create your vendor account on{" "}
          <span className="text-orange-500 font-semibold">QuickBite</span>
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              name="name"
              type="text"
              placeholder="Restaurant / Vendor Name"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="businessType"
               placeholder="Business Type"
                onChange={handleChange} 
                required
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
             
            />
          </div>

          <div className="relative flex items-center border rounded-xl focus-within:ring-2 focus-within:ring-orange-400 overflow-hidden">
           <select
          className="pl-3 pr-2 py-3 bg-gray-50 text-gray-700 text-sm focus:outline-none border-r"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)} 
        >
          <option value="+234">🇳🇬 +234</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+91">🇮🇳 +91</option>
          <option value="+254">🇰🇪 +254</option>
        </select>
            <div className="relative flex-1">
              <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                className="w-full pl-10 pr-4 py-3 focus:outline-none"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="confirmPassword" 
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

        
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600"
          >
            Sign Up
          </motion.button>

          
          <div className="flex justify-center text-sm mt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/vendor-login"
                className="text-orange-500 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default VendorSignup;
