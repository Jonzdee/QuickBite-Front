import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

import Tantalizer from "@/assets/vendorslogo/Tantalizers.png";
import JustFood from "@/assets/vendorslogo/Just Food.png";
import Alade from "@/assets/vendorslogo/alade.png";
import Kitchentago from "@/assets/vendorslogo/kitchentago.png";

const logos = [
  { id: 1, src: Tantalizer, name: "Tantalizers" },
  { id: 2, src: JustFood, name: "Just Food" },
  { id: 3, src: Alade, name: "Kitchen Tago" },
  { id: 4, src: Kitchentago, name: "Alad Scents" },
  { id: 5, src: Kitchentago, name: "Guineafo" },
  { id: 6, src: JustFood, name: "Just Food" },
];

export default function LogoCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto shadow-md py-6 px-4">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Explore Our Partners
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          Discover amazing brands and services
        </p>
      </div>
      <Carousel
        opts={{ align: "start", loop: true }}
        setApi={(api) => {
          api?.on("select", () => setCurrent(api.selectedScrollSnap()));
        }}
      >
        <CarouselContent>
          {logos.map((logo) => (
            <CarouselItem
              key={logo.id}
              className="basis-1/4 sm:basis-1/5 md:basis-1/6 flex justify-center px-2"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-md">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base mt-2 text-center leading-tight max-w-20 truncate">
                  {logo.name}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

       
      </Carousel>
    </div>
  );
}
