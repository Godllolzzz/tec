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

const ContactUsHome = () => {
  return (
    <>
      
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
                <p> Kanpur Road Jhansi, 284001</p>
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
                <p className="contact-us-name">Dr.Nishtha Vyas:</p>
                <p style={{ marginTop: "-0.5rem" }}>+91 9511015157</p>
                <p className="contact-us-name">Dr.Shrikanth Krishnamurthy:</p>
                <p style={{ marginTop: "-0.5rem" }}>+91 9840998686</p>
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
                <p className="contact-us-name">Dr.Lavkush Dwivedi:</p>
                <p style={{ marginTop: "-0.5rem" }}>lavkush@bujhansi.ac.in</p>
                <p>dsttec.bu@gmail.com</p>
                <p>tecdst2022@bujhansi.ac.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ContactUsHome;
