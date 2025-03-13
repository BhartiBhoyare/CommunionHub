import React from "react";
import about from "../../assets/about.jpg";
import { Animation } from "@hemant0621/animation";

const About = () => (
  <div className="flex flex-col-reverse lg:flex-row mx-auto p-6 lg:p-8 lg:mt-10 justify-center items-center text-center">
    <div ref={Animation("left", "30px", 100)} className="lg:pr-10">
      <h1 className="text-2xl lg:text-4xl font-extrabold text-[#526039] mb-0 lg:mb-6">
        About CommunionHub
      </h1>
      <div className="lg:p-6 p-2 max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-1 lg:mb-4">
          <span className="font-bold text-[#526039]">CommunionHub</span> is
          more than just a platform—it’s a vibrant community that bridges the
          gap between people of all faiths through engaging events and heartfelt
          connections.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our mission is to cultivate unity, foster understanding, and encourage
          collaboration by offering a dedicated space where individuals can
          discover and create meaningful events.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether it's{" "}
          <span className="font-bold text-[#526039]">
            spiritual gatherings, charity drives, or social meetups
          </span>
          , CommunionHub empowers communities to come together, share
          experiences, and build lasting relationships that transcend
          differences.
        </p>
      </div>
    </div>
    <img ref={Animation("right", "30px", 100)} className="size-40 md:size-60 lg:size-80 mb-4 lg:mb-0" src={about} alt="" />
  </div>
);

export default About;
