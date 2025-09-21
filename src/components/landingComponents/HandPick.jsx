
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import JustFood from "@/assets/vendorslogo/Just Food.png"
import Kitchen from "@/assets/vendorslogo/kitchentago.png"
import Alade from "@/assets/vendorslogo/alade.png"
import HeartButton from "@/components/landingComponents/HeartButton"

const items = [
  {
    id: 1,
    name: "Chicken Republic – Ikorodu",
    img: Kitchen,
    deliveryFee: "Free",
    eta: "44 - 54 min",
    rating: 4.2,
    reviews: 6635,
  },
  {
    id: 2,
    name: "Papa's Grill",
    img: Alade,
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
  {
    id: 3,
    name: "Papa's Grill",
    img: JustFood,
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
  {
    id: 4,
    name: "Papa's Grill",
    img: JustFood,
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
];

 function HandPick() {
   return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between py-5">
              <h2 className="text-lg font-semibold">Open Restaurants 💚</h2>
              <Link className="text-green-950 bg-gray-100 rounded-lg px-4 py-2">
                View All
              </Link>
            </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
             
              <div className="relative h-40">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
               
              </div>

             
              <div className="p-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-sm">{item.name}</h3>
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
export default HandPick