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
        const response = await fetch("/data.json");
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
    <div className="bg-crew-mobile bg-no-repeat bg-cover sm:bg-crew-desktop sm:overflow-hidden min-h-[90vh] sm:min-h-screen justify-evenly text-white text-center items-center md:items-end flex flex-col sm:px-10 md:px-20 ">
      <div className=" md:h-[60vh] flex flex-col sm:grid sm:grid-cols-2 items-center md:text-start ">
        <div className="sm:order-2  md:h-[90vh] sm:row-span-1 ">
          <img
            className="h-60 w-60 md:h-full md:w-full object-contain md:mx-auto"
            src={images.png}
            alt={name}
          />
        </div>
        <div className="sm:row-span-1 sm:mb-20">
          <div className="flex flex-col items-center justify-center md:items-start w-full bg-black bg-opacity-30 p-5 md:p-0  md:bg-transparent md:gap-3">
            <div className="flex gap-5 md:order-2">
              <button onClick={handleNext} className="text-2xl">
                <i className="bx bxs-caret-left-circle"></i>
              </button>
              <button onClick={handlePrevious} className="text-2xl">
                <i className="bx bxs-caret-right-circle"></i>
              </button>
            </div>
            <div className="flex flex-col items-center md:items-start md:gap-5">
              <h2 className="font-extralight md:text-4xl">{role}</h2>
              <h1 className="text-2xl md:text-6xl">{name}</h1>
            </div>
          </div>
          <div className="py-5 px-8 md:pt-3 md:px-0">
            <p className="font-thin md:text-2xl leading-7">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
