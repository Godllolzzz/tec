import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./carousel.css";
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
import img52 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.10.jpeg";
import img53 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.11.jpeg";
import img54 from "../galleryimage//WhatsApp Image 2026-01-15 at 13.25.12.jpeg";
import img55 from "../galleryimage/1000992759.jpg.jpeg";
import img56 from "../galleryimage/980d3f28-8a6f-4971-a37c-19e1dc8a96cd-1_all_51910.jpg.jpeg";
import img57 from "../galleryimage/980d3f28-8a6f-4971-a37c-19e1dc8a96cd-1_all_51881.jpg.jpeg";
import img58 from "../galleryimage/IMG-20251219-WA0013.jpg.jpeg";
import img59 from "../galleryimage/IMG-20251218-WA0032.jpg.jpeg";
import img60 from "../galleryimage/IMG_20251217_125831.jpg.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faVolumeHigh,
  faHighlighter,
} from "@fortawesome/free-solid-svg-icons";

import TypeWriter from "./Typewriter";

const images = [
  img55,
  img56,
  img57,
  img58,
  img59,
  img60,
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
  img52,
  img53,
  img54,
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
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
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
