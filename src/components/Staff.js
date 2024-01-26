import React from "react";
import './Staff.css';
import firststaff from "../images/Nistha_mam.png";
import secondstaff from "../images/Shrikanth_sir.jpg"
import NavBar from "./NavBar";
import Footer from "./footer";


const Staff=()=>{
    return(
         <div>
            <NavBar/>
            <div className="staff-main">
            <div className="Staff-heading">TEC Staff</div>
            </div>
            
            <div className="staff-logo-1">
              
                <div className="staff-logo-1-1">
                  <img src={firststaff}></img>
                  <div><b>Dr. Nishtha Vyas</b></div>
                  <div>Principal Project Associate</div>
                  <div>DST-BU TEC</div>
                </div>
                {/* <hr style={{border:"2px solid black",height:"15rem",position:"absolute",left:"50%",bottom:"20%"}}></hr> */}
                
                <div className="staff-logo-1-2">
                <img src={secondstaff} alt="yet to pe added"></img>
                <div><b>Dr. K Shrikanth</b></div>
                <div>Principal Project Associate</div>
                  <div>DST-BU TEC</div>
                    </div>
               </div>
               <Footer/>
         </div>
    )
};

export default Staff;
