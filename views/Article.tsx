import styled from '@emotion/styled'
import { Container, Typography } from '@mui/material'
import Anchors from 'components/Anchors'
import Articles from "components/Articles";
import ArticleTop from 'components/ArticleTop';

import Author from 'components/Author'
import BannerStatic from 'components/BanerStatic'
import Button from 'components/Button'
import Content from 'components/Content'
import Image from 'components/Image'
import AudioPlayer from 'components/Player'
import PodcastLink from 'components/PodcastsLink'
import ShareButton from 'components/ShareButtons'
import { oembedTransform } from 'helpers/oembedTransform'
import Page from 'layout/Page'
import Head from 'next/head'
import { useRouter } from 'next/router'

const DOMAIN = process.env.APP_DOMAIN

const Chapter = styled.div`
  margin-bottom: 60px;
`

const Article = ({
  // @ts-expect-error: some erorr
  article,
}) => {
  const router = useRouter()

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
          {!!article.categories?.data[0]?.attributes.articles.data.length && (
            <>
              <Container maxWidth={'md'}>
                <Typography component={'h2'} variant={'h1'} marginBottom={10}>
                  {'Dále by vás mohlo zajímat'}
                </Typography>
              </Container>
              <Articles
                data={article.categories.data[0].attributes.articles.data
                  .splice(0, 4)
                  .map((item: any) => item.attributes)}
              />
            </>
          )}
        </article>
      )}
    </Page>
  )
}

export default Article
