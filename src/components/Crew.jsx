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
    <div className="bg-crew-mobile bg-no-repeat bg-cover md:bg-crew-desktop h-screen text-white text-center items-center md:items-end flex flex-col py-5 md:flex-row sm:px-10 md:px-20 md:py-0">
      <div className="md:order-2  md:w-[100vw] md:h-[80vh]">
        <img
          className="h-60 w-60 md:h-full md:w-full self-center object-contain md:mx-auto"
          src={images.png}
          alt={name}
        />
      </div>
      <div className=" md:h-[80vh] content-center md:text-start md:p-10">
        <div className="flex flex-col items-center justify-center md:items-start bg-black bg-opacity-50 p-5 md:p-0 md:bg-transparent md:gap-3">
          <div className="flex gap-5 md:order-2">
            <button onClick={handleNext} className="text-2xl">
              <i className="bx bxs-caret-left-circle"></i>
            </button>
            <button onClick={handlePrevious} className="text-2xl">
              <i className="bx bxs-caret-right-circle"></i>
            </button>
          </div>
          <div className="flex flex-col items-center md:items-start gap-5">
            <h2 className="font-extralight md:text-4xl">{role}</h2>
            <h1 className="text-2xl md:text-6xl">{name}</h1>
          </div>
        </div>
        <div className="py-5 px-8 md:pt-3 md:px-0">
          <p className="font-extralight md:text-2xl">{bio}</p>
        </div>
      </div>
    </div>
  );
};
