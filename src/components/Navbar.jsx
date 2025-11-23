"use client";
import { useState } from "react";
import Link from "next/link";
import logo from "../../public/image/Modern eCommerce log.png"
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fake user – replace with real AuthContext later
  const user = null; 
  // const user = { name: "Antu Shil", email: "antu@example.com" };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="sticky top-0 z-50 bg-green shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
        <Image className="w-2/12" src={logo} alt="logo"></Image>
        
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/products" className="hover:text-blue-500">Products</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>

          {!user && (
            <div className="flex items-center space-x-4">
              <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 border rounded-md hover:bg-gray-100">
                Register
              </Link>
            </div>
          )}

          {user && (
            <div className="relative">
              <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-100 rounded-md">
                {user.name}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                  <p className="px-4 py-2 text-gray-700">{user.email}</p>
                  <Link href="/add-product" className="block px-4 py-2 hover:bg-gray-100">
                    Add Product
                  </Link>
                  <Link href="/manage-products" className="block px-4 py-2 hover:bg-gray-100">
                    Manage Products
                  </Link>
                  <button className="block px-4 py-2 text-left hover:bg-gray-100 w-full">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <Link href="/" className="block">Home</Link>
          <Link href="/products" className="block">Products</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/contact" className="block">Contact</Link>

          {!user && (
            <>
              <Link href="/login" className="block px-4 py-2 bg-blue-600 text-white rounded-md">
                Login
              </Link>
              <Link href="/register" className="block px-4 py-2 border rounded-md">
                Register
              </Link>
            </>
          )}

          {user && (
            <div className="space-y-2">
              <p>{user.email}</p>
              <Link href="/add-product" className="block">Add Product</Link>
              <Link href="/manage-products" className="block">Manage Products</Link>
              <button className="block w-full text-left">Logout</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
