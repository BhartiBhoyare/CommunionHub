import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <motion.div 
      className="mx-auto p-6 text-center"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-3xl md:text-4xl font-extrabold text-[#526039] mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Events
      </motion.h1>
      <div className="mb-4 grid grid-cols-2 gap-2 my-8 md:flex justify-center items-center">
        {["All", "Religion", "Social", "Charity"].map((category) => (
          <motion.button
            key={category}
            whileTap={{ scale: 0.9 }}
            className={`px-4 py-2 mx-2 cursor-pointer rounded-lg transition-all duration-300 ${
              selectedCategory === category ? "bg-[#526039] text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.3 }}
      >
        {filteredEvents.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <EventCard event={event} setchange={setchange} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ExploreEvents;