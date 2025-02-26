import globalQuery from 'queries/global'
import navFooter from 'queries/navFooter'
import navHeader from 'queries/navHeader'
import { wrapper } from 'stores'
import { changeCategoryTitle, changeDescription, changeTitle } from 'stores/slices/dataSlices'
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
      const relative = article.categories.data[0].attributes.articles.data.splice(0, 4)

      store.dispatch(changeTitle(article.meta?.title || article.title))
      store.dispatch(changeDescription(article.meta?.description || ''))
      store.dispatch(
        changeImage(
          article.meta?.image.data ? getStrapiURL(article.meta.image.data.attributes.url) : '',
        ),
      )
      store.dispatch(changeCategoryTitle(article.categories.data[0].attributes.title))

      const { data: headerData } = await client.query({
        query: navHeader,
        variables: {
          locale,
        },
      })

      const { data: footerData } = await client.query({
        query: navFooter,
        variables: {
          locale,
        },
      })

      const { data: newsletterData } = await client.query({
        query: globalQuery,
        variables: {
          locale,
        },
      })

      return {
        props: {
          article,
          relative,
          headerData,
          footerData,
          newsletterData,
        },
      }
    },
)

const ArticlePage = ({ article, relative }: { article: any; relative: any }) => {
  return <Article article={article} relative={relative} />
}

export default ArticlePage
