import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="w-[80%] relative h-[10vh flex items-center justify-start mt-8 gap-10 text-white">
      <i class="ri-search-line text-3xl cursor-pointer"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[80%] rounded bg-transparent border text-xl  text-white p-5"
        type="text"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          class="cursor-pointer text-xl ri-close-line"
        ></i>
      )}
      <div className="absolute w-[80%] max-h-[50vh] top-[100%] mt-10 overflow-auto  rounded ">
        {/* <Link className=" hover:bg-zinc-700 flex items-center justify-start p-8 text-2xl font-bold">
          <img
            className="w-12 h-12 rounded-full object-cover mr-10"
            src="https://images.unsplash.com/photo-1729608462362-21193b628e56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h1>NEW MOvie</h1>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
