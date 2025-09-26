import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import HeartButton from "@/components/landingComponents/HeartButton";
import { restaurants } from "@/utils/data"; 

function HandPick() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between py-5">
        <h2 className="text-lg font-semibold">Open Restaurants 💚</h2>
        <Link
          to="/restaurants"
          className="text-green-950 bg-gray-100 rounded-lg px-4 py-2 hover:bg-gray-200"
        >
          View All
        </Link>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {restaurants.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Restaurant Image */}
              <div className="relative h-40">
                <Link to={`/product-details/${item.id}`}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>

              {/* Details */}
              <div className="p-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-sm line-clamp-1">
                    {item.name}
                  </h3>
                  <HeartButton />
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  {item.deliveryFee} • {item.eta}
                </p>

                <div className="flex items-center gap-1 text-sm mt-2">
                  <FaStar className="text-yellow-500" />
                  <span className="font-medium">{item.rating}</span>
                  <span className="text-gray-500">({item.reviews})</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HandPick;
