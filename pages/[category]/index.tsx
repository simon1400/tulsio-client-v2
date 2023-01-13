import {useRouter} from 'next/router'
import Head from 'next/head'
import PageHead from '../../components/PageHead'
import { FC, useState } from 'react'
import {getCategory, getCategoryNav} from 'queries/category'
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

  let articles = {}, categoryData = {},
      dataTitle = 'Blog',
      dataDescription = 'Blog';
  
  if(context.query.category === 'blog') {
    const { data: articleData } = await client.query({query: getAllArticles});
    articles = articleData.articles.data.map((item: any) => ({...item.attributes}))
  }else{
    const { data: articlesData } = await client.query({
      query: getArticlesCategory,
      variables: {
        slug: context.query.category
      }
    });

    const { data: categoryDataReq } = await client.query({
      query: getCategory,
      variables: {
        slug: context.query.category
      }
    });

    articles = articlesData.articles.data.map((item: any) => ({...item.attributes}))

    dataTitle = categoryDataReq.categories.data[0]?.attributes.meta.title
    dataDescription = categoryDataReq.categories.data[0]?.attributes.meta.description

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
      dataTitle: dataTitle || null,
      dataDescription: dataDescription || null,
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
  nav: ICategoryNav
  dataArticles: any
  dataTitle: string
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
      setTitle('Blog')
      setDescription('Blog')
    }else{
      const { data } = await client.query({
        query: getArticlesCategory,
        variables: {
          slug: link
        }
      });
      const { data: categoryDataReq } = await client.query({
        query: getCategory,
        variables: {
          slug: router.query.category
        }
      });
      setArticles(data.articles.data.map((item: any) => ({...item.attributes})))
      setTitle(categoryDataReq.categories.data[0]?.attributes.meta.title)
      setDescription(categoryDataReq.categories.data[0]?.attributes.meta.description)
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
      </Head>
      
      <PageHead 
        title={title} 
        nav={nav} 
        category
        handleChange={handleChange}
      />
        
      {!!articles?.length && <Articles data={articles} />}
        
    </>
  )
}

export default Category
