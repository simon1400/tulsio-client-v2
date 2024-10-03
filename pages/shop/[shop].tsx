import type { ICardItem } from 'components/Card'
import type { IDescription } from 'components/Description'
import type { IShopCategory } from 'components/ProductNav'
import type { FC } from 'react'

import { Container, Grid } from '@mui/material'
import Breadcrumbs from 'components/Breadcrumbs'
import Card from 'components/Card'
import Description from 'components/Description'
import ProductNav from 'components/ProductNav'
import Slider from 'components/Slider'
import Page from 'layout/Page'
import { client } from 'lib/api'
import { sellerQuery } from 'queries/seller'
import React from 'react'
import { wrapper } from 'stores'
import { fetchNavCatalog } from 'stores/fetch/navFetch'
import { changeTitle } from 'stores/slices/dataSlices'
import { GridShop } from 'styles/grid'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      if (!params?.shop) {
        return {
          notFound: true,
        }
      }

      const { data } = await client.query({
        query: sellerQuery,
        variables: {
          slug: params.shop,
          locale,
        },
      })

      await store.dispatch(fetchNavCatalog(locale as string))
      store.dispatch(changeTitle('Catalog'))

      return {
        props: {
          light: true,
          data,
        },
      }
    },
)

export interface IShopSeller {
  data: {
    sellers: {
      data: IShopSellerItem[]
    }
  }
}

export interface IShopSellerItem {
  id: number
  attributes: IDescription
}

const ShopSeller: FC<IShopSeller> = ({ data }) => {
  const imageUrls = data.sellers.data[0].attributes.galery.data.map(
    (image: any) => image.attributes.url,
  )

  const [filteredProducts, setFilteredProducts] = React.useState<{ attributes: ICardItem }[]>([])

  const allCategories = Array.from(
    new Set(
      data.sellers.data.flatMap((item) =>
        item.attributes.products.data.flatMap((seller) =>
          seller.attributes.shopCategories.data.map((category) => category),
        ),
      ),
    ),
  )

  const uniqueCategories = Array.from(
    new Set(allCategories.map((category) => category.attributes.slug)),
  )
    .map((slug) => allCategories.find((category) => category.attributes.slug === slug))
    .filter((category): category is IShopCategory => category !== undefined)

  const filterProducts = (category: string) => {
    const allProducts = data.sellers.data.flatMap((item) => item.attributes.products.data)

    if (category === '') {
      setFilteredProducts(allProducts)
    } else {
      const filtered = allProducts.filter((seller) =>
        seller.attributes.shopCategories.data.some(
          (shopCategory) => shopCategory.attributes.slug === category,
        ),
      )
      setFilteredProducts(filtered)
    }
  }
  return (
    <Page>
      <Container maxWidth={'xl'}>
        <Container maxWidth={'xl'}>
          {!!data?.sellers?.data.length && (
            <Breadcrumbs
              isCatalog
              category={{
                title: data.sellers.data[0].attributes.shopCategories.data[0].attributes.title,
                slug: data.sellers.data[0].attributes.shopCategories.data[0].attributes.slug,
              }}
              color={'#000'}
              product={{
                title: data.sellers.data[0].attributes.products.data[0].attributes.title,
                slug: data.sellers.data[0].attributes.products.data[0].attributes.slug,
              }}
            />
          )}
        </Container>

        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Slider urls={imageUrls} />
          </Grid>
          <Grid item xs={6}>
            {data.sellers.data.map((item: IShopSellerItem) => (
              <Description key={item.id} description={item.attributes} />
            ))}
          </Grid>
        </Grid>

        <Container maxWidth={'xl'} sx={{ mt: '80px' }}>
          <ProductNav
            shopName={data.sellers.data[0].attributes.title}
            shopCategories={{ data: uniqueCategories }}
            filterProducts={filterProducts}
          />
          <GridShop>
            {filteredProducts.length > 0
              ? filteredProducts.map((sellerItem, idx: number) => {
                  const sellerSlug = data.sellers.data[0].attributes.slug
                  const productSellerSlug = sellerItem.attributes.sellers.data[0].attributes.slug

                  if (sellerSlug === productSellerSlug) {
                    return <Card key={idx} product={sellerItem.attributes} />
                  }
                  return null
                })
              : data.sellers.data.map((item: IShopSellerItem) =>
                  item.attributes.products.data.map((productItem, idx: number) => {
                    const sellerSlug = item.attributes.slug
                    const productSellerSlug = productItem.attributes.sellers.data[0].attributes.slug

                    if (sellerSlug === productSellerSlug) {
                      return <Card key={idx} product={productItem.attributes} />
                    }
                    return null
                  }),
                )}
          </GridShop>
        </Container>
      </Container>
    </Page>
  )
}

export default ShopSeller
