import React, { Fragment } from "react";
import { IoMdHome } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { FaPersonChalkboard } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { TiSocialAtCircular } from "react-icons/ti";
function Menu(){

    return(
    <>
    <nav className="">
        <div className=" flex ml-60 mt-4">
            <ul className="flex space-x-10">
                <li className="flex gap-2"><IoMdHome className="text-2xl"/><a href="">Home</a></li>
                <div className="flex space-x-10 ml-50" >
                    <li className="flex gap-2"><FaPersonChalkboard className="text-2xl"/><a href="">About Me</a></li>
                    <li className="flex gap-2"><GiSelfLove className="text-2xl"/><a href="">Hobbies</a></li>
                    <li className="flex gap-2"><IoMdSettings className="text-2xl"/><a href="">Work </a></li>
                    <li className="flex gap-2"><TiSocialAtCircular className="text-2xl"/><a href="">Contact Me </a></li>
                </div>
            </ul>
        </div>
    </nav>

    </>
    )


}
export default Menu;