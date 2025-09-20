import React, { useState } from "react";
import {
  ChevronLeft,
  Image as ImageIcon,
  Drumstick,
  Leaf,
  Sparkles,
  Apple,
} from "lucide-react";

export default function AddNewItem() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    details: "",
    pickup: false,
    delivery: false,
  });
  const [errors, setErrors] = useState({});

  const ingredients = [
    { id: 1, label: "Salt", icon: Sparkles },
    { id: 2, label: "Chicken", icon: Drumstick },
    { id: 3, label: "Onion", icon: Apple },
    { id: 4, label: "Garlic", icon: Apple },
    { id: 5, label: "Spice", icon: Sparkles },
    { id: 6, label: "Veg", icon: Leaf },
    { id: 7, label: "Ginger", icon: Apple },
    { id: 8, label: "Blueberry", icon: Apple },
    { id: 9, label: "Broccoli", icon: Leaf },
  ];

  const toggleIngredient = (id) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Item name is required.";
    if (!formData.price.trim()) newErrors.price = "Price is required.";
    if (!formData.details.trim()) newErrors.details = "Details cannot be empty.";
    if (!formData.pickup && !formData.delivery)
      newErrors.delivery = "Select at least one option (Pickup/Delivery).";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("✅ Form submitted!");
    }
  };

  const visibleIngredients = showAll ? ingredients : ingredients.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white  rounded-xl sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-base font-semibold text-gray-900">Add New Items</h1>
        </div>
        <button className="text-sm font-medium text-orange-500">RESET</button>
      </header>

      {/* Form Content */}
      <div className="flex-1 px-4 py-4 space-y-6">
        {/* Item Name */}
        <div>
          <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">
            Item Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter item name"
            className={`w-full p-3 border rounded-lg text-sm text-gray-800 ${
              errors.name ? "border-red-400" : "border-gray-200"
            }`}
          />
          <p className="text-xs text-gray-400 mt-1">
            Give your dish a short, clear name.
          </p>
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Upload Section */}
        <div>
          <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">
            Upload Photo / Video
          </label>
          <div className="flex gap-3">
            <div className="w-20 h-20 rounded-lg bg-gray-300 flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-gray-600" />
            </div>
            <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-xs text-gray-400">
              +
            </div>
            <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-xs text-gray-400">
              +
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Upload at least one clear photo of your dish.
          </p>
        </div>

        {/* Price + Delivery */}
        <div className="flex items-center gap-6">
          <div className="flex-1 max-w-[160px]">
            <input
              type="number"
              value={formData.price}
              onChange={(e) => handleChange("price", e.target.value)}
              placeholder="Price"
              className={`w-full p-3 border rounded-lg text-sm text-gray-800 ${
                errors.price ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.price && (
              <p className="text-xs text-red-500 mt-1">{errors.price}</p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={formData.pickup}
                onChange={(e) => handleChange("pickup", e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-orange-500"
              />
              Pickup
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={formData.delivery}
                onChange={(e) => handleChange("delivery", e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-orange-500"
              />
              Delivery
            </label>
          </div>
        </div>

        {/* Ingredients Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase text-gray-700">
              Ingredients
            </span>
            <button
              className="text-xs text-orange-500"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "See Less" : "See All"}
            </button>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {visibleIngredients.map((ing) => {
              const Icon = ing.icon;
              const selected = selectedIngredients.includes(ing.id);
              return (
                <button
                  key={ing.id}
                  onClick={() => toggleIngredient(ing.id)}
                  className={`flex flex-col items-center justify-center w-16 h-16 rounded-full border text-[10px] gap-1 ${
                    selected
                      ? "bg-orange-100 border-orange-500 text-orange-500"
                      : "bg-white border-gray-200 text-gray-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {ing.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Details */}
        <div>
          <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">
            Details
          </label>
          <textarea
            value={formData.details}
            onChange={(e) => handleChange("details", e.target.value)}
            placeholder="Write a description..."
            className={`w-full min-h-[80px] p-3 border rounded-lg text-sm text-gray-800 ${
              errors.details ? "border-red-400" : "border-gray-200"
            }`}
          />
          <p className="text-xs text-gray-400 mt-1">
            Describe your dish, ingredients, or special notes.
          </p>
          {errors.details && (
            <p className="text-xs text-red-500 mt-1">{errors.details}</p>
          )}
        </div>
      </div>

        {/* CTA */}
        <div className=" bottom-0 left-0 right-0  border-t px-4 pb-[calc(env(safe-area-inset-bottom,16px)+72px)] pt-4">
        <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 text-white text-base font-semibold py-3 rounded-lg"
        >
            SAVE CHANGES
        </button>
        </div>

    </div>
  );
}
