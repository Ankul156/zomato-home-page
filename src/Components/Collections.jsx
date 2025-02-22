import React from "react";
import img1 from "../assets/6922d49fb675d0490edb652abf5ca45f_1727171277.webp";
import img2 from "../assets/c24b480f58f07a77719d00ff85c47ab3_1738912390.webp";
import img3 from "../assets/684397cd092de6a98862220e8cc40aca_1724236685.webp";
import img4 from "../assets/93ef9e90c3c33f415bbf55e88cfe4946_1732865253.avif";

const collections = [
  {
    title: "Newly Opened Restaurants",
    places: "12 Places",
    image: img1,
  },
  {
    title: "Candle Lit Dining",
    places: "16 Places",
    image: img2,
  },
  {
    title: "Top Trending Spots",
    places: "30 Places",
    image: img3,
  },
  {
    title: "Best Rooftop Places",
    places: "62 Places",
    image: img4,
  },
];

const Collections = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1200px] mx-auto p-10">
        {/* Heading */}
        <h1 className="text-4xl font-semibold">Collections</h1>
        <p className="text-gray-600 mb-8">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Jaipur, based on trends.
        </p>
        {/* Responsive Flexbox Layout */}
        <div className="flex flex-wrap justify-between">
          {collections.map((item, index) => (
            <div
              key={index}
              className="w-[250px] h-80 rounded-lg shadow-md bg-cover bg-center flex flex-col justify-end p-4 text-white transition-transform transform"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h3 className="text-md font-semibold">{item.title}</h3>
              <p className="text-sm">{item.places} ▶</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
