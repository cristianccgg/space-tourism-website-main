import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/public/images/shared/logo.svg";
import hamBtn from "/public/images/shared/icon-hamburger.svg";
import iconClose from "/public/images/shared/icon-close.svg";

export const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);

  const toggleMenu = () => {
    setopenMenu(!openMenu);
  };

  return (
    <nav className=" bg-black text-white w-full">
      <div className="max-w-7xl md:bg-black md:bg-opacity-50 mx-auto flex justify-between items-center px-10 py-5 md:absolute md:top-10 md:w-full">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="hidden md:flex">
          <ul className="flex gap-8 pe-28">
            <li>
              <Link to="/">00 HOME</Link>
            </li>
            <li>
              <Link to="/destination">01 DESTINATION</Link>
            </li>
            <li>
              <Link to="/crew">02 CREW</Link>
            </li>
            <li>
              <Link to="/technology">03 TECHNOLOGY</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <img src={openMenu ? iconClose : hamBtn} alt="menu icon" />
          </button>

          <div
            className={`fixed top-20 right-0 h-full w-2/3 bg-slate-800 opacity-70 p-10 transform ${
              openMenu ? "translate-x-0" : "translate-x-full"
            } transition-transform`}
          >
            <ul className="flex flex-col items-start gap-8">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  00 HOME
                </Link>
              </li>
              <li>
                <Link to="/destination" onClick={toggleMenu}>
                  01 DESTINATION
                </Link>
              </li>
              <li>
                <Link to="/crew" onClick={toggleMenu}>
                  02 CREW
                </Link>
              </li>
              <li>
                <Link to="/technology" onClick={toggleMenu}>
                  03 TECHNOLOGY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
