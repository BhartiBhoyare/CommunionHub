import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Animation } from "@hemant0621/animation";

const Footer = () => {
  return (
    <footer className="text-[#ffff] bg-[#526039] p-4 md:p-12 mt-auto">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
        <div ref={Animation("left", "10px", 100)} className="space-y-6">
          <h2 className="flex text-3xl font-extrabold text-[#e3edbe] mb-3">
            CommunionHub
          </h2>
          <p className="text-base mb-4">
            Connecting people of all faiths through events and community
            support.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/">
              <FaInstagram className="bg-[#70805a] size-7 rounded-full hover:bg-pink-400 cursor-pointer p-1" />
            </a>
            <a href="https://www.facebook.com/">
              <CiFacebook className="bg-[#70805a] size-7 rounded-full hover:bg-blue-600 cursor-pointer p-1" />
            </a>
            <a href="https://www.youtube.com/">
              <FiYoutube className="bg-[#70805a] size-7 rounded-full hover:bg-red-500 cursor-pointer p-1" />
            </a>
            <a href="https://x.com/">
              <CiTwitter className="bg-[#70805a] size-7 rounded-full hover:bg-blue-500 cursor-pointer p-1" />
            </a>
          </div>
        </div>

        <div ref={Animation("left", "20px", 100)} className="flex flex-col justify-center space-y-4 mb-4">
          <p className="font-extrabold">Company</p>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/events/exploreevents" className="hover:text-gray-300">
            Events
          </Link>
        </div>

        <div ref={Animation("left", "30px", 100)} className="flex flex-col space-y-4 justify-center mb-4">
          <p className="font-extrabold">Contact</p>
          <a href="" className="hover:text-gray-300">
            communion@gmail.com
          </a>
        </div>
      </div>
      <div className="h-0.5 w-full bg-[#6a7856]"></div>
      <div ref={Animation("bottom", "10px", 100)} className="text-sm mt-6 text-[#e7f5d3]">
        &copy; {new Date().getFullYear()} CommunionHub. All Rights Reserved to
        CommunionHub.
      </div>
    </footer>
  );
};

export default Footer;
