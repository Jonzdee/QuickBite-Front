import React from "react";
import { Link } from "react-router-dom"; // or "next/link" if using Next.js
import QuickBiteLogo from "@/assets/Images/QuickBiteLogo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 body-font">
      <div className="container px-5 py-16 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-72 flex-shrink-0 mx-auto md:mx-0 text-center md:text-left">
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start text-white mb-4"
          >
            <img
              alt="QuickBiteLogo"
              src={QuickBiteLogo}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
            <span className="ml-3 text-xl font-semibold">QuickBite</span>
          </Link>
          <p className="mt-2 text-sm text-gray-400">
            Fast, fresh, and flavorful — delivered straight to your door.
            QuickBite connects you with your favorite meals anytime, anywhere.
          </p>
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
          </div>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 mt-10 md:mt-0 text-center md:text-left">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-semibold text-white text-sm mb-3">
              POPULAR CUISINES
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cuisine/pizza" className="hover:text-orange-400">
                  Pizza
                </Link>
              </li>
              <li>
                <Link to="/cuisine/burgers" className="hover:text-orange-400">
                  Burgers
                </Link>
              </li>
              <li>
                <Link to="/cuisine/sushi" className="hover:text-orange-400">
                  Sushi
                </Link>
              </li>
              <li>
                <Link to="/cuisine/african" className="hover:text-orange-400">
                  African Dishes
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-semibold text-white text-sm mb-3">
              QUICK LINKS
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/home" className="hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-orange-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-orange-400">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-semibold text-white text-sm mb-3">
              CUSTOMER SUPPORT
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="hover:text-orange-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="hover:text-orange-400">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-orange-400">
                  Return & Refund
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-orange-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-orange-400">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/vendors" className="hover:text-orange-400">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link to="/riders" className="hover:text-orange-400">
                  Become a Rider
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-semibold text-white text-sm mb-3">
              DOWNLOAD OUR APP
            </h2>
            <div className="flex flex-col space-y-3 items-center md:items-start">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                  alt="Google Play"
                  className="h-12 "
                />
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4 mt-10">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} QuickBite — Fresh Meals, Faster Delivery
        </p>
      </div>
    </footer>
  );
}

export default Footer;
