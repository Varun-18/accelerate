import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import _ from "lodash";

import useBanner from "../talons/useBanner";

// import required modules
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const Banner = () => {
  const { banner } = useBanner();
  return (
    <div className=" max-w-[1400px] mx-auto">
      <Swiper pagination={true} modules={[Pagination]} loop={true}>
        {_.size(banner) > 0
          ? banner.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.image.fields.file.url} alt={item.alt} />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};
