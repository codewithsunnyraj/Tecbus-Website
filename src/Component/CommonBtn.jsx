import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const CommonBtn = ({ title }) => {
  return (
    <div>
      <a
        href=""
        className="btn-gradient flex text-[16px] lg:w-[154px] items-center justify-between font-inter"
      >
        {title}
        <span className="bg-white  h-7 w-7 rounded-full flex justify-center items-center">
          <FaArrowRight className="text-xl text-orange-600" />
        </span>
      </a>
    </div>
  );
};

export default CommonBtn;
