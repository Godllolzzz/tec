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

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        </Routes>

        {/* <Achievements /> */}
      </Router>
    </>
  );
}
export default App;
