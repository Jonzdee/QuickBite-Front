import React from "react";
import { FaStar } from "react-icons/fa";
import HeartButton from "@/components/landingComponents/HeartButton";
import { Link } from "react-router-dom";
import { restaurants } from "@/utils/data";

function Product() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {restaurants.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="relative h-40">
              <Link to={`/product-details/${item.id}`}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </Link>
              {item.promo && (
                <div className="absolute bottom-2 left-2 bg-orange-500/75 text-white text-xs font-medium px-2 py-1 rounded-md shadow">
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
        ))}
      </div>
    </div>
  );
}
export default Product;
