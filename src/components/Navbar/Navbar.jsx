import { useState } from "react";
import { Link } from "react-router-dom";

import { CgProfile, CgSearch, CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track navbar menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-gray-500 fixed top-0 left-0 w-full z-50 ">
        <div className="container mx-auto px-4 py-2  flex justify-between items-center">
          {/* Logo (optional) */}
          <Link to="/" className=" text-xl font-bold">
            MASHLE
          </Link>

          {/* Navigation links (desktop) */}
          <ul className="hidden md:flex space-x-8 ">
            <li>
              <Link
                to="/"
                className="hover:text-orange-700 hover:underline font-bold"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-orange-700 hover:underline font-bold"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-700 hover:underline font-bold"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="hover:text-orange-700 hover:underline font-bold"
              >
                Blogs
              </Link>
            </li>

            {/* Add more links as needed */}
          </ul>
          <div className=" flex justify-end space-x-4 text-2xl">
            <CgSearch className=" cursor-pointer hover:text-orange-700" />

            <AiOutlineHeart className=" cursor-pointer hover:text-orange-700" />

            <span className="cart-icon ">
              <CgShoppingCart className="cursor-pointer hover:text-orange-700" />
            </span>
            <span className="hidden md:block">
              <DarkMode />
            </span>
            <Link to="/login">
              <CgProfile className=" hover:text-orange-700 hidden md:block justify-center items-center relative text-2xl cursor-pointer" />
            </Link>
          </div>

          {/* Hamburger menu (mobile) */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <>
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation menu (toggles on click) */}
        {isOpen && (
          <ul className="md:hidden bg-gray-800 text-white absolute top-full left-0 w-full py-4">
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/signin">
                {" "}
                <CgProfile className="text-white dark:text-gray-400 flex justify-center items-center relative text-2xl cursor-pointer mb-2" />
                Go to login
              </Link>
              <hr className="mt-2" />
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/products">product</Link>
            </li>

            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 flex  gap-4">
              choose a Theme
              <DarkMode />
            </li>

            {/* Add more links as needed */}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
