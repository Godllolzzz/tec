import React from "react";
import './Staff.css';
import firststaff from "../images/Nistha_mam.jpg";
import NavBar from "./NavBar";
import Footer from "./footer";


const Staff=()=>{
    return(
         <div>
            <NavBar/>
            <div className="staff-logo-1">
                <div className="staff-logo-1-1">
                  <img src={firststaff}></img>
                  <h3>Dr. Nishtha Vyas</h3>
                  <h5>Principal Project Associate</h5>
                  <h5>DST-BU-TEC</h5>
                </div>
                <hr style={{border:"2px solid black",height:"15rem",marginTop:"3rem"}}></hr>
                
                <div className="staff-logo-1-2">
                <img src="" alt="yet to pe added"></img>
                <h3>Prof. B. Gurumoorthy</h3>
                    </div>
               </div>
               <Footer/>
         </div>
    )
};

export default Staff;
