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
      const relative =
        data.articles.data[0].attributes.categories.data[0].attributes.articles.data.splice(0, 4)

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
          relative,
        },
      }
    },
)

const ArticlePage = ({ article, relative }: { article: any; relative: any }) => {
  return <Article article={article} relative={relative} />
}

export default ArticlePage
