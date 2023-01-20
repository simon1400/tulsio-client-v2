import { NextPage } from 'next'
import Category from 'views/Category';
import Article from 'views/Article';
import { wrapper } from 'stores';
import { fetchCategoryOrArticles } from 'stores/fetch/dataFetch';
import { useDispatch, useSelector } from 'react-redux';
import { changeArticleBase, changeArticles, changeDescription, changeNav, changeTitle, selectDataState } from 'stores/slices/dataSlices';
import { IImageRoot } from 'types/image';
import { ILabelsRoot } from 'types/labels';
import { fetchCategoryNav } from 'stores/fetch/navFetch';
import { useEffect } from 'react';
import { ICategoryPage } from 'types/category';

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  async ({ params }) => {

    if(!params?.category || params?.category === 'favicon.ico') {
      return {
        notFound: true
      }
    }

    await store.dispatch(fetchCategoryOrArticles(params.category as string))

    const state = store.getState().data
    
    if(!state.articles?.length && !state.articleBase?.title?.length) {
      return {
        notFound: true
      }
    }
    
    if(state.articles.length) {
      await store.dispatch(fetchCategoryNav())
    }

    return {
      props: {
        ...store.getState().data
      }
    };
    
  }
)

const CategoryPage: NextPage<ICategoryPage> = ({
  nav,
  articles,
  articleBase,
  title,
  description
}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle(title))
    dispatch(changeDescription(description))
    dispatch(changeArticles(articles))
    dispatch(changeArticleBase(articleBase))
    dispatch(changeNav(nav))
  }, [])
  
  if(articles.length) {
    return <Category />
  }else{
    return <Article article={articleBase} />
  }

}

export default CategoryPage
