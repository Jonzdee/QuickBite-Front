import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import QuickBiteLogo from "@/assets/Images/QuickBiteLogo.png";
import { Link } from "react-router-dom";
import LocationInput from "@/components/landingComponents/LocationInput"; 

export default function Navbar() {
  return (
    <nav className="relative bg-transparent py-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
         
<div className="hidden sm:flex items-center">
  <Link to="/" className="flex items-center">
    <img
      alt="QuickBiteLogo"
      src={QuickBiteLogo}
      className="h-12 sm:h-14 md:h-16 w-auto object-contain"
    />
  </Link>
</div>


          {/* Location Input */}
          <div className="flex items-center flex-1 justify-center">
            <LocationInput />
          </div>

          {/* Cart + More menu */}
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <button
                type="button"
                className="relative rounded-full p-1 text-orange-400 cursor-pointer"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View cart</span>
                <ShoppingCartIcon aria-hidden="true" className="size-6" />
              </button>
            </Link>

            <Menu as="div" className="relative">
              <MenuButton className="relative flex cursor-pointer rounded-full">
                <span className="sr-only">Open menu</span>
                <h1 className="outline-none">More</h1>
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none"
              >
                <MenuItem>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-950 hover:bg-orange-100"
                  >
                    Contact Us
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-950 hover:bg-orange-100"
                  >
                    Faqs
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-950 hover:bg-orange-100"
                  >
                    Blog
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
