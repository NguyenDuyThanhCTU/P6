import React from "react";
import { HomeSlide } from "../../../../Utils/temp";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";
import { useData } from "../../../../Context/DataProviders";

const Section1 = () => {
  const { Slides } = useData();
  return (
    <div>
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
          {Slides.map((items, idx) => (
            <>
              <SwiperSlide>
                <img
                  src={items.image}
                  alt="slide"
                  key={idx}
                  className="w-full d:h-[750px] object-cover p:h-[250px] cursor-pointer"
                />
              </SwiperSlide>
            </>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Section1;
