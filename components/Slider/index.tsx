import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { SliderWrapS } from "./styled";
import Image from "next/image";
import { FC, useRef } from "react";

const APP_API = process.env.APP_API;

interface ISliderProps {
  urls: string[];
}

const Slider: FC<ISliderProps> = ({ urls }) => {
  const swiper = useRef() as any;
  
  return (
    <SliderWrapS>
      <Swiper
        onInit={(core: SwiperCore) => {
          swiper.current = core.el;
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {urls.map((url, index) => (
          <SwiperSlide key={index}>
            <Image src={APP_API + url} fill alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapS>
  );
};

export default Slider;
