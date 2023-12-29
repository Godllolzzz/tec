import react from "react";
import sushantimg from "../images/Sushant.jpg";
import praveenimg from "../images/Praveen.jpg"
import NavBar from "./NavBar";
import Footer from "./footer";
import "./StudentsTeam.css";

const StudentsTeam=()=>{
    return(
           <>
           <NavBar/>
           <div className="students-heading">Students-Team</div>

<div className="Student-details">
   
<div className="student1-img">
    <img src={sushantimg}></img>
    <div className="student-name">Sushant Kumar</div>
    <div><b>B.Tech CSE</b></div>
    <div><b>Full Stack Developer</b></div>
</div>
<div className="student2-img">
    <img src={praveenimg}></img>
    <div className="student-name">Praveen Chauhan</div>
    <div><b>B.Tech CSE</b></div>
    <div><b>Full Stack Developer</b></div>
</div>


</div>
<Footer/>



           </>
    )
};


export default StudentsTeam;