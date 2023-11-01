import React from "react";
import committelogo from "../images/CoreCommity.jpg";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./CoreCommitte.css";

const CoreCommitte = () => {
  return (
    <div>
      <NavBar />
      <h2 className="core-committee-heading"> Core Committee</h2>
      <div className="core-committee-outer">

      <div className="core-committee-management-heading">
        TEC Project Management Unit
      </div>
      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
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
            <td>
              Dr. Zakir Ali <br></br>Associate Professor, Engineering &
              Technology
            </td>
            <td>Co-Coordinator</td>
          </tr>
        </tbody>
      </table>
      <div className="core-committee-management-heading">
        TEC Training Management Unit
      </div>
      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>
              Dr. Sanjeev Srivastava <br></br> Associate Professor, Department
              of Physics
            </td>
            <td>Co-Coordinator</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>
              Dr. Anupam Vyas <br></br> Dy. Coordinator, IQAC
            </td>
            <td>Co-Coordinator</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>
              Dr. Sandeep Agarwal <br></br> Coordinator, Training & Placement
              Cell
            </td>
            <td>Co-Coordinator</td>
          </tr>
        </tbody>
      </table>
      <div className="core-committee-management-heading">
        TEC Awareness & Publicity Unit
      </div>
      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>
              Dr. Anu Singla<br></br> Associate Professor, Forensic Science &
              Criminology
            </td>
            <td>Coordinator</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>
              Dr. Kaushal Tripathi<br></br>Assistant Prof. Mass Communication &
              Journalism
            </td>
            <td>Co-Coordinator</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>
              Dr. Sumiran Srivastav<br></br>Assistant Professor, Biochemistry
            </td>
            <td>Co-Coordinator</td>
          </tr>
        </tbody>
      </table>
      <div className="core-committee-management-heading">
        TEC Survey & Publicity Unit
      </div>
      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>
              Dr. Kavya Dube<br></br>Associate Prof. Education, BU Jhansi
            </td>
            <td>Coordinator</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>
              Dr. Era Tiwari<br></br>Asst. Prof. Economics & Finance
            </td>
            <td>Co-Coordinator</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>
              Er. Vishal Arya<br></br>Assistant Professor, Engineering & Tech.
            </td>
            <td>Co-Coordinator</td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
      </div>
  );
};

export default CoreCommitte;
