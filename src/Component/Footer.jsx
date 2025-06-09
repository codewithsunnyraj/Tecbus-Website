import React from "react";
import { assets } from "../constant/constant";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" container mx-auto w-full ">
      <div className="lg:px-24 md:py-20 py-28 p-4 xs:px-8 xs:py-8 bg-[#16181A]">
        <div className="grid xl:gap-8 lg:grid-cols-3">
          <div>
            <div>
              <img src={assets.logo} alt="" />
            </div>
            <div>
              <p className="text-slate-300 text-xl my-4 md:my-8">
                Your Trusted IT Partner – Reach Out Anytime
              </p>
              <div className="my-3">
                <div className="flex gap-5">
                  <div className="w-10 h-10 border-slate-400 border flex justify-center items-center rounded-full">
                    <FaFacebookF className="text-white" />
                  </div>
                  <div className="w-10 h-10 border-slate-400 border flex justify-center items-center rounded-full">
                    <FaInstagram className="text-white" />
                  </div>
                  <div className="w-10 h-10 border-slate-400 border flex justify-center items-center rounded-full">
                    <FaLinkedinIn className="text-white" />
                  </div>
                  <div className="w-10 h-10 border-slate-400 border flex justify-center items-center rounded-full">
                    <FaTwitter className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center">
            <div>
              <div>
                <h4 className="text-white my-7 text-2xl">About</h4>
              </div>
              <ul className="cursor-pointer text-xl text-white">
                <Link to="/services">
                  <li>Services</li>
                </Link>
                <Link to="/about">
                  <li className="my-5">About Us</li>
                </Link>
                <Link to="/contact">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="lg:flex justify-center text-white">
            <div>
              <div>
                <h4 className="text-white my-7 text-2xl">Contact Us</h4>
              </div>
              <div className="text-xl space-y-5">
                <div className="flex items-center gap-3">
                  <IoMdCall /> <a href="tel:+91 8936811660">+91 8936811660</a>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdMail />
                  <a href="mailto:sunnyrajkcb@gmail.com">
                    sunnyrajkcb@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaLocationDot />
                  <a href="javascript:void(0);">
                    1212, Lav Vegas, The Veg Street, USA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t p-2 lg:p-8  md:mx-14 border-slate-400 flex justify-between">
        <div className="text-white">@Sunnysite2025 | All Rights Reserved</div>
        <div className="text-white flex gap-4 items-center">
          <p>Privacy |</p>
          <p>Term |</p>
          <p>Help |</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
