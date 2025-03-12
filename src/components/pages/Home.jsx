import React from "react";
import { Link } from "react-router-dom";
import BannerImage from '../../assets/communion-banner.jpg'

const Home = () => (
  <div className="relative h-screen flex flex-col justify-center items-center bg-cover">
    <div>
      <img className="h-screen w-screen object-cover"
        src={BannerImage}
        alt=""
      />
    </div>
    <div className="absolute opacity-40 bg-[#526039] h-screen object-cover w-full"></div>
    <div className="absolute bg-gradient-to-br from-[#526039] via-[#] to-[#e3edbe] m-4 bg-opacity-60 px-6 py-8 lg:p-14 rounded-lg shadow-lg max-w-3xl text-white text-center">
      <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold mb-2">
        Welcome to{" "}
        <span className="text-[#e3edbe] font-extrabold">CommunionHub</span>
      </h1>
      <p className=" text-base md:text-base lg:text-lg mb-6">
        Connecting people of all faiths through events and community support.
      </p>
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4">
        Connecting People Across Faiths & Interests
      </h2>
      <p className="lg:text-lg mb-6 max-w-md mx-auto">
        Join events that inspire, connect, and support communities worldwide.
      </p>
      <Link
        to="/events/exploreevents"
        className="bg-white text-[#526039] px-6 py-1 lg:px-8 lg:py-3 rounded-md text-base lg:text-lg font-semibold shadow-md hover:bg-[#ecf4cb] transition"
      >
        Upcoming Events
      </Link>
    </div>
  </div>
);

export default Home;
