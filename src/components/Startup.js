import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import file from "../assests/basicstartups.xlsx";
import newStartups from "../assests/Startup_finallist_2k25.xlsx";
import { fetchDataAndExtract } from "../utils/extractXlsxData";
import "./Startup.css";

const Startup = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // Fetch both Excel sheets
      const [data1, data2] = await Promise.all([
        fetchDataAndExtract(file),
        fetchDataAndExtract(newStartups),
      ]);

      const merged = [...data1, ...data2];

      setData(merged);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <NavBar />
      <h2 className="developers-heading"> Startup</h2>
      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Start-UP Name</th>
            <th>Founder Name</th>
            <th>Mobile No.</th>
            <th>DIPP</th>
            <th>Start in UP</th>
            <th>Registration</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item["START-UP NAME"]}</td>
              <td>{item["FOUNDER NAME"]}</td>
              <td>{item["MOBILE NO"]}</td>
              <td>{item["DIPP"]}</td>
              <td>{item["START IN UP"]}</td>
              <td>{item["REGISTRATION"]}</td>
              <td>
                <a href={item["WEBSITE"]} target="_main">
                  {item["WEBSITE"]}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Startup;
