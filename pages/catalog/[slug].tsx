import { Container, Grid } from "@mui/material"
import Card from "components/Card"
import PageHead from "components/PageHead"
import Page from "layout/Page"
import { GridShop } from "styles/grid"

const ShopSeller = () => {
  return (
    <Page>
      <PageHead title="Produkty" category />
      <Container maxWidth="xl">
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

export default ShopSeller