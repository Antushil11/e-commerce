"use client";
import { useState } from "react";
import Link from "next/link";
import logo from "../../public/image/Modern eCommerce log.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-black sticky  top-0 z-50 ">
      <nav className=" bg-black  shadow-md max-w-7xl mx-auto ">
      <div className=" flex gap-4 items-center justify-between">
        <div>
          <Image className="w-2/14" src={logo} alt="logo"></Image>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-500">
            Products
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="block px-4 py-2 bg-blue-600 hover:text-black hover:bg-cyan-600  text-white rounded-md"
          >
            Login
          </Link>
          <Link href="/register" className="block hover:text-black hover:bg-cyan-600 px-4 py-2 border rounded-md">
            Register
          </Link>
        </div>
      </div>
    </nav>
    </div>
  );
}
