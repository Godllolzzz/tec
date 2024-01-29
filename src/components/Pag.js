import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import firstimg from "../images/logo_1.png";
import secondimg from "../images/logo2.jpg";
import thirdimg from "../images/logo3_.png";
import fourthimg from "../images/logo4_.png";
import fifthimg from "../images/logo5_.png";
import sixthimg from "../images/logo6_.png";
import seventhimg from "../images/logo7_.png";
import eighthimg from "../images/lavsir.jpg";

import "./Pag.css";

const Pag = () => {
  return (
    <div>
      <NavBar />
      <div className="pag">
        <h2>PAG Members</h2>
        <div className="pag-logo-1-1-a">
          <img src={firstimg}></img>
          <div>
            <b>Prof. Mukesh Pandey </b>
          </div>
          <div>Hon'ble Vice-Chancellor</div>
        </div>

        <div className="pag-logo-1">
          <div style={{ marginLeft: "2rem" }} className="pag-logo-1-1">
            <img style={{borderRadius:"8px"}} src={secondimg}></img>
            <div>
              <b>Prof. C S Sharma</b>
            </div>
            <div>Indian Institute of Science, Hyderabad</div>
          </div>

          <div style={{ marginLeft: "3rem" }} className="pag-logo-1-2">
            <img src={thirdimg}></img>
            <div>
              <b>Dr. Anita Agarwal</b>{" "}
            </div>
            <div>Department of Science & Technology</div>
          </div>
          <div className="pag-logo-1-3">
            <img src={fourthimg}></img>
            <div>
              {" "}
              <b>Dr. Krishna Kanth Pulicherla</b>
            </div>
            <div>Department of Science & Technology</div>
          </div>
        </div>

        <div className="pag-logo-2">
          <div className="pag-logo-2-1">
            <img src={fifthimg}></img>
            <div>
              <b>Prof. Deepak Chitkara</b>
            </div>
            <div>TEC Coordinator</div>
            <div>BITS Pilani</div>
          </div>
          <div className="pag-logo-2-2">
            <img src={sixthimg}></img>
            <div>
              <b>Dr. A. Abhyankar</b>
            </div>
            <div>TEC Coordinator</div>
            <div>University of Pune</div>
          </div>

          {/* <div className="pag-logo-2-3">
                  <img src={seventhimg}></img>
                  <div><b>Prof. Sunil Kabia</b></div>
                  <div>Director IQAC</div>
                  <div>Bundelkhand University</div>
                </div>

                <div className="pag-logo-2-4">
                  <img src={eighthimg}></img>
                  <div><b>Dr. Lavkush Dwivedi</b></div>
                  <div>TEC Co-Coordinator</div>
                  <div>Bundelkhand University</div>
                </div> 
                 */}
        </div>
      </div>
      <div className="pag-table">
        <table className="core-committee-table" border="1">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Details </th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>
                Prof. Mukesh Pandey<br></br>
                Hon'ble Vice-Chancellor, Bundelkhand University
              </td>
              <td>Chairperson</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>
                Prof. C S Sharma<br></br>
                Indian Institute of Science, Hyderabad
              </td>
              <td>
                TEC-EAG Expert<br></br>
                (Nominated by DST)
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>
                Dr. Anita Aggarwal
                <br></br>
                TDT Division, DST, Govt. of India
              </td>
              <td>DST Representative </td>
            </tr>

            <tr>
              <td>4.</td>
              <td>
                Dr. Krishna Kanth Pulicherla<br></br>
                TDT Division, DST, Govt. of India
              </td>
              <td>DST Representative </td>
            </tr>
            <tr>
              <td>5.</td>
              <td>
                Dr. A. Abhyankar<br></br>
                TEC Coordinator, Pune University{" "}
              </td>
              <td>DST Nominee</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>
                Dr. Deepak Chitkara<br></br>
                TEC Coordinator, BITS, Pilani{" "}
              </td>
              <td>DST Nominee</td>
            </tr>

            <tr>
              <td>7.</td>
              <td>Finance Officer, Bundelkhand University, Jhansi </td>
              <td>Permanent Invitee</td>
            </tr>
            <tr>
              <td>8.</td>
              <td>Registrar, Bundelkhand University, Jhansi </td>
              <td>Permanent Invitee</td>
            </tr>
            <tr>
              <td>9.</td>
              <td>
                Dr. Ved Prakash Dwivedi <br></br>
                Shree Baidyanath Ayurved Bhavan, Pvt. Ltd.
              </td>
              <td>
                Industry Member (Shree Baidyanath Ayurved Bhavan, Pvt. Ltd.)
              </td>
            </tr>

            <tr>
              <td>10.</td>
              <td>Shri K A Rafe</td>
              <td>General Manager (BHEL, Jhansi)</td>
            </tr>
            <tr>
              <td>11.</td>
              <td>
                Dr. P.P. Jambulkar<br></br>
                Associate Professor, Dept. of Plant Pathology, RLBCAU, Jhansi
              </td>
              <td>Member of the partner Institute (RLBCAU, Jhansi)</td>
            </tr>
            <tr>
              <td>12.</td>
              <td>
                Dr. K. Rajarajan<br></br>
                Senior Scientist, Division of Tree Improvement Research, CAFRI
                Jhansi
              </td>
              <td>Member of the partner Institute (CAFRI, Jhansi)</td>
            </tr>
            <tr>
              <td>13.</td>
              <td>
                Dr. Prabhakant Pathak<br></br>
                Principal Scientist, Agricultural Structure & Process
                Engineering, IGFRI, Jhansi
              </td>
              <td>Member of the partner Institute (IGFRI, Jhansi)</td>
            </tr>
            <tr>
              <td>14.</td>
              <td>
                Prof. Sanjay Kumar Gupta
                <br></br>Dept. of Computer Science & Engineering, BIET, Jhansi
              </td>
              <td>Member of the partner Institute (BIET, Jhansi) </td>
            </tr>
            <tr>
              <td>15.</td>
              <td>
                Dr. Vijay Kumar
                <br></br>Research Officer, CRAS-CARI, Jhansi
              </td>
              <td>
                Member of the partner Institute <br></br>(Central Ayurved
                Research Institute, Jhansi)
              </td>
            </tr>
            <tr>
              <td>16.</td>
              <td>
                Prof. Sunil Kabia<br></br>
                Professor of Tourism & Hotel Management<br></br>
                Director, Incubation Centre Bundelkhand University, Jhansi
              </td>
              <td>Management Representative</td>
            </tr>
            <tr>
              <td>17.</td>
              <td>
                Dr. Lavkush Dwivedi <br></br>
                Department of Biomedical Sciences Bundelkhand University, Jhansi
              </td>
              <td>TEC Co-Coordinator/ Coordinator</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default Pag;
