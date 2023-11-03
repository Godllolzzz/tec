import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./carousel.css"; // Import your CSS file for carousel styling
// import img1 from "../images/GandhiAuditorium.jpeg";
import img1 from "../images/about-top-image.jpg";
import img2 from "../galleryimage/DSC_0491.JPG";
import img3 from "../galleryimage/A7403529.JPG";
import img4 from "../galleryimage/A7403304.JPG";
import img5 from "../galleryimage/A7402379.JPG";
import img6 from "../galleryimage/A7402281.JPG";
import img7 from "../images/innovation_centre (2).jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faVolumeHigh,
  faHighlighter,
} from "@fortawesome/free-solid-svg-icons";
import tec_logo1 from "../images/tec_handmade_logo1.png";
import tec_logo2 from "../images/tec_handmade_logo2.png";
import TypeWriter from "./Typewriter";

const images = [img1, img2, img3, img4, img5, img6, img7];

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
        <div
          style={{
            position: "absolute",
            zIndex: "101",
            bottom: "3rem",
            left: "15rem",
          }}
        >
          <TypeWriter />
        </div>
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
                We are excited to announce our upcoming product launch event!
                Join us on [Date] at [Location] to get a sneak peek at our
                latest innovations and offerings. Don't miss out on this
                exciting opportunity to learn and connect with our team.
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
                Join us for the Tech Conference 2023, where industry experts and
                innovators will discuss the latest trends and technologies in
                the tech world. Don't miss this opportunity to learn and
                network.
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
                {" "}
                Join us for the Tech Conference 2023, where industry experts and
                innovators will discuss the latest trends and technologies in
                the tech world. Don't miss this opportunity to learn and
                network.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Carousel;
