import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-home-mobile md:bg-home-desktop md:bg-fill h-[100vh] bg-no-repeat  bg-cover text-white flex flex-col md:flex-row lg:gap-44 xl:gap-72 px-44 md:pt-32 items-center w-full p-8 font-light gap-8">
      <div className="flex flex-col gap-5  md:px-8 md:w-[40vw] ">
        <h2 className="flex flex-col items-center md:items-start lg:text-3xl font-extralight">
          SO, YOU WANT TO TRAVEL TO{" "}
          <span className="text-8xl lg:text-[8rem] xl:text-[11rem] font-medium ">
            SPACE
          </span>
        </h2>{" "}
        <h1 className="text-center md:text-justify lg:text-2xl">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </h1>{" "}
      </div>
      <Link to={"/destination"}>
        <div className="bg-white rounded-full  w-52 h-52 content-center">
          <h1 className="text-3xl text-black text-center block">EXPLORE</h1>
        </div>
      </Link>
    </div>
  );
};
