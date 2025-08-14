import React from "react";
import { IoMdHome } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { FaPersonChalkboard } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { TiSocialAtCircular } from "react-icons/ti";

function Menu() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-center mt-4">
        <ul className="flex flex-col sm:flex-row sm:items-center sm:space-x-10">
        
          <li className="flex items-center gap-2 p-2 hover:text-blue-500 transition-colors">
            <IoMdHome className="text-2xl" />
            <a href="#">Home</a>
          </li>
          <div className="flex flex-col sm:flex-row sm:space-x-10 sm:ml-20">
            <li className="flex items-center gap-2 p-2 hover:text-blue-500 transition-colors">
              <FaPersonChalkboard className="text-2xl" />
              <a href="#">About Me</a>
            </li>
            <li className="flex items-center gap-2 p-2 hover:text-blue-500 transition-colors">
              <GiSelfLove className="text-2xl" />
              <a href="#">Hobbies</a>
            </li>
            <li className="flex items-center gap-2 p-2 hover:text-blue-500 transition-colors">
              <IoMdSettings className="text-2xl" />
              <a href="#">Work</a>
            </li>
            <li className="flex items-center gap-2 p-2 hover:text-blue-500 transition-colors">
              <TiSocialAtCircular className="text-2xl" />
              <a href="#">Contact Me</a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
