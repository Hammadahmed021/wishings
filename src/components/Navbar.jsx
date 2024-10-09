import React from "react";
import { useEffect, useRef, useState } from "react";
import * as icons from "../assets/icons/navIcon.js";
import logo from "../assets/logo.png";
import DarkModeToggler from "./DarkModeToggler";
import { navLinks } from "../utils/localDb.js";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleClickOutside = (event) => {
    const isDropdownClicked = dropdownRef.current.some(
      (ref) => ref && ref.contains(event.target)
    );
    if (!isDropdownClicked) {
      setActiveDropdown(null); // Close all dropdowns if clicked outside
    }
  };

  // Add event listener to handle clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header>
      {/* First Row: Offer Banner */}
      <div className="offer first-row px-4 mx-auto relative bg-gradient-to-r from-[#AB262B] from-10% via-[#EBBA0E] via-70% to-[#EBBA0E] to-90%">
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

      {/* Second Row: Hidden on Mobile */}
      <div className="second-row hidden xl:container xl:mx-auto lg:flex font-poppins bg-background justify-between py-4 items-center px-10">
        <div className="left flex gap-3">
          <img src={icons.mail} alt="mail icon" />
          <span className="text-[#5C6671] text-sm font-normal">
            contact@nextpro.com
          </span>
        </div>
        <div className="right flex gap-10">
          <div className="left flex items-center gap-8">
            <ul className="flex items-center gap-3">
              <li className="cursor-pointer">
                <img src={icons.fb} alt="Facebook" />
              </li>
              <li className="cursor-pointer">
                <img src={icons.yt} alt="YouTube" />
              </li>
              <li className="cursor-pointer">
                <img src={icons.X} alt="X" />
              </li>
              <li className="cursor-pointer">
                <img src={icons.insta} alt="Instagram" />
              </li>
              <li className="cursor-pointer">
                <img src={icons.linkedin} alt="LinkedIn" />
              </li>
            </ul>
            <div className="dark-mode">
              <DarkModeToggler />
            </div>
            <div className="right flex items-center">
              <img src={icons.globe} alt="globe icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2"></div>

      {/* Third Row: Main Navigation */}
      <div className="third-row xl:container m-auto relative flex items-center justify-between py-4 px-4 md:px-10">
        <img
          src={logo}
          alt="logo"
          className="inline align-middle w-40 xl:w-60"
        />

        {/* Hamburger Menu for Mobile View */}
        <div className="lg:hidden ml-auto">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links and CTA Buttons for Large Screens */}
        <div className="hidden lg:flex text-center justify-between">
          {/* Nav Links */}
          <nav className="flex gap-6 xl:gap-10 justify-center">
            {navLinks.map((section, index) => (
              <div
                key={index}
                className="relative group font-poppins capitalize"
                ref={(el) => (dropdownRef.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)} // Add hover functionality
                onMouseLeave={handleMouseLeave} // Remove hover functionality
              >
                <button
                  className="flex items-center justify-between text-small font-medium py-2 text-left hover:text-[#FEA500]"
                >
                  {section.title}
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform ${
                      activeDropdown === index ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-2.879a1 1 0 011.414 1.414l-4 3.5a1 1 0 01-1.414 0l-4-3.5a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`${
                    activeDropdown === index ? "max-h-auto opacity-100" : "max-h-0 opacity-0"
                  } lg:absolute left-0 w-48 p-2 top-12 bg-white shadow-lg rounded-xl transition-all duration-500 ease-in-out overflow-hidden`}
                >
                  {section.links.map((link, subIndex) => (
                    <a
                      key={subIndex}
                      href={link.url}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200 text-left"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Call to Action Buttons */}
        </div>
        <div className="cta-btns items-center gap-6 hidden lg:flex">
          <a
            href="#"
            className="cursor-pointer capitalize text-small font-medium"
          >
            login
          </a>
          <a
            href="#"
            className="cursor-pointer py-2 px-5 text-small font-medium text-white rounded-full capitalize bg-[#FEA500]"
          >
            sign up
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        } transition-all duration-500 ease-in-out overflow-hidden py-6 px-6 absolute left-0 right-0 top-auto sm:w-1/2 sm:left-1/2 rounded-lg md:rounded-xl border bg-white z-50`}
      >
        {/* Nav Links */}
        <nav className="flex flex-col gap-0">
          {navLinks.map((section, index) => (
            <div
              key={index}
              className="relative"
              ref={(el) => (dropdownRef.current[index] = el)}
            >
              <button
                onClick={() => toggleDropdown(index)} // Toggle dropdown on click for mobile
                className="flex justify-between items-center w-full py-2 text-gray-700 hover:text-[#FEA500]"
              >
                {section.title}
                <svg
                  className={`w-6 h-6 ml-1 transition-transform ${
                    activeDropdown === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-2.879a1 1 0 011.414 1.414l-4 3.5a1 1 0 01-1.414 0l-4-3.5a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`${
                  activeDropdown === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out`}
              >
                {section.links.map((link, subIndex) => (
                  <a
                    key={subIndex}
                    href={link.url}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 text-left"
                    onClick={() => {
                      setActiveDropdown(null); // Close dropdown on link click
                      setIsMenuOpen(false); // Close mobile menu
                    }} 
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Call to Action Buttons */}
        <div className="flex flex-col gap-6 mt-6">
          <a
            href="#"
            className="cursor-pointer capitalize text-small font-medium"
            onClick={() => setIsMenuOpen(false)} // Close mobile menu on click
          >
            login
          </a>
          <a
            href="#"
            className="cursor-pointer py-2 px-5 text-small font-medium text-white rounded-full capitalize bg-[#FEA500]"
            onClick={() => setIsMenuOpen(false)} // Close mobile menu on click
          >
            sign up
          </a>
        </div>
      </div>
    </header>
  );
};