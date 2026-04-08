import React, { useState } from "react";
import "./Compendium.css";
import NavBar from "./NavBar";
import Footer from "./footer";
import img1 from "../compendiumimage/ext_page-0001.jpg";
import img2 from "../compendiumimage/ext_page-0002.jpg";
import img3 from "../compendiumimage/ext_page-0003.jpg";
import img4 from "../compendiumimage/ext_page-0004.jpg";
import img5 from "../compendiumimage/ext_page-0005.jpg";

const compendiumImages = [img1, img2, img3, img4, img5];

const Compendium = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <>
      <NavBar />

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="compendium-lightbox"
          onClick={() => setLightboxImg(null)}
        >
          <span className="compendium-lightbox-close">&times;</span>
          <img src={lightboxImg} alt="Compendium preview" />
        </div>
      )}

      <div className="compendium-parent">
        <div className="compendium-heading">TEC Compendium</div>

        <div className="compendium-grid-container">
          {compendiumImages.map((img, index) => (
            <div
              key={index}
              className="compendium-grid-item"
              onClick={() => setLightboxImg(img)}
            >
              <img src={img} alt={`Compendium page ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="compendium-view-btn-container">
          <a
            className="compendium-view-btn"
            href="https://drive.google.com/file/d/1GnIadfSqEXte7CzC78xd8PeGIVjxzIbJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Complete Compendium
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Compendium;
