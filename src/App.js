// import Router from "router";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Achievements from "./components/Achievments";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Grid from "./components/grid";
import Home from "./components/home";
import VCMessage from "./components/message";
import Event from "./components/event";
import Service from "./components/service";
import Gallery from "./components/gallery";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/events" element={<Event />} /> 
        <Route path="/service" element={<Service />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        </Routes>

        {/* <Achievements /> */}
      </Router>
    </>
  );
}
export default App;
