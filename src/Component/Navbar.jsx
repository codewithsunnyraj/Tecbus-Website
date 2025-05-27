import React from "react";
import { assets } from "../constant/constant";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" py-6 bg-[#0E0F11] lg:px-24">
      <div className="lg:flex w-full lg:items-center lg:justify-between">
        <div>
          <img src={assets.logo} className="p-4 cursor-pointer" alt="" />
        </div>
        <div className="">
          <ul className="lg:flex gap-2 cursor-pointer  text-xl lg:gap-8">
            <Link to="/" className="text-orange-600 font-inter">
              Home
            </Link>
            <Link to="/about" className="text-slate-400 font-inter">
              About
            </Link>
            <Link to="/services" className="text-slate-400 font-inter">
              Services
            </Link>
            <Link to="/pages" className="text-slate-400 font-inter">
              Pages
            </Link>
            <Link to="/contact" className="text-slate-400 font-inter">
              Contact
            </Link>
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
