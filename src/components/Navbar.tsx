import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/cryptoanimation.json";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-black text-white py-4 px-4 sm:px-6 border-b border-gray-700 shadow-sm z-50 relative overflow-x-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "40px", width: "40px" }}
          />
          <span className="text-xl font-bold tracking-wide">CryptoDemo</span>
        </div>

        <div className="relative space-x-6 text-sm" ref={dropdownRef}>
          <Link to="/demo" className="hover:text-blue-400 transition-colors">
            Demo
          </Link>

          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="hover:text-blue-400 transition-colors focus:outline-none"
          >
            About ▾
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded shadow-lg z-50">
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-800 transition-colors"
              >
                What is DH?
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-800 transition-colors"
              >
                Security Risks
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
