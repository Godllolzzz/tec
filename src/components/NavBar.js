import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo1 from "../images/DST_logo.png";
import logo2 from "../images/BU_logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="parent">
      {/* top-heading */}
      <div className="top-heading">
        <div className="logo-1">
          <img src={logo1} alt="BU_logo" />
        </div>
        <div className="bu_name">
          <div>BUNDELKHAND</div>
          <div>UNIVERSITY</div>
        </div>
        <div className="logo-2">
          <img src={logo2} alt="BU_logo" />
        </div>
      </div>
      {/* bu-tec */}
      <div className="bu-tec">
        <div className="bu-tec-1">TECHNOLOGY ENABLING CENTRE</div>
        <div className="bu-tec-1">INNOVATION CENTRE</div>
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
            <a href="https://www.youtube.com/channel/UCTL-YWI3GojQogY-H4qQng">
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
            <li className="navbar-item" style={{ marginLeft: "2rem" }}>
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about">About</Link>
            </li>
            <li className="navbar-item">
              TEC Team
              <ul className="dropdown">
                <li className="dropdown-item">
                  <Link to="/our-leaders">Our Leaders</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/our-committee">Our Committee</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/pag">PAG</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/staff">Staff</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#">Students Team</Link>
                </li>
              </ul>
            </li>
            <li className="navbar-item">
              Network
              <ul className="dropdown">
                <li className="dropdown-item">
                  <Link to="/our-partners">Our Partners</Link>
                </li>
                <li className="dropdown-item">Research Persons</li>
                <li className="dropdown-item">All DST</li>
              </ul>
            </li>
            <li className="navbar-item"> <Link to="/events">Events</Link></li>
            <li className="navbar-item"> <Link to="/service">Service</Link></li>
            <li className="navbar-item">
              Achievements
              <ul className="dropdown">
                <li className="dropdown-item">
                  <Link to="#">Sanctioned Projects</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#">Patents</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#">Publications</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#">News Letter</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#">MoU's</Link>
                </li>
              </ul>
            </li>
            <li className="navbar-item"> <Link to="/gallery">Contacts</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
