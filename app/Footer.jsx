import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-theme text-white py-10">
      <div className="container mx-auto px-6 text-center">
        
        {/* Title */}
        <h3 className="text-3xl font-bold mb-3">Let's Connect!</h3>
        <p className="max-w-lg mx-auto text-gray-300">
          Feel free to reach out for collaborations, teaching opportunities, or just a friendly chat.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400 transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-300 transition duration-300"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-300 hover:text-red-400 transition duration-300"
          >
            <FaEnvelope size={30} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
