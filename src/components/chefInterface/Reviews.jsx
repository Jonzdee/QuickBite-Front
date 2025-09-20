import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";


const ReviewCard = ({ date, title, rating, description, avatarUrl }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
      {/* Top section */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <img
            src={avatarUrl}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover bg-gray-300"
          />
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <button className="text-gray-400 text-lg">⋯</button>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>

      {/* Stars */}
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <FaStar key={i} className="text-red-500 mr-1" />
          ) : (
            <FaRegStar key={i} className="text-red-500 mr-1" />
          )
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};



const Reviews = () => {
  const reviews = [
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "20/12/2020",
      title: "Great Food and Service",
      rating: 3,
      description:
        "This Food so tasty & delicious. Breakfast so fast Delivered in my place. Chef is very friendly. I’m really like chef for Home Food Order. Thanks.",
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "20/12/2020",
      title: "Awesome and Nice",
      rating: 4,
      description:
        "This Food so tasty & delicious. Breakfast so fast Delivered in my place.",
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "20/12/2020",
      title: "Awesome and Nice",
      rating: 4,
      description: "This Food so tasty & delicious.",
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "20/12/2020",
      title: "Awesome and Nice",
      rating: 4,
      description:
        "This Food so tasty & delicious. Breakfast so fast Delivered in my place.",
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "20/12/2020",
      title: "Awesome and Nice",
      rating: 4,
      description:
        "This Food so tasty & delicious. Breakfast so fast Delivered in my place.",
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full max-w-6xl mx-auto p-6 sm:p-8 lg:p-10">
               <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
      </div>

      {/* Review Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      </motion.div>
    </div>
  );
};


export default Reviews;
