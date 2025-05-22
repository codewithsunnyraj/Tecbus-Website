import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="lg:py-6 lg:px-24">
      <div className="w-full">
        <div className="w-full flex justify-center">
          <div className="text-center py-16 w-1/2">
            <span className="border-orange-700 border text-white px-6 py-2 rounded-full">
              Our Services
            </span>
            <div>
              <h3 className="lg:text-6xl my-8 text-white">
                Innovative IT Solutions That Drive Results
              </h3>
            </div>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Services;
