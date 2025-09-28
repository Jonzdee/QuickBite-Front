import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewCard = ({ date, title, rating, description, avatarUrl }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
      {/* Top section */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <img
            src={avatarUrl}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover bg-gray-300"
          />
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <button className="text-gray-400 text-lg">⋯</button>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>

      {/* Stars */}
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <FaStar key={i} className="text-red-500 mr-1" />
          ) : (
            <FaRegStar key={i} className="text-red-500 mr-1" />
          )
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default ReviewCard