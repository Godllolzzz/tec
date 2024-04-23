import React from "react";
import { useState,useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import file from "../assests/developers.xlsx"
import { fetchDataAndExtract } from "../utils/extractXlsxData";
import "./DevelopersTeam.css"

const DevelopersTeam=()=>{
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const d = await fetchDataAndExtract(file);
        d.shift();
        d.shift();
        d.shift();
        setData(d);
      };
  
      fetchData();
    }, []);

    console.log(data)

    return(
        <div>
            <NavBar/>
            <h2 className="developers-heading"> Developer's Team</h2>
      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Department</th>
            <th>Branch</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>{item["__EMPTY"]}</td>
              <td>{item["__EMPTY_1"]}</td>
              
              <td>{item["__EMPTY_3"]}</td>
              <td>{item["__EMPTY_4"]}</td>
              <td>{item["__EMPTY_5"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
            <Footer/>
        </div>
    )
}

export default DevelopersTeam