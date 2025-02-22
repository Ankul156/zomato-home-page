import React, { useState } from "react";
import header from "../assets/header.avif";
import hading from "../assets/8313a97515fcb0447d2d77c276532a511583262271.webp";
import { FiMapPin, FiChevronDown, FiSearch, FiCrosshair } from "react-icons/fi";

export default function Section() {
  const [location, setLocation] = useState("Jaipur");
  const [search, setSearch] = useState("");

  return (
    <section className="relative top-[-90px] left-0 w-full">
      {/* Background Hero Section */}
      <div
        className="max-w-full h-[420px] mx-auto flex items-center bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${header})` }}
      >
        {/* Overlay Content */}
        <div className="w-full  py-5  flex flex-col items-center gap-4">
          {/* Logo/Image */}
          <div className="md:w-[300px] md:h-[60px] w-[200px] h-[40px]">
            <img src={hading} alt="Brand Heading" className="w-full h-full" />
          </div>

          {/* Title */}
          <h1 className="text-white md:text-2xl text-l font-bold text-center">
            Discover the best food & drinks in Jaipur
          </h1>

          {/* Search Form */}
          <div className="w-full max-w-xl px-4 md:px-0">
            <div className="flex flex-wrap md:flex-nowrap items-center bg-white shadow-lg rounded-[10px] p-3 w-full">
              {/* Location Input */}
              <div className="flex items-center space-x-2 px-3 w-full md:w-auto">
                <FiMapPin className="text-red-500 text-xl" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="outline-none text-gray-700 w-full md:w-28 min-w-0"
                />
                <FiChevronDown className="text-gray-600 cursor-pointer" />
              </div>

              {/* Divider */}
              <div className="hidden md:block w-[1px] h-6 bg-gray-300 mx-4"></div>

              {/* Search Input */}
              <div className="flex items-center w-full mt-2 md:mt-0">
                <FiSearch className="text-gray-500 text-lg mx-2" />
                <input
                  type="text"
                  placeholder="Search for restaurant, cuisine or a dish"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-none text-gray-700 w-full min-w-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
