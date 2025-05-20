import React from "react";
import { assets } from "../constant/constant";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="mx-auto container">
      <div className="lg:flex w-full lg:items-center lg:justify-between">
        <div>
          <img src={assets.logo} className="p-4" alt="" />
        </div>
        <div className="">
          <ul className="lg:flex gap-2  text-xl lg:gap-8">
            <li className="text-orange-600 font-inter">Home</li>
            <li className="text-slate-400 font-inter">About</li>
            <li className="text-slate-400 font-inter">Services</li>
            <li className="text-slate-400 font-inter">Pages</li>
            <li className="text-slate-400 font-inter">Contact</li>
          </ul>
        </div>
        <div>
          <a
            href=""
            className="btn-gradient flex lg:w-[210px] items-center justify-between font-inter"
          >
            Get Started
            <span className="bg-white  h-8 w-8 rounded-full flex justify-center items-center">
              <FaArrowRight className="text-xl text-orange-600" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
