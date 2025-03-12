import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";

function EventCard({ event, setchange }) {
  function Delete(title) {
    let events = JSON.parse(window.localStorage.getItem("events"));
    events = events.filter((event) => event.title !== title);
    window.localStorage.setItem("events", JSON.stringify(events));
    setchange((change) => !change);
  }

  return (
    <div className="bg-white shadow-md rounded-xl">
      <img
        className="w-full h-52 rounded-t-xl object-cover"
        src={event.image}
        alt=""
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <p className="flex items-center mt-2 justify-center gap-2 text-gray-600 text-sm">
          <MdOutlineDateRange />
          {event.date}
        </p>
        <p className="flex items-center mt-2 justify-center gap-2 text-gray-600 text-sm">
          <CiLocationOn />
          {event.location}
        </p>
        <p className="text-sm mt-2">Category: {event.category}</p>
        <p className="text-sm mt-2">{event.description}</p>
        <button
          className="bg-[#526039] text-white px-4 py-1 rounded-2xl mt-4 cursor-pointer hover:bg-[#5c6b42]"
          onClick={() => {
            {
              Delete(event.title);
            }
          }}
        >
          Delete Event
        </button>
      </div>
    </div>
  );
}

export default EventCard;
