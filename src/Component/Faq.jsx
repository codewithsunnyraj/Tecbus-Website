import React, { useState } from "react";
import { faq } from "../constant/constant";
import { FaAngleRight } from "react-icons/fa";
const Faq = () => {
  const [open, setOpen] = useState(null);
  const handleOperation = (index) => {
    setOpen((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="my-5 w-full lg:my-20">
      <div className="flex justify-center">
        <div className="lg:w-[700px] text-center">
          <span className="border-orange-700 border text-white px-6 py-2 rounded-full">
            Our Services
          </span>
          <h2 className="font-inter my-5 text-white lg:text-6xl">
            Got Questions? We've Got Answers
          </h2>
        </div>
      </div>
      <div>
        {faq.map((items, index) => (
          <div key={index}>
            <div className="border-t border-white p-7">
              <div
                className="flex cursor-pointer justify-between"
                onClick={() => handleOperation(index)}
              >
                <p className="text-slate-200 font-inter text-xl">
                  {items.title}
                </p>
                <p className="w-8 h-8 p-2 flex justify-center items-center border border-white rounded-full">
                  <FaAngleRight
                    className={` text-xl transform duration-300 ${
                      open === index
                        ? "rotate-90 text-orange-500"
                        : "text-white"
                    }`}
                  />
                </p>
              </div>

              {/* ✅ Animated content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  open === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate-300 text-xl py-4">
                  {items.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
