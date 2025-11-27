"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const Products =  [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    description: "High quality wireless headphones with noise cancellation.",
    image: "https://i.ibb.co/3YPztkSh/blu1.jpg",
    category: "Electronics",
    date: "2025-01-01",
    priority: "High",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 200,
    description: "Stylish smart watch with heart rate monitor and GPS.",
    image: "https://i.ibb.co/S4HhDZw4/ae08e1a0-4729-492d-818c-0c55b3554d09-size1080-crop-Center.jpg",
    category: "Electronics",
    date: "2025-01-02",
    priority: "Medium",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 80,
    description: "Durable leather backpack for travel and daily use.",
    image: "https://i.ibb.co/bMsTdpPv/B0-CVQH17-QM-MAIN-800x.jpg",
    category: "Accessories",
    date: "2025-01-03",
    priority: "Low",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 95,
    description: "Comfortable running shoes for all-day wear.",
    image: "https://i.ibb.co/20W5Snsb/mhl-opener-run-shoes-311-67edd9f20e75a.jpg",
    category: "Footwear",
    date: "2025-01-04",
    priority: "High",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 45,
    description: "Trendy sunglasses with UV protection.",
    image: "https://i.ibb.co/PZBRPz25/662854bd124a854eb7277247-wearme-pro-flat-top-polarized-lens.jpg",
    category: "Accessories",
    date: "2025-01-05",
    priority: "Medium",
  },
  {
    id: 6,
    name: "Coffee Maker",
    price: 150,
    description: "Automatic coffee maker with programmable settings.",
    image: "https://i.ibb.co/QvrM5BVV/ghk-indextesting-coffeemakers-138-67e318933bd16.jpg",
    category: "Home Appliances",
    date: "2025-01-06",
    priority: "High",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 75,
    description: "Portable speaker with deep bass and long battery life.",
    image: "https://i.ibb.co/nN00kzmg/718yxon-HN8-L-AC-SL1500.jpg",
    category: "Electronics",
    date: "2025-01-07",
    priority: "Low",
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: 40,
    description: "High precision gaming mouse with RGB lighting.",
    image: "https://i.ibb.co/8gX5P0Rk/cobra-pro-01-500x500.webp",
    category: "Electronics",
    date: "2025-01-08",
    priority: "Medium",
  },
  {
    id: 9,
    name: "Travel Wallet",
    price: 25,
    description: "Compact wallet designed for travel essentials.",
    image: "https://i.ibb.co/0pBDgVtY/710-WGJAr-Pb-L-AC-SL1500.jpg",
    category: "Accessories",
    date: "2025-01-09",
    priority: "Low",
  },
  {
    id: 10,
    name: "Casual Sneakers",
    price: 60,
    description: "Lightweight everyday sneakers with soft cushioning.",
    image: "https://i.ibb.co/0Vn0rxXr/1-4d03a904-71e2-4156-a922-7c38562170d3-1024x1024.jpg",
    category: "Footwear",
    date: "2025-01-10",
    priority: "High",
  },
  {
    id: 11,
    name: "Leather Belt",
    price: 30,
    description: "Premium leather belt with classic buckle.",
    image: "https://i.ibb.co/C5HfT7Jx/S4c55e0c81e244f319089a6b08d6ce2eea-jpg-720x720q80.jpg",
    category: "Accessories",
    date: "2025-01-11",
    priority: "Medium",
  },
  {
    id: 12,
    name: "Mini Air Cooler",
    price: 90,
    description: "Compact air cooler for small rooms and offices.",
    image: "https://i.ibb.co/TBRJNRX6/UDr-SLh-BBlmn1-I7a-Dl-EKBZQ9t74-Hhle-JB9e8-MIlyu.jpg",
    category: "Home Appliances",
    date: "2025-01-12",
    priority: "Low",
  },
  {
    id: 13,
    name: "Sports Water Bottle",
    price: 20,
    description: "Leak-proof BPA-free reusable water bottle.",
    image: "https://i.ibb.co/d0ZtBk59/0756674-sports-water-bottle-with-sports-print-950ml.jpg",
    category: "Accessories",
    date: "2025-01-13",
    priority: "Low",
  },
  {
    id: 14,
    name: "Smart Table Lamp",
    price: 110,
    description: "Touch control lamp with adjustable brightness.",
    image: "https://i.ibb.co/twrYxDDj/pms-1574669860-58966823-600x600.jpg",
    category: "Home Appliances",
    date: "2025-01-14",
    priority: "High",
  },
];
const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = Products.find((p) => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) return <p className="text-center mt-20">Product not found</p>;

  return (
    <div className="min-h-screen p-6 flex justify-center items-start">
      <div className="bg-gray-600 rounded-lg shadow-md w-full max-w-4xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="texttext-white mb-6">{product.description}</p>
          <div className="flex flex-wrap gap-4 mb-6 texttext-white">
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Date:</strong> {product.date}
            </p>
            <p>
              <strong>Priority:</strong> {product.priority}
            </p>
          </div>
          <button
            onClick={() => router.push("/products")}
            className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-red-500"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
