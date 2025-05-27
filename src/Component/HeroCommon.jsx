import React from "react";

const HeroCommon = ({ title, subtitle }) => {
  return (
    <div className="w-full hero-section relative p-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h2 className="text-white  text-3xl lg:text-6xl my-4">{title}</h2>
        <div className="flex gap-4">
          <p className="text-white text-2xl">{subtitle} /</p>
          <p className="text-white text-2xl">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCommon;
