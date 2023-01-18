import {getCategory, getCategoryNav} from 'queries/category'
import { client } from 'lib/api'
import { getAllArticles, getArticleBase, getArticlesCategory } from 'queries/articles';
import { NextPage } from 'next'
import Category from 'views/Category';
import Article from 'views/Article';

export async function getServerSideProps(context: any) {

  if(!context.query.category) {
    return {
      notFound: true
    }
  }

  let articles = [],
      articleBase = {},
      dataTitle = 'Blog',
      dataDescription = 'Blog';
  
  if(context.query.category === 'blog') {
    const { data: articleData } = await client.query({query: getAllArticles});
    articles = articleData.articles.data.map((item: any) => ({...item.attributes}))
  }else{

    const { data: categoryDataReq } = await client.query({
      query: getCategory,
      variables: {
        slug: context.query.category
      }
    });

    if(categoryDataReq.categories.data.length) {
      dataTitle = categoryDataReq.categories.data[0]?.attributes.meta.title
      dataDescription = categoryDataReq.categories.data[0]?.attributes.meta.description

      const { data: articlesData } = await client.query({
        query: getArticlesCategory,
        variables: {
          slug: context.query.category
        }
      });

      articles = articlesData.articles.data.map((item: any) => ({...item.attributes}))
    }else{
      const { data: articleBaseReq } = await client.query({
        query: getArticleBase,
        variables: {
          slug: context.query.category
        }
      });
      articleBase = articleBaseReq.articlesBase.data[0].attributes
    }
  }

  // @ts-ignore
  if(!articles.length && !articleBase.title.length) {
    return {
      notFound: true
    }
  }

  let nav = []

  if(articles.length) {
    const { data: navData } = await client.query({query: getCategoryNav});

    nav = navData.categories.data.map((item: any) => (
      {
        title: item.attributes.title, 
        slug: item.attributes.slug
      }
    ))
  }

  return {
    props: {
      nav,
      dataArticles: articles,
      dataTitle: dataTitle || null,
      dataDescription: dataDescription || null,
      articleBase
    }
  }
}

interface ICategoryNav {
  title: string;
  slug: string;
}

interface IDataArticles {

}

export interface ICategoryPage {
  nav: ICategoryNav
  dataArticles: any
  dataTitle: string
  dataDescription: string
  articleBase?: any
}


const CategoryPage: NextPage<ICategoryPage> = ({
  nav,
  dataArticles,
  dataTitle,
  dataDescription,
  articleBase
}) => {

  if(dataArticles.length) {
    return <Category 
      nav={nav}
      dataArticles={dataArticles}
      dataTitle={dataTitle}
      dataDescription={dataDescription}
    />
  }else{
    return <Article article={articleBase} />
  }
  

}

export default CategoryPage
