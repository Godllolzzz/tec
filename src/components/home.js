import React from "react";
import Carousel from "./carousel";
import Grid from "./grid";
import VCMessage from "./message";
import NavBar from "./NavBar";
import Footer from "./footer"



const Home = () => {
  return (
    <>
    <NavBar/>
      <Carousel />
      <Grid />
      <VCMessage />
      <Footer />
    </>
  );
};

export default Home;
