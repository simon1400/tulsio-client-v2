import type { ICardItem } from 'components/Card'
import type { NextPage } from 'next'
import globalQuery from 'queries/global'
import navFooter from 'queries/navFooter'
import navHeader from 'queries/navHeader'

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      const { slug } = params as { slug: string }
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

      const { data: headerData } = await client.query({query: navHeader, 
        variables: {
          locale: locale,
        },}
      )
    
      const { data: footerData } = await client.query({query: navFooter,
        variables: {
          locale: locale,
        },
      })
    
      const { data: newsletterData } = await client.query({query: globalQuery, 
        variables: {
          locale: locale,
        },
      })

      return {
        props: {
          light: true,
          categorySlug,
          products: productsData.products.data,
          headerData,
          footerData,
          newsletterData
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
}> = ({ products, categorySlug }) => {
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

  return (
    <Page>
      <Container maxWidth={'xxl'}>
        <PageShop title={'Produkty'} category />
        <GridShop>
          {filteredProducts.map((item: IShopItem) => (
            <Card key={item.id} product={item.attributes} />
          ))}

          {categoryData && (
            <div className={'category-short'}>
              <CategoryShort
                descriptionBlock
                data={{
                  title: categoryData.title,
                  description: categoryData.description,
                }}
              />
            </div>
          )}
        </GridShop>
      </Container>
    </Page>
  )
}

export default ShopCatalog
