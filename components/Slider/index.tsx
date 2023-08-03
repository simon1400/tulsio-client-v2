import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { SliderS } from "./styled";
import Image from "next/image";

const Slider = () => {
  return (
    <SliderS
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <Image src="/assets/ruderalis.jpeg" fill alt="" />
      </SwiperSlide><SwiperSlide>
        <Image src="/assets/ruderalis.jpeg" fill alt="" />
      </SwiperSlide><SwiperSlide>
        <Image src="/assets/ruderalis.jpeg" fill alt="" />
      </SwiperSlide><SwiperSlide>
        <Image src="/assets/ruderalis.jpeg" fill alt="" />
      </SwiperSlide>
    </SliderS>
  );
};

export default Slider;
