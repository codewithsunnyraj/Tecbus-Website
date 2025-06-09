import React from "react";
import Hero from "../Component/Hero";
import Features from "../Component/Features";
import About from "../Component/About";
import Testimonial from "../Component/Testimonial";
import Plan from "../Component/Plan";
import SuccessCard from "../Component/SuccessCard";
import Faq from "../Component/Faq";
import ServicesCard from "../Component/ServicesCard";
const Home = () => {
  return (
    <div className="w-full ">
      <div className="lg:px-24">
        <Hero />
        <Features />
        <About />
      </div>
      <div className="gradient-bg">
        <ServicesCard />
      </div>
      <div className="xl:px-24">
        <Testimonial />
        <Plan />
        <SuccessCard />
        <Faq />
      </div>
    </div>
  );
};

export default Home;
