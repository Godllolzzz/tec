import React from "react";
import Carousel from "./carousel";
import VCMessage from "./message";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./home.css";
import Patents from "./patents";
import HomeOverview from "./home_overiew";

import ContactUsHome from "./ContactUsHome";
import ImageSlider from "./ImageSlider";
import VideoPlayer2 from "./VideoPlayer2";
import VideoPlayer from "./VideoPlayer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <HomeOverview />
      <VCMessage />
      {/* <ImageSlider /> */}
      <ContactUsHome />
      <VideoPlayer2 />
      <VideoPlayer videoId="13jSLS_kseo" />
      <Footer />
    </>
  );
};

export default Home;
