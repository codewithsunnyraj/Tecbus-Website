import React from "react";
import { assets } from "../constant/constant";
import CommonBtn from "./CommonBtn";

const SuccessCard = () => {
  return (
    <div className="my-8 lg:my-16 relative">
      <div className="lg:px-10 pt-6 lg:pt-4 px-4 bg-success rounded-xl">
        <div className="lg:flex justify-between lg:gap-10">
          <div className="flex items-center lg:w-[65%]">
            <div>
              <h3 className="font-inter text-white text-5xl">
                Meet the Experts Behind Your IT Success
              </h3>
              <div>
                <div className="border flex items-center border-white text-white w-full my-4 lg:my-8 rounded-full py-3 px-5">
                  <input
                    type="text"
                    placeholder="Your Email Address Here..."
                    className="w-full"
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
  );
};

export default SuccessCard;
