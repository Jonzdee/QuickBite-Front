import React, { useState, useEffect } from "react";
import { ChevronLeft, MoreHorizontal, Star } from "lucide-react";

export default function MyFoodList() {
  const categories = ["All", "Breakfast", "Lunch", "Dinner"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleFoods, setVisibleFoods] = useState([]);
  const [page, setPage] = useState(1);

  // Mock dataset (imagine fetched from API)
  const foods = Array.from({ length: 50 }, (_, i) => {
    const category = ["Breakfast", "Lunch", "Dinner"][i % 3];
    return {
      id: i + 1,
      name: ["Chicken Rice", "Pancakes", "Grilled Salmon"][i % 3],
      category,
      rating: (4.2 + Math.random() * 0.6).toFixed(1),
      price: `$${8 + (i % 10)}`,
      pickup: i % 2 === 0 ? "Pick Up" : "Delivery",
    };
  });

  const filteredFoods =
    activeCategory === "All"
      ? foods
      : foods.filter((f) => f.category === activeCategory);

  // Load foods in chunks (infinite scroll simulation)
  useEffect(() => {
    const chunk = filteredFoods.slice(0, page * 10);
    setVisibleFoods(chunk);
  }, [page, activeCategory]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center px-4 py-3 bg-white rounded-t-sm shadow-sm sticky top-0 z-10">
        <button className="mr-3">
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold">My Food List</h1>
      </header>

      {/* Category Tabs */}
      <div className="flex gap-6 px-4 py-3 overflow-x-auto border-b  rounded-b-sm bg-white sticky top-[56px] z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`pb-2 text-sm font-medium ${
              activeCategory === cat
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActiveCategory(cat);
              setPage(1);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food List */}
      <div className="flex-1 px-4 py-3">
        {visibleFoods.map((food) => (
          <div
            key={food.id}
            className="flex items-center justify-between py-3 border-b"
          >
            {/* Left Thumbnail */}
            <div className="w-16 h-16 rounded-lg bg-gray-200 mr-4 flex-shrink-0"></div>

            {/* Middle Info */}
            <div className="flex-1">
              <h2 className="text-base font-semibold text-gray-900">
                {food.name}
              </h2>
              <span className="inline-block text-xs text-orange-500 bg-orange-100 px-2 py-0.5 rounded-full mb-1">
                {food.category}
              </span>
              <div className="flex items-center text-xs text-gray-500">
                <Star className="w-3 h-3 text-orange-500 mr-1" />
                {food.rating}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-end ml-3">
              <button className="mb-1">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
              <span className="text-sm font-semibold text-gray-900">
                {food.price}
              </span>
              <span className="text-xs text-gray-500">{food.pickup}</span>
            </div>
          </div>
        ))}

        {/* Loader */}
        {visibleFoods.length < filteredFoods.length && (
          <div className="flex justify-center py-4">
            <span className="text-gray-500 text-sm">Loading more...</span>
          </div>
        )}
      </div>
    </div>
  );
}
