"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mt-10 mb-6 text-center">About Us</h1>
      <p className="max-w-3xl text-center text-gray-700 mb-10">
        Welcome to our platform! We are dedicated to providing the best products and services
        to our customers. Our team is passionate about innovation, quality, and customer satisfaction.
        Our mission is to deliver a seamless shopping experience and high-quality products that
        meet your needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-[#F8F1E8] p-6 rounded-lg shadow-md flex flex-col items-center">
          <img
            src="/images/team1.jpg"
            alt="Team Member 1"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-1">Antu Shil</h2>
          <p className="text-gray-600 text-center">Founder & MERN Stack Developer</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <img
            src="/images/team2.jpg"
            alt="Team Member 2"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-1">Jane Doe</h2>
          <p className="text-gray-600 text-center">UI/UX Designer</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <img
            src="/images/team3.jpg"
            alt="Team Member 3"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-1">John Smith</h2>
          <p className="text-gray-600 text-center">Backend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
