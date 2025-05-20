import React from "react";
import Hero from "../Component/Hero";
import Features from "../Component/Features";
import About from "../Component/About";

const Home = () => {
  return (
    <div className="w-full ">
      <div>
        <Hero />
      </div>
      <Features />
      <About />
    </div>
  );
};

export default Home;
