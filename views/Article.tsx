import Head from "next/head"
import { Container, Typography } from '@mui/material';
import ArticleTop from 'components/ArticleTop';
import Content from 'components/Content';
import ShareButton from 'components/ShareButtons';
import { useRouter } from "next/router";
import Image from 'components/Image'
import styled from "@emotion/styled";
import Page from "layout/Page";
import Button from "components/Button";
import BannerStatic from "components/BanerStatic";
import Anchors from "components/Anchors";
import { oembedTransform } from "helpers/oembedTransform";
import Articles from "components/Articles";
import Author from "components/Author";
import AudioPlayer from 'components/Player';
import PodcastLink from 'components/PodcastLink';

const DOMAIN = process.env.APP_DOMAIN

const Chapter = styled.div`
  margin-bottom: 60px;
`

const Article = ({ article, relative = false }: { article: any; relative?: any }) => {
  const router = useRouter()
  console.log(relative)

  return (
    <Page>
      <Head>
        <link rel={'alternate'} hrefLang={'cs'} href={`${DOMAIN}/cs${router.asPath}`} />
      </Head>

      {!!article && (
        <article className={'blog-article'}>
          {article.image?.data && <ArticleTop article={article} />}

          <Container maxWidth={'md'}>
            {article.media?.audio?.data && (
              <AudioPlayer url={article.media.audio.data.attributes.url} />
            )}
            {!!article.media?.podcastLinks?.length && (
              <PodcastLink data={article.media.podcastLinks} />
            )}

            <Content smallPadding={!article.image?.data} id={'content-article'}>
              <Anchors data={article.chapters} />
              {!article.image?.data && <Typography variant={'h1'}>{article.title}</Typography>}
              {!!article.perex?.length && (
                <Typography
                  component={'div'}
                  variant={'body1'}
                  dangerouslySetInnerHTML={{ __html: oembedTransform(article.perex) }}
                />
              )}
              {!!article.chapters?.length &&
                article.chapters.map((item: any, index: number) => (
                  <Chapter
                    key={item.idTarget}
                    id={item.idTarget ? item.idTarget.toLowerCase().split(' ').join('-') : null}
                  >
                    {!!item.title && <Typography variant={'h2'}>{item.title}</Typography>}
                    {item.text && (
                      <Typography
                        component={'div'}
                        variant={'body1'}
                        dangerouslySetInnerHTML={{ __html: oembedTransform(item.text) }}
                      />
                    )}
                    {item.banners_static.data && (
                      <BannerStatic data={item.banners_static.data.attributes} />
                    )}
                    {!!item.galery?.data?.length &&
                      item.galery.data.map((img: any) => (
                        <figure key={img}>
                          <div>
                            <Image format={'&width=960'} image={img} fill />
                          </div>
                          {!!img.caption?.length && <figcaption>{img.caption}</figcaption>}
                        </figure>
                      ))}
                    {!!item.button && (
                      <div className={'uk-text-center uk-margin-bottom'}>
                        <Button href={item.button.link} variant={'contained'}>
                          {item.button.text}
                        </Button>
                      </div>
                    )}
                  </Chapter>
                ))}
              {article.image?.data && article.categories && <ShareButton data={article} />}
              {!!article.authors?.data.length && (
                <Author data={article.authors.data[0].attributes} />
              )}
            </Content>
          </Container>
          {relative && (
            <>
              <Container maxWidth={'md'}>
                <Typography component={'h2'} variant={'h1'} marginBottom={10}>
                  {'Dále by vás mohlo zajímat'}
                </Typography>
              </Container>
              <Articles data={relative.map((item: any) => item.attributes)} />
            </>
          )}
        </article>
      )}
    </Page>
  )
}

export default Article
