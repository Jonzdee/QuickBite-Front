import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AllowLocation({ className, ...props }) {
  const [address, setAddress] = useState("Your location");
  const [locationRetrieved, setLocationRetrieved] = useState(false);
  const [loading, setLoading] = useState(false);

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

          console.log("Nominatim Response:", data);

          const { road, city, state } = data.address || {};
          const display = [road, city, state].filter(Boolean).join(", ");

          setAddress(display || "Location found");
          setLocationRetrieved(true);
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
    <div className="flex min-h-screen items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card
          className={cn(
            "w-full max-w-sm overflow-hidden md:max-w-full border-none relative",
            className
          )}
          {...props}
        >
          <CardContent className="grid p-0">
            <motion.div
              className="p-6 flex flex-col gap-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Floating placeholder */}
              <motion.div
                className="absolute top-6 inset-x-0 flex justify-center z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-white px-4 py-2 rounded-full flex items-center gap-2">
                  {/* Location Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-5 h-5 ${
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
                  <span className="text-gray-600 text-sm">{address}</span>
                </div>
              </motion.div>

              {/* Illustration */}
              <div className="flex-1 flex items-center justify-center pt-20">
                <img
                  src="https://i.pinimg.com/1200x/88/fd/ec/88fdec28e166d79bd5bfd7b7d319c888.jpg"
                  alt="Map Illustration"
                  className="max-w-md h-64 object-contain opacity-90 rounded-xl "
                />
              </div>

              {/* Text */}
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold">Allow your location</h2>
                <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
                  We’ll use your location to show nearby restaurants and deliver faster.
                </p>
              </div>

              {/* Buttons */}
              <div className=" grid grid-cols-1 gap-5 mt-4  sm:grid-cols-2 w-full">
                <Button
                  onClick={getLocation}
                  disabled={loading}
                  className={cn(
                    "w-full bg-orange-500 hover:bg-amber-700",
                    loading && "bg-orange-300 cursor-not-allowed"
                  )}
                >
                  {loading ? "Locating..." : "Access Location"}
                </Button>

                <Link to="/landingpage">
                <Button
                  disabled={!locationRetrieved}
                  className={cn(
                    "w-full",
                    locationRetrieved
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  )}
                >
                  Next
                </Button></Link>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default AllowLocation;
