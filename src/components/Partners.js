import React from "react";
import logo1 from "../images/RaniLaxmiBaiUniversity.jpg"
import NavBar from "./NavBar";
import Footer from "./footer";
import "./Partners.css";
import logo2 from "../images/IndianGrass.jpg";
import logo3 from "../images/biet.jpg";
import logo4 from "../images/CentralAgro.jpg";
import logo5 from "../images/CentralAyurved.jpg";
import logo6 from "../images/shreebaidyanath.jpg";







const Partners=()=>{
    return(
       <div>
        <NavBar/>
          <div className="partners">
                    <div className="partner-logo">
                    <img src={logo1}></img>
                    
                    </div>
                    <div className="partner-detail">
                    <div className="partner-title">
                    <h2>Rani Laxmi Bai Central Agriculture University</h2>
                    
                    </div>
                    <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr>
                    <div className="partner-content">
                  <b><p> RLBCAU is dedicated to agricultural education, research, and extension services. It offers undergraduate, postgraduate, and doctoral programs in various fields related to agriculture and allied sciences, including horticulture, animal science, agribusiness management, etc. The university's primary goal is to promote agricultural research and education to enhance agricultural productivity and the livelihoods of farmers in the region.</p></b>
                    </div>
                    </div>
                </div>
                <div className="partners">
                    <div className="partner-logo">
                    <img src={logo2}></img>
                    
                    </div>
                    <div className="partner-detail">
                    <div className="partner-title">
                    <h2>Indian Grassland and Fodder Research Institute</h2>
                    
                    </div>
                    <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr>
                    <div className="partner-content">
                    <b><p> The primary focus of IGFRI is on research related to grasslands, forage crops, and fodder production. The institute conducts scientific research to develop improved varieties of grasses and forage crops that are suitable for various agro-climatic regions in India. This research aims to enhance livestock productivity by ensuring a consistent and nutritious feed supply. IGFRI also works on sustainable land management practices, soil fertility improvement, and conservation of grassland ecosystems. Additionally, it provides technical guidance, training, and extension services to farmers and stakeholders in the field of fodder production and management.</p></b>
                    </div>
                    </div>
                </div>
                <div className="partners">
                    <div className="partner-logo">
                    <img src={logo3}></img>
                    
                    </div>
                    <div className="partner-detail">
                    <div className="partner-title">
                    <h2>Bundelkhand Institute of Engineering & Technology</h2>
                    
                    </div>
                    <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr>
                    <div className="partner-content">
                        <b><p>The Bundelkhand Institute of Engineering & Technology (BIET) is an engineering and technology institute located in Jhansi, Uttar Pradesh, India. It is one of the prominent technical institutions in the Bundelkhand region</p></b>
                    <b><p>BIET is affiliated with Dr. A.P.J. Abdul Kalam Technical University (formerly known as Uttar Pradesh Technical University) and follows the curriculum and standards set by the university and the All India Council for Technical Education (AICTE). The institute also engages in research activities and collaborates with industries and research organizations to promote innovation and technological advancement.</p></b>
                    </div>
                    </div>
                </div>

                <div className="partners">
                    <div className="partner-logo">
                    <img src={logo4}></img>
                    
                    </div>
                    <div className="partner-detail">
                    <div className="partner-title">
                    <h2>Central Agroforestry Research Institute</h2>
                    
                    </div>
                    <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr>
                    <div className="partner-content">
                       <b><p>CAFRI's primary objective is to conduct research and provide technical support and guidance in the field of agroforestry. Agroforestry is a sustainable land-use system that combines tree planting or forestry with agricultural crops or livestock. It aims to enhance land productivity, improve soil health, and promote environmental conservation. CAFRI also plays a crucial role in capacity building, training, and extension services to promote agroforestry practices among farmers and landowners.</p></b>
                    </div>
                    </div>
                </div>
                <div className="partners">
                    <div className="partner-logo">
                    <img src={logo5}></img>
                    
                    </div>
                    <div className="partner-detail">
                    <div className="partner-title">
                    <h2>Central Ayurved Research Institute</h2>
                    
                    </div>
                    <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr>
                    <div className="partner-content">
                   <b><p> CARI is one of several research institutes under the Central Council for Research in Ayurvedic Sciences (CCRAS), which is an autonomous body of the Indian Ministry of AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy). The Central Ayurveda Research Institute in Jhansi would typically engage in various research activities related to Ayurveda, including clinical trials, pharmacological studies, and research on traditional Ayurvedic treatments and formulations. Its goal is to promote scientific research and development in the field of Ayurveda, validate traditional Ayurvedic practices, and contribute to the modernization and integration of Ayurvedic medicine into the healthcare system.</p></b>
                    </div>
                    </div>
                </div>
                <div className="partners">
                    <div className="partner-logo">
                    <img src={logo6}></img>
                    
                    </div>
                    <div className="partner-detail">
                    <div className="partner-title">
                    <h2>Shree Baidyanath Ayurved Bhawan Pvt. Ltd.</h2>
                    
                    </div>
                    <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr>
                    <div className="partner-content">
                       <b><p>Shree Baidyanath Ayurved Bhawan Pvt. Ltd. is a well-known Ayurvedic pharmaceutical company based in India. It is one of the oldest and most respected companies in the field of Ayurveda, which is a traditional system of medicine that has its roots in ancient India. Ayurveda uses natural ingredients and holistic approaches to promote health and well-being.</p></b>
                    </div>
                    </div>
                </div>

                <Footer/>
       </div>
    )
};

export default Partners;