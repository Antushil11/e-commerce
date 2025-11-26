"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProductsPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const dummyProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 120,
      description: "High quality wireless headphones with noise cancellation.",
      image: "https://images.unsplash.com/photo-1580894908361-93ed36b0ec37?auto=format&fit=crop&w=800&q=80",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 200,
      description: "Stylish smart watch with heart rate monitor and GPS.",
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
      category: "Electronics",
    },
    {
      id: 3,
      name: "Leather Backpack",
      price: 80,
      description: "Durable leather backpack for travel and daily use.",
      image: "https://images.unsplash.com/photo-1580894894516-0f5b7c1b0d7d?auto=format&fit=crop&w=800&q=80",
      category: "Accessories",
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 95,
      description: "Comfortable running shoes for all-day wear.",
      image: "https://images.unsplash.com/photo-1600180758895-06b8b9bc72d2?auto=format&fit=crop&w=800&q=80",
      category: "Footwear",
    },
    {
      id: 5,
      name: "Sunglasses",
      price: 45,
      description: "Trendy sunglasses with UV protection.",
      image: "https://images.unsplash.com/photo-1599930914697-09a318b01fa1?auto=format&fit=crop&w=800&q=80",
      category: "Accessories",
    },
    {
      id: 6,
      name: "Coffee Maker",
      price: 150,
      description: "Automatic coffee maker with programmable settings.",
      image: "https://images.unsplash.com/photo-1598327104077-fb7f06e4db6b?auto=format&fit=crop&w=800&q=80",
      category: "Home Appliances",
    },
  ];

  useEffect(() => {
    setProducts(dummyProducts);
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
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/4 focus:outline-none focus:border-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Footwear">Footwear</option>
          <option value="Home Appliances">Home Appliances</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
