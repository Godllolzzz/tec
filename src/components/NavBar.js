import "./NavBar.css";
import logo2 from "../images/BU_logo.png";
import logo1 from "../images/DST_logo.png";
import Navigation from "./Navigation";

// import { useState } from "react";

function NavBar() {
  return (
    <div className="parent">
      {/* top-heading */}
      <div className="top-heading">
        <div className="bu_name">
          <div id="bu_name_first">BUNDELKHAND</div>
          <div id="bu_name_second">UNIVERSITY,</div>
          <div id="bu_name_third">JHANSI</div>
        </div>
        <div className="bu_details">
          A++ NAAC Accredited | NIRF ranked, ISO certified |
          UGC-12(b) 2(f) category State University of U.P. | AISHE Code: U-0502
        </div>
      </div>
      {/* bu-tec */}
      <div className="bu-tec">
        <div className="bu-tec-1">
          <div className="logo1">
            <img src={logo1} alt="tec_logo"></img>
          </div>
          <div className="bu-tec-1-details">TECHNOLOGY ENABLING CENTRE</div>
        </div>
        <div className="bu-tec-2">
          <div className="logo2">
            <img src={logo2} alt="tec_logo"></img>
          </div>
          <div className="bu-tec-2-details">INNOVATION CENTRE</div>
        </div>
      </div>
      <div className="navbar-bottom-strip">
        <div>Only Government University in Uttar Pradesh having TEC</div>
        <div>The State-of-Art Research facility of Bundelkhand University</div>
      </div>
      {/* navbar */}
      <Navigation />
    </div>
  );
}

export default NavBar;
