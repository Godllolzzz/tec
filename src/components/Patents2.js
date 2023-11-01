import React from "react";
import img1 from "../images/patent1.jpg";
import img2 from "../images/patent2.jpg";
import img3 from "../images/patent3.jpg";
import "./Patents2.css"
import NavBar from "./NavBar";
import Footer from "./footer";


const Patents2 = () => {
    return (
        <>
        <NavBar/>
        <div className="outer-patents2-container">
            <h1 className="patents2-main-heading">Our Patents</h1>
        <div className="patents2-container">
            <div className="patents2-container">
                <div><img src={img1} alt="patents2_image"></img></div>
                <div></div>
            </div>
            <div  className="patents2-container">
                <div className="img-container"><img src={img2} alt="patents2_image"></img></div>
                <div></div>
            </div>
            <div  className="patents2-container">
                <div><img src={img3} alt="patents2_image"></img></div>
                <div></div>
            </div>
        </div>
        <div className="see_more"><a href="http://bujhansi.co.in/bujhansi.ac.in/en/page/patents.html">See more...</a></div>
        </div>
        <Footer/>
        </>
    )
}
export default Patents2;