import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";
import img2 from "../assets/9f0c85a5e33adb783fa0aef667075f9e1556003622.webp";
import img3 from "../assets/23e930757c3df49840c482a8638bf5c31556001144.webp";

const Footer = () => {
  return (
    <section className="w-full bg-gray-100 py-10 px-6 text-gray-700">
      <footer className="max-w-[1200px] mx-auto">
        {/* Top Section - Logo & Language Selection */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-3xl font-bold">zomato</h2>

          <div className="flex gap-2">
            <button className="border px-4 py-2 flex items-center gap-2 text-sm rounded-md cursor-pointer hover:scale-105 transition">
              🇮🇳 India
            </button>
            <button className="border px-4 py-2 flex items-center gap-2 text-sm rounded-md cursor-pointer hover:scale-105 transition">
              🌍 English
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-around">
          {/* Middle Section - Links & Socials */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
            {/* About Zomato */}
            <div>
              <h3 className="font-bold mb-2">ABOUT ZOMATO</h3>
              <ul className="space-y-1 text-sm">
                <li className="hover:text-orange-800 cursor-pointer">Who We Are</li>
                <li className="hover:text-orange-800 cursor-pointer">Blog</li>
                <li className="hover:text-orange-800 cursor-pointer">Work With Us</li>
                <li className="hover:text-orange-800 cursor-pointer">Investor Relations</li>
                <li className="hover:text-orange-800 cursor-pointer">Report Fraud</li>
                <li className="hover:text-orange-800 cursor-pointer">Press Kit</li>
                <li className="hover:text-orange-800 cursor-pointer">Contact Us</li>
              </ul>
            </div>

            {/* Zomaverse */}
            <div>
              <h3 className="font-bold mb-2">ZOMAVERSE</h3>
              <ul className="space-y-1 text-sm">
                <li className="hover:text-orange-800 cursor-pointer">Zomato</li>
                <li className="hover:text-orange-800 cursor-pointer">Blinkit</li>
                <li className="hover:text-orange-800 cursor-pointer">District</li>
                <li className="hover:text-orange-800 cursor-pointer">Feeding India</li>
                <li className="hover:text-orange-800 cursor-pointer">Hyperpure</li>
                <li className="hover:text-orange-800 cursor-pointer">Zomato Live</li>
                <li className="hover:text-orange-800 cursor-pointer">Zomaland</li>
                <li className="hover:text-orange-800 cursor-pointer">Weather Union</li>
              </ul>
            </div>

            {/* Restaurants */}
            <div>
              <h3 className="font-bold mb-2">FOR RESTAURANTS</h3>
              <ul className="space-y-1 text-sm">
                <li className="hover:text-orange-800 cursor-pointer">Partner With Us</li>
                <li className="hover:text-orange-800 cursor-pointer">Apps For You</li>
              </ul>
            </div>

            {/* Learn More */}
            <div>
              <h3 className="font-bold mb-2">LEARN MORE</h3>
              <ul className="space-y-1 text-sm">
                <li className="hover:text-orange-800 cursor-pointer">Privacy</li>
                <li className="hover:text-orange-800 cursor-pointer">Security</li>
                <li className="hover:text-orange-800 cursor-pointer">Terms</li>
              </ul>
            </div>
          </div>
          {/* Social Links & App Download */}
          <div className="mt-10 flex flex-col gap-4 items-center">
            {/* Social Media */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold mb-2">SOCIAL LINKS</h3>
              <div className="flex gap-4 text-xl">
                <FaLinkedin className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaXTwitter className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
                <FaFacebook className="cursor-pointer" />
              </div>
            </div>

            {/* App Download */}
            <div className="flex flex-col  gap-2 mt-4 md:mt-0">
              <img
                src={img2}
                alt="Download on the App Store"
                className="h-10 hover:scale-105 transition cursor-pointer"
              />
              <img src={img3} alt="Get it on Google Play" className="h-10 hover:scale-105 transition cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Section - Disclaimer */}
        <div className="mt-8 border-t pt-4 text-center text-sm">
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy, and Content Policies. All trademarks
            are properties of their respective owners. 2008-2025 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
