import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinkClass = (path: string) =>
    currentPath === path
      ? "text-blue-400 font-bold underline"
      : "hover:text-blue-400 font-bold transition-colors";

  return (
    <nav className="w-full bg-black text-white py-4 px-4 sm:px-6 border-b border-gray-700 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className={`text-xl font-bold tracking-wide ${navLinkClass("/")}`}
        >
          CryptoDemo
        </Link>

        <div className="space-x-6 text-sm">
          <Link to="/demo" className={navLinkClass("/demo")}>
            Demo
          </Link>
          <Link to="/what-is-dh" className={navLinkClass("/what-is-dh")}>
            What is DH?
          </Link>
          <Link to="/security-risks" className={navLinkClass("/security-risks")}>
            Security Risks
          </Link>
          <Link to="/learn-more" className={navLinkClass("/learn-more")}>
            Learn More
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
