import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-[#0E0F11]  p-4 md:p-6   ">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
