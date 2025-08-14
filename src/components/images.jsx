import React, { useState, useEffect } from "react";
import img1 from "../assets/EYE.jpg";
import img2 from "../assets/pic2.jpg";
import img3 from "../assets/pic3.jpg";
import img4 from "../assets/pic4.jpg";

function ImageSlider() {
  const images = [img1, img2, img3, img4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-auto sm:h-[350px] overflow-hidden">
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className="w-full h-100 object-cover transition-opacity duration-900 ease-in-out "
      />
     <div className="absolute inset-0 bg-opacity-20"></div>
    </div>
  );
}

export default ImageSlider;
