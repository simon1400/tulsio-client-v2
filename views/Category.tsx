import Articles from "components/Articles";
import PageHead from "components/PageHead";
import { NextPage } from "next";
import Head from "next/head"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArticles } from "stores/fetch/dataFetch";
import { selectDataState } from 'stores/slices/dataSlices'

const DOMAIN = process.env.APP_DOMAIN;

const Category: NextPage = () => {

  const router = useRouter()

  const data = useSelector(selectDataState);
  const dispatch = useDispatch();

  const handleChange = (link: string) => {
    router.push(link)
    // @ts-ignore
    dispatch(fetchAllArticles(link))
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
      </Head>
      
      <PageHead 
        title={data.title} 
        nav={data.nav} 
        category
        handleChange={handleChange}
      />
        
      {!!data.articles?.length && <Articles data={data.articles} />}
        
    </>
  )
}

export default Category