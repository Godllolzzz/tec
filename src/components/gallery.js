import React from "react";
import "./gallery.css";
import NavBar from "./NavBar";
import Footer from "./footer";
import img1 from "../galleryimage/A7402274.JPG";
import img2 from "../galleryimage/A7402281.JPG";
import img3 from "../galleryimage/A7402357.JPG";
import img4 from "../galleryimage/A7402379.JPG";
import img5 from "../galleryimage/A7403304.JPG";
import img6 from "../galleryimage/A7403320.JPG";
import img7 from "../galleryimage/A7403328.JPG";
import img8 from "../galleryimage/A7403332.JPG";
import img9 from "../galleryimage/A7403388.JPG";
import img10 from "../galleryimage/A7403400.JPG";
import img11 from "../galleryimage/A7403410.JPG";
import img12 from "../galleryimage/A7403494.JPG";
import img13 from "../galleryimage/A7403501.JPG";
import img14 from "../galleryimage/A7403529.JPG";
import img15 from "../galleryimage/DSC_0491.JPG";
import img16 from "../galleryimage/DSC_0492.JPG";
import img17 from "../galleryimage/DSC_0493.JPG";
import img18 from "../galleryimage/DSC_0494.JPG";
import img19 from "../galleryimage/DSC_0495.JPG";
import img20 from "../galleryimage/DSC_0496.JPG";
import img21 from "../galleryimage/DSC_0497.JPG";
import img22 from "../galleryimage/DSC_0498.JPG";
import img23 from "../galleryimage/DSC_0499.JPG";
import img24 from "../galleryimage/DSC_0500.JPG";
import img25 from "../galleryimage/DSC_0501.JPG";
import img26 from "../galleryimage/DSC_0502.JPG";
import img27 from "../galleryimage/DSC_0503.JPG";
import img28 from "../galleryimage/DSC_0504.JPG";
import img29 from "../galleryimage/DSC_0505.JPG";
import img37 from "../galleryimage/DSC_0513.JPG";
import img38 from "../galleryimage/DSC_0514.JPG";
import img39 from "../galleryimage/DSC_0515.JPG";
import img40 from "../galleryimage/DSC_0518.JPG";
import img43 from "../galleryimage/DSC_0519.JPG";
import img44 from "../galleryimage/DSC_0520.JPG";
import img45 from "../galleryimage/DSC_0521.JPG";
import img46 from "../galleryimage/DSC_0522.JPG";
import img47 from "../galleryimage/DSC_0523.JPG";
import img48 from "../galleryimage/DSC_0524.JPG";
import img49 from "../galleryimage/DSC01400.JPG";

const Gallery = () => {
  return (
    <>
      <NavBar />
      <div className="gallery-parent">
        <div className="gallery-heading">TEC Gallery</div>
        <hr
          style={{ width: "70%", height: "4px", backgroundColor: "#03174F" }}
        ></hr>
        <div className="grid-container">
          <div className="grid-item">
            <img src={img1}></img>
          </div>
          <div className="grid-item">
            <img src={img2}></img>
          </div>
          <div className="grid-item">
            <img src={img3}></img>
          </div>
          <div className="grid-item">
            <img src={img4}></img>
          </div>
          <div className="grid-item">
            <img src={img5}></img>
          </div>
          <div className="grid-item">
            <img src={img6}></img>
          </div>
          <div className="grid-item">
            <img src={img7}></img>
          </div>
          <div className="grid-item">
            <img src={img8}></img>
          </div>
          <div className="grid-item">
            <img src={img9}></img>
          </div>
          <div className="grid-item">
            <img src={img10}></img>
          </div>
          <div className="grid-item">
            <img src={img11}></img>
          </div>
          <div className="grid-item">
            <img src={img12}></img>
          </div>
          <div className="grid-item">
            <img src={img13}></img>
          </div>
          <div className="grid-item">
            <img src={img14}></img>
          </div>
          <div className="grid-item">
            <img src={img15}></img>
          </div>
          <div className="grid-item">
            <img src={img16}></img>
          </div>
          <div className="grid-item">
            <img src={img17}></img>
          </div>
          <div className="grid-item">
            <img src={img18}></img>
          </div>
          <div className="grid-item">
            <img src={img19}></img>
          </div>
          <div className="grid-item">
            <img src={img20}></img>
          </div>
          <div className="grid-item">
            <img src={img21}></img>
          </div>
          <div className="grid-item">
            <img src={img22}></img>
          </div>
          <div className="grid-item">
            <img src={img23}></img>
          </div>
          <div className="grid-item">
            <img src={img24}></img>
          </div>
          <div className="grid-item">
            <img src={img25}></img>
          </div>
          <div className="grid-item">
            <img src={img26}></img>
          </div>
          <div className="grid-item">
            <img src={img27}></img>
          </div>
          <div className="grid-item">
            <img src={img28}></img>
          </div>
          <div className="grid-item">
            <img src={img29}></img>
          </div>

          <div className="grid-item">
            <img src={img37}></img>
          </div>
          <div className="grid-item">
            <img src={img38}></img>
          </div>
          <div className="grid-item">
            <img src={img39}></img>
          </div>
          <div className="grid-item">
            <img src={img40}></img>
          </div>
          <div className="grid-item">
            <img src={img43}></img>
          </div>
          <div className="grid-item">
            <img src={img44}></img>
          </div>
          <div className="grid-item">
            <img src={img45}></img>
          </div>
          <div className="grid-item">
            <img src={img46}></img>
          </div>
          <div className="grid-item">
            <img src={img47}></img>
          </div>
          <div className="grid-item">
            <img src={img48}></img>
          </div>
          <div className="grid-item">
            <img src={img49}></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
