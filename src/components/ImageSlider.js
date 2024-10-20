import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import img1 from "./../newsimage/img1.jpg";
import img2 from "./../newsimage/img2.jpg";
import img3 from "./../newsimage/img3.jpg";
import img4 from "./../newsimage/img4.jpg";
import img5 from "./../newsimage/img5.jpg";
import img6 from "./../newsimage/img6.jpg";
import img7 from "./../newsimage/img7.jpg";
import img8 from "./../newsimage/img8.jpg";
import img9 from "./../newsimage/img9.jpg";
import img10 from "./../newsimage/img10.jpg";
import img11 from "./../newsimage/img11.jpg";
import img12 from "./../newsimage/img12.jpeg";
import img13 from "./../newsimage/img13.jpeg";
import img14 from "./../newsimage/img14.jpeg";
import img15 from "./../newsimage/img15.jpeg";
import img16 from "./../newsimage/img16.jpeg";
import img17 from "./../newsimage/img17.jpeg";
import img18 from "./../newsimage/img18.jpeg";
import img19 from "./../newsimage/img19.jpeg";
import img20 from "./../newsimage/img20.jpeg";
import img21 from "./../newsimage/img21.jpeg";

const ImageSlider = () => {
  const SliderData = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img7,
    },
    {
      image: img8,
    },
    {
      image: img9,
    },
    {
      image: img10,
    },
    {
      image: img11,
    },{
      image: img12,
    },{
      image: img13,
    },{
      image: img14,
    },{
      image: img15,
    },{
      image: img16,
    },{
      image: img17,
    },{
      image: img18,
    },{
      image: img19,
    },{
      image: img20,
    },{
      image: img21,
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 21000);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
