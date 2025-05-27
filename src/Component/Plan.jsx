import React from "react";
import { assets } from "../constant/constant";
import { FaArrowRight } from "react-icons/fa6";
const Plan = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:flex p-4 xs:p-5 w-full justify-between items-center lg:gap-10">
        <div className="lg:w-[35%] lg:h-[680px] bg-[#16181A] rounded-xl shadow relative">
          <div className="">
            <div className="p-6 mb-20 xs:mb-28 lg:mb-14 xxl:mb-16 lg:px-10  lg:py-14">
              <h3 className="text-white font-inter text-2xl xs:text-3xl xl:text-4xl">
                Grab the best deal on services!
              </h3>
              <p className="m-3 font-inter text-xl xs:text-xl text-slate-400">
                Easily create reusable payment links that you can share with
                your customers
              </p>
            </div>
            <div className="w-full relative">
              <img src={assets.orange} className="w-full" alt="" />
              <div className="absolute bottom-0 flex  justify-center">
                <img src={assets.deal} className="" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[65%] ">
          <div className="p-6 w-full shadow rounded-xl border border-slate-900 flex justify-between items-center">
            <div className="lg:w-[70%]">
              <h4 className="text-white font-inter text-2xl py-3">
                Basic Plan
              </h4>
              <div>
                <p className="text-slate-400">
                  Easily create reusable payment links that you can share with
                  your customers through email Easily
                </p>
                <div className="my-4">
                  <button className="text-white group px-6 py-2 border rounded-full flex items-center gap-6 border-slate-500">
                    Get Started{" "}
                    <span className="h-8 -rotate-36 group-hover:bg-orange-600 w-8 bg-[#303030] rounded-full items-center flex justify-center">
                      <FaArrowRight className=" text-white" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-[30%]">
              <div className="lg:flex gap-2 items-end">
                <h3 className=" text-2xl md:text-5xl text-slate-400 font-inter ">
                  $19
                </h3>
                <span className="text-slate-400 text-xl">/Month</span>
              </div>
            </div>
          </div>
          <div className="p-6 my-6 w-full shadow  bg-[#16181A]  border-r-4 border-b-4 border-orange-500 rounded-2xl flex justify-between items-center">
            <div className="lg:w-[70%]">
              <h4 className="text-white font-inter text-2xl py-3">
                Premium Plan
              </h4>
              <div>
                <p className="text-slate-400">
                  Easily create reusable payment links that you can share with
                  your customers through email Easily
                </p>
                <div className="my-4">
                  <button className="text-white group px-6 py-2 border rounded-full flex items-center gap-6 border-slate-500">
                    Get Started{" "}
                    <span className="h-8 -rotate-36 group-hover:bg-orange-600 w-8 bg-[#303030] rounded-full items-center flex justify-center">
                      <FaArrowRight className=" text-white" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-[30%]">
              <div className="lg:flex gap-2 items-end">
                <h3 className=" text-2xl md:text-5xl text-slate-400 font-inter ">
                  $59
                </h3>
                <span className="text-slate-400 text-xl">/Month</span>
              </div>
            </div>
          </div>
          <div className="p-6 w-full shadow rounded-xl border border-slate-900 flex justify-between items-center">
            <div className="lg:w-[70%]">
              <h4 className="text-white font-inter text-2xl py-3">Gold Plan</h4>
              <div>
                <p className="text-slate-400">
                  Easily create reusable payment links that you can share with
                  your customers through email Easily
                </p>
                <div className="my-4">
                  <button className="text-white group px-6 py-2 border rounded-full flex items-center gap-6 border-slate-500">
                    Get Started{" "}
                    <span className="h-8 -rotate-36 group-hover:bg-orange-600 w-8 bg-[#303030] rounded-full items-center flex justify-center">
                      <FaArrowRight className=" text-white" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-[30%]">
              <div className="lg:flex gap-2 items-end">
                <h3 className="text-2xl md:text-5xl text-slate-400 font-inter ">
                  $39
                </h3>
                <span className="text-slate-400 text-xl">/Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
