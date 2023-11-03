import React, { useState, useEffect, useRef } from "react";
import "./message.css";
import img1 from "../images/vcsir.jpg";

const VCMessage = () => {
  const [text, setText] = useState("");
  const content = `
  
  It is really a matter of honor and immense pleasure that destiny has given me an opportunity to lead the Bundelkhand University, Jhansi (UP). Although I joined as the Vice Chancellor of this renowned university but somewhere at the core of my heart, actually I want to serve this university as a facilitator between the university and society.
  
  In the continuing task of nation building, Bundelkhand University is trying to promote excellence in higher education for a vibrant and inclusive society through knowledge creation and dissemination. It is making sincere efforts to contribute its mite by providing the right kind of human resources. It is striving hard to impart quality education to meet national and global challenges, towards accomplishing its mission. For students, the degree represents certification of competence, and a passport to advanced education or gainful employment and livelihood and prosperity. They have an important role to play in the development of the Nation and hence have to handle their future with confidence and capabilities.
  
  Education is meant to inculcate right values among students to produce socially sensitive citizens. Thus it encourages not only curricular activities, but also co- curricular, extra-curricular and extension activities. Bundelkhand University provides quite kindred academic circle for the evolution of future incitements to outrun global standards. The university has carved out an alcove among the comity of universities to provide a sharp and well-defined platform to bloom students as variegated human assets.
  
  Bred-in-the-bone of intellectual excellence and embedded with the guidance of highly qualified faculty members, It endeavors to unlatch the inquisitiveness for prompting and encountering quality leadership & entrepreneurship.
  
  Bundelkhand University not only provides a lively and constructive ambience but also provides well-equipped library, sports facility, advance laboratories, state of the art campus and open-to-all stage for cultural and other co-curricular activities.`;

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
            <div className="vcsir_intro">Hon'ble Vice Chancellor</div>
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
