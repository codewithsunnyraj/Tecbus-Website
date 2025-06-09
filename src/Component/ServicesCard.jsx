import React from "react";
import Card from "./Card";

const ServicesCard = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="lg:py-6 px-4 py-8 xs:px-6 xl:px-24">
          <div className="w-full">
            <div className="w-full flex justify-center">
              <div className="text-center py-6 xs:py-8 md:py-16 lg:w-1/2">
                <span className="border-orange-700 border text-white px-6 py-2 rounded-full">
                  Our Services
                </span>
                <div>
                  <h3 className="lg:text-6xl text-3xl font-inter xs:text-4xl my-8 text-white">
                    Innovative IT Solutions That Drive Results
                  </h3>
                </div>
              </div>
            </div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
