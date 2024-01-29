import react from "react";
import sushantimg from "../images/sushant1.jpg";
import praveenimg from "../images/Praveen.jpg";
import rohitimg from "../images/rohit1.jpg";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./StudentsTeam.css";

const StudentsTeam = () => {
  return (
    <>
      <NavBar />
      <div className="students-heading">Students-Team</div>
      <div className="Student-outer">
        <div className="student-inner">
          <img src={sushantimg}></img>
          <div className="student-name">Sushant Kumar</div>
          <div>
            <b>B.Tech CSE</b>
          </div>
          <div>
            <b>Full Stack Developer</b>
          </div>
        </div>
        <div className="student-inner">
          <img src={praveenimg}></img>
          <div className="student-name">Praveen Chauhan</div>
          <div>
            <b>B.Tech CSE</b>
          </div>
          <div>
            <b>Full Stack Developer</b>
          </div>
        </div>

        <div className="student-inner">
          <img src={rohitimg}></img>
          <div className="student-name">Rohit Khare</div>
          <div>
            <b>Student</b>
          </div>
          <div>
            <b>Bundelkhand University</b>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentsTeam;
