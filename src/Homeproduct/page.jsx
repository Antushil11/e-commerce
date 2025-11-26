"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const dummyProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    description: "High quality wireless headphones with noise cancellation.",
    image: "https://images.unsplash.com/photo-1580894908361-93ed36b0ec37?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 200,
    description: "Stylish smart watch with heart rate monitor and GPS.",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 80,
    description: "Durable leather backpack for travel and daily use.",
    image: "https://images.unsplash.com/photo-1580894894516-0f5b7c1b0d7d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 95,
    description: "Comfortable running shoes for all-day wear.",
    image: "https://images.unsplash.com/photo-1600180758895-06b8b9bc72d2?auto=format&fit=crop&w=800&q=80",
  },
];

const HomeProductPage = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  const handleView = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-2 text-center">Featured Products</h1>
      <p className="text-center text-gray-600 mb-6">
        Check out some of our top products below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
              <p className="font-bold mb-4">${product.price}</p>
              <button
                onClick={() => handleView(product.id)}
                className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProductPage;
