import React, { useState } from "react";
import { CiMobile1 } from "react-icons/ci";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Header() {
  const [toggel, Settoggel] = useState(false);

  return (
    <section
      className={`relative text-white z-40 p-4 transition-all duration-300 ${
        toggel ? "bg-white text-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center">
          <CiMobile1 className="w-5 h-5" />
          <h5 className="text-[14px] font-bold ml-2">Get the App</h5>
        </div>

        {/* Center Section (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-4">
          <ul className="flex items-center space-x-4">
            <li className="p-4 hover:text-red-500 cursor-pointer">Investor Relations</li>
            <li className="p-4 hover:text-red-500 cursor-pointer">Add restaurant</li>
            <li className="p-4 hover:text-red-500 cursor-pointer">Login</li>
            <li className="p-4 hover:text-red-500 cursor-pointer">Signup</li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        {toggel ? (
          <IoMdClose
            onClick={() => Settoggel(!toggel)}
            className="md:hidden w-6 h-6 cursor-pointer text-black"
          />
        ) : (
          <IoMdMenu
            onClick={() => Settoggel(!toggel)}
            className="md:hidden w-6 h-6 cursor-pointer"
          />
        )}
      </div>

      {/* Responsive Mobile Navigation */}
      <div
        className={`fixed md:hidden left-0 w-full h-[100vh] bg-white text-black p-5 transition-all duration-300 ${
          toggel ? "top-[50px]" : "top-[-200%]"
        }`}
      >
        <ul className="space-y-4 ">
          <li className="p-4 hover:text-red-500 ">Investor Relations</li>
          <li className="p-4 hover:text-red-500 ">Add restaurant</li>
          <li className="p-4 hover:text-red-500 ">Login</li>
          <li className="p-4 hover:text-red-500">Signup</li>
        </ul>
      </div>
    </section>
  );
}
