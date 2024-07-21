import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

const CarouselTwo: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-4 sm:p-6 xl:p-10">
        <Swiper
          className="carouselTwo"
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Image
              width={1374}
              height={520}
              priority
              src={"/images/carousel/carousel-02.jpg"}
              alt="carousel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1374}
              height={520}
              priority
              src={"/images/carousel/carousel-03.jpg"}
              alt="carousel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1374}
              height={520}
              priority
              src={"/images/carousel/carousel-01.jpg"}
              alt="carousel"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselTwo;
