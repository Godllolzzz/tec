import React from "react";
import Carousel from "./carousel";
import VCMessage from "./message";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./home.css";
import Patents from "./patents";
import HomeOverview from "./home_overiew";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <HomeOverview />
      <VCMessage />
      <Footer />
    </>
  );
};

export default Home;
