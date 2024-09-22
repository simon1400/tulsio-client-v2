import { Typography } from '@mui/material'
import ColorLabel from 'components/ColorLabel'
import Image from 'next/image'
import Link from 'next/link'

import { CardS } from './styled'
import AngleRight from '/public/assets/angle-right.svg'

const Card = () => {
  return (
    <CardS>
      <div className={'img-wrap'}>
        <Image src={'/assets/shop.png'} fill alt={''} />
        <div className={'label-wrap'}>
          <ColorLabel color={'#a50d5a'}>{'asddsa'}</ColorLabel>
          <ColorLabel color={'#99ff99'}>{'asddsa sdadg'}</ColorLabel>
          <ColorLabel color={'#fff899'}>{'asddsa1232'}</ColorLabel>
        </div>
      </div>
      <div className={'card-content'}>
        <Typography variant={'h3'}>{'SKYWALKER 12 %'}</Typography>
        <div className={'card-control'}>
          <Typography>{'560 kc'}</Typography>
          <Link href={'/'}>
            <AngleRight />
          </Link>
        </div>
      </div>
    </CardS>
  )
}

export default Card
