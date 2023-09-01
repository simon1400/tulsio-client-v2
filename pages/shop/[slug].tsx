import { Container, Grid } from "@mui/material"
import Breadcrumbs from "components/Breadcrumbs"
import ProductTop from "components/ProductTop"
import Slider from "components/Slider"
import Page from "layout/Page"
import { wrapper } from "stores"

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    return {
      props: {
        light: true
      },
    };
  }
);

const ShopSeller = () => {
  return (
    <Page>
      <Container maxWidth="xl">
        <Breadcrumbs
          category={{ title: "some title", slug: "/slug" }}
          color="#000"
        />
        <Grid container spacing={6}>
          <Grid item xs={6}>
            {/* <Slider /> */}
          </Grid>
          <Grid item xs={6}>
            <ProductTop />
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default ShopSeller