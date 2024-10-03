/* eslint-disable react/prefer-shorthand-fragment */
import type { ICardItem } from 'components/Card'
import type { NextPage } from 'next'
import type { ParsedUrlQuery } from 'node:querystring'

import { Container } from '@mui/material'
import Card from 'components/Card'
import CategoryShort from 'components/CategoryShort'
import PageShop from 'components/PageShop'
import Page from 'layout/Page'
import { client } from 'lib/api'
import { getShopCategory } from 'queries/category'
import { productsQuery } from 'queries/product'
import React from 'react'
import { wrapper } from 'stores'
import { fetchNavCatalog } from 'stores/fetch/navFetch'
import { GridShop } from 'styles/grid'

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      const { slug } = params as IParams
      const { data: categoryData } = await client.query({
        query: getShopCategory,
        variables: { slug, locale },
      })

      const categorySlug = categoryData.shopCategories.data[0]?.attributes.slug

      if (!categorySlug) {
        return {
          notFound: true,
        }
      }

      const { data: productsData } = await client.query({
        query: productsQuery,
        variables: { categorySlug },
      })

      await store.dispatch(fetchNavCatalog(locale as string))

      return {
        props: {
          light: true,
          categorySlug,
          products: productsData.products.data,
        },
      }
    },
)

export interface IShopItem {
  id: number
  attributes: ICardItem
}

const ShopCatalog: NextPage<{
  products: IShopItem[]
  categorySlug: string
  shortInfo?: {
    title: string
    description: string
  }
}> = ({ products, categorySlug, shortInfo }) => {
  const categoryDescription = products
    .map((product) =>
      product.attributes.shopCategories?.data.find(
        (category) => category?.attributes?.slug === categorySlug,
      ),
    )
    .find((category) => category?.attributes?.description)

  const categoryData = categoryDescription?.attributes

  const filteredProducts = products.filter((product) =>
    product.attributes.shopCategories?.data.some(
      (category) => category?.attributes?.slug === categorySlug,
    ),
  )
  const descriptionPosition = filteredProducts.length < 9 ? filteredProducts.length + 1 : 9

  return (
    <Page>
      <Container maxWidth={'xxl'}>
        <PageShop title={'Produkty'} category />
        <GridShop>
          <React.Fragment>
            {filteredProducts.map((item: IShopItem) => (
              <div key={item.id}>
                <Card product={item.attributes} />
              </div>
            ))}

            {categoryData && (
              <div
                style={{
                  gridArea: `auto / ${descriptionPosition <= 5 ? descriptionPosition : 4} / span 1 / span 2`,
                }}
              >
                <CategoryShort
                  descriptionBlock
                  data={{
                    title: categoryData.title,
                    description: categoryData.description,
                  }}
                />
              </div>
            )}
          </React.Fragment>
        </GridShop>
      </Container>
    </Page>
  )
}

export default ShopCatalog
