import React from "react";
import { FaStar } from "react-icons/fa";
import JustFood from "@/assets/vendorslogo/Just Food.png";
import Kitchen from "@/assets/vendorslogo/kitchentago.png";
import Alade from "@/assets/vendorslogo/alade.png";
import HeartButton from "@/components/landingComponents/HeartButton";

const items = [
  {
    id: 1,
    name: "IvoryBites Restaurant and Bakery",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npEyQ9ErnFtFkIt9VI6loWFYiT6Fq7s5b14K9bX57Q_ng-WOxRQWNuWbZGoJIWkw37iEYV9XsLsVTSBvsjM5Q_OuWovdDMqeGM3G0n0kV79PT277jka-fsxnPUItGMRYNzSk8P2lw=s680-w680-h510-rw",
    promo: "Up to 40% & Free Delivery!!",
    deliveryFee: "Free",
    eta: "44 - 54 min",
    rating: 4.2,
    reviews: 6635,
  },
  {
    id: 2,
    name: "Jopa Foodie (Mayfair Ife)",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npGbNBysF7yu_sp4H61ZYQIC2GqNjkvKatIBVz3xTDt-nYbr5jsSGcqZXEcFJQA4437SOxQ92WBv9w1t_J77wqnEb5UeoTf1LQQ6L_STPGQT4lFnAsHnvKZLMU93li7OPTS0J5I=s680-w680-h510-rw",
    promo: "₦500 off orders above ₦3,000",
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
  {
    id: 3,
    name: "O'Super Foodstuffs Enterprise",
    img: "https://lh3.googleusercontent.com/p/AF1QipPRtjPckDHHjGdeO5zUJV1UraKtDyaB8_Oul8of=s680-w680-h510-rw",
    promo: "₦500 off orders above ₦3,000",
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
  {
    id: 4,
    name: "Aveera treat",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrA6O-7-D2xy6ahWdyHiLzk2c-dpoK4JMCx1EISHbYvhFTmlWx8_SlnerR1M4X5VC7-AeQtC8-EccYkEWEJWga1bvNFDgqWd3B1kShPmbtzyECZ3Y5SMqk0xFasjXqau0Te7rE=s680-w680-h510-rw",
    promo: "₦500 off orders above ₦3,000",
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
  {
    id: 5,
    name: "Indeego Restaurant & Lounge, Ife",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noMpO_cwCJqwcYleDzdU9RWOudNZfInhJogLVCovinzGvqnUI6iRd4n-KXOHjqmu2-GBEtmipZfQl-a4xfLqYTkszqEwMyuVMsZWrspGBs-uHL2y1e3RuMWHhBIZMGajJN6dgYSeeCDFPhU=s680-w680-h510-rw",
    promo: "₦500 off orders above ₦3,000",
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
  {
    id: 6,
    name: "Soul Food Restaurant",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nps9mgLzP0Aa5-I2YJDsosuCm1XpRxmFAHL6mN4v68cqwq5ZOEo4Sb58LExHagp0V3GU3_p_4vvIRswVOrOKhZeUrJh2tuHPJR4IO6a_ikXqjwt-eMf24uP76hlt9t_CrExIdXFzQ=s680-w680-h510-rw",
    promo: "₦500 off orders above ₦3,000",
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
  {
    id: 7,
    name: "Cactus Restaurant",
    img: "https://lh3.googleusercontent.com/p/AF1QipMqH8gG9-6_Ad5WsvRL4nbYJlWNv8YsxNoiuilt=s680-w680-h510-rw",
    promo: "₦500 off orders above ₦3,000",
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
  {
    id: 8,
    name: "Sagamu Food Place (SFP Culinary School)",
    img: "https://lh3.googleusercontent.com/p/AF1QipPOc4b-hhL8v_oT6_QpRdxavmLDlrQ0VhB1xfJe=s680-w680-h510-rw",
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
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
      
            <div className="relative h-40">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
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
export default Featured;
