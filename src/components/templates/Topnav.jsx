import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=4e17b926`);
      setResults(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (query.length > 2) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="relative flex items-start w-full sm:w-4/6 ml-20 mt-8 gap-4 text-white">
      {/* Search Icon */}
      <i className="ri-search-line text-3xl cursor-pointer hidden sm:block"></i>

      {/* Search Input */}
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-full rounded-lg bg-gray-800 border border-gray-600 focus:border-indigo-500 text-xl text-white px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-lg transition duration-200"
        type="text"
        placeholder="Search for movies..."
      />

      {/* Clear Icon */}
      {query?.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="cursor-pointer text-3xl ri-close-circle-fill text-gray-400 hover:text-red-500 transition duration-150"
        ></i>
      )}

      {/* Dropdown for Search Suggestions */}
      {query.length > 0 && results.length > 0 && (
        <div className="absolute top-[110%] left-1/2 transform -translate-x-1/2 w-screen sm:max-w-[50vw] mt-2 bg-gray-900 rounded-lg overflow-auto shadow-lg max-h-[60vh]">
          {results.map((movie) => (
            <Link
              key={movie.imdbID}
              to={`/movies/${movie.imdbID}`}
              className="flex items-center gap-4 p-4 hover:bg-zinc-700 transition-colors"
            >
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                alt={movie.Title}
              />
              <h1 className="text-2xl font-bold">{movie.Title}</h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
