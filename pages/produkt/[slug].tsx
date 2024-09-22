import { Container, Grid, Typography } from '@mui/material'
import Breadcrumbs from 'components/Breadcrumbs'
import Content from 'components/Content'
import ProductTop from 'components/ProductTop'
import Seller from 'components/Seller'
import Page from 'layout/Page'
import { wrapper } from 'stores'

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      light: true,
    },
  }
})

const ShopSeller = () => {
  return (
    <Page>
      <Container maxWidth={'xl'}>
        <Breadcrumbs category={{ title: 'some title', slug: '/slug' }} color={'#000'} />
        <Grid container spacing={6}>
          <Grid item xs={4}>
            {/* <Slider /> */}
          </Grid>
          <Grid item xs={8}>
            <ProductTop />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={'md'}>
        <Content removePadding>
          <Typography>
            <h2>{'Product name'}</h2>
            <p>
              {'Česká legislativa umožňuje pěstovat všechny druhy CBD, které jsou'}
              {'uvedeny v Evropském katalogu odrůd technického konopí. Pěstování'}
              {'pod lampou (indoor) povoluje bez omezení. Na polích větších než 10'}
              {'m2 mohou pěstitelé zákonně hospodařit, pouze pokud je nahlásí na'}
              {'celní správu. Kvůli stále nedostatečnému množství výzkumů zatím'}
              {'obchody v ČR nemohou výpěstky a výrobky z CBD prodávat jako lék.'}
              {'Kapky z jeho olejů zákon schvaluje distribuovat pouze jako doplněk'}
              {'stravy, který mohou uživatelé volně konzumovat. Legální ovšem není'}
              {'kouření CBD květů. Čeští prodejci ho mohou nabízet jako'}
              {'sběratelský předmět ale uživatele nesmí nabádat ke kouření. I když'}
              {'EU definuje, že u konopí s obsahem do 0,3 % THC se stále jedná o'}
              {'CBD rostlinu, každý stát má ohledně množství THC vlastní zákony.'}
              {'Česká republika jako technické konopí nově vnímá rostliny s'}
              {'obsahem THC do 1 %. Slovensko naopak za technické konopí uznává'}
              {'pouze ty s obsahem do 0,2 THC.'}
            </p>
          </Typography>
        </Content>
        <Seller />
        {/* <PageHead title="Produkty" category />
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
        </GridShop> */}
      </Container>
    </Page>
  )
}

export default ShopSeller
