import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import { SliderWrapS } from './styled'
import Image from 'next/image'
import { FC, useRef } from 'react'

const APP_API = process.env.APP_API;

const Slider: React.FC<{url:string}> = ({url}) => {
  const swiper = useRef() as any;
  return (
    <SliderWrapS>
      <Swiper
        onInit={(core: SwiperCore) => {
          swiper.current = core.el
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Image src={APP_API + url} fill alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image src="/assets/ruderalis.jpeg" fill alt="" />
        </SwiperSlide><SwiperSlide>
          <Image src="/assets/ruderalis.jpeg" fill alt="" />
        </SwiperSlide><SwiperSlide>
          <Image src="/assets/ruderalis.jpeg" fill alt="" />
        </SwiperSlide> */}
      </Swiper>
    </SliderWrapS>
  )
}

export default Slider
