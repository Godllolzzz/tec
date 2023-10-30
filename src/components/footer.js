import React from "react";
import "./footer.css";
import picture from "../images/DST_logo.png";
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
        <div style={{ backgroundColor: "white", width: "20rem" }}>
          <img style={{ height: "5rem" }} src={picture}></img>
        </div>

        <p class="footer-links">
          <a href="#" class="link-1">
            Home
          </a>

          <a href="/about">About</a>

          <a href="/network">Network</a>

          <a href="/events">Events</a>

          <a href="/service">Services</a>
          <a href="/achievement">Achievements</a>

          <a href="/gallery">Contacts</a>
        </p>

        <p class="footer-company-name">Bundelkhand University ©1975</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>Kanpur Road Jhansi, 284001</span> Uttar Pradesh, India
          </p>
        </div>

        <div className="footer-phone">
          <p cl>
            {" "}
            <i class="fa fa-phone"></i>+91 9511015157
          </p>
          <p cl>
            {" "}
            <i class="fa fa-phone"></i>+91 9840998686
          </p>
          <p cl>
            {" "}
            <i class="fa fa-phone"></i>+91 9452888176
          </p>
        </div>

        <div>
          <p>
            <i class="fa fa-envelope"></i>
            <a href="mailto:support@company.com">dsttec.bu@gmail.com</a>
          </p>
          <p>
            <i class="fa fa-envelope"></i>
            <a href="mailto:support@company.com">tecdst2022@bujhansi.ac.in</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the University</span>
          Established on August 26, 1975, Bundelkhand University was set up to
          fulfill his dream of creating a new institution of higher learning
          relevant to the time and need of the nation in general.
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
      </div>
    </footer>
  );
};

export default Footer;
