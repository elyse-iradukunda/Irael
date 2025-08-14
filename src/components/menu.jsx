import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { FaPersonChalkboard } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { TiSocialAtCircular } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center p-4 sm:p-6">
        <h1 className="text-2xl font-bold text-blue-600">Elyse Iradukunda</h1>
        <button
          className="sm:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

    
      <ul
        className={`flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-10 
        transition-all duration-500 overflow-hidden sm:overflow-visible
        ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 sm:opacity-100 sm:max-h-none"}`}
      >
        <li className="flex items-center gap-2 p-4 hover:text-blue-500 transition-colors">
          <IoMdHome className="text-2xl" />
          <a href="#">Home</a>
        </li>
        <li className="flex items-center gap-2 p-4 hover:text-blue-500 transition-colors">
          <FaPersonChalkboard className="text-2xl" />
          <a href="#AboutMe">About Me</a>
        </li>
        <li className="flex items-center gap-2 p-4 hover:text-blue-500 transition-colors">
          <GiSelfLove className="text-2xl" />
          <a href="#">Hobbies</a>
        </li>
        <li className="flex items-center gap-2 p-4 hover:text-blue-500 transition-colors">
          <IoMdSettings className="text-2xl" />
          <a href="#">Work</a>
        </li>
        <li className="flex items-center gap-2 p-4 hover:text-blue-500 transition-colors">
          <TiSocialAtCircular className="text-2xl" />
          <a href="#footer">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
