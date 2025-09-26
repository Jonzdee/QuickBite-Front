import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaStar, FaShoppingCart, FaSearch, FaShareAlt } from "react-icons/fa";
import { restaurants } from "@/utils/data";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = restaurants.find((item) => item.id === parseInt(id));

  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!product) {
    return <div className="p-6 text-center">Product not found</div>;
  }

  // Add to cart
  const addToCart = (food) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === food.id);
      if (exists) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...food, qty: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (foodId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === foodId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Cart total
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.qty * parseInt(item.price.replace(/\D/g, "")),
    0
  );

 // Share function
const handleShare = async () => {
  const url = window.location.href;
  const title = product.name;

  if (navigator.share) {
    try {
      await navigator.share({
        title: title,
        text: `Check out ${title} on our app!`,
        url: url,
      });
    } catch (err) {
      console.log("Share canceled", err);
    }
  } else {
    // Fallback if Web Share API not supported
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
};


  // Filter menu items
  const filteredMenu = product.menu.map((category) => ({
    ...category,
    items: category.items.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Navbar */}
      <div className="flex items-center justify-between mb-6">
        <Link to="/landingpage" className="text-sm text-blue-500">
          ← Back
        </Link>

        <h1 className="font-bold text-lg">{product.name}</h1>

        <div className="flex items-center gap-4">
          {/* Search */}
          <button onClick={() => setShowSearch((prev) => !prev)}>
            <FaSearch className="text-gray-700" size={18} />
          </button>

          {/* Share */}
          <button onClick={handleShare}>
            <FaShareAlt className="text-gray-700" size={18} />
          </button>

          {/* Cart */}
          <button onClick={() => navigate("/cart")} className="relative">
            <FaShoppingCart className="text-gray-700" size={18} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
        </div>
      )}

      {/* Share copied message */}
      {copied && (
        <div className="mb-4 text-green-600 text-sm">Link copied!</div>
      )}

      {/* Restaurant Info */}
      <div className="grid gap-6 md:grid-cols-2">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-md"
        />

        <div className="flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-bold">{product.name}</h2>
          {product.promo && (
            <p className="text-gray-600 mt-2">{product.promo}</p>
          )}

          <div className="flex items-center gap-2 mt-3">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-gray-500 text-sm">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Delivery: {product.deliveryFee} • {product.eta}
          </p>
        </div>
      </div>

      {/* Menu */}
      <div className="mt-10 mb-28">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Menu</h2>

        {filteredMenu && filteredMenu.length > 0 ? (
          filteredMenu.map((category, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-base sm:text-lg font-bold mb-3">
                {category.category}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.length > 0 ? (
                  category.items.map((food) => {
                    const cartItem = cart.find((item) => item.id === food.id);
                    return (
                      <div
                        key={food.id}
                        className="bg-white rounded-xl shadow-sm p-3 flex gap-3 hover:shadow-md transition"
                      >
                        <img
                          src={food.img}
                          alt={food.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                        />
                        <div className="flex flex-col justify-between flex-1">
                          <div>
                            <h4 className="font-medium text-sm sm:text-base">
                              {food.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                              {food.description}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <p className="text-orange-500 font-semibold text-sm">
                              {food.price}
                            </p>
                            {cartItem ? (
                              <div className="flex items-center gap-2">
                                <button
                                  className="px-2 py-1 bg-gray-200 rounded-lg text-sm"
                                  onClick={() => removeFromCart(food.id)}
                                >
                                  −
                                </button>
                                <span className="text-sm">{cartItem.qty}</span>
                                <button
                                  className="px-2 py-1 bg-orange-500 text-white rounded-lg text-sm"
                                  onClick={() => addToCart(food)}
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <button
                                className="text-xs sm:text-sm bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600"
                                onClick={() => addToCart(food)}
                              >
                                Add
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-gray-400 text-sm">
                    No items found in this category.
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">
            No menu available for this restaurant.
          </p>
        )}
      </div>

      {/* Floating Cart */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[400px] bg-white shadow-xl rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="font-semibold text-sm sm:text-base">
              {cart.length} item(s) in cart
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Total: ₦{cartTotal.toLocaleString()}
            </p>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-orange-500 text-white text-sm sm:text-base px-4 py-2 rounded-xl hover:bg-orange-600"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
