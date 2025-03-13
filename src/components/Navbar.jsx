import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.jpg";
import { FaChevronDown, FaAngleRight } from "react-icons/fa";
import { Animation } from "@hemant0621/animation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      {/* Laptop Navbar */}

      <nav className="hidden md:flex px-8 py-2 text-[#526039] justify-between items-center">
        <div ref={Animation("left", "20px", 100)} className="flex items-center">
          <img
            src={logo}
            alt="CommunionHub Logo"
            className="lg:h-12 h-8 mr-2 rounded-full"
          />
          <h1
            className="md:text-xl lg:text-2xl font-extrabold text-[#526039]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            CommunionHub
          </h1>
        </div>
        <div className="flex">
          <Link
            onClick={() => setDropdownOpen(false)}
            className="px-3 font-bold hover:underline"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setDropdownOpen(false)}
            className="px-3 font-bold hover:underline"
            to="/about"
          >
            About
          </Link>
          <ul>
            <li
              onClick={() => {
                setDropdownOpen(true);
                setDropdownOpen(!dropdownOpen);
              }}
            >
              <button className="flex items-center px-3 font-bold hover:underline cursor-pointer">
                Events <FaChevronDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <ul className="absolute z-50 right-8 mt-1 text-black bg-gray-50 rounded-sm py-2">
                  <li>
                    <Link
                      onClick={() => {
                        setIsOpen(!isOpen);
                        setDropdownOpen(false);
                      }}
                      to="/events/addevents"
                      className="px-2 py-2 text-sm font-bold text-[#526039] hover:underline"
                    >
                      Add Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        setIsOpen(!isOpen);
                        setDropdownOpen(false);
                      }}
                      to="/events/exploreevents"
                      className="px-2 py-2 text-sm font-bold text-[#526039] hover:underline"
                    >
                       Explore Events
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}

      <nav className="flex items-center justify-between py-3 px-4 md:hidden">
        <div ref={Animation("left", "10px", 100)} className="flex items-center">
          <img
            src={logo}
            alt="CommunionHub Logo"
            className="h-8 mr-2 rounded-full"
          />
          <h1
            className="text-xl text-[#526039] font-extrabold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            CommunionHub
          </h1>
        </div>
        <div ref={Animation("right", "10px", 100)} className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden px-6 py-12 w-screen bg-white z-50 absolute right-0`}
      >
        <div className="flex flex-col gap-3 text-[#526039]">
          <Link
            onClick={() => {
              setDropdownOpen(false);
              setIsOpen(!isOpen);
            }}
            className="px-3 font-bold"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setDropdownOpen(false);
              setIsOpen(!isOpen);
            }}
            className="px-3 font-bold "
            to="/about"
          >
            About
          </Link>
          <ul>
            <li
              onClick={() => {
                setDropdownOpen(true);
                setDropdownOpen(!dropdownOpen);
              }}
            >
              <button className="flex items-center px-3 font-bold hover:underline cursor-pointer">
                Events <FaAngleRight className="ml-1" />
              </button>
              {dropdownOpen && (
                <ul
                  className={`${
                    isOpen ? "flex" : "hidden"
                  }py-4 mt-2 absolute left-32 top-[6.5rem]`}
                >
                  <li
                    onClick={() => {
                      setDropdownOpen(false);
                      setIsOpen(!isOpen);
                    }}
                  >
                    <Link
                      to="/events/addevents"
                      className="px-2 text-sm font-bold text-[#526039] hover:underline"
                    >
                      Add Events
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setDropdownOpen(false);
                      setIsOpen(!isOpen);
                    }}
                  >
                    <Link
                      to="/events/exploreevents"
                      className="px-2 text-sm font-bold text-[#526039] hover:underline"
                    >
                       Explore Events
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
