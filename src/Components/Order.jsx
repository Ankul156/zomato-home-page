import React from "react";
import img1 from "../assets/e5b8785c257af2a7f354f1addaf37e4e1647364814.webp";
import img2 from "../assets/d026b357feb0d63c997549f6398da8cc1647364915.webp";
import img3 from "../assets/371de657644f1b5818fcb5d83387c8c91722851940.webp";

export default function DiningCard() {
  const cards = [
    {
      title: "Order Online",
      image: img1,
      description: "Stay home and order to your doorstep.",
    },
    {
      title: "Dining",
      image: img2,
      description: "View the city's favourite dining venues.",
    },
    {
      title: "Live Events",
      image: img3,
      description: "Discover India’s best events & concerts.",
    },
  ];
  console.log(cards.image);
  return (
    <section className="w-full ">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-5 flex-wrap">
        {/* Dining Card */}
        {cards.map((cards, i) => {
          return (
            <div className="w-[353px] bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-500">
              {/* Image Section */}
              <img
                src={cards.image}
                alt="Dining"
                className="w-full h-40 object-cover"
              />

              {/* Text Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{cards.title}</h2>
                <p className="text-gray-600 text-sm truncate">
                  {cards.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
