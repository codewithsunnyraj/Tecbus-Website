import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { assets } from "../constant/constant";
const SwiperCard = ({ data }) => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {data.map((items, index) => (
          <SwiperSlide className="text-white">
            <div className="card-testimonial flex items-center">
              <div className="p-5 xs:p-6 xxl:px-8  border-r-4 border-orange-500 rounded-2xl border-b-4">
                <div className="">
                  <div className="flex lg:py-8 justify-end">
                    <img src={assets.dquot} alt="" />
                  </div>
                  <p className="text-slate-200 text-xl text-justify">
                    {items.comment}
                  </p>
                </div>
                <div className="flex py-4 xs:py-6 xxl:py-2 gap-6">
                  <div>
                    <img src={items.image} alt="" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl">{items.name}</h3>
                    <p className="text-slate-400">{items.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
