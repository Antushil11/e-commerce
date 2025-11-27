"use client";

import { auth } from "@/Firebase/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const Loginpage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    
  };

  return (
    <div className="min-h-screen">
      <div className="card bg-base-100 mt-40 mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
        <div className="card-body bg-[#F8F1E8]">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form onSubmit={onSubmit}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)} 
                name="email"
                value={email}
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                name="password"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn text-white mt-4 rounded-full bg-primary"
              >
                Login
              </button>
            </fieldset>
          </form>

          <button className="btn bg-white rounded-full text-black border-[#e5e5e5] mt-2">
            <FaGoogle className="mr-2" />
            Login with Google
          </button>

          <div className="text-center mt-2">
            <p className=" text-black">You have a not account ? <Link className='text-blue-400' href="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
