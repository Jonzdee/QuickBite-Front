import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import QuickBiteLogo from "@/assets/Images/QuickBiteLogo.png"
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Customers', href: '#', current: false },
  { name: 'Vendors', href: '#', current: false },
  { name: 'Riders', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-transparent py-4 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px "
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="sm:hidden mr-2 group relative inline-flex items-center justify-center rounded-md p-2 text-orange-400 hover:bg-orange-200 hover:text-white ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="hidden sm:flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  alt="QuickBiteLogo"
                  src={QuickBiteLogo}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-orange-400 text-white' : 'text-gray-950 hover:bg-orange-400 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to="/cart">
              <button
                type="button"
                className=" relative rounded-full p-1 text-orange-400 cursor-pointer"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View cart</span>
                <ShoppingCartIcon aria-hidden="true" className="size-6" />
              </button>
            </Link>
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex cursor-pointer rounded-full">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open menu</span>
                <h1 className="outline-none">More</h1>
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 origin-top-right rounded-md outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <Link
                    to="#"
                    className="bg-white hover:outline rounded-full w-30 block px-4 py-2 mb-3 text-sm text-gray-950"
                  >
                    Contact Us
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="#"
                    className="bg-white hover:outline rounded-full w-20 block px-4 py-2 mb-3 text-sm text-gray-950"
                  >
                    Faqs
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="#"
                    className="bg-white hover:outline rounded-full w-20 block px-4 py-2 text-sm text-gray-950"
                  >
                    Blog
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-orange-400 text-white  hover:bg-orange-300' : 'text-gray-950 hover:bg-orange-300 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
