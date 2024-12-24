import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-w-screen-2xl  bg-[#1F1E24]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
