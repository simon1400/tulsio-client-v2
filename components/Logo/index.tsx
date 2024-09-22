import type { FC } from 'react'

import Image from 'components/Image'

import { SellerLogoS } from './styled'

const Logo: FC<{ image: any }> = ({ image }) => {
  return (
    <SellerLogoS>
      <Image image={image.data} format={'&resize=80x80'} fill alt={'Tulsio'} />
    </SellerLogoS>
  )
}

export default Logo
