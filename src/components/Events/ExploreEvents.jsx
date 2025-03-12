import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const ExploreEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [change, setchange] = useState(true);

  const [events, setevents] = useState([]);

  useEffect(() => {
    setevents(JSON.parse(window.localStorage.getItem("events")));
  }, [change]);

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);
  console.log(typeof events);

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-extrabold text-[#526039] mb-6">
        Upcoming Events
      </h1>
      <div className="mb-4 grid grid-cols-2 gap-2 my-8 md:flex justify-center items-center">
        <button
          className={`px-4 py-2 mx-2 cursor-pointer rounded-lg ${
            selectedCategory === "All"
              ? "bg-[#526039] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 mx-2 cursor-pointer rounded-lg ${
            selectedCategory === "Religion"
              ? "bg-[#526039] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("Religion")}
        >
          Religion
        </button>
        <button
          className={`px-4 py-2 mx-2 cursor-pointer rounded-lg ${
            selectedCategory === "Social"
              ? "bg-[#526039] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("Social")}
        >
          Social
        </button>
        <button
          className={`px-4 py-2 mx-2 cursor-pointer rounded-lg ${
            selectedCategory === "Charity"
              ? "bg-[#526039] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("Charity")}
        >
          Charity
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} setchange={setchange} />
        ))}
      </div>
    </div>
  );
};

export default ExploreEvents;
