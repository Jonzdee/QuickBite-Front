import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex px-5 py-20 items-center justify-between flex-col md:flex-row">
       
        <div className="flex flex-col items-start text-left mb-10 md:mb-0 md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Fresh Meals, <span className="text-orange-500">Delivered Fast</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Order from your favorite local restaurants and get hot meals delivered in minutes.
          </p>

          <div className="flex mt-6 space-x-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-lg shadow-md">
              Order Now
            </button>
           
          </div>
        </div>

        
        <div className="md:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="food delivery"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
