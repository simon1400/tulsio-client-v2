import ArticleShort from "components/ArticleShort";
import Head from "next/head"
import { FC } from "react";
import { client, getStrapiURL } from "../lib/api";
import getBaners from "../queries/baners";
import homepageQuery from "../queries/homepage";
import { GridTop } from "styles/grid";

enum BANER_POSITION {
  POSITION_1='Home_1',
  POSITION_2='Home_2',
}

const DOMAIN = process.env.APP_DOMAIN;

export async function getServerSideProps() {

  const { data: banersData } = await client.query({
    query: getBaners,
    variables: {
      query: [
        { position: {eq: "Home_1"} },
        { position: {eq: "Home_2"} }
      ]
    }
  });
  
  const { data: homepageData } = await client.query({ query: homepageQuery });

  const homepage = homepageData.homepage.data.attributes
  const meta = homepage?.meta
  const mainArticle = homepage.articles[0].article.data.attributes;
  let seccondArticles = homepage.articles.slice(1);
  seccondArticles = seccondArticles.map((item: any) => item.article.data.attributes)
  const baners = banersData.baners.data.map((item: any) => item.attributes)

  const filterBaners1 = baners.filter((item: any) => item.position === BANER_POSITION.POSITION_1)
  const filterBaners2 = baners.filter((item: any) => item.position === BANER_POSITION.POSITION_2)

  const baner1 = filterBaners1[Math.floor(Math.random() * filterBaners1.length)]
  const baner2 = filterBaners2[Math.floor(Math.random() * filterBaners2.length)]

  return {
    props: {
      baner1: baner1 || null,
      baner2: baner2 || null,
      mainArticle,
      seccondArticles,
      meta,
      title: meta?.title || 'Úvod',
      description: meta?.description || '',
      image: meta?.image ? getStrapiURL(meta.image) : null
    }
  }
}

interface IHomepage {
  baner1: any,
  baner2: any,
  mainArticle: any,
  seccondArticles: any,
  meta: any
}

const Homepage: FC<IHomepage> = ({
  baner1,
  baner2,
  mainArticle,
  seccondArticles,
  meta
}) => {

  // console.log('mainArticle', mainArticle)
  // console.log('seccondArticles', seccondArticles)
  // console.log('baner1', baner1)
  // console.log('baner2', baner2)

  return (
    <main id="homepage">
      <Head>
        <link rel="alternate" hrefLang="cs" href={DOMAIN+'/cs'} />
      </Head>

      {/* <ModalNewsletter title="Všechno co se ve světě CBD děje ve vašem mailu." /> */}

      <section>
        <GridTop>
          <div className="div1">
            <ArticleShort 
              title={mainArticle.title}
              link={`/blog/${mainArticle?.slug}`}
              image={mainArticle.image.data}
              background={mainArticle.background}
              label={mainArticle?.labels?.data.map((item: any) => item.attributes)}
              text={mainArticle.perex}
            />
          </div>
          {!!seccondArticles?.length && seccondArticles.map((item: any, idx: number) => <div key={idx} className={`div${idx+2}`}>
            <ArticleShort 
              title={item.title}
              link={`/blog/${item?.slug}`}
              image={item.image.data}
              background={item.background}
              label={item?.labels?.data.map((item: any) => item.attributes)}
            />
          </div>)}
        </GridTop>
      </section>
    </main>
  )
}



export default Homepage
