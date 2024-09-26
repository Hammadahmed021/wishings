import React from "react";
import * as icons from "../assets/icons/index.js";
import logo from "../assets/logo.png";
import DarkModeToggler from "./DarkModeToggler";
import { FaBars } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";


export const Navbar = () => {
  return (
    <header className="">
      <div  className="offer px-4 mx-auto relative bg-gradient-to-r from-[#AB262B] from-10%  via-[#EBBA0E] via-70% to-[#EBBA0E] to-90%">
        <div className="flex flex-col md:flex-row gap-3 py-4 items-center justify-center font-roboto font-semibold text-small leading-normal">
          <p className="text-white text-center">
            Back-to-School for Education: 40% OFF + 700 Extra FREE AI Credits
          </p>
          <a
            href="#"
            className="px-7 py-1 bg-slate-100 rounded-[8px] capitalize text-[#896340] text-center text-small"
          >
            grab now
          </a>
        </div>
      </div>
      <div className="contact hidden xl:container xl:mx-auto  lg:flex font-poppins bg-background justify-between py-4 items-center px-10">
        <div className="left flex gap-3">
          <img src={icons.mail} alt="mail icon" />
          <span className="text-[#5C6671] text-sm	font-normal	">
            contact@nextpro.com
          </span>
        </div>
        <div className="right flex gap-10">
          <div className="left flex items-center gap-8">
            <ul className="flex items-center gap-3">
              <li className="cursor-pointer">
                <img src={icons.fb} alt="mail icon" />
              </li>
              <li className="cursor-pointer">
                <img src={icons.yt} alt="mail icon" />
              </li>
              <li className="cursor-pointer">
                <img src={icons.X} alt="mail icon" />
              </li>
              <li className="cursor-pointer">
                <img src={icons.insta} alt="mail icon" />
              </li>
              <li className="cursor-pointer">
                <img src={icons.linkedin} alt="mail icon" />
              </li>
            </ul>
            <div className="dark-mode">
              {/* <DarkModeToggler /> */}
            </div>
          </div>
          <div className="right flex items-center">
            <img src={icons.globe} alt="globe icon" />
          </div>
        </div>
      </div>

      <div className=" border-b-2"></div>

      <div className="xl:container xl:mx-auto nav-links flex items-center justify-between py-4 px-4 md:px-10 bg-primary">
        <div className="logo">
          <img src={logo} alt="logo" className="h-14 md:h-20" />
        </div>
        <nav className="links hidden lg:flex">

        </nav>
        <div className="cta-btns hidden lg:flex items-center gap-6">
            
            <a href="#" className="cursor-pointer capitalize">login</a>
            <a href="#" className="cursor-pointer py-2 px-5 text-white rounded-full capitalize bg-[#FEA500]">sign up</a>
            
            
        </div>
      </div>
    </header>
  );
};
