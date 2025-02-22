import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Updated icons

const localities = [
  { name: "C Scheme", places: "322 places" },
  { name: "Malviya Nagar", places: "720 places" },
  { name: "Tonk Road", places: "191 places" },
  { name: "Vaishali Nagar", places: "812 places" },
  { name: "MI Road", places: "144 places" },
  { name: "Mansarovar", places: "1134 places" },
  { name: "Raja Park", places: "341 places" },
  { name: "Bani Park", places: "141 places" },
  { name: "Ajmer Road", places: "289 places" },
  { name: "Jagatpura", places: "512 places" },
  { name: "Sodala", places: "278 places" },
  { name: "Civil Lines", places: "364 places" },
];

const PopularLocalities = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedLocalities = showAll ? localities : localities.slice(0, 8);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
        Popular localities in and around{" "}
        <span className="font-bold">Jaipur</span>
      </h2>

      {/* Grid for Localities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {displayedLocalities.map((locality, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md flex justify-between items-center bg-white hover:shadow-lg transition cursor-pointer"
          >
            <div>
              <h3 className="text-lg font-semibold">{locality.name}</h3>
              <p className="text-gray-500 text-sm">{locality.places}</p>
            </div>
            <span className="text-gray-500 text-xl">
              <IoIosArrowForward />
            </span>
          </div>
        ))}

        {/* Show More / Show Less Button */}
        <div
          className="p-4 rounded-lg shadow-md flex justify-center items-center bg-white hover:shadow-lg cursor-pointer transition"
          onClick={() => setShowAll(!showAll)}
        >
          <span className="text-lg font-semibold text-gray-600 flex items-center gap-2">
            {showAll ? (
              <>
                Show Less <FiChevronUp />
              </>
            ) : (
              <>
                See More <FiChevronDown />
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularLocalities;
