import React from "react";
import logo from "/assets/shared/logo.svg";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 opacity-70 text-white px-10 py-5">
      <img src={logo} alt="logo" />
      <ul className="flex gap-8 pe-32">
        <li>00 HOME</li>
        <li>01 DESTINATION</li>
        <li>02 CREW</li>
        <li>03 TECHNOLOGY</li>
      </ul>
    </nav>
  );
};
