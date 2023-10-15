import React, { useState, useEffect } from "react";
import "./carousel.css"; // Import your CSS file for carousel styling
// import img1 from "../images/GandhiAuditorium.jpeg";
import img2 from "../images/innovation_centre (2).jpg";
import img3 from "../images/innovation_center.jpeg";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faVolumeHigh, faHighlighter } from '@fortawesome/free-solid-svg-icons';

const images = [img2, img3, img4, img5, img6, img7, img8];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
        <div className="carousel-image-container">
          <img
            className="carousel-image"
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
        </div>
        <div className="info">
          <div className="events">
            <div className="heading">
            <FontAwesomeIcon icon={faCalendar} size="lg" style={{color: "#ffffff", paddingRight: '0.5rem'}} />Events
            </div>
            <div className="content">
              We are excited to announce our upcoming product launch event! Join
              us on [Date] at [Location] to get a sneak peek at our latest
              innovations and offerings. Don't miss out on this exciting
              opportunity to learn and connect with our team.
            </div>
          </div>
          <div className="announcements">
            <div className="heading">
            <FontAwesomeIcon icon={faVolumeHigh} size="xl" style={{color: "#ffffff", paddingRight: '0.5rem'}} />Announcements</div>
            <div className="content">
              Join us for the Tech Conference 2023, where industry experts and
              innovators will discuss the latest trends and technologies in the
              tech world. Don't miss this opportunity to learn and network.
            </div>
          </div>
          <div className="highlights">
            <div className="heading">
            <FontAwesomeIcon icon={faHighlighter} size="xl" style={{color: "#ffffff", paddingRight: '0.5rem'}} />Hightlights</div>
            <div className="content">
              {" "}
              Join us for the Tech Conference 2023, where industry experts and
              innovators will discuss the latest trends and technologies in the
              tech world. Don't miss this opportunity to learn and network.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
