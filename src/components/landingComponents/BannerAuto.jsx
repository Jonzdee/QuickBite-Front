import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bannertwo from "@/assets/Images/bannertwo.png";
import bannerthree from "@/assets/Images/bannerthree.png";
import bannerfour from "@/assets/Images/bannerfour.png";

const banners = [bannerthree,bannertwo, bannerfour ];

function BannerAuto() {
  return (
    <div className="w-full flex justify-center px-2 sm:px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full max-w-6xl mx-auto rounded-lg shadow-md"
      >
        {banners.map((banner, i) => (
          <SwiperSlide key={i}>
            <img
              src={banner}
              alt={`banner-${i}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerAuto;
