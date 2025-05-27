import React from "react";
import { assets } from "../constant/constant";
import CommonBtn from "./CommonBtn";

const SuccessCard = () => {
  return (
    <div className="container mx-auto">
      <div className="my-8 p-4 lg:my-16 md:px-20 relative">
        <div className="lg:px-10  pt-6 lg:pt-4 px-5 md:px-9 bg-success rounded-xl">
          <div className="lg:flex justify-between lg:gap-10">
            <div className="flex items-center lg:w-[65%]">
              <div>
                <h3 className="font-inter text-white text-2xl xs:text-4xl lg:text-5xl">
                  Meet the Experts Behind Your IT Success
                </h3>
                <div>
                  <div className="border  flex items-center border-white text-white w-full my-8 lg:my-8 rounded-full py-3 px-5">
                    <input
                      type="text"
                      placeholder="Your Email Address Here..."
                      className="w-full focus:outline-0 border-0"
                    />
                    <CommonBtn title="Get Started" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute bottom-0">
                <img src={assets.white} className="lg:w-full" alt="" />
              </div>
              <div className="relative">
                <img src={assets.footer} className="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
