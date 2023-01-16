import Head from "next/head"
import { Button, Container, Typography } from '@mui/material';
import ArticleTop from 'components/ArticleTop';
import Content from 'components/Content';
import ShareButton from 'components/ShareButtons';
import { useRouter } from "next/router";
import Image from 'components/Image'

const DOMAIN = process.env.APP_DOMAIN;

const Article = ({
  // @ts-ignore
  article
}) => {

  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
      </Head>

      {!!article && <article className="blog-article">
        {article.image.data && <Container maxWidth="xxl">
          <ArticleTop article={article} />
        </Container>}

        <Container maxWidth="md">

          <Content smallPadding={!article.image.data}>
            {!article.image.data && <Typography variant="h1">{article.title}</Typography>}
            {!!article.perex.length && <Typography component="div" variant="body1" dangerouslySetInnerHTML={{__html: article.perex}} />}
            {!!article.chapters?.length && article.chapters.map((item: any, index: number) => <div key={index}>
              {!!item.title && <Typography variant="h2">{item.title}</Typography>}
              <Typography component="div" variant="body1" dangerouslySetInnerHTML={{__html: item.text}} />
              {!!item.galery?.data?.length && item.galery.data.map((img: any, indexImg: number) => <figure key={indexImg}>
                <div>
                  <Image format="&width=960" image={img} />
                </div>
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