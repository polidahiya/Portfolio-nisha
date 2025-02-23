import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="py-16 bg-bg1">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section: Timeline */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-theme font-tenor mb-8 text-center md:text-left ">
            Education
          </h2>
          <div className="space-y-6 border-l-4 border-theme pl-6">
            {/* Education Item */}
            <div className="relative">
              <FaGraduationCap className="absolute -left-9 top-1 text-theme text-2xl" />
              <h3 className="text-xl font-semibold">
                Bachelor of Education (B.Ed)
              </h3>
              <p className="text-gray-600">University of Education, 2022</p>
            </div>

            {/* Education Item */}
            <div className="relative">
              <FaGraduationCap className="absolute -left-9 top-1 text-theme text-2xl" />
              <h3 className="text-xl font-semibold">
                Master of Arts in English
              </h3>
              <p className="text-gray-600">State University, 2020</p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/image2.webp"
            alt="Education"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Education;
