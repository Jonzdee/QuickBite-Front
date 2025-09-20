import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function AllowLocation() {
  const [address, setAddress] = useState("Your location");
  const [locationRetrieved, setLocationRetrieved] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load stored location from localStorage on mount
  useEffect(() => {
    const storedAddress = localStorage.getItem("userAddress");
    if (storedAddress) {
      setAddress(storedAddress);
      setLocationRetrieved(true);
    }
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setAddress("Fetching location...");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const { road, state, country } = data.address || {};
          const display = [road, state, country].filter(Boolean).join(", ");

          const finalAddress = display || "Location found";
          setAddress(finalAddress);
          setLocationRetrieved(true);

          // Persist in localStorage
          localStorage.setItem("userAddress", finalAddress);
        } catch (err) {
          console.error("Error fetching address:", err);
          setAddress("Unable to retrieve location");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error.message);
        setAddress("Unable to retrieve location");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50 lg:bg-white">
      {/* Mobile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-sm overflow-hidden border-none relative bg-white rounded-xl shadow-lg lg:hidden"
      >
        <div className="grid p-0">
          <div className="p-6 flex flex-col gap-6">
            {/* Floating placeholder */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-6 inset-x-0 flex justify-center z-10"
            >
              <div className="bg-white shadow-lg px-4 py-2 rounded-full flex items-center gap-2 max-w-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-5 h-5 shrink-0 ${
                    loading ? "animate-spin text-gray-400" : "text-blue-500"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11.25c1.242 0 2.25-1.008 2.25-2.25S13.242 6.75 12 6.75 9.75 7.758 9.75 9s1.008 2.25 2.25 2.25z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21c4.97-5.25 7.5-9 7.5-12a7.5 7.5 0 10-15 0c0 3 2.53 6.75 7.5 12z"
                  />
                </svg>
                <span className="text-gray-600 text-sm truncate">{address}</span>
              </div>
            </motion.div>

            {/* Illustration */}
            <div className="flex-1 flex bg-white/70 items-center justify-center pt-20">
              <img
                src="https://images.template.net/80453/Free-Food-Delivery-Illustration--JPG--1.jpg"
                alt="Delivery Rider Illustration"
                className="max-w-md h-64 object-contain rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Allow your location</h2>
              <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto">
                We’ll use your location to show nearby restaurants and deliver faster.
              </p>
            </div>

            {/* Buttons */}
            <div className="w-full space-y-3 mt-4">
              <button
                onClick={getLocation}
                disabled={loading}
                className={`w-full py-3 rounded-xl font-semibold text-white ${
                  loading
                    ? "bg-orange-300 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-amber-700"
                }`}
              >
                {loading ? "Locating..." : "Access Location"}
              </button>

              <button
                disabled={!locationRetrieved}
                className={`w-full py-3 rounded-xl font-semibold ${
                  locationRetrieved
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Desktop View */}
    <div className="hidden lg:flex w-full max-w-6xl items-center justify-between px-12 relative">
        {/* Left Content */}
        <div className="max-w-lg space-y-6">
          {/* Location badge */}
          <div className="bg-white shadow-lg px-4 py-2 rounded-full inline-flex items-center gap-2 max-w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-5 h-5 shrink-0 ${
                loading ? "animate-spin text-gray-400" : "text-blue-500"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.25c1.242 0 2.25-1.008 2.25-2.25S13.242 6.75 12 6.75 9.75 7.758 9.75 9s1.008 2.25 2.25 2.25z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21c4.97-5.25 7.5-9 7.5-12a7.5 7.5 0 10-15 0c0 3 2.53 6.75 7.5 12z"
              />
            </svg>
            <span className="text-gray-600 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {address}
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight mt-4">
            <span className="text-orange-500">Quick</span> <br />
            delivery at <br />
            your doorstep
          </h1>
          <p className="text-gray-600 text-lg">
            Enable your location so we can show nearby restaurants, cafes,
            medicine, food & groceries and deliver to you faster.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={getLocation}
              disabled={loading}
              className="group relative inline-block overflow-hidden border border-orange-400 px-6 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
            >
              <span
                className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-600 scale-x-0 transition-transform duration-300 origin-left ${
                  loading ? "scale-x-100" : "group-hover:scale-x-100"
                }`}
              ></span>
              <span
                className={`relative font-semibold transition-colors duration-300 ${
                  loading ? "text-white" : "text-orange-500 group-hover:text-white"
                }`}
              >
                {loading ? "Locating..." : "Access Location"}
              </span>
            </button>

            <button
              disabled={!locationRetrieved}
              className={`px-6 py-3 rounded-xl font-semibold ${
                locationRetrieved
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>

          {/* Categories */}
          <div className="flex gap-6 pt-6">
            <div className="bg-white rounded-xl p-4 flex flex-col items-center w-28">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                alt="Fast Food"
                className="w-10 h-10"
              />
            </div>
            <div className="bg-white rounded-xl p-4 flex flex-col items-center w-28">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9425/9425742.png"
                alt="Medicine"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="bg-white/70 rounded-3xl p-4">
            <img
              src="https://images.template.net/80453/Free-Food-Delivery-Illustration--JPG--1.jpg"
              alt="Delivery Rider"
              className="w-[28rem] h-[28rem] object-contain"
            />
          </div>

          {/* Floating pizza icon */}
          <div className="absolute top-12 -left-10 bg-white p-2 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2276/2276941.png"
              alt="Pizza"
              className="w-10 h-10"
            />
          </div>

          {/* Floating review 1 */}
          <div className="absolute top-6 right-0 bg-white/90 shadow-lg rounded-xl p-3 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">John Smith</p>
              <p className="text-xs text-gray-500">Fast delivery</p>
              <div className="flex text-yellow-400 text-xs">★★★★★</div>
            </div>
          </div>

          {/* Floating review 2 */}
          <div className="absolute bottom-10 -left-16 bg-white/90 shadow-lg rounded-xl p-3 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">Jane Foster</p>
              <p className="text-xs text-gray-500">Super fast delivery</p>
              <div className="flex text-yellow-400 text-xs">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowLocation;
