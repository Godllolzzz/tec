import React from "react";
import Carousel from "./carousel";
import VCMessage from "./message";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./home.css";
import Patents from "./patents";
import ServiceOverview from "./ServiceOverview";
import HomeOverview from "./home_overiew";

import ContactUsHome from "./ContactUsHome";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      {/* <Patents />
      <ServiceOverview /> */}
      <HomeOverview />
      <VCMessage />
      <ContactUsHome/>
      <Footer />
    </>
  );
};

export default Home;
