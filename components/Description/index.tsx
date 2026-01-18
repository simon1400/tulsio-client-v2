/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import type { ICardItem } from 'components/Card'
import type { FC } from 'react'

import { Grid, Typography } from '@mui/material'
import Button from 'components/Button'
import Image from 'components/Image'
import RatingComponent from 'components/Rating'
import DOMPurify from 'isomorphic-dompurify'

import { DescriptionS } from './styled'

export interface IDescription {
  title: string
  slug: string
  logo: {
    data: {
      attributes: {
        url: string
      }
    }[]
  }
  description: string
  rating: number
  web: string
  shopCategories: {
    data: {
      attributes: {
        title: string
        slug: string
      }
    }[]
  }
  galery: {
    data: {
      attributes: {
        url: string
      }
    }[]
  }
  products: {
    data: {
      attributes: ICardItem
    }[]
  }
  socLinks: ISellerLink[]
}

interface ISellerLink {
  name: string
  url: string
  logo: IImageRoot
}

const Description: FC<{ description: IDescription; staticBlock?: boolean }> = ({
  description,
  staticBlock = false,
}) => {
  const links = description.socLinks || []
  return (
    <DescriptionS>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <div className={'img-wrap'} />
          <div className={'content-wrap-art'}>
            <div className={'content-top'}>
              <Typography marginBottom={staticBlock ? 5 : 0} variant={staticBlock ? 'h1' : 'h2'}>
                {'O prodejci '}
                {description.title}
              </Typography>
              <RatingComponent big rating={description.rating} showNumber />
            </div>
            <Typography
              variant={'body2'}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description.description),
              }}
            />
            <div className={'content-bottom'}>
              <ul>
                {links.length > 0 &&
                  links.map((item: ISellerLink) => (
                    <li key={item.url}>
                      <a
                        href={item.url.startsWith('http') ? item.url : `https://${item.url}`}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                      >
                        <Image image={item.logo.data} width={33} height={33} />
                      </a>
                    </li>
                  ))}
              </ul>

              <Button href={description.web}>{description.title}</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </DescriptionS>
  )
}

export default Description
