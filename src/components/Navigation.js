import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import SocialHandles from "./SocialHandles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const [isTeamTecVisible, setIsTeamTecVisible] = useState(false);
  const [isNetworkVisible, setIsNetworkVisible] = useState(false);
  const [isAchievementsVisible, setIsAchievementsVisible] = useState(false);
  const [isEventVisible, setIsEventVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);


  // if(!isMobileNavbarOpen) {
  //   document.querySelector('.dropdown').style.display = "none";
  // }

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
  const hamburgerHandler = () => {
    setIsMobileNavbarOpen(!isMobileNavbarOpen);
  };
  return (
    <div className="outer-navbar">
      <SocialHandles />
      <div onClick={hamburgerHandler} className="hamburger">
        {!isMobileNavbarOpen && (
          <FontAwesomeIcon
            icon={faBars}
            size="l"
            style={{
              color: "white",
              marginTop: "0.5rem",
              marginLeft: "0.6rem",
            }}
          />
        )}
        {isMobileNavbarOpen && (
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            style={{
              color: "white",
              marginTop: "0.4rem",
              marginLeft: "0.6rem",
            }}
          />
        )}
      </div>
      <div className="inner-navbar">
        <ul className="navbar-items">
          <Link to="/">
            <l1 className="navbar-item">Home</l1>
          </Link>
          <l1 className="navbar-item" onClick={about_on_click_handler}>
            About Us
            <ul
              class="dropdown"
              style={{ display: `${isAboutVisible ? "block" : "none"}` }}
            >
              <li className="dropdown-item">
                <Link to="/about">About BU TEC </Link>
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
          <l1 className="navbar-item" onClick={achievements_on_click_handler}>
            Achievements
            <ul
              class="dropdown"
              style={{ display: `${isAchievementsVisible ? "block" : "none"}` }}
            >
              <li className="dropdown-item">
                <Link to="/sanctioned-projects ">Sanctioned Projects</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/patents ">Patents</Link>
              </li>

              <li className="dropdown-item">
                <a href="#">News Letter</a>
              </li>
              <li className="dropdown-item">
                <Link to="/Mou">MoU's</Link>
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
      <div
        className={`mobile-navbar ${
          isMobileNavbarOpen ? "showMobileNavBar" : "hideMobileNavBar"
        }`}
      >
        <ul className="navbar-items">
          <Link to="/">
            <l1 className="navbar-item">Home</l1>
          </Link>
          <l1 className="navbar-item" onClick={about_on_click_handler}>
            About Us
            <ul
              class="dropdown"
              style={{ display: `${isAboutVisible ? "block" : "none"}` }}
            >
              <li className="dropdown-item">
                <Link to="/about">About BU TEC </Link>
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
          <l1 className="navbar-item" onClick={achievements_on_click_handler}>
            Achievements
            <ul
              class="dropdown"
              style={{ display: `${isAchievementsVisible ? "block" : "none"}` }}
            >
              <li className="dropdown-item">
                <Link to="/sanctioned-projects ">Sanctioned Projects</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/patents ">Patents</Link>
              </li>

              <li className="dropdown-item">
                <a href="#">News Letter</a>
              </li>
              <li className="dropdown-item">
                <Link to="/Mou">MoU's</Link>
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
  );
};

export default Navigation;