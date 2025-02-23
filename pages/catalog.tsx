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
import navHeader from 'queries/navHeader'
import navFooter from 'queries/navFooter'
import globalQuery from 'queries/global'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      const { data } = await client.query({
        query: productsQuery,
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
          data,
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

export interface IShopCatalog {
  data: {
    products: {
      data: IShopItem[]
    }
  }
}

const ShopCatalog: NextPage<IShopCatalog> = ({
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
