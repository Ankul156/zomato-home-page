import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const sections = [
  {
    title: "Popular cuisines near me",
    items: [
      "Bakery near me",
      "Beverages near me",
      "Biryani near me",
      "Burger near me",
      "Chinese near me",
      "Coffee near me",
      "Continental near me",
      "Desserts near me",
      "Pizza near me",
      "Rajasthani near me",
      "Sandwich near me",
      "Tea near me",
    ],
  },
  {
    title: "Popular restaurant types near me",
    items: [
      "Bakeries near me",
      "Bars near me",
      "Cafés near me",
      "Fine Dining near me",
      "Food Trucks near me",
      "Microbreweries near me",
      "Paan Shop near me",
    ],
  },
  {
    title: "Top restaurant chains",
    items: [
      "Bikanervala",
      "Burger King",
      "McDonald's",
      "Pizza Hut",
      "Sagar Ratna",
    ],
  },
  {
    title: "Cities we deliver to",
    items: ["Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Pune"],
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full">
      <div className="max-w-[1200px] mx-auto p-4 space-y-4">
        <h1 className="text-4xl text-[#363636]">Explore options near me</h1>
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md transition-shadow duration-300"
          >
            {/* Accordion Header */}
            <button
              className="w-full text-left p-4 text-lg font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              {section.title}
              {openIndex === index ? (
                <FiChevronUp size={20} />
              ) : (
                <FiChevronDown size={20} />
              )}
            </button>

            {/* Accordion Content */}
            <div
              className={`transition-all duration-300 overflow-hidden ${openIndex === index
                ? "max-h-[500px] opacity-100 p-4"
                : "max-h-0 opacity-0"
                }`}
            >
              <ul className="list-disc list-inside text-gray-600 space-y-2 ">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-black hover:text-orange-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
