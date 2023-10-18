import React from "react";
import group from '../images/groupphoto.jpg'
import NavBar from "./NavBar";
import Footer from "./footer";
import './OurLeaders.css';
import vcsirlogo from '../images/sirlogo.jpeg'
import lavsirlogo from '../images/lavsir.jpg'

const OurLeaders=()=>{
    return(
        <div>
            <NavBar/>
            <div className="our-leaders">
                <img src={group}></img>
            </div>
            <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr>
            <div className="our-leader">
                <h1>Our Leaders</h1>
                </div>
                <div className="vcsir1">
                    <div className="vcsir1-logo">
                    <img src={vcsirlogo}></img>
                    <div className="vcsir1-title">
                    <h3>Prof. Mukesh Pandey</h3>
                    <h5>Vice Chancellor</h5>
                    </div>
                    </div>
                    <div className="vcsir1-content">
                      <b><p>The Technology Enabling Centre is not just a project; it is a beacon of hope and a catalyst for transformative change. In today's fast-paced world, where technology is at the heart of almost every endeavour, having a dedicated centre for technology is paramount. It is a place where ideas converge, where research finds its practical applications, and where innovation thrives.</p></b>
                      <b><p>This initiative reflects our commitment to advancing science and technology in our region, and it underscores the pivotal role that universities play in fostering innovation and progress. This centre embodies our vision to bridge the gap between academia and industry. It is a platform where our talented students and faculty members can collaborate with industry experts and researchers to address real-world challenges. By doing so, we not only contribute to the development of cutting-edge technologies but also nurture the next generation of innovators and problem solvers.</p></b>
                      <b><p>As the Vice Chancellor of Bundelkhand University, I extend my wholehearted support to the Technology Enabling Centre. I encourage all our students, faculty members, and stakeholders to actively participate and leverage this resource to explore new horizons, push boundaries, and contribute to the advancement of science, technology, and our society.</p></b>
                       <b><p>Together, we can harness the power of innovation to drive positive change and make a lasting impact on the world.</p></b>
                    </div>
                </div>
                <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr>
                 
                <div className="vcsir1">
                    <div className="vcsir1-logo">
                    <img style={{height:"30rem"}} src={lavsirlogo}></img>
                    <div className="vcsir1-title">
                    <h3>Dr. Lavkush Dwivedi</h3>
                    <h5>Co-Ordinator

</h5>
<h5>DST-BU-TEC</h5>
                    </div>
                    </div>
                    <div className="vcsir1-content">
                     <b><p>Our mission at the Technology Enabling Centre is to empower students and researchers with the tools, resources, and knowledge they need to push the boundaries of science and technology. We aim to provide a dynamic environment that fosters interdisciplinary collaboration, encourages out-of-the-box thinking, and promotes a culture of innovation.</p></b>
                     <b><p>One of the most exciting aspects of this initiative is its potential to bridge the gap between academia and industry. Through strategic partnerships and collaborations, we can take research from the laboratory to the marketplace, ensuring that our innovations have a tangible impact on society and the economy.</p></b>
                     <b><p>Furthermore, the Technology Enabling Centre is not confined to the walls of our institution. It is a beacon of knowledge and a driver of regional development. We are committed to sharing our expertise, collaborating with local industries, and providing training and support to the broader community.</p></b>
                     <b><p>I look forward to working with all of you, our students, faculty, and industry partners, as we explore new frontiers, break barriers, and unleash the full potential of science and technology.</p></b>
                     <b><p>Thank you, and let's embark on this exciting journey together.</p></b>




                    </div>
                </div>
            
            
            
            <Footer/>
        </div>
    )
};


 export default OurLeaders;