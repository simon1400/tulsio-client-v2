import type { FC } from 'react'

import Image from 'components/Image'

import { BannerS } from './styles'

interface IBanner {
  data: any
}

const BannerStatic: FC<IBanner> = ({ data }) => {
  // const imgUrl = `${APP_API}${data.image.data?.attributes.url}?format=webp&width=1000`

  return (
    <BannerS href={data.link} passHref target={'_blank'}>
      <figure className={'img-wrap'}>
        <Image image={data.image.data} fill format={'&width=1000'} />
      </figure>
    </BannerS>
  )
}

export default BannerStatic
