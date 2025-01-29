import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import key_pic from "../documents/DST_Technology_Enabling_Centre-images-0.jpg";
import "./Keyindicators.css";

const Key_Indicator = () => {
  return (
    <>
      <NavBar />
      <div className="key_main">
        <div className="key_heading">Key Indicators</div>
        <div className="key_image">
          <img src={key_pic} alt="reloaded" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Key_Indicator;
