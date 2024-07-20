import React, { useState, useEffect } from "react";

const Skeleton = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white py-5">
    <div className="w-full h-60 bg-gray-700  animate-ping"></div>
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
    <div className="bg-tech-mobile bg-no-repeat bg-cover h-screen text-white text-center flex flex-col gap-5 py-5">
      <h1>03 Space launch 101</h1>
      <img src={images.landscape} alt={name} />

      <div className="flex gap-10 items-center justify-center">
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
      <h1>The terminology...</h1>
      <h1 className="text-3xl">{name}</h1>

      <div className="p-5">
        <p className="font-extralight">{description}</p>
      </div>
    </div>
  );
};
