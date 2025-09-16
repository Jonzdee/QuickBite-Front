
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
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
    img: JustFood,
    promo: "Up to 40% & Free Delivery!!",
    deliveryFee: "Free",
    eta: "44 - 54 min",
    rating: 4.2,
    reviews: 6635,
  },
  {
    id: 2,
    name: "Papa's Grill",
    img: Kitchen,
    promo: "₦500 off orders above ₦3,000",
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
  {
    id: 3,
    name: "Papa's Grill",
    img: Alade,
    promo: "₦500 off orders above ₦3,000",
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
  {
    id: 4,
    name: "Papa's Grill",
    img: JustFood,
    promo: "₦500 off orders above ₦3,000",
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
];

 function Featured() {
   return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-lg font-semibold mb-3">Featured ✨</h2>
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
              {/* Image Section */}
              <div className="relative h-40">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.promo && (
                  <div className="absolute bottom-2 left-2 bg-orange-500/75 text-xs font-medium px-2 py-1 rounded-md shadow">
                    {item.promo}
                  </div>
                )}
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
export default Featured