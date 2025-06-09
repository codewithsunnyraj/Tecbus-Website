import React from "react";
import { Link } from "react-router-dom";

const HeroCommon = ({ title,  }) => {
  return (
    <div className="w-full hero-section relative p-20">
      <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h2 className="text-white  text-3xl lg:text-5xl my-4">{title}</h2>
        <div className="flex justify-center gap-4">
          {/* <Link to={subtitle} className="text-white text-2xl">
            {subtitle} /
          </Link> */}
          {/* <p className="text-white text-2xl">{title}</p> */}
        </div>
      </div>
    </div>
  );
};

export default HeroCommon;
