import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "@/assets/Images/bannertwo.png";
import { Link } from "react-router-dom";

export default function AppMockup() {
  return (
    <section className="bg-gray-50 py-24"> 
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
       
        <div className="flex justify-center">
          <img
            src={Banner}
            alt="QuickBite App"
            className="max-h-[700px] w-full object-contain drop-shadow-xl" 
          />
        </div>

        
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Order food anytime, anywhere 🍔
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore restaurants, place orders in seconds, and track your
            delivery live with <span className="font-semibold">QuickBite</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="https://play.google.com"
              target="_blank"
              className="flex items-center bg-black text-white px-6 py-4 rounded-xl shadow-lg hover:opacity-90 transition"
            >
              <FaGooglePlay className="text-3xl mr-3" />
              <span>
                <small className="block text-xs">Get it on</small>
                <span className="text-base font-semibold">Google Play</span>
              </span>
            </Link>

            <Link
              to="https://apps.apple.com"
              target="_blank"
              className="flex items-center bg-black text-white px-6 py-4 rounded-xl shadow-lg hover:opacity-90 transition"
            >
              <FaApple className="text-3xl mr-3" />
              <span>
                <small className="block text-xs">Download on</small>
                <span className="text-base font-semibold">App Store</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
