import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import HeartButton from "@/components/landingComponents/HeartButton";
import { restaurants } from "@/utils/data"; // ✅ use central data

function Featured() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between py-5">
        <h2 className="text-lg font-semibold">All Categories 🛒</h2>
        <Link
          to="/categories"
          className="text-green-950 bg-gray-100 rounded-lg px-4 py-2 hover:bg-gray-200"
        >
          View All
        </Link>
      </div>

      {/* Swiper carousel */}
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
              {/* Image with promo */}
              <div className="relative h-40">
                <Link to={`/product-details/${item.id}`}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                {item.promo && (
                  <div className="absolute bottom-2 left-2 bg-orange-500/80 text-xs font-medium px-2 py-1 rounded-md shadow text-white">
                    {item.promo}
                  </div>
                )}
              </div>

              {/* Info */}
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

export default Featured;
