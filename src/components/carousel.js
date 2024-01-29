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
import img8 from "../images/carousel_img.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faVolumeHigh,
  faHighlighter,
} from "@fortawesome/free-solid-svg-icons";
import tec_logo1 from "../images/tec_handmade_logo1.png";
import tec_logo2 from "../images/tec_handmade_logo2.png";
import TypeWriter from "./Typewriter";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

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
                      href="https://drive.google.com/file/d/1N-q91Q9FqmOtHJcKs91VPw7GrEC9QSzc/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Registration for AI Ethics and Application for the
                      technological advancements on February 20 - 26, 2024.
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1WTTC-Yru8jKck1Jx6skWGEDKcunmErCK/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Registration for Innova-thon
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1bYq62TqkG0RLZ6Ja5QHqgqV_q8X17dxa/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Registration for Technology Hackathon 3.
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
                <div>Innovative Model Exhibition on February 28, 2024.</div>
                <div>Industry Meet on February 29, 2024.</div>
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
                  ICUMAST was a great success.The event was marked by spirited
                  discussions, insightful presentations, and a vision of
                  collaboration and knowledge sharing among the attending
                  universities.
                </div>
                <div>
                  More than 110 participants registered for for the one week
                  training on Advanced Characterization Technology. Applicants
                  were from around 25 states of India.
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
