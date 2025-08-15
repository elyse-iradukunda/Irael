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
      className="mx-auto px-4 max-w-4xl relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left Card */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/90 text-blue-400 p-4 rounded-r-lg shadow-lg z-10">
        <p className="font-bold text-sm md:text-lg">Photographer</p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
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

      {/* Right Card */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/90 text-blue-400 p-4 rounded-l-lg shadow-lg z-10">
        <p className="font-bold text-sm md:text-lg">lo</p>
      </div>
    </div>
  );
}
