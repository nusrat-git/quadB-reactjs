import React, { useState } from "react";
import { Link } from "react-router-dom";

const navs = ["Home", "Jobs", "Contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="bg-gray-200 border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-400">
              Movie Senpai
            </span>
          </Link>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              toggle ? "block" : "hidden"
            } md:block  w-full md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex items-center gap-1 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {navs.map((nv, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-400 rounded md:bg-transparent md:text-blue-400 md:p-0 "
                    aria-current="page"
                  >
                    {nv}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
