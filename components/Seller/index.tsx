import type { ICardItem } from 'components/Card'
import type { IShopCategories } from 'components/ProductNav'
import type { FC } from 'react'

import { Typography } from '@mui/material'
import Button from 'components/Button'
import SellerLogo from 'components/Logo'
import Rating from 'components/Rating'
import DOMPurify from 'isomorphic-dompurify'
import Link from 'next/link'

import { SellerS } from './styled'

export interface ISellerItem {
  title: string
  slug: string
  logo: {
    data: {
      attributes: {
        url: string
      }
    }
  }
  description: string
  rating: number
  web: string
  shopCategories: IShopCategories
  products: ICardItem
}

const Seller: FC<{ sellers: ISellerItem }> = ({ sellers }) => {
  return (
    <SellerS>
      <div className={'seller-head'}>
        <div className={'logo-wrap'}>
          <SellerLogo image={sellers.logo} />
          <Typography variant={'h4'}>{sellers.title}</Typography>
        </div>
        <Rating rating={sellers.rating} />
      </div>
      <Typography
        variant={'body2'}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(sellers.description),
        }}
      />
      <div className={'button'}>
        <Link href={`/shop/${sellers.slug}`}>
          <Button>
            {'více o prodejci '}
            {sellers.title}
          </Button>
        </Link>
      </div>
    </SellerS>
  )
}
export default Seller
