import "./NavBar.css";
import { Link } from "react-router-dom";
import logo2 from "../images/BU_logo.png";
import logo1 from "../images/DST_logo.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  return (
    <div className="parent">
      {/* top-heading */}
      <div className="top-heading">
        <div className="logo-1">
          <img src={logo1} alt="BU_logo"></img>
        </div>
        <div className="bu_name">
          <div>BUNDELKHAND</div>
          <div>UNIVERSITY</div>
            
        </div>
        <div className="logo-2">
          <img src={logo2} alt="BU_logo"></img>
        </div>
      </div>
      {/* bu-tec */}
      <div className="bu-tec">
        <div className="bu-tec-1">TECHNOLOGY ENABLING CENTER</div>
        <div className="bu-tec-1">INNOVATION CENTER</div>
      </div>
      {/* navbar */}
      <div className="outer-navbar">
        <div className="social-handles">
          <div className="social-handle">
            <a href="https://www.instagram.com/buiians/">
              <FontAwesomeIcon
                icon={faInstagram}
                beat
                size="xl"
                style={{ color: "#a82929" }}
              />
            </a>
          </div>

          <div className="social-handle">
            <a href="https://www.facebook.com/busocial/">
              {" "}
              <FontAwesomeIcon
                icon={faFacebook}
                beat
                size="xl"
                style={{ color: "#2953a8" }}
              />
            </a>
          </div>
          <div className="social-handle">
            <a href="https://www.linkedin.com/school/bundelkhand-university/?originalSubdomain=in">
              <FontAwesomeIcon
                icon={faLinkedin}
                beat
                size="xl"
                style={{ color: "#0047c2" }}
              />
            </a>
          </div>
          <div className="social-handle">
            <a href="https://twitter.com/bu_jhansi?lang=en">
              <FontAwesomeIcon
                icon={faTwitter}
                beat
                size="xl"
                style={{ color: "#2953a8" }}
              />
            </a>
          </div>
          <div className="social-handle">
            <a href="https://www.youtube.com/channel/UCTL-YWI3GojQogY-YH4qQng">
              <FontAwesomeIcon
                icon={faYoutube}
                beat
                size="xl"
                style={{ color: "#a82929" }}
              />
            </a>
          </div>
        </div>
        <div className="inner-navbar">
          <ul className="navbar-items">
            <Link to="/">
              <l1 className="navbar-item" style={{ marginLeft: "2rem" }}>
                Home
              </l1>
            </Link>
            <Link to="/about">
              <l1 className="navbar-item">About</l1>
            </Link>
            <l1 className="navbar-item">Network</l1>
            <l1 className="navbar-item">Events</l1>
            <l1 className="navbar-item">Services</l1>
            <l1 className="navbar-item">Achievements</l1>
            <l1 className="navbar-item">Contacts</l1>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
