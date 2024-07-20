import React, { useState, useEffect } from "react";

const Skeleton = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white py-5">
    <div className="w-full h-60 bg-gray-700  animate-ping"></div>
  </div>
);

export const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const fetchData = async () => {
    const response = await fetch("/data.json");
    const jsonData = await response.json();
    setDestinations(jsonData.destinations);
    setSelectedDestination(jsonData.destinations[1]); // Selecciona el primer destino por defecto
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!selectedDestination) {
    return <Skeleton />;
  }

  const { description, distance, images, name, travel } = selectedDestination;

  return (
    <div className="bg-destination-mobile bg-no-repeat bg-cover md:bg-destination-desktop h-screen text-white text-center md: md:text-start flex flex-col items-center gap-8 pt-5 md:flex-row md:px-32 md:gap-32 lg:gap-44">
      <div className="flex flex-col gap-5 md:gap-10">
        <h1 className="font-extralight">01 PICK YOUR DESTINATION</h1>
        <div>
          <img
            className="w-52  md:w-[30vw] md:max-w-[50vh]"
            src={images.png}
            alt={name}
          />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start gap-5 md:gap-8">
        <div className="flex gap-5 font-extralight">
          {destinations.map((destination) => (
            <button
              key={destination.name}
              className="border rounded-lg p-1"
              onClick={() => setSelectedDestination(destination)}
            >
              {destination.name}
            </button>
          ))}
        </div>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-8xl">{name}</h1>
        <div className="px-5 md:px-0">
          <p className="font-extralight">{description}</p>
        </div>
        <hr className="border border-white border-opacity-40 w-full mx-auto" />
        <div className="flex justify-between md:px-0 w-full px-10">
          <div>
            <p>Avg. distance</p>
            <h1 className="text-2xl font-semibold">{distance}</h1>
          </div>
          <div>
            <p>Est. travel time</p>
            <h1 className="text-2xl font-semibold">{travel}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
