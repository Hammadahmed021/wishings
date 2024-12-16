import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as icons from "../../../assets/icons/navIcon.js";
import logo from "../../../assets/logo.png";
import DarkModeToggler from "../DarkModeToggler.jsx";
import { navLinks } from "../../../utils/localDb.js";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { MdExpandMore } from "react-icons/md";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn.jsx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Verify } from "../../../utils/Api.js";
import { blogs } from "../../../utils/localDb.js";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Lifted state for dark mode
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const dropdownRef = useRef([]);
  const dropRef = useRef([]);

  console.log(authStatus, "authStatus");
  console.log(currentUser, "currentUser >>>>>>>>");

  const toggleDropdownAuth = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // Update dark mode globally
  };

  // const handleMouseEnter = (index) => {
  //   setActiveDropdown(index);
  // };

  // const handleDropdownMouseLeave = (index) => {
  //   // Check if the mouse is leaving both the menu item and the dropdown
  //   if (!dropdownRef.current[index].contains(event.relatedTarget)) {
  //     setActiveDropdown(null); // Close dropdown when mouse leaves both
  //   }
  // };

  let closeTimeout; // Declare timeout variable

  const handleMouseEnter = (index) => {
    clearTimeout(closeTimeout); // Clear any existing timeout
    setActiveDropdown(index); // Open dropdown immediately
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setActiveDropdown(null); // Close dropdown after delay
    }, 200); // Delay in milliseconds (adjust as needed)
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

  // Sync dark mode class on the <html> element based on isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const fetchCurrentUserData = async () => {
      try {
        const response = await Verify();
        const data = await response.data;
        setCurrentUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchCurrentUserData();
  }, []);

  return (
    <header className="dark:bg-slate-600 dark:text-white">
      {/* First Row: Offer Banner */}
      {/* <div className="offer first-row px-4 mx-auto relative bg-gradient-to-r from-[#AB262B] from-10% via-[#EBBA0E] via-70% to-[#EBBA0E] to-90%">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 py-4 items-center justify-center font-roboto font-semibold text-small leading-normal">
          <p className="text-white text-center">
            Spread the Cheer! Enjoy 30% Off on Personalized Wish Videos This
            Holiday Season – Don’t Miss Out!
          </p>
          <a
            href="#"
            className="px-7 py-1 bg-slate-100 rounded-[8px] capitalize text-[#896340] text-center text-small text-nowrap	"
          >
            grab now
          </a>
        </div>
      </div> */}

      {/* Second Row: Hidden on Mobile */}
      {/* <div className="second-row hidden xl:container xl:mx-auto lg:flex font-poppins bg-background justify-between py-4 items-center px-10 dark:bg-slate-600">
        <div className="left flex gap-3 ">
          <img
            src={icons.mail}
            alt="mail icon"
            className="dark:filter dark:brightness-0 dark:invert"
          />
          <p className="text-[#5C6671] text-sm font-normal dark:text-white">
            Info@wishings.io
          </p>
        </div>
        <div className="right flex gap-10">
          <div className="left flex items-center gap-8">
            <ul className="flex items-center gap-3">
              <li className="cursor-pointer">
                <img
                  src={icons.fb}
                  alt="Facebook"
                  className="dark:filter dark:brightness-0 dark:invert"
                />
              </li>
              <li className="cursor-pointer">
                <img
                  src={icons.yt}
                  alt="YouTube"
                  className="dark:filter dark:brightness-0 dark:invert"
                />
              </li>
              <li className="cursor-pointer">
                <img
                  src={icons.X}
                  alt="X"
                  className="dark:filter dark:brightness-0 dark:invert"
                />
              </li>
              <li className="cursor-pointer">
                <img
                  src={icons.insta}
                  alt="Instagram"
                  className="dark:filter dark:brightness-0 dark:invert"
                />
              </li>
              <li className="cursor-pointer">
                <img
                  src={icons.linkedin}
                  alt="LinkedIn"
                  className="dark:filter dark:brightness-0 dark:invert"
                />
              </li>
            </ul>
            <div className="dark-mode">
              <DarkModeToggler
                isDarkMode={isDarkMode} // Pass state
                toggleDarkMode={toggleDarkMode} // Pass function to toggle
              />
            </div>
            <div className="right flex items-center">
              <img
                src={icons.globe}
                alt="globe icon"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="border-b-2"></div>

      {/* Third Row: Main Navigation */}
      <div className="third-row container mx-auto relative flex items-center justify-between p-4">
        <Link to={"/"} className="outline-none">
          <img
            src={logo}
            alt="logo"
            className="inline align-middle w-40 xl:w-60"
          />
        </Link>

        {/* Hamburger Menu for Mobile View */}
        <div className="lg:hidden ml-auto flex items-center justify-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
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
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to={section.path}
                  className={({ isActive }) =>
                    isActive
                      ? `flex items-center justify-between py-2 text-primary font-medium`
                      : `flex items-center justify-between py-2 text-black font-medium hover:text-[#FEA500]`
                  }
                >
                  {section.title}
                  {section.title !== "Home" && section.title !== "Contact" &&(
                    <MdExpandMore
                      className={`w-5 h-5 ml-1 transition-transform duration-300 ${
                        activeDropdown === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </NavLink>

                {/* Conditional rendering for Blog dropdown */}
                {section.title === "Blog" ? (
                  <div
                    className={`absolute left-[-450px] w-auto p-4 top-20 z-20 text-left border-slate-500 bg-white shadow-lg rounded-xl transform transition-all duration-300 ease-in-out ${
                      activeDropdown === index
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    <h3 className="text-small font-semibold mb-4">
                      Our Latest Blogs
                    </h3>
                    <div className="flex gap-4 mb-4">
                      {blogs.map((blog, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex-none w-48 p-2 border rounded-md shadow-md cursor-pointer"
                        >
                          <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full h-32 object-cover rounded-md mb-2"
                          />
                          <h4 className="text-sm font-medium">{blog.title}</h4>
                          <p className="text-xs text-gray-500">{blog.date}</p>
                        </div>
                      ))}
                    </div>
                    <button>View More</button>
                  </div>
                ) : (
                  /* Default dropdown for other titles */
                  section.title !== "Home" && section.title !== "Contact" &&(
                    <div
                      className={`absolute left-0 w-48 p-2 top-20 z-20 text-left border-slate-500 bg-white shadow-md rounded-xl transform transition-all duration-300 ease-in-out ${
                        activeDropdown === index
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                      onMouseEnter={() => handleMouseEnter(index)}
                    >
                      {section.links.map((link, subIndex) => (
                        <a
                          key={subIndex}
                          href={link.url}
                          className="block px-4 py-2 text-gray-700 hover:text-primary rounded-md"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )
                )}
              </div>
            ))}
          </nav>
        </div>
        <ul className="flex items-center">
          {authStatus ? (
            <li className="inline-flex space-x-2">
              <div className="relative inline-block">
                <div className="flex items-center cursor-pointer">
                  <img
                    src={userData?.profile_image?.name}
                    alt="user profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-tn_dark text-base font-medium ml-2">
                    {userData?.name ||
                      userData?.user?.name ||
                      userData?.displayName}
                  </span>
                  <span className="p-2" onClick={toggleDropdownAuth}>
                    {isDropdownOpen ? (
                      <FaChevronUp className="text-tn_pink" size={12} />
                    ) : (
                      <FaChevronDown className="text-tn_dark" size={12} />
                    )}
                  </span>
                </div>
                {isDropdownOpen && (
                  <div
                    ref={dropRef}
                    className="absolute left-0 right-0 top-12 mt-1 bg-white border border-gray-300 shadow-md rounded-lg z-10"
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-tn_dark hover:bg-gray-200"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/ordes"
                      className="block px-4 py-2 text-tn_dark hover:bg-gray-200"
                    >
                      Orders
                    </Link>
                    <LogoutBtn />
                  </div>
                )}
              </div>
            </li>
          ) : (
            <>
              <div className="cta-btns items-center gap-6 hidden lg:flex">
                <Link
                  to={"/signin"}
                  className="cursor-pointer capitalize text-small font-medium"
                >
                  login
                </Link>
                <Link
                  to={"/signup"}
                  className="cursor-pointer py-2 px-5 text-small font-medium text-white rounded-full capitalize bg-[#FEA500]"
                >
                  sign up
                </Link>
              </div>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-500 ease-in-out overflow-hidden py-6 px-6 absolute left-0 right-0 top-auto sm:w-1/2 sm:left-1/2 rounded-lg md:rounded-xl border bg-white z-50 dark:bg-slate-600 dark:border-slate-600`}
      >
        {/* Nav Links */}
        <nav className="flex flex-col gap-0 ">
          {navLinks.map((section, index) => (
            <div
              key={index}
              className="relative"
              ref={(el) => (dropdownRef.current[index] = el)}
            >
              <div className="flex items-center">
                <NavLink
                  to={section.path} // Toggle dropdown on click for mobile
                  className="flex justify-between items-center w-full py-2 text-gray-700 hover:text-[#FEA500] dark:text-white"
                >
                  {section.title}
                </NavLink>
                <MdExpandMore
                  onClick={() => toggleDropdown(index)}
                  className={`w-5 h-5 ml-1 transition-transform duration-300 ${
                    activeDropdown === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {/* Dropdown Menu */}
              <div
                className={`${
                  activeDropdown === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out`}
              >
                {section.links.map((link, subIndex) => (
                  <a
                    key={subIndex}
                    href={link.url}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 text-left dark:text-white"
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

        {/* Second Row Content in Mobile */}
        <div className="flex flex-col gap-6 mt-4 ">
          <div className="flex gap-3 ">
            <img
              src={icons.mail}
              alt="mail icon"
              className="dark:filter dark:brightness-0 dark:invert"
            />
            <span className="text-[#5C6671] text-sm font-normal dark:text-white">
              Info@wishings.io
            </span>
          </div>
          <ul className="flex justify-start gap-10">
            <li className="cursor-pointer">
              <img
                src={icons.fb}
                alt="Facebook"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </li>
            <li className="cursor-pointer">
              <img
                src={icons.yt}
                alt="YouTube"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </li>
            <li className="cursor-pointer">
              <img
                src={icons.X}
                alt="X"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </li>
            <li className="cursor-pointer">
              <img
                src={icons.insta}
                alt="Instagram"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </li>
            <li className="cursor-pointer">
              <img
                src={icons.linkedin}
                alt="LinkedIn"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </li>
          </ul>
          <div className="flex gap-4 max-w-96">
            <Link
              to={"/signin"}
              className="cursor-pointer capitalize text-small font-medium"
            >
              login
            </Link>
            <Link
              to={"/signup"}
              className="cursor-pointer py-2 px-5 text-small font-medium text-white rounded-full capitalize bg-[#FEA500]"
            >
              sign up
            </Link>
          </div>
          <div className="flex justify-between text-center">
            <div className="dark-mode">
              <DarkModeToggler
                isDarkMode={isDarkMode} // Pass state to mobile toggle too
                toggleDarkMode={toggleDarkMode} // Same toggle function
              />
            </div>
            <div className="right flex items-center">
              <img
                src={icons.globe}
                alt="globe icon"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;