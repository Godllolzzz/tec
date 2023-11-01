import React, { useState } from "react";
import "./dst-tec.css";
import { useInView } from "react-intersection-observer";
import innovation_centre_image from "../../images/innovation_centre (2).jpg"
import bu_tec_logo from "../../images/BUTEC(Organisation).jpg";

const AboutInnovationCentre = (props) => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
  });
  const [isOpen, setIsOpen] = useState(false);
  const setContentOpen = () => {
    setIsOpen(!isOpen);
  };
  var content1 = `
<div>
  The Innovation Centre was established in 2014 at Bundelkhand
  University, located in the historic city of Jhansi, is a hub of
  creativity and entrepreneurial spirit that has been driving
  innovation and research in the region. This center, often referred
  to as the BU Innovation Centre, plays a pivotal role in fostering a
  culture of innovation, entrepreneurship, and technological
  advancement in the region.
</div>`;
  var content2 = ` 
<div>
  The Innovation Centre was established in 2014 at Bundelkhand
  University, located in the historic city of Jhansi, is a hub of
  creativity and entrepreneurial spirit that has been driving
  innovation and research in the region. This center, often referred
  to as the BU Innovation Centre, plays a pivotal role in fostering a
  culture of innovation, entrepreneurship, and technological
  advancement in the region.
</div>
<h2>Mission and Objectives:</h2>
<div>
  The primary mission of the Innovation Centre at Bundelkhand
  University is to promote innovation, research, and development in
  various fields. Its objectives include:
</div>
<ol>
  <li>
    <b className="points-heading">Ideation:</b> The center provides the necessary resources and
    support to innovate and nurture new ideas, fostering an
    environment conducive to entrepreneurial success. It offers
    mentorship, access to funding, and co-working spaces for budding
    researchers.
  </li>
  <li>
    <b className="points-heading">Research and Development:</b> The center serves as a hub for
    cutting-edge research in various fields. Faculty members and
    students are encouraged to explore innovative ideas and projects
    that have the potential to make a significant impact on society.
  </li>
  <li>
    <b className="points-heading">Skill Development:</b> The BU Innovation Centre offers training
    and skill development programs to equip students and aspiring
    entrepreneurs with the knowledge and tools they need to thrive in
    the ever-evolving world of technology and business.
  </li>
  <li>
    <b className="points-heading">Industry Collaboration:</b> To bridge the gap between academia
    and industry, the center collaborates with various industries and
    organizations. This partnership ensures that research conducted at
    the university is relevant and can be applied to real-world
    problems.
  </li>
</ol>
<h2>Facilities and Resources:</h2>
<div>
  The Innovation Centre is equipped with state-of-the-art facilities
  and resources to support innovation and research. These include:
</div>
<ol>
  <li>
    <b className="points-heading">laboratories:</b>Specialized research laboratories equipped
    with cutting-edge technology to facilitate experimentation and
    innovation in fields such as biotechnology, nanotechnology, and
    information technology.
  </li>
  <li>
    <b className="points-heading">Research Spaces:</b> The center innovators with co-working
    spaces, meeting rooms, and access to a network of mentors and
    advisors. These resources are crucial for turning ideas into
    successful businesses.
  </li>
  <li>
    <b className="points-heading">Library and Information Center:</b> : A well-stocked library
    with access to a vast collection of books, research papers, and
    online databases to support academic and research activities.
  </li>
  <li>
    <b className="points-heading">Funding Opportunities:</b> The BU Innovation Centre assists
    innovators and entrepreneurs in securing funding from government
    grants, private investors, and venture capitalists.
  </li>
</ol>
<h2>Achievements and Impact</h2>
<div>
  Over the years, the Innovation Centre at Bundelkhand University has
  made significant contributions to the region's socio-economic
  development. It has been a catalyst for:
</div>
<ol>
  <li>
    <b className="points-heading">Research Output:</b>The center has produced a wealth of
    research in various fields, contributing to the academic
    reputation of the university and addressing local and national
    challenges.
  </li>
  <li>
    <b className="points-heading">Skill Development:</b> The BU Innovation Centre has helped
    students and researchers acquire valuable skills and knowledge,
    making them more competitive in the job market.
  </li>
  <li>
    <b className="points-heading">Community Engagement:</b>The center often hosts workshops,
    seminars, and events that engage the local community and foster a
    spirit of innovation among the broader population.
  </li>
</ol>`;

  return (
    <div className="about-inner">
      <div
        style={{ borderRight: "4px solid #03174F" }}
        ref={imageRef}
        className={`about-image ${imageInView ? "slide-in" : ""}`}
      >
        <img style={{height:"100%", width:"100%"}} src={innovation_centre_image} alt="DST TEC Logo" />
      </div>
      <div
        ref={textRef}
        className={`about-text ${textInView ? "slide-in" : ""}`}
      >
        <div style={{ color: "white" }} className="about-heading">
          About Innovation Centre
        </div>
        {!isOpen && (
          <div>
            <div
              className="about-content"
              dangerouslySetInnerHTML={{ __html: content1 }}
            ></div>
            <div className="see-more" onClick={setContentOpen}>
              see more...
            </div>
          </div>
        )}
        {isOpen && (
          <div>
            <div
              className="about-content"
              dangerouslySetInnerHTML={{ __html: content2 }}
            ></div>
            <div className="see-more" onClick={setContentOpen}>
              see less...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutInnovationCentre;
