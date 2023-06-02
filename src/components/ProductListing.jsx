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
    <div className=" max-w-[1300px] mx-auto">
      {_.size(data) > 0 ? (
        <div className="mx-3 ">
          <h3 className="py-3 capitalize sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#222]">
            featured products
          </h3>

          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              470: {
                slidesPerView: 2,
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
            {data.map((item, index) => (
              <SwiperSlide key={index} >
                <div className="flex flex-col  mx-auto  my-3 sm:h-[21em] h-[20em] group">
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
