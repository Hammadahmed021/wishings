import React, { useRef, useState, useEffect } from "react";
import { LanguageDropdown } from "../Footer/LanguageDropdown.jsx";
import WishingsLogo from "../../../assets/WishingsLogo.svg";
import * as footerIcon from "../../../assets/icons/footerIcons/footerIcons.js";
import { footerLinks, footerAddress } from "../../../utils/localDb.js";
import * as footerImg from "../../../assets/images/footerImages/index.js";
import { FaLocationDot } from "react-icons/fa6";

const iconMapping = {
  FaLocationDot: <FaLocationDot className="text-primary text-large mr-4 flex-shrink-0" />,
};

const Footer = () => {
  const sectionRefs = useRef([]); // Separate refs for each section
  const [overflowStates, setOverflowStates] = useState([]);

  // Check if each section is overflowing
  useEffect(() => {
    const checkOverflow = () => {
      const states = sectionRefs.current.map((ref) =>
        ref ? ref.scrollHeight > ref.clientHeight : false
      );
      setOverflowStates(states);
    };

    checkOverflow(); // Initial check
    window.addEventListener("resize", checkOverflow); // Recheck on resize

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <footer className="pt-12">
      <div className="2xl:container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-10 gap-x-10 xl:gap-x-20 px-4 lg:px-6">
          {/* First Column: Logo, description, and social icons */}
          <div className="flex col-span-1 lg:col-span-2 flex-col gap-6">
            <img src={WishingsLogo} alt="Wishings Logo" className="max-w-72" />
            <p>
              <small>
                FlexClip is a simple yet powerful video maker and editor for
                everyone. We help users easily create compelling video content
                for personal or business purposes without any learning curve.
              </small>
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={footerIcon.youtube} alt="YouTube icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={footerIcon.facebook} alt="Facebook icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={footerIcon.X} alt="X icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={footerIcon.linkinedIn} alt="LinkedIn icon" />
              </a>
            </div>
          </div>

          {/* Link Columns with Fixed Height and Scroll */}
          {footerLinks.map((section, index) => (
            <div className="font-roboto " key={index}>
              <h4 className="text-medium font-bold mb-4">{section.title}</h4>
              <div
                ref={(el) => (sectionRefs.current[index] = el)} // Assign individual refs
                className={`flex flex-col font-roboto overflow-y-auto 
              h-40 min-h-40 max-h-[16rem] lg:h-56 
              [&::-webkit-scrollbar]:w-1 
              [&::-webkit-scrollbar-track]:rounded-full 
              [&::-webkit-scrollbar-track]:bg-gray-100 
              [&::-webkit-scrollbar-thumb]:bg-primary 
              [&::-webkit-scrollbar-thumb]:rounded-full 
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700 
              dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}
              >
                <ul className="space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        className="text-gray-600 hover:text-gray-900 transition-colors block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t-2 border-#e5e7eb my-6"></div>

        {/* Address Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-y-6 gap-x-3 px-4 lg:px-6">
          {footerAddress.map((item) => (
            <div key={item.id} className="max-w-lg text-left">
              <h2 className="text-medium font-bold mb-4">{item.heading}</h2>
              <div className="flex items-start">
                {iconMapping[item.icon]}
                <p className="text-gray-600 text-left text-small">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-#e5e7eb mt-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 gap-y-6 bg-primary px-4 lg:px-6">
          <div className="flex flex-wrap w-auto h-auto justify-between gap-y-6 gap-x-6 ">
            <img
              src={footerImg.google}
              alt="Image 1"
              className="w-auto h-auto max-w-44 object-cover"
            />
            <img
              src={footerImg.clutch}
              alt="Image 2"
              className="w-auto h-auto max-w-44 object-cover"
            />
            <img
              src={footerImg.trust}
              alt="Image 3"
              className="w-auto h-auto max-w-44 object-cover"
            />
            <img
              src={footerImg.bark}
              alt="Image 4"
              className="w-auto h-auto max-w-44 object-cover"
            />
          </div>

          <div className="text-left text-small text-white">
            <p>&copy; 2024 Wishings. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
