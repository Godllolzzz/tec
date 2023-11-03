import React, { useState } from "react";
import "./gallery.css";
import NavBar from "./NavBar";
import Footer from "./footer";
import GalleryImage from "./gallery_img";
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
import img16 from "../galleryimage/DSC_0492.JPG";
import img18 from "../galleryimage/DSC_0494.JPG";
import img19 from "../galleryimage/DSC_0495.JPG";
import img20 from "../galleryimage/DSC_0496.JPG";
import img21 from "../galleryimage/DSC_0497.JPG";
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
  const [isImgOpen, setIsImgOpen] = useState(null);
  let image_array = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img16,
    img18,
    img19,
    img21,
    img28,
    img37,
    img38,
    img39,
    img40,
    img46,
    img47,
    img48,
    img49,
  ];
  return (
    <>
      <NavBar />
      {isImgOpen && (
        <GalleryImage image={isImgOpen} onClose={() => setIsImgOpen(null)} />
      )}
      <div className="gallery-parent">
        <div className="gallery-heading">TEC Gallery</div>
        <div className="grid-container">
          {image_array.map((img) => (
            <div
              onClick={() => {
                setIsImgOpen(img);
              }}
              className="grid-item"
            >
              <img src={img}></img>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
