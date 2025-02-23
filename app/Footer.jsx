import React from "react";

function Footer() {
  return (
    <footer className="bg-theme text-white py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h3 className="text-3xl font-bold mb-3">Let's Connect!</h3>
        <p className="max-w-lg mx-auto">
          Feel free to reach out for collaborations, teaching opportunities, or
          just a friendly chat.
        </p>
        <div className="mt-5">
          <a href="tel:+917011655033" className="underline hover:text-gray-300">
            +91 7011655033
          </a>{" "}
          |{" "}
          <a
            href="mailto:nishu84dahiya@gmail.com"
            className="underline hover:text-gray-300"
          >
            nishu84dahiya@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
