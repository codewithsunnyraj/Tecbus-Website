import React from "react";
import { assets } from "../constant/constant";
import CommonBtn from "./CommonBtn";
const About = () => {
  return (
    <div className="container mx-auto w-full">
      <div className="lg:my-24 lg:px-14">
        <div className="lg:flex justify-between lg:gap-20 w-full">
          <div className="w-[30%] flex items-center justify-center">
            <div className="flex justify-center">
              <div className="h-full p-6 bg-gradient-to-b from-[#0E0F11 ] to-[#662e27]">
                <img src={assets.left_build} className="" alt="" />
              </div>
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
              <div className="grid lg:grid-cols-2 lg:gap-10">
                <div>
                  <p className="text-slate-300 text-justify">
                    Easily create reusable payment links that you can share with
                    your customers through email, text message, social media.
                    Easily create reusable payment links
                  </p>
                  <p className="text-slate-300 mt-2 text-justify">
                    Easily create reusable payment links that you can share with
                    your customers through email, text message
                  </p>
                  <div className="mt-8">
                    <CommonBtn title="Get Started" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <h2 className="lg:text-8xl my-3 text-slate-500 font-bold">
                      50+
                    </h2>
                    <p className="text-slate-300 text-xl">
                      Years Od Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
