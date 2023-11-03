import React from "react";
import Carousel from "./carousel";
import VCMessage from "./message";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./home.css";
import Patents from "./patents";
import HomeOverview from "./home_overiew";

import ContactUsHome from "./ContactUsHome";
import VideoPlayer from "./VideoPlayer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <VideoPlayer videoId="M3ygFVrfR6E?si=3hj0krRt9Yp8AeTJ" />
      <HomeOverview />
      <VCMessage />
      <ContactUsHome/>
      <Footer />
    </>
  );
};

export default Home;
