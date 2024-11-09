import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative flex items-center w-4/6 ml-20 mt-8 gap-4 text-white">
      {/* Search Icon */}
      <i className="ri-search-line text-3xl cursor-pointer"></i>

      {/* Search Input */}
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-full rounded-lg bg-gray-800 border border-gray-600 focus:border-indigo-500 text-xl text-white px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-lg transition duration-200"
        type="text"
        placeholder="Search for movies..."
      />

      {/* Clear Icon */}
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="cursor-pointer text-3xl ri-close-circle-fill text-gray-400 hover:text-red-500 transition duration-150"
        ></i>
      )}

      {/* Dropdown for Search Suggestions */}
      {query.length > 0 && (
        <div className="absolute top-[110%] left-0 w-full max-h-[50vh] mt-2 bg-gray-900 rounded-lg overflow-auto shadow-lg">
          {/* Example of a search result (Replace this with dynamic content) */}
          <Link
            to={`/movies/${query}`}
            className="flex items-center gap-4 p-4 hover:bg-zinc-700 transition-colors"
          >
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1629608462362-21193b628e56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Movie Thumbnail"
            />
            <h1 className="text-2xl font-bold">New Movie</h1>
          </Link>
          {/* Add more search results dynamically here */}
        </div>
      )}
    </div>
  );
};

export default Topnav;
