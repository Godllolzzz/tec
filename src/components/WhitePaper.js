import React from "react";
import img6 from "../documents/Chandra_twitter.jpg";
import compliment1 from "../documents/compliment1.png";
import compliment2 from "../documents/compliment2.jpeg";
import NavBar from "./NavBar";
import "./WhitePaper.css";
import Footer from "./footer";
import img1 from "../images/comp1.jpeg";
import img2 from "../images/comp2.jpeg";
import img3 from "../images/comp3.jpeg";
import img4 from "../images/comp4.jpeg";
import img5 from "../images/comp5.jpeg";

const WhitePaper = () => {
  const compliMentData = [img6, img4, img3, img2, img5, img1];

  return (
    <>
      <NavBar />
      <div className="whitepaper_main">
        <div className="whitepaper_main1">White Paper</div>
        <div className="pdfs">
          <h2>
            Problems with Bundelkhand Region and their Technical Solutions{" "}
          </h2>

          <a href="https://drive.google.com/file/d/1nxSAxeEWzn2SHOgxPI_C-ZfNmhTo010J/view?usp=sharing">
            Problems with Bundelkhand Regions and their Technical Solutions
          </a>
        </div>

        <div className="pdfs">
          <h2>
            Problems with Bundelkhand Region and their Technical Solutions{" "}
          </h2>

          <a href="https://drive.google.com/file/d/1jXCXZPVVd3WJLzqxvKK7YjAXwtEczWZG/view?usp=sharing">
            Policy Perspectives for MSME's
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WhitePaper;
