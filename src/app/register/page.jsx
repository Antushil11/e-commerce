import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const regiserPage = () => {
  return (
    <div className="min-h-screen">
      <div className="card bg-base-100  mt-40 mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
        <div className="card-body bg-[#F8F1E8]">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="displayName"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Name"
                required
              />

              <label className="label">PhotoURL</label>
              <input
                type="text"
                name="photoURL"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Photo URL"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn text-white mt-4 rounded-full bg-primary">
                Login
              </button>
            </fieldset>
          </form>

          <button className="btn bg-white rounded-full text-black border-[#e5e5e5]">
            <FaGoogle />
            Login with Google
          </button>

          <div className="text-center mt-2">
            <p className=" text-black">
              All ready have a account{" "}
              <Link className="text-blue-400" href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default regiserPage;
