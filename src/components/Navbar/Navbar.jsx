import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link, NavLink } from "react-router-dom";

import { CgProfile } from "react-icons/cg";

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Trending Products",
//     link: "/TrendingProducts",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/BestSelling",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/TopRated",
//   },
// ];
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Products",
    link: "/Products",
  },
  {
    id: 3,
    name: "About",
    link: "/About",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/Blogs",
  },
];
const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links Section */}
          <div className="flex  items-center gap-4">
            <NavLink
              to="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Mashle
            </NavLink>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4 ">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <NavLink
                      to={data.link}
                      className="inline-block px-4 font-semibold  text-gray-500  hover:text-black
                    dark:hover:text-white
                    duration-200"
                    >
                      {data.name}
                    </NavLink>
                  </li>
                ))}

                {/* Drop down  menu for mobile devices*/}
                {/* <li className="relative cursor-pointer group"> */}
                {/* <NavLink
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 
                    hover:text-black
                    dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group:hover:rotate-100 duration-300" />
                    </span>
                  </NavLink> */}
                {/* Dropdown Links */}
                {/* <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <NavLink
                            className="text-gray-500 hover:text-black 
                           dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                {/* </li> */}
              </ul>
            </div>
          </div>
          {/* Navbar Right Section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar Section */}
            <div className=" relative group hidden md:block ">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch
                className="text-xl 
              group-hover:text-primary text-gray-600 dark:text-gray-400   duration-200 
              absolute top-1/2  -translate-y-1/2 right-3"
              />
            </div>

            {/* Order-button section */}

            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className=" bg-red-500  w-4 h-4  text-white rounded-full absolute  top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>

            {/* dark mode Section */}

            <div>
              <DarkMode />
            </div>

            {/* login icon */}
            <button>
              <Link to="/login">
                <CgProfile className="text-gray-600 dark:text-white flex justify-center items-center relative text-2xl cursor-pointer" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
