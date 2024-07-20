import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-home-mobile md:bg-home-desktop md:bg-fill h-[100vh] bg-no-repeat bg-cover text-white flex flex-col md:flex-row lg:gap-44 px-44 items-center w-full p-8 font-light gap-8">
      <div className="flex flex-col gap-5  md:px-8">
        <h2 className="flex flex-col items-center lg:text-2xl">
          SO, YOU WANT TO TRAVEL TO{" "}
          <span className="text-8xl lg:text-[8rem]">SPACE</span>
        </h2>{" "}
        <h1 className="text-center md:text-justify lg:text-2xl ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </h1>{" "}
      </div>
      <Link to={"/destination"}>
        <div className="bg-white rounded-full  w-44 h-44 content-center">
          <h1 className="text-2xl text-black text-center block">EXPLORE</h1>
        </div>
      </Link>
    </div>
  );
};
