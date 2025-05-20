import React from "react";
import { assets } from "../constant/constant";

const About = () => {
  return (
    <div className="lg:my-24">
      <div className="lg:flex justify-between lg:gap-20 w-full">
        <div className="w-[30%]">
          <div>
            <img src={assets.left_build} alt="" />
          </div>
        </div>
        <div className="lg:p-7 lg:w-[60%]">
          <div>
            <span className="border-orange-700 border text-white px-6 py-2 rounded-full">
              About Us
            </span>
          </div>
          <div>
            <h2 className="text-5xl text-white my-6 font-inter">
              We Build Smarter Businesses with IT That Works for You
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
