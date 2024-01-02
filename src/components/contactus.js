import React from "react";
import "./contactus.css";
import NavBar from "./NavBar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="contact-us-image-container">
        <div className="contact-us-container">
          <div className="contact-us-main-heading">Contact Us</div>
          <div className="contact-us-outer-container">
            <div className="contact-us-inner-container">
              <div className="contact-us-logo">
                <FontAwesomeIcon
                  bounce
                  icon={faLocationDot}
                  color="white"
                  size="2xl"
                />
              </div>
              <div className="contact-us-content">
                <p>Bundelkhand University</p>
                <p> Kanpur Road Jhansi, 284128</p>
                <p>Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="contact-us-inner-container">
              <div className="contact-us-logo">
                <FontAwesomeIcon
                  shake
                  icon={faPhoneVolume}
                  color="white"
                  size="2xl"
                />
              </div>
              <div className="contact-us-content">
                <p className="contact-us-name">Dr. Nishtha Vyas</p>
                <p style={{ margin: "0.25rem" }}>+91 9511015157</p>
                <p style={{ margin: "0.25rem" }} className="contact-us-name">
                  Dr. K Shrikanth
                </p>
                <p>+91 9840998686</p>
              </div>
            </div>
            <div className="contact-us-inner-container">
              <div className="contact-us-logo">
                <FontAwesomeIcon
                  icon={faComments}
                  flip
                  color="white"
                  size="2xl"
                />
              </div>
              <div className="contact-us-content">
                <p className="contact-us-name">Dr. Lavkush Dwivedi</p>
                <a
                  href="mailto:lavkush@bujhansi.ac.in"
                  style={{
                    margin: "0.25rem",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  lavkush@bujhansi.ac.in
                </a>
                <a
                  href="mailto:dsttec.bu@gmail.com"
                  style={{
                    margin: "0.25rem",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  dsttec.bu@gmail.com
                </a>
                <a
                  href="mailto:tecdst2022@bujhansi.ac.in"
                  style={{
                    margin: "0.25rem",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  tecdst2022@bujhansi.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
