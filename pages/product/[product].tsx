import { Container, Grid, Typography } from "@mui/material";
import Breadcrumbs from "components/BreadcrumbsCard";
import Content from "components/Content";
import PageHead from "components/PageHead";
import ProductTop from "components/ProductTop";
import Seller from "components/Seller";
import Slider from "components/Slider";
import Page from "layout/Page";
import { wrapper } from "stores";
import { GridShop } from "styles/grid";
import { client } from "lib/api";
import { productQuery } from "queries/product";
import { FC } from "react";
import { IProductTopItem } from "components/ProductTop";
import { Breadcrumb } from "react-instantsearch-hooks-web/dist/es/ui/Breadcrumb";
import Card from "components/Card";
import ShopCatalog from "pages/catalog";

const APP_API = process.env.APP_API;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      if (!params?.product) {
        return {
          notFound: true,
        };
      }
      const { data } = await client.query({
        query: productQuery,
        variables: {
          slug: params.product,
          locale: locale,
        },
      });

      return {
        props: {
          light: true,
          data,
        },
      };
    }
);

interface IProduct {
  data: {
    products: {
      data: IProductItem[];
    };
  };
}

interface IProductItem {
  id: number;
  attributes: IProductTopItem;
}

const Product: FC<IProduct> = ({ data }) => {
  const productVariable = data?.products?.data?.[0]?.attributes;
  return (
    <Page>
      <Container maxWidth="xl">
        <Container maxWidth="lg">
          {!!data?.products?.data.length && (
            <Breadcrumbs
              category={{
                title: productVariable.shopCategories.data[0].attributes.title,
                slug: productVariable.shopCategories.data[0].attributes.slug,
              }}
              color="#000"
              product={{
                title: data.products.data[0].attributes.title,
                slug: data.products.data[0].attributes.slug,
              }}
              categoryLabel="Produkty"
            />
          )}
        </Container>

        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Slider url={productVariable.images.data[0].attributes.url} />
          </Grid>
          <Grid item xs={8}>
            {data.products?.data.map((item: IProductItem, idx: number) => (
              <ProductTop key={idx} product={item.attributes} />
            ))}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <Content removePadding>
          <Typography variant="h2">
            {data.products.data[0].attributes.title}
          </Typography>
          <Typography sx={{ mb: "66px" }}>
            Česká legislativa umožňuje pěstovat všechny druhy CBD, které jsou
            uvedeny v Evropském katalogu odrůd technického konopí. Pěstování pod
            lampou (indoor) povoluje bez omezení. Na polích větších než 10 m2
            mohou pěstitelé zákonně hospodařit, pouze pokud je nahlásí na celní
            správu. Kvůli stále nedostatečnému množství výzkumů zatím obchody v
            ČR nemohou výpěstky a výrobky z CBD prodávat jako lék. Kapky z jeho
            olejů zákon schvaluje distribuovat pouze jako doplněk stravy, který
            mohou uživatelé volně konzumovat. Legální ovšem není kouření CBD
            květů. Čeští prodejci ho mohou nabízet jako sběratelský předmět ale
            uživatele nesmí nabádat ke kouření. I když EU definuje, že u konopí
            s obsahem do 0,3 % THC se stále jedná o CBD rostlinu, každý stát má
            ohledně množství THC vlastní zákony. Česká republika jako technické
            konopí nově vnímá rostliny s obsahem THC do 1 %. Slovensko naopak za
            technické konopí uznává pouze ty s obsahem do 0,2 THC.
          </Typography>
        </Content>
        {data.products.data.map((item: IProductItem, idx: number) => (
          <Seller
            key={idx}
            sellers={item.attributes.sellers.data[0].attributes}
          />
        ))}
      </Container>
      <Container maxWidth="xl" sx={{ mt: "80px" }}>
        <PageHead title="Produkty" category />
        <GridShop>
          <Container maxWidth="xl">
            <Grid container spacing={3}>
              {data.products.data.map((item: IProductItem, idx: number) => (
                <Card key={idx} product={item.attributes} />
              ))}
            </Grid>
          </Container>
        </GridShop>
      </Container>
    </Page>
  );
};

export default Product;
