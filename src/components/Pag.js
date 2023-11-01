import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import firstimg from "../images/logo_1.png";
import secondimg from "../images/logo2_.png";
import thirdimg from "../images/logo3_.png";
import fourthimg from "../images/logo4_.png";
import fifthimg from "../images/logo5_.png";
import sixthimg from "../images/logo6_.png";
import seventhimg from "../images/logo7_.png";
import eighthimg from "../images/lavsir.jpg"


import "./Pag.css";


const Pag=()=>{
    return(
        <div>
            <NavBar/>
            <div className="pag">
              <h2>PAG Members</h2>
            <div className="pag-logo-1-1-a">
                  <img src={firstimg}></img>
                  <div>Prof. Mukesh Pandey </div>
                  <div>Vice Chancellor</div>
                </div>

               <div className="pag-logo-1">
                
                
                
                <div style={{marginLeft:"2rem"}} className="pag-logo-1-1">
                <img  src={secondimg}></img>
                <div>Prof. B. Gurumoorthy</div>
                    </div>

                    <div style={{marginLeft:"7rem"}} className="pag-logo-1-2">
                  <img src={thirdimg}></img>
                  <div>Dr. Anita Aggarwal </div>
                  <div>Department of Science & Technology</div>
                </div>
                <div className="pag-logo-1-3">
                <img src={fourthimg}></img>
                <div> Dr. Krishna Kanth Pulicherla</div>
                <div>Department of Science & Technology</div>

                    </div>
               </div>
                 
               <div className="pag-logo-2">
               <div className="pag-logo-2-1">
                <img src={fifthimg}></img>
                <div>Prof. Deepak Chitkara</div>
                <div>TEC Coordinator</div>
                  <div>BITS Pilani</div>
                    </div>
                <div className="pag-logo-2-2">
                  <img src={sixthimg}></img>
                  <div>Dr. A. Abhyankar</div>
                  <div>TEC Coordinator</div>
                  <div>University of Pune</div>
                </div>

                <div className="pag-logo-2-3">
                  <img src={seventhimg}></img>
                  <div>Dr. Kabia Dube</div>
                  <div>Director IQAC</div>
                  <div>Bundelkhand University</div>
                </div>

                <div className="pag-logo-2-4">
                  <img src={eighthimg}></img>
                  <div>Dr. LavKush Diwevedi</div>
                  <div>TEC Co-Coordinator</div>
                  <div>Bundelkhand University</div>
                </div>
                
                
               </div>
               
               
                    
               
              
                </div>
                  
            
            <Footer/>
        </div>

    );
};

export default Pag;