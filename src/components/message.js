import React, { useState, useEffect, useRef } from "react";
import "./message.css";
import img1 from "../images/vcsir.jpg";

const VCMessage = () => {
  const [text, setText] = useState("");
  const content = `Dear Website Visitor, Warm Welcome!!

  Greetings from me and Bundelkhand University!!
  
  It is really a matter of honor and immense pleasure that destiny has given me an opportunity to lead the Bundelkhand University, Jhansi (UP). Although I joined as the Vice Chancellor of this renowned university but somewhere at the core of my heart, actually I want to serve this university as a facilitator between the university and society.
  
  In the continuing task of nation building, Bundelkhand University is trying to promote excellence in higher education for a vibrant and inclusive society through knowledge creation and dissemination. It is making sincere efforts to contribute its mite by providing the right kind of human resources. It is striving hard to impart quality education to meet national and global challenges, towards accomplishing its mission. For students, the degree represents certification of competence, and a passport to advanced education or gainful employment and livelihood and prosperity. They have an important role to play in the development of the Nation and hence have to handle their future with confidence and capabilities.
  
  Education is meant to inculcate right values among students to produce socially sensitive citizens. Thus it encourages not only curricular activities, but also co- curricular, extra-curricular and extension activities. Bundelkhand University provides quite kindred academic circle for the evolution of future incitements to outrun global standards. The university has carved out an alcove among the comity of universities to provide a sharp and well-defined platform to bloom students as variegated human assets.
  
  Bred-in-the-bone of intellectual excellence and embedded with the guidance of highly qualified faculty members, It endeavors to unlatch the inquisitiveness for prompting and encountering quality leadership & entrepreneurship.
  
  Bundelkhand University not only provides a lively and constructive ambience but also provides well-equipped library, sports facility, advance laboratories, state of the art campus and open-to-all stage for cultural and other co-curricular activities.
  
  To ensure the comprehensive development here we ignite the passion in students and froth them out as a congregation of world leaders. Over the decades, the gap between the higher education & job-ready aspirants has been escalating, this draws the attention to abide by the standards and qualities of academia.
  
  To reduce and fulfill this gap, we are committed to provide students a complete ecosystem to excel, at one end where they are living with the at-par facility in hostels with all amenities in parallel they are accessing the Hi-tech Innovation Centre for giving their ideas a real shape, at one end where they are learning in full equipped smart classes, seminar halls and auditoriums for knowledge sharing, in parallel they are using university's indoor and outdoor stadiums for keeping themselves fit and fine. At one end where they are accessing super enriched RFID enabled central library, in parallel they are enjoying annual fest KALRAV and showcasing their on- stage talents. Apart from all this, debates, discourses, conferences, seminars, expert lectures and interaction with corporate officials will also help us to reduce the gap.
  
  We continuously bulletinize course contents and various programs to meet the standing challenges for the forthcoming professionals. We make them tech-ready by filling them out with up-to-the-minute skills and other required soft-skills which are in-vogue.
  
  We try to allure the intellectual elites for teaching and research so that our students become juggernauts in the world of new interconnections. Our graduates, post- graduates and scholars will prove themselves in this borderless globe of technology.`;

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
      <div>
        <hr
          style={{ width: "70%", height: "4px", backgroundColor: "#03174F" }}
        ></hr>
      </div>
      <div ref={outerRef} className="outer">
        <div className="inner1">
          <div className="vcsir">
            <div className="vcsir_image">
              <img style={{ borderRadius: "50%" }} src={img1} alt="VC" />
            </div>
            <div className="vcsir_name">Prof. Mukesh Pandey</div>
            <div className="vcsir_intro">Vice Chancellor</div>
          </div>
        </div>
        <div className="inner2">
          <div>Dear Website Visitor, Warm Welcome!!</div>
          <br></br>
          <div>Greetings from me and Bundelkhand University!!</div>
          <br></br>
          {text}
        </div>
      </div>
    </>
  );
};

export default VCMessage;
