import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import msmelogo from "../images/msme.jpg";
// import msmelogo from "../images/msme.jpeg";
import "./msme.css";
import file from "../assests/IndustryDetails.xlsx";
import { fetchDataAndExtract } from "../utils/extractXlsxData";

const Msme = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const d = await fetchDataAndExtract(file);
      d.shift();
      setData(d);
    };

    fetchData();
  }, []);
  // console.log(data); // Do something with the extracted data
  return (
    <>
      <NavBar />
      <div className="Mou-logo">
        <img src={msmelogo} alt="reloded"></img>
      </div>
      <h2 className="msme-heading"> MSME's</h2>
      <table className="core-committee-table" border="1">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Entrepreneurs Name</th>
            <th>Enterprise</th>
            <th>Area</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>{item["Industry Details"]}</td>
              <td>{item["__EMPTY"]}</td>
              <td>{item["__EMPTY_1"]}</td>
              <td>{item["__EMPTY_2"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </>
  );
};

export default Msme;
