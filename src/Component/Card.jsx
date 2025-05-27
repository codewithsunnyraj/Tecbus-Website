import React from "react";
import { services } from "../constant/constant";
import { FaArrowRight } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-3 xl:gap-9 lg:pb-24 lg:grid-cols-3">
      {services.map((items, index) => (
        <div key={index}>
          <div className="">
            <div className="border p-5 xs:p-6 border-slate-600 bg-[#ffffff08] lg:p-6 rounded-sm">
              <div>
                <img src={items.image} alt="" />
              </div>
              <div>
                <h5 className="text-white my-3 text-xl xl:text-2xl">{items.title}</h5>
                <div>
                  <p className="text-white ">{items.description}</p>
                </div>
                <div className="my-4">
                  <button className="text-white group px-6 py-2 border rounded-full flex items-center gap-6 border-slate-500">
                    Get Started{" "}
                    <span className="h-8 -rotate-36 group-hover:bg-orange-600 w-8 bg-[#303030] rounded-full items-center flex justify-center">
                      <FaArrowRight className=" text-white" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
