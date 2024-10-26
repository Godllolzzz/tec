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
import img26 from "../galleryimage/change10.jpg";
import img27 from "../galleryimage/change9.jpg";
import img28 from "../galleryimage/DSC_0504.JPG";
import img29 from "../galleryimage/change8.jpg";
import img37 from "../galleryimage/DSC_0513.JPG";
import img38 from "../galleryimage/DSC_0514.JPG";
import img39 from "../galleryimage/DSC_0515.JPG";
import img40 from "../galleryimage/july154.jpg";
import img43 from "../galleryimage/change5.jpg";
import img44 from "../galleryimage/change6.jpg";
import img45 from "../galleryimage/change7.jpg";
import img46 from "../galleryimage/july15.jpg";
import img47 from "../galleryimage/july151.jpg";
import img48 from "../galleryimage/july152.jpg";
import img49 from "../galleryimage/july153.jpg";
import img50 from "../galleryimage/gallery2.jpg";
import img51 from "../galleryimage/gallery3.jpg";
import img52 from "../galleryimage/gallery4.jpg";
import img53 from "../galleryimage/gallery5.jpg";
import img54 from "../galleryimage/gallery6.jpg";
import img55 from "../galleryimage/change13.jpeg";
import img56 from "../galleryimage/change14.jpeg";
import img57 from "../galleryimage/change15.jpeg";
import img58 from "../galleryimage/change16.jpeg";
import img59 from "../galleryimage/change17.jpeg";
import img60 from "../galleryimage/change19.jpeg";
import img61 from "../galleryimage/change20.jpeg";
import img62 from "../galleryimage/change21.jpeg";
import img63 from "../galleryimage/change22.jpeg";


const Gallery = () => {
  const [isImgOpen, setIsImgOpen] = useState(null);
  let image_array = [
    img40,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51,
    img52,
    img53,
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
    // img61,
    img62,
    img63,
    img43,
    img44,
    img45,
    img29,
    img26,
    img27,
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
