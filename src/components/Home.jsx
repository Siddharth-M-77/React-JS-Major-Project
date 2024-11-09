import React from "react";
import Sidenav from "./templates/Sidenav";

const Home = () => {
  document.title = "SCSDB | MOVIE APP";

  return (
    <div className="w-full min-h-screen flex">
      <Sidenav />
      <div className="w-[80%]  h-full"></div>
    </div>
  );
};

export default Home;
