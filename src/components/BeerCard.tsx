// components/BeerCard.tsx
import React from "react";

interface Beer {
  beerName: string;
  ingredients: string;
  abv: number;
  srm: number;
  ibu: any;
  variety: string;
  observe: string;
  aroma: string;
  taste: string;
  image: string;
}

interface BeerCardProps {
  beer: Beer;
  textColor: string;
}

export default function BeerCard({ beer, textColor }: BeerCardProps) {
  return (
    <div
      className="flex flex-col items-center "
      style={{
        color: textColor,
        minHeight: "auto", // Set a fixed minimum height
        height: "400px",
      }}
    >
      <h1
        className="text-4xl md:text-4xl font-extrabold uppercase tracking-wide mb-4 text-center"
        style={{ color: textColor }}
      >
        {beer.beerName}
      </h1>
      <img
        src={beer.image}
        alt={beer.beerName}
        className="w-80 h-80 object-cover rounded-full shadow-xl mb-6 border-2"
      />
      <div className="grid grid-cols-2 gap-4 text-xl font-semibold mb-6 w-full">
        <div>ABV: <span className="font-bold text-xl">{beer.abv}%</span></div>
        <div>IBU: <span className="font-bold text-xl">{beer.ibu}</span></div>
        <div>
          SRM (Guestimate): <span className="font-bold text-xl">{beer.srm > 100 ? "Unknown" : beer.srm}</span>
        </div>
        <div>Variety: <span className="font-bold">{beer.variety}</span></div>
      </div>
      <div className="mb-2 text-xl w-full">
          <span className="font-semibold ">Ingredients:</span> {beer.ingredients}
        </div>
      <div className="mb-4 w-full text-md md:text-base">
        <div className="mb-2 text-xl">
          <span className="font-semibold ">Observe:</span> {beer.observe}
        </div>
        <div className="mb-2 text-xl">
          <span className="font-semibold">Aroma:</span> {beer.aroma}
        </div>
        <div className="mb-2 text-xl">
          <span className="font-semibold">Taste:</span> {beer.taste}
        </div>
      </div>
      <div className="py-4">
        <h3>Created by Ryan Matte for the course Beer 1</h3>
      </div>
    </div>
  );
}
