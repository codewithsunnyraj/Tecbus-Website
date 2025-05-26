import React from "react";
import { assets } from "../constant/constant";
import CommonBtn from "./CommonBtn";

const Hero = () => {
  return (
    <div className="lg:mb-[420px] ">
      <div className="p-4 relative  md:p-8 lg:p-14 my-5 md:my-8  lg:h-[750px] lg:my-14 rounded-xl bg-[#16181A]">
        <div className="flex justify-center my-10 items-center">
          <div>
            <div className="flex justify-center">
              <p className="px-4 w-[310px] py-2 flex items-center gap-2 border border-white rounded-full">
                <div className="flex gap-1">
                  <img src={assets.testimonial} alt="" />
                  <img src={assets.testimonial2} alt="" />
                  <img src={assets.testimonial3} alt="" />
                </div>
                <span className="text-white">5000+ 4.9 Stars Reviews</span>
              </p>
            </div>
            <div className="my-6 text-center lg:w-[550px]">
              <h1 className="font-inter  font-medium  text-3xl lg:text-4xl xl:text-6xl text-slate-300">
                IT Solutions Tailored
              </h1>
              <h2 className="font-inter font-medium lg:my-4 text-3xl lg:text-4xl xl:text-6xl text-slate-300">
                To <span className="text-orange-600">Business Needs</span>
              </h2>
              <p className="text-center  my-5 text-slate-400">
                Easily create reusable payment links that you can share with
                your customers through email, text message, social media.
              </p>
              <div className="flex justify-center my-6 gap-3">
                <CommonBtn title="Get Started" />
                <a
                  href=""
                  className="lg:px-5 px-4 text-[16px] py-2 rounded-full border border-orange-400 transition-all hover:bg-white overflow-hidden duration-300 hover:text-black text-white"
                >
                  Start A Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-center">
          <div className="">
            <div className="flex justify-center">
              <img src={assets.hero} alt="" className=" rounded-xl" />
            </div>
          </div>

          <div className="lg:absolute relative lg:-bottom-26 lg:left-10 w-full">
            <div className="flex lg:flex-row flex-col gap-y-14 justify-center lg:justify-between items-center ">
              <div>
                <div className="lg:p-6 p-8 mt-8 lg:my-0 w-[200px] rounded-2xl rotate-12 bg-orange-600">
                  <div>
                    <h2 className="lg:text-5xl text-3xl text-white font-semibold text-center">
                      97%
                    </h2>
                    <p className="text-white my-3  text-center">
                      Positive Review
                    </p>
                  </div>
                </div>
                <div className="lg:justify-end flex">
                  <div className="lg:p-6 p-6 w-[170px] -rotate-10 rounded-xl bg-black">
                    <div>
                      <h2 className="lg:text-4xl text-3xl text-white font-semibold text-center">
                        97%
                      </h2>
                      <p className="text-white my-3  text-center">
                        Positive Review
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="md:bg-slate-800 lg:relative lg:right-14 rounded-[6px] lg:max-w-64 lg:max-h-62 w-full rotate-12 flex justify-center border border-slate-400 p-7">
                  <div className="">
                    <div className="flex justify-center">
                      <div className="h-20 flex justify-center items-center w-20 rounded-full bg-orange-700">
                        <img src={assets.location_white} alt="" />
                      </div>
                    </div>
                    <div className="my-2">
                      <h5 className="text-white text-center text-xl font-inter">
                        Custom Software Development
                      </h5>
                      <p className="py-2 text-slate-500 text-center">
                        We specialize in designing diverse SaaS
                      </p>
                    </div>
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

export default Hero;
