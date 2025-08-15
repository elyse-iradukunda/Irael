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
      className="max-w-5xl mx-auto px-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[16/9]">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt || `Hobby ${i + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
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
    </div>
  );
}
