import React from "react";
import SwiperCard from "./SwiperCard";
import { TestimonialData } from "../constant/constant";
import CommonBtn from "./CommonBtn";
const Testimonial = () => {
  return (
    <div className="py-8 lg:py-24">
      <div className="flex justify-between items-center w-full lg:gap-7">
        <div className="lg:w-[45%]">
          <div>
            <h2 className="text-white font-inter lg:text-5xl">
              What Our Clients Said to Us
            </h2>
            <div className="lg:my-10 my-6">
              <CommonBtn title="Get Started" />
            </div>
          </div>
        </div>
        <div className="w-[65%]">
          <div>
            <SwiperCard data={TestimonialData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
