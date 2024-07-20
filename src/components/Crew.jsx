import React, { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";

const Skeleton = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white py-5">
    <div className="w-full h-60 bg-gray-700  animate-ping"></div>
  </div>
);

export const Crew = () => {
  const [data, setData] = useState(null);
  const [CurrentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.crew.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.crew.length - 1 : prevIndex - 1
    );
  };

  if (!data) {
    return <Skeleton />;
  }

  const { name, role, bio, images } = data.crew[CurrentIndex];

  return (
    <div className="bg-crew-mobile bg-no-repeat bg-cover h-screen text-white text-center flex flex-col py-5">
      <img className="h-60 w-60 self-center" src={images.png} alt={name} />
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 p-5">
        <div className="flex gap-5">
          <button onClick={handleNext} className="text-2xl">
            <i className="bx bxs-caret-left-circle"></i>
          </button>
          <button onClick={handlePrevious} className="text-2xl">
            <i className="bx bxs-caret-right-circle"></i>
          </button>
        </div>
        <h2 className="font-extralight">{role}</h2>
        <h1 className="text-2xl">{name}</h1>
      </div>

      <div className="py-5 px-8">
        <p className="font-light">{bio}</p>
      </div>
    </div>
  );
};
