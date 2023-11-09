import { React, useState } from "react";
import "./dst-tec.css";
import dst_image from "../../images/DST in India.jpg"
import dst_tec_logo from "../../images/DST-TECLogo.jpg";
import { useInView } from "react-intersection-observer";

const Dst = (props) => {
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

  var content1 = `The DST's establishment in May 1971 reflects the Indian Government's commitment to advancing Science and Technology as a means of fostering national development and innovation. The objectives of DST, encompass a wide range of activities aimed at promoting and coordinating scientific and technological endeavours in the country.`;
  var content2 = `The DST's establishment in May 1971 reflects the Indian Government's commitment to advancing Science and Technology as a means of fostering national development and innovation. The objectives of DST, encompass a wide range of activities aimed at promoting and coordinating scientific and technological endeavours in the country. </br> </br>
  The TEC program, is a significant initiative under DST's purview. Its goals align with the broader objectives of DST by focusing on creating an ecosystem for technology development within universities and enhancing collaboration between academia, national laboratories, and industry. This approach is crucial for translating research outcomes into practical applications and driving innovation that can contribute to economic growth and societal development.</br> </br>
  By providing a platform for researchers to network and collaborate with other institutions and industry partners, the TEC program helps foster a culture of innovation, knowledge sharing, and interdisciplinary research. Such initiatives are essential for keeping India at the forefront of technological advancements and addressing various challenges facing the nation.</br> </br>
  Overall, DST's efforts, including the TEC program, play a pivotal role in shaping India's scientific and technological landscape and promoting research and development activities that benefit the country's progress and competitiveness on the global stage.
  `;
  return (
    <div className="about-inner">
      <div
        style={{ borderRight: "4px solid #03174F" }}
        ref={imageRef}
        className={`about-image ${imageInView ? "slide-in" : ""}`}
      >
        <img style={{height:"100%", width:"100%"}} src={dst_image} alt="DST TEC Logo" />
      </div>
      <div
        ref={textRef}
        className={`about-text ${textInView ? "slide-in" : ""}`}
      >
        <div style={{color:"white"}} className="about-heading">About DST-TEC</div>
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

export default Dst;
