import React, { useState, useEffect } from "react";
import img1 from "../assets/DSC_3111.jpg";
import img2 from "../assets/DSC_3644.jpg";
import img3 from "../assets/akaraboBest.jpg";

function QuoteSlider() {
  const slides = [
    { type: "image", content: img1 },
    { type: "text", content: "“Life is what happens when you’re busy coding.” – Someone" },
    { type: "image", content: img2 },
    { type: "text", content: "“Stay focused and keep learning.” – Someone" },
    { type: "image", content: img3 },
    { type: "text", content: "“Creativity is intelligence having fun.” – Someone" },
  ];

  const sliderSlides = [...slides, ...slides]; 
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        if (prev <= -(100 / 3) * slides.length) {
          return 0; 
        }
        return prev - 0.09; 
      });
    }, 16); 
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden mt-20">
      <div
        className="flex"
        style={{
          transform: `translateX(${offset}%)`,
          transition: "transform 0.6s linear",
        }}
      >
        {sliderSlides.map((slide, i) => (
          <div key={i} className="flex-shrink-0 w-1/3 p-2">
            {slide.type === "image" ? (
              <div className="bg-white shadow-lg rounded-xl overflow-hidden ">
                <img
                  src={slide.content}
                  alt={`Slide ${i}`}
                  className="w-[600px] h-[600px] object-cover"
                />
              </div>
            ) : (
              <div className="bg-blue-100 text-center p-6 shadow-lg rounded-xl h-[300px] flex items-center justify-center">
                <p className="text-lg italic">{slide.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuoteSlider;
