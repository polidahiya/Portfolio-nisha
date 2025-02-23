"use client";
import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaGraduationCap, FaPalette, FaEnvelope } from "react-icons/fa";

const navItems = [
  { name: "Home", icon: <FaHome /> },
  { name: "About Me", icon: <FaUser /> },
  { name: "Education", icon: <FaGraduationCap /> },
  { name: "Hobbies", icon: <FaPalette /> },
  { name: "Contact", icon: <FaEnvelope /> },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-theme text-white shadow-md sticky top-0 w-full z-50">
      <div className="flex justify-between items-center py-3 px-6 md:px-10">
        {/* Logo / Brand Name */}
        <h1 className="flex items-center gap-2 text-2xl font-bold font-tenor">
          <img
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="logo"
            className="h-10 aspect-square rounded-full border-4 border-white"
          />
          My Portfolio
        </h1>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <FaBars size={28} />
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.icon}
              <a
                href={`#${item.name.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-theme bg-opacity-90 backdrop-blur-md lg:hidden duration-300 flex flex-col items-center justify-center ${
          isMenuOpen ? "" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-2xl"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
        <ul className="w-full text-center space-y-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.name.toLowerCase().replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-3 text-lg hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
