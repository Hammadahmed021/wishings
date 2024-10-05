import React, { useEffect, useRef } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// Menu Items
export const menuItems = {
  Technology: [
    {
      title: "Example 1",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      title: "Example 2",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      title: "Example 3",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ],
  Home: [
    {
      title: "Welcome",
      description: "Introduction to our platform.",
    },
    {
      title: "Overview",
      description: "Get an overview of the services we offer.",
    },
  ],
  Pages: [
    {
      title: "About Us",
      description: "Learn more about our company.",
    },
    {
      title: "Contact",
      description: "Get in touch with us.",
    },
  ],
  Portfolio: [
    {
      title: "Projects",
      description: "View our completed projects.",
    },
    {
      title: "Case Studies",
      description: "Read detailed case studies of our work.",
    },
  ],
  Blogs: [
    {
      title: "Latest Posts",
      description: "Read our latest blog posts.",
    },
    {
      title: "Tutorials",
      description: "Explore step-by-step tutorials.",
    },
  ],
};

// Main NavMenu component
export const NavMenu = () => {
  const [openMenus, setOpenMenus] = React.useState({
    Technology: false,
    Home: false,
    Pages: false,
    Portfolio: false,
    Blogs: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Only one menu should be open at a time
  const toggleMenu = (menu) => {
    setOpenMenus((prev) => {
      const updatedMenus = {};
      Object.keys(prev).forEach((key) => (updatedMenus[key] = false));
      return { ...updatedMenus, [menu]: !prev[menu] };
    });
  };

  // Close mobile menu on click outside
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu with Esc key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="flex items-center justify-between" ref={menuRef}>
      {/* Hamburger Button for Mobile */}
      <div className="block lg:hidden">
        <button
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu"
          className="p-2 text-gray-700 rounded-md focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Large Screen Menu */}
      <div className="hidden lg:flex ">
        {Object.keys(menuItems).map((menuKey) => (
          <Menu key={menuKey} open={openMenus[menuKey]} handler={() => toggleMenu(menuKey)}>
            <MenuHandler>
              <Button
                aria-expanded={openMenus[menuKey] ? "true" : "false"}
                aria-controls={`${menuKey}-menu`}
                variant="text"
                className="flex items-center text-base font-normal capitalize tracking-normal p-3"
              >
                {menuKey}{" "}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenus[menuKey] ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="flex p-5">
              <ul className="col-span-4 flex w-full flex-col gap-1">
                {menuItems[menuKey].map(({ title, description }) => (
                  <a href="#" key={title}>
                    <MenuItem>
                      <Typography variant="h6" color="blue-gray" className="mb-1">
                        {title}
                      </Typography>
                      <Typography variant="small" color="gray">
                        {description}
                      </Typography>
                    </MenuItem>
                  </a>
                ))}
              </ul>
            </MenuList>
          </Menu>
        ))}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden flex flex-col space-y-2 mt-5 w-full z-10	"
        >
          <button
            className="text-right text-sm p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Close
          </button>
          {Object.keys(menuItems).map((menuKey) => (
            <div key={menuKey}>
              <button
                className="flex items-center justify-between w-full p-3 text-left text-base font-normal capitalize tracking-normal"
                onClick={() => toggleMenu(menuKey)}
                aria-expanded={openMenus[menuKey] ? "true" : "false"}
                aria-controls={`${menuKey}-mobile`}
              >
                {menuKey}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenus[menuKey] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenus[menuKey] && (
                <div id={`${menuKey}-mobile`} className="pl-5">
                  <ul className="flex flex-col gap-2">
                    {menuItems[menuKey].map(({ title, description }) => (
                      <li key={title}>
                        <a href="#" className="block p-2 hover:bg-gray-200 rounded">
                          <Typography variant="h6" color="blue-gray" className="mb-1">
                            {title}
                          </Typography>
                          <Typography variant="small" color="gray">
                            {description}
                          </Typography>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
