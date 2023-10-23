import React from "react";
import committelogo from '../images/CoreCommity.jpg'
import NavBar from "./NavBar";
import Footer from "./footer";
import './CoreCommitte.css';

const CoreCommitte=()=>{
    return(
         <div>
            <NavBar/>
            <div className="core-heading"> <h1>Committees</h1></div>
            <hr style={{width:"60%",border:"2px solid black",marginTop:"2rem"}}></hr>
              <div className="core-committe">
                <img src={committelogo}></img>
              </div>
              <Footer/>
         </div>
    )
};

export default CoreCommitte;

