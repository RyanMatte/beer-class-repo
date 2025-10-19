import React, { useState, useEffect } from "react";
import beers from "../data/beers.json";
import { getSRMColor, getContrastingTextColor } from "../utils/srmColor";
import { useSwipeable } from "react-swipeable";
import Navbar from "../components/Navbar";
import BeerCard from "../components/BeerCard";
import ArrowButton from "../components/ArrowButton";
import Bubbles from "../components/Bubbles";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const beer = beers[current];
  const bgColor = getSRMColor(beer.srm);
  const textColor = getContrastingTextColor(bgColor);

  // Each time we cycle through, the background and font change to match the beer's SRM color
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

  // react-swipeable handlers (attach to the BeerCard container)
    const handlers = useSwipeable({
      onSwipedLeft: () => handleNext(),
      onSwipedRight: () => handlePrev(),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true,
      delta: 50,
    } as any);

  return (
    <>
      <Bubbles />
      {/* Center: attach swipe handlers here; preserve vertical scroll with touchAction */}
          <div
            className="flex-1 min-w-0"
            {...handlers}
            style={{ touchAction: "pan-y" }}
            role="region"
            aria-label="Beer card carousel (swipe left/right)"
          >
      <Navbar {...({ textColor, bgColor } as any)} />

      {/* removed mobile fixed arrows — swipe is used on touch devices */}

      {/* Desktop layout*/}
      <div className="w-full flex justify-center p-8 mt-20 relative z-10">
        <div className="flex flex-row items-start gap-4 max-w-6xl w-full">
          <div className="flex-shrink-0 self-center hidden md:flex">
            <ArrowButton direction="left" onClick={handlePrev} textColor={textColor} />
          </div>

          
            <BeerCard beer={{ ...beer }} textColor={textColor} />
          </div>

          <div className="flex-shrink-0 self-center hidden md:flex">
            <ArrowButton direction="right" onClick={handleNext} textColor={textColor} />
          </div>
        </div>
      </div>
    </>
  );
}