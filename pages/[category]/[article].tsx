import type { NextPage } from 'next'

import { wrapper } from 'stores'
import { changeDescription, changeTitle } from 'stores/slices/dataSlices'
import { changeImage } from 'stores/slices/metaSlices'
import Article from 'views/Article'

import { client, getStrapiURL } from '../../lib/api'
import { getArticle } from '../../queries/articles'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      if (!params?.article || params?.category !== 'blog') {
        return {
          notFound: true,
        }
      }

      const { data } = await client.query({
        query: getArticle,
        variables: {
          slug: params.article,
          locale,
        },
      })

      if (!data.articles.data.length) {
        return {
          notFound: true,
        }
      }

      const article = data.articles.data[0].attributes

      store.dispatch(changeTitle(article.meta?.title || article.title))
      store.dispatch(changeDescription(article.meta?.description || ''))
      store.dispatch(
        changeImage(
          article.meta?.image.data ? getStrapiURL(article.meta.image.data.attributes.url) : '',
        ),
      )

      return {
        props: {
          article,
        },
      }
    },
)

const ArticlePage: NextPage = ({
  // @ts-expect-error: some error
  article,
}) => {
  return <Article article={article} />
}

export default ArticlePage
