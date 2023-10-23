import React from "react";
import Carousel from "./carousel";
import Grid from "./grid";
import VCMessage from "./message";
import NavBar from "./NavBar";
import Footer from "./footer"
import img1 from "../images/WhatsApp Image 2023-10-17 at 15.14.18_5b210523.jpg"
import img3 from "../images/WhatsApp Image 2023-10-17 at 15.14.18_e13e5050.jpg"
import img2 from "../images/WhatsApp Image 2023-10-17 at 15.14.18_9a4e25c7.jpg"
import './home.css'


const Home = () => {
  return (
    <>
    <NavBar/>
      <Carousel />
      {/* <Grid /> */}
      <VCMessage />
      <div className="patents-highlights">
        <h1> OUR PATENTS</h1>
      <hr
          style={{ width: "70%", height: "4px", backgroundColor: "#03174F" }}
        ></hr>
        <div className="patents-highlights-container">
          <div className="patents-highlights-image">
            <img src={img1}></img>
          </div>
          <div className="patents-highlights-image">
            <img src={img2}></img>
          </div>
          <div className="patents-highlights-image">
            <img src={img3}></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
