import React from "react";
import "./footer.css";
import picture from "../images/DST.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Widgets } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <div style={{ width: "16rem" }}>
          <img style={{ height: "5rem" }} src={picture}></img>
        </div>

        <p class="footer-links">
          <a href="/" class="link-1">
            Home
          </a>

          <a href="/about">About</a>

          <a href="/network">Network</a>

          <a href="/events">Events</a>

          <a href="/service">Services</a>
          <a href="/achievement">Achievements</a>

          <a href="/gallery">Gallery</a>
        </p>
        <div class="footer-icons">
          <a href="https://www.facebook.com/busocial/">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/bu_jhansi?lang=en">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/buiians/">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/school/bundelkhand-university/?originalSubdomain=in">
            <LinkedInIcon />
          </a>
          <a href="https://www.youtube.com/channel/UCTL-YWI3GojQogY-YH4qQng">
            <YouTubeIcon />
          </a>
        </div>
        <p class="footer-company-name">Bundelkhand University ©1975</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>Bundelkhand University
            <span>Kanpur Road Jhansi, 284128</span> Uttar Pradesh, India
          </p>
        </div>

        <div className="footer-phone">
          <i class="fa fa-phone"></i>
          <div>
            <div className="footer-phone-number">+91 9511015157</div>
            <div className="footer-phone-number">+91 9840998686</div>
            <div className="footer-phone-number">+91 9452888176</div>
          </div>
        </div>

        <div className="footer-email">
          <i class="fa fa-envelope"></i>
          <div>
            <div>
              <a
                className="footer-email-inner"
                href="mailto:support@company.com"
              >
                dsttec.bu@gmail.com
              </a>
            </div>
            <div>
              <a
                className="footer-email-inner"
                href="mailto:support@company.com"
              >
                tecdst2022@bujhansi.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-right">
        {/* <p class="footer-company-about">
          <span>About the DST-TEC</span>
          <p style={{textAlign:"justify"}}>
          The DST's establishment in May 1971 reflects the Indian government's commitment to advancing science and technology as a means of fostering national development and innovation.
        </p>
        </p> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5799643162395!2d78.60745061014272!3d25.452302721228588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3977770042a35717%3A0x31d94ad50c4da8ee!2sInnovation%20Center!5e0!3m2!1sen!2sin!4v1698774275582!5m2!1sen!2sin"
          width="450"
          height="250"
          // style=
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
