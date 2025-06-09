import React, { useState } from "react";
import { assets } from "../constant/constant";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [open, isOpen] = useState(true);
  const handleMenu = () => {
    isOpen(!open);
  };
  return (
    <div className=" py-6 px-8 md:px-16 bg-[#0E0F11] lg:px-24">
      <div className="flex w-full items-center justify-between">
        <div>
          <img src={assets.logo} className="p-4 cursor-pointer" alt="" />
        </div>
        <div onClick={handleMenu}>
          {open ? (
            <RxCross1 className="text-white text-2xl lg:hidden" />
          ) : (
            <RiMenu3Fill className="text-white text-2xl lg:hidden" />
          )}
        </div>

        <div className="hidden lg:block">
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
            <Link to="/pricing" className="text-slate-400 font-inter">
              Pricing
            </Link>
            <Link to="/contact" className="text-slate-400 font-inter">
              Contact
            </Link>
          </ul>
        </div>
        <div className="hidden lg:block">
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
      <div
        className={`${
          open
            ? `lg:hidden absolute w-full left-0 p-6 z-30 bg-white block`
            : `hidden`
        }`}
      >
        <ul className=" gap-2 cursor-pointer flex flex-col text-xl lg:gap-8">
          <Link to="/" className="text-orange-600  font-inter">
            Home
          </Link>
          <Link to="/about" className="text-slate-400 font-inter">
            About
          </Link>
          <Link to="/services" className="text-slate-400 font-inter">
            Services
          </Link>
          <Link to="/pricing" className="text-slate-400 font-inter">
            Pricing
          </Link>
          <Link to="/contact" className="text-slate-400 font-inter">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
