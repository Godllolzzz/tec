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
import img22 from "./../newsimage/Newscutting-images-0(1).jpg";
import img23 from "./../newsimage/Newscutting-images-0(2).jpg";
import img24 from "./../newsimage/Newscutting-images-0(3).jpg";
import img25 from "./../newsimage/Newscutting-images-0(4).jpg";
import img26 from "./../newsimage/Newscutting-images-0(5).jpg";
import img27 from "./../newsimage/Newscutting-images-0(6).jpg";
import img28 from "./../newsimage/Newscutting-images-0(7).jpg";
import img29 from "./../newsimage/Newscutting-images-0(8).jpg";
import img30 from "./../newsimage/Newscutting-images-0(9).jpg";
import img31 from "./../newsimage/Newscutting-images-0(10).jpg";
import img32 from "./../newsimage/Newscutting-images-0(11).jpg";
import img33 from "./../newsimage/Newscutting-images-0(12).jpg";
import img34 from "./../newsimage/Newscutting-images-0(13).jpg";
import img35 from "./../newsimage/Newscutting-images-0(14).jpg";
import img36 from "./../newsimage/Newscutting-images-0(15).jpg";
import img37 from "./../newsimage/Newscutting-images-0(16).jpg";
import img38 from "./../newsimage/Newscutting-images-0(17).jpg";
import img39 from "./../newsimage/Newscutting-images-0(18).jpg";
import img40 from "./../newsimage/Newscutting-images-0(19).jpg";
import img41 from "./../newsimage/Newscutting-images-0(20).jpg";
import img42 from "./../newsimage/Newscutting-images-0(21).jpg";
import img43 from "./../newsimage/Newscutting-images-0(22).jpg";
import img44 from "./../newsimage/Newscutting-images-0(23).jpg";
import img45 from "./../newsimage/Newscutting-images-0(24).jpg";
import img46 from "./../newsimage/Newscutting-images-0(25).jpg";

const MediaCoverage = () => {
  const compliMentData = [
    img11,
    img14,
    img16,
    img9,
    img2,
    img21,
    img8,
    img3,
    img5,
    img10,
    img15,
    img17,
    img20,
    img13,
    img18,
    img12,
    img19,
    img1,
    img6,
    img7,
    img4,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
  ];

  return (
    <div>
      <NavBar />
      <div className="compliment_main">
        <h2 className="developers-heading"> Media Coverage</h2>
        <div className="compliment_gallery">
          {compliMentData.map((image, index) => (
            <div key={index} className="compliment_gallery_item">
              <img src={image} alt={`compliment ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MediaCoverage;
