import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./trl_plan.css";
import workflow_image from "../images/TRL Enhancement Plan_page-0001.jpg";
import workflow_top_image from "../images/workflow_top_image.jpg";

const TRLPlan = () => {
  return (
    <>
      <NavBar />
      <div className="workflow-top-image">
        <img src={workflow_top_image} alt="workflow-top-image"></img>
      </div>
      <div className="workflow-main-heading">TRL Enhancement Plan</div>
      <div className="workflow-image-container">
        <img src={workflow_image} alt="workflow-image"></img>
      </div>
      <Footer />
    </>
  );
};
export default TRLPlan;
