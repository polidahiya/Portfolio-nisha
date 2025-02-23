"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Create mailto link
    const mailtoLink = `mailto:nishu84dahiya@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 bg-bg1">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section: Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold text-theme font-tenor mb-8 text-center md:text-left">
            Contact Me
          </h2>
          <form
            className="bg-white p-6 rounded-lg shadow-lg space-y-4"
            onSubmit={handleSubmit}
          >
            {/* Name Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Name</label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg outline-none bg-transparent"
                rows="4"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-theme text-white flex items-center justify-center px-4 py-3 rounded-lg font-medium text-lg transition"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </form>
        </div>

        {/* Right Section: Contact Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/contact.jpg"
            alt="Contact Illustration"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
