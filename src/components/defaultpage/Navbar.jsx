import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuickBiteLogo from "@/assets/Images/QuickBiteLogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font shadow-md sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
       
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <img
            src={QuickBiteLogo}
            alt="QuickBite Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="ml-3 text-2xl font-bold text-orange-600">
            QuickBite
          </span>
        </Link>

       
        <button
          className="md:hidden inline-flex items-center text-gray-600 hover:text-orange-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-8 h-8"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        
        <nav className="hidden md:flex md:items-center md:space-x-8 text-base">
          <Link to="/home" className="hover:text-orange-600 font-medium">
            Company
          </Link>
          <Link to="/vendors" className="hover:text-orange-600 font-medium">
            Vendors
          </Link>
          <Link to="/riders" className="hover:text-orange-600 font-medium">
            Riders
          </Link>
          <Link
            to="/landingpage"
            className="inline-flex items-center bg-orange-500 text-white py-2 px-5 hover:bg-orange-600 rounded-full text-base font-medium transition-all"
          >
            Order Now
          </Link>
        </nav>
      </div>

      {/* for mobile res */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link to="/home" className="hover:text-orange-600">
              Company
            </Link>
            <Link to="/vendors" className="hover:text-orange-600">
              Vendors
            </Link>
            <Link to="/riders" className="hover:text-orange-600">
              Riders
            </Link>
            <Link
              to="/landingpage"
              className="w-full bg-orange-500 text-white py-2 rounded-full font-medium hover:bg-orange-600 text-center"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
