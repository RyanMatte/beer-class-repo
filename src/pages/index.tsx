import React, { useState, useEffect } from "react";
import beers from "../data/beers.json";
import { getSRMColor, getContrastingTextColor } from "../utils/srmColor";
import Navbar from "../components/Navbar";
import BeerCard from "../components/BeerCard";
import ArrowButton from "../components/ArrowButton";

// ...existing bubble generation...
const bubbles = Array.from({ length: 50 }, () => {
  const size = 10 + Math.random() * 8; // random size between 8 and 16
  return {
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
    opacity: 0.3 + Math.random() * 0.2,
    size: size,
  };
});

export default function Home() {
  const [current, setCurrent] = useState(0);
  const beer = beers[current];
  const bgColor = getSRMColor(beer.srm);
  const textColor = getContrastingTextColor(bgColor);

  useEffect(() => {
    document.body.style.background = bgColor;
    document.body.style.color = textColor;
    document.body.style.transition = "background 0.7s";
    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
      document.body.style.transition = "";
    };
  }, [bgColor, textColor]);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? beers.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === beers.length - 1 ? 0 : prev + 1));

  return (
    <>
      {/* Bubbles / background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ overflow: "visible", width: "100vw", height: "100vh" }}
      >
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: "-40px",
              opacity: bubble.opacity,
              filter: "blur(2px)",
              animation: `rise ${bubble.duration}s linear ${bubble.delay}s infinite`,
              willChange: "transform",
            }}
          />
        ))}
        <style>
          {`
            @keyframes rise {
              0% {
                transform: translateY(0);
                opacity: 0.2;
              }
              10% {
                opacity: 0.4;
              }
              90% {
                opacity: 0.4;
              }
              100% {
                transform: translateY(-120vh);
                opacity: 0.2;
              }
            }
          `}
        </style>
      </div>

      <Navbar {...({ textColor, bgColor } as any)} />

      {/* Mobile tap zones: only visible on small screens; cover left/right halves and handle taps */}
      <div
        className="md:hidden fixed inset-0 z-40 flex"
        aria-hidden="false"
      >
        <div
          role="button"
          aria-label="Previous Beer"
          onClick={handlePrev}
          onTouchStart={handlePrev}
          className="w-1/2 h-full"
          style={{ cursor: "pointer" }}
        />
        <div
          role="button"
          aria-label="Next Beer"
          onClick={handleNext}
          onTouchStart={handleNext}
          className="w-1/2 h-full"
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="w-full flex justify-center p-8 mt-20 relative z-10">
        <div className="flex flex-row items-start gap-4 max-w-6xl w-full">
          {/* Left Arrow - hidden on small screens */}
          <div className="flex-shrink-0 self-center hidden md:flex">
            <ArrowButton direction="left" onClick={handlePrev} textColor={textColor} />
          </div>

          {/* Beer Card */}
          <div className="flex-1 min-w-0">
            <BeerCard beer={{ ...beer }} textColor={textColor} />
          </div>

          {/* Right Arrow - hidden on small screens */}
          <div className="flex-shrink-0 self-center hidden md:flex">
            <ArrowButton direction="right" onClick={handleNext} textColor={textColor} />
          </div>
        </div>
      </div>
    </>
  );
}