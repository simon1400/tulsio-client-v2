import type { NextPage } from 'next'
import type { ICategoryPage } from 'types/category'

import { useSelector } from 'react-redux'
import { wrapper } from 'stores'
import { fetchCategoryOrArticles } from 'stores/fetch/dataFetch'
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

      return {
        props: {},
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
