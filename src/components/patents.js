import React from "react";
import img1 from "../images/patent1.jpg";
import img2 from "../images/patent2.jpg";
import img3 from "../images/patent3.jpg";
import "./patent.css"


const Patents = () => {
    return (
        <div className="outer-patent-container">
            <h1 className="patent-main-heading">Our Patents</h1>
        <div className="patents-container">
            <div className="patent-container">
                <div><img src={img1} alt="patent_image"></img></div>
                <div></div>
            </div>
            <div  className="patent-container">
                <div className="img-container"><img src={img2} alt="patent_image"></img></div>
                <div></div>
            </div>
            <div  className="patent-container">
                <div><img src={img3} alt="patent_image"></img></div>
                <div></div>
            </div>
        </div>
        <div className="see_more">See More...</div>
        </div>
    )
}
export default Patents;