import React from "react";
import { LanguageDropdown } from "../Footer/LanguageDropdown.jsx";
import WishingsLogo from "../../../assets/WishingsLogo.svg";
import SplitArts from "../../../assets/SplitArts.png";
import * as footerIcon from "../../../assets/icons/footerIcons/footerIcons.js";
import { footerLinks } from "../../../utils/localDb.js";

const Footer = () => {
  return (
    <footer className="py-12">
    <div className="container mx-auto px-4 md:px-6 lg:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-10 xl:gap-x-20">
        {/* First Column: Logo, description, language dropdown, and social icons */}
        <div className="flex col-span-1 lg:col-span-2 flex-col gap-6 ">
          <img src={WishingsLogo} alt="Wishings Logo" className="max-w-72" />
          <p>
            <small>
              FlexClip is a simple yet powerful video maker and editor for everyone. We help users easily create compelling video content for personal or business purposes without any learning curve.
            </small>
          </p>
          <LanguageDropdown />
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
          <span>
            <small>powered by (Split Arts)</small>
          </span>
          <img src={SplitArts} alt="SplitArts" className="w-44 h-auto" />
        </div>

        {/* Second Column: Links */}
        <div className="flex flex-col md:items-center font-roboto">
          {footerLinks.slice(0, 1).map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href={link.url}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Third Column: Links */}
        <div className="flex flex-col lg:items-center font-roboto">
          {footerLinks.slice(1, 3).map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href={link.url}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fourth Column: Links */}
        <div className="flex flex-col md:items-center font-roboto">
          {footerLinks.slice(3, 4).map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href={link.url}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;