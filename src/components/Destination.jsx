import React, { useState, useEffect } from "react";

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
    return <div>Loading...</div>;
  }

  const { description, distance, images, name, travel } = selectedDestination;

  return (
    <div className="bg-destination-mobile bg-no-repeat bg-contain h-screen text-white text-center flex flex-col items-center gap-8 pt-5">
      <h1 className="font-extralight">Pick your destination</h1>
      <div>
        <img className="w-52" src={images.png} alt={name} />
      </div>

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

      <h1 className="text-4xl font-bold">{name}</h1>

      <div className="px-5">
        <p className="font-extralight">{description}</p>
      </div>

      <div className="flex justify-between w-full px-10">
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
  );
};
