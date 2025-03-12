import React, { useEffect, useState } from "react";
import AddEvent from "./AddEvent";
import ExploreEvents from "./ExploreEvents";
import { Route, Routes } from "react-router-dom";

const Events = () => {

  const addEvent = (newEvent) => {
    
    const events = JSON.parse(window.localStorage.getItem("events"));
    window.localStorage.setItem("events", JSON.stringify([...events, newEvent]));
  };
  return (
    <Routes>
      <Route path="/exploreevents" element={<ExploreEvents />} />
      <Route path="/addevents" element={<AddEvent addEvent={addEvent} />} />
    </Routes>
  );
};

export default Events;
