import {useRouter} from 'next/router'
import Head from 'next/head'
import PageHead from '../../components/PageHead'
import { FC, useEffect, useState } from 'react'
import getCategoryNav from 'queries/categoriesNav'
import { client } from 'lib/api'
import { getAllArticles, getArticlesCategory } from 'queries/articles';
import Articles from 'components/Articles'

// const APP_API = process.env.APP_API;
const DOMAIN = process.env.APP_DOMAIN;

export async function getServerSideProps(context: any) {

  if(!context.query.category) {
    return {
      notFound: true
    }
  }

  const { data: navData } = await client.query({query: getCategoryNav});

  let articles = {}, 
      dataTitle = 'Blog',
      dataDescription = 'Blog';
  
  if(context.query.category === 'blog') {
    const { data: articleData } = await client.query({query: getAllArticles});
    articles = articleData.articles.data.map((item: any) => ({...item.attributes}))
  }else{
    const { data: articleData } = await client.query({
      query: getArticlesCategory,
      variables: {
        slug: context.query.category
      }
    });
    articles = articleData.articles.data.map((item: any) => ({...item.attributes}))
  }

  const nav = navData.categories.data.map((item: any) => (
    {
      title: item.attributes.title, 
      slug: item.attributes.slug
    }
  ))

  return {
    props: {
      nav,
      dataArticles: articles,
      dataTitle,
      dataDescription
    }
  }
}

interface ICategoryNav {
  title: string;
  slug: string;
}

interface IDataArticles {

}

interface ICategoryPage {
  nav: ICategoryNav,
  dataArticles: any,
  dataTitle: string,
  dataDescription: string
}

const Category: FC<ICategoryPage> = ({
  nav,
  dataArticles,
  dataTitle,
  dataDescription
}) => {

  const router = useRouter()

  const [title, setTitle] = useState(dataTitle)
  const [description, setDescription] = useState(dataDescription)

  const [articles, setArticles] = useState<any[]>(dataArticles)

  const handleChange = async (link: string) => {
    router.push(link)
    if(link === 'blog') {
      const { data: articleData } = await client.query({query: getAllArticles});
      setArticles(articleData.articles.data.map((item: any) => ({...item.attributes})))
    }else{
      const { data } = await client.query({
        query: getArticlesCategory,
        variables: {
          slug: link
        }
      });
      setArticles(data.articles.data.map((item: any) => ({...item.attributes})))
    }
  }

  return (
    <main>
      <Head>
        <title>{title}</title>
        <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
      </Head>
      
      <PageHead 
        title={title} 
        nav={nav} 
        category
        handleChange={handleChange}
      />
        
      {!!articles?.length && <Articles data={articles} />}
        
    </main>
  )
}

export default Category
