import React from "react";
import img1 from "../images/patent1.jpg";
import img2 from "../images/patent2.jpg";
import img3 from "../images/patent3.jpg";
import partner1 from "../images/RaniLaxmiBaiUniversity.jpg";
import partner2 from "../images/IndianGrass.jpg";
import partner3 from "../images/biet.jpg";
import partner4 from "../images/CentralAgro.jpg";
import partner5 from "../images/CentralAyurved.jpg";
import partner6 from "../images/baidyanath_logo.png";
import partner7 from "../images/bhel logo.png";
import innovation_image from "../images/home_about_image.jpeg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCheckDouble,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import "./home_overview.css";
import Grid from "./grid";
import { Widgets } from "@mui/icons-material";
import VideoPlayer from "./VideoPlayer";
import { Link } from "@mui/material";


const HomeOverview = () => {
  return (
    <>
      {/* about tec */}
      <div className="about-overview-container">
        {/* <div className="about-overview-style-box"></div> */}
        <div className="about-overview-left">
      {/* <VideoPlayer videoId="1Vz0V0avHuc?feature=shared" /> */}
      {/* https://youtube.com/shorts/1Vz0V0avHuc?feature=shared */}
      <img src={innovation_image} alt="innovation_image"></img>
        </div>
        <div className="about-overview-right">
          <div className="about-overview-main-heading">About BUTEC & Innovation Centre</div>
          <div className="about-overview-content">
          The TEC program, is a significant initiative under DST's purview. Its goals align with the broader objectives of DST by focusing on creating an ecosystem for technology development within universities and enhancing collaboration between academia, national laboratories, and industry. This approach is crucial for translating research outcomes into practical applications and driving innovation that can contribute to economic growth and societal development. BUTEC was established in the Bundelkhand University in the Year 2023. The BUTEC facility in the campus has ignited the young brains since then.
The State-of-Art facility named as Innovation centre was established in 2014, this research centre cum testing lab is having almost all kinds of sample testing equipment that have been serving the society in the region.
          </div>
          <div className="about-overview-learn-more">
            <Link href="/about">LEARN MORE</Link>
          </div>
        </div>
      </div>
      <Grid />

      {/* who should reach out bu TEC? */}
      <div className="wsro-overview-container">
        <h1 className="wsro-overview-main-heading">
          {" "}
          Who Should Reach Out To DST-BU TEC & Innovation Centre?
        </h1>
        <div className="wsro-overview-outer-container">
          <div className="wsro-overview-inner-container">
            <div className="wsro-overview-content">
              Researchers, Scholars, Students who have brilliant project ideas
              for solving real world problems and they are looking for industry
              collaborations.
            </div>
          </div>
          <div className="wsro-overview-inner-container">
            <div className="wsro-overview-content">
              Industries that are inclined to have academic collaborations for
              finding solutions for some of their newer problems.
            </div>
          </div>
          <div className="wsro-overview-inner-container">
            <div className="wsro-overview-content">
              Industries that wish to collaborate with academia for research
              centric problems.
            </div>
          </div>
        </div>
      </div>
      {/* service overview */}
      <div className="service-overview-container">
        <h1 className="service-overview-main-heading"> Our Services</h1>
        <div className="service-overview-outer-container">
          <div className="service-overview-inner-container">
            <FontAwesomeIcon
              className="service-overview-icon"
              icon={faBriefcase}
              size="2xl"
              style={{ color: "#03174F" }}
            />
            <div className="service-overview-heading">Fabrication Facility</div>
            <div className="service-overview-content">
              Bundelkhand University has fabrication facility for in-house
              design and fabrication of most of the project prototypes.
            </div>
          </div>
          <div className="service-overview-inner-container">
            <FontAwesomeIcon
              icon={faCheckDouble}
              size="2xl"
              style={{ color: "#03174F" }}
            />

            <div className="service-overview-heading">
              Instrumentation Facility
            </div>
            <div className="service-overview-content">
              Bundelkhand University Central Instrumentation Facility (CUCIF) is
              known for its consultancy services to the scientific.
            </div>
          </div>
          <div className="service-overview-inner-container">
            <FontAwesomeIcon
              icon={faChartSimple}
              size="2xl"
              style={{ color: "#03174F" }}
            />
            <div className="service-overview-heading">IP Services</div>
            <div className="service-overview-content">
              Bundelkhand University has a dedicated IPR cell with patent
              attorneys on board. University has an easy patent policy.
            </div>
          </div>
        </div>
        <div className="see_more">
        <Link href="/service">See More...</Link>
        </div>
      </div>
      {/* patent */}
      <div className="outer-patent-container">
        <h1 className="patent-main-heading">Our Patents</h1>
        <div className="patents-container">
          <div className="patent-container">
            <div>
              <img src={img1} alt="patent_image"></img>
            </div>
            <div></div>
          </div>
          <div className="patent-container">
            <div className="img-container">
              <img src={img2} alt="patent_image"></img>
            </div>
            <div></div>
          </div>
          <div className="patent-container">
            <div>
              <img src={img3} alt="patent_image"></img>
            </div>
            <div></div>
          </div>
        </div>
        <div className="see_more">
          <Link href="/patents">See More...</Link>
</div>
      </div>
      {/* partners */}
      <div className="partner-overview-container">
        <div className="partner-overview-main-heading">Our Partners</div>
        <div className="partner-overview-outer-container">
          <div className="partner-overview-inner-container">
            <div className="partner-overview-logo">
              <img src={partner1} alt="partner image"></img>
            </div>
            <div className="partner-overview-name">
              Rani Laxmi Bai Central Agriculture University
            </div>
          </div>
          <div className="partner-overview-inner-container">
            <div className="partner-overview-logo">
              <img src={partner2} alt="partner image"></img>
            </div>
            <div className="partner-overview-name">
              Indian Grassland and Fodder Research Institute
            </div>
          </div>
          <div className="partner-overview-inner-container">
            <div className="partner-overview-logo">
              <img src={partner3} alt="partner image"></img>
            </div>
            <div className="partner-overview-name">
              Bundelkhand Institute of Engineering & Technology
            </div>
          </div>
          <div className="partner-overview-inner-container">
            <div className="partner-overview-logo">
              <img src={partner4} alt="partner image"></img>
            </div>
            <div className="partner-overview-name">
              Central Agroforestry Research Institute
            </div>
          </div>
          <div className="partner-overview-inner-container">
            <div className="partner-overview-logo">
              <img src={partner5} alt="partner image"></img>
            </div>
            <div className="partner-overview-name">
              Central Ayurved Research Institute
            </div>
          </div>
          <div className="partner-overview-inner-container">
            <div style={{width:"7.5rem"}} className="partner-overview-logo">
              <img style={{width:"100%"}} src={partner6} alt="partner image"></img>
            </div>
            <div className="partner-overview-name">
              Shree Baidyanath Ayurved Bhawan Pvt. Ltd.
            </div>
          </div>
          <div className="partner-overview-inner-container">
            <div className="partner-overview-logo">
              <img style={{width:"10rem"}} src={partner7} alt="partner image"></img>
            </div>
            <div className="partner-overview-name">
              Bhartiya Heavy  Electronic Limited, Jhansi
            </div>
          </div>
        </div>
        <div className="see_more">
          <Link href="/our-partners">See More...</Link>
        </div>
      </div>
    </>
  );
};
export default HomeOverview;
