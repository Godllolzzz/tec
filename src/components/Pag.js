import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import firstimg from "../images/logo_.jpg";
import secondimg from "../images/logo3_.jpg";
import thirdimg from "../images/logo2_.jpg";
import fourthimg from "../images/logo1_.jpg";
import fifthimg from "../images/logo4_.jpg";
import sixthimg from "../images/logo5_.jpg";
import seventhimg from "../images/logo6_.jpg";


import "./Pag.css";


const Pag=()=>{
    return(
        <div>
            <NavBar/>
            <div className="pag">
               <div className="pag-logo-1">
                <div className="pag-logo-1-1">
                  <img src={firstimg}></img>
                  <h3>Prof. Mukesh Pandey</h3>
                  <h5>Vice Chancellor</h5>
                </div>
                <hr style={{border:"2px solid black",height:"15rem",marginTop:"3rem"}}></hr>
                
                <div className="pag-logo-1-2">
                <img src={secondimg}></img>
                <h3>Prof. B. Gurumoorthy</h3>
                    </div>
               </div>
                 
               <div className="pag-logo-1">
                <div className="pag-logo-1-1">
                  <img src={thirdimg}></img>
                  <h3>Dr. A. Abhyankar</h3>
                  <h5>TEC Coordinator</h5>
                  <h5>University of Pune</h5>
                </div>
                <hr style={{border:"2px solid black",height:"15rem",marginTop:"3rem"}}></hr>
                <div className="pag-logo-1-2">
                <img src={fourthimg}></img>
                <h3>Prof. Deepak Chitkara</h3>
                <h5>TEC Coordinator</h5>
                  <h5>BITS Pilani</h5>
                    </div>
               </div>
               
               <div className="pag-logo-1">
                <div className="pag-logo-1-1">
                  <img src={fifthimg}></img>
                  <h3>Dr. Anita Aggarwal </h3>
                  <h5>Department of Science & Technology</h5>
                </div>
                <hr style={{border:"2px solid black",height:"15rem",marginTop:"3rem"}}></hr>
                <div className="pag-logo-1-2">
                <img src={sixthimg}></img>
                <h3> Dr. Krishna Kanth Pulicherla</h3>
                <h5>Department of Science & Technology</h5>

                    </div>
                    
               </div>
               <div className="pag-logo-1-1">
                  <img src={seventhimg}></img>
                  <h3>Prof. Sunil Kabia </h3>
                  <h5>Director IQAC, BU Jhansi</h5>
                </div>
                </div>
                  
            
            <Footer/>
        </div>

    );
};

export default Pag;