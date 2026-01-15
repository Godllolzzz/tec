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
import img29 from "../galleryimage/changeG.jpeg";
import img30 from "../galleryimage/changeH.jpeg";
import img31 from "../galleryimage/DSC_0191.JPG";
import img32 from "../galleryimage/DSC_0209.JPG";
import img33 from "../galleryimage/DSC_0210.JPG";
import img34 from "../galleryimage/DSC_0213.JPG";
import img35 from "../galleryimage/DSC_0231.JPG";
import img36 from "../galleryimage/DSC_0234.JPG";
import img37 from "../galleryimage/DSC_0242.JPG";
import img38 from "../galleryimage/DSC_0245.JPG";
import img39 from "../galleryimage/DSC_0252.JPG";
import img40 from "../galleryimage/DSC_0259.JPG";
import img41 from "../galleryimage/DSC_0260.JPG";
import img42 from "../galleryimage/DSC_0263.JPG";
import img43 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.01.jpeg";
import img44 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.02.jpeg";
import img45 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.03.jpeg";
import img46 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.04.jpeg";
import img47 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.05.jpeg";
import img48 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.06.jpeg";
import img49 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.07.jpeg";
import img50 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.08.jpeg";
import img51 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.09.jpeg";
import img52 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.10.jpeg";
import img53 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.11.jpeg";
import img54 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.12.jpeg";
import img55 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.13.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faVolumeHigh,
  faHighlighter,
} from "@fortawesome/free-solid-svg-icons";

import TypeWriter from "./Typewriter";

const images = [
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
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
