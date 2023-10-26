import React from "react";
import project1 from "../images/mentalstresslogo.jpg"
import "./SanctionedProjects.css";


const SanctionedProjects=()=>{
    return(
       <div className="sanctioned-main-container">
           <div className="sanctioned-container">
            
            <div className="project-logo">
           <img src={project1}></img>
            </div>
            <div className="project-content">
                <h2>Identify students&#39; mental Stress - Dr Kavya Dube</h2>
                
            </div>
           </div>


       </div>
    )
};

export default SanctionedProjects;