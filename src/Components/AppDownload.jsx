import { useState } from "react";
import img1 from "../assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.webp";
import img2 from "../assets/9f0c85a5e33adb783fa0aef667075f9e1556003622.webp";
import img3 from "../assets/23e930757c3df49840c482a8638bf5c31556001144.webp";
export default function AppDownload() {
  const [contactType, setContactType] = useState("email");
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#fff7f2] py-10 px-6 lg:px-20">
      {/* Mobile Image */}
      <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src={img1}
          alt="Zomato App"
          className="w-64 md:w-80 lg:w-[400px]"
        />
      </div>
      {/* Text & Form */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-5">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Get the Zomato app
        </h2>
        <p className="text-gray-500">
          We will send you a link, open it on your phone to download the app.
        </p>

        {/* Toggle buttons */}
        <div className="flex justify-center lg:justify-start gap-4 my-4">
          {["email", "phone"].map((type) => (
            <label key={type} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="contact"
                value={type}
                checked={contactType === type}
                onChange={() => setContactType(type)}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border border-red-500 flex items-center justify-center transition ${
                  contactType === type ? "bg-red-500" : "bg-white"
                }`}
              >
                {contactType === type && (
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                )}
              </span>
              <span className="ml-2 capitalize">{type}</span>
            </label>
          ))}
        </div>

        {/* Input and button */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            type={contactType === "email" ? "email" : "tel"}
            placeholder={
              contactType === "email" ? "Enter your email" : "Enter your phone"
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full sm:w-64 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <button className="w-full sm:w-auto bg-red-500 text-white px-4 py-3 rounded-md hover:bg-red-600 transition">
            Share App Link
          </button>
        </div>

        {/* App Store buttons */}
        <p className="text-gray-500 mt-4">Download app from</p>
        <div className="flex justify-center lg:justify-start gap-4 mt-2">
          <img
            src={img3}
            alt="Google Play"
            className="w-32 cursor-pointer hover:scale-105 transition"
          />
          <img
            src={img2}
            alt="App Store"
            className="w-32 cursor-pointer hover:scale-105 transition"
          />
        </div>
      </div>
    </div>
  );
}
