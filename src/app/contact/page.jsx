"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen  flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mt-10 mb-6 text-center">Contact Us</h1>

      <p className="max-w-2xl text-center text-gray-700 mb-10">
        Have questions or feedback? Fill out the form below and we will get back to you as soon as possible.
      </p>

      <div className="w-full max-w-lg bg-gray-700 rounded-lg shadow-md p-8">
        {submitted && (
          <p className="mb-4 text-green-600 font-semibold text-center">
            Thank you for contacting us!
          </p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className=" text-white px-4 py-2 rounded bg-cyan-600 hover:bg-red-500"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-gray-700">
          <p><strong>Email:</strong> info@example.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
