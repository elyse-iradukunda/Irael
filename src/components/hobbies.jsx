import React, { useEffect, useRef, useState } from "react";

export default function HobbiesCarousel({
  images = [],
  interval = 3000,
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (images.length <= 1) return;
    if (!paused) {
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, interval);
    }
    return () => clearInterval(timerRef.current);
  }, [images.length, interval, paused]);

  if (!images.length) {
    return <div className="text-center p-4 text-gray-500">No hobby images found.</div>;
  }

  return (
    <div
      className="mx-auto px-2 sm:px-4 max-w-full flex flex-col md:flex-row items-center justify-center md:gap-6 gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      <div className="flex-shrink-0 w-full sm:w-40 md:w-64 h-48 sm:h-56 md:h-80 bg-white text-black flex items-center justify-center rounded-xl shadow-lg border border-blue-400 p-3 md:p-4">
        <p className="font-bold text-center text-sm sm:text-base md:text-lg">Photography 🎬<br />Travel 🌍<br />Music 🎵</p>
      </div>


      <div className="flex-1 w-full md:max-w-2xl relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] max-h-[500px]">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 flex items-center justify-center">
              <img
                src={img.src}
                alt={img.alt || `Hobby ${i + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-white scale-125" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 w-full sm:w-40 md:w-64 h-48 sm:h-56 md:h-80 bg-white text-black flex items-center justify-center rounded-xl shadow-lg border border-blue-400 p-3 md:p-4">
        <p className="font-bold text-center text-sm sm:text-base md:text-lg">Coding 💻<br />Building Apps 📱<br />Learning New Tech ⚡</p>
      </div>
    </div>
  );
}
