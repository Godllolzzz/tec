import React, { useState } from "react";
import "./dst-tec.css";
import { useInView } from "react-intersection-observer";
import bu_tec_logo from "../../images/BUTEC(Organisation).jpg";

const Butec = (props) => {
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
  var content1 = `<p>Bundelkhand University, located in Jhansi, Uttar Pradesh, is a prominent educational institution that has made significant strides in fostering technological innovation and research in the region. Technology Enabling Centre (TEC), established in 2023, serves as a critical hub for advancing technology development and innovation in the region.</p>`;
  var content2 = ` <p>Bundelkhand University, located in Jhansi, Uttar Pradesh, is a prominent educational institution that has made significant strides in fostering technological innovation and research in the region. Within the campus of Bundelkhand University, there exists a Technology Enabling Centre (TEC), which serves as a critical hub for advancing technology development and innovation in the region.</p>
  <h3>About Bundelkhand University:</h3>
  <p>Bundelkhand University was established in the year 1975 and has since become a well-regarded institution for higher education and research. The university offers a diverse range of academic programs across various disciplines, including science, technology, humanities, and social sciences. Over the years, Bundelkhand University has gained recognition for its commitment to academic excellence, research, and community engagement.</p>
  <h3>Technology Enabling Centre (TEC):</h3>
  <p>The Technology Enabling Centre (TEC) at Bundelkhand University, Jhansi, is an integral part of the university's mission to promote research, innovation, and technology development in the region. The TEC program, initiated and supported by the Department of Science and Technology (DST) in India, seeks to create an ecosystem for technology development within universities and facilitate collaboration between academia, national laboratories, and industry. Bundelkhand University's TEC plays a vital role in achieving these objectives within its jurisdiction.</p>`;

  return (
    <div className="about-inner">
      <div
        style={{ borderRight: "4px solid #03174F" }}
        ref={imageRef}
        className={`about-image ${imageInView ? "slide-in" : ""}`}
      >
        <img style={{height:"100%", width:"100%"}} src={bu_tec_logo} alt="DST TEC Logo" />
      </div>
      <div
        ref={textRef}
        className={`about-text ${textInView ? "slide-in" : ""}`}
      >
        <div style={{color:"white"}} className="about-heading">About BU TEC</div>

        {!isOpen && (
          <div>
            <div
              className="about-content"
              dangerouslySetInnerHTML={{ __html: content1 }}
            ></div>
            <div className="see-more" onClick={setContentOpen}>see more...</div>
          </div>
        )}
        {isOpen && (
          <div>
            <div
              className="about-content"
              dangerouslySetInnerHTML={{ __html: content2 }}
            ></div>
            <div className="see-more" onClick={setContentOpen}>see less...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Butec;
