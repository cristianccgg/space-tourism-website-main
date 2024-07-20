import React from "react";
import { Link } from "react-router-dom";
import Mars from "/assets/destination/image-mars.png";

export const Destination = () => {
  return (
    <div className="bg-destination-mobile bg-no-repeat  h-screen text-white text-center flex flex-col items-center gap-8 pt-5">
      <h1 className="font-extralight">Pick your destination</h1>
      <div>
        <img className="w-52" src={Mars} alt="" />
      </div>

      <div className="flex gap-5 font-extralight">
        <button className="border rounded-lg p-1">Moon</button>
        <button className="border rounded-lg p-1">Mars</button>
        <button className="border rounded-lg p-1">Europa</button>
        <button className="border rounded-lg p-1">Titan</button>
      </div>

      <h1 className="text-4xl font-bold">Mars</h1>

      <div className="px-5">
        <p className="font-extralight">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
      </div>

      <div className="flex justify-between w-full px-10">
        <div>
          <p>Avg. distance</p>
          <h1 className="text-2xl font-semibold">225 mil. km</h1>
        </div>
        <div>
          <p>Est. travel time</p>
          <h1 className="text-2xl font-semibold">9 months</h1>
        </div>
      </div>
    </div>
  );
};
