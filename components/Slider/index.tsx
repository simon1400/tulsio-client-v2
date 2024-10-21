import type { FC } from 'react'
import type SwiperCore from 'swiper'

import { getStrapiURL } from 'lib/api'
import Image from 'next/image'
import { useRef } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SliderWrapS } from './styled'
import 'swiper/css'
import 'swiper/css/pagination'

interface ISliderProps {
  urls: string[]
}

const Slider: FC<ISliderProps> = ({ urls }) => {
  const swiper = useRef() as any

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
        {urls.map((url, index) => (
          <SwiperSlide key={index}>
            <Image src={getStrapiURL(url)} fill alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapS>
  )
}

export default Slider
