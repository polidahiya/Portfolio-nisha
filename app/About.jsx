import React from "react";

function About() {
  return (
    <section id="aboutme" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1661383321251-8f70f5171c9c?fm=jpg&q=60&w=2000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Educator"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-theme font-tenor mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a passionate and dedicated educator with a strong commitment to  
            fostering a positive learning environment. My goal is to inspire  
            students to reach their full potential through innovative teaching  
            methods and personalized attention.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            With years of experience, I aim to make learning engaging and  
            meaningful. Whether through interactive lessons or hands-on projects,  
            I believe in creating a dynamic space where students thrive.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
