import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import Dst from "./About/dst-tec";
import Butec from "./About/bu-tec";
import { useInView } from "react-intersection-observer";
import "./About.css";

const About = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <NavBar />
      <div className="about-outer">
        <Dst />
        <Butec />
        <h2>Key Objectives and Activities of TEC</h2>
        <hr
          style={{ width: "70%", height: "4px", backgroundColor: "#03174F"}}
        ></hr>
        <div ref={textRef} className={`key-points ${textInView ? 'slide-in' : ''}`}>
          <ol>
            <li>
              <b>Technology Translation:</b> Converting research findings and
              academic knowledge into practical technologies that can be used by
              industries and society.
            </li>
            <li>
              <b>Incubation and Commercialization:</b> Supporting the incubation
              of technology startups and assisting them in commercializing their
              innovations.
            </li>
            <li>
              <b>Skill Development:</b> Providing training and skill development
              programs to researchers, entrepreneurs, and students to enhance
              their capabilities in technology development and
              commercialization.
            </li>
            <li>
              <b>Industry Collaboration:</b> Facilitating collaborations between
              academia and industry to ensure that technologies meet real-world
              needs and can be adopted by businesses.
            </li>
            <li>
              <b>Funding and Resources:</b> Securing funding and resources to
              help advance promising technologies beyond the research phase.
            </li>
            <li>
              <b>Intellectual Property Management:</b> Managing intellectual
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
