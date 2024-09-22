import type { FC } from 'react'

import Image from 'next/image'

import { BannerS } from './styles'

const APP_API = process.env.APP_API

interface IBanner {
  data: any
}

const BannerStatic: FC<IBanner> = ({ data }) => {
  const imgUrl = `${APP_API}${data.image.data?.attributes.url}?format=webp&width=1000`

  return (
    <BannerS href={data.link} passHref target={'_blank'}>
      <figure className={'img-wrap'}>
        <Image src={imgUrl} fill alt={'Banner'} />
      </figure>
    </BannerS>
  )
}

export default BannerStatic
