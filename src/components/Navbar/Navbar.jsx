import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/IMDB_Logo_2016.svg.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovie } from "../../Redux/Searchslice";

export default function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // [MOD 1] Added state to handle mobile menu toggle
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value); // [MOD 2] Updated to log current input value instead of previous state
  };

  const handleSearch = () => {
    dispatch(getMovie(searchText));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // [MOD 3] Added search trigger on "Enter" key press
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // [MOD 4] Toggle function to handle mobile menu
  };

  return (
    <>
      <nav className="bg-black border-gray-200 dark:bg-gray-900 p-2 border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              className="max-h-[3.5rem] rounded-[10px]"
              alt="Logo"
            />
          </Link>

          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            {/* Search input for desktop */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                value={searchText}
                onChange={handleSearchInputChange}
                onKeyDown={handleKeyDown} // [MOD 5] Added onKeyDown handler for "Enter" key press search
                id="search-navbar-desktop" // [MOD 6] Updated unique ID for desktop search input
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Search..."
              />
            </div>

            {/* Toggle button for mobile menu */}
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              onClick={toggleMobileMenu} // [MOD 7] Added onClick handler to toggle mobile menu
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded={isMobileMenuOpen} // [MOD 8] Dynamically set aria-expanded based on state
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Main menu and search for mobile */}
          <div
            className={`items-center justify-between ${
              isMobileMenuOpen ? "block" : "hidden" // [MOD 9] Show/hide mobile menu based on state
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar-mobile"
                value={searchText} // [MOD 10] Added value binding to mobile search input
                onChange={handleSearchInputChange} // [MOD 10] Handle input change for mobile search
                onKeyDown={handleKeyDown} // [MOD 10] Handle Enter key press for mobile search
                className="block w-full p-2 ps-10 text-gray-200 border text-2xl border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Search..."
              />
            </div>

            {/* Navigation links */}
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li key="popular">
                {" "}
                {/* [MOD 11] Added key for list item */}
                <NavLink
                  to={"popular"}
                  className={({ isActive }) =>
                    `block py-2 px-3 text-2xl rounded md:bg-transparent md:p-0 ${
                      isActive
                        ? "text-red-500"
                        : "text-white hover:text-red-500"
                    }`
                  }
                >
                  Popular
                </NavLink>
              </li>
              <li key="toprated">
                {" "}
                {/* [MOD 11] Added key for list item */}
                <NavLink
                  to={"toprated"}
                  className={({ isActive }) =>
                    `block py-2 px-3 text-2xl rounded md:bg-transparent md:p-0 ${
                      isActive
                        ? "text-red-500"
                        : "text-white hover:text-red-500"
                    }`
                  }
                >
                  TopRated
                </NavLink>
              </li>
              <li key="upcoming">
                {" "}
                {/* [MOD 11] Added key for list item */}
                <NavLink
                  to={"upcoming"}
                  className={({ isActive }) =>
                    `block py-2 px-3 text-2xl rounded md:bg-transparent md:p-0 ${
                      isActive
                        ? "text-red-500"
                        : "text-white hover:text-red-500"
                    }`
                  }
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
