"use client";

import React, { useEffect, useState } from "react";

const Heropage = () => {
    const images = [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        "https://images.unsplash.com/photo-1503602642458-232111445657"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className=" h-[80vh] flex items-center justify-center text-center px-6 relative transition-all duration-700"
            style={{
                backgroundImage: `url('${images[currentIndex]}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-3xl text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Experience the Future of Shopping
                </h1>

                <p className="mt-4 text-lg md:text-xl text-gray-200">
                    Find the best products at unbeatable prices — fast, simple & secure.
                </p>

                <a
                    href="/products"
                    className="inline-block mt-8 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                >
                    Shop Now
                </a>
            </div>
        </section>
    );
};

export default Heropage;
