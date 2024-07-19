import React, { useEffect, useState } from "react";
import crew1 from "/assets/crew/image-anousheh-ansari.png";

export const Crew = () => {
  const [data, setData] = useState(null);

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

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-crew-mobile h-screen text-white text-center flex flex-col">
      <img
        className="h-60 w-60 self-center"
        src={data.crew[0].images.png}
        alt={data.crew[0].name}
      />
      <h2>{data.crew[0].role}</h2>
      <h1>{data.crew[0].name}</h1>
      <p>{data.crew[0].bio}</p>
    </div>
  );
};
