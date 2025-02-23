import React from "react";
import { FaChessKnight, FaLeaf } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosMusicalNotes } from "react-icons/io";

function Hobbies() {
  return (
    <section id="hobbies" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section: Grid List */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/image3.webp"
            alt="Hobbies"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold text-theme font-tenor mb-8 text-center md:text-left">
            Hobbies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  w-full">
            {/* Hobby Item */}
            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
              <IoIosMusicalNotes className="text-theme text-3xl" />
              <p className="text-lg font-medium text-gray-700">Music</p>
            </div>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
              <MdOutlineTravelExplore className="text-theme text-3xl" />
              <p className="text-lg font-medium text-gray-700">traveling</p>
            </div>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
              <FaChessKnight className="text-theme text-3xl" />
              <p className="text-lg font-medium text-gray-700">Playing chess</p>
            </div>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
              <FaLeaf className="text-theme text-3xl" />
              <p className="text-lg font-medium text-gray-700">Gardening</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
