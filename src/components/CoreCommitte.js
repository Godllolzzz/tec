import React from "react";
import committelogo from "../images/CoreCommity.jpg";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./CoreCommitte.css";

const CoreCommitte = () => {
  return (
    <div>
      <NavBar />
      
      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          <tr>TEC Project Management Unit</tr>
          <tr>
            <td>1.</td>
            <td>
              Dr. Shambhu Nath Singh
              <br></br>
              Associate Professor, Economics & Finance
            </td>
            <td>Coordinator</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>
              Dr. Noopur Gautam<br></br>
              Associate Professor, Food Sci And Technology
            </td>
            <td>Co-Coordinator</td>

          </tr>
          <tr>
            <td>3.</td>
            <td>Dr. Zakir Ali <br></br>Associate Professor, Engineering & Technology</td>
            <td>Co-Coordinator</td>

          </tr>
          <tr>TEC Training Management Unit</tr>

          <tr>
            <td>1.</td>
            <td>Dr. Sanjeev Srivastava <br></br> Associate Professor, Department of Physics</td>
            <td>Co-Coordinator</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Dr. Anupam Vyas <br></br> Dy. Coordinator, IQAC</td>
            <td>Co-Coordinator</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Dr. Sandeep Agarwal <br></br> Coordinator, Training & Placement Cell</td>
            <td>Co-Coordinator</td>
          </tr>
          <tr>
            TEC Awareness & Publicity Unit
          </tr>
          <tr>
            <td>1.</td>
            <td>Dr. Anu Singla<br></br> Associate Professor, Forensic Science & Criminology</td>
            <td>Coordinator</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Dr. Kaushal Tripathi<br></br>Assistant Prof. Mass Communication & Journalism</td>
            <td>Co-Coordinator</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Dr. Sumiran Srivastav<br></br>Assistant Professor, Biochemistry</td>
            <td>Co-Coordinator</td>
          </tr>
          <tr>
            TEC Survey & Publicity Unit
          </tr>
          <tr>
            <td>1.</td>
            <td>Dr. Kavya Dube<br></br>Associate Prof. Education, BU Jhansi</td>
            <td>Coordinator</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Dr. Era Tiwari<br></br>Asst. Prof. Economics & Finance</td>
            <td>Co-Coordinator</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Er. Vishal Arya<br></br>Assistant Professor, Engineering & Tech.</td>
            <td>Co-Coordinator</td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default CoreCommitte;
