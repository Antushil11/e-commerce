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
        <div className="bg-[#bd9e77] p-6 rounded-lg shadow-md flex flex-col items-center">
          <img
            src="https://i.ibb.co.com/9k7x67Z6/172920901-s-400-u-c63e19fac407f3bcd18dad59692a050b6832b77c-v-4.png"
            alt="Team Member 1"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-1">Antu Shil</h2>
          <p className="text-gray-600 text-center">Founder & MERN Stack Developer</p>
        </div>

        <div className="bg-[#bd9e77] p-6 rounded-lg shadow-md flex flex-col items-center">
          <img
            src="https://i.ibb.co.com/VcWdjfcx/premium-photo-1664392134807-c9c7aca42671-q-80-w-878-auto-format-fit-crop-ixlib-rb-4-1.jpg"
            alt="Team Member 2"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-1">Jane Doe</h2>
          <p className="text-gray-600 text-center">UI/UX Designer</p>
        </div>

        <div className="bg-[#bd9e77] p-6 rounded-lg shadow-md flex flex-col items-center">
          <img
            src="https://i.ibb.co.com/svv4wGXC/816634-v9-bc.jpg"
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
