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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({params, locale}) => {

    await store.dispatch(fetchNavCatalog(locale as string));

    return {
      props: {
        light: true
      },
    };
  }
);

interface IShopCatalog {

}

const ShopCatalog: NextPage<IShopCatalog> = ({
  // categoryNav
}) => {

  return (
    <Page>
      <PageHead title="Produkty" category />
      <Container maxWidth="xxl">
        <GridShop>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
        </GridShop>
      </Container>
    </Page>
  )
}

export default ShopCatalog