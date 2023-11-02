import React from "react";
import committelogo from "../images/CoreCommity.jpg";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./CoreCommitte.css";
import "./ResourcePersons.css"
import resourcelogo from "../images/resourcepersons.jpg"

const ResourcePersons = () => {
  return (
    <div>
      <NavBar />
      <div className="resource-logo">
        <img src={resourcelogo} alt="reloaded"></img>
      </div>
      <h2 className="resource-person-heading">External Experts</h2>

      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Resource Persorns</th>
            <th>Affilation</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>1.</td>
            <td>
            Prof. A.C. Pandey  
             
            </td>
            <td>Institute of Earth Science</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>
            Prof. Anand Kar 
            </td>
            <td>Institute of Management</td>

          </tr>
          <tr>
            <td>3.</td>
            <td>Prof. U.N. Dwivedi </td>
            <td>Institute of Architecture and Town planning</td>

          </tr>
          

          <tr>
            <td>4.</td>
            <td>Prof. Yogesh C. Goswami</td>
            <td>Institute of Environmental Science</td>
          </tr>
          <tr>
          <td>5.</td>
            <td>Dr. D. Harnath </td>
            <td>Institute of Education</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Dr. Mukesh K. Meghvanshi </td>
            <td>Dept. of Physics</td>
          </tr>
          
          <tr>
            <td>7.</td>
            <td>Dr. Naveen Dhingra </td>
            <td>Institute of Pharmacy</td>
          </tr>
<tr>
            <td>8.</td>
            <td>Dr. Ranjana Goswami  </td>
            <td>Dept. of Microbiology</td>
          </tr>
          
          <tr>
            <td>9.</td>
            <td>Dr. Vinit Kumar  </td>
            <td>Institute of Forensic Science & Criminology</td>
          </tr>
          
           
          
           

          
         
        </tbody>
      </table>

      <h2 className="resource-person-heading">Internal Experts</h2>
      
      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Resource Persorns</th>
            <th>Affilation</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>1.</td>
            <td>
            Prof. S.P. Singh 
             
            </td>
            <td>Institute of Earth Science</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>
            Prof. Poonam Puri
            </td>
            <td>Institute of Management</td>

          </tr>
          <tr>
            <td>3.</td>
            <td>Prof. Soma Anil Mishra</td>
            <td>Institute of Architecture and Town planning</td>

          </tr>
          

          <tr>
            <td>4.</td>
            <td>Dr. Vinit Kumar</td>
            <td>Institute of Environmental Science</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Dr. Sanjeev Srivastava </td>
            <td>Dept. of Physics</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Dr. Rishi Saxena </td>
            <td>Dept. of Microbiology</td>
          </tr>
          
          <tr>
            <td>7.</td>
            <td>Dr. Anu Singla </td>
            <td>Institute of Forensic Science & Criminology</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>Dr. Kavya Dubey </td>
            <td>Institute of Education</td>
          </tr>
          <tr>
            <td>9.</td>
            <td>Dr. Peeyush Bhardwaj </td>
            <td>Institute of Pharmacy</td>
          </tr>

          <tr>
            <td>10.</td>
            <td>Dr. Noopur Gautam</td>
            <td>Institute of Food Science & Technology</td>
          </tr>
          <tr>
            <td>11.</td>
            <td>Dr. Shambhu Nath Singh</td>
            <td>Institute of Economics & Finance</td>
          </tr>
          <tr>
            <td>12.</td>
            <td>Dr. Prakash Chandra</td>
            <td>Dept. of Chemistry</td>
          </tr>
          <tr>
            <td>13.</td>
            <td>Dr. Rajesh Kumar Pandey </td>
            <td>Dept. of Botany</td>
          </tr>
          <tr>
            <td>14.</td>
            <td>Dr. Sumiran Srivastava </td>
            <td>Dept. of Biochemistry</td>
          </tr>
          <tr>
            <td>15.</td>
            <td>Dr. Era Tiwari</td>
            <td>Institute of Economics & Finance</td>
          </tr>
          <tr>
            <td>16.</td>
            <td>Dr. Sandeep Agrawal</td>
            <td>Institute of Economics & Finance</td>
          </tr>
          <tr>
            <td>17.</td>
            <td>Dr. Kaushal Tripathi </td>
            <td>Institute of Mass Communicat Journalism</td>
          </tr>
          <tr>
            <td>18.</td>
            <td>Er. Brajendra Shukla</td>
            <td>Dept. of Biotech Engineering, IET</td>
          </tr>
          <tr>
            <td>19.</td>
            <td>Dr. Anupam Vyas</td>
            <td>Dept. of Electronics & Communication, IET</td>
          </tr>
          <tr>
            <td>20.</td>
            <td>Dr. Zakir Ali</td>
            <td>Dept. of Electronics & Communication, IET</td>
          </tr>
          <tr>
            <td>21.</td>
            <td>Dr. Sadik Khan</td>
            <td>Dept. of Computer Science, IET</td>
          </tr>
          <tr>
            <td>22.</td>
            <td>Er. Vishal Arya </td>
            <td>Dept. of Electronics & Communication, IET</td>
          </tr>
         
         
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default ResourcePersons;

