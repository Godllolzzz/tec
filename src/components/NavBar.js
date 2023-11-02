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
  const [isAchievementsVisible, setIsAchievementsVisible] = useState(false);
  const [isEventVisible, setIsEventVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const tec_on_click_handler = () => {
    setIsTeamTecVisible((prevState) => !prevState);
    setIsNetworkVisible(false);
    setIsAchievementsVisible(false);
    setIsEventVisible(false);
    setIsAboutVisible(false);
  };

  const network_on_click_handler = () => {
    setIsNetworkVisible((prevState) => !prevState);
    setIsTeamTecVisible(false);
    setIsAchievementsVisible(false);
    setIsEventVisible(false);
    setIsAboutVisible(false);
  };

  const achievements_on_click_handler = () => {
    setIsAchievementsVisible((prevState) => !prevState);
    setIsTeamTecVisible(false);
    setIsNetworkVisible(false);
    setIsEventVisible(false);
    setIsAboutVisible(false);
  };
  const event_on_click_handler = () => {
    setIsEventVisible((prevState) => !prevState);
    setIsTeamTecVisible(false);
    setIsNetworkVisible(false);
    setIsAchievementsVisible(false);
    setIsAboutVisible(false);
  };
  const about_on_click_handler = () => {
    setIsAboutVisible((prevState) => !prevState);
    setIsTeamTecVisible(false);
    setIsNetworkVisible(false);
    setIsAchievementsVisible(false);
    setIsEventVisible(false);
  };

  return (
    <div className="parent">
      {/* top-heading */}
      <div className="top-heading">
        <div className="bu_name">
          <div id="bu_name_first">BUNDELKHAND</div>
          <div id="bu_name_second">UNIVERSITY</div>
          <div id="bu_name_third">JHANSI</div>
        </div>
        <div className="bu_details">
          NAAC Accredited | NIRF ranked, ISO certified | (UGC-12(b) | 2(f)
          category State University of U.P. | AISHE Code: U-0502)
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
      {/* navbar */}
      <div className="outer-navbar">
        <div className="social-handles">
          <div className="social-handle">
            <a href="https://www.instagram.com/buiians/">
              <FontAwesomeIcon
                icon={faInstagram}
                beat
                size="l"
                style={{ color: "#a82929" }}
              />
            </a>
          </div>
          <div className="social-handle">
            <a href="https://www.facebook.com/busocial/">
              <FontAwesomeIcon
                icon={faFacebook}
                beat
                size="l"
                style={{ color: "#2953a8" }}
              />
            </a>
          </div>
          <div className="social-handle">
            <a href="https://www.linkedin.com/school/bundelkhand-university/?originalSubdomain=in">
              <FontAwesomeIcon
                icon={faLinkedin}
                beat
                size="l"
                style={{ color: "#0047c2" }}
              />
            </a>
          </div>
          <div className="social-handle">
            <a href="https://twitter.com/bu_jhansi?lang=en">
              <FontAwesomeIcon
                icon={faTwitter}
                beat
                size="l"
                style={{ color: "#2953a8" }}
              />
            </a>
          </div>
          <div className="social-handle">
            <a href="https://www.youtube.com/channel/UCTL-YWI3GojQogY-H4qQng">
              <FontAwesomeIcon
                icon={faYoutube}
                beat
                size="l"
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
            <l1 className="navbar-item" onClick={about_on_click_handler}>
              About Us
              <ul
                class="dropdown"
                style={{ display: `${isAboutVisible ? "block" : "none"}` }}
              >
                <li className="dropdown-item">
                  <Link to="/about">About Bu TEC </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/about-innovation-centre">Innovation Centre</Link>{" "}
                </li>
              </ul>
            </l1>

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
                  <Link to="/core-committee">Core Committee</Link>
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
                <li className="dropdown-item">
                  <Link to="/Resource-persons">Resource Persons</Link>{" "}
                </li>
                <li className="dropdown-item">
                  <Link to="/all-tec">TEC Network</Link>
                </li>
              </ul>
            </l1>
            {/* <l1 className="navbar-item">Events</l1> */}
            {/* <l1 className="navbar-item">Services</l1> */}
            <l1 className="navbar-item" onClick={achievements_on_click_handler}>Achievements
            <ul class="dropdown"    style={{display: `${isAchievementsVisible ? "block" : "none"}`}}>
       <li className="dropdown-item"><Link to="/sanctioned-projects ">Sanctioned Projects</Link></li>
        <li className="dropdown-item"><Link to="/patents ">Patents</Link></li>
        
        <li className="dropdown-item"><a href="#">News Letter</a></li>
        <li className="dropdown-item"><Link to="/Mou">MoU's</Link></li>

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
            <l1 className="navbar-item" onClick={event_on_click_handler}>
              Events
              <ul
                class="dropdown"
                style={{ display: `${isEventVisible ? "block" : "none"}` }}
              >
                <li className="dropdown-item">
                  <Link to="/events">Our Events</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/gallery">Gallery</Link>{" "}
                </li>
                <li className="dropdown-item">
                  <Link to="/tot-plan">ToT Plan</Link>{" "}
                </li>
                <li className="dropdown-item">
                  <Link to="/training-plan">Training Plan</Link>{" "}
                </li>
              </ul>
            </l1>
            <Link to="/service">
              <l1 className="navbar-item">Services</l1>
            </Link>
            {/* <l1 className="navbar-item">Achievements</l1> */}
            <Link to="/contact-us">
              <l1 className="navbar-item">Contacts</l1>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
