import Image from '../../components/Image'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {getArticle} from '../../queries/articles';
import { client } from '../../lib/api'
import { NextPage } from 'next'
// import Label from '../../components/Label'
import { useEffect } from 'react'
// import { DataStateContext } from '../../context/dataStateContext'
// import getBaners from '../../queries/baners'
import { Button, Container, Typography } from '@mui/material';
import ArticleTop from 'components/ArticleTop';
import Content from 'components/Content';
import ShareButton from 'components/ShareButtons';

const DOMAIN = process.env.APP_DOMAIN;

export async function getServerSideProps(context: any) {

  if(!context.query.article) {
    return {
      notFound: true
    }
  }

  const { data } = await client.query({
    query: getArticle,
    variables: {
      slug: context.query.article
    }
  });

  // const { data: banersData } = await client.query({
  //   query: getBaners,
  //   variables: {
  //     query: [
  //       { position: {eq: "Post"} }
  //     ]
  //   }
  // });

  // const baners = banersData.baners.data.map((item: any) => item.attributes)

  // const baner = baners[Math.floor(Math.random() * baners.length)]

  if(!data.articles.data.length) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      article: data.articles.data[0].attributes,
      // baner: baner || null
    }
  }
}

const Article: NextPage = ({
  // @ts-ignore
  article, 
  // baner
}) => {
  const router = useRouter();

  // const { dispatch } = useContext(DataStateContext)

  useEffect(() => {
    if(article) {
      // dispatch({ state: [
      //   {
      //     title: 'Blog',
      //     link: 'blog'
      //   },
      //   {
      //     title: article.categories.data[0].attributes.title,
      //     link: article.categories.data[0].attributes.slug
      //   },
      //   {
      //     title: article?.title
      //   }
      // ], type: 'breadcrumbs' })
    }
  }, [article])

  console.log(article.chapters)

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
      </Head>

      <div className="breadcrumb-wrap">
        <div className="uk-container uk-container-large">
          {/* <Breadcrumb article /> */}
        </div>
      </div>

      {!!article && <article className="blog-article">
        <Container maxWidth="xxl">
          <ArticleTop article={article} />
        </Container>

        <Container maxWidth="md">

          <Content>
            {!!article.perex.length && <Typography variant="body1" dangerouslySetInnerHTML={{__html: article.perex}} />}
            {!!article.chapters?.length && article.chapters.map((item: any, index: number) => <div key={index}>
              {!!item.title && <Typography variant="h2">{item.title}</Typography>}
              <Typography variant="body2" dangerouslySetInnerHTML={{__html: item.text}} />
              {!!item.galery?.data?.length && item.galery.data.map((img: any, indexImg: number) => <figure key={indexImg}>
                <div><Image format="&width=960" image={img} /></div>
                {!!img.caption?.length && <figcaption>{img.caption}</figcaption>}
              </figure>)}
              {!!item.button && <div className="uk-text-center uk-margin-bottom">
                <Button href={item.button.link} variant="contained">{item.button.text}</Button>
              </div>}
              {/* {!!item.baner && baner && <Banner format="&width=750" data={baner} />} */}
            </div>)}
            <ShareButton data={article} />
          </Content>

          {/* <Rating rating={2.5}/> */}
          {/* <Author name="name" description="description" publishDate="publishDate" /> */}

        </Container>

        {/* <Comments /> */}

      </article>}
    </>
  )
}

export default Article
