// import Router from "router";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";

import Home from "./components/home";

import OurLeaders from "./components/OurLeaders";
import CoreCommitte from "./components/CoreCommitte";
import Pag from "./components/Pag";
import Staff from "./components/Staff";
import Partners from "./components/Partners";
import Events from "./components/events";
import Service from "./components/service";
import Gallery from "./components/gallery";
import Tec from "./components/Tec";
import SanctionedProjects from "./components/SanctionedProjects";
import ContactUs from "./components/contactus";
import ResourcePersons from "./components/ResourcePersons";
import Patents2 from "./components/Patents2";
import AboutInnovationCentre from "./components/About/about-innovation";
import ToTPlan from "./components/totplan";
import TrainingPlan from "./components/training_plan";
import MoU from "./components/MoU";
import ScrollToTop from "./components/ScrollToTop";
import StudentsTeam from "./components/StudentsTeam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import NewsLetter from "./components/NewsLetter";
import Compliment from "./components/Compliment";
import Key_Indicator from "./components/Keyindicators";
import Msme from "./components/Msme";
import TechnicalServices from "./components/TechnicalServices";
import DevelopersTeam from "./components/DevelopersTeam";
import Startup from "./components/Startup";
import MediaCoverage from "./components/MediaCoverage";
import WhitePaper from "./components/WhitePaper";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/our-leaders" element={<OurLeaders />} />
          <Route path="/core-committee" element={<CoreCommitte />} />
          <Route path="/pag" element={<Pag />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/our-partners" element={<Partners />} />
          <Route path="/events" element={<Events />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/all-tec" element={<Tec />} />
          <Route path="/sanctioned-projects" element={<SanctionedProjects />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Resource-persons" element={<ResourcePersons />} />
          <Route path="/patents" element={<Patents2 />} />
          <Route path="/white-paper" element={<WhitePaper />} />
          <Route path="/Mou" element={<MoU />} />
          <Route
            path="/about-innovation-centre"
            element={<AboutInnovationCentre />}
          />
          <Route path="/tot-plan" element={<ToTPlan />} />
          <Route path="/training-plan" element={<TrainingPlan />} />
          <Route path="/students-team" element={<StudentsTeam />} />
          <Route path="/news-letter" element={<NewsLetter />} />
          <Route path="/compliment-corner" element={<Compliment />} />
          <Route path="/key-indicator" element={<Key_Indicator />} />
          <Route path="/msme" element={<Msme />} />
          <Route path="/technical-services" element={<TechnicalServices />} />
          <Route path="/developers-team" element={<DevelopersTeam />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/mediaCoverage" element={<MediaCoverage />} />
        </Routes>

        {/* <Achievements /> */}
      </Router>
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/9511015157"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} style={{ color: "white" }} />
      </a>
      <ScrollToTop />
    </div>
  );
}
export default App;
