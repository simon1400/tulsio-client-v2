import type { NextPage } from 'next'

import { client } from 'lib/api'
import globalQuery from 'queries/global'
import navFooter from 'queries/navFooter'
import navHeader from 'queries/navHeader'
import { useSelector } from 'react-redux'
import { wrapper } from 'stores'
import { fetchCategoryOrArticles } from 'stores/fetch/articlesData/dataFetch'
import { fetchNavCategory, fetchNavTag } from 'stores/fetch/navFetch'
import { selectArticleBase, selectArticles } from 'stores/slices/dataSlices'
import Article from 'views/Article'
import Category from 'views/Category'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      if (!params?.category || params?.category === 'favicon.ico') {
        return {
          notFound: true,
        }
      }

      await store.dispatch(fetchCategoryOrArticles(params.category as string, locale as string))

      const state = store.getState().data

      if (!state.articles?.length && !state.articleBase?.title?.length) {
        return {
          notFound: true,
        }
      }

      if (state.articles.length) {
        if (state.type === 'blog') await store.dispatch(fetchNavCategory(locale as string))
        if (state.type === 'tag') await store.dispatch(fetchNavTag(locale as string))
      }

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
          headerData,
          footerData,
          newsletterData,
        },
      }
    },
)

const CategoryPage: NextPage<ICategoryPage> = () => {
  const articles = useSelector(selectArticles)
  const articleBase = useSelector(selectArticleBase)

  if (articles.length) {
    return <Category />
  } else {
    return <Article article={articleBase} />
  }
}

export default CategoryPage
