import React, { useState } from "react";

const Topnav = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="w-[80%] h-[10vh flex items-center justify-start mt-8 gap-10 text-white">
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
    </div>
  );
};

export default Topnav;
