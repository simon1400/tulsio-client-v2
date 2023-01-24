import Articles from "components/Articles";
import PageHead from "components/PageHead";
import Page from "layout/Page";
import { NextPage } from "next";
import Head from "next/head"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectArticles, selectDescription, selectTitle } from 'stores/slices/dataSlices'

const DOMAIN = process.env.APP_DOMAIN;

const Category: NextPage = () => {

  const router = useRouter()

  const title = useSelector(selectTitle);
  const description = useSelector(selectDescription);
  const articles = useSelector(selectArticles);
  
  return (
    <Page>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
      </Head>
      
      <PageHead 
        title={title}
        category
      />
        
      {!!articles?.length && <Articles data={articles} />}
        
    </Page>
  )
}

export default Category