import type { ICardItem } from 'components/Card'
import type { NextPage } from 'next'

import { Container } from '@mui/material'
import Card from 'components/Card'
import PageShop from 'components/PageShop'
import Page from 'layout/Page'
import { client } from 'lib/api'
import { productsQuery } from 'queries/product'
import { wrapper } from 'stores'
import { fetchNavCatalog } from 'stores/fetch/navFetch'
import { GridShop } from 'styles/grid'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      const { data } = await client.query({
        query: productsQuery,
      })

      await store.dispatch(fetchNavCatalog(locale as string))

      return {
        props: {
          light: true,
          data,
        },
      }
    },
)

export interface IShopItem {
  id: number
  attributes: ICardItem
}

export interface IShopCatalog {
  data: {
    products: {
      data: IShopItem[]
    }
  }
}

const ShopCatalog: NextPage<IShopCatalog> = ({
  // categoryNav
  data,
}) => {
  return (
    <Page>
      <Container maxWidth={'xxl'}>
        <PageShop title={'Produkty'} category />
        <GridShop>
          {data.products.data.map((item: IShopItem) => (
            <Card key={item.id} product={item.attributes} />
          ))}
        </GridShop>
      </Container>
    </Page>
  )
}

export default ShopCatalog
