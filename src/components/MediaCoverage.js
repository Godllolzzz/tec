import React from "react";
import { useState,useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./MediaCoverage.css"
import ImageSlider from "./ImageSlider";

const MediaCoverage=()=>{
   

    return(
        <div>
            <NavBar/>
            <h2 className="developers-heading"> Media Coverage</h2>
             <ImageSlider/>
            <Footer/>
        </div>
    )
}

export default MediaCoverage;