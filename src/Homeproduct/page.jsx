"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const dummyProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    description: "High quality wireless headphones with noise cancellation.",
    image: "https://i.ibb.co.com/3YPztkSh/blu1.jpg", 
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 200,
    description: "Stylish smart watch with heart rate monitor and GPS.",
    image: "https://i.ibb.co.com/S4HhDZw4/ae08e1a0-4729-492d-818c-0c55b3554d09-size1080-crop-Center.jpg", 
    category: "Electronics",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 80,
    description: "Durable leather backpack for travel and daily use.",
    image: "https://i.ibb.co.com/bMsTdpPv/B0-CVQH17-QM-MAIN-800x.jpg",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 95,
    description: "Comfortable running shoes for all-day wear.",
    image: "https://i.ibb.co.com/20W5Snsb/mhl-opener-run-shoes-311-67edd9f20e75a.jpg",
    category: "Footwear",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 45,
    description: "Trendy sunglasses with UV protection.",
    image: "https://i.ibb.co.com/PZBRPz25/662854bd124a854eb7277247-wearme-pro-flat-top-polarized-lens.jpg",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Coffee Maker",
    price: 150,
    description: "Automatic coffee maker with programmable settings.",
    image: "https://i.ibb.co.com/QvrM5BVV/ghk-indextesting-coffeemakers-138-67e318933bd16.jpg",
    category: "Home Appliances",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 75,
    description: "Portable speaker with deep bass and long battery life.",
    image: "https://i.ibb.co.com/nN00kzmg/718yxon-HN8-L-AC-SL1500.jpg",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: 40,
    description: "High precision gaming mouse with RGB lighting.",
    image: "https://i.ibb.co.com/8gX5P0Rk/cobra-pro-01-500x500.webp",
    category: "Electronics",
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
          <div key={product.id} className="bg-gray-600 rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-600 mb-2 line-clamp-2 text-white">{product.description}</p>
              <p className="font-bold mb-4 text-white">${product.price}</p>
              <button
                onClick={() => handleView(product.id)}
                className="mt-auto  text-white px-4 py-2 rounded bg-cyan-600 hover:bg-red-500 "
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
