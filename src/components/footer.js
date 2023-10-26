import React from "react";
import "./footer.css";
import picture from "../images/DST_logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Widgets } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <div style={{backgroundColor:"white", width:"20rem"}}>
          <img style={{height:"5rem"}} src={picture}></img>
        </div>

        <p class="footer-links">
          <a href="#" class="link-1">
            home
          </a>

          <a href="#">About</a>

          <a href="#">Nerwork</a>

          <a href="#">Events</a>

          <a href="#">Services</a>
          <a href="#">Achievements</a>

          <a href="#">Contacts</a>
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

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
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
}

export default Footer;