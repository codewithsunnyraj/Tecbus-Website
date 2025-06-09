import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Home from "./pages/Home";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <div className="bg-[#0E0F11]     ">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Services />} path="/services" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Pricing />} path="/pricing" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
