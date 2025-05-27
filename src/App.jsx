import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Home from "./pages/Home";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div className="bg-[#0E0F11]     ">
      {/* <Navbar /> */}
      <Home />
      <Footer />
    </div>
  );
};

export default App;
