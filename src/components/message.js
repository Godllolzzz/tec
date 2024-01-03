import React, { useState, useEffect, useRef } from "react";
import "./message.css";
import img1 from "../images/vcsir.jpg";

const VCMessage = () => {
  const [text, setText] = useState("");
  const content = `
 
The Technology Enabling Centre is not just a project; it is a beacon of hope and a catalyst for transformative change. In today's fast-paced world, where technology is at the heart of almost every endeavour, having a dedicated centre for technology is paramount. It is a place where ideas converge, where research finds its practical applications, and where innovation thrives.
This initiative reflects our commitment to advancing science and technology in our region, and it underscores the pivotal role that universities play in fostering innovation and progress. This centre embodies our vision to bridge the gap between academia and industry. It is a platform where our talented students and faculty members can collaborate with industry experts and researchers to address real-world challenges. By doing so, we not only contribute to the development of cutting-edge technologies but also nurture the next generation of innovators and problem solvers.
As the Vice Chancellor of Bundelkhand University, I extend my wholehearted support to the Technology Enabling Centre. I encourage all our students, faculty members, and stakeholders to actively participate and leverage this resource to explore new horizons, push boundaries, and contribute to the advancement of science, technology, and our society.
Together, we can harness the power of innovation to drive positive change and make a lasting impact on the world.
`;

  const startTyping = () => {
    const wordsArray = content.split(" ");
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < wordsArray.length - 1) {
        setText((prevText) => prevText + " " + wordsArray[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
   
  };

  const handleMouseEnter = () => {
    if (text === "") startTyping();
  };

  const outerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // 20% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleMouseEnter();
        observer.unobserve(outerRef.current);
      }
    }, options);

    if (outerRef.current) {
      observer.observe(outerRef.current);
    }

    return () => {
      if (outerRef.current) {
        observer.unobserve(outerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="outer-msg-container">
        <div className="inner1">
          <div className="vcsir">
            <div className="vcsir_image">
              <img className="vcsir-msg-img" src={img1} alt="VC" />
            </div>
            <div className="vcsir_name">Prof. Mukesh Pandey</div>
            <div className="vcsir_intro"> Hon'ble Vice-Chancellor</div>
          </div>
        </div>
        <div className="inner2">
          <div>Dear Website Visitor, Warm Welcome!!</div>
          <br></br>
          <div>Greetings from me and Bundelkhand University!!</div>
          <br></br>
          <div style={{textAlign:"justify"}}>{text}</div>
        </div>
      </div>
    </>
  );
};

export default VCMessage;
