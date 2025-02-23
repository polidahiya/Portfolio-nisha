import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="lg:min-h-screen flex flex-col md:flex-row items-center md:justify-between bg-bg1 px-6 md:px-16"
    >
      {/* Left Section: Text Content */}
      <div className="flex-1 text-center md:text-left space-y-6 mt-10 lg:mt-0">
        <h1 className="text-5xl md:text-6xl font-extrabold text-theme leading-tight font-tenor">
          Welcome to My Teaching Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Passionate about educating and inspiring the next generation. Helping
          learners grow with engaging content and real-world examples.
        </p>
        <button className="mt-4 px-6 py-3 bg-theme text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
          Explore More
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center mt-10 lg:mt-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt="Teaching Illustration"
          className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl object-cover"
        />
      </div>
    </section>
  );
}

export default Home;
