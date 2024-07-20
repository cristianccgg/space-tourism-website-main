import React from "react";

export const Home = () => {
  return (
    <div className="bg-home-mobile min-h-screen bg-no-repeat text-white flex flex-col items-center w-full p-8 font-light gap-8">
      <h2 className="flex flex-col items-center">
        So, you want to travel to <span className="text-8xl">SPACE</span>
      </h2>{" "}
      <h1 className="text-center">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </h1>{" "}
      <div className="bg-white rounded-full  w-44 h-44 content-center">
        <h1 className="text-2xl text-black text-center">EXPLORE</h1>
      </div>
    </div>
  );
};
