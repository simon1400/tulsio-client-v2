import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { SliderWrapS } from "./styled";
import Image from "next/image";
import { useRef } from "react";

const Slider = () => {
  const swiper = useRef() as any;
  return (
    <SliderWrapS>
      {/* <Swiper
        onInit={(core: SwiperCore) => {
          swiper.current = core.el
        }}
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
      </Swiper> */}
    </SliderWrapS>
  );
};

export default Slider;
