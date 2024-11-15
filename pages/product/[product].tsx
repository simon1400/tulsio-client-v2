/* eslint-disable sonarjs/no-array-index-key */
/* eslint-disable format/prettier */
import type { ICardItem } from 'components/Card'
import type { IShopCategory } from 'components/ProductNav';
import type { IProductTopItem } from 'components/ProductTop'
import type { FC } from 'react'

import { Container, Grid, Typography } from '@mui/material'
import Breadcrumbs from 'components/Breadcrumbs'
import Card from 'components/Card'
import Content from 'components/Content'
import ProductNav from 'components/ProductNav'
import ProductTop from 'components/ProductTop'
import Seller from 'components/Seller'
import Slider from 'components/Slider'
import Page from 'layout/Page'
import { client } from 'lib/api'
import { productQuery } from 'queries/product'
import React from 'react'
import { wrapper } from 'stores'
import { fetchNavCatalog } from 'stores/fetch/navFetch'
import { GridShop } from 'styles/grid'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      if (!params?.product) {
        return {
          notFound: true,
        }
      }
      const { data } = await client.query({
        query: productQuery,
        variables: {
          slug: params.product,
          locale,
        },
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

interface IProduct {
  data: {
    products: {
      data: IProductItem[]
    }
  }
}

interface IProductItem {
  id: number
  attributes: IProductTopItem
}

const Product: FC<IProduct> = ({ data }) => {

  const imageUrls = data.products.data[0].attributes.images.data.map(
    (image: any) => image.attributes.url,
  )
  const productVariable = data?.products?.data?.[0]?.attributes

  const [filteredProducts, setFilteredProducts] = React.useState<{ attributes: ICardItem }[]>([]);

  const categoryMap = new Map<string, IShopCategory>();

  for (const item of data.products.data) {
    for (const product of item.attributes.products.data) {
      for (const category of product.attributes.shopCategories.data) {
        categoryMap.set(category.attributes.slug, category);
      }
    }
  }

  const uniqueCategories = Array.from(categoryMap.values());

  const filterProducts = (category: string) => {
    const allProducts = data.products.data.flatMap((item) => item.attributes.products.data);

    if (category === '') {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        product.attributes.shopCategories.data.some(
          (shopCategory) => shopCategory.attributes.slug === category,
        ),
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <Page>
      <Container maxWidth={'xl'}>
        <Container maxWidth={'lg'}>
          {!!data?.products?.data.length && (
            <Breadcrumbs
              isCatalog
              category={{
                title: productVariable.shopCategories.data[0]?.attributes.title,
                slug: productVariable.shopCategories.data[0]?.attributes.slug,
              }}
              color={'#000'}
              product={{
                title: data.products.data[0]?.attributes.title,
                slug: data.products.data[0]?.attributes.slug,
              }}
            />
          )}
        </Container>

        <Container maxWidth={'xl'}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Slider urls={imageUrls} />
            </Grid>
            <Grid item xs={12} md={8}>
              {data.products?.data.map((item: IProductItem) => (
                <ProductTop key={item.id} product={item.attributes} />
              ))}
            </Grid>
          </Grid>
        </Container>

      </Container>
      <Container maxWidth={'md'}>
        <Content>
          <Typography  maxWidth={'md'} sx={{ mt: '80px' }} variant={'h2'}>{data.products.data[0].attributes.title}</Typography>
          <Typography sx={{ mt:'40px' }}>
            {'Česká legislativa umožňuje pěstovat všechny druhy CBD, které jsou'}
            {'uvedeny v Evropském katalogu odrůd technického konopí. Pěstování pod'}
            {'lampou (indoor) povoluje bez omezení. Na polích větších než 10 m2'}
            {'mohou pěstitelé zákonně hospodařit, pouze pokud je nahlásí na celní'}
            {'správu. Kvůli stále nedostatečnému množství výzkumů zatím obchody v'}
            {'ČR nemohou výpěstky a výrobky z CBD prodávat jako lék. Kapky z jeho'}
            {'olejů zákon schvaluje distribuovat pouze jako doplněk stravy, který'}
            {'mohou uživatelé volně konzumovat. Legální ovšem není kouření CBD'}
            {'květů. Čeští prodejci ho mohou nabízet jako sběratelský předmět ale'}
            {'uživatele nesmí nabádat ke kouření. I když EU definuje, že u konopí'}
            {'s obsahem do 0,3 % THC se stále jedná o CBD rostlinu, každý stát má'}
            {'ohledně množství THC vlastní zákony. Česká republika jako technické'}
            {'konopí nově vnímá rostliny s obsahem THC do 1 %. Slovensko naopak za'}
            {'technické konopí uznává pouze ty s obsahem do 0,2 THC.'}
          </Typography>
        </Content>
        {data.products.data.map((item: IProductItem) => (
          <Seller key={item.id} sellers={item.attributes.sellers.data[0].attributes} />
        ))}
      </Container>
      <Container maxWidth={'xl'} sx={{ mt: '80px' }}>
        <ProductNav
          shopName={data.products.data[0].attributes.sellers.data[0].attributes.title}
          shopCategories={{ data: uniqueCategories }}
          filterProducts={filterProducts}
        />
        <GridShop>
          {filteredProducts.length > 0
            ? filteredProducts.map((productItem, idx: number) => (
                <Card key={idx} product={productItem.attributes} />
              ))
            : data.products.data.map((item: IProductItem) =>
                item.attributes.products.data.map((productItem, idx: number) => (
                  <Card key={idx} product={productItem.attributes} />
                )),
              )}
        </GridShop>
    </Container>
    </Page>
  )
}

export default Product
