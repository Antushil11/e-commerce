"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const Products = [
  {
    id: 1,
    name: "Product A",
    price: 25,
    description:
      "High quality product A. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "https://ibb.co.com/yTxhfz4",
    date: "2025-11-26",
    priority: "High",
  },
  {
    id: 2,
    name: "Product B",
    price: 40,
    description:
      "Durable product B. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
    image: "/images/product-b.jpg",
    date: "2025-11-20",
    priority: "Medium",
  },
  {
    id: 3,
    name: "Product C",
    price: 15,
    description:
      "Affordable product C. Praesent mauris. Fusce nec tellus sed augue semper porta.",
    image: "/images/product-c.jpg",
    date: "2025-11-15",
    priority: "Low",
  },
  {
    id: 4,
    name: "Product D",
    price: 60,
    description:
      "Premium product D. Mauris massa. Vestibulum lacinia arcu eget nulla.",
    image: "/images/product-d.jpg",
    date: "2025-11-10",
    priority: "High",
  },
   { id: 5, name: "Product E", price: 35, description: "Stylish product E with modern look.", image: "https://i.ibb.co/Jk4QkK3/product-e.jpg", category: "Category 3" },
  { id: 6, name: "Product F", price: 50, description: "Reliable product F with long-lasting quality.", image: "https://i.ibb.co/fCDhY9s/product-f.jpg", category: "Category 1" },
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
            className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
