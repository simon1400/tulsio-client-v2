import type { FC } from 'react'

import { Typography } from '@mui/material'
import ColorLabel from 'components/ColorLabel'
import Rating from 'components/Rating'
import { getStrapiURL } from 'lib/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { CardS } from './styles'
import AngleRight from '/public/assets/angle-right.svg'

export interface ICardItem {
  title: string
  slug: string
  images: {
    data: {
      attributes: {
        url: string
      }
    }[]
  }
  price: any
  labels: {
    data: {
      attributes: {
        color: string
        title: string
      }
    }[]
  }
  shopCategories: {
    data: {
      attributes: {
        title: string
        slug: string
        description?: string
      }
    }[]
  }
  sellers: {
    data: {
      attributes: {
        rating: number
        slug: string
      }
    }[]
  }
}

const Card: FC<{ product: ICardItem }> = ({ product }) => {
  const sellerRating = product.sellers?.data?.[0]?.attributes?.rating || 0
  const imageUrl = getStrapiURL(product.images.data[0]?.attributes.url || '/assets/placeholder.svg')

  return (
    <CardS>
      <div className={'img-wrap'}>
        <Image src={imageUrl} fill alt={product.title} />

        <div className={'label-wrap'}>
          <ColorLabel labels={product.labels.data} direction={'column'} />
        </div>
      </div>
      <div className={'card-content'}>
        <Typography variant={'h3'}>{product.title}</Typography>
        <Rating showNumber={false} rating={sellerRating} />
        <div className={'card-control'}>
          <Typography>
            {product.price}
            {' Kč'}
          </Typography>
          <Link href={`/product/${product.slug}`}>
            <AngleRight />
          </Link>
        </div>
      </div>
    </CardS>
  )
}

export default Card
