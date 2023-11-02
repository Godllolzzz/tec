import React from "react";
import logo1 from "../images/RaniLaxmiBaiUniversity.jpg";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./Partners.css";
import logo2 from "../images/IndianGrass.jpg";
import logo3 from "../images/biet.jpg";
import logo4 from "../images/CentralAgro.jpg";
import logo5 from "../images/CentralAyurved.jpg";
import logo6 from "../images/baidyanath_logo.png";
import logo7 from "../images/bhel logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Partners = () => {
  return (
    <div>
      <NavBar />
      <div className="partners-main-container">
        <h1 className="partners-heading">Our Partners</h1>
        <div className="partners">
          <div className="partner-logo">
           <img src={logo1}></img>
          </div>
          <div className="partner-detail">
            <div className="partner-title">
              <h2>
                ICAR - Rani Laxmi Bai Central Agriculture University, Jhansi
              </h2>
            </div>
            {/* <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr> */}
            <div className="partner-content">
              <div className="partner-link">
                <a href="http://www.rlbcau.ac.in/">
            <FontAwesomeIcon  icon={faExternalLinkAlt} style={{color: "gold"}} /></a></div>
              <p>
                {" "}
                RLBCAU is dedicated to agricultural education, research, and
                extension services. It offers undergraduate, postgraduate, and
                doctoral programs in various fields related to agriculture and
                allied sciences, including horticulture, animal science,
                agribusiness management, etc. The university's primary goal is
                to promote agricultural research and education to enhance
                agricultural productivity and the livelihoods of farmers in the
                region.
              </p>
            </div>
          </div>
        </div>
        <div className="partners">
          <div className="partner-logo">
            <img src={logo2}></img>
          </div>
          <div className="partner-detail">
            <div className="partner-title">
              <h2>
                ICAR - Indian Grassland and Fodder Research Institute, Jhansi
              </h2>
            </div>
            {/* <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr> */}
            <div className="partner-content">
            <div className="partner-link">
              <a href="https://igfri.icar.gov.in/">
            <FontAwesomeIcon  icon={faExternalLinkAlt} style={{color: "gold"}} /></a></div>
              <p>
                {" "}
                The primary focus of IGFRI is on research related to grasslands,
                forage crops, and fodder production. The institute conducts
                scientific research to develop improved varieties of grasses and
                forage crops that are suitable for various agro-climatic regions
                in India. This research aims to enhance livestock productivity
                by ensuring a consistent and nutritious feed supply. IGFRI also
                works on sustainable land management practices, soil fertility
                improvement, and conservation of grassland ecosystems.
                Additionally, it provides technical guidance, training, and
                extension services to farmers and stakeholders in the field of
                fodder production and management.
              </p>
            </div>
          </div>
        </div>
        <div className="partners">
          <div className="partner-logo">
            <img src={logo3}></img>
          </div>
          <div className="partner-detail">
            <div className="partner-title">
              <h2>Bundelkhand Institute of Engineering & Technology, Jhansi</h2>
            </div>
            {/* <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr> */}
            <div className="partner-content">
            <div className="partner-link">
              <a href="http://bietjhs.ac.in/">
            <FontAwesomeIcon  icon={faExternalLinkAlt} style={{color: "gold"}} /></a></div>
              <p>
                The Bundelkhand Institute of Engineering & Technology (BIET) is
                an engineering and technology institute located in Jhansi, Uttar
                Pradesh, India. It is one of the prominent technical
                institutions in the Bundelkhand region
              </p>
              <p>
                BIET is affiliated with Dr. A.P.J. Abdul Kalam Technical
                University (formerly known as Uttar Pradesh Technical
                University) and follows the curriculum and standards set by the
                university and the All India Council for Technical Education
                (AICTE). The institute also engages in research activities and
                collaborates with industries and research organizations to
                promote innovation and technological advancement.
              </p>
            </div>
          </div>
        </div>

        <div className="partners">
          <div className="partner-logo">
            <img src={logo4}></img>
          </div>
          <div className="partner-detail">
            <div className="partner-title">
              <h2>CCRAS - Central Agroforestry Research Institute, Jhansi</h2>
            </div>
            {/* <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr> */}
            <div className="partner-content">
            <div className="partner-link">
              <a href="https://cafri.icar.gov.in/">
            <FontAwesomeIcon  icon={faExternalLinkAlt} style={{color: "gold"}} /></a></div>
              <p>
                CAFRI's primary objective is to conduct research and provide
                technical support and guidance in the field of agroforestry.
                Agroforestry is a sustainable land-use system that combines tree
                planting or forestry with agricultural crops or livestock. It
                aims to enhance land productivity, improve soil health, and
                promote environmental conservation. CAFRI also plays a crucial
                role in capacity building, training, and extension services to
                promote agroforestry practices among farmers and landowners.
              </p>
            </div>
          </div>
        </div>
        <div className="partners">
          <div className="partner-logo">
            <img src={logo5}></img>
          </div>
          <div className="partner-detail">
            <div className="partner-title">
              <h2>Central Ayurved Research Institute, Jhansi</h2>
            </div>
            {/* <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr> */}
            <div className="partner-content">
            <div className="partner-link">
              <a href="http://www.ccras.nic.in/content/regional-ayurveda-research-institute-jhansi">
            <FontAwesomeIcon  icon={faExternalLinkAlt} style={{color: "gold"}} /></a></div>
              <p>
                {" "}
                CARI is one of several research institutes under the Central
                Council for Research in Ayurvedic Sciences (CCRAS), which is an
                autonomous body of the Indian Ministry of AYUSH (Ayurveda, Yoga
                & Naturopathy, Unani, Siddha, and Homoeopathy). The Central
                Ayurveda Research Institute in Jhansi would typically engage in
                various research activities related to Ayurveda, including
                clinical trials, pharmacological studies, and research on
                traditional Ayurvedic treatments and formulations. Its goal is
                to promote scientific research and development in the field of
                Ayurveda, validate traditional Ayurvedic practices, and
                contribute to the modernization and integration of Ayurvedic
                medicine into the healthcare system.
              </p>
            </div>
          </div>
        </div>
        <div className="partners">
          <div className="partner-logo">
            <img src={logo6}></img>
          </div>
          <div className="partner-detail">
            <div className="partner-title">
              <h2>Shree Baidyanath Ayurved Bhawan Pvt. Ltd., Jhansi</h2>
            </div>
            {/* <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr> */}
            <div className="partner-content">
            <div className="partner-link">
              <a href="https://www.baidyanath.co.in/">
            <FontAwesomeIcon  icon={faExternalLinkAlt} style={{color: "gold"}} /></a></div>
              <p>
                Shree Baidyanath Ayurved Bhawan Pvt. Ltd. is a well-known
                Ayurvedic pharmaceutical company based in India. It is one of
                the oldest and most respected companies in the field of
                Ayurveda, which is a traditional system of medicine that has its
                roots in ancient India. Ayurveda uses natural ingredients and
                holistic approaches to promote health and well-being.
              </p>
            </div>
          </div>
        </div>
        <div className="partners">
          <div className="partner-logo">
            <img src={logo7} style={{width:"20rem"}}></img>
          </div>
          <div className="partner-detail">
            <div className="partner-title">
              <h2>Bharat Heavy Electricals Limited, Jhansi</h2>
            </div>
            {/* <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr> */}
            <div className="partner-content">
            <div className="partner-link">
              <a href="https://www.bhel.com/">
            <FontAwesomeIcon  icon={faExternalLinkAlt} style={{color: "gold"}} /></a></div>
              <p>
                Bharat Heavy Electricals Limited (BHEL) in Jhansi is a
                significant industrial entity and a branch of BHEL, a renowned
                public sector engineering and manufacturing company in India.
                BHEL is primarily engaged in the design, engineering,
                manufacturing, construction, testing, and commissioning of a
                wide range of products and systems for various sectors,
                including power, industry, transportation, and renewable energy.
                BHEL, Jhansi, is an integral part of India's industrial
                landscape, playing a vital role in the nation's power
                generation, industrial development, and transportation sectors.
                Its commitment to research and development, manufacturing
                excellence, and adherence to global standards has made it a key
                player in India's journey toward self-reliance and
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Partners;
