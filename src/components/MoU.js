import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import moulogo from "../images/Moulogo.jpg"
import "./Mou.css"

const MoU=()=>{
    return(
<>
 <NavBar/>
 
 <div className="Mou-logo">
  <img src={moulogo} alt="reloded"></img>
 </div>
 <h2 className="Mou-heading">MoU's</h2>

      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Memorandum of Understanding</th>
            
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>1.</td>
            <td>
            MoU between Bundelkhand University, Jhansi & Indian Grassland and Fodder Research Institute, Gwalior Road, Jhansi  
             
            </td>
            
          </tr>
          <tr>
            <td>2.</td>
            <td>
            MoU between Bundelkhand University, Jhansi & Rani Lakshmi Bai Central Agricultural University, Jhansi, Uttar Pradesh 
            </td>
            

          </tr>
          <tr>
            <td>3.</td>
            <td>MoU between Bundelkhand University, Jhansi  &  PHD Chamber of Commerce  and Industry, New Delhi </td>
            

          </tr>
          

          <tr>
            <td>4.</td>
            <td>MoU between Bundelkhand University, Jhansi &  ICAR-Central Agroforestry Research Institute, Jhansi, Uttar Pradesh</td>
           
          </tr>
          <tr>
          <td>5.</td>
            <td>MoU between Bundelkhand University, Jhansi & Veer Bahadur Singh Purvanchal University, Jaunpur </td>
           
          </tr>
          <tr>
            <td>6.</td>
            <td>MoU between Bundelkhand University, Jhansi & Chitkara University, Chandigarh, Punjab </td>
           
          </tr>
          
          <tr>
            <td>7.</td>
            <td>MoU between Bundelkhand University, Jhansi & P.K. University, Shivpuri (M.P) </td>
            
          </tr>
<tr>
            <td>8.</td>
            <td>MoU between Bundelkhand University, Jhansi & B.H.E.L. Jhansi  </td>
            
          </tr>
          
          <tr>
            <td>9.</td>
            <td>MoU between Bundelkhand University, Jhansi & Botho University is Botswana  </td>
            
          </tr>
          
           
          
           

          
         
        </tbody>
      </table>
      <Footer/>

</>
    );
};

export default MoU;