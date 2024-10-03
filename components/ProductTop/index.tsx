/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import type { ICardItem } from 'components/Card'
import type { ISellerItem } from 'components/Seller'
import type { FC } from 'react'
import type { IImageArray } from 'types/image'

import { Grid, Typography } from '@mui/material'
import Button from 'components/Button'
import ColorLabel from 'components/ColorLabel'
import Price from 'components/Price'
import Rating from 'components/Rating'
import DOMPurify from 'isomorphic-dompurify'
import Link from 'next/link'

import { ProductTopS } from './styled'

// const APP_API = process.env.APP_API

export interface IProductTopItem {
  title: string
  slug: string
  description: string
  images: IImageArray
  link: string
  shopCategories: {
    data: {
      attributes: {
        title: string
        slug: string
      }
    }[]
  }
  sellers: {
    data: {
      attributes: ISellerItem
    }[]
  }
  customId: string
  availability: boolean
  brand: string
  gtin: string
  mpn: string
  price: number
  labels: {
    data: {
      attributes: {
        title: string
        color: string
      }
    }[]
  }
  products: {
    data: {
      attributes: ICardItem
    }[]
  }
}

const ProductTop: FC<{ product: IProductTopItem }> = ({ product }) => {
  return (
    <ProductTopS>
      <Grid container spacing={4}>
        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant={'h1'} marginBottom={2}>
            {product.title}
          </Typography>
          <ColorLabel labels={product.labels.data} direction={'row'} />

          <Rating rating={product.sellers.data[0].attributes.rating} />
          <Typography
            variant={'body2'}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.description),
            }}
          />
          <div className={'bottom'} style={{ marginTop: '20px' }}>
            <Price price={product.price} availability={product.availability} />
            <Link href={product.link}>
              <Button>
                {'koupit na '}
                {product.brand}
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </ProductTopS>
  )
}

export default ProductTop
