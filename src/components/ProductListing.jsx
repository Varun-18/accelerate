import _ from "lodash";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { DisplayImage } from "./DisplayImage";
import "../assets/css/swiper.css";

export const ProductListing = ({ data }) => {
  return (
    <div className=" max-w-[1400px] mx-auto">
      {_.size(data) > 0 ? (
        <div className="mx-3 ">
          <h3 className="py-3 capitalize text-3xl font-bold text-center text-[#222]">
            featured products
          </h3>
          <Swiper
            slidesPerView={6}
            spaceBetween={5}
            navigation={true}
            modules={[Navigation]}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col w-52  my-3 h-[22em] group">
                  <DisplayImage
                    url={item.image.fields.file.url}
                    alt={item.image.fields.title}
                  />
                  <p className="text-[#333] py-1 flex-1"> {item.description}</p>
                  <span className="flex text-sm font-bold">
                    <span>{item.currency}</span>
                    <span>{item.price}.00</span>
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
    </div>
  );
};
