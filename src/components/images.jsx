import React, { useState, useEffect } from "react";
import img1 from "../assets/DSC_3111.jpg";
import img2 from "../assets/DSC_3644.jpg";
import img3 from "../assets/akaraboBest.jpg";
import img4 from "../assets/DSC_3653.jpg";
import img5 from "../assets/DSC_9390.jpg";
import img6 from "../assets/EMY_4565.jpg";

function QuoteSlider() {
  const slides = [
    { type: "image", content: img1 },
    { type: "text", content: "“Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson" },
    { type: "image", content: img2 },
    { type: "text", content: "“The best thing about a picture is that it never changes, even when the people in it do.” – Andy Warhol" },
    { type: "image", content: img3 },
    { type: "text", content: "“Talk is cheap. Show me the code.” – Linus Torvalds" },
    { type: "image", content: img4 },
    { type: "text", content: "“Consistency beats talent when talent doesn't work hard.” – Irael" },
    { type: "image", content: img5 },
    { type: "text", content: "“Be yourself; everyone else is already taken.” – Oscar Wilde" },
    { type: "image", content: img6 },
  ];

  const sliderSlides = [...slides, ...slides];
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setOffset((prev) => {
        if (prev <= -(100 / 10) * slides.length) return 0;
        return prev - 0.09;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [slides.length, paused]);

  return (
    <div className="relative w-full overflow-hidden mt-20">
      <div
        className="flex transition-transform duration-500 ease-linear"
        style={{ transform: `translateX(calc(${offset}% + 50px))` }}
      >
        {sliderSlides.map((slide, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {slide.type === "image" ? (
              <div className="bg-white shadow-lg rounded-xl overflow-hidden relative">
                <img
                  src={slide.content}
                  alt={`Slide ${i}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ) : (
              <div className="bg-blue-100 text-center p-6 shadow-lg rounded-xl h-64 sm:h-80 md:h-96 lg:h-[300px] flex items-center justify-center">
                <p className="text-base sm:text-lg md:text-xl italic">{slide.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuoteSlider;

