import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/shared/logo.svg";
import hamBtn from "/assets/shared/icon-hamburger.svg";
import iconClose from "/assets/shared/icon-close.svg";

export const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);

  const toggleMenu = () => {
    setopenMenu(!openMenu);
  };

  return (
    <nav className="flex justify-between items-center bg-black text-white px-10 py-5">
      <img src={logo} alt="logo" />
      <div className="hidden sm:flex">
        <ul className="flex gap-8 pe-32">
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
      <div className="sm:hidden">
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
    </nav>
  );
};
