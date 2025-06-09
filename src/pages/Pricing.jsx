import React from "react";
import HeroCommon from "../Component/HeroCommon";
import Plan from "../Component/Plan";
import Faq from "../Component/Faq";
import SuccessCard from "../Component/SuccessCard";

const Pricing = () => {
  return (
    <div className="">
      <HeroCommon title="Pricing" subtitle="Pricing" />
      <div className="xl:px-24 py-10 lg:py-14">
        <Plan />
        <Faq />
        <SuccessCard />
      </div>
    </div>
  );
};

export default Pricing;
