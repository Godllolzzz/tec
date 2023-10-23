import { Link } from "react-router-dom";
import "./NavBar.css";
import logo2 from "../images/BU_logo.png";
import logo1 from "../images/DST_logo.png";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// import { useState } from "react";

function NavBar() {
  const [isTeamTecVisible, setIsTeamTecVisible] = useState(false);
  const [isNetworkVisible, setIsNetworkVisible] = useState(false);

  const tec_on_click_handler = () => {
    setIsTeamTecVisible((prevState) => !prevState);
    setIsNetworkVisible(false);
  };
  const network_on_click_handler = () => {
    setIsNetworkVisible((prevState) => !prevState);
    setIsTeamTecVisible(false);
  };

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
            <Link to="/">
              <l1 className="navbar-item" style={{ marginLeft: "2rem" }}>
                Home
              </l1>
            </Link>
            <Link to="/about">
              <l1 className="navbar-item">About</l1>
            </Link>

            <l1 className="navbar-item" onClick={tec_on_click_handler}>
              TEC Team
              <ul
                class="dropdown"
                style={{ display: `${isTeamTecVisible ? "block" : "none"}` }}
              >
                <li className="dropdown-item">
                  <Link to="/our-leaders">Our Leaders</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/our-committe">Our Committe</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/pag">PAG</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/staff">Staff</Link>
                </li>
                <li className="dropdown-item">
                  <a href="#">Students Team</a>
                </li>
              </ul>
            </l1>

            <l1 className="navbar-item" onClick={network_on_click_handler}>
              Network
              <ul
                class="dropdown"
                style={{ display: `${isNetworkVisible ? "block" : "none"}` }}
              >
                <li className="dropdown-item">
                  <Link to="/our-partners">Our Partners</Link>
                </li>
                <li className="dropdown-item">Research Persons</li>
                <li className="dropdown-item">All DST</li>
              </ul>
            </l1>
            {/* <l1 className="navbar-item">Events</l1> */}
            {/* <l1 className="navbar-item">Services</l1> */}
            <l1 className="navbar-item">
              Achievements
              <ul class="dropdown">
                <li className="dropdown-item">
                  <a href="#">Sanctioned Projects</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Patents</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Publications</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">News Letter</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">MoU's</a>
                </li>
              </ul>
            </l1>
            {/* <l1 className="navbar-item">Contacts</l1> */}
            {/* <l1 className="navbar-item">TEC Team</l1> */}
            {/* <l1 className="navbar-item">Network</l1> */}
            <Link to="/events">
              <l1 className="navbar-item">Events</l1>
            </Link>
            <Link to="/service">
              <l1 className="navbar-item">Services</l1>
            </Link>
            {/* <l1 className="navbar-item">Achievements</l1> */}
            <Link to="/gallery">
              <l1 className="navbar-item">Contacts</l1>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
