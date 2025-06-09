import React from "react";
import SuccessCard from "../Component/SuccessCard";
import HeroCommon from "../Component/HeroCommon";
import ServicesCard from "../Component/ServicesCard";
import Faq from "../Component/Faq";

const Services = () => {
  return (
    <div className="">
      <HeroCommon title="Services" subtitle="Services" />
      <div className="gradient-bg">
        <ServicesCard />
      </div>
      <div className="lg:px-24 pt-14 lg:pt-24">
        <Faq />
        <SuccessCard />
      </div>
    </div>
  );
};

export default Services;
