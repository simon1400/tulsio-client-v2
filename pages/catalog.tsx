import { Container } from "@mui/material"
import Card from "components/Card"
import PageHead from "components/PageHead"
import Page from "layout/Page"
import { client } from "lib/api"
import { NextPage } from "next"
import { getShopCategory } from "queries/category"
import { wrapper } from "stores"
import { fetchNavCatalog } from "stores/fetch/navFetch"
import { GridShop } from "styles/grid"
import { useQuery } from '@apollo/client';
import { productsQuery } from 'queries/product';
import {IImageRoot} from 'types/image';
import { ICardItem } from 'components/Card';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({params, locale}) => {
    const { data } = await client.query({
      query: productsQuery,
      
    });

    await store.dispatch(fetchNavCatalog(locale as string));


    return {
      props: {
        light: true,
        data
      },
    };
  }
);

export interface IShopItem {
  attributes: ICardItem
}

export interface IShopCatalog {
  data: {
    products: {
      data: IShopItem []
    }
  }
}

const ShopCatalog: NextPage<IShopCatalog> = ({
  // categoryNav
  data
}) => {
  console.log(data)
  return (
    <Page>
      
      <Container maxWidth="xxl">
      <PageHead title="Produkty" category />
        <GridShop>
          {data.products.data.map((item: IShopItem, idx: number) => <Card key={idx} product={item.attributes}/>)}
        </GridShop>
      </Container>
    </Page>
  )
}

export default ShopCatalog