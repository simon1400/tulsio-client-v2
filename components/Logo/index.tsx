import type { FC } from 'react'

import { getStrapiURL } from 'lib/api'
import Image from 'next/image'

import { SellerLogoS } from './styled'

const Logo: FC<{ image: any }> = ({ image }) => {
  return (
    <SellerLogoS>
      <Image src={getStrapiURL(image.data.attributes.url)} fill alt={''} />
    </SellerLogoS>
  )
}

export default Logo
