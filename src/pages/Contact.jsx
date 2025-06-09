import React from "react";
import HeroCommon from "../Component/HeroCommon";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <div>
      <HeroCommon title="Contact Us" subtitle="" />
      <div className="lg:px-28 px-6 xs:px-8 sm:px-10 py-8 sm:py-14">
        <div className="md:flex justify-between  w-full ">
          <div className="w-full  my-10 md:my-0 md:w-[35%]">
            <div>
              <h3 className="text-white text-2xl my-4">Get in touch</h3>
              <p className="text-white">
                It is a long established fact that a reader will be distrol
                acted bioiiy desig the rea dablea contentIt
              </p>
            </div>
            <div className="my-2 sm:my-8">
              <div className="flex gap-5 text-white">
                <div>
                  <div className="flex items-center justify-center h-16 rounded-full w-16 border border-white">
                    <FaLocationDot className="text-orange-400 text-2xl" />
                  </div>
                </div>
                <div className="">
                  <h6>Address</h6>
                  <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                </div>
              </div>
            </div>
            <div className="my-2 sm:my-8">
              <div className="flex gap-5 text-white">
                <div>
                  <div className="flex items-center justify-center h-16 rounded-full w-16 border border-white">
                    <IoMdMail className="text-orange-400 text-2xl" />
                  </div>
                </div>
                <div className="">
                  <h6>Email</h6>
                  <a href="mailto:nevaeh.simmons@example.com">
                    nevaeh.simmons@example.com
                  </a>
                </div>
              </div>
            </div>
            <div className="my-2 sm:my-8">
              <div className="flex gap-5 text-white">
                <div>
                  <div className="flex items-center justify-center h-16 rounded-full w-16 border border-white">
                    <IoMdCall className="text-orange-400 text-2xl" />
                  </div>
                </div>
                <div className="">
                  <h6>Call</h6>
                  <a href="tel:(704) 555-0127">(704) 555-0127</a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-[65%]">
            <div className="p-3 text-white sm:p-6 bg-[#16181A] rounded-xl md:p-8 lg:p-10">
              <div>
                <h4 className="text-2xl lg:text-4xl">Contact Us</h4>
                <p className="my-2">
                  It is a long established fact that a reader will be distrol
                  acted bioiiy desig the rea dablea contentIt
                </p>
              </div>
              <form className="my-4 lg:my-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border-b border-slate-400 w-full focus:outline-0 py-2 px-3"
                  />
                </div>
                <div className="my-3 lg:my-8">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border-b border-slate-400 w-full focus:outline-0 py-2 px-3"
                  />
                </div>
                <div className="">
                  <textarea
                    type="text"
                    placeholder="Your Address"
                    className="border-b border-slate-400 w-full focus:outline-0 py-2 px-3"
                  />
                </div>
                <div className="my-3 lg:my-8">
                  <button className="py-4 text-center rounded-full w-full bg-orange-600">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
