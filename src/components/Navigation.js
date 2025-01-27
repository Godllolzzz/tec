import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import SocialHandles from "./SocialHandles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const [isTeamTecVisible, setIsTeamTecVisible] = useState(false);
  const [isNetworkVisible, setIsNetworkVisible] = useState(false);
  const [isAchievementsVisible, setIsAchievementsVisible] = useState(false);
  const [isEventVisible, setIsEventVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  // if(!isMobileNavbarOpen) {
  //   document.querySelector('.dropdown').style.display = "none";
  // }

  const home_on_click_handler = () => {
    setIsNetworkVisible(false);
    setIsAchievementsVisible(false);
    setIsEventVisible(false);
    setIsAboutVisible(false);
    setIsDownloadVisible(false);
    setIsTeamTecVisible(false);
    setIsServicesVisible(false);
  };

  const tec_on_click_handler = () => {
    setIsTeamTecVisible((prevState) => !prevState);
    setIsNetworkVisible(false);
    setIsAchievementsVisible(false);
    setIsEventVisible(false);
    setIsAboutVisible(false);
    setIsServicesVisible(false);
    setIsDownloadVisible(false);
  };

  const network_on_click_handler = () => {
    setIsNetworkVisible((prevState) => !prevState);
    setIsTeamTecVisible(false);
    setIsAchievementsVisible(false);
    setIsEventVisible(false);
    setIsDownloadVisible(false);
    setIsServicesVisible(false);
    setIsAboutVisible(false);
  };

  const achievements_on_click_handler = () => {
    setIsAchievementsVisible((prevState) => !prevState);
    setIsTeamTecVisible(false);
    setIsNetworkVisible(false);
    setIsEventVisible(false);
    setIsDownloadVisible(false);
    setIsServicesVisible(false);
    setIsAboutVisible(false);
  };
  const event_on_click_handler = () => {
    setIsEventVisible((prevState) => !prevState);
    setIsTeamTecVisible(false);
    setIsNetworkVisible(false);
    setIsAchievementsVisible(false);
    setIsDownloadVisible(false);
    setIsServicesVisible(false);
    setIsAboutVisible(false);
  };
  const download_on_click_handler = () => {
    setIsDownloadVisible((prevState) => !prevState);
    setIsTeamTecVisible(false);
    setIsNetworkVisible(false);
    setIsAchievementsVisible(false);
    setIsAboutVisible(false);
    setIsServicesVisible(false);
    setIsEventVisible(false);
  };

  const about_on_click_handler = () => {
    setIsAboutVisible((prevState) => !prevState);
    setIsTeamTecVisible(false);
    setIsNetworkVisible(false);
    setIsAchievementsVisible(false);
    setIsDownloadVisible(false);
    setIsServicesVisible(false);
    setIsEventVisible(false);
  };

  const services_on_click_handler = () => {
    setIsServicesVisible((prevState) => !prevState);
    setIsAboutVisible(false);
    setIsTeamTecVisible(false);
    setIsNetworkVisible(false);
    setIsAchievementsVisible(false);
    setIsDownloadVisible(false);
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
            <l1 className="navbar-item" onClick={home_on_click_handler}>
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
                <Link to="/pag">PAG</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/core-committee">Core Committee</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/staff">Staff</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/students-team">Students Team</Link>
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
              </li>{" "}
              <li className="dropdown-item">
                <a
                  href="https://drive.google.com/file/d/14AXpjyMXoibUtiMBlkxUmMt9RjUbo6yO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Collaborations
                </a>
              </li>
              <li className="dropdown-item">
                <Link to="/msme">MSME</Link>
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
                <Link to="/sanctioned-projects ">Projects</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/patents ">Patents & Products</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/news-letter">NewsLetter</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Mou">MoU's</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/startup">Startup</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/mediaCoverage">Media Coverage</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/compliment-corner">Compliment Corner</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/key-indicator">Key Indicator</Link>
              </li>{" "}
              <li className="dropdown-item">
                <Link to="/white-paper">White Paper</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/white-paper">White Paper</Link>
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
          <l1 className="navbar-item" onClick={download_on_click_handler}>
            Downloads
            <ul
              class="dropdown"
              style={{ display: `${isDownloadVisible ? "block" : "none"}` }}
            >
              <li className="dropdown-item">
                <a href="https://bujhansi.ac.in/site/writereaddata/siteContent/201801221641141857UIC%20Brochure%20.pdf">
                  Brochure
                </a>
              </li>
              <li className="dropdown-item">
                <a href="https://bujhansi.ac.in/innovation/user_application_form.pdf">
                  Offline User Application Form
                </a>
              </li>
              <li className="dropdown-item">
                <a href="https://forms.gle/JaDicxPu1ZurkvPh6">
                  Online User Application Form
                </a>
              </li>
            </ul>
          </l1>
          <l1 className="navbar-item" onClick={services_on_click_handler}>
            Services
            <ul
              class="dropdown"
              style={{ display: `${isServicesVisible ? "block" : "none"}` }}
            >
              <li className="dropdown-item">
                <Link to="/service">Services</Link>{" "}
              </li>
              <li className="dropdown-item">
                <Link to="/technical-services">Technical Services</Link>{" "}
              </li>
              <li className="dropdown-item">
                <Link to="/developers-team">DevelopersTeam</Link>{" "}
              </li>
            </ul>
          </l1>
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
            <l1 className="navbar-item" onClick={home_on_click_handler}>
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
                <Link to="/pag">PAG</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/core-committee">Core Committee</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/staff">Staff</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/students-team">Students Team</Link>
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
              </li>{" "}
              <li className="dropdown-item">
                <a
                  href="https://drive.google.com/file/d/14AXpjyMXoibUtiMBlkxUmMt9RjUbo6yO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Collaborations
                </a>
              </li>
              <li className="dropdown-item">
                <Link to="/msme">MSME</Link>
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
                <Link to="/sanctioned-projects ">Projects</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/patents ">Patents & Products</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/news-letter">NewsLetter</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Mou">MoU's</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/startup">Startup</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/mediaCoverage">Media Coverage</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/compliment-corner">Compliment Corner</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/key-indicator">Key Indicator</Link>
              </li>{" "}
              <li className="dropdown-item">
                <Link to="/white-paper">White Paper</Link>
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
          <l1 className="navbar-item" onClick={download_on_click_handler}>
            Downloads
            <ul
              class="dropdown"
              style={{ display: `${isDownloadVisible ? "block" : "none"}` }}
            >
              <li className="dropdown-item">
                <a href="https://bujhansi.ac.in/site/writereaddata/siteContent/201801221641141857UIC%20Brochure%20.pdf">
                  Brochure
                </a>
              </li>
              <li className="dropdown-item">
                <a href="https://bujhansi.ac.in/innovation/user_application_form.pdf">
                  Offline User Application Form
                </a>
              </li>
              <li className="dropdown-item">
                <a href="https://forms.gle/JaDicxPu1ZurkvPh6">
                  Online User Application Form
                </a>
              </li>
            </ul>
          </l1>
          <l1 className="navbar-item" onClick={services_on_click_handler}>
            Services
            <ul
              class="dropdown"
              style={{ display: `${isServicesVisible ? "block" : "none"}` }}
            >
              <li className="dropdown-item">
                <Link to="/service">Services</Link>{" "}
              </li>
              <li className="dropdown-item">
                <Link to="/technical-services">Technical Services</Link>{" "}
              </li>
              <li className="dropdown-item">
                <Link to="/developers-team">DevelopersTeam</Link>{" "}
              </li>
            </ul>
          </l1>
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
