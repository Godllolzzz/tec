import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import "./training_plan.css"
import training_image from "../images/training_image.jpg"
import training_top_image from "../images/training_top_image.jpg"

const TrainingPlan = () => {
    return (
        <>
        <NavBar />
        <div className="training-top-image">
        <img src={training_top_image} alt="training-top-image"></img>
      </div>
      <div className="training-main-heading">Training Plan</div>
      <div className="training-image-container">
        <img src={training_image} alt="training-image"></img>
      </div>
        <Footer />
        </>
    )
}
export default TrainingPlan;