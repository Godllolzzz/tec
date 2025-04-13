import React from "react";
import img6 from "../documents/Chandra_twitter.jpg";
import compliment2 from "../documents/compliment2.png";
import compliment3 from "../documents/studentscompliment.jpeg";
import compliment4 from "../documents/compliment4.jpeg";
import NavBar from "./NavBar";
import "./Compliment.css";
import Footer from "./footer";
import img1 from "../images/comp1.jpeg";
import img2 from "../images/comp2.jpeg";
import img3 from "../images/comp3.jpeg";
import img4 from "../images/comp4.jpeg";
import img5 from "../images/comp5.jpeg";

const Compliment = () => {
  const compliMentData = [img6, img4, img3, img2, img5, img1];

  return (
    <>
      <NavBar />
      <div className="compliment_main">
        <div className="compliment_main1">Experts Compliment</div>

        <div className="compliment_gallery">
          {compliMentData.map((image, index) => (
            <div key={index} className="compliment_gallery_item">
              <img src={image} alt={`compliment ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="compliment_img">
          {/* <div className='compliment_img1'>
            <img className='img1' src={compliment1} alt='reloading' />
          </div> */}
          <div className="compliment_img2">
            <a href="https://www.youtube.com/watch?v=E8fNtkb8LFY">
              <img className="img2" src={compliment2} alt="reloading" />
            </a>
          </div>
          <div className="compliment_img3">
            <a href="https://drive.google.com/file/d/1tfkwctMWN7dJ_HvvaJpEB_w_AMmXu7_Q/view?usp=drivesdk">
              <img className="img3" src={compliment3} alt="reloading" />
            </a>
          </div>
          <div className="compliment_img2">
            <a href="https://youtu.be/p4wSOdaShxY?si=byZUu0sQ9Ej_MgYt">
              <img className="img2" src={compliment4} alt="reloading" />
            </a>
          </div>
          {/* <div className='compliment_img3'>
            <a href='https://drive.google.com/file/d/1tfkwctMWN7dJ_HvvaJpEB_w_AMmXu7_Q/view?usp=drivesdk'>
              <img className='img3' src={compliment3} alt='reloading' />
            </a>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Compliment;
