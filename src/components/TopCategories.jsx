import _ from "lodash";
import React from "react";
import useCategories from "../talons/useCategories";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { DisplayImage } from "./DisplayImage";
import "../assets/css/swiper.css";

export const TopCategories = () => {
  const { categories } = useCategories();
  return (
    <div>
      <div className="max-w-[1400px] mx-auto py-3">
        {_.size(categories) > 0 ? (
          <div>
            <h3 className="capitalize sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#222]">
              shop by categories
            </h3>
            <div className=" mx-3 mt-1 py-3.5">
              <Swiper
                slidesPerView={2}
                spaceBetween={25}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                  470: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  700: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  875: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },

                  1100: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                  },
                  1280: {
                    slidesPerView: 6,
                    spaceBetween: 25,
                  },
                }}
              >
                {categories.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className=" m-auto flex items-center flex-col text-[#444] hover:text-red-600 cursor-pointer">
                      <img
                        className="sm:max-w-[200px] max-w-[140px]"
                        src={item.image.fields.file.url}
                        alt={item.alt}
                      />
                      <p className=" uppercase text-center font-bold py-2">
                        {item.categoryTitle}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
