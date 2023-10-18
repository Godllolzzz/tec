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

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/our-leaders" element={<OurLeaders />} /> 
        <Route path="/our-committe" element={<CoreCommitte />} /> 
        <Route path="/pag" element={<Pag />} />
        <Route path="/staff" element={<Staff />} /> 
        <Route path="/our-partners" element={<Partners />} /> 
        </Routes>

        {/* <Achievements /> */}
      </Router>
    </>
  );
}
export default App;
