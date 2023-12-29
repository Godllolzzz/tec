import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./tot_plan.css";
import workflow_image from "../images/Work-Flow.jpg";
import workflow_top_image from "../images/workflow_top_image.jpg"

const ToTPlan = () => {
  return (
    <>
      <NavBar />
      <div className="workflow-top-image">
        <img src={workflow_top_image} alt="workflow-top-image"></img>
      </div>
      <div className="workflow-main-heading">Transfer of Technology</div>
      <div className="workflow-image-container">
        <img src={workflow_image} alt="workflow-image"></img>
      </div>
      <Footer />
    </>
  );
};
export default ToTPlan;
