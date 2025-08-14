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
    }, 3000); // move every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden mt-20">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 33.3333}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-1/3 p-2"
          >
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img
                src={src}
                alt={`Slide ${i}`}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
