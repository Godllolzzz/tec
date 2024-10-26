import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./MediaCoverage.css";
import img1 from "./../newsimage/img1.jpg";
import img2 from "./../newsimage/img2.jpg";
import img3 from "./../newsimage/img3.jpg";
import img4 from "./../newsimage/img4.jpg";
import img5 from "./../newsimage/img5.jpg";
import img6 from "./../newsimage/img6.jpg";
import img7 from "./../newsimage/img7.jpg";
import img8 from "./../newsimage/img8.jpg";
import img9 from "./../newsimage/img9.jpg";
import img10 from "./../newsimage/img10.jpg";
import img11 from "./../newsimage/img11.jpg";
import img12 from "./../newsimage/img12.jpeg";
import img13 from "./../newsimage/img13.jpeg";
import img14 from "./../newsimage/img14.jpeg";
import img15 from "./../newsimage/img15.jpeg";
import img16 from "./../newsimage/img16.jpeg";
import img17 from "./../newsimage/img17.jpeg";
import img18 from "./../newsimage/img18.jpeg";
import img19 from "./../newsimage/img19.jpeg";
import img20 from "./../newsimage/img20.jpeg";
import img21 from "./../newsimage/img21.jpeg";
const MediaCoverage = () => {
  const compliMentData = [
      img4,
      img7,
    img2,
    img3,
    img5,
    img6,
    img8,
    img9,
    img10,
    img1,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
  ];

  return (
    <div>
      <NavBar />
      <h2 className="developers-heading"> Media Coverage</h2>
      <div className="compliment_gallery">
        {compliMentData.map((image, index) => (
          <div key={index} className="compliment_gallery_item">
            <img src={image} alt={`compliment ${index + 1}`} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MediaCoverage;
