"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProductsPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

 const Products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    description: "High quality wireless headphones with noise cancellation.",
    image: "https://i.ibb.co/3YPztkSh/blu1.jpg",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 200,
    description: "Stylish smart watch with heart rate monitor and GPS.",
    image: "https://i.ibb.co/S4HhDZw4/ae08e1a0-4729-492d-818c-0c55b3554d09-size1080-crop-Center.jpg",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 80,
    description: "Durable leather backpack for travel and daily use.",
    image: "https://i.ibb.co/bMsTdpPv/B0-CVQH17-QM-MAIN-800x.jpg",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 95,
    description: "Comfortable running shoes for all-day wear.",
    image: "https://i.ibb.co/20W5Snsb/mhl-opener-run-shoes-311-67edd9f20e75a.jpg",
    category: "Footwear",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 45,
    description: "Trendy sunglasses with UV protection.",
    image: "https://i.ibb.co/PZBRPz25/662854bd124a854eb7277247-wearme-pro-flat-top-polarized-lens.jpg",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Coffee Maker",
    price: 150,
    description: "Automatic coffee maker with programmable settings.",
    image: "https://i.ibb.co/QvrM5BVV/ghk-indextesting-coffeemakers-138-67e318933bd16.jpg",
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
  {
    id: 9,
    name: "Travel Wallet",
    price: 25,
    description: "Compact wallet designed for travel essentials.",
    image: "https://i.ibb.co.com/0pBDgVtY/710-WGJAr-Pb-L-AC-SL1500.jpg",
    category: "Accessories",
  },
  {
    id: 10,
    name: "Casual Sneakers",
    price: 60,
    description: "Lightweight everyday sneakers with soft cushioning.",
    image: "https://i.ibb.co.com/0Vn0rxXr/1-4d03a904-71e2-4156-a922-7c38562170d3-1024x1024.jpg",
    category: "Footwear",
  },
  {
    id: 11,
    name: "Leather Belt",
    price: 30,
    description: "Premium leather belt with classic buckle.",
    image: "https://i.ibb.co.com/C5HfT7Jx/S4c55e0c81e244f319089a6b08d6ce2eea-jpg-720x720q80.jpg",
    category: "Accessories",
  },
  {
    id: 12,
    name: "Mini Air Cooler",
    price: 90,
    description: "Compact air cooler for small rooms and offices.",
    image: "https://i.ibb.co.com/TBRJNRX6/UDr-SLh-BBlmn1-I7a-Dl-EKBZQ9t74-Hhle-JB9e8-MIlyu.jpg",
    category: "Home Appliances",
  },
  {
    id: 13,
    name: "Sports Water Bottle",
    price: 20,
    description: "Leak-proof BPA-free reusable water bottle.",
    image: "https://i.ibb.co.com/d0ZtBk59/0756674-sports-water-bottle-with-sports-print-950ml.jpg",
    category: "Accessories",
  },
  {
    id: 14,
    name: "Smart Table Lamp",
    price: 110,
    description: "Touch control lamp with adjustable brightness.",
    image: "https://i.ibb.co.com/twrYxDDj/pms-1574669860-58966823-600x600.jpg",
    category: "Home Appliances",
  },
];


  useEffect(() => {
    setProducts(Products);
  }, []);

  const handleView = (id) => {
    router.push(`/products/${id}`);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category)
    );
  });

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-2 text-center">Our Products</h1>
      <p className="text-center text-gray-600 mb-6">
        Browse through our amazing collection of products. Find what suits you best.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:border-blue-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border bg-cyan-600 border-gray-300 rounded px-4 py-2 w-full sm:w-1/4 focus:outline-none focus:border-blue-500"
        >
          <option className="" value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Footwear">Footwear</option>
          <option value="Home Appliances">Home Appliances</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-gray-600 rounded-lg shadow-md overflow-hidden flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
                <p className="text-gray-600 mb-2 line-clamp-2 text-white">{product.description}</p>
                <p className="font-bold mb-4">${product.price}</p>
                <button
                  onClick={() => handleView(product.id)}
                  className="mt-auto  text-white px-4 py-2 rounded bg-cyan-600 hover:bg-red-500"
                >
                  Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
