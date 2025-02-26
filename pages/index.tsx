import type { FC } from 'react'
import { Container, Typography } from '@mui/material'
import ArticleShort from 'components/ArticleShort'
import Banner, { IBanner } from 'components/Baner'
import GridButton from 'components/GridButton'
import Page from 'layout/Page'
import { wrapper } from 'stores'
import { changeDescription, changeTitle } from 'stores/slices/dataSlices'
import { changeImage } from 'stores/slices/metaSlices'
import { GridTop } from 'styles/grid'
import { client, getStrapiURL } from '../lib/api'
import getBaners from '../queries/baners'
import homepageQuery from '../queries/homepage'
import navHeader from 'queries/navHeader'
import navFooter from 'queries/navFooter'
import globalQuery from 'queries/global'
import Head from 'next/head'

const BANER_POSITION = { POSITION_1: 'Home_1', POSITION_2: 'Home_2' }

const gridButtonData = [
  { title: ' - CBD slovník - CBD slovník ', link: '/dictionary' },
  { title: ' –⁠⁠ FAQ –⁠⁠ FAQ –⁠⁠ FAQ', link: '/faq' },
]

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  ctx.res.setHeader('Cache-Control', 'public, s-maxage=31536000, stale-while-revalidate=59')

  const locale = ctx.locale
  const queries = [
    client.query({ 
      query: getBaners, 
      variables: { 
        query: [
          { position: { eq: BANER_POSITION.POSITION_1 } }, 
          { position: { eq: BANER_POSITION.POSITION_2 } }
        ], 
        locale 
      } 
    }),
    client.query({ query: homepageQuery, variables: { locale } }),
    client.query({ query: navHeader, variables: { locale } }),
    client.query({ query: navFooter, variables: { locale } }),
    client.query({ query: globalQuery, variables: { locale } }),
  ]

  const [{ data: banersData }, { data: homepageData }, { data: headerData }, { data: footerData }, { data: newsletterData }] = await Promise.all(queries)

  const homepage = homepageData.homepage.data.attributes
  const meta = homepage.meta
  const articles = homepage.articles.map((item: any) => item.article.data.attributes)

  const baners = banersData.baners.data.map((item: any) => item.attributes)
  const getRandomBanner = (position: string) => {
    const baner = baners.filter((item: any) => item.position === position)
    return baner[Math.floor(Math.random() * baners.length)] || baner[0]
  }

  store.dispatch(changeTitle(meta?.title || 'Úvod'))
  store.dispatch(changeDescription(meta?.description || ''))
  store.dispatch(changeImage(meta?.image?.data ? getStrapiURL(meta.image.data.attributes.url) : ''))

  return {
    props: {
      title: homepage.title,
      baner1: getRandomBanner(BANER_POSITION.POSITION_1),
      baner2: getRandomBanner(BANER_POSITION.POSITION_2),
      articles,
      image: meta?.image ? getStrapiURL(meta.image.data.attributes.url) : null,
      headerData,
      footerData,
      newsletterData,
    },
  }
})

interface IHomepage {
  title: string
  baner1: IBanner
  baner2: IBanner
  articles: any[]
}

const schemaHome = {
  "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tulsio",
    "url": "https://tulsio.com/cs",
    "logo": {
        "@type": "ImageObject",
        "url": "https://tulsio.com/logo-tulsio-png.png"
    }, 
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+420732347464",
      "email": "tulsio.mkt@gmail.com"
    }

 };

const Homepage: FC<IHomepage> = ({ title, baner1, baner2, articles }) => {

  return (
    <Page>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHome) }}
        />
      </Head>
      <section>
        <Container sx={{ mb: 10 }}>
          <Typography variant={'h1'} fontSize={'50px'}>
            {title}
          </Typography>
        </Container>
        <GridTop>
          {!!articles?.length &&
            articles.map((item: any, idx: number) => {
              if (idx === 2) {
                return [
                  <div key={`banner_${idx}`}>
                    <Banner data={baner1} />
                  </div>,
                  <div key={`gridButton_${idx}`}>
                    <GridButton data={gridButtonData[0]} />
                  </div>,
                  <div key={`article_${idx}`}>
                    <ArticleShort
                      title={item.title}
                      showShortImg={item.showShortImg}
                      link={`/blog/${item?.slug}`}
                      image={item.image.data}
                      background={item.background}
                      label={item?.labels?.data.map((item: any) => item.attributes)}
                    />
                  </div>,
                  <div key={`gridButton_${idx}${1}`}>
                    <GridButton data={gridButtonData[1]} />
                  </div>,
                ]
              } else if (idx === 5) {
                return [
                  <div key={`banner_${idx}`}>
                    <Banner data={baner2} />
                  </div>,
                  <div key={`article_${idx}`}>
                    <ArticleShort
                      title={item.title}
                      showShortImg={item.showShortImg}
                      link={`/blog/${item?.slug}`}
                      image={item.image.data}
                      background={item.background}
                      label={item?.labels?.data.map((item: any) => item.attributes)}
                    />
                  </div>,
                ]
              } else {
                return (
                  <div key={`article_${idx}`}>
                    <ArticleShort
                      title={item.title}
                      showShortImg={item.showShortImg}
                      link={`/blog/${item?.slug}`}
                      image={item.image.data}
                      background={item.background}
                      label={item?.labels?.data.map((item: any) => item.attributes)}
                    />
                  </div>
                )
              }
            })}
        </GridTop>
      </section>
    </Page>
  )
}

export default Homepage