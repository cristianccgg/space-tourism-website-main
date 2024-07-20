import React, { useState, useEffect } from "react";

const Skeleton = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white py-5">
    <div className="w-full h-60 bg-gray-700 animate-ping"></div>
  </div>
);

export const Technology = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    const response = await fetch("/data.json");
    const jsonData = await response.json();
    setItems(jsonData.technology);
    setSelectedItem(jsonData.technology[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!selectedItem) {
    return <Skeleton />;
  }

  const { description, images, name } = selectedItem;

  return (
    <div className="bg-tech-mobile md:px-20 bg-no-repeat bg-cover md:bg-tech-desktop md:relative md:-z-10 h-screen text-white text-center flex flex-col md:flex-row lg:gap-16 gap-5 py-5 items-center">
      <h1 className="md:absolute md:top-32 md:left-16">03 Space launch 101</h1>
      <div className="md:order-2 space-y-5 md:w-full md:h-[60vh] ">
        <img
          src={images.landscape}
          alt={name}
          className="block md:hidden w-full h-full object-cover"
        />
        <img
          src={images.portrait}
          alt={name}
          className="hidden md:block w-full h-full object-contain"
        />
      </div>

      <div className="md:flex gap-10 space-y-3">
        <div className="flex gap-10 items-center md:gap-8 justify-center md:flex-col">
          {items.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setSelectedItem(item)}
              className="border rounded-full p-2 w-10"
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="md:text-start flex flex-col md:gap-5">
          <h1 className="md:text-2xl">THE TERMINOLOGY...</h1>
          <h1 className="text-3xl lg:text-6xl">{name}</h1>
          <div className="p-5 md:p-0">
            <p className="font-extralight md:pe-16 md:text-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
