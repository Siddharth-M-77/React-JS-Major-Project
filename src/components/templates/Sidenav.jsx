import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl font-bold text-white">
        <i class=" mr-2 ri-tv-fill text-[#6556CD]"></i>
        <span className="font-extrabold">SCSDB.</span>
      </h1>
      <nav className=" mt-10">
        <h1 className="text-xl font-bold text-white mb-8">New Feeds</h1>

        <ul className="text-zinc-300 flex flex-col">
          <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2  hover:text-white leading-none font-xl duration-300">
            <i class="mr-2 ri-fire-line"></i>Trending
          </Link>
          <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2  hover:text-white leading-none font-xl duration-300">
            <i class="mr-2  ri-bard-line"></i>Popular
          </Link>
          <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2  hover:text-white leading-none font-xl duration-300">
            <i class="mr-2  ri-movie-2-line"></i>Movie
          </Link>
          <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2  hover:text-white leading-none font-xl duration-300">
            <i class=" mr-2 ri-tv-fill "></i>
            TV Shows
          </Link>
          <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2  hover:text-white leading-none font-xl duration-300">
            <i class="mr-2  ri-team-line"></i>People
          </Link>
        </ul>
      </nav>
      <hr className="h-[1px] border border-zinc-400" />
      <nav className=" mt-10">
        <h1 className="lg:text-[1rem] font-bold text-white mb-8 text-sm md:text-sm">
          Website Information
        </h1>

        <ul className="text-zinc-300 flex flex-col">
          <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2  hover:text-white leading-none font-xl duration-300">
          <i class="mr-2 ri-information-line"></i>About SCSDB
          </Link>
          <Link className="p-5 hover:bg-[#6556CD] rounded-lg mb-2  hover:text-white leading-none font-xl duration-300">
            <i class="mr-2  ri-phone-line"></i>Contact Us
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidenav;
