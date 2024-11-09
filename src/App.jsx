import React from "react";
import Home from "./components/Home"; // Adjust the path if needed
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-w-screen-2xl min-h-screen bg-[#1F1E24]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
