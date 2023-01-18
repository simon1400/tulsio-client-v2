import Articles from "components/Articles";
import PageHead from "components/PageHead";
import { client } from "lib/api";
import { NextPage } from "next";
import Head from "next/head"
import { useRouter } from "next/router";
import { ICategoryPage } from "pages/[category]";
import { getAllArticles, getArticlesCategory } from "queries/articles";
import { getCategory } from "queries/category";
import { useEffect, useState } from "react";

import { changeTitle } from 'stores/slices/dataSlices'
import { useAppDispatch, useAppSelector } from "stores/hooks";

const DOMAIN = process.env.APP_DOMAIN;

const Category: NextPage<ICategoryPage> = ({
  dataTitle,
  dataDescription,
  dataArticles,
  nav
}) => {

  const router = useRouter()

  const title = useAppSelector((state) => state.data.title)
  const dispatch = useAppDispatch()

  useEffect(() => {
    changeTitle(dataTitle)
  }, [])

  const [description, setDescription] = useState(dataDescription)

  const [articles, setArticles] = useState<any[]>(dataArticles)

  const handleChange = async (link: string) => {
    router.push(link)
    if(link === 'blog') {
      const { data: articleData } = await client.query({query: getAllArticles});
      setArticles(articleData.articles.data.map((item: any) => ({...item.attributes})))
      // setTitle('Blog')
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
      // setTitle(categoryDataReq.categories.data[0]?.attributes.meta.title)
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