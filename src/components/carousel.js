import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./carousel.css"; // Import your CSS file for carousel styling
// import img1 from "../images/GandhiAuditorium.jpeg";
import img1 from "../images/about_top_image.jpg";
import img2 from "../galleryimage/DSC_0491.JPG";
import img3 from "../galleryimage/A7403529.JPG";
import img4 from "../galleryimage/A7403304.JPG";
import img5 from "../images/TEC-3.jpg";
import img6 from "../galleryimage/A7402281.JPG";
import img7 from "../images/innovation_centre (2).jpg";
import img8 from "../galleryimage/change11.jpg";
import img9 from "../galleryimage/change2.jpg";
import img12 from "../galleryimage/change12.jpg";
import img13 from "../galleryimage/change13.jpeg";
import img14 from "../galleryimage/change14.jpeg";
import img15 from "../galleryimage/change15.jpeg";
import img16 from "../galleryimage/change16.jpeg";
import img17 from "../galleryimage/change17.jpeg";
import img19 from "../galleryimage/change19.jpeg";
import img20 from "../galleryimage/change20.jpeg";
import img21 from "../galleryimage/change21.jpeg";
import img22 from "../galleryimage/change22.jpeg";
import img23 from "../galleryimage/changeA.jpeg";
import img24 from "../galleryimage/changeB.jpeg";
import img25 from "../galleryimage/changeC.jpeg";
import img26 from "../galleryimage/changeD.jpeg";
import img27 from "../galleryimage/changeE.jpeg";
import img28 from "../galleryimage/changeF.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faVolumeHigh,
  faHighlighter,
} from "@fortawesome/free-solid-svg-icons";

import TypeWriter from "./Typewriter";

const images = [
  img13,
  img14, //
  img15, //
  img16,
  img17, //
  img19,
  // img20,
  img21,
  img22,
  img9,
  img12,
  img8,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
];

const Carousel = () => {
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const [isHighLightOpen, setIsHighLightOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const eventHandler = (e) => {
    setIsEventOpen(true);
    setIsAnnouncementOpen(false);
    setIsHighLightOpen(false);
  };
  const announcementHandler = (e) => {
    setIsAnnouncementOpen(true);
    setIsEventOpen(false);
    setIsHighLightOpen(false);
  };
  const highlightHandler = (e) => {
    setIsHighLightOpen(true);
    setIsEventOpen(false);
    setIsAnnouncementOpen(false);
  };

  const highlightCloseHandler = (e) => {
    setIsHighLightOpen(false);
  };
  const eventCloseHandler = (e) => {
    setIsEventOpen(false);
  };
  const announcementClosetHandler = (e) => {
    setIsAnnouncementOpen(false);
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically switch to the next image every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <>
      <div className="parent">
        {/* <div className="carousel-blue-box">
          <div className="carousel-logo-box">
            <img src={tec_logo1}></img>
          </div>
        </div> */}
        <div className="typewriter-parent">
          <TypeWriter
            first="DST - TECHNOLOGY ENABLING CENTRE"
            second="BU - INNOVATION CENTRE"
          />
        </div>
        {/* <div
          style={{
            position: "absolute",
            zIndex: "101",
            bottom: "4rem",
            left: "15rem",
          }}
        >
          <TypeWriter first = "The State-of-art facility" second = "of BUNDELKHAND UNIVERSITY"/>

        </div> */}
        <div className="carousel-image-container">
          <img
            className="carousel-image"
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
        </div>
        <div className="info">
          {!isEventOpen && (
            <div onClick={eventHandler} className="close-events">
              <div>Events</div>
              <ArrowForwardIosIcon />
            </div>
          )}
          {isEventOpen && (
            <div className="events">
              <div className="heading-container">
                <div className="heading">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    size="lg"
                    style={{ color: "#ffffff", paddingRight: "0.5rem" }}
                  />
                  Events
                </div>
                <ArrowBackIosNewIcon onClick={eventCloseHandler} />
              </div>
              <div className="content">
                <ul style={{ paddingLeft: "20px" }}>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1l50w-NWLPa-XqMVPo2LJ7qH-Mk8uo-HX/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Registration for Innova-thon
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {!isAnnouncementOpen && (
            <div onClick={announcementHandler} className="close-announcements">
              <div>Announcements</div>
              <ArrowForwardIosIcon />
            </div>
          )}
          {isAnnouncementOpen && (
            <div className="announcements">
              <div className="heading-container">
                <div className="heading">
                  <FontAwesomeIcon
                    icon={faVolumeHigh}
                    size="xl"
                    style={{ color: "#ffffff", paddingRight: "0.5rem" }}
                  />
                  Announcements
                </div>
                <ArrowBackIosNewIcon onClick={announcementClosetHandler} />
              </div>
              <div className="content">
                <div>
                  Trainings will be conducted between November 2024 - Januray
                  2025{" "}
                </div>
              </div>
            </div>
          )}
          {!isHighLightOpen && (
            <div onClick={highlightHandler} className="close-highlights">
              <div>Hightlights</div>
              <ArrowForwardIosIcon />
            </div>
          )}
          {isHighLightOpen && (
            <div className="highlights">
              <div className="heading-container">
                <div className="heading">
                  <FontAwesomeIcon
                    icon={faHighlighter}
                    size="xl"
                    style={{ color: "#ffffff", paddingRight: "0.5rem" }}
                  />
                  Hightlights
                </div>
                <ArrowBackIosNewIcon onClick={highlightCloseHandler} />
              </div>
              <div className="content">
                <div>
                  Successfully launched 7 Android Applications and handed them
                  over to MSMEs free of cost.
                </div>
                <div>
                  Bundelkhand University got a grand of rupees 100 crores under
                  the PM-UShA (MERU).
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Carousel;
