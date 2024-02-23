import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import compliment1 from "../documents/Chandra_twitter.jpg"
import compliment2 from "../documents/compliment2.png"
import NavBar from './NavBar';
import "./Compliment.css"
import Footer from './footer';



const Compliment=()=> {
    return (
      <>
      <NavBar/>
        <div className="compliment_main">
           <div className='compliment_main1'>
              Experts Compliment
               </div>
               <div className='compliment_img'>
               <div className='compliment_img1'>
                <img className='img1' src={compliment1} alt='reloding'/>
               </div>
               <div className='compliment_img2'>
                <a href='https://www.youtube.com/watch?v=E8fNtkb8LFY'>
                <img className='img2' src={compliment2}  alt='reloding'/>
                </a>
               
               </div>
               </div>


          </div>
          <Footer/>
          </>
      
           
      );
  
};

export default Compliment;