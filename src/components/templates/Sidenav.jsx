import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close sidebar on smaller screens
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button for mobile screens */}
      <button
        className="md:hidden text-white p-4 focus:outline-none fixed top-0 left-2 z-20"
        onClick={toggleSidebar}
      >
        <i className={`ri-menu-${isOpen ? "unfold" : "fold"}-line text-2xl`} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-10 w-[60%] md:w-full h-full bg-gray-900 border-r-2 border-zinc-400 p-10 overflow-auto transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        <h1 className="text-2xl font-bold text-white">
          <i className="mr-2 ri-tv-fill text-[#6556CD]"></i>
          <span className="font-extrabold">SCSDB.</span>
        </h1>

        {/* Navigation Links */}
        <nav className="mt-10">
          <h1 className="text-xl font-bold text-white mb-8">New Feeds</h1>
          <ul className="text-zinc-300 flex flex-col">
            <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2 hover:text-white leading-none font-xl duration-300">
              <i className="mr-2 ri-fire-line"></i>Trending
            </Link>
            <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2 hover:text-white leading-none font-xl duration-300">
              <i className="mr-2 ri-bard-line"></i>Popular
            </Link>
            <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2 hover:text-white leading-none font-xl duration-300">
              <i className="mr-2 ri-movie-2-line"></i>Movie
            </Link>
            <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2 hover:text-white leading-none font-xl duration-300">
              <i className="mr-2 ri-tv-fill"></i>TV Shows
            </Link>
            <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2 hover:text-white leading-none font-xl duration-300">
              <i className="mr-2 ri-team-line"></i>People
            </Link>
          </ul>
        </nav>

        <hr className="h-[1px] border border-zinc-400" />

        <nav className="mt-10">
          <h1 className="lg:text-[1rem] font-bold text-white mb-8 text-sm md:text-sm">
            Website Information
          </h1>
          <ul className="text-zinc-300 flex flex-col">
            <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2 hover:text-white leading-none font-xl duration-300">
              <i className="mr-2 ri-information-line"></i>About SCSDB
            </Link>
            <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2 hover:text-white leading-none font-xl duration-300">
              <i className="mr-2 ri-phone-line"></i>Contact Us
            </Link>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile view when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidenav;
