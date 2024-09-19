import { Container, Grid } from "@mui/material";
import Breadcrumbs from "components/BreadcrumbsCard";
import ProductTop from "components/ProductTop";
import { client } from "lib/api";
import Slider from "components/Slider";
import Page from "layout/Page";
import { wrapper } from "stores";
import { fetchNavCatalog } from "stores/fetch/navFetch";
import { sellerQuery } from "queries/seller";
import Description, { IDescription } from "components/Description";
import { FC } from "react";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      if (!params?.shop) {
        return {
          notFound: true,
        };
      }

      const { data } = await client.query({
        query: sellerQuery,
        variables: {
          slug: params.shop,
          locale: locale,
        },
      });

      await store.dispatch(fetchNavCatalog(locale as string));

      return {
        props: {
          light: true,
          data,
        },
      };
    }
);

export interface IShopSeller {
  data: {
    sellers: {
      data: IShopSellerItem[];
    };
  };
}

export interface IShopSellerItem {
  id: number;
  attributes: IDescription
}

const ShopSeller: FC<IShopSeller> = ({ data }) => {
  console.log(data.sellers);
  return (
    <Page>
      <Container maxWidth="xl">
        {!!data?.sellers?.data.length && (
          <Breadcrumbs
            category={{
              title:
                data.sellers.data[0].attributes.shopCategories.data[0]
                  .attributes.title,
              slug: data.sellers.data[0].attributes.shopCategories.data[0]
                .attributes.slug,
            }}
            color="#000"
            product={{
              title: data.sellers.data[0].attributes.products.data[0].attributes.title,
              slug: data.sellers.data[0].attributes.products.data[0].attributes.slug,
            }}
            categoryLabel="Prodejce"
          />
        )}
        <Grid container spacing={6}>
          <Grid item xs={6}>
            {/* <Slider /> */}
          </Grid>
          <Grid item xs={6}>
            {/* <ProductTop /> */}
            {data.sellers.data.map((item: IShopSellerItem, idx: number) => <Description description={item.attributes}/>)}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ShopSeller;
