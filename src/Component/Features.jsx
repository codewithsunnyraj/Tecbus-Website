import React from "react";
import CommonBtn from "./CommonBtn";
import { assets } from "../constant/constant";

const Features = () => {
  return (
    <div className="lg:px-2">
      <div className="grid lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="border-orange-700 border text-white px-6 py-2 rounded-full">
            Our Features
          </span>
          <div>
            <h2 className="text-5xl my-6 text-white font-inter">
              Decades of Expertise Dedicated to Success
            </h2>
            <p className="text-slate-500 text-justify ">
              Easily create reusable payment links that you can share with your
              customers through email, text message, social media.
            </p>
            <div className="my-9">
              <CommonBtn title="Get Started" />
            </div>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="">
            <div className="flex lg:gap-8 items-center">
              <div>
                <img src={assets.cloud} alt="" />
              </div>
              <div>
                <h3 className="text-white lg:text-2xl">Cloud Infrastructure</h3>
                <p className="text-slate-600">
                  Easily create reusable payment links that you can share with
                  your customers hrough email Easily create reusable payment
                </p>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="flex lg:gap-8 items-center">
              <div>
                <img src={assets.managed} alt="" />
              </div>
              <div>
                <h3 className="text-white lg:text-2xl">Managed IT Services</h3>
                <p className="text-slate-600">
                  Easily create reusable payment links that you can share with
                  your customers hrough email Easily create reusable payment
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex lg:gap-8 items-center">
              <div>
                <img src={assets.location} alt="" />
              </div>
              <div>
                <h3 className="text-white lg:text-2xl">
                  Cybersecurity Solutions
                </h3>
                <p className="text-slate-600">
                  Easily create reusable payment links that you can share with
                  your customers hrough email Easily create reusable payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
