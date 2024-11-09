import React, { useEffect } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";

const Home = () => {
    useEffect(() => {
    document.title = "SCSDB | MOVIE APP";
  }, []);

  return (
    <div className="w-full min-h-screen flex">
      <Sidenav />
      <div className="w-[80%] flex items-center justify-center  h-full">
        <Topnav />
      </div>
    </div>
  );
};

export default Home;
