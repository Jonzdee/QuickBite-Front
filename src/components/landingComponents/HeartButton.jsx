import {FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import React, { useState } from "react";

function HeartButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked((p) => !p)}
      aria-label={liked ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={liked}
      className="p-2 transition-colors duration-200"
    >
      {liked ? (
        <FaHeart className="w-5 h-5 text-red-500" />
      ) : (
        <FiHeart className="w-5 h-5 text-gray-500" />
      )}
    </button>
  );
}
export default HeartButton;