import React from "react";

function About() {
  return (
    <section id="aboutme" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg"
            alt="Educator"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-theme font-tenor mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a passionate and motivated educator with a strong academic 
            background in Mathematics and Science. As a recent graduate, I am eager 
            to bring fresh perspectives and innovative teaching approaches to the classroom.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            My goal is to create a positive and engaging learning environment where 
            students feel encouraged to explore and develop their full potential. 
            I believe in interactive teaching methods that make learning enjoyable and effective.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
