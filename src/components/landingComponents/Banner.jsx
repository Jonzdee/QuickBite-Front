import React from "react";
import banner from "../../assets/Images/banner.png";

function Banner() {
  return (
    <div className="w-full flex justify-center px-2 sm:px-4">
      <img
        src={banner}
        alt="banner"
        className="w-full max-w-[1200px] h-auto object-cover rounded-lg shadow-md"
      />
    </div>
  );
}

export default Banner;
