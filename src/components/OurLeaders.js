import React from "react";
import group from "../images/groupphoto.jpg";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./OurLeaders.css";
import vcsirlogo from "../images/sirlogo.jpeg";
import fo_Sir_logo from "../images/FOsir.jpeg";
import registrar_logo from "../images/Registrarsir.jpg";

import lavsirlogo from "../images/LavKushSir.jpg";

const OurLeaders = () => {
  return (
    <div>
      <NavBar />

      <div className="leader-main-container">
        <div className="our-leader-heading">Our Leaders</div>
        <div className="vcsir1">
          <div className="officials-logo">
            <div className="vc-sir_image">
              <img src={vcsirlogo} alt="vc_sir_image"></img>
              <div className="vcsir1-title">
                <h3>Prof. Mukesh Pandey</h3>
                <h5> Hon'ble Vice-Chancellor</h5>
                <h5>Bundelkhand University</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="other_officials_wrapper">
          <div className="officials-logo">
            <div className="registrar_bu">
              {/* <div className="registrar_bu_iamge"> */}
              <img src={registrar_logo} alt="vc_sir_image"></img>
              {/* </div> */}
              <div className="vcsir1-title">
                <h3>Mr. Gyanendra Kumar</h3>
                <h5>Registrar</h5>
                <h5>Bundelkhand University</h5>
              </div>
            </div>
          </div>
          <div className="officials-logo">
            <div className="fo_bu">
              <img src={fo_Sir_logo} alt="vc_sir_image"></img>
              <div className="vcsir1-title">
                <h3>Mr. Pramod Kumar Singh</h3>
                <h5>Finance Officer</h5>
                <h5>Bundelkhand University</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="vcsir1-content">
          <p>
            The Technology Enabling Centre is not just a project; it is a beacon
            of hope and a catalyst for transformative change. In today's
            fast-paced world, where technology is at the heart of almost every
            endeavour, having a dedicated centre for technology is paramount. It
            is a place where ideas converge, where research finds its practical
            applications, and where innovation thrives.
          </p>
          <p>
            This initiative reflects our commitment to advancing science and
            technology in our region, and it underscores the pivotal role that
            universities play in fostering innovation and progress. This centre
            embodies our vision to bridge the gap between academia and industry.
            It is a platform where our talented students and faculty members can
            collaborate with industry experts and researchers to address
            real-world challenges. By doing so, we not only contribute to the
            development of cutting-edge technologies but also nurture the next
            generation of innovators and problem solvers.
          </p>
          <p>
            As the Vice Chancellor of Bundelkhand University, I extend my
            wholehearted support to the Technology Enabling Centre. I encourage
            all our students, faculty members, and stakeholders to actively
            participate and leverage this resource to explore new horizons, push
            boundaries, and contribute to the advancement of science,
            technology, and our society.
          </p>
          <p>
            Together, we can harness the power of innovation to drive positive
            change and make a lasting impact on the world.
          </p>
        </div>

        <hr
          style={{
            width: "100%",
            border: "1px solid black",
            marginTop: "2rem",
          }}
        ></hr>

        <div className="vcsir1">
          <div className="lavsir-logo ">
            <img src={lavsirlogo}></img>
            <div className="vcsir1-title">
              <h3>Dr. Lavkush Dwivedi</h3>
              <h4>Co-ordinator</h4>
              <h4>DST-BU TEC</h4>
            </div>
          </div>
          <div className="vcsir1-content">
            <p>
              Our mission at the Technology Enabling Centre is to empower
              students and researchers with the tools, resources, and knowledge
              they need to push the boundaries of Science & Technology. We aim
              to provide a dynamic environment that fosters interdisciplinary
              collaboration, encourages out-of-the-box thinking, and promotes a
              culture of innovation.
            </p>
            <p>
              One of the most exciting aspects of this initiative is its
              potential to bridge the gap between academia and industry. Through
              strategic partnerships and collaborations, we can take research
              from the laboratory to the marketplace, ensuring that our
              innovations have a tangible impact on society and the economy.
            </p>
            <p>
              Furthermore, the Technology Enabling Centre is not confined to the
              walls of our institution. It is a beacon of knowledge and a driver
              of regional development. We are committed to sharing our
              expertise, collaborating with local industries, and providing
              training and support to the broader community.
            </p>
            <p>
              I look forward to working with all of you, our students, faculty,
              and industry partners, as we explore new frontiers, break
              barriers, and unleash the full potential of Science & Technology.
            </p>
            <p>
              Thank you, and let's embark on this exciting journey together.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurLeaders;
