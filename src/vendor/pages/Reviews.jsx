import React from "react";
import { motion } from "framer-motion";
import ReviewCard from "../component/ReviewCard";


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
    <div className="bg-white min-h-screen w-full max-w-8xl p-6 sm:p-8 lg:p-10">
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