import React from "react";
import img1 from "../images/patent1.jpg";
import img2 from "../images/patent2.jpg";
import img3 from "../images/patent3.jpg";
import partner1 from "../images/RaniLaxmiBaiUniversity.jpg";
import partner2 from "../images/IndianGrass.jpg";
import partner3 from "../images/biet.jpg";
import partner4 from "../images/CentralAgro.jpg";
import partner5 from "../images/CentralAyurved.jpg";
import partner6 from "../images/shreebaidyanath.jpg";
import innovation_image from "../images/innovation_centre (2).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCheckDouble,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import "./home_overview.css";
import Grid from "./grid";

const HomeOverview = () => {
  return (
    <>
      {/* about tec */}
      <div className="about-overview-container">
        <div className="about-overview-style-box"></div>
        <div className="about-overview-left">
          <img src={innovation_image} alt="innovation center image"></img>
        </div>
        <div className="about-overview-right">
          <div className="about-overview-main-heading">About Us</div>
          <div className="about-overview-content">
            The DST's establishment in May 1971 reflects the Indian government's
            commitment to advancing science and technology as a means of
            fostering national development and innovation. The objectives of
            DST, as you mentioned, encompass a wide range of activities aimed at
            promoting and coordinating scientific and technological endeavours
            in the country.
          </div>
          <div className="about-overview-learn-more">
            <a href="/about">LEARN MORE</a>
          </div>
        </div>
      </div>
      <Grid />

      {/* who should reach out bu TEC? */}
      <div className="wsro-overview-container">
        <h1 className="wsro-overview-main-heading">
          {" "}
          Who Should Reach Out To Bundelkhand University TEC?
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
          <a href="/service">See More...</a>
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
        <div className="see_more">See More...</div>
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
            <div className="partner-overview-logo">
              <img src={partner6} alt="partner image"></img>
            </div>
            <div className="partner-overview-name">
              Shree Baidyanath Ayurved Bhawan Pvt. Ltd.
            </div>
          </div>
        </div>
        <div className="see_more">
          <a href="/our-partners">See More...</a>
        </div>
      </div>
    </>
  );
};
export default HomeOverview;