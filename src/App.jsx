import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import AddEvent from "./components/Events/AddEvent.jsx";
import Events from "./components/Events/Events.jsx";
import Footer from "./components/pages/Footer.jsx";

function App() {
  if(!window.localStorage.getItem("events"))
  {
    window.localStorage.setItem("events", JSON.stringify([
      {
        image: "/charity.jpg",
        title: "Charity Fundraiser",
        date: "March 20, 2025",
        location: "New York, NY",
        description: "A fundraising event to support local charities.",
        category: "Charity",
      },
      {
        image: "/religious.jpg",
        title: "Interfaith Dialogue",
        date: "April 10, 2025",
        location: "Los Angeles, CA",
        description:
          "A discussion panel to promote unity among different faiths.",
        category: "Religion",
      },
      {
        image: "/social.jpg",
        title: "Social Communion Event",
        date: "May 15, 2025",
        location: "Chicago, IL",
        description:
          "An inclusive gathering to celebrate unity, culture, and community engagement.",
        category: "Social",
      },
    ]));
  }
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/events/*" element={<Events/>} />
      <Route path="/addevents" element={<AddEvent />} />
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App;