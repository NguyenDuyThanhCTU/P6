import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";

const Content2 = ({ Data, idx }) => {
  return (
    <div>
      <h3 className="uppercase font-bold text-[25px]">
        {idx}. {Data.title}
      </h3>
      <div className="flex flex-col items-center mt-2">
        <div className="max-w-[500px]">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <div>
              {Data.image?.map((items, idx) => (
                <>
                  <SwiperSlide>
                    <img src={items.url} alt="post" className="h-full w-full" />
                    <span className="italic font-semibold text-gray-500">
                      {items.imageName}
                    </span>
                  </SwiperSlide>
                </>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col  gap-5  font-Montserrat py-5 ">
        <p className="text-note-bold">" {Data.content}"</p>

        <p className="text-content ">{Data.content1}</p>
      </div>
    </div>
  );
};

export default Content2;
