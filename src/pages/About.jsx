import React from "react";
import HeroCommon from "../Component/HeroCommon";
import Features from "../Component/Features";
import Testimonial from "../Component/Testimonial";
import SuccessCard from "../Component/SuccessCard";

const About = () => {
  return (
    <div className="">
      <HeroCommon title="About Us" subtitle="Home" />
      <div className="lg:px-24 pt-14 lg:pt-24">
        <Features />
        <Testimonial />
        <SuccessCard />
      </div>
    </div>
  );
};

export default About;
