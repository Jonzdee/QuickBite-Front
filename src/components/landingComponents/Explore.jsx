import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import { restaurants } from "@/utils/data"; 

export default function LogoCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto shadow-md py-6 px-4">
     
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
          {restaurants.map((partner) => (
            <CarouselItem
              key={partner.id}
              className="basis-1/4 sm:basis-1/5 md:basis-1/6 flex justify-center px-2"
            >
              <div className="flex flex-col items-center">
                {/* Partner Logo */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-md">
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Partner Name */}
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base mt-2 text-center leading-tight max-w-20 truncate">
                  {partner.name}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
