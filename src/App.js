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
import TecTeam from "./components/OurLeaders";
import OurLeaders from "./components/OurLeaders";
import CoreCommitte from "./components/CoreCommitte";
import Pag from "./components/Pag";
import Staff from "./components/Staff";
import Partners from "./components/Partners";
import Event from "./components/event";
import Service from "./components/service";
import Gallery from "./components/gallery";
import Tec from "./components/Tec";
import SanctionedProjects from "./components/SanctionedProjects";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" element={<About />} />  */}
        
        <Route path="/our-leaders" element={<OurLeaders />} /> 
        <Route path="/our-committe" element={<CoreCommitte />} /> 
        <Route path="/pag" element={<Pag />} />
        <Route path="/staff" element={<Staff />} /> 
        <Route path="/our-partners" element={<Partners />} /> 
        <Route path="/events" element={<Event />} /> 
        <Route path="/service" element={<Service />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/all-tec" element={<Tec />} />
        <Route path="/sanctioned-projects" element={<SanctionedProjects />} />  
        </Routes>

        {/* <Achievements /> */}
      </Router>
    </>
  );
}
export default App;
