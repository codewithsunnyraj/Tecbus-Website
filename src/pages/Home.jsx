import React from "react";
import Hero from "../Component/Hero";
import Features from "../Component/Features";
import About from "../Component/About";
import Services from "../Component/Services";
import Testimonial from "../Component/Testimonial";
import Plan from "../Component/Plan";
import SuccessCard from "../Component/SuccessCard";
const Home = () => {
  return (
    <div className="w-full ">
      <div className="lg:px-24">
        <Hero />
        <Features />
        <About />
      </div>
      <div className="gradient-bg">
        <Services />
      </div>
      <div className="lg:px-24">
        <Testimonial />
        <Plan />
        <SuccessCard />
      </div>
    </div>
  );
};

export default Home;
