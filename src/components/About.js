import NavBar from "./NavBar";
import Footer from "./footer";
import Dst from "./About/dst-tec";
import Butec from "./About/bu-tec";
import { useInView } from "react-intersection-observer";
import "./About.css";
import React, { useState, useEffect } from "react";
// import img2 from "../galleryimage/DSC_0491.JPG";
// import img3 from "../galleryimage/A7403529.JPG";
// import img4 from "../galleryimage/A7403304.JPG";
// import img5 from "../galleryimage/A7402379.JPG";
// import img6 from "../galleryimage/A7402281.JPG";
// import img7 from "../images/innovation_center.jpeg";
// import img8 from "../images/innovation_centre (2).jpg";
import about_top_image from "../images/about_top_image.jpg"
import AboutInnovationCentre from "./About/about-innovation";

const About = () => {
// const images = [img2, img3, img4, img5, img6, img7, img8];
//   const [currentIndex, setCurrentIndex] = useState(0);

  const [textRef, textInView] = useInView({
    triggerOnce: true,
  });
  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(nextSlide, 2000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [currentIndex]);
  return (
    <>
      <NavBar />
      <div className="about-outer">
        {/* <div className="about-carousel-image-container">
          <img
            className="about-carousel-image"
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
        </div> */}
        <div className="about-image-container">
          <img src={about_top_image} alt="about-top-image"></img>
        </div>
        <Dst />
        <Butec />
        {/* <AboutInnovationCentre /> */}
        <div className="about-heading">Key Objectives and Activities of TEC</div>
        <div
          ref={textRef}
          className={`key-points ${textInView ? "slide-in" : ""}`}
        >
          <ol>
            <li>
              <b className="points-heading">Technology Translation:</b> Converting research findings and
              academic knowledge into practical technologies that can be used by
              industries and society.
            </li>
            <li>
              <b className="points-heading">Incubation and Commercialization:</b> Supporting the incubation
              of technology startups and assisting them in commercializing their
              innovations.
            </li>
            <li>
              <b className="points-heading">Skill Development:</b> Providing training and skill development
              programs to researchers, entrepreneurs, and students to enhance
              their capabilities in technology development and
              commercialization.
            </li>
            <li>
              <b className="points-heading">Industry Collaboration:</b> Facilitating collaborations between
              academia and industry to ensure that technologies meet real-world
              needs and can be adopted by businesses.
            </li>
            <li>
              <b className="points-heading">Funding and Resources:</b> Securing funding and resources to
              help advance promising technologies beyond the research phase.
            </li>
            <li>
              <b className="points-heading">Intellectual Property Management:</b> Managing intellectual
              property rights and patents associated with the developed
              technologies to protect them and facilitate their use by various
              stakeholders.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
