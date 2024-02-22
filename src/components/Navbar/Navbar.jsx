import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link:"/#"
  },
  {
    id: 2,
    name: "Top Rated",
    link:"/#servises",
  },
  {
    id: 3,
    name: "Kids Wear",
    link:"/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#"
  }
]

const DropDownLinks = [
  {
    id:1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id:2,
    name: "Best Selling",
    link : "/#",
  },
  {
    id:3,
    name: "Top Rated",
    link : "/#"
  }
]

export const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2 sm:py-0">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="uppercase font-bold text-2xl  flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              yourname
            </a>
          </div>
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className=" relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary
                dark:last:only:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 dark:text-white" />
            </div>
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-300">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer animate-pulse hover:animate-none" />
            </button>
            {/* Darkmode */}
            <div>
              <DarkMode />
            </div>
          </div>
          {/* order button */}
        </div>
      </div>
      {/* lower Navbar  */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-3">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-3 py-1 hover:text-primary transition-all duration-300 shadow-primary"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* simple dropdown and link */}
          <li className="relative group cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending
              <span className="group">
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[99999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropDownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 truncate"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
