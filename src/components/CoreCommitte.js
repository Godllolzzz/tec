import React from "react";
import committelogo from "../images/CoreCommity.jpg";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./CoreCommitte.css";
import core_committee_top_image from "../images/core_committee_top_image.jpg";

const CoreCommitte = () => {
  return (
    <div>
      <NavBar />
      <div className="core-committee-top-image">
        <img
          src={core_committee_top_image}
          alt="core-committee-top-image"
        ></img>
      </div>
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
              <td>Co-ordinator</td>
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
              <td>Co-ordinator</td>
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
                Dr. Kaushal Tripathi<br></br>Assistant Prof. Mass Communication
                & Journalism
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
        <div className="core-committee-management-heading">
          Report of Core Committee Meeting
        </div>
        <table className="core-committee-table" border="1">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Core Committee Meeting 1</td>
              <td>May 18, 2023</td>
              <td>
                <a href="https://drive.google.com/file/d/1R5Uoz4GBoSwcJ1L96ByYW0XhcqbTEfzP/view?usp=sharing">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Core Committee Meeting 2</td>
              <td>May 20, 2023</td>
              <td>
                <a href="https://drive.google.com/file/d/1Yr2lsErmX6SHNH3wEfFW4ot2NJgWAa9V/view?usp=sharing">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Core Committee Meeting 3</td>
              <td>September 21, 2023</td>
              <td>
                <a href="https://drive.google.com/file/d/15KFTz3evZwBrB0Gae7_MOPLnxPjP5oJm/view?usp=sharing">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Core Committee Meeting 4</td>
              <td>October 3, 2023</td>
              <td>
                <a href="https://drive.google.com/file/d/1l0oPeU7op5OuElfpyg6H4vVNcJxqQjFD/view?usp=sharing">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Core Committee Meeting 5</td>
              <td>December 28, 2023</td>
              <td>
                <a href="https://drive.google.com/file/d/1Uil1Y6I7ZWvynIiNu-Dx2RHnn9VMKdfS/view?usp=sharing">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>6.</td>
              <td>Core Committee Meeting 6</td>
              <td>January 8, 2024</td>
              <td>
                <a href="https://drive.google.com/file/d/1yx32z_aU_oUq5k-nMr15F3Qq9ojGyYz_/view?usp=sharing">
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Footer />
      </div>
    </div>
  );
};

export default CoreCommitte;
